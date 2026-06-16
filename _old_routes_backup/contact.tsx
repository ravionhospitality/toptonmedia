import { createFileRoute } from '@tanstack/react-router'
import { MapPin, Mail, Phone, MessageCircle, Clock, ArrowRight } from 'lucide-react'
import { SiteNav } from '../components/SiteNav'
import { SiteFooter } from '../components/SiteFooter'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

const ENQUIRY_TYPES = [
  'Performance Marketing',
  'Lead Generation',
  'User Acquisition',
  'Growth Strategy',
  'Creative & Web',
  'Full Agency Partnership',
  'Other',
]

const BUDGETS = [
  'Under ₦500K/month',
  '₦500K – ₦1M/month',
  '₦1M – ₦3M/month',
  '₦3M – ₦5M/month',
  '₦5M+/month',
  'Not sure yet',
]

const CONTACT_INFO = [
  { icon: MapPin, label: 'Office', value: 'Lagos, Nigeria\n(Serving clients globally)' },
  { icon: Mail, label: 'Email', value: 'hello@toptonmedia.com', href: 'mailto:hello@toptonmedia.com' },
  { icon: Phone, label: 'Phone', value: '+234 (0) 800 000 0000', href: 'tel:+2348000000000' },
  { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us directly', href: 'https://wa.me/2348000000000' },
  { icon: Clock, label: 'Response time', value: 'Within 4 business hours' },
]

const FAQS = [
  { q: 'How quickly can you start?', a: 'Most clients are onboarded within 5 business days of signing. We run a rapid discovery session, then move into strategy and execution. First results typically visible within 2–3 weeks.' },
  { q: 'Do you work with early-stage startups?', a: 'Yes, though we\'re most effective when there\'s a product already live and a minimum ad budget of ₦300K/month to work with. If you\'re pre-revenue, we\'ll be honest about what we can do for you.' },
  { q: 'What does a typical engagement look like?', a: 'We work on monthly retainers, scoped per client. Minimum engagement is 3 months, as meaningful growth data takes time to generate and act on.' },
  { q: 'Do you charge a percentage of ad spend?', a: 'We work on fixed retainers, not percentage models. You know exactly what you\'re paying and what you\'re getting. Ad spend goes directly to the platforms — we don\'t mark it up.' },
]

function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-ivory">
      <SiteNav />
      <main className="flex-1">

        {/* Header */}
        <section className="bg-charcoal pt-20 pb-24 lg:pt-28 lg:pb-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold mb-5">Contact</p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.04] tracking-tight text-ivory max-w-4xl">
              Let's talk about <span className="text-gold italic">your growth.</span>
            </h1>
            <p className="mt-8 text-lg text-ivory/60 max-w-xl leading-relaxed">
              Fill in what you can. We'll come back to you within 4 business hours with a straight answer about whether we're the right fit.
            </p>
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

        {/* Main */}
        <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="font-display text-2xl font-semibold text-charcoal mb-8">Tell us about your project</h2>
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal/60 uppercase tracking-widest mb-2">First Name *</label>
                    <input type="text" className="w-full px-4 py-3.5 rounded-xl border border-sand bg-white focus:outline-none focus:border-maroon text-charcoal text-sm transition-colors" placeholder="Temi" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-charcoal/60 uppercase tracking-widest mb-2">Last Name *</label>
                    <input type="text" className="w-full px-4 py-3.5 rounded-xl border border-sand bg-white focus:outline-none focus:border-maroon text-charcoal text-sm transition-colors" placeholder="Bamidele" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal/60 uppercase tracking-widest mb-2">Email Address *</label>
                  <input type="email" className="w-full px-4 py-3.5 rounded-xl border border-sand bg-white focus:outline-none focus:border-maroon text-charcoal text-sm transition-colors" placeholder="hello@yourbrand.com" />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal/60 uppercase tracking-widest mb-2">WhatsApp / Phone</label>
                  <input type="tel" className="w-full px-4 py-3.5 rounded-xl border border-sand bg-white focus:outline-none focus:border-maroon text-charcoal text-sm transition-colors" placeholder="+234 800 000 0000" />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal/60 uppercase tracking-widest mb-2">Company / Brand Name</label>
                  <input type="text" className="w-full px-4 py-3.5 rounded-xl border border-sand bg-white focus:outline-none focus:border-maroon text-charcoal text-sm transition-colors" placeholder="Your brand name" />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal/60 uppercase tracking-widest mb-2">What do you need help with? *</label>
                  <div className="flex flex-wrap gap-2">
                    {ENQUIRY_TYPES.map(t => (
                      <button key={t} className="px-4 py-2 rounded-full text-sm border border-sand text-charcoal/60 hover:border-maroon hover:text-maroon transition-colors">
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal/60 uppercase tracking-widest mb-2">Monthly Marketing Budget</label>
                  <select className="w-full px-4 py-3.5 rounded-xl border border-sand bg-white focus:outline-none focus:border-maroon text-charcoal text-sm transition-colors">
                    <option value="">Select budget range</option>
                    {BUDGETS.map(b => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal/60 uppercase tracking-widest mb-2">Tell us more *</label>
                  <textarea rows={5} className="w-full px-4 py-3.5 rounded-xl border border-sand bg-white focus:outline-none focus:border-maroon text-charcoal text-sm transition-colors resize-none" placeholder="What's your biggest growth challenge right now? Where are you currently spending on marketing? What have you already tried?" />
                </div>

                <button className="w-full py-4 rounded-full bg-maroon text-ivory text-sm font-semibold tracking-wide hover:bg-maroon-deep transition-colors flex items-center justify-center gap-2">
                  Send Message <ArrowRight size={15} />
                </button>

                <p className="text-xs text-charcoal/40 text-center">We read every submission personally. No bots. No auto-replies.</p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact info */}
              <div className="bg-charcoal rounded-2xl p-8">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold mb-6">Find us</p>
                <div className="space-y-5">
                  {CONTACT_INFO.map((info) => {
                    const Icon = info.icon
                    return (
                      <div key={info.label} className="flex items-start gap-4">
                        <div className="w-9 h-9 rounded-lg bg-ivory/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon size={15} className="text-gold" />
                        </div>
                        <div>
                          <p className="text-xs text-ivory/40 mb-0.5">{info.label}</p>
                          {info.href ? (
                            <a href={info.href} className="text-sm text-ivory/80 hover:text-gold transition-colors">{info.value}</a>
                          ) : (
                            <p className="text-sm text-ivory/80 whitespace-pre-line">{info.value}</p>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a href="https://wa.me/2348000000000?text=Hi%2C%20I'd%20like%20to%20discuss%20a%20project%20with%20Topton%20Media" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 bg-green-600 hover:bg-green-700 transition-colors rounded-2xl p-6 group">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={22} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">Chat on WhatsApp</p>
                  <p className="text-green-200 text-xs mt-0.5">Fastest response — usually under 30 minutes</p>
                </div>
                <ArrowRight size={18} className="text-white/60 ml-auto group-hover:translate-x-1 transition-transform" />
              </a>

              {/* What to expect */}
              <div className="bg-maroon/8 border border-maroon/15 rounded-2xl p-8">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-maroon mb-4">What happens next</p>
                <ol className="space-y-4">
                  {['We read your brief and get context on your business','We reply with honest feedback on how we\'d approach it','If there\'s a fit, we schedule a 30-minute discovery call','We send a scoped proposal within 48 hours of that call'].map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-charcoal/65">
                      <span className="w-5 h-5 rounded-full bg-maroon text-ivory text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-semibold">{i+1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

          </div>
        </section>

        {/* FAQs */}
        <section className="bg-charcoal py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold mb-5">FAQs</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ivory tracking-tight mb-12">Questions we get asked a lot.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {FAQS.map((faq) => (
                <div key={faq.q} className="border-t border-ivory/15 pt-7">
                  <h3 className="font-display text-lg font-semibold text-ivory mb-3">{faq.q}</h3>
                  <p className="text-ivory/55 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  )
}
