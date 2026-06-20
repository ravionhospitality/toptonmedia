// src/lib/payments.server.ts
//
// All Paystack/Stripe secret-key logic lives here. This file only ever
// runs on the server because every export uses createServerFn -- the
// secret keys below are never bundled into client-side JS.
//
// REQUIRED ENV VARS (add to your .env, never commit this file's values):
//   PAYSTACK_SECRET_KEY=sk_live_xxx or sk_test_xxx
//   STRIPE_SECRET_KEY=sk_live_xxx or sk_test_xxx
//   SUPABASE_SERVICE_ROLE_KEY=eyJ...   (Project Settings -> API -> service_role)
//   PUBLIC_SITE_URL=https://toptonmedia.com  (no trailing slash)

import { createServerFn } from '@tanstack/react-start'
import { createClient } from '@supabase/supabase-js'

// Server-side Supabase client using the SERVICE ROLE key, which bypasses
// RLS. This is intentional and safe here because this file never runs
// in the browser. Never use this client or key in any client component.
function getServiceClient() {
  const url = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !serviceKey) {
    throw new Error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in server environment')
  }
  return createClient(url, serviceKey)
}

// ---------------------------------------------------------------------
// 1. Create a pending order from the pre-payment lead form.
// ---------------------------------------------------------------------
export const createPendingOrder = createServerFn({ method: 'POST' })
  .validator((data: {
    customerName: string
    customerEmail: string
    customerPhone: string
    customerWhatsapp: string
    productId: string
    productSlug: string
    productName: string
    selectedPlanLabel?: string
    currency: 'NGN' | 'USD'
    amount: number
  }) => data)
  .handler(async ({ data }) => {
    const supabase = getServiceClient()

    const { data: order, error } = await supabase
      .from('orders')
      .insert({
        customer_name: data.customerName,
        customer_email: data.customerEmail,
        customer_phone: data.customerPhone,
        customer_whatsapp: data.customerWhatsapp,
        product_id: data.productId,
        product_slug: data.productSlug,
        product_name: data.productName,
        selected_plan_label: data.selectedPlanLabel ?? null,
        currency: data.currency,
        amount: data.amount,
        status: 'pending_payment',
      })
      .select('id')
      .single()

    if (error || !order) {
      throw new Error(`Failed to create order: ${error?.message ?? 'unknown error'}`)
    }

    return { orderId: order.id as string }
  })

// ---------------------------------------------------------------------
// 2. Start a Paystack checkout: returns the authorization_url to redirect to.
// ---------------------------------------------------------------------
export const startPaystackCheckout = createServerFn({ method: 'POST' })
  .validator((data: { orderId: string; email: string; amountNgn: number }) => data)
  .handler(async ({ data }) => {
    const secretKey = process.env.PAYSTACK_SECRET_KEY
    const siteUrl = process.env.PUBLIC_SITE_URL
    if (!secretKey) throw new Error('Missing PAYSTACK_SECRET_KEY in server environment')
    if (!siteUrl) throw new Error('Missing PUBLIC_SITE_URL in server environment')

    // Paystack expects amount in kobo (smallest unit), so multiply by 100.
    const amountKobo = Math.round(data.amountNgn * 100)

    const resp = await fetch('https://api.paystack.co/transaction/initialize', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${secretKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: data.email,
        amount: amountKobo,
        currency: 'NGN',
        reference: `order_${data.orderId}_${Date.now()}`,
        callback_url: `${siteUrl}/order/confirmation?processor=paystack&order_id=${data.orderId}`,
        metadata: { order_id: data.orderId },
      }),
    })

    const json = await resp.json()

    if (!resp.ok || !json.status) {
      throw new Error(`Paystack init failed: ${json.message ?? 'unknown error'}`)
    }

    // Save the processor + reference on the order right away so we can
    // look it up during verification even if the customer never returns.
    const supabase = getServiceClient()
    await supabase
      .from('orders')
      .update({
        payment_processor: 'paystack',
        processor_reference: json.data.reference,
      })
      .eq('id', data.orderId)

    return { authorizationUrl: json.data.authorization_url as string }
  })

