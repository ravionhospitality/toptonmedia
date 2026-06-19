import { createClient } from '@supabase/supabase-js'
import { createRequire } from 'module'
import { readFileSync } from 'fs'

const require = createRequire(import.meta.url)

const SUPABASE_URL = 'https://ahjhwqcrxcljmenoqyex.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFoamh3cWNyeGNsam1lbm9xeWV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk3ODQ5NjEsImV4cCI6MjA5NTM2MDk2MX0.KTMkkFhmMXMR-1ATK1IwaAIfUqDHkmRgO8bjJXyZ0DY'

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

let all = []
for (let b = 1; b <= 6; b++) {
  const posts = require(`./batch${b}.cjs`)
  all = all.concat(posts)
}

console.log(`Loaded ${all.length} posts, inserting...`)

let success = 0
let failed = 0

for (const p of all) {
  const { error } = await supabase.from('blog_posts').upsert({
    slug: p.slug,
    title: p.title,
    meta_title: p.metaTitle,
    meta_description: p.metaDescription,
    category: p.category,
    related_service: p.relatedService,
    excerpt: p.excerpt,
    quick_answer: p.quickAnswer ?? null,
    hero_image: p.heroImage,
    read_minutes: p.readMinutes,
    keywords: p.keywords,
    content: p.content,
    faqs: p.faqs,
    published: true,
  }, { onConflict: 'slug' })

  if (error) {
    console.error(`FAILED: ${p.slug} — ${error.message}`)
    failed++
  } else {
    console.log(`OK: ${p.slug}`)
    success++
  }
}

console.log(`\nDone: ${success} inserted, ${failed} failed`)
