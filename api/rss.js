const SUPABASE_URL = 'https://ahjhwqcrxcljmenoqyex.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFoamh3cWNyeGNsam1lbm9xeWV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk3ODQ5NjEsImV4cCI6MjA5NTM2MDk2MX0.KTMkkFhmMXMR-1ATK1IwaAIfUqDHkmRgO8bjJXyZ0DY'

function escapeXml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export default async function handler(req, res) {
  let posts = []
  try {
    const r = await fetch(
      `${SUPABASE_URL}/rest/v1/blog_posts?select=slug,title,excerpt,meta_description,hero_image,category,created_at&published=eq.true&order=created_at.desc&limit=50`,
      { headers: { apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${SUPABASE_ANON_KEY}` } },
    )
    if (r.ok) posts = await r.json()
  } catch {
    posts = []
  }

  const items = posts.map(post => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>https://toptonmedia.com/blog/${post.slug}</link>
      <guid isPermaLink="true">https://toptonmedia.com/blog/${post.slug}</guid>
      <pubDate>${new Date(post.created_at).toUTCString()}</pubDate>
      <description>${escapeXml(post.excerpt || post.meta_description || '')}</description>
      <category>${escapeXml(post.category)}</category>
      <media:content url="${escapeXml(post.hero_image)}" medium="image" />
      <enclosure url="${escapeXml(post.hero_image)}" type="image/jpeg" />
    </item>`).join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>Topton Media Blog</title>
    <link>https://toptonmedia.com/blog</link>
    <atom:link href="https://toptonmedia.com/rss.xml" rel="self" type="application/rss+xml" />
    <description>Growth and performance marketing insights from Topton Media — Lagos, Nigeria.</description>
    <language>en-NG</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <image>
      <url>https://i.imgur.com/yuWmsVc.png</url>
      <title>Topton Media Blog</title>
      <link>https://toptonmedia.com/blog</link>
    </image>${items}
  </channel>
</rss>`

  res.setHeader('Content-Type', 'application/rss+xml; charset=utf-8')
  res.status(200).send(xml)
}
