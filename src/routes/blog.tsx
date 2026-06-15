import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { ArrowRight, Clock, User } from 'lucide-react'
import { SiteNav } from '../components/SiteNav'
import { SiteFooter } from '../components/SiteFooter'

export const Route = createFileRoute('/blog')({
  component: BlogPage,
})

const POSTS = [
  {
    slug: 'performance-marketing-lagos-guide',
    title: 'The Complete Guide to Performance Marketing in Lagos (2025)',
    excerpt: 'How Nigerian SMEs can build paid media campaigns that return revenue, not impressions — including platform selection, budget benchmarks, and the exact metrics that actually matter in the Lagos market.',
    category: 'Performance Marketing',
    readTime: '12 min read',
    author: 'Temitope Bamidele',
    date: 'May 28, 2025',
    featured: true,
    keywords: ['Performance marketing Lagos', 'Digital marketing Nigeria', 'Paid media Nigeria'],
  },
  {
    slug: 'meta-ads-nigeria-2025',
    title: 'Meta Ads in Nigeria: Why Most Campaigns Fail and How to Fix Yours',
    excerpt: 'A deep-dive into the most common Meta advertising mistakes Nigerian brands make — from targeting errors to creative mismatches — with fixes you can implement this week.',
    category: 'Paid Media',
    readTime: '9 min read',
    author: 'Chidi Okonkwo',
    date: 'May 14, 2025',
    featured: false,
    keywords: ['Meta ads Nigeria', 'Facebook advertising Lagos', 'Digital marketing Lagos startups'],
  },
  {
    slug: 'lead-generation-sme-nigeria',
    title: 'Lead Generation for Nigerian SMEs: A Framework That Actually Works',
    excerpt: "Most SME lead generation falls apart at the point of follow-up. Here's a step-by-step framework for building a lead system that generates, qualifies, and converts — without a huge team.",
    category: 'Lead Generation',
    readTime: '10 min read',
    author: 'Adaeze Nwosu',
    date: 'April 30, 2025',
    featured: false,
    keywords: ['Lead generation for SMEs', 'Lead generation Nigeria', 'ROI-driven marketing campaigns'],
  },
  {
    slug: 'tiktok-marketing-africa',
    title: 'TikTok Marketing in Africa: Organic Growth Strategies for Brands in 2025',
    excerpt: "TikTok's African user base is growing faster than any other platform. Here's how growth-stage brands can build audience without ad spend — and when to layer paid on top.",
    category: 'Social Media',
    readTime: '8 min read',
    author: 'Tunde Ologunde',
    date: 'April 15, 2025',
    featured: false,
    keywords: ['TikTok marketing Africa', 'Social media marketing Lagos', 'Growth marketing Nigeria'],
  },
  {
    slug: 'user-acquisition-africa-startups',
    title: 'User Acquisition for African Startups: Channels, Costs, and What to Avoid',
    excerpt: "A comparison of the major user acquisition channels available to African tech startups — including real cost benchmarks, install rates, and activation data from campaigns we've run in Nigeria, Ghana, and Kenya.",
    category: 'User Acquisition',
    readTime: '14 min read',
    author: 'Temitope Bamidele',
    date: 'April 1, 2025',
    featured: false,
    keywords: ['User acquisition agency Africa', 'Growth marketing Nigeria', 'Digital marketing Lagos startups'],
  },
  {
    slug: 'roi-ad-spend-nigeria',
    title: 'How to Measure ROI on Ad Spend: A Practical Guide for Nigerian Founders',
    excerpt: 'Revenue attribution in Nigeria is harder than it looks — especially when WhatsApp, offline referrals, and delayed conversions are part of the picture. Here\'s how to build a model that\'s honest about what\'s working.',
    category: 'Analytics',
    readTime: '11 min read',
    author: 'Kolade Fashola',
    date: 'March 18, 2025',
    featured: false,
    keywords: ['ROI-driven marketing campaigns', 'Performance marketing Lagos', 'Digital marketing Nigeria'],
  },
  {
    slug: 'email-lifecycle-marketing-lagos',
    title: "Email Marketing in Nigeria: Why Your Open Rates Don't Matter (And What Does)",
    excerpt: "Nigerian email marketing has a trust problem. Here's how to rebuild it — from subject lines and send-time optimisation to lifecycle flows that convert first-time buyers into repeat customers.",
    category: 'Email & Lifecycle',
    readTime: '7 min read',
    author: 'Ngozi Amaechi',
    date: 'March 5, 2025',
    featured: false,
    keywords: ['Email marketing Nigeria', 'Digital marketing Lagos', 'Growth marketing Nigeria'],
  },
  {
    slug: 'seo-content-nigerian-brands',
    title: "SEO for Nigerian Brands: How to Rank When Your Competitors Have Bigger Budgets",
    excerpt: "Most Nigerian business websites don't rank because they were built for looks, not search. Here's a realistic SEO playbook for SMEs working with limited resources but unlimited ambition.",
    category: 'SEO & Content',
    readTime: '13 min read',
    author: 'Seun Adeyemi',
    date: 'February 20, 2025',
    featured: false,
    keywords: ['SEO Nigeria', 'Content marketing Lagos', 'Digital marketing Nigeria'],
  },
]

