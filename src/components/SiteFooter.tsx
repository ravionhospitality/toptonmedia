import { Link } from '@tanstack/react-router'
import { Mail, Phone, MapPin } from 'lucide-react'
const InstagramIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
  </svg>
)
const TwitterIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
  </svg>
)
const LinkedinIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

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
                <InstagramIcon size={18} />
              </a>
              <a href={CONTACT.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-ivory/50 hover:text-gold transition-colors">
                <LinkedinIcon size={18} />
              </a>
              <a href={CONTACT.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-ivory/50 hover:text-gold transition-colors">
                <TwitterIcon size={18} />
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
