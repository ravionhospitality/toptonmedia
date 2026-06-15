import { useState } from 'react'
import { Link, useLocation } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { to: '/',         label: 'Home'     },
  { to: '/services', label: 'Services' },
  { to: '/work',     label: 'Work'     },
  { to: '/about',    label: 'About'    },
  { to: '/team',     label: 'Team'     },
  { to: '/contact',  label: 'Contact'  },
]

export function SiteNav() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <header className="sticky top-0 z-50 bg-ivory/90 backdrop-blur-md border-b border-sand">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="font-display text-2xl font-semibold tracking-tight text-maroon">
            Topton<span className="text-gold">.</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
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
            <Link
              to="/contact"
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-maroon text-ivory text-sm font-semibold tracking-wide hover:bg-maroon-deep transition-colors"
            >
              Start a Project
            </Link>
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
        <div className="md:hidden border-t border-sand bg-ivory">
          <nav className="flex flex-col px-6 py-4 gap-1">
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
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center px-5 py-3 rounded-full bg-maroon text-ivory text-sm font-semibold tracking-wide"
            >
              Start a Project
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
