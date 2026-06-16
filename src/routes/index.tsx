import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, ArrowDown, Check } from 'lucide-react'
import { SiteNav } from '../components/SiteNav'
import { SiteFooter } from '../components/SiteFooter'
import { ResultsTicker } from '../components/ResultsTicker'
import { DashboardCard } from '../components/DashboardCard'
import { StatCounter } from '../components/StatCounter'
import { Reveal } from '../lib/useReveal'
import { SERVICES } from '../lib/services'
import { SERVICE_ICONS } from '../lib/service-icons'
import { STATS, HOW_WE_WORK, RETAINER_PACKAGES, CONTACT } from '../lib/site-data'
import { seoMeta, seoLinks } from '../lib/seo'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: seoMeta({
      title: 'Topton Media | Growth & Performance Marketing Agency in Lagos, Nigeria',
      description: 'Topton Media is a performance marketing agency in Lagos that turns ad spend into measurable revenue. Paid media, SEO, funnels, branding, printing and corporate gifting.',
      path: '/',
    }),
    links: seoLinks('/'),
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Topton Media',
          url: 'https://toptonmedia.com',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://toptonmedia.com/search?q={search_term_string}',
            'query-input': 'required name=search_term_string',
          },
        }),
      },
    ],
  }),
  component: HomePage,
})

