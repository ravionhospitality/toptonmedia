import { createFileRoute, Link, useSearch } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { CheckCircle2, XCircle, Loader2, ArrowRight } from 'lucide-react'
import { SiteNav } from '../../components/SiteNav'
import { SiteFooter } from '../../components/SiteFooter'
import { verifyOrderPayment } from '../../lib/payments.server'
import { supabase } from '../../lib/supabase'

interface SearchParams {
  processor?: 'paystack' | 'stripe'
  order_id?: string
  session_id?: string
  reference?: string
}

export const Route = createFileRoute('/order/confirmation')({
  validateSearch: (search: Record<string, unknown>): SearchParams => ({
    processor: search.processor as 'paystack' | 'stripe' | undefined,
    order_id: search.order_id as string | undefined,
    session_id: search.session_id as string | undefined,
    reference: search.reference as string | undefined,
  }),
  component: OrderConfirmationPage,
})

type VerifyState = 'verifying' | 'success' | 'failed' | 'error'

function OrderConfirmationPage() {
  const search = useSearch({ from: '/order/confirmation' })
  const [state, setState] = useState<VerifyState>('verifying')
  const [order, setOrder] = useState<any>(null)
  const [product, setProduct] = useState<any>(null)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    async function run() {
      if (!search.order_id || !search.processor) {
        setState('error')
        setErrorMessage('Missing order information in the confirmation link.')
        return
      }

      try {
        const result = await verifyOrderPayment({
          data: {
            orderId: search.order_id,
            processor: search.processor,
            sessionId: search.session_id,
          },
        })

        setOrder(result.order)

        if (result.verified) {
          setState('success')
          if (result.order?.product_slug) {
            const { data: productData } = await supabase
              .from('products')
              .select('*')
              .eq('slug', result.order.product_slug)
              .single()
            setProduct(productData)
          }
        } else {
          setState('failed')
        }
      } catch (err) {
        setState('error')
        setErrorMessage(err instanceof Error ? err.message : 'Something went wrong verifying your payment.')
      }
    }
    run()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-ivory">
      <SiteNav />
      <main className="flex-1 flex items-center justify-center py-20">
        <div className="max-w-xl w-full mx-auto px-6">
          {state === 'verifying' && (
            <div className="text-center">
              <Loader2 size={40} className="animate-spin text-maroon mx-auto mb-6" />
              <h1 className="font-display text-2xl font-bold text-charcoal mb-2">Confirming your payment</h1>
              <p className="text-charcoal/60">This usually takes a few seconds. Please don't close this page.</p>
            </div>
          )}

          {state === 'success' && (
            <div className="text-center">
              <CheckCircle2 size={48} className="text-green-600 mx-auto mb-6" />
              <h1 className="font-display text-3xl font-bold text-charcoal mb-3">Payment Successful</h1>
              <p className="text-charcoal/60 mb-8">
                Thank you{order?.customer_name ? `, ${order.customer_name}` : ''}. Your order for{' '}
                <span className="font-semibold text-charcoal">{order?.product_name}</span> has been confirmed.
              </p>

              <FulfillmentBlock order={order} product={product} />
            </div>
          )}

          {state === 'failed' && (
            <div className="text-center">
              <XCircle size={48} className="text-red-600 mx-auto mb-6" />
              <h1 className="font-display text-3xl font-bold text-charcoal mb-3">Payment Not Confirmed</h1>
              <p className="text-charcoal/60 mb-8">
                We could not confirm this payment. If you completed checkout and money was deducted, please
                contact us with your order reference and we will resolve it.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-gold to-gold-bright text-charcoal text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Contact Support <ArrowRight size={16} />
              </Link>
            </div>
          )}

          {state === 'error' && (
            <div className="text-center">
              <XCircle size={48} className="text-red-600 mx-auto mb-6" />
              <h1 className="font-display text-3xl font-bold text-charcoal mb-3">Something Went Wrong</h1>
              <p className="text-charcoal/60 mb-8">{errorMessage}</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-gold to-gold-bright text-charcoal text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Contact Support <ArrowRight size={16} />
              </Link>
            </div>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

function FulfillmentBlock({ order, product }: { order: any; product: any }) {
  if (!product) {
    return (
      <div className="bg-cardbrown rounded-2xl p-8 text-left">
        <p className="text-ivory/70 text-sm">
          We're finalizing your order details. A confirmation email is on its way to{' '}
          <span className="text-ivory font-medium">{order?.customer_email}</span>.
        </p>
      </div>
    )
  }

  if (product.product_type === 'course') {
    const deliveryUrl = product.fulfillment?.delivery_url
    return (
      <div className="bg-cardbrown rounded-2xl p-8 text-left">
        <p className="font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-gold mb-3">Access Your Course</p>
        <p className="text-ivory/70 text-sm mb-5">
          {product.fulfillment?.access_note || 'Your course access details have also been sent to your email.'}
        </p>
        {deliveryUrl && (
          <a
            href={deliveryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gold to-gold-bright text-charcoal text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Access Course <ArrowRight size={15} />
          </a>
        )}
      </div>
    )
  }

  if (product.product_type === 'tool') {
    return (
      <div className="bg-cardbrown rounded-2xl p-8 text-left">
        <p className="font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-gold mb-3">Your Access</p>
        <p className="text-ivory/70 text-sm">
          {product.fulfillment?.access_instructions ||
            `We're setting up your access to ${product.name}. You'll receive setup instructions at ${order?.customer_email} shortly.`}
        </p>
      </div>
    )
  }

  if (product.product_type === 'service') {
    const bookingUrl = product.fulfillment?.booking_url || 'https://toptonmedia.com/apply'
    return (
      <div className="bg-cardbrown rounded-2xl p-8 text-left">
        <p className="font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-gold mb-3">Next Step: Book Your Session</p>
        <p className="text-ivory/70 text-sm mb-5">
          Your payment is confirmed. Please book your onboarding call so we can get started.
        </p>
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gold to-gold-bright text-charcoal text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          Book Your Session <ArrowRight size={15} />
        </a>
      </div>
    )
  }

  return null
}
