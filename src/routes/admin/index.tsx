import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabase'

export const Route = createFileRoute('/admin/')({
  component: AdminPage,
})

const ADMIN_PASSWORD = 'topton2026admin'

const STATUS_OPTIONS = ['new', 'contacted', 'qualified', 'proposal_sent', 'won', 'lost'] as const
type Status = typeof STATUS_OPTIONS[number]

const STATUS_LABELS: Record<Status, string> = {
  new: 'New',
  contacted: 'Contacted',
  qualified: 'Qualified',
  proposal_sent: 'Proposal Sent',
  won: 'Won',
  lost: 'Lost',
}

const STATUS_COLORS: Record<Status, string> = {
  new: 'bg-blue-900/40 text-blue-300',
  contacted: 'bg-yellow-900/40 text-yellow-300',
  qualified: 'bg-purple-900/40 text-purple-300',
  proposal_sent: 'bg-orange-900/40 text-orange-300',
  won: 'bg-green-900/40 text-green-400',
  lost: 'bg-red-900/40 text-red-400',
}

function AdminPage() {
  const [authed, setAuthed] = useState(false)
  const [pw, setPw] = useState('')
  const [tab, setTab] = useState<'submissions' | 'blog'>('submissions')
  const [submissions, setSubmissions] = useState<any[]>([])
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [statusFilter, setStatusFilter] = useState<'all' | Status>('all')
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [noteDrafts, setNoteDrafts] = useState<Record<string, string>>({})

  function login() {
    if (pw === ADMIN_PASSWORD) setAuthed(true)
    else alert('Wrong password')
  }

  function loadSubmissions() {
    setLoading(true)
    supabase.from('contact_submissions').select('*').order('created_at', { ascending: false })
      .then(({ data }) => { setSubmissions(data ?? []); setLoading(false) })
  }

  useEffect(() => {
    if (!authed) return
    setLoading(true)
    if (tab === 'submissions') {
      loadSubmissions()
    } else {
      supabase.from('blog_posts').select('id,slug,title,category,published,created_at').order('created_at', { ascending: false })
        .then(({ data }) => { setPosts(data ?? []); setLoading(false) })
    }
  }, [authed, tab])

  async function togglePublish(id: string, current: boolean) {
    await supabase.from('blog_posts').update({ published: !current }).eq('id', id)
    setPosts(p => p.map(post => post.id === id ? { ...post, published: !current } : post))
  }

  async function deletePost(id: string) {
    if (!confirm('Delete this post?')) return
    await supabase.from('blog_posts').delete().eq('id', id)
    setPosts(p => p.filter(post => post.id !== id))
  }

  async function copyForLinkedIn(id: string) {
    const { data: post } = await supabase.from('blog_posts').select('*').eq('id', id).single()
    if (!post) return

    const sections = (post.content ?? []) as { heading: string; paragraphs: string[]; bullets?: string[] }[]

    const bodyParts: string[] = []
    bodyParts.push(post.title.toUpperCase())
    bodyParts.push('')
    if (post.quick_answer) {
      bodyParts.push(post.quick_answer)
      bodyParts.push('')
    }
    for (const section of sections) {
      bodyParts.push(section.heading)
      bodyParts.push('')
      for (const para of section.paragraphs) bodyParts.push(para)
      if (section.bullets) {
        bodyParts.push('')
        for (const b of section.bullets) bodyParts.push(`→ ${b}`)
      }
      bodyParts.push('')
    }
    bodyParts.push('—')
    bodyParts.push(`Read the full piece on the Topton Media blog: https://toptonmedia.com/blog/${post.slug}`)
    bodyParts.push('')
    bodyParts.push(`#${post.category.replace(/[^a-zA-Z]/g, '')} #MarketingNigeria #ToptonMedia`)

    const text = bodyParts.join('\n')

    try {
      await navigator.clipboard.writeText(text)
      alert('Copied! Paste this directly into a LinkedIn article or newsletter post.')
    } catch {
      // fallback for browsers without clipboard API permission
      const ta = document.createElement('textarea')
      ta.value = text
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
      alert('Copied! Paste this directly into a LinkedIn article or newsletter post.')
    }
  }

  async function updateStatus(id: string, status: Status) {
    await supabase.from('contact_submissions').update({ status }).eq('id', id)
    setSubmissions(s => s.map(sub => sub.id === id ? { ...sub, status } : sub))
  }

  async function saveNote(id: string) {
    const note = noteDrafts[id] ?? ''
    await supabase.from('contact_submissions').update({ notes: note }).eq('id', id)
    setSubmissions(s => s.map(sub => sub.id === id ? { ...sub, notes: note } : sub))
  }

  async function setFollowUpDate(id: string, date: string) {
    await supabase.from('contact_submissions').update({ follow_up_date: date || null }).eq('id', id)
    setSubmissions(s => s.map(sub => sub.id === id ? { ...sub, follow_up_date: date } : sub))
  }

  const filteredSubmissions = statusFilter === 'all'
    ? submissions
    : submissions.filter(s => (s.status ?? 'new') === statusFilter)

  const today = new Date().toISOString().slice(0, 10)
  const overdueCount = submissions.filter(s => s.follow_up_date && s.follow_up_date < today && !['won', 'lost'].includes(s.status)).length

  if (!authed) return (
    <div className="min-h-screen bg-charcoal flex items-center justify-center">
      <div className="bg-cardbrown border border-gold/20 rounded-2xl p-10 w-full max-w-sm text-center">
        <h1 className="font-display text-2xl font-bold text-ivory mb-6">Admin Login</h1>
        <input
          type="password"
          value={pw}
          onChange={e => setPw(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && login()}
          placeholder="Enter password"
          className="w-full rounded-xl border border-gold/20 bg-charcoal px-4 py-3 text-ivory mb-4 focus:outline-none focus:border-gold"
        />
        <button onClick={login} className="w-full py-3 rounded-full bg-gradient-to-r from-gold to-gold-bright text-charcoal font-semibold">
          Login
        </button>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-charcoal text-ivory">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-display text-3xl font-bold text-ivory">Topton Media Admin</h1>
          <Link to="/" className="text-sm text-gold hover:underline">View Site</Link>
        </div>

        <div className="flex gap-3 mb-8 items-center flex-wrap">
          {(['submissions', 'blog'] as const).map(t => (
            <button key={t} onClick={() => setTab(t)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${tab === t ? 'bg-gold text-charcoal' : 'border border-gold/30 text-ivory/70 hover:border-gold'}`}>
              {t === 'submissions' ? 'Contact Submissions' : 'Blog Posts'}
            </button>
          ))}
          {tab === 'submissions' && overdueCount > 0 && (
            <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-red-900/40 text-red-300">
              {overdueCount} overdue follow-up{overdueCount > 1 ? 's' : ''}
            </span>
          )}
          {tab === 'blog' && (
            <Link to="/admin/blog/new"
              className="ml-auto px-5 py-2 rounded-full text-sm font-semibold bg-maroon text-ivory hover:opacity-90 transition-opacity">
              + New Post
            </Link>
          )}
        </div>

        {tab === 'submissions' && !loading && (
          <div className="flex gap-2 mb-6 flex-wrap">
            <button
              onClick={() => setStatusFilter('all')}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold ${statusFilter === 'all' ? 'bg-ivory text-charcoal' : 'border border-ivory/20 text-ivory/60'}`}
            >
              All ({submissions.length})
            </button>
            {STATUS_OPTIONS.map(s => {
              const count = submissions.filter(sub => (sub.status ?? 'new') === s).length
              return (
                <button
                  key={s}
                  onClick={() => setStatusFilter(s)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold ${statusFilter === s ? STATUS_COLORS[s] : 'border border-ivory/20 text-ivory/60'}`}
                >
                  {STATUS_LABELS[s]} ({count})
                </button>
              )
            })}
          </div>
        )}

        {loading && <p className="text-ivory/50">Loading...</p>}

        {!loading && tab === 'submissions' && (
          <div className="space-y-4">
            {filteredSubmissions.length === 0 && <p className="text-ivory/40">No submissions in this view.</p>}
            {filteredSubmissions.map(s => {
              const status: Status = s.status ?? 'new'
              const isExpanded = expandedId === s.id
              const isOverdue = s.follow_up_date && s.follow_up_date < today && !['won', 'lost'].includes(status)
              return (
                <div key={s.id} className={`bg-cardbrown border rounded-xl p-6 ${isOverdue ? 'border-red-700/50' : 'border-gold/10'}`}>
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <p className="font-semibold text-ivory">{s.name} {s.company ? `— ${s.company}` : ''}</p>
                      <a href={`mailto:${s.email}`} className="text-gold text-sm hover:underline">{s.email}</a>
                      {s.phone && <span className="text-ivory/50 text-sm ml-3">{s.phone}</span>}
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${STATUS_COLORS[status]}`}>
                        {STATUS_LABELS[status]}
                      </span>
                      <p className="text-xs text-ivory/40">{new Date(s.created_at).toLocaleString('en-NG')}</p>
                    </div>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-3 text-xs">
                    {s.service && <span className="px-3 py-1 rounded-full bg-maroon/20 text-gold">{s.service}</span>}
                    {s.budget && <span className="px-3 py-1 rounded-full bg-gold/10 text-ivory/70">{s.budget}</span>}
                    {isOverdue && <span className="px-3 py-1 rounded-full bg-red-900/40 text-red-300">Follow-up overdue</span>}
                  </div>

                  {s.message && <p className="mt-3 text-sm text-ivory/60 leading-relaxed">{s.message}</p>}

                  <button
                    onClick={() => setExpandedId(isExpanded ? null : s.id)}
                    className="mt-4 text-xs font-semibold text-gold hover:underline"
                  >
                    {isExpanded ? 'Hide CRM details' : 'Manage status & notes →'}
                  </button>

                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-gold/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-ivory/60 mb-1.5">Status</label>
                        <select
                          value={status}
                          onChange={e => updateStatus(s.id, e.target.value as Status)}
                          className="w-full rounded-lg border border-gold/20 bg-charcoal px-3 py-2 text-sm text-ivory"
                        >
                          {STATUS_OPTIONS.map(opt => (
                            <option key={opt} value={opt}>{STATUS_LABELS[opt]}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-ivory/60 mb-1.5">Follow-up date</label>
                        <input
                          type="date"
                          value={s.follow_up_date ?? ''}
                          onChange={e => setFollowUpDate(s.id, e.target.value)}
                          className="w-full rounded-lg border border-gold/20 bg-charcoal px-3 py-2 text-sm text-ivory"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-xs font-medium text-ivory/60 mb-1.5">Internal notes</label>
                        <textarea
                          value={noteDrafts[s.id] ?? s.notes ?? ''}
                          onChange={e => setNoteDrafts(d => ({ ...d, [s.id]: e.target.value }))}
                          rows={3}
                          className="w-full rounded-lg border border-gold/20 bg-charcoal px-3 py-2 text-sm text-ivory"
                          placeholder="e.g. Called 12 June, interested in Growth package, follow up after their board meeting"
                        />
                        <button
                          onClick={() => saveNote(s.id)}
                          className="mt-2 px-4 py-1.5 rounded-lg text-xs font-semibold bg-gold/20 text-gold hover:bg-gold/30 transition-colors"
                        >
                          Save Note
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}

        {!loading && tab === 'blog' && (
          <div className="space-y-3">
            {posts.length === 0 && <p className="text-ivory/40">No blog posts yet. Click New Post to add one.</p>}
            {posts.map(p => (
              <div key={p.id} className="bg-cardbrown border border-gold/10 rounded-xl px-6 py-4 flex items-center gap-4 flex-wrap">
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-ivory truncate">{p.title}</p>
                  <p className="text-xs text-ivory/40 mt-0.5">{p.category} · /blog/{p.slug}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${p.published ? 'bg-green-900/40 text-green-400' : 'bg-sand/20 text-ivory/50'}`}>
                  {p.published ? 'Published' : 'Draft'}
                </span>
                <button onClick={() => togglePublish(p.id, p.published)}
                  className="text-xs px-3 py-1.5 rounded-lg border border-gold/30 text-gold hover:border-gold transition-colors">
                  {p.published ? 'Unpublish' : 'Publish'}
                </button>
                <Link to="/admin/blog/$id" params={{ id: p.id }}
                  className="text-xs px-3 py-1.5 rounded-lg border border-ivory/20 text-ivory/60 hover:border-ivory/40 transition-colors">
                  Edit
                </Link>
                <button
                  onClick={() => copyForLinkedIn(p.id)}
                  className="text-xs px-3 py-1.5 rounded-lg border border-blue-700/40 text-blue-300 hover:border-blue-400 transition-colors"
                >
                  Copy for LinkedIn
                </button>
                <button onClick={() => deletePost(p.id)}
                  className="text-xs px-3 py-1.5 rounded-lg border border-red-900/40 text-red-400 hover:border-red-400 transition-colors">
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
