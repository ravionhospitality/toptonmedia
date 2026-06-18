import { Link } from '@tanstack/react-router'
import { Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react'
import { CONTACT } from '../lib/site-data'

const FOOTER_SERVICES = [
  { slug: 'user-acquisition',      name: 'User Acquisition' },
  { slug: 'lead-generation',       name: 'Lead Generation' },
  { slug: 'performance-marketing', name: 'Performance Marketing' },
  { slug: 'web-design-cro',        name: 'Web Design & CRO' },
  { slug: 'social-media-management', name: 'Social Media' },
  { slug: 'seo',                   name: 'SEO' },
]

export function SiteFooter() {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center">
              <img src={CONTACT.logo} alt="Topton Media" className="h-10 w-auto" />
            </Link>
            <p className="mt-4 text-sm text-ivory/60 max-w-sm leading-relaxed">
              A growth and performance marketing agency for brands that measure
              success in revenue, not impressions. Based in Lagos, working with
              clients across Nigeria, Africa, and beyond.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href={CONTACT.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-ivory/50 hover:text-gold transition-colors">
                <Instagram size={18} />
              </a>
              <a href={CONTACT.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-ivory/50 hover:text-gold transition-colors">
                <Linkedin size={18} />
              </a>
              <a href={CONTACT.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-ivory/50 hover:text-gold transition-colors">
                <Twitter size={18} />
              </a>
              <a href={`mailto:${CONTACT.email}`} aria-label="Email" className="text-ivory/50 hover:text-gold transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Services</p>
            <ul className="space-y-3 text-sm text-ivory/70">
              {FOOTER_SERVICES.map(s => (
                <li key={s.slug}>
                  <Link to="/services/$slug" params={{ slug: s.slug }} className="hover:text-ivory transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="text-gold hover:text-gold-bright transition-colors">
                  View all &rarr;
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Get in touch</p>
            <ul className="space-y-3 text-sm text-ivory/70">
              <li className="flex items-start gap-2">
                <MapPin size={15} className="mt-0.5 flex-shrink-0 text-gold" />
                {CONTACT.location}
              </li>
              <li className="flex items-start gap-2">
                <Mail size={15} className="mt-0.5 flex-shrink-0 text-gold" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-ivory transition-colors break-all">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={15} className="mt-0.5 flex-shrink-0 text-gold" />
                <a href={`tel:${CONTACT.phoneIntl}`} className="hover:text-ivory transition-colors">
                  {CONTACT.phone}
                </a>
              </li>
              <li className="pt-2">
                <Link to="/contact" className="text-gold hover:text-gold-bright transition-colors font-medium">
                  Start a project &rarr;
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-ivory/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory/40">
          <p>&copy; {new Date().getFullYear()} {CONTACT.legalName}. All rights reserved.</p>
          <p>Crafted in Lagos.</p>
        </div>
      </div>
    </footer>
  )
}
