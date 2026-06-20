import { createFileRoute, Link, Outlet, useMatchRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { SiteNav } from '../components/SiteNav'
import { SiteFooter } from '../components/SiteFooter'
import { ResultsTicker } from '../components/ResultsTicker'
import { Reveal } from '../lib/useReveal'
import { SERVICE_CATEGORIES } from '../lib/services'
import { fetchAllServices } from '../lib/services-db'
import { SERVICE_ICONS } from '../lib/service-icons'
import { seoMeta, seoLinks, breadcrumbSchema } from '../lib/seo'

export const Route = createFileRoute('/services')({
  head: () => ({
    meta: seoMeta({
      title: 'Services | Growth Marketing, Branding, Print & More — Topton Media Lagos',
      description: 'Explore all 15 services from Topton Media — paid media, SEO, web design, brand strategy, social media, PR, printing, corporate gifts, market activations, and more.',
      path: '/services',
    }),
    links: seoLinks('/services'),
    scripts: [{
      type: 'application/ld+json',
      children: JSON.stringify(breadcrumbSchema([
        { name: 'Home', url: 'https://toptonmedia.com' },
        { name: 'Services', url: 'https://toptonmedia.com/services' },
      ])),
    }],
  }),
  loader: async () => {
    const services = await fetchAllServices()
    return { services }
  },
  component: ServicesLayout,
})

function ServicesLayout() {
  const matchRoute = useMatchRoute()
  const isSlug = matchRoute({ to: '/services/$slug', fuzzy: false })
  if (isSlug) return <Outlet />
  return <ServicesPageInner />
}

function ServicesPageInner() {
  const { services } = Route.useLoaderData()
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? services
    : services.filter(s => s.category.toLowerCase().includes(activeCategory.toLowerCase()))

  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />
      <main className="flex-1">
        <section className="bg-charcoal pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <Reveal>
              <p className="font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-gold mb-4">What We Do</p>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-[64px] font-extrabold leading-[1.1] text-ivory max-w-4xl">
                Every Service Built to Drive{' '}
                <span className="bg-gradient-to-r from-gold to-gold-bright bg-clip-text text-transparent">
                  One Thing: Growth.
                </span>
              </h1>
              <p className="mt-6 text-lg text-sand/80 leading-[1.7] max-w-2xl">
                From paid media and SEO to brand identity, printing, and corporate gifting — everything we do is connected to a measurable outcome.
              </p>
            </Reveal>
          </div>
        </section>

        <ResultsTicker />

        <section className="bg-ivory py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            {/* Category filter */}
            <div className="flex flex-wrap gap-2 mb-12">
              {SERVICE_CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === cat
                      ? 'bg-maroon text-ivory'
                      : 'bg-sand/60 text-charcoal/70 hover:bg-sand'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Services grid */}
            {services.length === 0 && (
              <p className="text-charcoal/40 py-12 text-center">No services found. Check back soon.</p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((service, i) => {
                const Icon = SERVICE_ICONS[service.slug]
                return (
                  <Reveal key={service.slug} delay={(i % 3) * 80}>
                    <Link
                      to="/services/$slug"
                      params={{ slug: service.slug }}
                      className="service-card group flex flex-col h-full bg-ivory border border-sand rounded-2xl overflow-hidden hover:border-gold hover:shadow-lg transition-all"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <img
                          src={service.cardImage}
                          alt={`${service.name} services — Topton Media`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
                        <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-ivory/90 backdrop-blur-sm flex items-center justify-center">
                          {Icon && <Icon size={18} className="text-maroon" strokeWidth={1.5} />}
                        </div>
                        <span className="absolute bottom-3 left-4 font-[Space_Grotesk] text-[10px] uppercase tracking-[0.12em] text-gold">
                          {service.category}
                        </span>
                      </div>
                      <div className="p-7 flex flex-col flex-1">
                        <h2 className="font-display text-xl font-semibold text-charcoal mb-2">
                          {service.name}
                        </h2>
                        <p className="text-sm text-charcoal/60 leading-relaxed mb-5 flex-1">
                          {service.pitch}
                        </p>
                        <div className="flex items-center justify-end pt-4 border-t border-sand">
                          <span className="inline-flex items-center gap-1 text-xs font-semibold text-gold group-hover:gap-2 transition-all">
                            Read More <ArrowRight size={12} />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

        <section className="bg-maroon py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ivory mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-ivory/70 mb-8 max-w-xl mx-auto">
              Book a free 30-minute audit and we'll tell you exactly where your growth is leaking — and what to fix first.
            </p>
            <a
              href="https://zcal.co/i/gABtQS4_"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-gold to-gold-bright text-charcoal text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Book a Free Audit <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
