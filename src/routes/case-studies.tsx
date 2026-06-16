import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { SiteNav } from '../components/SiteNav'
import { SiteFooter } from '../components/SiteFooter'
import { Reveal } from '../lib/useReveal'
import { CASE_STUDIES, CONTACT } from '../lib/site-data'
import { seoMeta, seoLinks, breadcrumbSchema } from '../lib/seo'

export const Route = createFileRoute('/case-studies')({
  head: () => ({
    meta: seoMeta({
      title: 'Case Studies | Real Results from Topton Media — Lagos Marketing Agency',
      description: 'See real results from Topton Media — fintech installs, e-commerce revenue, B2B leads, and more. Performance marketing case studies from Nigerian and African brands.',
      path: '/case-studies',
    }),
    links: seoLinks('/case-studies'),
    scripts: [{
      type: 'application/ld+json',
      children: JSON.stringify(breadcrumbSchema([
        { name: 'Home', url: 'https://toptonmedia.com' },
        { name: 'Case Studies', url: 'https://toptonmedia.com/case-studies' },
      ])),
    }],
  }),
  component: CaseStudiesPage,
})

function CaseStudiesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />
      <main className="flex-1">
        <section className="bg-charcoal pt-20 pb-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <Reveal>
              <p className="font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-gold mb-4">Selected Work</p>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-[64px] font-extrabold leading-[1.1] text-ivory max-w-4xl">
                Results We're{' '}
                <span className="bg-gradient-to-r from-gold to-gold-bright bg-clip-text text-transparent">
                  Proud to Show Our Work On.
                </span>
              </h1>
              <p className="mt-6 text-lg text-sand/80 leading-[1.7] max-w-2xl">
                A selection of campaigns across fintech, e-commerce, B2B, and more.
                Full case studies available on request.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-ivory py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {CASE_STUDIES.map((cs, i) => (
                <Reveal key={cs.slug} delay={i * 100}>
                  <article className="group bg-ivory border border-sand rounded-2xl overflow-hidden hover:border-gold hover:shadow-xl transition-all h-full flex flex-col">
                    <div className="relative overflow-hidden aspect-[16/9]">
                      <img
                        src={cs.image}
                        alt={cs.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <span className="font-[Space_Grotesk] text-xs uppercase tracking-widest text-gold bg-charcoal/70 backdrop-blur-sm px-3 py-1.5 rounded-full">
                          {cs.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h2 className="font-display text-xl font-semibold text-charcoal mb-3 leading-snug">
                        {cs.title}
                      </h2>
                      <p className="text-charcoal/60 text-sm leading-relaxed mb-5 flex-1">
                        {cs.summary}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-sand">
                        <div>
                          <p className="text-[10px] uppercase tracking-wide text-charcoal/40">Key Result</p>
                          <p className="font-display text-xl font-bold text-maroon">{cs.result}</p>
                        </div>
                        <ArrowUpRight size={20} className="text-charcoal/30 group-hover:text-maroon transition-colors" />
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-16 bg-cardbrown rounded-2xl p-8 lg:p-12 text-center">
              <p className="font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-gold mb-4">More Case Studies</p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-ivory mb-4">
                Want the Full Story?
              </h2>
              <p className="text-ivory/60 mb-8 max-w-md mx-auto">
                Detailed case studies with full data breakdowns are available on request during a discovery call.
              </p>
              <a
                href={CONTACT.discoveryCallUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-gold to-gold-bright text-charcoal text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Book a Discovery Call <ArrowRight size={16} />
              </a>
            </Reveal>
          </div>
        </section>

        <section className="bg-maroon py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ivory mb-8">
              Want Results Like These for Your Brand?
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-gold to-gold-bright text-charcoal text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Start a Project <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
