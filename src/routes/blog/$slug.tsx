import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { ArrowRight, Clock, Calendar } from 'lucide-react'
import { SiteNav } from '../../components/SiteNav'
import { SiteFooter } from '../../components/SiteFooter'
import { FAQAccordion } from '../../components/FAQAccordion'
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
  body_html: string | null
  faqs: { question: string; answer: string }[]
  created_at: string
}

async function fetchPostBySlug(slug: string): Promise<DbBlogPost | null> {
  const { data } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single()
  return data ?? null
}

async function fetchRelatedPosts(currentSlug: string, category: string): Promise<DbBlogPost[]> {
  const { data } = await supabase
    .from('blog_posts')
    .select('slug,title,hero_image,category,created_at,excerpt,read_minutes')
    .eq('published', true)
    .eq('category', category)
    .neq('slug', currentSlug)
    .limit(3)
  return data ?? []
}

async function fetchLatestPosts(currentSlug: string): Promise<DbBlogPost[]> {
  const { data } = await supabase
    .from('blog_posts')
    .select('slug,title,hero_image,category,created_at,read_minutes')
    .eq('published', true)
    .neq('slug', currentSlug)
    .order('created_at', { ascending: false })
    .limit(5)
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
            { name: post.category, url: `https://toptonmedia.com/blog?category=${post.category}` },
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
        ...(post.faqs?.length ? [{
          type: 'application/ld+json',
          children: JSON.stringify(faqSchema(post.faqs)),
        }] : []),
      ],
    }
  },
  loader: async ({ params }) => {
    const post = await fetchPostBySlug(params.slug)
    if (!post) throw notFound()

    const [relatedResult, latestResult] = await Promise.allSettled([
      fetchRelatedPosts(post.slug, post.category),
      fetchLatestPosts(post.slug),
    ])

    const related = relatedResult.status === 'fulfilled' ? relatedResult.value : []
    const latest = latestResult.status === 'fulfilled' ? latestResult.value : []

    if (relatedResult.status === 'rejected') {
      console.error('Failed to load related posts:', relatedResult.reason)
    }
    if (latestResult.status === 'rejected') {
      console.error('Failed to load latest posts:', latestResult.reason)
    }

    return { post, related, latest }
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

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-NG', {
    day: 'numeric', month: 'long', year: 'numeric',
  })
}

// Convert old JSON content to HTML for legacy posts that haven't been edited yet
function contentToHtml(content: DbBlogPost['content']): string {
  if (!content?.length) return ''
  return content.map(section => {
    const heading = section.heading ? `<h2>${section.heading}</h2>` : ''
    const paras = (section.paragraphs ?? []).map(p => `<p>${p}</p>`).join('')
    const bullets = section.bullets?.length
      ? `<ul>${section.bullets.map(b => `<li>${b}</li>`).join('')}</ul>`
      : ''
    return heading + paras + bullets
  }).join('')
}

