import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { d as useMatchRoute, O as Outlet, L as Link } from "../_libs/tanstack__react-router.mjs";
import { R as Route$g, S as SiteNav, b as SERVICE_CATEGORIES, a as SiteFooter } from "./router-BffqhL8K.mjs";
import { R as ResultsTicker } from "./ResultsTicker-V1ePbIea.mjs";
import { R as Reveal } from "./useReveal-BmGG_t8w.mjs";
import { S as SERVICE_ICONS } from "./service-icons-Ceekj4k4.mjs";
import "./supabase-DaC1xxvQ.mjs";
import "./index.mjs";
import "../_libs/seroval.mjs";
import { A as ArrowRight } from "../_libs/lucide-react.mjs";
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
function ServicesLayout() {
  const matchRoute = useMatchRoute();
  const isSlug = matchRoute({
    to: "/services/$slug",
    fuzzy: false
  });
  if (isSlug) return /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ServicesPageInner, {});
}
function ServicesPageInner() {
  const {
    services
  } = Route$g.useLoaderData();
  const [activeCategory, setActiveCategory] = reactExports.useState("All");
  const filtered = activeCategory === "All" ? services : services.filter((s) => s.category.toLowerCase().includes(activeCategory.toLowerCase()));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-charcoal pt-20 pb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-gold mb-4", children: "What We Do" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl sm:text-6xl lg:text-[64px] font-extrabold leading-[1.1] text-ivory max-w-4xl", children: [
          "Every Service Built to Drive",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-gold to-gold-bright bg-clip-text text-transparent", children: "One Thing: Growth." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-sand/80 leading-[1.7] max-w-2xl", children: "From paid media and SEO to brand identity, printing, and corporate gifting — everything we do is connected to a measurable outcome." })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ResultsTicker, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-ivory py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mb-12", children: SERVICE_CATEGORIES.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveCategory(cat), className: `px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === cat ? "bg-maroon text-ivory" : "bg-sand/60 text-charcoal/70 hover:bg-sand"}`, children: cat }, cat)) }),
        services.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-charcoal/40 py-12 text-center", children: "No services found. Check back soon." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: filtered.map((service, i) => {
          const Icon = SERVICE_ICONS[service.slug];
          return /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i % 3 * 80, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services/$slug", params: {
            slug: service.slug
          }, className: "service-card group flex flex-col h-full bg-ivory border border-sand rounded-2xl overflow-hidden hover:border-gold hover:shadow-lg transition-all", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[16/10] overflow-hidden", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: service.cardImage, alt: `${service.name} services — Topton Media`, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500", loading: "lazy" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 left-4 w-10 h-10 rounded-xl bg-ivory/90 backdrop-blur-sm flex items-center justify-center", children: Icon && /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 18, className: "text-maroon", strokeWidth: 1.5 }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-3 left-4 font-[Space_Grotesk] text-[10px] uppercase tracking-[0.12em] text-gold", children: service.category })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-7 flex flex-col flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-semibold text-charcoal mb-2", children: service.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-charcoal/60 leading-relaxed mb-5 flex-1", children: service.pitch }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-end pt-4 border-t border-sand", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-xs font-semibold text-gold group-hover:gap-2 transition-all", children: [
                "Read More ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 12 })
              ] }) })
            ] })
          ] }) }, service.slug);
        }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-maroon py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl sm:text-4xl font-bold text-ivory mb-4", children: "Not Sure Which Service You Need?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-ivory/70 mb-8 max-w-xl mx-auto", children: "Book a free 30-minute audit and we'll tell you exactly where your growth is leaking — and what to fix first." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://zcal.co/i/gABtQS4_", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-gold to-gold-bright text-charcoal text-sm font-semibold hover:opacity-90 transition-opacity", children: [
          "Book a Free Audit ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  ServicesLayout as component
};
