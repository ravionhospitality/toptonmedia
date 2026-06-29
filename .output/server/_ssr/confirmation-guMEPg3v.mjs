import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { e as useSearch, L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteNav, a as SiteFooter } from "./router-BffqhL8K.mjs";
import { s as supabase } from "./supabase-DaC1xxvQ.mjs";
import "./index.mjs";
import "../_libs/seroval.mjs";
import { L as LoaderCircle, s as CircleCheck, t as CircleX, A as ArrowRight } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/supabase__supabase-js.mjs";
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
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:http";
import "node:stream/promises";
import "node:https";
import "node:http2";
function OrderConfirmationPage() {
  const search = useSearch({
    from: "/order/confirmation"
  });
  const [state, setState] = reactExports.useState("verifying");
  const [order, setOrder] = reactExports.useState(null);
  const [product, setProduct] = reactExports.useState(null);
  const [errorMessage, setErrorMessage] = reactExports.useState("");
  reactExports.useEffect(() => {
    async function run() {
      if (!search.order_id || !search.processor) {
        setState("error");
        setErrorMessage("Missing order information in the confirmation link.");
        return;
      }
      try {
        const {
          data: orderData,
          error: orderError
        } = await supabase.from("orders").select("*").eq("id", search.order_id).single();
        if (orderError || !orderData) {
          setState("failed");
          return;
        }
        setOrder(orderData);
        if (orderData.status === "paid" || orderData.status === "completed") {
          setState("success");
          if (orderData.product_slug) {
            const {
              data: productData
            } = await supabase.from("products").select("*").eq("slug", orderData.product_slug).single();
            setProduct(productData);
          }
        } else {
          setState("failed");
        }
      } catch (err) {
        setState("error");
        setErrorMessage(err instanceof Error ? err.message : "Something went wrong verifying your payment.");
      }
    }
    run();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col bg-ivory", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 flex items-center justify-center py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl w-full mx-auto px-6", children: [
      state === "verifying" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { size: 40, className: "animate-spin text-maroon mx-auto mb-6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-bold text-charcoal mb-2", children: "Confirming your payment" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-charcoal/60", children: "This usually takes a few seconds. Please don't close this page." })
      ] }),
      state === "success" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 48, className: "text-green-600 mx-auto mb-6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-bold text-charcoal mb-3", children: "Payment Successful" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-charcoal/60 mb-8", children: [
          "Thank you",
          order?.customer_name ? `, ${order.customer_name}` : "",
          ". Your order for",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-charcoal", children: order?.product_name }),
          " has been confirmed."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FulfillmentBlock, { order, product })
      ] }),
      state === "failed" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { size: 48, className: "text-red-600 mx-auto mb-6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-bold text-charcoal mb-3", children: "Payment Not Confirmed" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-charcoal/60 mb-8", children: "We could not confirm this payment. If you completed checkout and money was deducted, please contact us with your order reference and we will resolve it." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-gold to-gold-bright text-charcoal text-sm font-semibold hover:opacity-90 transition-opacity", children: [
          "Contact Support ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
        ] })
      ] }),
      state === "error" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { size: 48, className: "text-red-600 mx-auto mb-6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-bold text-charcoal mb-3", children: "Something Went Wrong" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-charcoal/60 mb-8", children: errorMessage }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-gold to-gold-bright text-charcoal text-sm font-semibold hover:opacity-90 transition-opacity", children: [
          "Contact Support ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
function FulfillmentBlock({
  order,
  product
}) {
  if (!product) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-cardbrown rounded-2xl p-8 text-left", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-ivory/70 text-sm", children: [
      "We're finalizing your order details. A confirmation email is on its way to",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-ivory font-medium", children: order?.customer_email }),
      "."
    ] }) });
  }
  if (product.product_type === "course") {
    const deliveryUrl = product.fulfillment?.delivery_url;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-cardbrown rounded-2xl p-8 text-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-gold mb-3", children: "Access Your Course" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-ivory/70 text-sm mb-5", children: product.fulfillment?.access_note || "Your course access details have also been sent to your email." }),
      deliveryUrl && /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: deliveryUrl, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gold to-gold-bright text-charcoal text-sm font-semibold hover:opacity-90 transition-opacity", children: [
        "Access Course ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 15 })
      ] })
    ] });
  }
  if (product.product_type === "tool") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-cardbrown rounded-2xl p-8 text-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-gold mb-3", children: "Your Access" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-ivory/70 text-sm", children: product.fulfillment?.access_instructions || `We're setting up your access to ${product.name}. You'll receive setup instructions at ${order?.customer_email} shortly.` })
    ] });
  }
  if (product.product_type === "service") {
    const bookingUrl = product.fulfillment?.booking_url || "https://toptonmedia.com/apply";
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-cardbrown rounded-2xl p-8 text-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-gold mb-3", children: "Next Step: Book Your Session" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-ivory/70 text-sm mb-5", children: "Your payment is confirmed. Please book your onboarding call so we can get started." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: bookingUrl, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gold to-gold-bright text-charcoal text-sm font-semibold hover:opacity-90 transition-opacity", children: [
        "Book Your Session ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 15 })
      ] })
    ] });
  }
  return null;
}
export {
  OrderConfirmationPage as component
};
