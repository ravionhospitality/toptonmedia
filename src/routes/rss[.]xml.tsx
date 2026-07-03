import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { supabase } from '../lib/supabase'

function escapeXml(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

const generateRssFeed = createServerFn({ method: 'GET' }).handler(async () => {
  const { data: posts } = await supabase
    .from('blog_posts')
    .select('slug,title,excerpt,meta_description,hero_image,category,created_at')
    .eq('published', true)
    .order('created_at', { ascending: false })
    .limit(50)

  const items = (posts ?? []).map(post => `
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

  return xml
})

export const Route = createFileRoute('/rss.xml')({
  loader: async () => {
    const xml = await generateRssFeed()
    return new Response(xml, {
      headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
    })
  },
})
