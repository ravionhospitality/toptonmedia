import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { ArrowRight, Clock } from 'lucide-react'
import { SiteNav } from '../../components/SiteNav'
import { SiteFooter } from '../../components/SiteFooter'
import { FAQAccordion } from '../../components/FAQAccordion'
import { Reveal } from '../../lib/useReveal'
import { getServiceBySlug } from '../../lib/services'
import { seoMeta, seoLinks, breadcrumbSchema, articleSchema, faqSchema } from '../../lib/seo'
import { supabase } from '../../lib/supabase'

interface DbBlogPost {
  id: string
  slug: string
  title: string
  meta_title: string
  meta_description: string
  category: string
  related_service: string
  excerpt: string
  quick_answer: string | null
  hero_image: string
  read_minutes: number
  keywords: string[]
  content: { heading: string; paragraphs: string[]; bullets?: string[] }[]
  faqs: { question: string; answer: string }[]
  created_at: string
}

async function fetchPostBySlug(slug: string): Promise<DbBlogPost | null> {
  try {
    const { data, error } = await supabase.from('blog_posts').select('*').eq('slug', slug).eq('published', true).single()
    if (error) return null
    return data ?? null
  } catch {
    return null
  }
}

async function fetchRelatedPosts(currentSlug: string, relatedService: string): Promise<DbBlogPost[]> {
  const { data } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('related_service', relatedService)
    .eq('published', true)
    .neq('slug', currentSlug)
    .limit(3)
  return data ?? []
}

export const Route = createFileRoute('/blog/$slug')({
  head: async ({ params }) => {
    const post = await fetchPostBySlug(params.slug)
    if (!post) return { meta: [], links: [] }
    return {
      meta: seoMeta({
        title: post.meta_title,
        description: post.meta_description,
        path: `/blog/${post.slug}`,
        image: post.hero_image,
        type: 'article',
        publishedTime: post.created_at,
      }),
      links: seoLinks(`/blog/${post.slug}`),
      scripts: [
        {
          type: 'application/ld+json',
          children: JSON.stringify(breadcrumbSchema([
            { name: 'Home', url: 'https://toptonmedia.com' },
            { name: 'Blog', url: 'https://toptonmedia.com/blog' },
            { name: post.title, url: `https://toptonmedia.com/blog/${post.slug}` },
          ])),
        },
        {
          type: 'application/ld+json',
          children: JSON.stringify(articleSchema({
            headline: post.title,
            description: post.meta_description,
            image: post.hero_image,
            datePublished: post.created_at,
            url: `https://toptonmedia.com/blog/${post.slug}`,
            keywords: post.keywords,
          })),
        },
        ...(post.faqs?.length ? [{ type: 'application/ld+json', children: JSON.stringify(faqSchema(post.faqs)) }] : []),
      ],
    }
  },
  loader: async ({ params }) => {
    const post = await fetchPostBySlug(params.slug)
    if (!post) throw notFound()
    const related = await fetchRelatedPosts(post.slug, post.related_service)
    return { post, related }
  },
  component: BlogPostPage,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-display text-4xl font-bold text-charcoal mb-4">Post Not Found</h1>
        <Link to="/blog" className="text-maroon hover:underline">Browse all posts →</Link>
      </div>
    </div>
  ),
})

