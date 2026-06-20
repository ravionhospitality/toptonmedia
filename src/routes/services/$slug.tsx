import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { ArrowRight, Check } from 'lucide-react'
import { SiteNav } from '../../components/SiteNav'
import { SiteFooter } from '../../components/SiteFooter'
import { FAQAccordion } from '../../components/FAQAccordion'
import { Reveal } from '../../lib/useReveal'
import { fetchServiceBySlug } from '../../lib/services-db'
import { CASE_STUDIES } from '../../lib/site-data'
import { SERVICE_ICONS } from '../../lib/service-icons'
import { seoMeta, seoLinks, breadcrumbSchema, faqSchema, serviceSchema } from '../../lib/seo'

export const Route = createFileRoute('/services/$slug')({
  head: async ({ params }) => {
    const service = await fetchServiceBySlug(params.slug)
    if (!service) return { meta: [], links: [] }
    return {
      meta: seoMeta({ title: service.seoTitle, description: service.seoDescription, path: `/services/${service.slug}`, image: service.heroImage }),
      links: seoLinks(`/services/${service.slug}`),
      scripts: [
        {
          type: 'application/ld+json',
          children: JSON.stringify(breadcrumbSchema([
            { name: 'Home', url: 'https://toptonmedia.com' },
            { name: 'Services', url: 'https://toptonmedia.com/services' },
            { name: service.name, url: `https://toptonmedia.com/services/${service.slug}` },
          ])),
        },
        {
          type: 'application/ld+json',
          children: JSON.stringify(faqSchema(service.faqs)),
        },
        {
          type: 'application/ld+json',
          children: JSON.stringify(serviceSchema({
            name: service.name,
            description: service.seoDescription,
            url: `https://toptonmedia.com/services/${service.slug}`,
          })),
        },
      ],
    }
  },
  loader: async ({ params }) => {
    const service = await fetchServiceBySlug(params.slug)
    if (!service) throw notFound()
    return service
  },
  component: ServiceDetailPage,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-display text-4xl font-bold text-charcoal mb-4">Service Not Found</h1>
        <Link to="/services" className="text-maroon hover:underline">Browse all services →</Link>
      </div>
    </div>
  ),
})

