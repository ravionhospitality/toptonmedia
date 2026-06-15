import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, Megaphone, LineChart, Palette, Mail, Search, Globe, Users, BarChart3, Target } from 'lucide-react'
import { SiteNav } from '../components/SiteNav'
import { SiteFooter } from '../components/SiteFooter'

export const Route = createFileRoute('/services')({
  component: ServicesPage,
})

const SERVICES = [
  {
    icon: Users,
    title: 'User Acquisition',
    summary: 'Precision-targeted campaigns that bring in users who actually activate, pay, and stay — not just those who click.',
    points: ['Meta & TikTok install campaigns', 'Audience segmentation & lookalikes', 'Install-to-activation gap analysis', 'Cost-per-install optimization'],
  },
  {
    icon: Target,
    title: 'Lead Generation',
    summary: 'High-intent leads for B2B and B2C brands, delivered into your CRM, not just your inbox.',
    points: ['Lead magnet strategy & design', 'Facebook & Google lead ads', 'Landing page build & optimization', 'Lead scoring & qualification'],
  },
  {
    icon: BarChart3,
    title: 'Performance Marketing',
    summary: 'Full-funnel paid media measured exclusively on revenue outcomes, not vanity metrics.',
    points: ['Campaign strategy & media planning', 'Creative testing at scale', 'Daily bid & budget optimization', 'Weekly revenue-focused reporting'],
  },
  {
    icon: LineChart,
    title: 'Growth Strategy',
    summary: 'A roadmap that connects your acquisition spend directly to your revenue targets, quarter by quarter.',
    points: ['Funnel & attribution audits', 'Channel mix planning', 'Forecasting & budget modelling', 'Quarterly growth reviews'],
  },
  {
    icon: Palette,
    title: 'Creative & Conversion',
    summary: 'Landing pages, ad creative, and brand assets engineered to convert, not just look good.',
    points: ['Landing page design & build', 'Ad creative production & testing', 'Brand identity refresh', 'Conversion rate optimization'],
  },
  {
    icon: Mail,
    title: 'Email & Lifecycle',
    summary: 'Turn one-time buyers into repeat customers with lifecycle marketing that compounds over time.',
    points: ['Lifecycle email design', 'Segmentation & automation flows', 'Win-back & retention sequences', 'Newsletter strategy & execution'],
  },
  {
    icon: Search,
    title: 'SEO & Content',
    summary: 'Organic visibility that builds month after month, anchored in content your audience actively searches for.',
    points: ['Technical SEO audits', 'Content strategy & editorial calendars', 'On-page optimization', 'Link building & domain authority'],
  },
  {
    icon: Globe,
    title: 'Web Design & CRO',
    summary: 'Marketing websites built fast, designed sharp, and optimized to hold paid traffic and convert it into pipeline.',
    points: ['Marketing site design & build', 'CMS setup & team training', 'Performance & Core Web Vitals', 'Analytics, tracking & GTM setup'],
  },
  {
    icon: Megaphone,
    title: 'Social Media Management',
    summary: 'Content strategy and community management that builds brand trust without burning your team.',
    points: ['Monthly content calendars', 'Creative direction & production', 'Community management', 'Platform analytics & reporting'],
  },
]

const PROCESS = [
  { step: '01', title: 'Discovery', desc: 'We audit your current channels, competitors, and conversion data before recommending anything.' },
  { step: '02', title: 'Strategy', desc: 'A custom growth plan with channel mix, budget allocation, creative direction, and 90-day milestones.' },
  { step: '03', title: 'Execution', desc: 'We build, launch, and manage every campaign — you approve the strategy, we handle the work.' },
  { step: '04', title: 'Reporting', desc: "Weekly revenue-focused reports. No impressions. No reach. Just numbers that tell you if you're growing." },
]

function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-ivory">
      <SiteNav />
      <main className="flex-1">

        {/* Header */}
        <section className="bg-charcoal pt-20 pb-24 lg:pt-28 lg:pb-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold mb-5">Services</p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.04] tracking-tight text-ivory max-w-4xl">
              Everything a growth team needs. <span className="text-gold italic">Without the headcount.</span>
            </h1>
            <p className="mt-8 text-lg text-ivory/60 max-w-2xl leading-relaxed">
              We work as an embedded performance marketing team — planning strategy, running campaigns, and building the assets that make them work. You get the output of a full team at a fraction of the cost.
            </p>
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

        {/* Services Grid */}
        <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => {
              const Icon = s.icon
              return (
                <div key={s.title} className="bg-white rounded-2xl p-8 border border-sand hover:border-maroon/30 hover:shadow-lg transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-maroon/10 flex items-center justify-center mb-6 group-hover:bg-maroon/15 transition-colors">
                    <Icon size={22} className="text-maroon" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-charcoal mb-2">{s.title}</h3>
                  <p className="text-charcoal/60 leading-relaxed mb-6 text-sm">{s.summary}</p>
                  <ul className="space-y-2 border-t border-sand pt-5">
                    {s.points.map(point => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-charcoal/70">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </section>

        {/* Process */}
        <section className="bg-charcoal py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold mb-5">How it works</p>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold text-ivory tracking-tight mb-16 max-w-2xl">
              From onboarding to your first win in under 3 weeks.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {PROCESS.map((p) => (
                <div key={p.step} className="border-t border-ivory/15 pt-8">
                  <span className="font-mono text-3xl font-bold text-gold/30">{p.step}</span>
                  <h3 className="font-display text-xl font-semibold text-ivory mt-4 mb-3">{p.title}</h3>
                  <p className="text-ivory/55 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-maroon py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold/70 mb-5">Ready when you are</p>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold text-ivory tracking-tight max-w-3xl mx-auto">
              Tell us where growth is stuck. We'll tell you how we'd fix it.
            </h2>
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