function BlogPostPage() {
  const { post, related } = Route.useLoaderData()
  const service = getServiceBySlug(post.related_service)

  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />
      <main className="flex-1">
        {/* ─── Hero ─────────────────────────────────────────────── */}
        <section className="relative bg-charcoal overflow-hidden pt-24 pb-20">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(circle at 80% 20%, rgba(123,13,42,0.4) 0%, transparent 60%)' }}
          />
          <div className="relative max-w-4xl mx-auto px-6 lg:px-10">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-xs text-ivory/40 flex-wrap">
                <li><Link to="/" className="hover:text-ivory transition-colors">Home</Link></li>
                <li>/</li>
                <li><Link to="/blog" className="hover:text-ivory transition-colors">Blog</Link></li>
                <li>/</li>
                <li className="text-gold">{post.category}</li>
              </ol>
            </nav>

            <div className="flex items-center gap-3 mb-6">
              <span className="font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-gold">
                {post.category}
              </span>
              <span className="text-ivory/30">&middot;</span>
              <time dateTime={post.created_at} className="text-xs text-ivory/50">
                {new Date(post.created_at).toLocaleDateString('en-NG', { day: 'numeric', month: 'long', year: 'numeric' })}
              </time>
              <span className="text-ivory/30">&middot;</span>
              <span className="flex items-center gap-1 text-xs text-ivory/50">
                <Clock size={12} /> {post.read_minutes} min read
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl font-extrabold leading-[1.15] text-ivory mb-6">
              {post.title}
            </h1>
            <p className="article-excerpt text-lg text-sand/80 leading-[1.7]">{post.excerpt}</p>
          </div>
        </section>

        {/* ─── Hero image ───────────────────────────────────────── */}
        <section className="bg-ivory">
          <div className="max-w-4xl mx-auto px-6 lg:px-10 -mt-10 relative z-10">
            <img
              src={post.hero_image}
              alt={post.title}
              className="w-full aspect-[16/9] object-cover rounded-2xl shadow-xl"
              loading="eager"
              fetchPriority="high"
             width="1400" height="788" />
          </div>
        </section>

        {/* ─── Content ──────────────────────────────────────────── */}
        <section className="bg-ivory py-16">
          <div className="max-w-3xl mx-auto px-6 lg:px-10">
            {post.quick_answer && (
              <div className="quick-answer mb-12 bg-sand/40 border-l-4 border-maroon rounded-xl px-6 py-5">
                <p className="font-[Space_Grotesk] text-[11px] uppercase tracking-[0.12em] text-maroon mb-2">
                  Quick Answer
                </p>
                <p className="text-charcoal/80 leading-relaxed text-[15px]">
                  {post.quick_answer}
                </p>
              </div>
            )}
            <article className="space-y-10 prose-article">
              {post.content.map((section, i) => (
                <Reveal key={i} delay={Math.min(i * 40, 200)}>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-charcoal mb-4 mt-2">
                    {section.heading}
                  </h2>
                  <div className="space-y-4">
                    {section.paragraphs.map((p, pi) => (
                      <p key={pi} className="text-charcoal/75 leading-[1.85] text-[16px]">{p}</p>
                    ))}
                  </div>
                  {section.bullets && (
                    <ul className="mt-4 space-y-2.5">
                      {section.bullets.map(b => (
                        <li key={b} className="flex items-start gap-2.5 text-charcoal/70 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </Reveal>
              ))}
            </article>

            {/* Inline CTA */}
            {service && (
              <Reveal delay={150} className="mt-14 bg-charcoal rounded-2xl p-8 lg:p-10 text-center">
                <p className="font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-gold mb-3">
                  Need Help With This?
                </p>
                <h3 className="font-display text-2xl font-bold text-ivory mb-4">
                  Let's Talk About Your {service.name}
                </h3>
                <p className="text-ivory/60 mb-7 max-w-md mx-auto">
                  Book a free 30-minute audit and we'll show you exactly where the opportunity is.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <a
                    href={service.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-glow inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-gold to-gold-bright text-charcoal text-sm font-semibold hover:opacity-90 transition-opacity"
                  >
                    Book Free Audit <ArrowRight size={16} />
                  </a>
                  <Link
                    to="/services/$slug"
                    params={{ slug: service.slug }}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-gold/40 text-ivory text-sm font-semibold hover:border-gold transition-colors"
                  >
                    Explore {service.name}
                  </Link>
                </div>
              </Reveal>
            )}

            {/* FAQs */}
            {post.faqs?.length > 0 && (
              <div className="mt-16 pt-12 border-t border-sand">
                <h2 className="font-display text-2xl font-bold text-charcoal mb-8">Frequently Asked Questions</h2>
                <FAQAccordion faqs={post.faqs} />
              </div>
            )}
          </div>
        </section>

        {/* ─── Related posts ────────────────────────────────────── */}
        {related.length > 0 && (
          <section className="bg-sand/20 py-20 border-t border-sand">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-charcoal mb-10">
                More on {post.category}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {related.map(rp => (
                  <Link
                    key={rp.slug}
                    to="/blog/$slug"
                    params={{ slug: rp.slug }}
                    className="service-card group bg-ivory border border-sand rounded-2xl overflow-hidden hover:border-gold hover:shadow-lg transition-all"
                  >
                    <div className="aspect-[16/9] overflow-hidden">
                      <img src={rp.hero_image} alt={rp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy"  width="1400" height="788" />
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-base font-semibold text-charcoal leading-snug mb-2">{rp.title}</h3>
                      <span className="text-xs font-semibold text-gold">Read More &rarr;</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <SiteFooter />
    </div>
  )
}
