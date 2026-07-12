import { createFileRoute, Link } from '@tanstack/react-router'
import { fetchGSCDataServer } from '../../lib/gsc-server'
import { useState, useEffect, useRef } from 'react'
import { supabase } from '../../lib/supabase'
import { SERVICES } from '../../lib/services'
import { ImageUpload } from '../../components/ImageUpload'
import { RichEditor } from '../../components/RichEditor'

export const Route = createFileRoute('/admin/')({
  component: AdminPage,
})

const ADMIN_PASSWORD = (import.meta.env.VITE_ADMIN_PASSWORD as string) || 'topton2026admin'

type ServiceRow = {
  id: string; slug: string; name: string; category: string; pitch: string;
  price_from: string; card_image: string; hero_image: string;
  bullets: string[]; pricing: {label:string;price:string;note?:string}[];
  faqs: {question:string;answer:string}[]; seo_title: string;
  seo_description: string; featured_on_home: boolean;
  what_it_is: string[]; who_for: string[];
  deliverables: {name:string;detail:string}[];
  result_stat: {label:string;value:string};
  pricing_note?: string;
}

function blankService(): Omit<ServiceRow,'id'> {
  return {
    slug:'', name:'', category:'', pitch:'', price_from:'',
    card_image:'', hero_image:'',
    bullets:['','',''], pricing:[{label:'',price:'',note:''}],
    faqs:[{question:'',answer:''}], seo_title:'', seo_description:'',
    featured_on_home:false, what_it_is:[''], who_for:[''],
    deliverables:[{name:'',detail:''}], result_stat:{label:'',value:''},
    pricing_note:'',
  }
}

function slugify(t:string){ return t.toLowerCase().trim().replace(/[^a-z0-9\s-]/g,'').replace(/\s+/g,'-').replace(/-+/g,'-') }

type ProductPlanRow = { label: string; price_ngn: number; price_usd: number; installments: number }

type ProductRow = {
  id: string; slug: string; name: string;
  product_type: 'course' | 'tool' | 'service';
  category: string; short_description: string; description_html: string;
  card_image: string; hero_image: string;
  price_ngn: number; price_usd: number;
  compare_at_price_ngn: number | null; compare_at_price_usd: number | null;
  plans: ProductPlanRow[]; rating: number | null; review_count: number;
  featured: boolean; active: boolean;
}

function blankProduct(): Omit<ProductRow,'id'> {
  return {
    slug:'', name:'', product_type:'course', category:'',
    short_description:'', description_html:'',
    card_image:'', hero_image:'',
    price_ngn:0, price_usd:0,
    compare_at_price_ngn:null, compare_at_price_usd:null,
    plans:[], rating:null, review_count:0,
    featured:false, active:true,
  }
}

function downloadCSV(rows: any[]) {
  if (!rows.length) { alert('No leads to export.'); return }
  const cols = ['name','email','phone','budget','service','created_at']
  const headers = ['Name','Email','Phone','Monthly Budget','Interested In','Submitted']
  const escape = (v: any) => {
    if (v == null) return ''
    const s = String(v).replace(/"/g,'""')
    return s.includes(',') || s.includes('\n') || s.includes('"')?`"${s}"`:s
  }
  const lines = [headers.join(','), ...rows.map(r => cols.map(c => escape(r[c])).join(','))]
  const blob = new Blob([lines.join('\n')], { type: 'text/csv' })
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob)
  a.download = `topton-leads-${new Date().toISOString().slice(0,10)}.csv`
  a.click()
}

