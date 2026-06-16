import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, TrendingUp } from 'lucide-react'
import { SiteNav } from '../components/SiteNav'
import { SiteFooter } from '../components/SiteFooter'

export const Route = createFileRoute('/work')({
  component: WorkPage,
})

const CASES = [
  {
    client: 'FxBud',
    sector: 'Fintech / Remittance',
    country: 'Nigeria & UK',
    headline: 'From 600 to 2,100 users in 4 months',
    summary: 'FxBud needed rapid user growth for their UK remittance platform targeting Nigerians in the diaspora. We built a full acquisition funnel across Meta and TikTok, designed a Temu-inspired referral loop, and launched Twitter Space influencer events to drive organic amplification.',
    results: [
      { metric: '250%', label: 'User growth in 4 months' },
      { metric: '₦0', label: 'Wasted on non-converting traffic' },
      { metric: '4.8x', label: 'Return on ad spend' },
      { metric: '62%', label: 'Reduction in cost per install' },
    ],
    tags: ['Meta Ads', 'TikTok', 'Referral System', 'Influencer Strategy'],
    color: 'bg-maroon',
  },
  {
    client: 'SGS Education',
    sector: 'EdTech / International Education',
    country: 'Nigeria',
    headline: '13 qualified leads per day from cold traffic',
    summary: 'SGS Education was running Facebook ads with no targeting structure and burning budget. We rebuilt their full campaign architecture, created a lead magnet funnel, trained 6 field agents in Abuja, and deployed a 30-day content calendar that drove consistent organic leads alongside paid.',
    results: [
      { metric: '13x', label: 'Daily lead volume increase' },
      { metric: '67%', label: 'Drop in cost-per-lead' },
      { metric: '30 days', label: 'To first measurable results' },
      { metric: '6', label: 'Field agents trained & deployed' },
    ],
    tags: ['Facebook Ads', 'Lead Generation', 'Agent Training', 'Content Strategy'],
    color: 'bg-charcoal',
  },
  {
    client: 'Hara Africa',
    sector: 'Crypto Trading Platform',
    country: 'Nigeria',
    headline: 'Meta account recovered and user acquisition rebuilt from zero',
    summary: "Hara Africa's Meta ad account was repeatedly disabled due to crypto policy violations. We diagnosed the root cause — running app install campaigns without whitelist approval — rebuilt their compliance framework, pivoted to TikTok and Google, and grew their active trader base by 180%.",
    results: [
      { metric: '180%', label: 'Active trader growth' },
      { metric: '3', label: 'Channels rebuilt from scratch' },
      { metric: '100%', label: 'Policy compliance achieved' },
      { metric: '2.1x', label: 'Activation rate improvement' },
    ],
    tags: ['TikTok Ads', 'Google Ads', 'Compliance Strategy', 'App Marketing'],
    color: 'bg-maroon',
  },
  {
    client: 'Ravion Hospitality',
    sector: 'B2B Hospitality Supplies',
    country: 'Lagos, Nigeria',
    headline: '₦33M+ in deals closed across 13 months',
    summary: 'Ravion needed a full digital presence and a structured sales pipeline for B2B hospitality supply deals. We built their brand, content strategy, Instagram SEO captions, GMB presence, and a three-year business plan with a structured revenue ladder that the sales team executed.',
    results: [
      { metric: '₦33M+', label: 'In deals closed' },
      { metric: '25', label: 'Active B2B accounts (Year 1)' },
      { metric: '3x', label: 'Revenue target Year 3' },
      { metric: '13', label: 'Months of execution' },
    ],
    tags: ['Brand Building', 'Instagram SEO', 'B2B Sales Strategy', 'Business Planning'],
    color: 'bg-charcoal',
  },
  {
    client: 'PayByChance',
    sector: 'Fintech / Lottery Payments',
    country: 'Nigeria',
    headline: 'QR payment system launched across 2 major merchant locations',
    summary: 'PayByChance needed a go-to-market strategy for a QR-based lottery payment product. We built the deployment strategy for Isglo Hotel and Mattoris Supermarket, designed the prize mechanics inspired by Baba Ijebu, and produced a four-week launch timeline with merchant training materials.',
    results: [
      { metric: '2', label: 'Major merchants onboarded' },
      { metric: '4 weeks', label: 'From strategy to launch' },
      { metric: '100%', label: 'Unique QR code coverage' },
      { metric: '3x', label: 'Player engagement vs benchmark' },
    ],
    tags: ['Go-To-Market', 'QR Strategy', 'Merchant Onboarding', 'Product Launch'],
    color: 'bg-maroon',
  },
  {
    client: 'Connexa Lagos',
    sector: 'Events / Business Networking',
    country: 'Lagos, Nigeria',
    headline: 'Full digital campaign for a premium November 2026 networking event',
    summary: 'Connexa Lagos needed to position a networking event as more than a meetup — as "a promise of access to opportunities." We built the full TikTok-first content strategy, ambassador programme, affiliate system, email campaign architecture, and a 4-phase organic growth plan targeting Lagos founders and CMOs.',
    results: [
      { metric: 'TikTok', label: 'Primary acquisition channel' },
      { metric: '4', label: 'Campaign phases planned' },
      { metric: '₦0', label: 'Paid media in Phase 1' },
      { metric: 'Nov 2026', label: 'Event launch target' },
    ],
    tags: ['Event Marketing', 'TikTok Strategy', 'Community Growth', 'Email Campaigns'],
    color: 'bg-charcoal',
  },
]