const CATEGORIES = ['All', 'Performance Marketing', 'Paid Media', 'Lead Generation', 'User Acquisition', 'SEO & Content', 'Analytics', 'Social Media', 'Email & Lifecycle']

function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const featured = POSTS.find(p => p.featured)
  const allOthers = POSTS.filter(p => !p.featured)
  const filtered = activeCategory === 'All'
    ? allOthers
    : allOthers.filter(p => p.category === activeCategory)

  return (
    <div className="min-h-screen flex flex-col bg-ivory">
      <SiteNav />
      <main className="flex-1">

        {/* Header */}
        <section className="bg-charcoal pt-20 pb-24 lg:pt-28 lg:pb-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold mb-5">Insights</p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.04] tracking-tight text-ivory max-w-4xl">
              Marketing thinking from the <span className="text-gold italic">inside of the work.</span>
            </h1>
            <p className="mt-8 text-lg text-ivory/60 max-w-xl leading-relaxed">
              No AI fluff. No generic advice. Just what we've actually learned running campaigns for African brands.
            </p>
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

        {/* Featured Post */}
        {featured && (
          <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-8">
            <div className="bg-charcoal rounded-3xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-10 lg:p-14 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 rounded-full bg-maroon text-ivory text-xs font-semibold">{featured.category}</span>
                    <span className="font-mono text-xs text-gold/60">Featured</span>
                  </div>
                  <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ivory leading-tight mb-5">{featured.title}</h2>
                  <p className="text-ivory/60 leading-relaxed mb-8">{featured.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-ivory/40 mb-8">
                    <span className="flex items-center gap-1.5"><User size={12} />{featured.author}</span>
                    <span className="flex items-center gap-1.5"><Clock size={12} />{featured.readTime}</span>
                    <span>{featured.date}</span>
                  </div>
                  <Link
                    to="/blog/$slug"
                    params={{ slug: featured.slug }}
                    className="inline-flex items-center gap-2 text-gold text-sm font-semibold hover:underline underline-offset-4"
                  >
                    Read the article <ArrowRight size={14} />
                  </Link>
                </div>
                <div className="bg-maroon/40 h-64 lg:h-auto flex items-center justify-center">
                  <div className="text-center px-8">
                    <p className="font-display text-5xl font-bold text-gold/20">2025</p>
                    <p className="font-mono text-xs uppercase tracking-widest text-ivory/30 mt-2">Performance Marketing</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Category Filter */}
        <section className="max-w-7xl mx-auto px-6 lg:px-10 py-8">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide border transition-colors ${
                  cat === activeCategory
                    ? 'bg-maroon text-ivory border-maroon'
                    : 'bg-white text-charcoal/60 border-sand hover:border-maroon hover:text-maroon'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Posts Grid */}
        <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-24">
          {filtered.length === 0 ? (
            <p className="text-charcoal/40 text-sm py-12 text-center">No posts in this category yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((post) => (
                <article key={post.slug} className="bg-white rounded-2xl overflow-hidden border border-sand hover:shadow-lg transition-shadow group">
                  <div className="bg-sand/40 h-44 flex items-center justify-center">
                    <span className="font-display text-3xl font-bold text-charcoal/10 group-hover:text-charcoal/20 transition-colors">{post.category}</span>
                  </div>
                  <div className="p-7">
                    <span className="px-2.5 py-1 rounded-full bg-maroon/10 text-maroon text-xs font-semibold">{post.category}</span>
                    <h3 className="font-display text-xl font-semibold text-charcoal mt-4 mb-3 leading-tight">{post.title}</h3>
                    <p className="text-charcoal/55 text-sm leading-relaxed mb-5 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between border-t border-sand pt-5">
                      <div className="flex items-center gap-3 text-xs text-charcoal/40">
                        <span className="flex items-center gap-1"><Clock size={11} />{post.readTime}</span>
                        <span>{post.date}</span>
                      </div>
                      <Link
                        to="/blog/$slug"
                        params={{ slug: post.slug }}
                        className="text-maroon text-xs font-semibold flex items-center gap-1 hover:underline underline-offset-2"
                      >
                        Read <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* Newsletter */}
        <section className="bg-maroon py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold/70 mb-5">Stay sharp</p>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold text-ivory tracking-tight max-w-2xl mx-auto">
              Marketing insights for founders who measure in revenue.
            </h2>
            <p className="mt-6 text-ivory/65 max-w-md mx-auto">
              One email, twice a month. What we're learning, what's working, and what to avoid in African growth marketing.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-5 py-3.5 rounded-full bg-ivory/10 text-ivory placeholder-ivory/40 border border-ivory/20 focus:outline-none focus:border-gold text-sm"
              />
              <button className="px-6 py-3.5 rounded-full bg-gold text-charcoal text-sm font-semibold hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  )
}
