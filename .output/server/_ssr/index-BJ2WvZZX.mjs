import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteNav, b as SERVICES, f as STATS, H as HOW_WE_WORK, R as RETAINER_PACKAGES, C as CONTACT, a as SiteFooter } from "./router-DRDvz_VB.mjs";
import { R as ResultsTicker } from "./ResultsTicker-DbQDM3wN.mjs";
import { R as Reveal, u as useReveal } from "./useReveal-CKye7TsH.mjs";
import { S as SERVICE_ICONS } from "./service-icons-Ceekj4k4.mjs";
import { A as ArrowRight, n as ArrowDown, o as Check, m as ArrowUpRight } from "../_libs/lucide-react.mjs";
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
const METRICS = [
  { label: "ROAS", value: "4.2x", delta: "+38%" },
  { label: "CAC", value: "₦1,240", delta: "-22%" },
  { label: "Leads", value: "1,847", delta: "+64%" }
];
function DashboardCard() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-4 bg-gold/10 rounded-3xl blur-2xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-cardbrown border border-gold/20 rounded-2xl p-6 sm:p-8 shadow-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-[Space_Grotesk] text-[11px] uppercase tracking-[0.12em] text-gold/80", children: "Campaign Performance" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 font-[Space_Grotesk] text-[11px] text-ivory/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-gold animate-pulse" }),
          "Live"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-5", children: METRICS.map((metric) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-ivory/60", children: metric.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-[Space_Grotesk] text-2xl sm:text-3xl text-ivory tabular", children: metric.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-0.5 font-[Space_Grotesk] text-xs text-gold tabular", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { size: 12 }),
            metric.delta
          ] })
        ] })
      ] }, metric.label)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 pt-6 border-t border-ivory/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end gap-1 h-12", children: [40, 65, 50, 75, 60, 85, 70, 95, 80, 100].map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "flex-1 bg-gold/30 rounded-sm",
          style: { height: `${h}%` }
        },
        i
      )) }) })
    ] })
  ] });
}
function parseValue(value) {
  const match = value.match(/^([^\d.]*)([\d.]+)(.*)$/);
  if (!match) return { prefix: "", number: 0, suffix: value, decimals: 0 };
  const [, prefix, numStr, suffix] = match;
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  return { prefix, number: parseFloat(numStr), suffix, decimals };
}
function StatCounter({ value, label }) {
  const { ref, visible } = useReveal();
  const [current, setCurrent] = reactExports.useState(0);
  const { prefix, number, suffix, decimals } = parseValue(value);
  reactExports.useEffect(() => {
    if (!visible) return;
    const duration = 1400;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(number * eased);
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [visible, number]);
  const display = decimals > 0 ? current.toFixed(decimals) : Math.round(current).toString();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref, className: "text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-4xl sm:text-5xl font-extrabold text-ivory tabular", children: [
      prefix,
      display,
      suffix
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-ivory/60", children: label })
  ] });
}
const LOGO_PLACEHOLDERS = Array.from({
  length: 8
}, (_, i) => `Brand ${i + 1}`);
function HomePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative bg-charcoal overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pointer-events-none", style: {
          background: "radial-gradient(circle at 75% 30%, rgba(123,13,42,0.45) 0%, transparent 55%)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-20 lg:pt-24 lg:pb-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-gold mb-6", children: "Growth & Performance Marketing — Lagos, Nigeria" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl sm:text-6xl lg:text-[64px] font-extrabold leading-[1.1] tracking-tight text-ivory", children: [
              "We Don’t Run Campaigns.",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-gold to-gold-bright bg-clip-text text-transparent", children: "We Build Revenue Machines." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-sand/90 leading-[1.7] max-w-xl", children: "Topton Media helps ambitious brands turn marketing spend into measurable, scalable revenue — through paid media, data strategy, full-funnel execution, and brand production." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap items-center gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-gold to-gold-bright text-charcoal text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity", children: [
                "Start Growing Today",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#services", className: "inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-gold/40 text-ivory text-sm font-semibold tracking-wide hover:border-gold transition-colors", children: [
                "See Our Services",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { size: 16 })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-sm text-ivory/40", children: "Trusted by 40+ brands · Lagos · Abuja · International" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardCard, {}) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ResultsTicker, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-ivory py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-charcoal/40 text-center mb-8", children: "Brands That Trust Us" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 items-center", children: LOGO_PLACEHOLDERS.map((name) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 rounded-lg bg-sand/60 flex items-center justify-center grayscale opacity-60", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xs font-semibold text-charcoal/40", children: name }) }, name)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "services", className: "bg-charcoal py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "max-w-2xl mb-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-gold mb-4", children: "What We Do" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl sm:text-5xl font-bold tracking-tight text-ivory", children: "Every Service Built to Drive One Thing: Growth" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: SERVICES.map((service, i) => {
          const Icon = SERVICE_ICONS[service.slug];
          return /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i % 3 * 80, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services/$slug", params: {
            slug: service.slug
          }, className: "group block h-full bg-cardbrown border border-gold/10 rounded-2xl p-6 hover:border-gold/40 transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 26, className: "text-gold mb-4", strokeWidth: 1.5 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold text-ivory mb-2", children: service.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-ivory/55 leading-relaxed mb-4", children: service.pitch }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 text-xs font-semibold text-gold group-hover:gap-2.5 transition-all", children: [
              "Learn More",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 13 })
            ] })
          ] }) }, service.slug);
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services", className: "inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-gold/40 text-ivory text-sm font-semibold tracking-wide hover:border-gold transition-colors", children: [
          "Browse All Services",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-24 overflow-hidden", style: {
        backgroundColor: "var(--color-maroon-deep)"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-[0.04] pointer-events-none", style: {
          backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27100%27 height=%27100%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.9%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27/%3E%3C/svg%3E")'
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-7xl mx-auto px-6 lg:px-10 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl sm:text-5xl font-bold tracking-tight text-ivory mb-16", children: "Numbers That Actually Matter" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12", children: STATS.map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsx(StatCounter, { value: stat.value, label: stat.label }, stat.label)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 200, className: "mt-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/case-studies", className: "inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-gold to-gold-bright text-charcoal text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity", children: [
            "See Case Studies",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-ivory py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "text-center max-w-2xl mx-auto mb-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-maroon mb-4", children: "How We Work" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl sm:text-5xl font-bold tracking-tight text-charcoal", children: "A System, Not a Service" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8", children: HOW_WE_WORK.map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative pt-8 border-t-2 border-sand h-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute -top-4 left-0 font-display text-3xl font-extrabold text-gold/30", children: [
            "0",
            step.step
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold text-charcoal mb-3 mt-2", children: step.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-charcoal/60 leading-relaxed text-sm", children: step.description })
        ] }) }, step.step)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-cardbrown py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "text-center max-w-2xl mx-auto mb-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-gold mb-4", children: "Pricing" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl sm:text-5xl font-bold tracking-tight text-ivory", children: "Choose Your Growth Level" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5", children: RETAINER_PACKAGES.map((pkg, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 80, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `h-full flex flex-col rounded-2xl p-6 border ${pkg.popular ? "bg-gradient-to-b from-gold/15 to-transparent border-gold" : "bg-charcoal/40 border-ivory/10"}`, children: [
          pkg.popular && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "self-start mb-3 px-2.5 py-1 rounded-full bg-gold text-charcoal text-[10px] font-bold uppercase tracking-wide", children: "Most Popular" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-bold text-ivory mb-1", children: pkg.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl font-extrabold text-gold mb-0.5", children: pkg.priceNgn }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-ivory/40 mb-4", children: [
            pkg.priceGbp,
            " / month"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-ivory/65 leading-relaxed flex-1", children: pkg.includes }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:gap-2.5 transition-all", children: [
            "Get Started",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
          ] })
        ] }) }, pkg.name)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-maroon", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-10 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-ivory", children: [
            "If your last campaign couldn’t tell you",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "why" }),
            " it worked, it probably won’t work twice."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-2", children: ["Free 30-minute audit", "No obligation", "Clear next steps either way"].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-sm text-ivory/70", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 15, className: "text-gold" }),
            item
          ] }, item)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 150, className: "lg:text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: CONTACT.discoveryCallUrl, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-gold to-gold-bright text-charcoal text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity", children: [
          "Let’s Talk Growth",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
        ] }) })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  HomePage as component
};
