import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { SiteNav } from '../components/SiteNav'
import { SiteFooter } from '../components/SiteFooter'
import { ResultsTicker } from '../components/ResultsTicker'
import { Reveal } from '../lib/useReveal'
import { SERVICES, SERVICE_CATEGORIES } from '../lib/services'
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
  component: ServicesPage,
})

function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? SERVICES
    : SERVICES.filter(s => s.category.toLowerCase().includes(activeCategory.toLowerCase()))

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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((service, i) => {
                const Icon = SERVICE_ICONS[service.slug]
                return (
                  <Reveal key={service.slug} delay={(i % 3) * 80}>
                    <Link
                      to="/services/$slug"
                      params={{ slug: service.slug }}
                      className="group flex flex-col h-full bg-ivory border border-sand rounded-2xl p-7 hover:border-gold hover:shadow-lg transition-all"
                    >
                      <div className="flex items-start justify-between mb-5">
                        <div className="w-12 h-12 rounded-xl bg-maroon/10 flex items-center justify-center">
                          <Icon size={22} className="text-maroon" strokeWidth={1.5} />
                        </div>
                        <span className="font-[Space_Grotesk] text-[10px] uppercase tracking-[0.12em] text-charcoal/40">
                          {service.category}
                        </span>
                      </div>
                      <h2 className="font-display text-xl font-semibold text-charcoal mb-2">
                        {service.name}
                      </h2>
                      <p className="text-sm text-charcoal/60 leading-relaxed mb-5 flex-1">
                        {service.pitch}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-sand">
                        <span className="text-xs font-semibold text-maroon">From {service.priceFrom}</span>
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-gold group-hover:gap-2 transition-all">
                          Learn More <ArrowRight size={12} />
                        </span>
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