function AdminPage() {
  const [authed, setAuthed] = useState(false)
  const [authChecked, setAuthChecked] = useState(false)
  const [pw, setPw] = useState('')
  const [tab, setTab] = useState<'submissions'|'blog'|'services'|'shop'|'analytics'>('submissions')
  const [submissions, setSubmissions] = useState<any[]>([])
  const [posts, setPosts] = useState<any[]>([])
  const [services, setServices] = useState<ServiceRow[]>([])
  const [products, setProducts] = useState<ProductRow[]>([])
  const [loading, setLoading] = useState(false)
  const [expandedId, setExpandedId] = useState<string|null>(null)
  const [search, setSearch] = useState('')
  const [fetchError, setFetchError] = useState('')
  // service editor
  const [editingService, setEditingService] = useState<ServiceRow|null>(null)
  const [serviceForm, setServiceForm] = useState<Omit<ServiceRow,'id'>>(blankService())
  const [serviceSaving, setServiceSaving] = useState(false)
  const [serviceError, setServiceError] = useState('')
  const [serviceSaved, setServiceSaved] = useState(false)
  const [seedingServices, setSeedingServices] = useState(false)
  const [seedMessage, setSeedMessage] = useState('')
  // product editor
  const [editingProduct, setEditingProduct] = useState<ProductRow|null>(null)
  const [productForm, setProductForm] = useState<Omit<ProductRow,'id'>>(blankProduct())
  const [productSaving, setProductSaving] = useState(false)
  const [productError, setProductError] = useState('')
  const [productSaved, setProductSaved] = useState(false)
  const [gscData, setGscData] = useState<any>(null)
  const [gscLoading, setGscLoading] = useState(false)
  const [gscDays, setGscDays] = useState(7)
  const [gscError, setGscError] = useState('')

  async function loadGSCData(days: number) {
    setGscLoading(true)
    setGscError('')
    try {
      const data = await fetchGSCDataServer({ data: days })
      setGscData(data)
    } catch (err: any) {
      setGscError(err.message || String(err))
    }
    setGscLoading(false)
  }

  useEffect(() => {
    if (typeof window !== 'undefined' && sessionStorage.getItem('topton_admin') === '1') {
      setAuthed(true)
    }
    setAuthChecked(true)
  }, [])

  function login() {
    if (pw === ADMIN_PASSWORD) { setAuthed(true); sessionStorage.setItem('topton_admin','1') }
    else alert('Wrong password')
  }

  function loadSubmissions() {
    setLoading(true); setFetchError('')
    supabase.from('contact_submissions').select('*').order('created_at',{ascending:false})
      .then(({data,error}) => {
        if (error) setFetchError(error.message)
        setSubmissions(data??[]); setLoading(false)
      }).catch(err => { setFetchError(String(err)); setLoading(false) })
  }

  function loadServices() {
    setLoading(true)
    supabase.from('services').select('*').order('name')
      .then(({data,error}) => {
        if (error || !data || data.length === 0) {
          // fall back to static services.ts data cast as display-only
          setServices([])
        } else {
          setServices(data as ServiceRow[])
        }
        setLoading(false)
      }).catch(() => { setServices([]); setLoading(false) })
  }

  async function loadProducts() {
    setLoading(true); setFetchError('')
    const { data, error } = await supabase.from('products').select('*').order('created_at',{ascending:false})
    if (error) setFetchError(error.message)
    setProducts((data as ProductRow[]) ?? [])
    setLoading(false)
  }

  async function seedServices() {
    setSeedingServices(true)
    setServiceError('')
    setSeedMessage('')
    for (const s of SERVICES) {
      const { error } = await supabase.from('services').upsert({
        slug: s.slug, name: s.name, category: s.category, pitch: s.pitch,
        price_from: s.priceFrom, booking_url: s.bookingUrl,
        card_image: s.cardImage, hero_image: s.heroImage,
        bullets: s.bullets, what_it_is: s.whatItIs,
        deliverables: s.deliverables, pricing: s.pricing,
        pricing_note: s.pricingNote ?? '', who_for: s.whoFor,
        result_stat: s.resultStat, faqs: s.faqs,
        seo_title: s.seoTitle, seo_description: s.seoDescription,
        featured_on_home: s.featuredOnHome ?? false,
      }, { onConflict: 'slug' })

      if (error) {
        console.error('Seed failed for', s.slug, error)
        setServiceError(`Failed on "${s.slug}": ${error.message}`)
        setSeedingServices(false)
        return
      }
    }
    setSeedingServices(false)
    setSeedMessage(`Imported ${SERVICES.length} services successfully.`)
    loadServices()
  }

  useEffect(() => {
    if (!authed) return
    setLoading(true)
    if (tab === 'submissions') loadSubmissions()
    else if (tab === 'analytics') {
      loadGSCData(gscDays)
      setLoading(false)
    }
    else if (tab === 'blog') {
      supabase.from('blog_posts').select('id,slug,title,category,published,created_at').order('created_at',{ascending:false})
        .then(({data,error}) => {
          if (error) setFetchError(error.message)
          setPosts(data??[]); setLoading(false)
        }).catch(err => { setFetchError(String(err)); setLoading(false) })
    } else if (tab === 'shop') {
      loadProducts()
    } else {
      loadServices()
    }
  }, [authed, tab])

  async function togglePublish(id:string,current:boolean) {
    await supabase.from('blog_posts').update({published:!current}).eq('id',id)
    setPosts(p => p.map(post => post.id===id?{...post,published:!current}:post))
  }
  async function deletePost(id:string) {
    if (!confirm('Delete this post?')) return
    await supabase.from('blog_posts').delete().eq('id',id)
    setPosts(p => p.filter(post => post.id!==id))
  }
  async function copyForLinkedIn(id:string) {
    const {data:post} = await supabase.from('blog_posts').select('*').eq('id',id).single()
    if (!post) return
    const sections = (post.content??[]) as {heading:string;paragraphs:string[];bullets?:string[]}[]
    const bodyParts:string[] = []
    bodyParts.push(post.title.toUpperCase()); bodyParts.push('')
    if (post.quick_answer) { bodyParts.push(post.quick_answer); bodyParts.push('') }
    for (const section of sections) {
      bodyParts.push(section.heading); bodyParts.push('')
      for (const para of section.paragraphs) bodyParts.push(para)
      if (section.bullets) { bodyParts.push(''); for (const b of section.bullets) bodyParts.push(`→ ${b}`) }
      bodyParts.push('')
    }
    bodyParts.push('—')
    bodyParts.push(`Read the full piece on the Topton Media blog: https://toptonmedia.com/blog/${post.slug}`)
    bodyParts.push('')
    bodyParts.push(`#${post.category.replace(/[^a-zA-Z]/g,'')} #MarketingNigeria #ToptonMedia`)
    const text = bodyParts.join('\n')
    try { await navigator.clipboard.writeText(text) } catch {
      const ta = document.createElement('textarea'); ta.value = text
      document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta)
    }
    alert('Copied! Paste this directly into a LinkedIn article or newsletter post.')
  }
  // Service CRUD
  function openNewService() {
    setEditingService({id:'new',...blankService()} as ServiceRow)
    setServiceForm(blankService())
    setServiceError('')
    setServiceSaved(false)
  }
  function openEditService(svc:ServiceRow) {
    setEditingService(svc)
    setServiceForm({
      slug:svc.slug, name:svc.name, category:svc.category, pitch:svc.pitch,
      price_from:svc.price_from, card_image:svc.card_image, hero_image:svc.hero_image,
      bullets:[...svc.bullets], pricing:[...svc.pricing], faqs:[...svc.faqs],
      seo_title:svc.seo_title, seo_description:svc.seo_description,
      featured_on_home:svc.featured_on_home, what_it_is:[...svc.what_it_is],
      who_for:[...svc.who_for], deliverables:[...svc.deliverables],
      result_stat:{...svc.result_stat}, pricing_note:svc.pricing_note??''
    })
    setServiceError('')
    setServiceSaved(false)
  }
  async function saveService() {
    if (!serviceForm.name||!serviceForm.slug) { setServiceError('Name and slug are required'); return }
    setServiceSaving(true)
    setServiceError('')
    setServiceSaved(false)
    const payload = { ...serviceForm, slug: slugify(serviceForm.slug) }
    if (editingService?.id==='new') {
      const {error} = await supabase.from('services').insert(payload)
      if (error) { setServiceError(error.message); setServiceSaving(false); return }
    } else {
      const {error} = await supabase.from('services').update(payload).eq('id',editingService!.id)
      if (error) { setServiceError(error.message); setServiceSaving(false); return }
    }
    setServiceSaving(false)
    setServiceSaved(true)
    loadServices()
  }
  async function deleteService(id:string) {
    if (!confirm('Delete this service permanently?')) return
    await supabase.from('services').delete().eq('id',id)
    setServices(s => s.filter(sv => sv.id!==id))
  }

  function sfUp<K extends keyof typeof serviceForm>(key:K, val: typeof serviceForm[K]) {
    setServiceForm(f => ({...f,[key]:val}))
  }

  // Product CRUD
  function openNewProduct() {
    setEditingProduct({id:'new',...blankProduct()} as ProductRow)
    setProductForm(blankProduct())
    setProductError('')
    setProductSaved(false)
  }
  function openEditProduct(p:ProductRow) {
    setEditingProduct(p)
    setProductForm({
      slug:p.slug, name:p.name, product_type:p.product_type, category:p.category??'',
      short_description:p.short_description??'', description_html:p.description_html??'',
      card_image:p.card_image??'', hero_image:p.hero_image??'',
      price_ngn:p.price_ngn??0, price_usd:p.price_usd??0,
      compare_at_price_ngn:p.compare_at_price_ngn, compare_at_price_usd:p.compare_at_price_usd,
      plans:Array.isArray(p.plans)?[...p.plans]:[], rating:p.rating, review_count:p.review_count??0,
      featured:p.featured??false, active:p.active??true,
    })
    setProductError('')
    setProductSaved(false)
  }
  async function saveProduct() {
    if (!productForm.name||!productForm.slug) { setProductError('Name and slug are required'); return }
    setProductSaving(true)
    setProductError('')
    setProductSaved(false)
    const payload = { ...productForm, slug: slugify(productForm.slug) }
    if (editingProduct?.id==='new') {
      const {error} = await supabase.from('products').insert(payload)
      if (error) { setProductError(error.message); setProductSaving(false); return }
    } else {
      const {error} = await supabase.from('products').update(payload).eq('id',editingProduct!.id)
      if (error) { setProductError(error.message); setProductSaving(false); return }
    }
    setProductSaving(false)
    setProductSaved(true)
    loadProducts()
  }
  async function deleteProduct(id:string) {
    if (!confirm('Delete this product permanently?')) return
    await supabase.from('products').delete().eq('id',id)
    setProducts(list => list.filter(p => p.id!==id))
  }
  async function toggleProductActive(p:ProductRow) {
    await supabase.from('products').update({active:!p.active}).eq('id',p.id)
    setProducts(list => list.map(x => x.id===p.id?{...x,active:!p.active}:x))
  }

  function pfUp<K extends keyof typeof productForm>(key:K, val: typeof productForm[K]) {
    setProductForm(f => ({...f,[key]:val}))
  }

  const filteredSubmissions = !search.trim() ? submissions : submissions.filter(s => {
    const q = search.trim().toLowerCase()
    return [s.name, s.email, s.phone, s.budget].some(v => (v??'').toString().toLowerCase().includes(q))
  })

  if (!authChecked) {
    return null
  }

  if (!authed) return (
    <div className="min-h-screen bg-charcoal flex items-center justify-center">
      <div className="bg-cardbrown border border-gold/20 rounded-2xl p-10 w-full max-w-sm text-center">
        <h1 className="font-display text-2xl font-bold text-ivory mb-6">Admin Login</h1>
        <input type="password" value={pw} onChange={e=>setPw(e.target.value)} onKeyDown={e=>e.key==='Enter'&&login()}
          placeholder="Enter password" className="w-full rounded-xl border border-gold/20 bg-charcoal px-4 py-3 text-ivory mb-4 focus:outline-none focus:border-gold" />
        <button onClick={login} className="w-full py-3 rounded-full bg-gradient-to-r from-gold to-gold-bright text-charcoal font-semibold">Login</button>
      </div>
    </div>
  )

  // ── Service editor modal ──
  if (editingService) return (
    <div className="min-h-screen bg-charcoal text-ivory">
      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-display text-2xl font-bold">{editingService.id==='new'?'New Service':'Edit Service'}</h1>
          <button onClick={()=>setEditingService(null)} className="text-sm text-ivory/50 hover:text-ivory">← Back to Admin</button>
        </div>
        {serviceError && <div className="mb-6 bg-red-900/30 border border-red-700/40 rounded-xl px-5 py-3 text-sm text-red-300">⚠ {serviceError}</div>}
        {serviceSaved && !serviceError && <div className="mb-6 bg-green-900/30 border border-green-700/40 rounded-xl px-5 py-3 text-sm text-green-300">✓ Saved successfully.</div>}
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-5">
            <SField label="Service Name *"><input value={serviceForm.name} onChange={e=>{sfUp('name',e.target.value);if(!serviceForm.slug||editingService.id==='new')sfUp('slug',slugify(e.target.value))}} className="admin-input" /></SField>
            <SField label="Slug *"><input value={serviceForm.slug} onChange={e=>sfUp('slug',slugify(e.target.value))} className="admin-input" /></SField>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <SField label="Category"><input value={serviceForm.category} onChange={e=>sfUp('category',e.target.value)} className="admin-input" placeholder="e.g. GROWTH MARKETING" /></SField>
            <SField label="Price From"><input value={serviceForm.price_from} onChange={e=>sfUp('price_from',e.target.value)} className="admin-input" placeholder="₦400,000/month" /></SField>
          </div>
          <SField label="Pitch (one-liner)"><textarea value={serviceForm.pitch} onChange={e=>sfUp('pitch',e.target.value)} rows={2} className="admin-input" /></SField>
          <ImageUpload value={serviceForm.card_image} onChange={v=>sfUp('card_image',v)} label="Card Image (used on Services listing)" />
          <ImageUpload value={serviceForm.hero_image} onChange={v=>sfUp('hero_image',v)} label="Hero Image (used on Service detail page)" />
          <SField label="Bullet Points (3 key highlights)">
            {serviceForm.bullets.map((b,i)=>(
              <div key={i} className="flex gap-2 mb-2">
                <input value={b} onChange={e=>{ const arr=[...serviceForm.bullets]; arr[i]=e.target.value; sfUp('bullets',arr) }} className="admin-input flex-1" placeholder={`Bullet ${i+1}`} />
                {serviceForm.bullets.length>1&&<button onClick={()=>sfUp('bullets',serviceForm.bullets.filter((_,j)=>j!==i))} className="text-red-400 text-xs px-2">✕</button>}
              </div>
            ))}
            <button onClick={()=>sfUp('bullets',[...serviceForm.bullets,''])} className="text-xs text-gold hover:underline">+ Add bullet</button>
          </SField>
          <SField label="What It Is (paragraphs)">
            {serviceForm.what_it_is.map((p,i)=>(
              <div key={i} className="flex gap-2 mb-2">
                <textarea value={p} onChange={e=>{ const arr=[...serviceForm.what_it_is]; arr[i]=e.target.value; sfUp('what_it_is',arr) }} rows={2} className="admin-input flex-1" placeholder={`Paragraph ${i+1}`} />
                {serviceForm.what_it_is.length>1&&<button onClick={()=>sfUp('what_it_is',serviceForm.what_it_is.filter((_,j)=>j!==i))} className="text-red-400 text-xs px-2 self-start mt-2">✕</button>}
              </div>
            ))}
            <button onClick={()=>sfUp('what_it_is',[...serviceForm.what_it_is,''])} className="text-xs text-gold hover:underline">+ Add paragraph</button>
          </SField>
          <SField label="Deliverables (what the client gets)">
            {serviceForm.deliverables.map((d,i)=>(
              <div key={i} className="bg-charcoal/50 rounded-xl p-3 mb-3 space-y-2">
                <div className="flex gap-2">
                  <input value={d.name} onChange={e=>{ const arr=[...serviceForm.deliverables]; arr[i]={...arr[i],name:e.target.value}; sfUp('deliverables',arr) }} className="admin-input flex-1" placeholder="Deliverable name" />
                  {serviceForm.deliverables.length>1&&<button onClick={()=>sfUp('deliverables',serviceForm.deliverables.filter((_,j)=>j!==i))} className="text-red-400 text-xs px-2">✕</button>}
                </div>
                <textarea value={d.detail} onChange={e=>{ const arr=[...serviceForm.deliverables]; arr[i]={...arr[i],detail:e.target.value}; sfUp('deliverables',arr) }} rows={2} className="admin-input w-full" placeholder="Detail / description" />
              </div>
            ))}
            <button onClick={()=>sfUp('deliverables',[...serviceForm.deliverables,{name:'',detail:''}])} className="text-xs text-gold hover:underline">+ Add deliverable</button>
          </SField>
          <SField label="Who It's For (comma-separated tags)">
            <input value={serviceForm.who_for.join(', ')} onChange={e=>sfUp('who_for',e.target.value.split(',').map(s=>s.trim()).filter(Boolean))} className="admin-input" placeholder="E-commerce brands, Fintechs" />
          </SField>
          <SField label="Result Stat">
            <div className="grid grid-cols-2 gap-3">
              <input value={serviceForm.result_stat.label} onChange={e=>sfUp('result_stat',{...serviceForm.result_stat,label:e.target.value})} className="admin-input" placeholder="Label e.g. Average ROAS" />
              <input value={serviceForm.result_stat.value} onChange={e=>sfUp('result_stat',{...serviceForm.result_stat,value:e.target.value})} className="admin-input" placeholder="Value e.g. 4.2x" />
            </div>
          </SField>
          <SField label="Pricing Tiers">
            {serviceForm.pricing.map((p,i)=>(
              <div key={i} className="grid grid-cols-3 gap-2 mb-2">
                <input value={p.label} onChange={e=>{ const arr=[...serviceForm.pricing]; arr[i]={...arr[i],label:e.target.value}; sfUp('pricing',arr) }} className="admin-input" placeholder="Label" />
                <input value={p.price} onChange={e=>{ const arr=[...serviceForm.pricing]; arr[i]={...arr[i],price:e.target.value}; sfUp('pricing',arr) }} className="admin-input" placeholder="Price" />
                <div className="flex gap-1">
                  <input value={p.note??''} onChange={e=>{ const arr=[...serviceForm.pricing]; arr[i]={...arr[i],note:e.target.value}; sfUp('pricing',arr) }} className="admin-input flex-1" placeholder="Note" />
                  {serviceForm.pricing.length>1&&<button onClick={()=>sfUp('pricing',serviceForm.pricing.filter((_,j)=>j!==i))} className="text-red-400 text-xs">✕</button>}
                </div>
              </div>
            ))}
            <button onClick={()=>sfUp('pricing',[...serviceForm.pricing,{label:'',price:'',note:''}])} className="text-xs text-gold hover:underline">+ Add pricing tier</button>
          </SField>
          <SField label="Pricing Note (optional)"><input value={serviceForm.pricing_note??''} onChange={e=>sfUp('pricing_note',e.target.value)} className="admin-input" placeholder="e.g. Rush printing +30%..." /></SField>
          <SField label="FAQs">
            {serviceForm.faqs.map((faq,i)=>(
              <div key={i} className="bg-charcoal/50 rounded-xl p-3 mb-3 space-y-2">
                <div className="flex gap-2">
                  <input value={faq.question} onChange={e=>{ const arr=[...serviceForm.faqs]; arr[i]={...arr[i],question:e.target.value}; sfUp('faqs',arr) }} className="admin-input flex-1" placeholder="Question" />
                  {serviceForm.faqs.length>1&&<button onClick={()=>sfUp('faqs',serviceForm.faqs.filter((_,j)=>j!==i))} className="text-red-400 text-xs">✕</button>}
                </div>
                <textarea value={faq.answer} onChange={e=>{ const arr=[...serviceForm.faqs]; arr[i]={...arr[i],answer:e.target.value}; sfUp('faqs',arr) }} rows={2} className="admin-input w-full" placeholder="Answer" />
              </div>
            ))}
            <button onClick={()=>sfUp('faqs',[...serviceForm.faqs,{question:'',answer:''}])} className="text-xs text-gold hover:underline">+ Add FAQ</button>
          </SField>
          <div className="grid grid-cols-2 gap-5">
            <SField label="SEO Title"><input value={serviceForm.seo_title} onChange={e=>sfUp('seo_title',e.target.value)} className="admin-input" /></SField>
            <SField label="Featured on Home?">
              <label className="flex items-center gap-2 mt-2 text-sm text-ivory/70 cursor-pointer">
                <input type="checkbox" checked={serviceForm.featured_on_home} onChange={e=>sfUp('featured_on_home',e.target.checked)} />
                Show on homepage
              </label>
            </SField>
          </div>
          <SField label="SEO Description"><textarea value={serviceForm.seo_description} onChange={e=>sfUp('seo_description',e.target.value)} rows={2} className="admin-input" /></SField>
          <div className="flex gap-3 pt-2">
            <button onClick={saveService} disabled={serviceSaving} className="px-6 py-3 rounded-full bg-gradient-to-r from-gold to-gold-bright text-charcoal font-semibold disabled:opacity-50">
              {serviceSaving?'Saving…':'Save Service'}
            </button>
            <button onClick={()=>setEditingService(null)} className="px-6 py-3 rounded-full border border-ivory/20 text-ivory/70">Cancel</button>
          </div>
        </div>
      </div>
      <style>{`.admin-input { width: 100%; background: #1A0E10; border: 1px solid rgba(201,168,76,0.2); border-radius: 0.75rem; padding: 0.7rem 1rem; color: #FAF6F0; font-size: 0.9rem; } .admin-input:focus { outline: none; border-color: #C9A84C; }`}</style>
    </div>
  )

  // ── Product editor modal ──
  if (editingProduct) return (
    <div className="min-h-screen bg-charcoal text-ivory">
      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-display text-2xl font-bold">{editingProduct.id==='new'?'New Product':'Edit Product'}</h1>
          <button onClick={()=>setEditingProduct(null)} className="text-sm text-ivory/50 hover:text-ivory">← Back to Admin</button>
        </div>
        {productError && <div className="mb-6 bg-red-900/30 border border-red-700/40 rounded-xl px-5 py-3 text-sm text-red-300">⚠ {productError}</div>}
        {productSaved && !productError && <div className="mb-6 bg-green-900/30 border border-green-700/40 rounded-xl px-5 py-3 text-sm text-green-300">✓ Saved successfully.</div>}
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-5">
            <SField label="Product Name *"><input value={productForm.name} onChange={e=>{pfUp('name',e.target.value);if(!productForm.slug||editingProduct.id==='new')pfUp('slug',slugify(e.target.value))}} className="admin-input" /></SField>
            <SField label="Slug *"><input value={productForm.slug} onChange={e=>pfUp('slug',slugify(e.target.value))} className="admin-input" /></SField>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <SField label="Type">
              <select value={productForm.product_type} onChange={e=>pfUp('product_type',e.target.value as ProductRow['product_type'])} className="admin-input">
                <option value="course">Course</option>
                <option value="tool">Software / Tool</option>
                <option value="service">Service</option>
              </select>
            </SField>
            <SField label="Category"><input value={productForm.category} onChange={e=>pfUp('category',e.target.value)} className="admin-input" placeholder="e.g. Marketing Courses" /></SField>
          </div>
          <SField label="Short Description (shown on shop cards)"><textarea value={productForm.short_description} onChange={e=>pfUp('short_description',e.target.value)} rows={2} className="admin-input" /></SField>
          <SField label="Full Description (shown on product page)">
            <RichEditor value={productForm.description_html} onChange={v=>pfUp('description_html',v)} placeholder="What the buyer gets…" minHeight={250} />
          </SField>
          <ImageUpload value={productForm.card_image} onChange={v=>pfUp('card_image',v)} label="Card Image (square, used on Shop listing)" />
          <ImageUpload value={productForm.hero_image} onChange={v=>pfUp('hero_image',v)} label="Hero Image (used on product detail page)" />
          <div className="grid grid-cols-2 gap-5">
            <SField label="Price ₦ (NGN)"><input type="number" value={productForm.price_ngn} onChange={e=>pfUp('price_ngn',Number(e.target.value)||0)} className="admin-input" /></SField>
            <SField label="Price $ (USD)"><input type="number" step="0.01" value={productForm.price_usd} onChange={e=>pfUp('price_usd',Number(e.target.value)||0)} className="admin-input" /></SField>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <SField label="Compare-at Price ₦ (optional — shows as strikethrough)"><input type="number" value={productForm.compare_at_price_ngn??''} onChange={e=>pfUp('compare_at_price_ngn',e.target.value===''?null:Number(e.target.value))} className="admin-input" /></SField>
            <SField label="Compare-at Price $ (optional)"><input type="number" step="0.01" value={productForm.compare_at_price_usd??''} onChange={e=>pfUp('compare_at_price_usd',e.target.value===''?null:Number(e.target.value))} className="admin-input" /></SField>
          </div>
          <SField label="Installment Plans (optional)">
            {productForm.plans.map((plan,i)=>(
              <div key={i} className="grid grid-cols-[2fr_1fr_1fr_1fr_auto] gap-2 mb-2 items-center">
                <input value={plan.label} onChange={e=>{ const arr=[...productForm.plans]; arr[i]={...arr[i],label:e.target.value}; pfUp('plans',arr) }} className="admin-input" placeholder="Label e.g. 2 payments" />
                <input type="number" value={plan.price_ngn} onChange={e=>{ const arr=[...productForm.plans]; arr[i]={...arr[i],price_ngn:Number(e.target.value)||0}; pfUp('plans',arr) }} className="admin-input" placeholder="₦ per payment" />
                <input type="number" step="0.01" value={plan.price_usd} onChange={e=>{ const arr=[...productForm.plans]; arr[i]={...arr[i],price_usd:Number(e.target.value)||0}; pfUp('plans',arr) }} className="admin-input" placeholder="$ per payment" />
                <input type="number" value={plan.installments} onChange={e=>{ const arr=[...productForm.plans]; arr[i]={...arr[i],installments:Number(e.target.value)||1}; pfUp('plans',arr) }} className="admin-input" placeholder="# payments" />
                <button onClick={()=>pfUp('plans',productForm.plans.filter((_,j)=>j!==i))} className="text-red-400 text-xs px-2">✕</button>
              </div>
            ))}
            <button onClick={()=>pfUp('plans',[...productForm.plans,{label:'',price_ngn:0,price_usd:0,installments:2}])} className="text-xs text-gold hover:underline">+ Add installment plan</button>
          </SField>
          <div className="grid grid-cols-2 gap-5">
            <SField label="Rating (0–5, optional)"><input type="number" step="0.01" min="0" max="5" value={productForm.rating??''} onChange={e=>pfUp('rating',e.target.value===''?null:Number(e.target.value))} className="admin-input" /></SField>
            <SField label="Review Count"><input type="number" value={productForm.review_count} onChange={e=>pfUp('review_count',Number(e.target.value)||0)} className="admin-input" /></SField>
          </div>
          <div className="flex gap-8">
            <label className="flex items-center gap-2 text-sm text-ivory/70 cursor-pointer">
              <input type="checkbox" checked={productForm.active} onChange={e=>pfUp('active',e.target.checked)} />
              Active (visible in shop)
            </label>
            <label className="flex items-center gap-2 text-sm text-ivory/70 cursor-pointer">
              <input type="checkbox" checked={productForm.featured} onChange={e=>pfUp('featured',e.target.checked)} />
              Featured
            </label>
          </div>
          <div className="flex gap-3 pt-2">
            <button onClick={saveProduct} disabled={productSaving} className="px-6 py-3 rounded-full bg-gradient-to-r from-gold to-gold-bright text-charcoal font-semibold disabled:opacity-50">
              {productSaving?'Saving…':'Save Product'}
            </button>
            <button onClick={()=>setEditingProduct(null)} className="px-6 py-3 rounded-full border border-ivory/20 text-ivory/70">Cancel</button>
          </div>
        </div>
      </div>
      <style>{`.admin-input { width: 100%; background: #1A0E10; border: 1px solid rgba(201,168,76,0.2); border-radius: 0.75rem; padding: 0.7rem 1rem; color: #FAF6F0; font-size: 0.9rem; } .admin-input:focus { outline: none; border-color: #C9A84C; }`}</style>
    </div>
  )

  return (
    <div className="min-h-screen bg-charcoal text-ivory">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-display text-3xl font-bold text-ivory">Topton Media Admin</h1>
          <div className="flex items-center gap-4">
            <Link to="/" className="text-sm text-gold hover:underline">View Site</Link>
            <button onClick={()=>{sessionStorage.removeItem('topton_admin');setAuthed(false)}} className="text-sm text-ivory/40 hover:text-ivory">Logout</button>
          </div>
        </div>

        <div className="flex gap-3 mb-8 items-center flex-wrap">
          {(['submissions','blog','services','shop','analytics'] as const).map(t => (
            <button key={t} onClick={()=>setTab(t)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${tab===t?'bg-gold text-charcoal':'border border-gold/30 text-ivory/70 hover:border-gold'}`}>
              {t==='submissions'?'Leads':t==='blog'?'Blog Posts':t==='services'?'Services':t==='shop'?'Shop Products':'Analytics'}
            </button>
          ))}
          {tab==='submissions'&&(
            <button onClick={()=>downloadCSV(filteredSubmissions)} className="ml-auto px-4 py-2 rounded-full text-sm font-semibold border border-gold/30 text-gold hover:border-gold transition-colors">
              ↓ Export CSV
            </button>
          )}
          {tab==='blog'&&(
            <Link to="/admin/blog/new" className="ml-auto px-5 py-2 rounded-full text-sm font-semibold bg-maroon text-ivory hover:opacity-90 transition-opacity">
              + New Post
            </Link>
          )}
          {tab==='services'&&(
            <button onClick={openNewService} className="ml-auto px-5 py-2 rounded-full text-sm font-semibold bg-maroon text-ivory hover:opacity-90 transition-opacity">
              + New Service
            </button>
          )}
          {tab==='shop'&&(
            <button onClick={openNewProduct} className="ml-auto px-5 py-2 rounded-full text-sm font-semibold bg-maroon text-ivory hover:opacity-90 transition-opacity">
              + New Product
            </button>
          )}
        </div>

        {tab==='submissions'&&!loading&&(
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <input
              value={search}
              onChange={e=>setSearch(e.target.value)}
              placeholder="Search by name, email, phone, or budget…"
              className="w-full max-w-sm rounded-full border border-gold/20 bg-cardbrown px-4 py-2 text-sm text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-gold"
            />
            <span className="text-xs text-ivory/40">{filteredSubmissions.length} of {submissions.length} leads</span>
          </div>
        )}

        {loading&&<p className="text-ivory/50">Loading…</p>}
        {!loading&&fetchError&&(
          <div className="bg-red-900/30 border border-red-700/40 rounded-xl px-5 py-3 text-sm text-red-300 mb-4">⚠ Could not load data: {fetchError}</div>
        )}

        {!loading&&tab==='submissions'&&(
          <div className="space-y-4">
            {filteredSubmissions.length===0&&<p className="text-ivory/40">No leads in this view.</p>}
            {filteredSubmissions.map(s => {
              const isExpanded = expandedId===s.id
              const isQualifier = s.source==='qualifier_form'
              return (
                <div key={s.id} className="bg-cardbrown border border-gold/10 rounded-xl p-6">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="font-semibold text-ivory text-lg">{s.name}</p>
                        {isQualifier&&<span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-blue-900/40 text-blue-300">Qualifier Lead</span>}
                      </div>
                      <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1">
                        <a href={`mailto:${s.email}`} className="text-gold text-sm hover:underline">{s.email}</a>
                        {s.phone&&<a href={`tel:${s.phone}`} className="text-ivory/60 text-sm hover:text-ivory">{s.phone}</a>}
                      </div>
                    </div>
                    <p className="text-xs text-ivory/40">{new Date(s.created_at).toLocaleString('en-NG')}</p>
                  </div>

                  <div className="mt-4 bg-gold/10 border border-gold/20 rounded-xl px-4 py-3">
                    <p className="text-xs font-semibold text-gold/80 uppercase tracking-wide mb-1">Monthly ad budget (Q1)</p>
                    <p className="text-ivory font-semibold">{s.budget || '— not answered —'}</p>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2 text-xs">
                    {s.service&&<span className="px-3 py-1 rounded-full bg-maroon/20 text-gold">{s.service}</span>}
                  </div>

                  {isQualifier&&s.message&&(
                    <button onClick={()=>setExpandedId(isExpanded?null:s.id)} className="mt-4 text-xs font-semibold text-gold hover:underline">
                      {isExpanded?'Hide full answers':'View all 11 answers →'}
                    </button>
                  )}
                  {isExpanded&&s.message&&(
                    <div className="mt-4 pt-4 border-t border-gold/10">
                      <pre className="text-xs text-ivory/70 whitespace-pre-wrap font-mono bg-charcoal/60 rounded-xl p-4">{s.message}</pre>
                    </div>
                  )}

                  <div className="mt-4 flex gap-3">
                    <a href={`mailto:${s.email}`} className="text-xs px-3 py-1.5 rounded-lg border border-gold/30 text-gold hover:border-gold transition-colors">Email</a>
                    {s.phone&&<a href={`tel:${s.phone}`} className="text-xs px-3 py-1.5 rounded-lg border border-ivory/20 text-ivory/60 hover:border-ivory/40 transition-colors">Call</a>}
                    {s.phone&&<a href={`https://wa.me/${s.phone.replace(/[^\d]/g,'')}`} target="_blank" rel="noopener noreferrer" className="text-xs px-3 py-1.5 rounded-lg border border-green-700/40 text-green-400 hover:border-green-400 transition-colors">WhatsApp</a>}
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {!loading&&tab==='blog'&&(
          <div className="space-y-3">
            {posts.length===0&&<p className="text-ivory/40">No blog posts yet.</p>}
            {posts.map(p=>(
              <div key={p.id} className="bg-cardbrown border border-gold/10 rounded-xl px-6 py-4 flex items-center gap-4 flex-wrap">
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-ivory truncate">{p.title}</p>
                  <p className="text-xs text-ivory/40 mt-0.5">{p.category} · /blog/{p.slug}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${p.published?'bg-green-900/40 text-green-400':'bg-sand/20 text-ivory/50'}`}>{p.published?'Published':'Draft'}</span>
                <button onClick={()=>togglePublish(p.id,p.published)} className="text-xs px-3 py-1.5 rounded-lg border border-gold/30 text-gold hover:border-gold transition-colors">{p.published?'Unpublish':'Publish'}</button>
                <Link to="/admin/blog/$id" params={{id:p.id}} className="text-xs px-3 py-1.5 rounded-lg border border-ivory/20 text-ivory/60 hover:border-ivory/40 transition-colors">Edit</Link>
                <button onClick={()=>copyForLinkedIn(p.id)} className="text-xs px-3 py-1.5 rounded-lg border border-blue-700/40 text-blue-300 hover:border-blue-400 transition-colors">Copy for LinkedIn</button>
                <button onClick={()=>deletePost(p.id)} className="text-xs px-3 py-1.5 rounded-lg border border-red-900/40 text-red-400 hover:border-red-400 transition-colors">Delete</button>
              </div>
            ))}
          </div>
        )}

        {!loading&&tab==='services'&&(
          <div className="space-y-3">
            {seedMessage && <div className="mb-4 bg-green-900/30 border border-green-700/40 rounded-xl px-5 py-3 text-sm text-green-300">✓ {seedMessage}</div>}
            {serviceError && services.length===0 && <div className="mb-4 bg-red-900/30 border border-red-700/40 rounded-xl px-5 py-3 text-sm text-red-300">⚠ {serviceError}</div>}
            {services.length===0?(
              <div className="text-center py-12">
                <p className="text-ivory/40 mb-4">No services in database yet.</p>
                <button onClick={seedServices} disabled={seedingServices} className="px-6 py-3 rounded-full bg-gradient-to-r from-gold to-gold-bright text-charcoal font-semibold disabled:opacity-50">
                  {seedingServices?'Importing…':'Import from services.ts (one-time setup)'}
                </button>
              </div>
            ):(
              services.map(svc=>(
                <div key={svc.id} className="bg-cardbrown border border-gold/10 rounded-xl px-6 py-4 flex items-center gap-4 flex-wrap">
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-ivory">{svc.name}</p>
                    <p className="text-xs text-ivory/40 mt-0.5">{svc.category} · /services/{svc.slug} · {svc.price_from}</p>
                  </div>
                  {svc.featured_on_home&&<span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-gold/20 text-gold">Featured</span>}
                  <a href={`/services/${svc.slug}`} target="_blank" rel="noopener noreferrer" className="text-xs px-3 py-1.5 rounded-lg border border-gold/30 text-gold hover:border-gold transition-colors">View Live</a>
                  <button onClick={()=>openEditService(svc)} className="text-xs px-3 py-1.5 rounded-lg border border-ivory/20 text-ivory/60 hover:border-ivory/40 transition-colors">Edit</button>
                  <button onClick={()=>deleteService(svc.id)} className="text-xs px-3 py-1.5 rounded-lg border border-red-900/40 text-red-400 hover:border-red-400 transition-colors">Delete</button>
                </div>
              ))
            )}
          </div>
        )}

        {!loading&&tab==='shop'&&(
          <div className="space-y-3">
            {products.length===0&&<p className="text-ivory/40">No products yet. Click "+ New Product" to add your first one.</p>}
            {products.map(p=>(
              <div key={p.id} className="bg-cardbrown border border-gold/10 rounded-xl px-6 py-4 flex items-center gap-4 flex-wrap">
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-ivory">{p.name}</p>
                  <p className="text-xs text-ivory/40 mt-0.5 capitalize">{p.product_type==='tool'?'Software':p.product_type}{p.category?` · ${p.category}`:''} · /shop/{p.slug} · ₦{(p.price_ngn??0).toLocaleString('en-NG')}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${p.active?'bg-green-900/40 text-green-400':'bg-sand/20 text-ivory/50'}`}>{p.active?'Active':'Hidden'}</span>
                {p.featured&&<span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-gold/20 text-gold">Featured</span>}
                <button onClick={()=>toggleProductActive(p)} className="text-xs px-3 py-1.5 rounded-lg border border-gold/30 text-gold hover:border-gold transition-colors">{p.active?'Hide from shop':'Show in shop'}</button>
                <a href={`/shop/${p.slug}`} target="_blank" rel="noopener noreferrer" className="text-xs px-3 py-1.5 rounded-lg border border-gold/30 text-gold hover:border-gold transition-colors">View Live</a>
                <button onClick={()=>openEditProduct(p)} className="text-xs px-3 py-1.5 rounded-lg border border-ivory/20 text-ivory/60 hover:border-ivory/40 transition-colors">Edit</button>
                <button onClick={()=>deleteProduct(p.id)} className="text-xs px-3 py-1.5 rounded-lg border border-red-900/40 text-red-400 hover:border-red-400 transition-colors">Delete</button>
              </div>
            ))}
          </div>
        )}

        {!loading&&tab==='analytics'&&(
          <div className="space-y-6">
            <div className="flex gap-3 mb-6">
              <button onClick={()=>{setGscDays(7);loadGSCData(7)}} className={`px-4 py-2 rounded-full text-sm font-semibold ${gscDays===7?'bg-gold text-charcoal':'border border-gold/30 text-ivory/70'}`}>Last 7 days</button>
              <button onClick={()=>{setGscDays(30);loadGSCData(30)}} className={`px-4 py-2 rounded-full text-sm font-semibold ${gscDays===30?'bg-gold text-charcoal':'border border-gold/30 text-ivory/70'}`}>Last 30 days</button>
              <button onClick={()=>{setGscDays(90);loadGSCData(90)}} className={`px-4 py-2 rounded-full text-sm font-semibold ${gscDays===90?'bg-gold text-charcoal':'border border-gold/30 text-ivory/70'}`}>Last 90 days</button>
            </div>

            {gscLoading&&<p className="text-ivory/50">Loading analytics…</p>}
            {gscError&&<div className="bg-red-900/30 border border-red-700/40 rounded-xl px-5 py-3 text-sm text-red-300">⚠ {gscError}</div>}

            {gscData&&!gscLoading&&(
              <div className="space-y-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="bg-cardbrown border border-gold/10 rounded-xl p-6">
                    <p className="text-ivory/60 text-sm mb-2">Impressions</p>
                    <p className="font-display text-3xl font-bold text-gold">{(gscData.impressions || 0).toLocaleString()}</p>
                  </div>
                  <div className="bg-cardbrown border border-gold/10 rounded-xl p-6">
                    <p className="text-ivory/60 text-sm mb-2">Clicks</p>
                    <p className="font-display text-3xl font-bold text-gold">{(gscData.clicks || 0).toLocaleString()}</p>
                  </div>
                  <div className="bg-cardbrown border border-gold/10 rounded-xl p-6">
                    <p className="text-ivory/60 text-sm mb-2">CTR</p>
                    <p className="font-display text-3xl font-bold text-gold">{gscData.ctr}%</p>
                  </div>
                  <div className="bg-cardbrown border border-gold/10 rounded-xl p-6">
                    <p className="text-ivory/60 text-sm mb-2">Avg Position</p>
                    <p className="font-display text-3xl font-bold text-gold">{gscData.avgPosition}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-ivory mb-4">Top Keywords</h3>
                  <div className="space-y-3">
                    {(gscData.topQueries || []).map((q: any, i: number) => (
                      <div key={i} className="bg-cardbrown border border-gold/10 rounded-xl p-4 flex items-center justify-between flex-wrap gap-4">
                        <div>
                          <p className="font-semibold text-ivory">{q.query}</p>
                          <p className="text-xs text-ivory/40 mt-1">{q.impressions} impressions · CTR {q.ctr}%</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-gold text-lg">{q.clicks} clicks</p>
                          <p className="text-xs text-ivory/40">Avg pos: {q.position}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

function SField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-medium text-ivory/80 mb-1.5">{label}</label>
      {children}
    </div>
  )
}