import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { SiteNav } from '../components/SiteNav'
import { SiteFooter } from '../components/SiteFooter'
import { ResultsTicker } from '../components/ResultsTicker'
import { Reveal } from '../lib/useReveal'
import { CONTACT, STATS } from '../lib/site-data'
import { seoMeta, seoLinks, breadcrumbSchema } from '../lib/seo'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: seoMeta({
      title: 'About Topton Media | Growth Marketing Agency Lagos, Nigeria',
      description: 'Topton Media is a performance marketing agency in Lagos. We help ambitious African and international brands build scalable revenue through paid media, SEO, and full-funnel strategy.',
      path: '/about',
    }),
    links: seoLinks('/about'),
    scripts: [{
      type: 'application/ld+json',
      children: JSON.stringify(breadcrumbSchema([
        { name: 'Home', url: 'https://toptonmedia.com' },
        { name: 'About', url: 'https://toptonmedia.com/about' },
      ])),
    }],
  }),
  component: AboutPage,
})

const VALUES = [
  { num: '01', title: 'Numbers over narratives', description: 'We report on revenue, cost per outcome, and retention — not reach and impressions. If a metric can\'t be tied to growth, we don\'t lead with it.' },
  { num: '02', title: 'Built to be understood', description: 'Every campaign comes with a reason it worked, or didn\'t. You should never have to guess why your numbers moved.' },
  { num: '03', title: 'Embedded, not outsourced', description: 'We work inside your team\'s rhythm — your Slack, your sprints, your goals — not as a vendor sending monthly PDFs.' },
]

function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />
      <main className="flex-1">
        <section className="bg-charcoal pt-20 pb-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <Reveal>
              <p className="font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-gold mb-4">About Us</p>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-[64px] font-extrabold leading-[1.1] text-ivory max-w-4xl">
                We Started Topton Because Most Agencies{' '}
                <span className="bg-gradient-to-r from-gold to-gold-bright bg-clip-text text-transparent">
                  Sell Activity, Not Outcomes.
                </span>
              </h1>
            </Reveal>
          </div>
        </section>

        <ResultsTicker />

        <section className="bg-ivory py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-7 space-y-6 text-lg text-charcoal/70 leading-[1.7]">
                <p>Topton Media is a performance marketing studio based in Lagos, working with founders and growth teams who are tired of paying for vanity metrics. We came up running paid campaigns for fintech, retail, and hospitality brands where every naira spent had to be justified — and that discipline is still the core of how we work.</p>
                <p>Today we run paid media, growth strategy, creative, and lifecycle marketing for a portfolio of clients across Nigeria, Africa, and internationally. We keep that portfolio selective on purpose: it's the only way to give every account the attention a results-driven partnership requires.</p>
                <p>If you're looking for an agency that will hand you a monthly report full of impressions and reach, we're probably not the right fit. If you want a team that treats your revenue targets as our own, let's talk.</p>
              </div>
              <div className="lg:col-span-5">
                <div className="bg-charcoal rounded-2xl p-8 lg:p-10">
                  <p className="font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-gold mb-6">At a Glance</p>
                  <dl className="space-y-6">
                    {STATS.map(stat => (
                      <div key={stat.label}>
                        <dt className="text-sm text-ivory/50">{stat.label}</dt>
                        <dd className="font-display text-3xl font-bold text-ivory mt-1">{stat.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-sand/30 py-24 border-t border-sand">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <Reveal className="mb-16">
              <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-charcoal">How We Think About the Work.</h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {VALUES.map((v, i) => (
                <Reveal key={v.num} delay={i * 100}>
                  <div className="relative pt-8 border-t-2 border-sand">
                    <span className="absolute -top-4 left-0 font-display text-3xl font-extrabold text-gold/30">{v.num}</span>
                    <h3 className="font-display text-xl font-semibold text-charcoal mb-3 mt-2">{v.title}</h3>
                    <p className="text-charcoal/60 leading-relaxed">{v.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-charcoal py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ivory mb-8">Meet the People Behind the Numbers.</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/team" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-gold to-gold-bright text-charcoal text-sm font-semibold hover:opacity-90 transition-opacity">
                Meet the Team <ArrowRight size={16} />
              </Link>
              <a href={CONTACT.discoveryCallUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-gold/40 text-ivory text-sm font-semibold hover:border-gold transition-colors">
                Book a Free Audit <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