// ---------------------------------------------------------------------
// 3. Start a Stripe checkout: returns the session url to redirect to.
// ---------------------------------------------------------------------
export const startStripeCheckout = createServerFn({ method: 'POST' })
  .validator((data: {
    orderId: string
    email: string
    amountUsd: number
    productName: string
  }) => data)
  .handler(async ({ data }) => {
    const secretKey = process.env.STRIPE_SECRET_KEY
    const siteUrl = process.env.PUBLIC_SITE_URL
    if (!secretKey) throw new Error('Missing STRIPE_SECRET_KEY in server environment')
    if (!siteUrl) throw new Error('Missing PUBLIC_SITE_URL in server environment')

    // Stripe expects amount in cents (smallest unit).
    const amountCents = Math.round(data.amountUsd * 100)

    const params = new URLSearchParams()
    params.append('mode', 'payment')
    params.append('customer_email', data.email)
    params.append('success_url', `${siteUrl}/order/confirmation?processor=stripe&order_id=${data.orderId}&session_id={CHECKOUT_SESSION_ID}`)
    params.append('cancel_url', `${siteUrl}/shop?checkout=cancelled`)
    params.append('line_items[0][price_data][currency]', 'usd')
    params.append('line_items[0][price_data][product_data][name]', data.productName)
    params.append('line_items[0][price_data][unit_amount]', String(amountCents))
    params.append('line_items[0][quantity]', '1')
    params.append('metadata[order_id]', data.orderId)

    const resp = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${secretKey}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    })

    const json = await resp.json()

    if (!resp.ok) {
      throw new Error(`Stripe session creation failed: ${json.error?.message ?? 'unknown error'}`)
    }

    const supabase = getServiceClient()
    await supabase
      .from('orders')
      .update({
        payment_processor: 'stripe',
        processor_reference: json.id,
      })
      .eq('id', data.orderId)

    return { sessionUrl: json.url as string }
  })

// ---------------------------------------------------------------------
// 4. Verify payment on return from checkout. This is the source of truth
//    -- the confirmation page must call this rather than trusting the
//    redirect URL alone, since URLs can be guessed or replayed.
// ---------------------------------------------------------------------
export const verifyOrderPayment = createServerFn({ method: 'POST' })
  .validator((data: { orderId: string; processor: 'paystack' | 'stripe'; sessionId?: string }) => data)
  .handler(async ({ data }) => {
    const supabase = getServiceClient()

    const { data: order, error: fetchError } = await supabase
      .from('orders')
      .select('*')
      .eq('id', data.orderId)
      .single()

    if (fetchError || !order) {
      throw new Error('Order not found')
    }

    // If we already marked this paid (e.g. user refreshed the confirmation
    // page), don't re-verify or re-fulfill -- just return the known state.
    if (order.status === 'paid' || order.status === 'fulfilled') {
      return { verified: true, order }
    }

    let verified = false

    if (data.processor === 'paystack') {
      const secretKey = process.env.PAYSTACK_SECRET_KEY
      if (!secretKey) throw new Error('Missing PAYSTACK_SECRET_KEY in server environment')

      const resp = await fetch(
        `https://api.paystack.co/transaction/verify/${order.processor_reference}`,
        { headers: { Authorization: `Bearer ${secretKey}` } }
      )
      const json = await resp.json()
      verified = json.status === true && json.data?.status === 'success'

      if (verified) {
        await supabase
          .from('orders')
          .update({ status: 'paid', processor_payload: json.data, updated_at: new Date().toISOString() })
          .eq('id', data.orderId)
      } else {
        await supabase
          .from('orders')
          .update({ status: 'failed', processor_payload: json.data ?? null, updated_at: new Date().toISOString() })
          .eq('id', data.orderId)
      }
    }

    if (data.processor === 'stripe') {
      const secretKey = process.env.STRIPE_SECRET_KEY
      if (!secretKey) throw new Error('Missing STRIPE_SECRET_KEY in server environment')
      if (!data.sessionId) throw new Error('Missing sessionId for Stripe verification')

      const resp = await fetch(
        `https://api.stripe.com/v1/checkout/sessions/${data.sessionId}`,
        { headers: { Authorization: `Bearer ${secretKey}` } }
      )
      const json = await resp.json()
      verified = json.payment_status === 'paid'

      if (verified) {
        await supabase
          .from('orders')
          .update({ status: 'paid', processor_payload: json, updated_at: new Date().toISOString() })
          .eq('id', data.orderId)
      } else {
        await supabase
          .from('orders')
          .update({ status: 'failed', processor_payload: json, updated_at: new Date().toISOString() })
          .eq('id', data.orderId)
      }
    }

    const { data: updatedOrder } = await supabase
      .from('orders')
      .select('*')
      .eq('id', data.orderId)
      .single()

    return { verified, order: updatedOrder ?? order }
  })

// ---------------------------------------------------------------------
// 5. Fetch a single product server-side, used by checkout functions to
//    avoid trusting client-submitted prices.
// ---------------------------------------------------------------------
export const getProductForCheckout = createServerFn({ method: 'POST' })
  .validator((data: { productId: string }) => data)
  .handler(async ({ data }) => {
    const supabase = getServiceClient()
    const { data: product, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', data.productId)
      .eq('active', true)
      .single()

    if (error || !product) {
      throw new Error('Product not found or inactive')
    }
    return { product }
  })