function BlogPostPage() {
  const { post, related, latest } = Route.useLoaderData()
  const service = getServiceBySlug(post.related_service)

  // Use body_html if edited via rich editor, otherwise fall back to legacy JSON content
  const articleHtml = post.body_html || contentToHtml(post.content)

  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />
      <main className="flex-1">
        {/* ─── Hero ─────────────────────────────────────────────── */}
        <section className="relative bg-charcoal overflow-hidden pt-20 pb-24">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(circle at 80% 20%, rgba(123,13,42,0.4) 0%, transparent 60%)' }}
          />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-xs text-ivory/40">
                <li><Link to="/" className="hover:text-ivory transition-colors">Home</Link></li>
                <li>/</li>
                <li><Link to="/blog" className="hover:text-ivory transition-colors">Blog</Link></li>
                <li>/</li>
                <li className="text-gold">{post.category}</li>
              </ol>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-gold">
                    {post.category}
                  </span>
                </div>
                <h1 className="font-display text-5xl sm:text-6xl font-extrabold leading-[1.1] text-ivory mb-6">
                  {post.title}
                </h1>
                <p className="text-lg text-sand/90 leading-[1.7] mb-8 max-w-xl">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-5 text-sm text-ivory/60">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    {formatDate(post.created_at)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} />
                    {post.read_minutes} min read
                  </span>
                  <span className="font-medium text-ivory/80">Topton Media</span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gold/10 rounded-3xl blur-2xl" />
                  <img
                    src={post.hero_image}
                    alt={post.title}
                    className="relative rounded-2xl w-full aspect-[4/3] object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Quick Answer ─────────────────────────────────────── */}
        {post.quick_answer && (
          <section className="bg-ivory py-16">
            <div className="max-w-4xl mx-auto px-6 lg:px-10">
              <div className="quick-answer bg-maroon/5 border-l-4 border-maroon rounded-r-xl px-6 py-5">
                <p className="font-[Space_Grotesk] text-[11px] uppercase tracking-[0.12em] text-maroon mb-2">
                  Quick Answer
                </p>
                <p className="text-charcoal/80 leading-relaxed text-[15px]">
                  {post.quick_answer}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* ─── Article body ──────────────────────────────────────── */}
        <section className={post.quick_answer ? 'bg-ivory pb-24' : 'bg-ivory py-24'}>
          <div className="max-w-4xl mx-auto px-6 lg:px-10">
            <div
              className="article-body"
              dangerouslySetInnerHTML={{ __html: articleHtml }}
            />
          </div>
        </section>

        {/* ─── Related Service CTA ──────────────────────────────── */}
        {service && (
          <section className="bg-charcoal py-24">
            <div className="max-w-4xl mx-auto px-6 lg:px-10">
              <div className="bg-cardbrown rounded-2xl p-10 text-center">
                <p className="font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-gold mb-3">
                  Need Help With This?
                </p>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-ivory mb-3">
                  Let's Talk About Your {service.name}
                </h3>
                <p className="text-ivory/60 mb-7 max-w-md mx-auto">
                  Book a free 30-minute audit and we'll show you exactly where the opportunity is.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={service.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gold to-gold-bright text-charcoal text-sm font-semibold hover:opacity-90 transition-opacity"
                  >
                    Book Free Audit <ArrowRight size={15} />
                  </a>
                  <Link
                    to="/services/$slug"
                    params={{ slug: service.slug }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gold/40 text-ivory text-sm font-semibold hover:border-gold transition-colors"
                  >
                    Explore {service.name}
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ─── FAQs ─────────────────────────────────────────────── */}
        {post.faqs?.length > 0 && (
          <section className="bg-sand/20 py-24 border-t border-sand">
            <div className="max-w-4xl mx-auto px-6 lg:px-10">
              <div className="mb-12">
                <p className="font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-maroon mb-4">FAQs</p>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal">
                  Frequently Asked Questions
                </h2>
              </div>
              <FAQAccordion faqs={post.faqs} />
            </div>
          </section>
        )}

        {/* ─── Related posts ────────────────────────────────────── */}
        {related.length > 0 && (
          <section className="bg-ivory py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
              <div className="mb-12">
                <p className="font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-maroon mb-4">Keep Reading</p>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal">
                  More on {post.category}
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {related.map(rp => (
                  <Link
                    key={rp.slug}
                    to="/blog/$slug"
                    params={{ slug: rp.slug }}
                    className="group block rounded-2xl overflow-hidden border border-sand hover:border-gold hover:shadow-lg transition-all"
                  >
                    <div className="aspect-[16/9] overflow-hidden">
                      <img src={rp.hero_image} alt={rp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    </div>
                    <div className="p-6">
                      <p className="font-[Space_Grotesk] text-[10px] uppercase tracking-wide text-maroon mb-1.5">{rp.category}</p>
                      <h3 className="font-display text-base font-semibold text-charcoal leading-snug">{rp.title}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ─── Latest posts strip (replaces sidebar) ────────────── */}
        {latest.length > 0 && (
          <section className="bg-cardbrown py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
              <div className="mb-10">
                <p className="font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-gold mb-4">Latest Posts</p>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-ivory">
                  Fresh From the Blog
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                {latest.map(lp => (
                  <Link
                    key={lp.slug}
                    to="/blog/$slug"
                    params={{ slug: lp.slug }}
                    className="group block"
                  >
                    <div className="aspect-[4/3] overflow-hidden rounded-xl mb-3">
                      <img src={lp.hero_image} alt={lp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                    </div>
                    <p className="font-[Space_Grotesk] text-[10px] uppercase tracking-wide text-gold mb-1">{lp.category}</p>
                    <h4 className="text-sm font-semibold text-ivory leading-snug group-hover:text-gold transition-colors line-clamp-2">
                      {lp.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ─── Final CTA ────────────────────────────────────────── */}
        <section className="bg-maroon py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ivory mb-4">
              Is Your Marketing Actually Working?
            </h2>
            <p className="text-ivory/70 mb-8 max-w-xl mx-auto">
              Book a free 30-minute audit and we'll walk you through exactly where the opportunity is.
            </p>
            <a
              href="https://zcal.co/i/gABtQS4_"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-gold to-gold-bright text-charcoal text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Book Free Audit <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />

      <style>{`
        .article-body h2 { font-family: var(--font-display, 'Sora', sans-serif); font-size: 1.4rem; font-weight: 700; color: #1A0E10; margin: 2rem 0 0.75rem; line-height: 1.3; }
        .article-body h3 { font-family: var(--font-display, 'Sora', sans-serif); font-size: 1.15rem; font-weight: 600; color: #1A0E10; margin: 1.5rem 0 0.5rem; }
        .article-body p { color: rgba(26,14,16,0.75); line-height: 1.8; margin-bottom: 1rem; font-size: 1.05rem; }
        .article-body ul, .article-body ol { padding-left: 1.5rem; margin-bottom: 1rem; }
        .article-body li { color: rgba(26,14,16,0.75); line-height: 1.7; margin-bottom: 0.4rem; font-size: 1rem; }
        .article-body blockquote { border-left: 4px solid #7B0D2A; padding: 0.75rem 1.25rem; margin: 1.5rem 0; background: rgba(123,13,42,0.05); border-radius: 0 0.5rem 0.5rem 0; }
        .article-body blockquote p { color: rgba(26,14,16,0.65); font-style: italic; margin: 0; }
        .article-body strong { color: #1A0E10; font-weight: 600; }
        .article-body a { color: #7B0D2A; text-decoration: underline; }
        .article-body a:hover { color: #5A0A1F; }
        .article-body code { background: rgba(123,13,42,0.08); padding: 0.15rem 0.4rem; border-radius: 0.25rem; font-size: 0.88em; color: #7B0D2A; }
        .article-body img { max-width: 100%; border-radius: 0.75rem; margin: 1.5rem 0; }
        .article-body hr { border: none; border-top: 1px solid #E8DCC4; margin: 2rem 0; }
      `}</style>
    </div>
  )
}
