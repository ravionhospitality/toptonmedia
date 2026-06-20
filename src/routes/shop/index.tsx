import { createFileRoute, Link, Outlet, useMatchRoute } from '@tanstack/react-router'
import { useState, useMemo } from 'react'
import { Star, ShoppingBag } from 'lucide-react'
import { SiteNav } from '../../components/SiteNav'
import { SiteFooter } from '../../components/SiteFooter'
import { supabase } from '../../lib/supabase'
import { seoMeta, seoLinks, breadcrumbSchema } from '../../lib/seo'

export interface ShopProduct {
  id: string
  slug: string
  name: string
  product_type: 'course' | 'tool' | 'service'
  category: string
  short_description: string
  card_image: string
  price_ngn: number
  price_usd: number
  compare_at_price_ngn: number | null
  compare_at_price_usd: number | null
  rating: number | null
  review_count: number
  featured: boolean
}

type SortOption = 'popularity' | 'rating' | 'latest' | 'price_low' | 'price_high'
type Currency = 'NGN' | 'USD'

async function fetchActiveProducts(): Promise<ShopProduct[]> {
  const { data } = await supabase
    .from('products')
    .select('id,slug,name,product_type,category,short_description,card_image,price_ngn,price_usd,compare_at_price_ngn,compare_at_price_usd,rating,review_count,featured')
    .eq('active', true)
    .order('created_at', { ascending: false })
  return data ?? []
}

export const Route = createFileRoute('/shop/')({
  head: () => ({
    meta: seoMeta({
      title: 'Shop | Courses, Tools & Services — Topton Media',
      description: 'Browse courses, prospecting software, and marketing services from Topton Media. Built for Nigerian businesses and entrepreneurs at home and abroad.',
      path: '/shop',
    }),
    links: seoLinks('/shop'),
    scripts: [{
      type: 'application/ld+json',
      children: JSON.stringify(breadcrumbSchema([
        { name: 'Home', url: 'https://toptonmedia.com' },
        { name: 'Shop', url: 'https://toptonmedia.com/shop' },
      ])),
    }],
  }),
  loader: async () => {
    const products = await fetchActiveProducts()
    return { products }
  },
  component: ShopLayout,
})

function ShopLayout() {
  const matchRoute = useMatchRoute()
  const isSlug = matchRoute({ to: '/shop/$slug', fuzzy: false })
  if (isSlug) return <Outlet />
  return <ShopPageInner />
}

