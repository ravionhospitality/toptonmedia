import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteNav, a as SiteFooter } from "./SiteFooter-DDE_blqX.mjs";
import { A as ArrowRight, e as MapPin, a as Mail, f as Phone, g as MessageCircle, h as Clock } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const ENQUIRY_TYPES = ["Performance Marketing", "Lead Generation", "User Acquisition", "Growth Strategy", "Creative & Web", "Full Agency Partnership", "Other"];
const BUDGETS = ["Under ₦500K/month", "₦500K – ₦1M/month", "₦1M – ₦3M/month", "₦3M – ₦5M/month", "₦5M+/month", "Not sure yet"];
const CONTACT_INFO = [{
  icon: MapPin,
  label: "Office",
  value: "Lagos, Nigeria\n(Serving clients globally)"
}, {
  icon: Mail,
  label: "Email",
  value: "hello@toptonmedia.com",
  href: "mailto:hello@toptonmedia.com"
}, {
  icon: Phone,
  label: "Phone",
  value: "+234 (0) 800 000 0000",
  href: "tel:+2348000000000"
}, {
  icon: MessageCircle,
  label: "WhatsApp",
  value: "Chat with us directly",
  href: "https://wa.me/2348000000000"
}, {
  icon: Clock,
  label: "Response time",
  value: "Within 4 business hours"
}];
const FAQS = [{
  q: "How quickly can you start?",
  a: "Most clients are onboarded within 5 business days of signing. We run a rapid discovery session, then move into strategy and execution. First results typically visible within 2–3 weeks."
}, {
  q: "Do you work with early-stage startups?",
  a: "Yes, though we're most effective when there's a product already live and a minimum ad budget of ₦300K/month to work with. If you're pre-revenue, we'll be honest about what we can do for you."
}, {
  q: "What does a typical engagement look like?",
  a: "We work on monthly retainers, scoped per client. Minimum engagement is 3 months, as meaningful growth data takes time to generate and act on."
}, {
  q: "Do you charge a percentage of ad spend?",
  a: "We work on fixed retainers, not percentage models. You know exactly what you're paying and what you're getting. Ad spend goes directly to the platforms — we don't mark it up."
}];
function ContactPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col bg-ivory", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-charcoal pt-20 pb-24 lg:pt-28 lg:pb-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-[0.25em] text-gold mb-5", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.04] tracking-tight text-ivory max-w-4xl", children: [
          "Let's talk about ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold italic", children: "your growth." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-lg text-ivory/60 max-w-xl leading-relaxed", children: "Fill in what you can. We'll come back to you within 4 business hours with a straight answer about whether we're the right fit." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px bg-gradient-to-r from-transparent via-gold to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "max-w-7xl mx-auto px-6 lg:px-10 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-5 gap-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-semibold text-charcoal mb-8", children: "Tell us about your project" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold text-charcoal/60 uppercase tracking-widest mb-2", children: "First Name *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", className: "w-full px-4 py-3.5 rounded-xl border border-sand bg-white focus:outline-none focus:border-maroon text-charcoal text-sm transition-colors", placeholder: "Temi" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold text-charcoal/60 uppercase tracking-widest mb-2", children: "Last Name *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", className: "w-full px-4 py-3.5 rounded-xl border border-sand bg-white focus:outline-none focus:border-maroon text-charcoal text-sm transition-colors", placeholder: "Bamidele" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold text-charcoal/60 uppercase tracking-widest mb-2", children: "Email Address *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", className: "w-full px-4 py-3.5 rounded-xl border border-sand bg-white focus:outline-none focus:border-maroon text-charcoal text-sm transition-colors", placeholder: "hello@yourbrand.com" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold text-charcoal/60 uppercase tracking-widest mb-2", children: "WhatsApp / Phone" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "tel", className: "w-full px-4 py-3.5 rounded-xl border border-sand bg-white focus:outline-none focus:border-maroon text-charcoal text-sm transition-colors", placeholder: "+234 800 000 0000" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold text-charcoal/60 uppercase tracking-widest mb-2", children: "Company / Brand Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", className: "w-full px-4 py-3.5 rounded-xl border border-sand bg-white focus:outline-none focus:border-maroon text-charcoal text-sm transition-colors", placeholder: "Your brand name" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold text-charcoal/60 uppercase tracking-widest mb-2", children: "What do you need help with? *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: ENQUIRY_TYPES.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "px-4 py-2 rounded-full text-sm border border-sand text-charcoal/60 hover:border-maroon hover:text-maroon transition-colors", children: t }, t)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold text-charcoal/60 uppercase tracking-widest mb-2", children: "Monthly Marketing Budget" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "w-full px-4 py-3.5 rounded-xl border border-sand bg-white focus:outline-none focus:border-maroon text-charcoal text-sm transition-colors", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select budget range" }),
                BUDGETS.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: b, children: b }, b))
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold text-charcoal/60 uppercase tracking-widest mb-2", children: "Tell us more *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 5, className: "w-full px-4 py-3.5 rounded-xl border border-sand bg-white focus:outline-none focus:border-maroon text-charcoal text-sm transition-colors resize-none", placeholder: "What's your biggest growth challenge right now? Where are you currently spending on marketing? What have you already tried?" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "w-full py-4 rounded-full bg-maroon text-ivory text-sm font-semibold tracking-wide hover:bg-maroon-deep transition-colors flex items-center justify-center gap-2", children: [
              "Send Message ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 15 })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-charcoal/40 text-center", children: "We read every submission personally. No bots. No auto-replies." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-charcoal rounded-2xl p-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-[0.2em] text-gold mb-6", children: "Find us" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-5", children: CONTACT_INFO.map((info) => {
              const Icon = info.icon;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-lg bg-ivory/10 flex items-center justify-center flex-shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 15, className: "text-gold" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-ivory/40 mb-0.5", children: info.label }),
                  info.href ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: info.href, className: "text-sm text-ivory/80 hover:text-gold transition-colors", children: info.value }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-ivory/80 whitespace-pre-line", children: info.value })
                ] })
              ] }, info.label);
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://wa.me/2348000000000?text=Hi%2C%20I'd%20like%20to%20discuss%20a%20project%20with%20Topton%20Media", target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-4 bg-green-600 hover:bg-green-700 transition-colors rounded-2xl p-6 group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 22, className: "text-white" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-white text-sm", children: "Chat on WhatsApp" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-green-200 text-xs mt-0.5", children: "Fastest response — usually under 30 minutes" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 18, className: "text-white/60 ml-auto group-hover:translate-x-1 transition-transform" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-maroon/8 border border-maroon/15 rounded-2xl p-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-[0.2em] text-maroon mb-4", children: "What happens next" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "space-y-4", children: ["We read your brief and get context on your business", "We reply with honest feedback on how we'd approach it", "If there's a fit, we schedule a 30-minute discovery call", "We send a scoped proposal within 48 hours of that call"].map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-sm text-charcoal/65", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-5 h-5 rounded-full bg-maroon text-ivory text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-semibold", children: i + 1 }),
              step
            ] }, i)) })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-charcoal py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-[0.2em] text-gold mb-5", children: "FAQs" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl sm:text-4xl font-semibold text-ivory tracking-tight mb-12", children: "Questions we get asked a lot." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: FAQS.map((faq) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-ivory/15 pt-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold text-ivory mb-3", children: faq.q }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-ivory/55 text-sm leading-relaxed", children: faq.a })
        ] }, faq.q)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  ContactPage as component
};
