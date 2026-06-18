import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { supabase } from '../lib/supabase'

const SERVICES = [
  'user-acquisition', 'lead-generation', 'performance-marketing', 'web-design-cro',
  'social-media-management', 'pr-communications', 'market-activations', 'printing-services',
  'branded-gifts', 'brand-strategy', 'media-production', 'training-workshops',
  'africa-market-entry', 'email-crm', 'seo',
]

const STATIC_PAGES = ['', 'about', 'services', 'case-studies', 'team', 'blog', 'contact']

const generateSitemap = createServerFn({ method: 'GET' }).handler(async () => {
  const { data: posts } = await supabase
    .from('blog_posts')
    .select('slug,updated_at,created_at')
    .eq('published', true)

  const urls: { loc: string; priority: string; lastmod?: string }[] = []

  for (const p of STATIC_PAGES) {
    urls.push({ loc: `https://toptonmedia.com/${p}`, priority: p === '' ? '1.0' : '0.8' })
  }
  for (const s of SERVICES) {
    urls.push({ loc: `https://toptonmedia.com/services/${s}`, priority: '0.8' })
  }
  for (const post of posts ?? []) {
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

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${xmlItems}
</urlset>`
})

export const Route = createFileRoute('/sitemap/xml')({
  loader: async () => {
    const xml = await generateSitemap()
    return new Response(xml, {
      headers: { 'Content-Type': 'application/xml; charset=utf-8' },
    })
  },
})
