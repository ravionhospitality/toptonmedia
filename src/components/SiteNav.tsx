import { useState } from 'react'
import { Link, useLocation } from '@tanstack/react-router'
import { Menu, X, ChevronDown } from 'lucide-react'
import { SERVICES } from '../lib/services'
import { CONTACT } from '../lib/site-data'

const NAV_LINKS = [
  { to: '/about',        label: 'About'   },
  { to: '/case-studies', label: 'Work'    },
  { to: '/team',         label: 'Team'    },
  { to: '/blog',         label: 'Blog'    },
  { to: '/contact',      label: 'Contact' },
]

export function SiteNav() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <header className="sticky top-0 z-50 bg-ivory/90 backdrop-blur-md border-b border-sand">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img src={CONTACT.logo} alt="Topton Media" className="h-10 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                to="/services"
                className={`flex items-center gap-1 text-sm font-medium tracking-wide transition-colors py-1 ${
                  pathname.startsWith('/services') ? 'text-maroon' : 'text-charcoal/70 hover:text-maroon'
                }`}
              >
                Services
                <ChevronDown size={14} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </Link>

              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[640px]">
                  <div className="bg-ivory border border-sand rounded-2xl shadow-xl p-6 grid grid-cols-2 gap-1">
                    {SERVICES.map(service => (
                      <Link
                        key={service.slug}
                        to="/services/$slug"
                        params={{ slug: service.slug }}
                        className="flex flex-col gap-0.5 px-4 py-2.5 rounded-xl hover:bg-sand/60 transition-colors"
                      >
                        <span className="text-sm font-medium text-charcoal">{service.name}</span>
                        <span className="text-xs text-charcoal/45">{service.category}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {NAV_LINKS.map(link => {
              const active = pathname === link.to
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm font-medium tracking-wide transition-colors relative py-1 ${
                    active ? 'text-maroon' : 'text-charcoal/70 hover:text-maroon'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute -bottom-1 left-0 right-0 h-px bg-gold" />
                  )}
                </Link>
              )
            })}
          </nav>

          <div className="hidden md:block">
            <a
              href={CONTACT.discoveryCallUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-glow inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-gold to-gold-bright text-charcoal text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity"
            >
              Book a Call
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(o => !o)}
            className="md:hidden p-2 -mr-2 text-maroon"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-sand bg-ivory max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {/* Services collapsible */}
            <div className="border-b border-sand/60">
              <button
                onClick={() => setMobileServicesOpen(o => !o)}
                className="w-full flex items-center justify-between py-3 text-base font-medium text-charcoal/80"
              >
                Services
                <ChevronDown size={18} className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileServicesOpen && (
                <div className="pb-3 flex flex-col gap-1">
                  <Link
                    to="/services"
                    onClick={() => setOpen(false)}
                    className="py-2 text-sm font-semibold text-maroon"
                  >
                    All Services
                  </Link>
                  {SERVICES.map(service => (
                    <Link
                      key={service.slug}
                      to="/services/$slug"
                      params={{ slug: service.slug }}
                      onClick={() => setOpen(false)}
                      className="py-2 text-sm text-charcoal/70"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {NAV_LINKS.map(link => {
              const active = pathname === link.to
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`py-3 text-base font-medium border-b border-sand/60 last:border-0 ${
                    active ? 'text-maroon' : 'text-charcoal/80'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <a
              href={CONTACT.discoveryCallUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center px-5 py-3 rounded-full bg-gradient-to-r from-gold to-gold-bright text-charcoal text-sm font-semibold tracking-wide"
            >
              Book a Call
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
