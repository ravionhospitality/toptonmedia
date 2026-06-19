import { createFileRoute, Link, Outlet, useMatchRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { SiteNav } from '../components/SiteNav'
import { SiteFooter } from '../components/SiteFooter'
import { Reveal } from '../lib/useReveal'
import { seoMeta, seoLinks, breadcrumbSchema } from '../lib/seo'
import { supabase } from '../lib/supabase'

interface DbBlogPost {
  id: string
  slug: string
  title: string
  category: string
  excerpt: string
  hero_image: string
  created_at: string
}

const CATEGORIES = [
  'All', 'User Acquisition', 'Lead Generation', 'Performance Marketing', 'Web Design & CRO',
  'Social Media Management', 'PR & Communications', 'Market Activations', 'Printing Services',
  'Branded Corporate Gifts', 'Brand Strategy & Creative', 'Media Production', 'Training & Workshops',
  'Africa Market Entry', 'Email & CRM Marketing', 'SEO',
]

async function fetchPublishedPosts(): Promise<DbBlogPost[]> {
  const { data } = await supabase
    .from('blog_posts')
    .select('id,slug,title,category,excerpt,hero_image,created_at')
    .eq('published', true)
    .order('created_at', { ascending: false })
  return data ?? []
}

export const Route = createFileRoute('/blog')({
  head: () => ({
    meta: seoMeta({
      title: 'Blog | Growth Marketing Insights from Topton Media — Lagos',
      description: 'Performance marketing insights, paid media tips, SEO guides, and growth strategy from the Topton Media team in Lagos, Nigeria.',
      path: '/blog',
    }),
    links: seoLinks('/blog'),
    scripts: [{
      type: 'application/ld+json',
      children: JSON.stringify(breadcrumbSchema([
        { name: 'Home', url: 'https://toptonmedia.com' },
        { name: 'Blog', url: 'https://toptonmedia.com/blog' },
      ])),
    }],
  }),
  loader: async () => {
    const posts = await fetchPublishedPosts()
    return { posts }
  },
  component: BlogLayout,
})

function BlogLayout() {
  const matchRoute = useMatchRoute()
  const isSlug = matchRoute({ to: '/blog/$slug', fuzzy: false })
  if (isSlug) return <Outlet />
  return <BlogPageInner />
}

function BlogPageInner() {
  const { posts } = Route.useLoaderData()
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All' ? posts : posts.filter(p => p.category === activeCategory)
  const [featured, ...rest] = filtered.length ? filtered : posts

  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />
      <main className="flex-1">
        <section className="bg-charcoal pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <Reveal>
              <p className="font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-gold mb-4">Insights</p>
              <h1 className="font-display text-5xl sm:text-6xl font-extrabold leading-[1.1] text-ivory max-w-3xl">
                Growth Marketing Thinking{' '}
                <span className="bg-gradient-to-r from-gold to-gold-bright bg-clip-text text-transparent">
                  From the Field.
                </span>
              </h1>
              <p className="mt-6 text-lg text-sand/80 max-w-2xl">
                Practical guides on paid media, SEO, branding, and growth — written from real campaigns run for Nigerian and African brands.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-ivory py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            {posts.length === 0 && (
              <p className="text-charcoal/50 text-center py-20">
                No posts published yet. Add and publish posts from the admin panel.
              </p>
            )}

            {posts.length > 0 && (
              <>
                <div className="flex flex-wrap gap-2 mb-12">
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        activeCategory === cat ? 'bg-maroon text-ivory' : 'bg-sand/60 text-charcoal/70 hover:bg-sand'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {featured && (
                  <Reveal className="mb-16">
                    <Link
                      to="/blog/$slug"
                      params={{ slug: featured.slug }}
                      className="service-card group grid grid-cols-1 lg:grid-cols-2 gap-8 bg-ivory border border-sand rounded-2xl overflow-hidden hover:border-gold hover:shadow-xl transition-all"
                    >
                      <div className="aspect-[16/9] lg:aspect-auto overflow-hidden">
                        <img src={featured.hero_image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy"  width="1400" height="788" />
                      </div>
                      <div className="p-8 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="font-[Space_Grotesk] text-[11px] uppercase tracking-widest text-maroon">{featured.category}</span>
                          <span className="text-charcoal/30">&middot;</span>
                          <time dateTime={featured.created_at} className="text-xs text-charcoal/50">
                            {new Date(featured.created_at).toLocaleDateString('en-NG', { day: 'numeric', month: 'long', year: 'numeric' })}
                          </time>
                        </div>
                        <h2 className="font-display text-2xl sm:text-3xl font-bold text-charcoal mb-4 leading-snug">{featured.title}</h2>
                        <p className="text-charcoal/60 leading-relaxed mb-6">{featured.excerpt}</p>
                        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold">Read Article &rarr;</span>
                      </div>
                    </Link>
                  </Reveal>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {rest.map((post, i) => (
                    <Reveal key={post.slug} delay={(i % 3) * 80}>
                      <Link
                        to="/blog/$slug"
                        params={{ slug: post.slug }}
                        className="service-card group bg-ivory border border-sand rounded-2xl overflow-hidden hover:border-gold hover:shadow-lg transition-all h-full flex flex-col"
                      >
                        <div className="aspect-[16/9] overflow-hidden">
                          <img src={post.hero_image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy"  width="1400" height="788" />
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="font-[Space_Grotesk] text-[11px] uppercase tracking-widest text-maroon">{post.category}</span>
                            <span className="text-charcoal/30">&middot;</span>
                            <time dateTime={post.created_at} className="text-xs text-charcoal/50">
                              {new Date(post.created_at).toLocaleDateString('en-NG', { month: 'short', year: 'numeric' })}
                            </time>
                          </div>
                          <h2 className="font-display text-lg font-semibold text-charcoal mb-3 leading-snug flex-1">{post.title}</h2>
                          <p className="text-sm text-charcoal/55 leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                          <span className="inline-flex items-center gap-1 text-xs font-semibold text-gold group-hover:gap-2 transition-all">Read More &rarr;</span>
                        </div>
                      </Link>
                    </Reveal>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
