import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { d as useMatchRoute, O as Outlet, L as Link } from "../_libs/tanstack__react-router.mjs";
import { e as Route$d, S as SiteNav, a as SiteFooter } from "./router-BffqhL8K.mjs";
import "./supabase-DaC1xxvQ.mjs";
import "./index.mjs";
import "../_libs/seroval.mjs";
import { n as Clock } from "../_libs/lucide-react.mjs";
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
const CATEGORIES = ["All", "User Acquisition", "Lead Generation", "Performance Marketing", "Web Design & CRO", "Social Media Management", "PR & Communications", "Market Activations", "Brand Strategy & Creative", "Media Production", "Training & Workshops", "Africa Market Entry", "Email & CRM Marketing", "SEO"];
function formatDate(d) {
  return new Date(d).toLocaleDateString("en-NG", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });
}
function PostCard({
  post,
  size = "sm"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog/$slug", params: {
    slug: post.slug
  }, className: "group block h-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `overflow-hidden rounded-xl ${size === "lg" ? "aspect-[16/9]" : size === "md" ? "aspect-[4/3]" : "aspect-[16/9]"} mb-3`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: post.hero_image, alt: post.title, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500", loading: "lazy" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-[11px] font-semibold uppercase tracking-wide text-maroon mb-1.5", children: post.category }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: `font-display font-bold text-charcoal leading-snug group-hover:text-maroon transition-colors ${size === "lg" ? "text-2xl sm:text-3xl" : size === "md" ? "text-lg" : "text-base"}`, children: post.title }),
      size !== "sm" && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-charcoal/60 text-sm leading-relaxed mt-2 line-clamp-3", children: post.excerpt }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mt-2 text-xs text-charcoal/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatDate(post.created_at) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 11 }),
          " ",
          post.read_minutes,
          " min"
        ] })
      ] })
    ] })
  ] });
}
function TrendingItem({
  post,
  rank
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog/$slug", params: {
    slug: post.slug
  }, className: "group flex gap-3 items-start", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-3xl font-extrabold text-sand flex-shrink-0 leading-none mt-0.5", children: String(rank).padStart(2, "0") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold uppercase tracking-wide text-maroon", children: post.category }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold text-charcoal leading-snug group-hover:text-maroon transition-colors line-clamp-3 mt-0.5", children: post.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-charcoal/40 mt-1", children: formatDate(post.created_at) })
    ] })
  ] });
}
function BlogLayout() {
  const matchRoute = useMatchRoute();
  const isSlug = matchRoute({
    to: "/blog/$slug",
    fuzzy: false
  });
  if (isSlug) return /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(BlogPage, {});
}
function BlogPage() {
  const {
    posts
  } = Route$d.useLoaderData();
  const [activeCategory, setActiveCategory] = reactExports.useState("All");
  const filtered = activeCategory === "All" ? posts : posts.filter((p) => p.category === activeCategory);
  const featured = filtered[0];
  const secondary = filtered.slice(1, 3);
  const grid = filtered.slice(3);
  const trending = posts.slice(0, 5);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col bg-ivory", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-charcoal py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl sm:text-4xl font-extrabold text-ivory mb-2", children: "Growth Marketing Insights" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-ivory/50 text-sm", children: "Practical guides from real campaigns run for Nigerian and African brands." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky top-20 z-30 bg-ivory border-b border-sand shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1 overflow-x-auto no-scrollbar py-2", children: CATEGORIES.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveCategory(cat), className: `flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${activeCategory === cat ? "bg-maroon text-ivory" : "text-charcoal/60 hover:text-charcoal hover:bg-sand"}`, children: cat }, cat)) }) }) }),
      posts.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 py-24 text-center text-charcoal/40", children: "No posts published yet." }),
      posts.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 lg:px-10 py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-8 space-y-10", children: [
          featured && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-sand pb-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PostCard, { post: featured, size: "lg" }) }),
          secondary.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6 border-b border-sand pb-10", children: secondary.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(PostCard, { post: p, size: "md" }, p.slug)) }),
          grid.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-maroon font-semibold", children: activeCategory === "All" ? "More Stories" : activeCategory }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 h-px bg-sand" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: grid.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(PostCard, { post: p, size: "sm" }, p.slug)) }),
          filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-charcoal/40 py-12 text-center", children: "No posts in this category yet." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "lg:col-span-4 space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-maroon font-semibold", children: "Trending" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 h-px bg-sand" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-5", children: trending.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingItem, { post: p, rank: i + 1 }, p.slug)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-charcoal rounded-2xl p-6 text-ivory", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-[Space_Grotesk] text-[10px] uppercase tracking-widest text-gold mb-3", children: "Free Growth Audit" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-bold mb-2 leading-snug", children: "Is Your Marketing Actually Working?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-ivory/60 mb-5", children: "Book a free 30-minute audit and find out where the opportunity is." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://zcal.co/i/gABtQS4_", target: "_blank", rel: "noopener noreferrer", className: "block text-center px-5 py-3 rounded-full bg-gradient-to-r from-gold to-gold-bright text-charcoal text-sm font-semibold hover:opacity-90 transition-opacity", children: "Book Free Audit" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-maroon font-semibold", children: "Topics" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 h-px bg-sand" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: CATEGORIES.filter((c) => c !== "All").map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
              setActiveCategory(cat);
              window.scrollTo({
                top: 0,
                behavior: "smooth"
              });
            }, className: "px-3 py-1.5 rounded-full text-xs font-medium bg-sand/60 text-charcoal/70 hover:bg-maroon hover:text-ivory transition-colors", children: cat }, cat)) })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        .no-scrollbar { scrollbar-width: none; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      ` })
  ] });
}
export {
  BlogLayout as component
};
