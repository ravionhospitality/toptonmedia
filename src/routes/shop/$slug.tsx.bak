import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { useState } from 'react'
import { Star, ArrowRight, Loader2 } from 'lucide-react'
import { SiteNav } from '../../components/SiteNav'
import { SiteFooter } from '../../components/SiteFooter'
import { supabase } from '../../lib/supabase'
import { seoMeta, seoLinks, breadcrumbSchema } from '../../lib/seo'
import { createPendingOrder, startPaystackCheckout, startStripeCheckout } from '../../lib/payments.server'

interface ProductPlan {
  label: string
  price_ngn: number
  price_usd: number
  installments: number
}

interface ProductDetail {
  id: string
  slug: string
  name: string
  product_type: 'course' | 'tool' | 'service'
  category: string
  short_description: string
  description_html: string
  hero_image: string
  price_ngn: number
  price_usd: number
  compare_at_price_ngn: number | null
  compare_at_price_usd: number | null
  plans: ProductPlan[]
  rating: number | null
  review_count: number
}

type Currency = 'NGN' | 'USD'

async function fetchProductBySlug(slug: string): Promise<ProductDetail | null> {
  const { data } = await supabase
    .from('products')
    .select('*')
    .eq('slug', slug)
    .eq('active', true)
    .single()
  return data ?? null
}

export const Route = createFileRoute('/shop/$slug')({
  head: async ({ params }) => {
    const product = await fetchProductBySlug(params.slug)
    if (!product) return { meta: [], links: [] }
    return {
      meta: seoMeta({
        title: `${product.name} — Topton Media`,
        description: product.short_description,
        path: `/shop/${product.slug}`,
        image: product.hero_image,
      }),
      links: seoLinks(`/shop/${product.slug}`),
      scripts: [{
        type: 'application/ld+json',
        children: JSON.stringify(breadcrumbSchema([
          { name: 'Home', url: 'https://toptonmedia.com' },
          { name: 'Shop', url: 'https://toptonmedia.com/shop' },
          { name: product.name, url: `https://toptonmedia.com/shop/${product.slug}` },
        ])),
      }],
    }
  },
  loader: async ({ params }) => {
    const product = await fetchProductBySlug(params.slug)
    if (!product) throw notFound()
    return { product }
  },
  component: ProductDetailPage,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-display text-4xl font-bold text-charcoal mb-4">Product Not Found</h1>
        <Link to="/shop" className="text-maroon hover:underline">Browse the shop →</Link>
      </div>
    </div>
  ),
})

