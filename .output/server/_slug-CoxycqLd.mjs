import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { L as Link } from "./_libs/tanstack__react-router.mjs";
import { l as Route$6, S as SiteNav, a as SiteFooter, k as createSsrRpc } from "./_ssr/router-BffqhL8K.mjs";
import { c as createServerFn } from "./_ssr/index.mjs";
import "./_ssr/supabase-DaC1xxvQ.mjs";
import "./_libs/seroval.mjs";
import { q as Star, A as ArrowRight, L as LoaderCircle } from "./_libs/lucide-react.mjs";
import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "./_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./_libs/isbot.mjs";
import "./_libs/supabase__supabase-js.mjs";
import "./_libs/supabase__postgrest-js.mjs";
import "./_libs/@supabase/node-fetch.mjs";
import "http";
import "url";
import "https";
import "zlib";
import "./_libs/whatwg-url.mjs";
import "./_libs/webidl-conversions.mjs";
import "punycode";
import "./_libs/tr46.mjs";
import "./_libs/supabase__realtime-js.mjs";
import "./_libs/supabase__auth-js.mjs";
import "./_libs/supabase__functions-js.mjs";
import "./_libs/supabase__storage-js.mjs";
import "node:async_hooks";
import "./_libs/h3-v2.mjs";
import "./_libs/rou3.mjs";
import "./_libs/srvx.mjs";
import "node:http";
import "node:stream/promises";
import "node:https";
import "node:http2";
const createPendingOrder = createServerFn({
  method: "POST"
}).validator((data) => data).handler(createSsrRpc("fa171125e0ea86771b8f627adca362fb9758f62e6b2e65e08b42e65ec7681e28"));
const startPaystackCheckout = createServerFn({
  method: "POST"
}).validator((data) => data).handler(createSsrRpc("9c2a2005b99ade953ecf3b8fa2201bcdcc14790a56a7020295af81efa81caf90"));
const startStripeCheckout = createServerFn({
  method: "POST"
}).validator((data) => data).handler(createSsrRpc("2806b65d9441842e1bc1fd4ba470e1968483adddf18801f81d9e087af8b99ade"));
createServerFn({
  method: "POST"
}).validator((data) => data).handler(createSsrRpc("a75457f4626fc77755c1e0c3c2ff8aeece55fa2835dcd24b8c84390abf6d42f7"));
createServerFn({
  method: "POST"
}).validator((data) => data).handler(createSsrRpc("2a08494259e3bccda9b55bd0e92379fd7ff341d3be2d3006c83a695bcdb59f79"));
function formatPrice(amount, currency) {
  if (currency === "NGN") return `₦${amount.toLocaleString("en-NG")}`;
  return `$${amount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`;
}
function ProductDetailPage() {
  const {
    product
  } = Route$6.useLoaderData();
  const [currency, setCurrency] = reactExports.useState("NGN");
  const [selectedPlan, setSelectedPlan] = reactExports.useState(null);
  const [showForm, setShowForm] = reactExports.useState(false);
  const [name, setName] = reactExports.useState("");
  const [email, setEmail] = reactExports.useState("");
  const [phone, setPhone] = reactExports.useState("");
  const [whatsapp, setWhatsapp] = reactExports.useState("");
  const [formError, setFormError] = reactExports.useState("");
  const [submitting, setSubmitting] = reactExports.useState(false);
  const price = selectedPlan ? currency === "NGN" ? selectedPlan.price_ngn : selectedPlan.price_usd : currency === "NGN" ? product.price_ngn : product.price_usd;
  const comparePrice = currency === "NGN" ? product.compare_at_price_ngn : product.compare_at_price_usd;
  const hasDiscount = !selectedPlan && comparePrice != null && comparePrice > price;
  async function handleProceedToPayment(processor) {
    setFormError("");
    if (!name.trim() || !email.trim() || !phone.trim() || !whatsapp.trim()) {
      setFormError("Please fill in all fields before continuing.");
      return;
    }
    if (!email.includes("@")) {
      setFormError("Please enter a valid email address.");
      return;
    }
    setSubmitting(true);
    try {
      const {
        orderId
      } = await createPendingOrder({
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
          amount: price
        }
      });
      if (processor === "paystack") {
        const {
          authorizationUrl
        } = await startPaystackCheckout({
          data: {
            orderId,
            email: email.trim(),
            amountNgn: currency === "NGN" ? price : product.price_ngn
          }
        });
        window.location.href = authorizationUrl;
      } else {
        const {
          sessionUrl
        } = await startStripeCheckout({
          data: {
            orderId,
            email: email.trim(),
            amountUsd: currency === "USD" ? price : product.price_usd,
            productName: product.name
          }
        });
        window.location.href = sessionUrl;
      }
    } catch (err) {
      setFormError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setSubmitting(false);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative bg-charcoal overflow-hidden pt-20 pb-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pointer-events-none", style: {
        background: "radial-gradient(circle at 80% 20%, rgba(123,13,42,0.4) 0%, transparent 60%)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-7xl mx-auto px-6 lg:px-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { "aria-label": "Breadcrumb", className: "mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "flex items-center gap-2 text-xs text-ivory/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-ivory transition-colors", children: "Home" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "/" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", className: "hover:text-ivory transition-colors", children: "Shop" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "/" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-gold", children: product.name })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-12 items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-gold mb-4 inline-block", children: product.category }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl sm:text-5xl font-extrabold leading-[1.1] text-ivory mb-6", children: product.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-sand/90 leading-[1.7] mb-6 max-w-xl", children: product.short_description }),
            product.rating != null && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-8 text-sm text-ivory/70", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex", children: Array.from({
                length: 5
              }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 15, className: i < Math.round(product.rating) ? "fill-gold text-gold" : "text-ivory/20" }, i)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                product.rating.toFixed(2),
                " out of 5 (",
                product.review_count,
                " reviews)"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "prose-product text-ivory/70 leading-[1.7]", dangerouslySetInnerHTML: {
              __html: product.description_html
            } })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-4 bg-gold/10 rounded-3xl blur-2xl" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: product.hero_image, alt: product.name, className: "relative rounded-2xl w-full aspect-square object-cover mb-6", loading: "lazy" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-cardbrown rounded-2xl p-7", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex rounded-full border border-ivory/15 overflow-hidden mb-6 w-fit", children: ["NGN", "USD"].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
                setCurrency(c);
                setSelectedPlan(null);
              }, className: `px-4 py-1.5 text-xs font-semibold transition-colors ${currency === c ? "bg-gold text-charcoal" : "text-ivory/60 hover:text-ivory"}`, children: c }, c)) }),
              product.plans?.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-gold mb-3", children: "Choose a plan" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setSelectedPlan(null), className: `w-full text-left px-4 py-3 rounded-xl border transition-colors ${!selectedPlan ? "border-gold bg-gold/10" : "border-ivory/15 hover:border-ivory/30"}`, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-ivory", children: "Standard Price" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs text-ivory/50 mt-0.5", children: formatPrice(currency === "NGN" ? product.price_ngn : product.price_usd, currency) })
                ] }),
                product.plans.map((plan) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setSelectedPlan(plan), className: `w-full text-left px-4 py-3 rounded-xl border transition-colors ${selectedPlan?.label === plan.label ? "border-gold bg-gold/10" : "border-ivory/15 hover:border-ivory/30"}`, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-ivory", children: plan.label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "block text-xs text-ivory/50 mt-0.5", children: [
                    formatPrice(currency === "NGN" ? plan.price_ngn : plan.price_usd, currency),
                    plan.installments > 1 ? ` (${plan.installments} payments)` : ""
                  ] })
                ] }, plan.label))
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-3 mb-6", children: [
                hasDiscount && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base text-ivory/40 line-through", children: formatPrice(comparePrice, currency) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-3xl font-bold text-gold", children: formatPrice(price, currency) })
              ] }),
              !showForm ? /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setShowForm(true), className: "w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-gold to-gold-bright text-charcoal text-sm font-semibold hover:opacity-90 transition-opacity", children: [
                "Get Started ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-gold mb-2", children: "Your details" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: name, onChange: (e) => setName(e.target.value), placeholder: "Full name", className: "checkout-input" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: email, onChange: (e) => setEmail(e.target.value), placeholder: "Email address", type: "email", className: "checkout-input" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: phone, onChange: (e) => setPhone(e.target.value), placeholder: "Phone number", className: "checkout-input" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: whatsapp, onChange: (e) => setWhatsapp(e.target.value), placeholder: "WhatsApp number", className: "checkout-input" }),
                formError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-400 bg-red-900/20 border border-red-700/30 rounded-lg px-3 py-2", children: formError }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 pt-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => handleProceedToPayment("paystack"), disabled: submitting, className: "w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gold to-gold-bright text-charcoal text-sm font-semibold hover:opacity-90 transition-opacity disabled:opacity-50", children: [
                    submitting ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { size: 16, className: "animate-spin" }) : null,
                    "Pay with Paystack"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => handleProceedToPayment("stripe"), disabled: submitting, className: "w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-ivory/20 text-ivory text-sm font-semibold hover:border-ivory/40 transition-colors disabled:opacity-50", children: [
                    submitting ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { size: 16, className: "animate-spin" }) : null,
                    "Pay with Card (Stripe)"
                  ] })
                ] })
              ] })
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        .checkout-input { width: 100%; background: #1A0E10; border: 1px solid rgba(250,246,240,0.15); border-radius: 0.75rem; padding: 0.7rem 1rem; color: #FAF6F0; font-size: 0.875rem; }
        .checkout-input:focus { outline: none; border-color: #C9A84C; }
        .checkout-input::placeholder { color: rgba(250,246,240,0.35); }
        .prose-product p { margin-bottom: 1rem; }
        .prose-product ul { padding-left: 1.5rem; margin-bottom: 1rem; list-style: disc; }
        .prose-product li { margin-bottom: 0.4rem; }
      ` })
  ] });
}
export {
  ProductDetailPage as component
};
