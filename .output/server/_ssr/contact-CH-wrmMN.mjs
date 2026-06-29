import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteNav, C as CONTACT, c as CONTACT_FAQS, a as SiteFooter } from "./router-BffqhL8K.mjs";
import { F as FAQAccordion } from "./FAQAccordion-C7GoqvOZ.mjs";
import { R as Reveal } from "./useReveal-BmGG_t8w.mjs";
import { s as supabase } from "./supabase-DaC1xxvQ.mjs";
import "./index.mjs";
import "../_libs/seroval.mjs";
import { a as Mail, P as Phone, l as MessageCircle, b as MapPin, A as ArrowRight } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
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
const SERVICE_OPTIONS = ["User Acquisition", "Lead Generation", "Performance Marketing", "Web Design & CRO", "Social Media Management", "PR & Communications", "Market Activations", "Printing Services", "Branded Corporate Gifts", "Brand Strategy & Creative", "Media Production", "Training & Workshops", "Africa Market Entry", "Email & CRM Marketing", "SEO", "Not sure yet — need advice"];
const BUDGET_OPTIONS = ["Under ₦250,000/month", "₦250,000 – ₦500,000/month", "₦500,000 – ₦1,000,000/month", "₦1,000,000 – ₦2,500,000/month", "Above ₦2,500,000/month", "One-off project budget"];
function ContactPage() {
  const [submitted, setSubmitted] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(false);
  const [submitError, setSubmitError] = reactExports.useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitError("");
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const {
      error
    } = await supabase.from("contact_submissions").insert({
      name: formData.get("name"),
      company: formData.get("company") || null,
      email: formData.get("email"),
      phone: formData.get("phone") || null,
      service: formData.get("service"),
      budget: formData.get("budget") || null,
      message: formData.get("message") || null
    });
    setLoading(false);
    if (error) {
      setSubmitError("Something went wrong sending your message. Please try again or email us directly.");
      return;
    }
    setSubmitted(true);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-charcoal pt-20 pb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-gold mb-4", children: "Get in Touch" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl sm:text-6xl font-extrabold leading-[1.1] text-ivory max-w-3xl", children: [
          "Tell Us About",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-gold to-gold-bright bg-clip-text text-transparent", children: "Your Goals." })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-ivory py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-charcoal/70 leading-[1.7] mb-10", children: "Fill out the form and we'll get back to you within one business day to schedule a short discovery call." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `mailto:${CONTACT.email}`, className: "flex items-center gap-3 text-charcoal/70 hover:text-maroon transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-maroon/10 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 17, className: "text-maroon" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: CONTACT.email })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:${CONTACT.phoneIntl}`, className: "flex items-center gap-3 text-charcoal/70 hover:text-maroon transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-maroon/10 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 17, className: "text-maroon" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: CONTACT.phone })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: CONTACT.whatsapp, target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-3 text-charcoal/70 hover:text-maroon transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-maroon/10 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 17, className: "text-maroon" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "WhatsApp us" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-charcoal/70", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-maroon/10 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 17, className: "text-maroon" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: CONTACT.location })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 pt-8 border-t border-sand", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-charcoal mb-3", children: "Prefer to book directly?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: CONTACT.discoveryCallUrl, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gold to-gold-bright text-charcoal text-sm font-semibold hover:opacity-90 transition-opacity", children: [
              "Book a Free Audit ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 15 })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-8", children: submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "bg-charcoal rounded-2xl p-10 lg:p-14 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-gold mb-4", children: "Message Received" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold text-ivory mb-4", children: "Thanks — we'll be in touch shortly." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-ivory/60 max-w-md mx-auto", children: "A member of the team will reach out within one business day to schedule your discovery call." })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "bg-ivory border border-sand rounded-2xl p-8 lg:p-10 space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "name", className: "block text-sm font-medium text-charcoal mb-2", children: "Full name *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "name", name: "name", type: "text", required: true, className: "w-full rounded-xl border border-sand bg-ivory px-4 py-3 text-charcoal focus:outline-none focus:ring-2 focus:ring-maroon/30 focus:border-maroon transition-colors", placeholder: "Ada Okafor" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "company", className: "block text-sm font-medium text-charcoal mb-2", children: "Company" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "company", name: "company", type: "text", className: "w-full rounded-xl border border-sand bg-ivory px-4 py-3 text-charcoal focus:outline-none focus:ring-2 focus:ring-maroon/30 focus:border-maroon transition-colors", placeholder: "Acme Inc." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-charcoal mb-2", children: "Email *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "email", name: "email", type: "email", required: true, className: "w-full rounded-xl border border-sand bg-ivory px-4 py-3 text-charcoal focus:outline-none focus:ring-2 focus:ring-maroon/30 focus:border-maroon transition-colors", placeholder: "ada@acme.com" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "phone", className: "block text-sm font-medium text-charcoal mb-2", children: "Phone / WhatsApp" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "phone", name: "phone", type: "tel", className: "w-full rounded-xl border border-sand bg-ivory px-4 py-3 text-charcoal focus:outline-none focus:ring-2 focus:ring-maroon/30 focus:border-maroon transition-colors", placeholder: "+234 800 000 0000" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "service", className: "block text-sm font-medium text-charcoal mb-2", children: "What do you need help with? *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { id: "service", name: "service", required: true, defaultValue: "", className: "w-full rounded-xl border border-sand bg-ivory px-4 py-3 text-charcoal focus:outline-none focus:ring-2 focus:ring-maroon/30 focus:border-maroon transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, children: "Select a service" }),
              SERVICE_OPTIONS.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: opt, children: opt }, opt))
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "budget", className: "block text-sm font-medium text-charcoal mb-2", children: "Monthly budget range" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { id: "budget", name: "budget", defaultValue: "", className: "w-full rounded-xl border border-sand bg-ivory px-4 py-3 text-charcoal focus:outline-none focus:ring-2 focus:ring-maroon/30 focus:border-maroon transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, children: "Select a range" }),
              BUDGET_OPTIONS.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: opt, children: opt }, opt))
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "message", className: "block text-sm font-medium text-charcoal mb-2", children: "Tell us about your goals" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { id: "message", name: "message", rows: 4, className: "w-full rounded-xl border border-sand bg-ivory px-4 py-3 text-charcoal focus:outline-none focus:ring-2 focus:ring-maroon/30 focus:border-maroon transition-colors resize-none", placeholder: "What are you trying to grow, and what's gotten in the way so far?" })
          ] }),
          submitError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3", children: submitError }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", disabled: loading, className: "w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-gold to-gold-bright text-charcoal text-sm font-semibold hover:opacity-90 disabled:opacity-60 transition-opacity", children: [
            loading ? "Sending…" : "Send Message",
            " ",
            !loading && /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
          ] })
        ] }) })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-sand/20 py-20 border-t border-sand", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-6 lg:px-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "mb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold text-charcoal", children: "Frequently Asked Questions" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FAQAccordion, { faqs: CONTACT_FAQS })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  ContactPage as component
};