function formatPrice(amount: number, currency: Currency) {
  if (currency === 'NGN') return `₦${amount.toLocaleString('en-NG')}`
  return `$${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

function ProductDetailPage() {
  const { product } = Route.useLoaderData()

  const [currency, setCurrency] = useState<Currency>('NGN')
  const [selectedPlan, setSelectedPlan] = useState<ProductPlan | null>(null)

  const [showForm, setShowForm] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [formError, setFormError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const price = selectedPlan
    ? (currency === 'NGN' ? selectedPlan.price_ngn : selectedPlan.price_usd)
    : (currency === 'NGN' ? product.price_ngn : product.price_usd)

  const comparePrice = currency === 'NGN' ? product.compare_at_price_ngn : product.compare_at_price_usd
  const hasDiscount = !selectedPlan && comparePrice != null && comparePrice > price

  async function handleProceedToPayment(processor: 'paystack' | 'stripe') {
    setFormError('')
    if (!name.trim() || !email.trim() || !phone.trim() || !whatsapp.trim()) {
      setFormError('Please fill in all fields before continuing.')
      return
    }
    if (!email.includes('@')) {
      setFormError('Please enter a valid email address.')
      return
    }

    setSubmitting(true)
    try {
      const { orderId } = await createPendingOrder({
        data: {
          customerName: name.trim(),
          customerEmail: email.trim(),
          customerPhone: phone.trim(),
          customerWhatsapp: whatsapp.trim(),
          productId: product.id,
          productSlug: product.slug,
          productName: product.name,
          selectedPlanLabel: selectedPlan?.label,
          currency,
          amount: price,
        },
      })

      if (processor === 'paystack') {
        const { authorizationUrl } = await startPaystackCheckout({
          data: { orderId, email: email.trim(), amountNgn: currency === 'NGN' ? price : product.price_ngn },
        })
        window.location.href = authorizationUrl
      } else {
        const { sessionUrl } = await startStripeCheckout({
          data: {
            orderId,
            email: email.trim(),
            amountUsd: currency === 'USD' ? price : product.price_usd,
            productName: product.name,
          },
        })
        window.location.href = sessionUrl
      }
    } catch (err) {
      setFormError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />
      <main className="flex-1">
        <section className="relative bg-charcoal overflow-hidden pt-20 pb-24">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(circle at 80% 20%, rgba(123,13,42,0.4) 0%, transparent 60%)' }}
          />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-xs text-ivory/40">
                <li><Link to="/" className="hover:text-ivory transition-colors">Home</Link></li>
                <li>/</li>
                <li><Link to="/shop" className="hover:text-ivory transition-colors">Shop</Link></li>
                <li>/</li>
                <li className="text-gold">{product.name}</li>
              </ol>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-7">
                <span className="font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-gold mb-4 inline-block">
                  {product.category}
                </span>
                <h1 className="font-display text-4xl sm:text-5xl font-extrabold leading-[1.1] text-ivory mb-6">
                  {product.name}
                </h1>
                <p className="text-lg text-sand/90 leading-[1.7] mb-6 max-w-xl">
                  {product.short_description}
                </p>

                {product.rating != null && (
                  <div className="flex items-center gap-2 mb-8 text-sm text-ivory/70">
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={15} className={i < Math.round(product.rating!) ? 'fill-gold text-gold' : 'text-ivory/20'} />
                      ))}
                    </div>
                    <span>{product.rating.toFixed(2)} out of 5 ({product.review_count} reviews)</span>
                  </div>
                )}

                <div
                  className="prose-product text-ivory/70 leading-[1.7]"
                  dangerouslySetInnerHTML={{ __html: product.description_html }}
                />
              </div>

              <div className="lg:col-span-5">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gold/10 rounded-3xl blur-2xl" />
                  <img
                    src={product.hero_image}
                    alt={product.name}
                    className="relative rounded-2xl w-full aspect-square object-cover mb-6"
                    loading="lazy"
                  />
                </div>

                <div className="bg-cardbrown rounded-2xl p-7">
                  <div className="flex rounded-full border border-ivory/15 overflow-hidden mb-6 w-fit">
                    {(['NGN', 'USD'] as Currency[]).map(c => (
                      <button
                        key={c}
                        onClick={() => { setCurrency(c); setSelectedPlan(null) }}
                        className={`px-4 py-1.5 text-xs font-semibold transition-colors ${
                          currency === c ? 'bg-gold text-charcoal' : 'text-ivory/60 hover:text-ivory'
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>

                  {product.plans?.length > 0 && (
                    <div className="mb-6 space-y-2">
                      <p className="font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-gold mb-3">Choose a plan</p>
                      <button
                        onClick={() => setSelectedPlan(null)}
                        className={`w-full text-left px-4 py-3 rounded-xl border transition-colors ${
                          !selectedPlan ? 'border-gold bg-gold/10' : 'border-ivory/15 hover:border-ivory/30'
                        }`}
                      >
                        <span className="text-sm font-semibold text-ivory">Standard Price</span>
                        <span className="block text-xs text-ivory/50 mt-0.5">{formatPrice(currency === 'NGN' ? product.price_ngn : product.price_usd, currency)}</span>
                      </button>
                      {product.plans.map(plan => (
                        <button
                          key={plan.label}
                          onClick={() => setSelectedPlan(plan)}
                          className={`w-full text-left px-4 py-3 rounded-xl border transition-colors ${
                            selectedPlan?.label === plan.label ? 'border-gold bg-gold/10' : 'border-ivory/15 hover:border-ivory/30'
                          }`}
                        >
                          <span className="text-sm font-semibold text-ivory">{plan.label}</span>
                          <span className="block text-xs text-ivory/50 mt-0.5">
                            {formatPrice(currency === 'NGN' ? plan.price_ngn : plan.price_usd, currency)}
                            {plan.installments > 1 ? ` (${plan.installments} payments)` : ''}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}

                  <div className="flex items-baseline gap-3 mb-6">
                    {hasDiscount && (
                      <span className="text-base text-ivory/40 line-through">{formatPrice(comparePrice!, currency)}</span>
                    )}
                    <span className="font-display text-3xl font-bold text-gold">{formatPrice(price, currency)}</span>
                  </div>

                  {!showForm ? (
                    <button
                      onClick={() => setShowForm(true)}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-gold to-gold-bright text-charcoal text-sm font-semibold hover:opacity-90 transition-opacity"
                    >
                      Get Started <ArrowRight size={16} />
                    </button>
                  ) : (
                    <div className="space-y-3">
                      <p className="font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-gold mb-2">Your details</p>
                      <input
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Full name"
                        className="checkout-input"
                      />
                      <input
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Email address"
                        type="email"
                        className="checkout-input"
                      />
                      <input
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        placeholder="Phone number"
                        className="checkout-input"
                      />
                      <input
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                        placeholder="WhatsApp number"
                        className="checkout-input"
                      />

                      {formError && (
                        <p className="text-xs text-red-400 bg-red-900/20 border border-red-700/30 rounded-lg px-3 py-2">{formError}</p>
                      )}

                      <div className="flex flex-col gap-2 pt-2">
                        <button
                          onClick={() => handleProceedToPayment('paystack')}
                          disabled={submitting}
                          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gold to-gold-bright text-charcoal text-sm font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
                        >
                          {submitting ? <Loader2 size={16} className="animate-spin" /> : null}
                          Pay with Paystack
                        </button>
                        <button
                          onClick={() => handleProceedToPayment('stripe')}
                          disabled={submitting}
                          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-ivory/20 text-ivory text-sm font-semibold hover:border-ivory/40 transition-colors disabled:opacity-50"
                        >
                          {submitting ? <Loader2 size={16} className="animate-spin" /> : null}
                          Pay with Card (Stripe)
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />

      <style>{`
        .checkout-input { width: 100%; background: #1A0E10; border: 1px solid rgba(250,246,240,0.15); border-radius: 0.75rem; padding: 0.7rem 1rem; color: #FAF6F0; font-size: 0.875rem; }
        .checkout-input:focus { outline: none; border-color: #C9A84C; }
        .checkout-input::placeholder { color: rgba(250,246,240,0.35); }
        .prose-product p { margin-bottom: 1rem; }
        .prose-product ul { padding-left: 1.5rem; margin-bottom: 1rem; list-style: disc; }
        .prose-product li { margin-bottom: 0.4rem; }
      `}</style>
    </div>
  )
}