function formatPrice(amount: number, currency: Currency) {
  if (currency === 'NGN') {
    return `₦${amount.toLocaleString('en-NG')}`
  }
  return `$${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

function ShopPageInner() {
  const { products } = Route.useLoaderData()
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeType, setActiveType] = useState<'All' | 'course' | 'tool' | 'service'>('All')
  const [sort, setSort] = useState<SortOption>('popularity')
  const [currency, setCurrency] = useState<Currency>('NGN')

  const categories = useMemo(() => {
    const set = new Set(products.map(p => p.category).filter(Boolean))
    return ['All', ...Array.from(set)]
  }, [products])

  const filtered = useMemo(() => {
    let list = products
    if (activeCategory !== 'All') list = list.filter(p => p.category === activeCategory)
    if (activeType !== 'All') list = list.filter(p => p.product_type === activeType)

    const sorted = [...list]
    switch (sort) {
      case 'rating':
        sorted.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0))
        break
      case 'price_low':
        sorted.sort((a, b) => {
          const pa = currency === 'NGN' ? a.price_ngn : a.price_usd
          const pb = currency === 'NGN' ? b.price_ngn : b.price_usd
          return pa - pb
        })
        break
      case 'price_high':
        sorted.sort((a, b) => {
          const pa = currency === 'NGN' ? a.price_ngn : a.price_usd
          const pb = currency === 'NGN' ? b.price_ngn : b.price_usd
          return pb - pa
        })
        break
      case 'popularity':
        sorted.sort((a, b) => b.review_count - a.review_count)
        break
      case 'latest':
      default:
        // already ordered by created_at desc from the loader
        break
    }
    return sorted
  }, [products, activeCategory, activeType, sort, currency])

  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />
      <main className="flex-1">
        <section className="bg-charcoal pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <p className="font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-gold mb-4">Shop</p>
            <h1 className="font-display text-5xl sm:text-6xl font-extrabold leading-[1.1] text-ivory max-w-3xl">
              Courses, Tools &amp; Services Built for Growth
            </h1>
            <p className="mt-6 text-lg text-sand/80 leading-[1.7] max-w-2xl">
              Practical courses, the LeadThur prospecting tool, and done-for-you services, all in one place.
            </p>
          </div>
        </section>

        <section className="bg-ivory py-12 border-b border-sand">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-wrap items-center gap-4 justify-between">
            <div className="flex flex-wrap gap-2">
              {(['All', 'course', 'tool', 'service'] as const).map(t => (
                <button
                  key={t}
                  onClick={() => setActiveType(t)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors capitalize ${
                    activeType === t ? 'bg-maroon text-ivory' : 'bg-sand/60 text-charcoal/70 hover:bg-sand'
                  }`}
                >
                  {t === 'All' ? 'All' : t === 'tool' ? 'Software' : `${t}s`}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <select
                value={sort}
                onChange={e => setSort(e.target.value as SortOption)}
                className="rounded-full border border-sand bg-ivory px-4 py-2 text-sm text-charcoal/80"
              >
                <option value="popularity">Sort by popularity</option>
                <option value="rating">Sort by average rating</option>
                <option value="latest">Sort by latest</option>
                <option value="price_low">Price: low to high</option>
                <option value="price_high">Price: high to low</option>
              </select>

              <div className="flex rounded-full border border-sand overflow-hidden">
                {(['NGN', 'USD'] as Currency[]).map(c => (
                  <button
                    key={c}
                    onClick={() => setCurrency(c)}
                    className={`px-4 py-2 text-sm font-medium transition-colors ${
                      currency === c ? 'bg-maroon text-ivory' : 'bg-ivory text-charcoal/70 hover:bg-sand'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {categories.length > 1 && (
            <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-wrap gap-2 mt-4">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    activeCategory === cat ? 'bg-gold/20 text-gold border border-gold/40' : 'text-charcoal/50 border border-sand hover:bg-sand/40'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </section>

        <section className="bg-ivory py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            {filtered.length === 0 && (
              <p className="text-charcoal/40 py-12 text-center">No products found. Check back soon.</p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map(product => {
                const price = currency === 'NGN' ? product.price_ngn : product.price_usd
                const comparePrice = currency === 'NGN' ? product.compare_at_price_ngn : product.compare_at_price_usd
                const hasDiscount = comparePrice != null && comparePrice > price

                return (
                  <Link
                    key={product.slug}
                    to="/shop/$slug"
                    params={{ slug: product.slug }}
                    className="group flex flex-col h-full bg-ivory border border-sand rounded-2xl overflow-hidden hover:border-gold hover:shadow-lg transition-all"
                  >
                    <div className="relative aspect-square overflow-hidden bg-sand/20">
                      <img
                        src={product.card_image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      {hasDiscount && (
                        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-maroon text-ivory text-[10px] font-bold uppercase tracking-wide">
                          {Math.round((1 - price / comparePrice!) * 100)}% Off
                        </span>
                      )}
                      <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-charcoal/80 text-ivory text-[10px] font-semibold uppercase tracking-wide capitalize">
                        {product.product_type === 'tool' ? 'Software' : product.product_type}
                      </span>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h2 className="font-display text-lg font-semibold text-charcoal mb-2 leading-snug">
                        {product.name}
                      </h2>
                      <p className="text-sm text-charcoal/60 leading-relaxed mb-4 flex-1 line-clamp-2">
                        {product.short_description}
                      </p>

                      {product.rating != null && (
                        <div className="flex items-center gap-1 mb-3 text-xs text-charcoal/50">
                          <Star size={13} className="fill-gold text-gold" />
                          <span className="font-medium text-charcoal/70">{product.rating.toFixed(2)}</span>
                          <span>out of 5</span>
                        </div>
                      )}

                      <div className="flex items-center justify-between pt-4 border-t border-sand">
                        <div className="flex items-baseline gap-2">
                          {hasDiscount && (
                            <span className="text-sm text-charcoal/40 line-through">
                              {formatPrice(comparePrice!, currency)}
                            </span>
                          )}
                          <span className="font-display text-lg font-bold text-maroon">
                            {formatPrice(price, currency)}
                          </span>
                        </div>
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold group-hover:gap-2.5 transition-all">
                          <ShoppingBag size={13} /> View
                        </span>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
