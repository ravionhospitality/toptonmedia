import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { SiteNav } from '../components/SiteNav'
import { SiteFooter } from '../components/SiteFooter'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

const VALUES = [
  {
    title: 'Numbers over narratives',
    description: "We report on revenue, cost per outcome, and retention. If a metric can't be tied to growth, we don't lead with it.",
  },
  {
    title: 'Built to be understood',
    description: "Every campaign comes with a reason it worked, or didn't. You should never have to guess why your numbers moved.",
  },
  {
    title: 'Embedded, not outsourced',
    description: "We work inside your team's rhythm — your Slack, your sprints, your goals — not as a vendor sending monthly PDFs.",
  },
  {
    title: 'Lagos-first thinking',
    description: "We understand Nigerian consumer behaviour, platform dynamics, and budget constraints from the inside out. No assumptions imported from foreign case studies.",
  },
  {
    title: 'Small client list, big attention',
    description: "We cap the brands we work with at any given time. The only way to do the work properly is to be genuinely inside it.",
  },
  {
    title: "Honest about what we don't know",
    description: "We'd rather flag uncertainty early than overpromise and underdeliver. You get honesty before you get a proposal.",
  },
]

const STATS = [
  { value: '₦2.4B+', label: 'Revenue driven for clients' },
  { value: '120+', label: 'Brands grown across Africa' },
  { value: '4 years', label: 'In performance marketing' },
  { value: '94%', label: 'Client retention rate' },
]

function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-ivory">
      <SiteNav />
      <main className="flex-1">

        {/* Header */}
        <section className="bg-charcoal pt-20 pb-24 lg:pt-28 lg:pb-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold mb-5">About Topton Media</p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.04] tracking-tight text-ivory max-w-4xl">
              We started Topton because most agencies <span className="text-gold italic">sell activity, not outcomes.</span>
            </h1>
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

        {/* Story */}
        <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7 space-y-6 text-lg text-charcoal/70 leading-relaxed">
              <p>
                Topton Media is a performance marketing studio based in Lagos, Nigeria, working with founders and growth teams who are tired of paying for vanity metrics. We came up running paid campaigns for fintech, retail, edtech, and hospitality brands — places where every naira had to justify itself — and that discipline is still the foundation of how we work.
              </p>
              <p>
                The agency was built by Temitope Bamidele, a growth and performance marketer who spent years embedded inside startups before going independent. He's run paid acquisition for a UK remittance fintech, closed ₦33M+ in deals for a B2B hospitality brand, and scaled user bases from hundreds to thousands across Africa. Topton Media is the structure built around that experience.
              </p>
              <p>
                Today we run paid media, growth strategy, creative, and lifecycle marketing for a selective portfolio of clients. We keep that portfolio small on purpose: it's the only way to give every account the attention that results-driven work actually requires.
              </p>
              <p>
                If you're looking for an agency that will hand you a monthly report full of impressions and reach, we're probably not the right fit. If you want a team that treats your revenue targets as their own, let's talk.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-charcoal rounded-2xl p-8 lg:p-10 sticky top-28">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold mb-8">By the numbers</p>
                <div className="space-y-6">
                  {STATS.map((s) => (
                    <div key={s.label} className="border-b border-ivory/10 pb-6 last:border-0 last:pb-0">
                      <div className="font-display text-4xl font-semibold text-gold">{s.value}</div>
                      <div className="text-sm text-ivory/50 mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-maroon/5 border-t border-b border-sand py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-maroon mb-5">What we stand for</p>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-charcoal max-w-2xl mb-16">
              How we think about the work.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {VALUES.map((v, i) => (
                <div key={v.title} className="relative pt-8 border-t-2 border-sand">
                  <span className="absolute -top-4 left-0 font-mono text-xs text-gold bg-ivory px-2 py-1 border border-sand rounded-full">0{i + 1}</span>
                  <h3 className="font-display text-xl font-semibold text-charcoal mb-3">{v.title}</h3>
                  <p className="text-charcoal/60 leading-relaxed text-sm">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lagos roots */}
        <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-maroon mb-5">Lagos roots</p>
              <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-charcoal mb-8">
                Built in Lagos. Tested across Africa.
              </h2>
              <div className="space-y-5 text-charcoal/65 leading-relaxed">
                <p>Lagos isn't a market you can understand from a textbook. Consumer behaviour, platform dynamics, payment behaviour, trust signals — they're different here. We've built campaigns inside this market, not just for it.</p>
                <p>That context matters when you're allocating budget, writing creative, or deciding whether to lead with a WhatsApp CTA or a web form. We make those calls from experience, not assumption.</p>
                <p>We're building the agency for African brands that deserve the same quality of strategic thinking that global brands get — without the six-figure retainers and the three-month onboarding process.</p>
              </div>
            </div>
            <div className="bg-charcoal rounded-2xl p-10 text-center">
              <p className="font-display text-7xl font-bold text-gold mb-4">6°N</p>
              <p className="font-mono text-xs uppercase tracking-widest text-ivory/40 mb-8">Lagos, Nigeria</p>
              <p className="text-ivory/60 text-sm leading-relaxed">Operating across Nigeria, Ghana, Kenya, and the African diaspora in the UK and US.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-charcoal py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold mb-5">Meet the team</p>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-ivory max-w-2xl mx-auto">
              The people behind the numbers.
            </h2>
            <Link
              to="/team"
              className="mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold text-charcoal text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity"
            >
              Meet the Team <ArrowRight size={15} />
            </Link>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  )
}
