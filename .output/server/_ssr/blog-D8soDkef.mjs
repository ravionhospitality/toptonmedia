import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { R as Route$9, S as SiteNav, a as SiteFooter } from "./router-VSIbab2f.mjs";
import { R as Reveal } from "./useReveal-DwBfzFbe.mjs";
import "./supabase-DaC1xxvQ.mjs";
import "./index.mjs";
import "../_libs/seroval.mjs";
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
import "../_libs/lucide-react.mjs";
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
const CATEGORIES = ["All", "User Acquisition", "Lead Generation", "Performance Marketing", "Web Design & CRO", "Social Media Management", "PR & Communications", "Market Activations", "Printing Services", "Branded Corporate Gifts", "Brand Strategy & Creative", "Media Production", "Training & Workshops", "Africa Market Entry", "Email & CRM Marketing", "SEO"];
function BlogPage() {
  const {
    posts
  } = Route$9.useLoaderData();
  const [activeCategory, setActiveCategory] = reactExports.useState("All");
  const filtered = activeCategory === "All" ? posts : posts.filter((p) => p.category === activeCategory);
  const [featured, ...rest] = filtered.length ? filtered : posts;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-charcoal pt-20 pb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-gold mb-4", children: "Insights" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl sm:text-6xl font-extrabold leading-[1.1] text-ivory max-w-3xl", children: [
          "Growth Marketing Thinking",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-gold to-gold-bright bg-clip-text text-transparent", children: "From the Field." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-sand/80 max-w-2xl", children: "Practical guides on paid media, SEO, branding, and growth — written from real campaigns run for Nigerian and African brands." })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-ivory py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10", children: [
        posts.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-charcoal/50 text-center py-20", children: "No posts published yet. Add and publish posts from the admin panel." }),
        posts.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mb-12", children: CATEGORIES.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveCategory(cat), className: `px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === cat ? "bg-maroon text-ivory" : "bg-sand/60 text-charcoal/70 hover:bg-sand"}`, children: cat }, cat)) }),
          featured && /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "mb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog/$slug", params: {
            slug: featured.slug
          }, className: "service-card group grid grid-cols-1 lg:grid-cols-2 gap-8 bg-ivory border border-sand rounded-2xl overflow-hidden hover:border-gold hover:shadow-xl transition-all", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[16/9] lg:aspect-auto overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: featured.hero_image, alt: featured.title, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500", loading: "lazy" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 flex flex-col justify-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-[Space_Grotesk] text-[11px] uppercase tracking-widest text-maroon", children: featured.category }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-charcoal/30", children: "·" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("time", { dateTime: featured.created_at, className: "text-xs text-charcoal/50", children: new Date(featured.created_at).toLocaleDateString("en-NG", {
                  day: "numeric",
                  month: "long",
                  year: "numeric"
                }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl sm:text-3xl font-bold text-charcoal mb-4 leading-snug", children: featured.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-charcoal/60 leading-relaxed mb-6", children: featured.excerpt }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-1.5 text-sm font-semibold text-gold", children: "Read Article →" })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: rest.map((post, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i % 3 * 80, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog/$slug", params: {
            slug: post.slug
          }, className: "service-card group bg-ivory border border-sand rounded-2xl overflow-hidden hover:border-gold hover:shadow-lg transition-all h-full flex flex-col", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[16/9] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: post.hero_image, alt: post.title, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500", loading: "lazy" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex flex-col flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-[Space_Grotesk] text-[11px] uppercase tracking-widest text-maroon", children: post.category }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-charcoal/30", children: "·" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("time", { dateTime: post.created_at, className: "text-xs text-charcoal/50", children: new Date(post.created_at).toLocaleDateString("en-NG", {
                  month: "short",
                  year: "numeric"
                }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-lg font-semibold text-charcoal mb-3 leading-snug flex-1", children: post.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-charcoal/55 leading-relaxed mb-4 line-clamp-3", children: post.excerpt }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-1 text-xs font-semibold text-gold group-hover:gap-2 transition-all", children: "Read More →" })
            ] })
          ] }) }, post.slug)) })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  BlogPage as component
};
