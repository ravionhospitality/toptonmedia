import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { ArrowRight, Mail, Phone, MapPin, MessageCircle } from 'lucide-react'
import { SiteNav } from '../components/SiteNav'
import { SiteFooter } from '../components/SiteFooter'
import { FAQAccordion } from '../components/FAQAccordion'
import { Reveal } from '../lib/useReveal'
import { CONTACT, CONTACT_FAQS } from '../lib/site-data'
import { supabase } from '../lib/supabase'
import { sendLeadNotification } from '../lib/notify-api'
import { seoMeta, seoLinks, breadcrumbSchema, faqSchema, contactPageSchema } from '../lib/seo'

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: seoMeta({
      title: 'Contact Topton Media | Start a Project or Book a Free Audit — Lagos',
      description: 'Get in touch with Topton Media in Lagos. Book a free 30-minute growth audit, start a project, or ask about our services. We respond within 24 hours.',
      path: '/contact',
    }),
    links: seoLinks('/contact'),
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(breadcrumbSchema([
          { name: 'Home', url: 'https://toptonmedia.com' },
          { name: 'Contact', url: 'https://toptonmedia.com/contact' },
        ])),
      },
      {
        type: 'application/ld+json',
        children: JSON.stringify(faqSchema(CONTACT_FAQS)),
      },
      {
        type: 'application/ld+json',
        children: JSON.stringify(contactPageSchema()),
      },
    ],
  }),
  component: ContactPage,
})

const SERVICE_OPTIONS = ['User Acquisition', 'Lead Generation', 'Performance Marketing', 'Web Design & CRO', 'Social Media Management', 'PR & Communications', 'Market Activations', 'Printing Services', 'Branded Corporate Gifts', 'Brand Strategy & Creative', 'Media Production', 'Training & Workshops', 'Africa Market Entry', 'Email & CRM Marketing', 'SEO', 'Not sure yet — need advice']
const BUDGET_OPTIONS = ['Under ₦250,000/month', '₦250,000 – ₦500,000/month', '₦500,000 – ₦1,000,000/month', '₦1,000,000 – ₦2,500,000/month', 'Above ₦2,500,000/month', 'One-off project budget']

