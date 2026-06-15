import { Link } from '@tanstack/react-router'
import { Mail } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="font-display text-2xl font-semibold tracking-tight">
              Topton<span className="text-gold">.</span>
            </div>
            <p className="mt-4 text-sm text-ivory/60 max-w-sm leading-relaxed">
              A performance marketing studio for brands that measure growth
              in revenue, not impressions. Based in Lagos, working everywhere.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-ivory/50 hover:text-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="text-ivory/50 hover:text-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="#" aria-label="X / Twitter" className="text-ivory/50 hover:text-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l16 16M4 20L20 4"/>
                </svg>
              </a>
              <a href="mailto:hello@toptonmedia.com" aria-label="Email" className="text-ivory/50 hover:text-gold transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Studio</p>
            <ul className="space-y-3 text-sm text-ivory/70">
              <li><Link to="/about" className="hover:text-ivory transition-colors">About</Link></li>
              <li><Link to="/services" className="hover:text-ivory transition-colors">Services</Link></li>
              <li><Link to="/work" className="hover:text-ivory transition-colors">Work</Link></li>
              <li><Link to="/team" className="hover:text-ivory transition-colors">Team</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Get in touch</p>
            <ul className="space-y-3 text-sm text-ivory/70">
              <li>Lagos, Nigeria</li>
              <li>
                <a href="mailto:hello@toptonmedia.com" className="hover:text-ivory transition-colors">
                  hello@toptonmedia.com
                </a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-ivory transition-colors">
                  Start a project &rarr;
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-ivory/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory/40">
          <p>&copy; {new Date().getFullYear()} Topton Media. All rights reserved.</p>
          <p>Crafted in Lagos.</p>
        </div>
      </div>
    </footer>
  )
}
