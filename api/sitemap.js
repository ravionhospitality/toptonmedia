const SUPABASE_URL = 'https://ahjhwqcrxcljmenoqyex.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFoamh3cWNyeGNsam1lbm9xeWV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk3ODQ5NjEsImV4cCI6MjA5NTM2MDk2MX0.KTMkkFhmMXMR-1ATK1IwaAIfUqDHkmRgO8bjJXyZ0DY'

const SERVICES = [
  'user-acquisition', 'lead-generation', 'performance-marketing', 'web-design-cro',
  'social-media-management', 'pr-communications', 'market-activations', 'printing-services',
  'branded-gifts', 'brand-strategy', 'media-production', 'training-workshops',
  'africa-market-entry', 'email-crm', 'seo',
]

const STATIC_PAGES = ['', 'about', 'services', 'case-studies', 'team', 'blog', 'contact']

const LANDING_PAGES = [
  'advertising-agency-lagos',
  'advertising-company-lagos',
  'advertising-agencies-in-ikeja',
  'b2b-lead-generation-agency-in-nigeria',
  'marketing-agency-nigeria',
]

export default async function handler(req, res) {
  let posts = []
  try {
    const r = await fetch(
      `${SUPABASE_URL}/rest/v1/blog_posts?select=slug,updated_at,created_at&published=eq.true`,
      { headers: { apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${SUPABASE_ANON_KEY}` } },
    )
    if (r.ok) posts = await r.json()
  } catch {
    posts = []
  }

  const urls = []
  for (const p of STATIC_PAGES) {
    urls.push({ loc: `https://toptonmedia.com/${p}`, priority: p === '' ? '1.0' : '0.8' })
  }
  for (const s of SERVICES) {
    urls.push({ loc: `https://toptonmedia.com/services/${s}`, priority: '0.8' })
  }
  for (const l of LANDING_PAGES) {
    urls.push({ loc: `https://toptonmedia.com/${l}`, priority: '0.8' })
  }
  for (const post of posts) {
    urls.push({
      loc: `https://toptonmedia.com/blog/${post.slug}`,
      priority: '0.7',
      lastmod: (post.updated_at ?? post.created_at)?.slice(0, 10),
    })
  }

  const xmlItems = urls.map(u => `
  <url>
    <loc>${u.loc}</loc>
    ${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''}
    <changefreq>weekly</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${xmlItems}
</urlset>`

  res.setHeader('Content-Type', 'application/xml; charset=utf-8')
  res.status(200).send(xml)
}