function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const [submitError, setSubmitError] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitError('')
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const { error } = await supabase.from('contact_submissions').insert({
      name: formData.get('name'),
      company: formData.get('company') || null,
      email: formData.get('email'),
      phone: formData.get('phone') || null,
      service: formData.get('service'),
      budget: formData.get('budget') || null,
      message: formData.get('message') || null,
    })

    setLoading(false)
    if (error) {
      setSubmitError('Something went wrong sending your message. Please try again or email us directly.')
      return
    }

    sendLeadNotification({
      data: {
        kind: 'contact_form',
        name: String(formData.get('name') ?? ''),
        email: String(formData.get('email') ?? ''),
        phone: String(formData.get('phone') ?? '') || undefined,
        company: String(formData.get('company') ?? '') || undefined,
        service: String(formData.get('service') ?? '') || undefined,
        budget: String(formData.get('budget') ?? '') || undefined,
        message: String(formData.get('message') ?? '') || undefined,
      },
    }).catch(() => {})

    setSubmitted(true)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />
      <main className="flex-1">
        <section className="bg-charcoal pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <Reveal>
              <p className="font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-gold mb-4">Get in Touch</p>
              <h1 className="font-display text-5xl sm:text-6xl font-extrabold leading-[1.1] text-ivory max-w-3xl">
                Tell Us About{' '}
                <span className="bg-gradient-to-r from-gold to-gold-bright bg-clip-text text-transparent">
                  Your Goals.
                </span>
              </h1>
            </Reveal>
          </div>
        </section>

        <section className="bg-ivory py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Left */}
              <div className="lg:col-span-4">
                <Reveal>
                  <p className="text-lg text-charcoal/70 leading-[1.7] mb-10">
                    Fill out the form and we'll get back to you within one business day to schedule a short discovery call.
                  </p>
                  <div className="space-y-5">
                    <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 text-charcoal/70 hover:text-maroon transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-maroon/10 flex items-center justify-center flex-shrink-0"><Mail size={17} className="text-maroon" /></div>
                      <span>{CONTACT.email}</span>
                    </a>
                    <a href={`tel:${CONTACT.phoneIntl}`} className="flex items-center gap-3 text-charcoal/70 hover:text-maroon transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-maroon/10 flex items-center justify-center flex-shrink-0"><Phone size={17} className="text-maroon" /></div>
                      <span>{CONTACT.phone}</span>
                    </a>
                    <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-charcoal/70 hover:text-maroon transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-maroon/10 flex items-center justify-center flex-shrink-0"><MessageCircle size={17} className="text-maroon" /></div>
                      <span>WhatsApp us</span>
                    </a>
                    <div className="flex items-center gap-3 text-charcoal/70">
                      <div className="w-10 h-10 rounded-xl bg-maroon/10 flex items-center justify-center flex-shrink-0"><MapPin size={17} className="text-maroon" /></div>
                      <span>{CONTACT.location}</span>
                    </div>
                  </div>
                  <div className="mt-10 pt-8 border-t border-sand">
                    <p className="text-sm font-semibold text-charcoal mb-3">Prefer to book directly?</p>
                    <a
                      href={CONTACT.discoveryCallUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gold to-gold-bright text-charcoal text-sm font-semibold hover:opacity-90 transition-opacity"
                    >
                      Book a Free Audit <ArrowRight size={15} />
                    </a>
                  </div>
                </Reveal>
              </div>

              {/* Form */}
              <div className="lg:col-span-8">
                {submitted ? (
                  <Reveal className="bg-charcoal rounded-2xl p-10 lg:p-14 text-center">
                    <p className="font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-gold mb-4">Message Received</p>
                    <h2 className="font-display text-3xl font-bold text-ivory mb-4">Thanks — we'll be in touch shortly.</h2>
                    <p className="text-ivory/60 max-w-md mx-auto">A member of the team will reach out within one business day to schedule your discovery call.</p>
                  </Reveal>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-ivory border border-sand rounded-2xl p-8 lg:p-10 space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">Full name *</label>
                        <input id="name" name="name" type="text" required className="w-full rounded-xl border border-sand bg-ivory px-4 py-3 text-charcoal focus:outline-none focus:ring-2 focus:ring-maroon/30 focus:border-maroon transition-colors" placeholder="Ada Okafor" />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-charcoal mb-2">Company</label>
                        <input id="company" name="company" type="text" className="w-full rounded-xl border border-sand bg-ivory px-4 py-3 text-charcoal focus:outline-none focus:ring-2 focus:ring-maroon/30 focus:border-maroon transition-colors" placeholder="Acme Inc." />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">Email *</label>
                        <input id="email" name="email" type="email" required className="w-full rounded-xl border border-sand bg-ivory px-4 py-3 text-charcoal focus:outline-none focus:ring-2 focus:ring-maroon/30 focus:border-maroon transition-colors" placeholder="ada@acme.com" />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">Phone / WhatsApp</label>
                        <input id="phone" name="phone" type="tel" className="w-full rounded-xl border border-sand bg-ivory px-4 py-3 text-charcoal focus:outline-none focus:ring-2 focus:ring-maroon/30 focus:border-maroon transition-colors" placeholder="+234 800 000 0000" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-charcoal mb-2">What do you need help with? *</label>
                      <select id="service" name="service" required defaultValue="" className="w-full rounded-xl border border-sand bg-ivory px-4 py-3 text-charcoal focus:outline-none focus:ring-2 focus:ring-maroon/30 focus:border-maroon transition-colors">
                        <option value="" disabled>Select a service</option>
                        {SERVICE_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-charcoal mb-2">Monthly budget range</label>
                      <select id="budget" name="budget" defaultValue="" className="w-full rounded-xl border border-sand bg-ivory px-4 py-3 text-charcoal focus:outline-none focus:ring-2 focus:ring-maroon/30 focus:border-maroon transition-colors">
                        <option value="" disabled>Select a range</option>
                        {BUDGET_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">Tell us about your goals</label>
                      <textarea id="message" name="message" rows={4} className="w-full rounded-xl border border-sand bg-ivory px-4 py-3 text-charcoal focus:outline-none focus:ring-2 focus:ring-maroon/30 focus:border-maroon transition-colors resize-none" placeholder="What are you trying to grow, and what's gotten in the way so far?" />
                    </div>
                    {submitError && (
                      <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">{submitError}</p>
                    )}
                    <button type="submit" disabled={loading} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-gold to-gold-bright text-charcoal text-sm font-semibold hover:opacity-90 disabled:opacity-60 transition-opacity">
                      {loading ? 'Sending…' : 'Send Message'} {!loading && <ArrowRight size={16} />}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-sand/20 py-20 border-t border-sand">
          <div className="max-w-4xl mx-auto px-6 lg:px-10">
            <Reveal className="mb-12">
              <h2 className="font-display text-3xl font-bold text-charcoal">Frequently Asked Questions</h2>
            </Reveal>
            <FAQAccordion faqs={CONTACT_FAQS} />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
