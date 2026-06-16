import { createFileRoute } from '@tanstack/react-router'
import { SiteNav } from '../components/SiteNav'
import { SiteFooter } from '../components/SiteFooter'
import { Reveal } from '../lib/useReveal'
import { seoMeta, seoLinks, breadcrumbSchema } from '../lib/seo'

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
  component: BlogPage,
})

const PLACEHOLDER_POSTS = [
  { title: 'Why Nigerian Brands Are Wasting 40% of Their Ad Spend (And How to Fix It)', category: 'Paid Media', date: '2026-05-20', image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&q=80', excerpt: 'Most Nigerian brands run ads without proper attribution setup. Here\'s the exact audit we run on every new account — and what we always find.' },
  { title: 'The Nigerian Fintech Playbook: How to Acquire Users at ₦1,200 CAC', category: 'User Acquisition', date: '2026-05-10', image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&q=80', excerpt: 'Fintech CAC in Nigeria doesn\'t have to be high. We break down the exact channel mix and creative strategy that keeps cost per activation under ₦1,500.' },
  { title: 'TikTok vs Meta for Nigerian E-commerce: Where to Put Your Budget in 2026', category: 'Performance Marketing', date: '2026-04-28', image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80', excerpt: 'We analysed 12 months of campaign data across both platforms for our Nigerian e-commerce clients. Here\'s what the numbers actually say.' },
  { title: 'SEO in Nigeria: Why Most Local Businesses Rank for Nothing (And What to Do)', category: 'SEO', date: '2026-04-15', image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&q=80', excerpt: 'Local SEO in Nigeria is an underserved opportunity. Most of your competitors aren\'t doing the basics. Here\'s how to outrank them in 90 days.' },
  { title: 'How to Brief a Marketing Agency (Without Wasting Everyone\'s Time)', category: 'Strategy', date: '2026-04-01', image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80', excerpt: 'A bad brief produces bad results. Here\'s the exact brief template we give every new client before we touch a campaign.' },
  { title: 'The Retargeting Playbook for Nigerian Apps: How to Win Back Lapsed Users', category: 'User Acquisition', date: '2026-03-18', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80', excerpt: 'Lapsed users are your cheapest acquisition target. Here\'s the retargeting sequence we use across Google, Meta, and TikTok to bring them back.' },
]

function BlogPage() {
  const [featured, ...rest] = PLACEHOLDER_POSTS

  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />
      <main className="flex-1">
        <section className="bg-charcoal pt-20 pb-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <Reveal>
              <p className="font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-gold mb-4">Insights</p>
              <h1 className="font-display text-5xl sm:text-6xl font-extrabold leading-[1.1] text-ivory max-w-3xl">
                Growth Marketing Thinking{' '}
                <span className="bg-gradient-to-r from-gold to-gold-bright bg-clip-text text-transparent">
                  From the Field.
                </span>
              </h1>
            </Reveal>
          </div>
        </section>

        <section className="bg-ivory py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            {/* Featured post */}
            <Reveal className="mb-16">
              <article className="group grid grid-cols-1 lg:grid-cols-2 gap-8 bg-ivory border border-sand rounded-2xl overflow-hidden hover:border-gold hover:shadow-xl transition-all">
                <div className="aspect-[16/9] lg:aspect-auto overflow-hidden">
                  <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-[Space_Grotesk] text-[11px] uppercase tracking-widest text-maroon">{featured.category}</span>
                    <span className="text-charcoal/30">·</span>
                    <time dateTime={featured.date} className="text-xs text-charcoal/50">{new Date(featured.date).toLocaleDateString('en-NG', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-charcoal mb-4 leading-snug">{featured.title}</h2>
                  <p className="text-charcoal/60 leading-relaxed mb-6">{featured.excerpt}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold">Read Article →</span>
                </div>
              </article>
            </Reveal>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((post, i) => (
                <Reveal key={post.title} delay={(i % 3) * 80}>
                  <article className="group bg-ivory border border-sand rounded-2xl overflow-hidden hover:border-gold hover:shadow-lg transition-all h-full flex flex-col">
                    <div className="aspect-[16/9] overflow-hidden">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="font-[Space_Grotesk] text-[11px] uppercase tracking-widest text-maroon">{post.category}</span>
                        <span className="text-charcoal/30">·</span>
                        <time dateTime={post.date} className="text-xs text-charcoal/50">{new Date(post.date).toLocaleDateString('en-NG', { month: 'short', year: 'numeric' })}</time>
                      </div>
                      <h2 className="font-display text-lg font-semibold text-charcoal mb-3 leading-snug flex-1">{post.title}</h2>
                      <p className="text-sm text-charcoal/55 leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-gold group-hover:gap-2 transition-all">Read More →</span>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
