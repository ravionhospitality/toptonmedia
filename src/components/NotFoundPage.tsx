import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { SiteNav } from '../components/SiteNav'
import { SiteFooter } from '../components/SiteFooter'

export function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />
      <main className="flex-1 flex items-center justify-center bg-charcoal py-32">
        <div className="text-center px-6">
          <p className="font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-gold mb-4">404</p>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-ivory mb-6">
            This page doesn&rsquo;t exist.
          </h1>
          <p className="text-ivory/60 mb-10 max-w-md mx-auto">
            The page you&rsquo;re looking for may have moved, or never existed in the first place.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-gold to-gold-bright text-charcoal text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Back to Home <ArrowRight size={16} />
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