function ServiceDetailPage() {
  const service = Route.useLoaderData()
  const Icon = SERVICE_ICONS[service.slug]
  const relatedCaseStudy = CASE_STUDIES.find(cs => cs.relatedService === service.slug)

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
                <li><Link to="/services" className="hover:text-ivory transition-colors">Services</Link></li>
                <li>/</li>
                <li className="text-gold">{service.name}</li>
              </ol>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center">
                    {Icon && <Icon size={24} className="text-gold" strokeWidth={1.5} />}
                  </div>
                  <span className="font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-gold">
                    {service.category}
                  </span>
                </div>
                <h1 className="font-display text-5xl sm:text-6xl font-extrabold leading-[1.1] text-ivory mb-6">
                  {service.name}
                </h1>
                <p className="text-lg text-sand/90 leading-[1.7] mb-8 max-w-xl">
                  {service.pitch}
                </p>
                <ul className="space-y-3 mb-10">
                  {service.bullets.map(bullet => (
                    <li key={bullet} className="flex items-start gap-2.5 text-ivory/70 text-sm">
                      <Check size={16} className="text-gold flex-shrink-0 mt-0.5" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={service.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-gold to-gold-bright text-charcoal text-sm font-semibold hover:opacity-90 transition-opacity"
                  >
                    Book Free Consultation <ArrowRight size={16} />
                  </a>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-gold/40 text-ivory text-sm font-semibold hover:border-gold transition-colors"
                  >
                    Browse All Services
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gold/10 rounded-3xl blur-2xl" />
                  <img
                    src={service.heroImage}
                    alt={`${service.name} — Topton Media`}
                    className="relative rounded-2xl w-full aspect-[4/3] object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-4 right-4 bg-charcoal/90 backdrop-blur-sm border border-gold/20 rounded-xl px-4 py-3">
                    <p className="font-[Space_Grotesk] text-[10px] uppercase tracking-widest text-gold/70 mb-0.5">
                      {service.resultStat.label}
                    </p>
                    <p className="font-display text-2xl font-extrabold text-gold">
                      {service.resultStat.value}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── What it is ───────────────────────────────────────── */}
        <section className="bg-ivory py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-7">
                <Reveal>
                  <p className="font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-maroon mb-4">What It Is</p>
                  <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal mb-8">
                    What Does {service.name} Actually Mean?
                  </h2>
                </Reveal>
                <div className="space-y-5">
                  {service.whatItIs.map((para, i) => (
                    <Reveal key={i} delay={i * 80}>
                      <p className="text-charcoal/70 leading-[1.7]">{para}</p>
                    </Reveal>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-5">
                <Reveal>
                  <div className="bg-cardbrown rounded-2xl p-7">
                    <p className="font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-gold mb-5">
                      Who This Is For
                    </p>
                    <ul className="space-y-3">
                      {service.whoFor.map(item => (
                        <li key={item} className="flex items-start gap-2.5 text-ivory/80 text-sm">
                          <Check size={15} className="text-gold flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 pt-6 border-t border-ivory/10">
                      <p className="font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-gold mb-2">
                        Starting From
                      </p>
                      <p className="font-display text-2xl font-bold text-ivory">{service.priceFrom}</p>
                    </div>
                    <a
                      href={service.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-gold to-gold-bright text-charcoal text-sm font-semibold hover:opacity-90 transition-opacity w-full justify-center"
                    >
                      Book Free Consultation <ArrowRight size={15} />
                    </a>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Deliverables ─────────────────────────────────────── */}
        <section className="bg-charcoal py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <Reveal className="mb-12">
              <p className="font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-gold mb-4">Deliverables</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-ivory">
                What You Get
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {service.deliverables.map((d, i) => (
                <Reveal key={d.name} delay={(i % 3) * 60}>
                  <div className="bg-cardbrown border border-gold/10 rounded-xl p-5 h-full">
                    <h3 className="font-display text-base font-semibold text-ivory mb-2">{d.name}</h3>
                    <p className="text-sm text-ivory/55 leading-relaxed">{d.detail}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Related Case Study ───────────────────────────────── */}
        {relatedCaseStudy && (
          <section className="bg-cardbrown py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
              <Reveal>
                <p className="font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-gold mb-4">Real Results</p>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-charcoal border border-gold/15 rounded-2xl overflow-hidden">
                  <div className="lg:col-span-5 aspect-[16/10] lg:aspect-auto lg:h-full">
                    <img
                      src={relatedCaseStudy.image}
                      alt={relatedCaseStudy.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="lg:col-span-7 p-8 lg:p-10">
                    <h3 className="font-display text-2xl font-bold text-ivory mb-3 leading-snug">
                      {relatedCaseStudy.title}
                    </h3>
                    <p className="text-ivory/60 leading-relaxed mb-6">{relatedCaseStudy.summary}</p>
                    <div className="flex items-center gap-8 mb-6">
                      <div>
                        <p className="text-[10px] uppercase tracking-wide text-ivory/40">Result</p>
                        <p className="font-display text-2xl font-bold text-gold">{relatedCaseStudy.result}</p>
                      </div>
                    </div>
                    <Link
                      to="/case-studies"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:gap-2.5 transition-all"
                    >
                      Read More Case Studies <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>
        )}

        {/* ─── Pricing ──────────────────────────────────────────── */}
        <section className="bg-ivory py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <Reveal className="mb-12">
              <p className="font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-maroon mb-4">Pricing</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal">
                Investment
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
              {service.pricing.map((tier, i) => (
                <Reveal key={tier.label} delay={i * 80}>
                  <div className="bg-ivory border-2 border-sand rounded-2xl p-6 h-full">
                    <p className="font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-charcoal/50 mb-2">{tier.label}</p>
                    <p className="font-display text-2xl font-bold text-maroon mb-1">{tier.price}</p>
                    {tier.note && <p className="text-xs text-charcoal/50">{tier.note}</p>}
                  </div>
                </Reveal>
              ))}
            </div>
            {service.pricingNote && (
              <p className="text-sm text-charcoal/50 bg-sand/40 rounded-xl px-5 py-3 border border-sand">
                {service.pricingNote}
              </p>
            )}
            <div className="mt-10">
              <a
                href={service.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-gold to-gold-bright text-charcoal text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Book Free Consultation — {service.name} <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* ─── FAQs ─────────────────────────────────────────────── */}
        <section className="bg-sand/20 py-24 border-t border-sand">
          <div className="max-w-4xl mx-auto px-6 lg:px-10">
            <Reveal className="mb-12">
              <p className="font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-maroon mb-4">FAQs</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal">
                Frequently Asked Questions
              </h2>
            </Reveal>
            <FAQAccordion faqs={service.faqs} />
          </div>
        </section>

        {/* ─── Final CTA ────────────────────────────────────────── */}
        <section className="bg-maroon py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
            <Reveal>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-ivory mb-4">
                Ready to Get Started with {service.name}?
              </h2>
              <p className="text-ivory/70 mb-8 max-w-xl mx-auto">
                Book a free 30-minute consultation and we'll walk you through exactly how we'd approach your growth goals.
              </p>
              <a
                href={service.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-gold to-gold-bright text-charcoal text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Book Free Consultation → <ArrowRight size={16} />
              </a>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