const LOGO_PLACEHOLDERS = Array.from({ length: 8 }, (_, i) => `Brand ${i + 1}`)

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />

      <main className="flex-1">
        {/* ─── Hero ─────────────────────────────────────────────── */}
        <section className="relative bg-charcoal overflow-hidden">
          {/* Radial maroon glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 75% 30%, rgba(123,13,42,0.45) 0%, transparent 55%)',
            }}
          />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-20 lg:pt-24 lg:pb-28">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              <div className="lg:col-span-7">
                <p className="font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-gold mb-6">
                  Growth &amp; Performance Marketing &mdash; Lagos, Nigeria
                </p>
                <h1 className="font-display text-5xl sm:text-6xl lg:text-[64px] font-extrabold leading-[1.1] tracking-tight text-ivory">
                  We Don&rsquo;t Run Campaigns.
                  <br />
                  <span className="bg-gradient-to-r from-gold to-gold-bright bg-clip-text text-transparent">
                    We Build Revenue Machines.
                  </span>
                </h1>
                <p className="mt-6 text-lg text-sand/90 leading-[1.7] max-w-xl">
                  Topton Media helps ambitious brands turn marketing spend into
                  measurable, scalable revenue &mdash; through paid media, data
                  strategy, full-funnel execution, and brand production.
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-gold to-gold-bright text-charcoal text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity"
                  >
                    Start Growing Today
                    <ArrowRight size={16} />
                  </Link>
                  <a
                    href="#services"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-gold/40 text-ivory text-sm font-semibold tracking-wide hover:border-gold transition-colors"
                  >
                    See Our Services
                    <ArrowDown size={16} />
                  </a>
                </div>
                <p className="mt-8 text-sm text-ivory/40">
                  Trusted by 40+ brands &middot; Lagos &middot; Abuja &middot; International
                </p>
              </div>

              <div className="lg:col-span-5">
                <DashboardCard />
              </div>
            </div>
          </div>
        </section>

        {/* ─── Ticker ───────────────────────────────────────────── */}
        <ResultsTicker />

        {/* ─── Logos bar ────────────────────────────────────────── */}
        <section className="bg-ivory py-14">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <p className="font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-charcoal/40 text-center mb-8">
              Brands That Trust Us
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 items-center">
              {LOGO_PLACEHOLDERS.map(name => (
                <div
                  key={name}
                  className="h-12 rounded-lg bg-sand/60 flex items-center justify-center grayscale opacity-60"
                >
                  <span className="font-display text-xs font-semibold text-charcoal/40">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Services marketplace preview ────────────────────── */}
        <section id="services" className="bg-charcoal py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <Reveal className="max-w-2xl mb-16">
              <p className="font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-gold mb-4">
                What We Do
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-ivory">
                Every Service Built to Drive One Thing: Growth
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((service, i) => {
                const Icon = SERVICE_ICONS[service.slug]
                return (
                  <Reveal key={service.slug} delay={(i % 3) * 80}>
                    <Link
                      to="/services/$slug"
                      params={{ slug: service.slug }}
                      className="group block h-full bg-cardbrown border border-gold/10 rounded-2xl p-6 hover:border-gold/40 transition-colors"
                    >
                      <Icon size={26} className="text-gold mb-4" strokeWidth={1.5} />
                      <h3 className="font-display text-lg font-semibold text-ivory mb-2">
                        {service.name}
                      </h3>
                      <p className="text-sm text-ivory/55 leading-relaxed mb-4">
                        {service.pitch}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold group-hover:gap-2.5 transition-all">
                        Learn More
                        <ArrowRight size={13} />
                      </span>
                    </Link>
                  </Reveal>
                )
              })}
            </div>

            <div className="mt-12 text-center">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-gold/40 text-ivory text-sm font-semibold tracking-wide hover:border-gold transition-colors"
              >
                Browse All Services
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* ─── Stats ────────────────────────────────────────────── */}
        <section
          className="relative py-24 overflow-hidden"
          style={{ backgroundColor: 'var(--color-maroon-deep)' }}
        >
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27100%27 height=%27100%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.9%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27/%3E%3C/svg%3E")',
            }}
          />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-10 text-center">
            <Reveal>
              <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-ivory mb-16">
                Numbers That Actually Matter
              </h2>
            </Reveal>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {STATS.map(stat => (
                <StatCounter key={stat.label} value={stat.value} label={stat.label} />
              ))}
            </div>
            <Reveal delay={200} className="mt-14">
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-gold to-gold-bright text-charcoal text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity"
              >
                See Case Studies
                <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
        </section>

        {/* ─── How we work ──────────────────────────────────────── */}
        <section className="bg-ivory py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <Reveal className="text-center max-w-2xl mx-auto mb-16">
              <p className="font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-maroon mb-4">
                How We Work
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-charcoal">
                A System, Not a Service
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {HOW_WE_WORK.map((step, i) => (
                <Reveal key={step.step} delay={i * 100}>
                  <div className="relative pt-8 border-t-2 border-sand h-full">
                    <span className="absolute -top-4 left-0 font-display text-3xl font-extrabold text-gold/30">
                      0{step.step}
                    </span>
                    <h3 className="font-display text-xl font-semibold text-charcoal mb-3 mt-2">
                      {step.title}
                    </h3>
                    <p className="text-charcoal/60 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Retainer packages ────────────────────────────────── */}
        <section className="bg-cardbrown py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <Reveal className="text-center max-w-2xl mx-auto mb-16">
              <p className="font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-gold mb-4">
                Pricing
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-ivory">
                Choose Your Growth Level
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {RETAINER_PACKAGES.map((pkg, i) => (
                <Reveal key={pkg.name} delay={i * 80}>
                  <div
                    className={`h-full flex flex-col rounded-2xl p-6 border ${
                      pkg.popular
                        ? 'bg-gradient-to-b from-gold/15 to-transparent border-gold'
                        : 'bg-charcoal/40 border-ivory/10'
                    }`}
                  >
                    {pkg.popular && (
                      <span className="self-start mb-3 px-2.5 py-1 rounded-full bg-gold text-charcoal text-[10px] font-bold uppercase tracking-wide">
                        Most Popular
                      </span>
                    )}
                    <h3 className="font-display text-lg font-bold text-ivory mb-1">
                      {pkg.name}
                    </h3>
                    <p className="font-display text-2xl font-extrabold text-gold mb-0.5">
                      {pkg.priceNgn}
                    </p>
                    <p className="text-xs text-ivory/40 mb-4">{pkg.priceGbp} / month</p>
                    <p className="text-sm text-ivory/65 leading-relaxed flex-1">
                      {pkg.includes}
                    </p>
                    <Link
                      to="/contact"
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:gap-2.5 transition-all"
                    >
                      Get Started
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Final CTA ────────────────────────────────────────── */}
        <section className="bg-maroon">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <Reveal>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-ivory">
                  If your last campaign couldn&rsquo;t tell you{' '}
                  <span className="text-gold">why</span> it worked, it
                  probably won&rsquo;t work twice.
                </h2>
                <ul className="mt-6 space-y-2">
                  {['Free 30-minute audit', 'No obligation', 'Clear next steps either way'].map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm text-ivory/70">
                      <Check size={15} className="text-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={150} className="lg:text-right">
                <a
                  href={CONTACT.discoveryCallUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-gold to-gold-bright text-charcoal text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity"
                >
                  Let&rsquo;s Talk Growth
                  <ArrowRight size={16} />
                </a>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