function WorkPage() {
  return (
    <div className="min-h-screen flex flex-col bg-ivory">
      <SiteNav />
      <main className="flex-1">

        {/* Header */}
        <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-16 lg:pt-28 lg:pb-20">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-maroon mb-5">Case Studies</p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.04] tracking-tight text-charcoal max-w-4xl">
            Work that pays for itself. <span className="text-maroon italic">Then some.</span>
          </h1>
          <p className="mt-8 text-lg text-charcoal/60 max-w-2xl leading-relaxed">
            Every number below was pulled from a client dashboard, not a slide deck. We report on what actually moved.
          </p>
        </section>

        <div className="h-px max-w-7xl mx-auto bg-gradient-to-r from-transparent via-gold to-transparent" />

        {/* Cases */}
        <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="space-y-12">
            {CASES.map((c) => (
              <div key={c.client} className="rounded-3xl overflow-hidden border border-sand">
                <div className={`${c.color} px-8 lg:px-12 py-12`}>
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-6">
                        <span className="font-mono text-xs text-gold/70 uppercase tracking-widest">{c.sector}</span>
                        <span className="text-ivory/20">·</span>
                        <span className="font-mono text-xs text-ivory/50 uppercase tracking-widest">{c.country}</span>
                      </div>
                      <p className="font-mono text-xs text-gold uppercase tracking-widest mb-3">{c.client}</p>
                      <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ivory leading-tight mb-6">{c.headline}</h2>
                      <p className="text-ivory/65 leading-relaxed max-w-2xl">{c.summary}</p>
                      <div className="flex flex-wrap gap-2 mt-6">
                        {c.tags.map(t => (
                          <span key={t} className="px-3 py-1 rounded-full bg-ivory/10 text-ivory/70 text-xs font-medium">{t}</span>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 lg:w-72 flex-shrink-0">
                      {c.results.map(r => (
                        <div key={r.label} className="bg-ivory/10 rounded-xl p-5">
                          <div className="font-display text-2xl font-semibold text-gold">{r.metric}</div>
                          <div className="text-xs text-ivory/55 mt-1 leading-tight">{r.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-maroon py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
            <TrendingUp size={40} className="text-gold mx-auto mb-6" strokeWidth={1.5} />
            <h2 className="font-display text-4xl sm:text-5xl font-semibold text-ivory tracking-tight max-w-2xl mx-auto">
              Your results could be on this page next.
            </h2>
            <p className="mt-6 text-ivory/65 max-w-lg mx-auto">
              We're selective about the brands we work with. If you're ready to grow, let's find out if we're the right fit.
            </p>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold text-charcoal text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity"
            >
              Start a Project <ArrowRight size={15} />
            </Link>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  )
}
