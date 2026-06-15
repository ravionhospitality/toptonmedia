import { Link } from '@tanstack/react-router'
import { Mail, X } from 'lucide-react'
import { InstagramIcon, LinkedinIcon } from './SocialIcons'

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
                <InstagramIcon size={18} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-ivory/50 hover:text-gold transition-colors">
                <LinkedinIcon size={18} />
              </a>
              <a href="#" aria-label="X (Twitter)" className="text-ivory/50 hover:text-gold transition-colors">
                <X size={18} />
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
