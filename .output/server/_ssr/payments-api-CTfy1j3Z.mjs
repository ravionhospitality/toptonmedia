import { c as createServerRpc } from "./createServerRpc-wV0Vk4NU.mjs";
import { c as createServerFn } from "./index.mjs";
import { c as createClient } from "../_libs/supabase__supabase-js.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:http";
import "node:stream";
import "node:stream/promises";
import "node:https";
import "node:http2";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/@supabase/node-fetch.mjs";
import "http";
import "url";
import "https";
import "zlib";
import "../_libs/whatwg-url.mjs";
import "../_libs/webidl-conversions.mjs";
import "punycode";
import "../_libs/tr46.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "../_libs/supabase__functions-js.mjs";
import "../_libs/supabase__storage-js.mjs";
function getServiceClient() {
  const url = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceKey) {
    throw new Error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in server environment");
  }
  return createClient(url, serviceKey);
}
const createPendingOrder_createServerFn_handler = createServerRpc({
  id: "fa171125e0ea86771b8f627adca362fb9758f62e6b2e65e08b42e65ec7681e28",
  name: "createPendingOrder",
  filename: "src/lib/payments-api.ts"
}, (opts) => createPendingOrder.__executeServer(opts));
const createPendingOrder = createServerFn({
  method: "POST"
}).validator((data) => data).handler(createPendingOrder_createServerFn_handler, async ({
  data
}) => {
  const supabase = getServiceClient();
  const {
    data: order,
    error
  } = await supabase.from("orders").insert({
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
    status: "pending_payment"
  }).select("id").single();
  if (error || !order) {
    throw new Error(`Failed to create order: ${error?.message ?? "unknown error"}`);
  }
  return {
    orderId: order.id
  };
});
const startPaystackCheckout_createServerFn_handler = createServerRpc({
  id: "9c2a2005b99ade953ecf3b8fa2201bcdcc14790a56a7020295af81efa81caf90",
  name: "startPaystackCheckout",
  filename: "src/lib/payments-api.ts"
}, (opts) => startPaystackCheckout.__executeServer(opts));
const startPaystackCheckout = createServerFn({
  method: "POST"
}).validator((data) => data).handler(startPaystackCheckout_createServerFn_handler, async ({
  data
}) => {
  const secretKey = process.env.PAYSTACK_SECRET_KEY;
  const siteUrl = process.env.PUBLIC_SITE_URL;
  if (!secretKey) throw new Error("Missing PAYSTACK_SECRET_KEY in server environment");
  if (!siteUrl) throw new Error("Missing PUBLIC_SITE_URL in server environment");
  const amountKobo = Math.round(data.amountNgn * 100);
  const resp = await fetch("https://api.paystack.co/transaction/initialize", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${secretKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: data.email,
      amount: amountKobo,
      currency: "NGN",
      reference: `order_${data.orderId}_${Date.now()}`,
      callback_url: `${siteUrl}/order/confirmation?processor=paystack&order_id=${data.orderId}`,
      metadata: {
        order_id: data.orderId
      }
    })
  });
  const json = await resp.json();
  if (!resp.ok || !json.status) {
    throw new Error(`Paystack init failed: ${json.message ?? "unknown error"}`);
  }
  const supabase = getServiceClient();
  await supabase.from("orders").update({
    payment_processor: "paystack",
    processor_reference: json.data.reference
  }).eq("id", data.orderId);
  return {
    authorizationUrl: json.data.authorization_url
  };
});
const startStripeCheckout_createServerFn_handler = createServerRpc({
  id: "2806b65d9441842e1bc1fd4ba470e1968483adddf18801f81d9e087af8b99ade",
  name: "startStripeCheckout",
  filename: "src/lib/payments-api.ts"
}, (opts) => startStripeCheckout.__executeServer(opts));
const startStripeCheckout = createServerFn({
  method: "POST"
}).validator((data) => data).handler(startStripeCheckout_createServerFn_handler, async ({
  data
}) => {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  const siteUrl = process.env.PUBLIC_SITE_URL;
  if (!secretKey) throw new Error("Missing STRIPE_SECRET_KEY in server environment");
  if (!siteUrl) throw new Error("Missing PUBLIC_SITE_URL in server environment");
  const amountCents = Math.round(data.amountUsd * 100);
  const params = new URLSearchParams();
  params.append("mode", "payment");
  params.append("customer_email", data.email);
  params.append("success_url", `${siteUrl}/order/confirmation?processor=stripe&order_id=${data.orderId}&session_id={CHECKOUT_SESSION_ID}`);
  params.append("cancel_url", `${siteUrl}/shop?checkout=cancelled`);
  params.append("line_items[0][price_data][currency]", "usd");
  params.append("line_items[0][price_data][product_data][name]", data.productName);
  params.append("line_items[0][price_data][unit_amount]", String(amountCents));
  params.append("line_items[0][quantity]", "1");
  params.append("metadata[order_id]", data.orderId);
  const resp = await fetch("https://api.stripe.com/v1/checkout/sessions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${secretKey}`,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: params.toString()
  });
  const json = await resp.json();
  if (!resp.ok) {
    throw new Error(`Stripe session creation failed: ${json.error?.message ?? "unknown error"}`);
  }
  const supabase = getServiceClient();
  await supabase.from("orders").update({
    payment_processor: "stripe",
    processor_reference: json.id
  }).eq("id", data.orderId);
  return {
    sessionUrl: json.url
  };
});
const verifyOrderPayment_createServerFn_handler = createServerRpc({
  id: "a75457f4626fc77755c1e0c3c2ff8aeece55fa2835dcd24b8c84390abf6d42f7",
  name: "verifyOrderPayment",
  filename: "src/lib/payments-api.ts"
}, (opts) => verifyOrderPayment.__executeServer(opts));
const verifyOrderPayment = createServerFn({
  method: "POST"
}).validator((data) => data).handler(verifyOrderPayment_createServerFn_handler, async ({
  data
}) => {
  const supabase = getServiceClient();
  const {
    data: order,
    error: fetchError
  } = await supabase.from("orders").select("*").eq("id", data.orderId).single();
  if (fetchError || !order) {
    throw new Error("Order not found");
  }
  if (order.status === "paid" || order.status === "fulfilled") {
    return {
      verified: true,
      order
    };
  }
  let verified = false;
  if (data.processor === "paystack") {
    const secretKey = process.env.PAYSTACK_SECRET_KEY;
    if (!secretKey) throw new Error("Missing PAYSTACK_SECRET_KEY in server environment");
    const resp = await fetch(`https://api.paystack.co/transaction/verify/${order.processor_reference}`, {
      headers: {
        Authorization: `Bearer ${secretKey}`
      }
    });
    const json = await resp.json();
    verified = json.status === true && json.data?.status === "success";
    if (verified) {
      await supabase.from("orders").update({
        status: "paid",
        processor_payload: json.data,
        updated_at: (/* @__PURE__ */ new Date()).toISOString()
      }).eq("id", data.orderId);
    } else {
      await supabase.from("orders").update({
        status: "failed",
        processor_payload: json.data ?? null,
        updated_at: (/* @__PURE__ */ new Date()).toISOString()
      }).eq("id", data.orderId);
    }
  }
  if (data.processor === "stripe") {
    const secretKey = process.env.STRIPE_SECRET_KEY;
    if (!secretKey) throw new Error("Missing STRIPE_SECRET_KEY in server environment");
    if (!data.sessionId) throw new Error("Missing sessionId for Stripe verification");
    const resp = await fetch(`https://api.stripe.com/v1/checkout/sessions/${data.sessionId}`, {
      headers: {
        Authorization: `Bearer ${secretKey}`
      }
    });
    const json = await resp.json();
    verified = json.payment_status === "paid";
    if (verified) {
      await supabase.from("orders").update({
        status: "paid",
        processor_payload: json,
        updated_at: (/* @__PURE__ */ new Date()).toISOString()
      }).eq("id", data.orderId);
    } else {
      await supabase.from("orders").update({
        status: "failed",
        processor_payload: json,
        updated_at: (/* @__PURE__ */ new Date()).toISOString()
      }).eq("id", data.orderId);
    }
  }
  const {
    data: updatedOrder
  } = await supabase.from("orders").select("*").eq("id", data.orderId).single();
  return {
    verified,
    order: updatedOrder ?? order
  };
});
const getProductForCheckout_createServerFn_handler = createServerRpc({
  id: "2a08494259e3bccda9b55bd0e92379fd7ff341d3be2d3006c83a695bcdb59f79",
  name: "getProductForCheckout",
  filename: "src/lib/payments-api.ts"
}, (opts) => getProductForCheckout.__executeServer(opts));
const getProductForCheckout = createServerFn({
  method: "POST"
}).validator((data) => data).handler(getProductForCheckout_createServerFn_handler, async ({
  data
}) => {
  const supabase = getServiceClient();
  const {
    data: product,
    error
  } = await supabase.from("products").select("*").eq("id", data.productId).eq("active", true).single();
  if (error || !product) {
    throw new Error("Product not found or inactive");
  }
  return {
    product
  };
});
export {
  createPendingOrder_createServerFn_handler,
  getProductForCheckout_createServerFn_handler,
  startPaystackCheckout_createServerFn_handler,
  startStripeCheckout_createServerFn_handler,
  verifyOrderPayment_createServerFn_handler
};
