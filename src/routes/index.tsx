import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, TrendingUp, Target, Sparkles, BarChart3, Users, Zap } from 'lucide-react'
import { SiteNav } from '../components/SiteNav'
import { SiteFooter } from '../components/SiteFooter'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const METRICS = [
  { value: '₦2.4B+', label: 'Revenue driven for clients' },
  { value: '340%', label: 'Average ROAS across campaigns' },
  { value: '120+', label: 'Brands grown across Africa' },
  { value: '4.2x', label: 'Average lead volume increase' },
  { value: '₦780M', label: 'Ad spend managed in 2024' },
  { value: '18 days', label: 'Average time to first result' },
  { value: '94%', label: 'Client retention rate' },
  { value: '60+', label: 'Nigerian SMEs scaled' },
]

const PILLARS = [
  { icon: Target, title: 'Attract', description: 'Paid media on Meta, TikTok, and Google engineered to reach buyers, not browsers.' },
  { icon: Sparkles, title: 'Convert', description: 'Funnels, landing pages, and creative built around one question: what makes someone say yes?' },
  { icon: TrendingUp, title: 'Compound', description: 'Retention systems and brand equity that turn a first purchase into a lifetime relationship.' },
]

const SERVICES_PREVIEW = [
  { icon: BarChart3, title: 'Performance Marketing', desc: 'Paid campaigns measured on cost-per-outcome, not cost-per-click.' },
  { icon: Users, title: 'User Acquisition', desc: 'Scale your user base with precision targeting and creative testing.' },
  { icon: Zap, title: 'Growth Strategy', desc: 'A full-funnel roadmap connecting ad spend to revenue targets.' },
]

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-ivory">
      <SiteNav />
      <main className="flex-1">

        {/* Hero */}
        <section className="relative bg-charcoal overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, #C9A84C 0%, transparent 60%)' }} />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-32 lg:pt-32 lg:pb-40">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold mb-6">Performance Marketing Studio — Lagos, Nigeria</p>
                <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.04] tracking-tight text-ivory">
                  We don't chase<br />impressions.<br />
                  <span className="text-gold italic">We chase revenue.</span>
                </h1>
                <p className="mt-8 text-lg text-ivory/60 max-w-lg leading-relaxed">
                  Topton Media plans, executes, and scales growth campaigns for African brands done paying for reach that doesn't convert. Every naira earns its place.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-maroon text-ivory text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity"
                  >
                    Start a Project <ArrowRight size={15} />
                  </Link>
                  <Link
                    to="/work"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-ivory/20 text-ivory text-sm font-semibold tracking-wide hover:border-gold hover:text-gold transition-colors"
                  >
                    See the Work
                  </Link>
                </div>
              </div>

              {/* Metrics Ledger */}
              <div className="bg-charcoal rounded-2xl p-8 border border-ivory/10">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold mb-6">Live Performance Ledger</p>
                <div className="grid grid-cols-2 gap-px bg-ivory/10 rounded-xl overflow-hidden">
                  {METRICS.map((m) => (
                    <div key={m.label} className="bg-charcoal p-5">
                      <div className="font-display text-2xl font-semibold text-gold">{m.value}</div>
                      <div className="text-xs text-ivory/50 mt-1 leading-tight">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

        {/* Pillars */}
        <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
          <div className="max-w-2xl mb-16">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-maroon mb-4">How we work</p>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-charcoal">Three moves. One scoreboard.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PILLARS.map((p, i) => {
              const Icon = p.icon
              return (
                <div key={p.title} className="relative pt-8 border-t-2 border-sand">
                  <span className="absolute -top-4 left-0 font-mono text-xs text-gold bg-ivory px-2 py-1 border border-sand rounded-full">0{i + 1}</span>
                  <Icon size={28} className="text-maroon mb-5" strokeWidth={1.5} />
                  <h3 className="font-display text-2xl font-semibold text-charcoal mb-3">{p.title}</h3>
                  <p className="text-charcoal/60 leading-relaxed">{p.description}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Services Preview */}
        <section className="bg-charcoal py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold mb-4">What we do</p>
                <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-ivory">
                  Built for growth,<br />measured in results.
                </h2>
              </div>
              <Link to="/services" className="inline-flex items-center gap-2 text-gold text-sm font-semibold hover:underline underline-offset-4">
                All Services <ArrowRight size={15} />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {SERVICES_PREVIEW.map((s) => {
                const Icon = s.icon
                return (
                  <div key={s.title} className="bg-charcoal rounded-2xl p-8 border border-ivory/10 hover:border-gold/40 transition-colors">
                    <Icon size={28} className="text-gold mb-5" strokeWidth={1.5} />
                    <h3 className="font-display text-xl font-semibold text-ivory mb-3">{s.title}</h3>
                    <p className="text-ivory/55 leading-relaxed text-sm">{s.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Social Proof Band */}
        <section className="bg-maroon py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-ivory leading-tight">
                If your last campaign couldn't tell you <span className="text-gold italic">why</span> it worked, it probably won't work twice.
              </h2>
              <div className="lg:text-right">
                <p className="text-ivory/70 text-lg mb-8 leading-relaxed">
                  We're a performance marketing studio for founders and CMOs who want answers, not excuses. Based in Lagos. Working across Africa.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold text-charcoal text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity"
                >
                  Let's talk growth <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted By */}
        <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-charcoal/40 text-center mb-10">
            Trusted by fast-growing brands across Nigeria and Africa
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {['FxBud', 'SGS Education', 'Hara Africa', 'Ravion', 'PayByChance', 'Connexa'].map((b) => (
              <div key={b} className="text-center font-display text-sm font-semibold text-charcoal/25 hover:text-charcoal/50 transition-colors">{b}</div>
            ))}
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  )
}
