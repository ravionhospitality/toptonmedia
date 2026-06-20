import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { useState } from 'react'
import { supabase } from '../../../lib/supabase'
import { RichEditor } from '../../../components/RichEditor'
import { ImageUpload } from '../../../components/ImageUpload'

export const Route = createFileRoute('/admin/blog/new')({
  component: NewPostPage,
})

const CATEGORIES = [
  'User Acquisition', 'Lead Generation', 'Performance Marketing', 'Web Design & CRO',
  'Social Media Management', 'PR & Communications', 'Market Activations', 'Printing Services',
  'Branded Corporate Gifts', 'Brand Strategy & Creative', 'Media Production', 'Training & Workshops',
  'Africa Market Entry', 'Email & CRM Marketing', 'SEO',
]

const SERVICE_SLUGS = [
  'user-acquisition', 'lead-generation', 'performance-marketing', 'web-design-cro',
  'social-media-management', 'pr-communications', 'market-activations', 'printing-services',
  'branded-gifts', 'brand-strategy', 'media-production', 'training-workshops',
  'africa-market-entry', 'email-crm', 'seo',
]

function slugify(text: string) {
  return text.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-')
}

function NewPostPage() {
  const navigate = useNavigate()
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    title: '', slug: '', category: CATEGORIES[0], relatedService: SERVICE_SLUGS[0],
    excerpt: '', quickAnswer: '', heroImage: '', metaTitle: '', metaDescription: '',
    keywords: '', readMinutes: 6, bodyHtml: '', faqsRaw: '', published: false,
  })

  function update<K extends keyof typeof form>(key: K, value: typeof form[K]) {
    setForm(f => ({ ...f, [key]: value }))
  }

  function handleTitleChange(title: string) {
    update('title', title)
    if (!form.slug) update('slug', slugify(title))
  }

  async function handleSave() {
    setError('')
    if (!form.title || !form.slug) { setError('Title and slug are required.'); return }
    setSaving(true)

    let faqs: unknown[] = []
    try {
      faqs = form.faqsRaw.trim() ? JSON.parse(form.faqsRaw) : []
    } catch {
      setError('FAQs JSON is invalid. Format: [{"question":"...","answer":"..."}]')
      setSaving(false)
      return
    }

    const { error: insertError } = await supabase.from('blog_posts').insert({
      slug: form.slug,
      title: form.title,
      meta_title: form.metaTitle || form.title,
      meta_description: form.metaDescription || form.excerpt,
      category: form.category,
      related_service: form.relatedService,
      excerpt: form.excerpt,
      quick_answer: form.quickAnswer,
      hero_image: form.heroImage,
      body_html: form.bodyHtml,
      faqs,
      keywords: form.keywords.split(',').map(k => k.trim()).filter(Boolean),
      read_minutes: form.readMinutes,
      published: form.published,
    })

    setSaving(false)
    if (insertError) { setError(insertError.message); return }
    navigate({ to: '/admin' })
  }

  return (
    <div className="min-h-screen bg-charcoal text-ivory">
      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-display text-2xl font-bold">New Blog Post</h1>
          <Link to="/admin" className="text-sm text-gold hover:underline">← Back to Admin</Link>
        </div>

        {error && <div className="mb-6 bg-red-900/30 border border-red-700/40 rounded-xl px-5 py-3 text-sm text-red-300">{error}</div>}

        <div className="space-y-6">
          <Field label="Title *">
            <input value={form.title} onChange={e => handleTitleChange(e.target.value)} className="admin-input" placeholder="How to Reduce App Install Cost in Nigeria" />
          </Field>

          <Field label="Slug *" hint="Auto-generated from title">
            <input value={form.slug} onChange={e => update('slug', slugify(e.target.value))} className="admin-input" />
          </Field>

          <div className="grid grid-cols-2 gap-5">
            <Field label="Category">
              <select value={form.category} onChange={e => update('category', e.target.value)} className="admin-input">
                {CATEGORIES.map(c => <option key={c}>{c}</option>)}
              </select>
            </Field>
            <Field label="Related Service">
              <select value={form.relatedService} onChange={e => update('relatedService', e.target.value)} className="admin-input">
                {SERVICE_SLUGS.map(s => <option key={s}>{s}</option>)}
              </select>
            </Field>
          </div>

          <ImageUpload value={form.heroImage} onChange={v => update('heroImage', v)} />

          <Field label="Excerpt" hint="1-2 sentences shown on the blog index">
            <textarea value={form.excerpt} onChange={e => update('excerpt', e.target.value)} rows={2} className="admin-input" />
          </Field>

          <Field label="Quick Answer" hint="Short direct answer for AI Overview / featured snippet — highly recommended">
            <textarea value={form.quickAnswer} onChange={e => update('quickAnswer', e.target.value)} rows={2} className="admin-input" placeholder="A 1-2 sentence direct answer to the question your post title asks..." />
          </Field>

          <Field label="Article Body" hint="Write freely — bold, headings, bullet lists, links, images all supported">
            <RichEditor
              value={form.bodyHtml}
              onChange={html => update('bodyHtml', html)}
              placeholder="Start writing your article here..."
              minHeight={500}
            />
          </Field>

          <Field label="FAQs (JSON)" hint='Optional. Format: [{"question": "...", "answer": "..."}]'>
            <textarea value={form.faqsRaw} onChange={e => update('faqsRaw', e.target.value)} rows={5} className="admin-input font-mono text-xs" placeholder='[{"question": "What is...?", "answer": "It is..."}]' />
          </Field>

          <div className="grid grid-cols-2 gap-5">
            <Field label="Meta Title (SEO)" hint="Defaults to post title if blank">
              <input value={form.metaTitle} onChange={e => update('metaTitle', e.target.value)} className="admin-input" />
            </Field>
            <Field label="Read Minutes">
              <input type="number" value={form.readMinutes} onChange={e => update('readMinutes', Number(e.target.value))} className="admin-input" />
            </Field>
          </div>

          <Field label="Meta Description (SEO)" hint="Defaults to excerpt if blank">
            <textarea value={form.metaDescription} onChange={e => update('metaDescription', e.target.value)} rows={2} className="admin-input" />
          </Field>

          <Field label="Keywords" hint="Comma-separated, used for SEO schema">
            <input value={form.keywords} onChange={e => update('keywords', e.target.value)} className="admin-input" placeholder="performance marketing Nigeria, paid ads Lagos" />
          </Field>

          <label className="flex items-center gap-2 text-sm text-ivory/70 cursor-pointer">
            <input type="checkbox" checked={form.published} onChange={e => update('published', e.target.checked)} />
            Publish immediately
          </label>

          <div className="flex gap-3 pt-2">
            <button onClick={handleSave} disabled={saving} className="px-6 py-3 rounded-full bg-gradient-to-r from-gold to-gold-bright text-charcoal font-semibold disabled:opacity-50">
              {saving ? 'Saving…' : 'Save Post'}
            </button>
            <Link to="/admin" className="px-6 py-3 rounded-full border border-ivory/20 text-ivory/70">Cancel</Link>
          </div>
        </div>
      </div>
      <style>{`.admin-input { width: 100%; background: #1A0E10; border: 1px solid rgba(201,168,76,0.2); border-radius: 0.75rem; padding: 0.7rem 1rem; color: #FAF6F0; font-size: 0.9rem; } .admin-input:focus { outline: none; border-color: #C9A84C; }`}</style>
    </div>
  )
}

function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-medium text-ivory/80 mb-1.5">{label}</label>
      {hint && <p className="text-xs text-ivory/40 mb-1.5">{hint}</p>}
      {children}
    </div>
  )
}
