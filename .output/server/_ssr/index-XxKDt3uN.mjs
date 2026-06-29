import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { d as useMatchRoute, O as Outlet, L as Link } from "../_libs/tanstack__react-router.mjs";
import { j as Route$9, S as SiteNav, a as SiteFooter } from "./router-BffqhL8K.mjs";
import "./supabase-DaC1xxvQ.mjs";
import "./index.mjs";
import "../_libs/seroval.mjs";
import { q as Star, r as ShoppingBag } from "../_libs/lucide-react.mjs";
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
function ShopLayout() {
  const matchRoute = useMatchRoute();
  const isSlug = matchRoute({
    to: "/shop/$slug",
    fuzzy: false
  });
  if (isSlug) return /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ShopPageInner, {});
}
function formatPrice(amount, currency) {
  if (currency === "NGN") {
    return `₦${amount.toLocaleString("en-NG")}`;
  }
  return `$${amount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`;
}
function ShopPageInner() {
  const {
    products
  } = Route$9.useLoaderData();
  const [activeCategory, setActiveCategory] = reactExports.useState("All");
  const [activeType, setActiveType] = reactExports.useState("All");
  const [sort, setSort] = reactExports.useState("popularity");
  const [currency, setCurrency] = reactExports.useState("NGN");
  const categories = reactExports.useMemo(() => {
    const set = new Set(products.map((p) => p.category).filter(Boolean));
    return ["All", ...Array.from(set)];
  }, [products]);
  const filtered = reactExports.useMemo(() => {
    let list = products;
    if (activeCategory !== "All") list = list.filter((p) => p.category === activeCategory);
    if (activeType !== "All") list = list.filter((p) => p.product_type === activeType);
    const sorted = [...list];
    switch (sort) {
      case "rating":
        sorted.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
        break;
      case "price_low":
        sorted.sort((a, b) => {
          const pa = currency === "NGN" ? a.price_ngn : a.price_usd;
          const pb = currency === "NGN" ? b.price_ngn : b.price_usd;
          return pa - pb;
        });
        break;
      case "price_high":
        sorted.sort((a, b) => {
          const pa = currency === "NGN" ? a.price_ngn : a.price_usd;
          const pb = currency === "NGN" ? b.price_ngn : b.price_usd;
          return pb - pa;
        });
        break;
      case "popularity":
        sorted.sort((a, b) => b.review_count - a.review_count);
        break;
    }
    return sorted;
  }, [products, activeCategory, activeType, sort, currency]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-charcoal pt-20 pb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-gold mb-4", children: "Shop" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl sm:text-6xl font-extrabold leading-[1.1] text-ivory max-w-3xl", children: "Courses, Tools & Services Built for Growth" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-sand/80 leading-[1.7] max-w-2xl", children: "Practical courses, the LeadThur prospecting tool, and done-for-you services, all in one place." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-ivory py-12 border-b border-sand", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10 flex flex-wrap items-center gap-4 justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: ["All", "course", "tool", "service"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveType(t), className: `px-4 py-2 rounded-full text-sm font-medium transition-colors capitalize ${activeType === t ? "bg-maroon text-ivory" : "bg-sand/60 text-charcoal/70 hover:bg-sand"}`, children: t === "All" ? "All" : t === "tool" ? "Software" : `${t}s` }, t)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: sort, onChange: (e) => setSort(e.target.value), className: "rounded-full border border-sand bg-ivory px-4 py-2 text-sm text-charcoal/80", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "popularity", children: "Sort by popularity" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "rating", children: "Sort by average rating" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "latest", children: "Sort by latest" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "price_low", children: "Price: low to high" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "price_high", children: "Price: high to low" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex rounded-full border border-sand overflow-hidden", children: ["NGN", "USD"].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setCurrency(c), className: `px-4 py-2 text-sm font-medium transition-colors ${currency === c ? "bg-maroon text-ivory" : "bg-ivory text-charcoal/70 hover:bg-sand"}`, children: c }, c)) })
          ] })
        ] }),
        categories.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 lg:px-10 flex flex-wrap gap-2 mt-4", children: categories.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveCategory(cat), className: `px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${activeCategory === cat ? "bg-gold/20 text-gold border border-gold/40" : "text-charcoal/50 border border-sand hover:bg-sand/40"}`, children: cat }, cat)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-ivory py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10", children: [
        filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-charcoal/40 py-12 text-center", children: "No products found. Check back soon." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: filtered.map((product) => {
          const price = currency === "NGN" ? product.price_ngn : product.price_usd;
          const comparePrice = currency === "NGN" ? product.compare_at_price_ngn : product.compare_at_price_usd;
          const hasDiscount = comparePrice != null && comparePrice > price;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/shop/$slug", params: {
            slug: product.slug
          }, className: "group flex flex-col h-full bg-ivory border border-sand rounded-2xl overflow-hidden hover:border-gold hover:shadow-lg transition-all", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-square overflow-hidden bg-sand/20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: product.card_image, alt: product.name, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500", loading: "lazy" }),
              hasDiscount && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute top-3 left-3 px-2.5 py-1 rounded-full bg-maroon text-ivory text-[10px] font-bold uppercase tracking-wide", children: [
                Math.round((1 - price / comparePrice) * 100),
                "% Off"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-3 right-3 px-2.5 py-1 rounded-full bg-charcoal/80 text-ivory text-[10px] font-semibold uppercase tracking-wide capitalize", children: product.product_type === "tool" ? "Software" : product.product_type })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex flex-col flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-lg font-semibold text-charcoal mb-2 leading-snug", children: product.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-charcoal/60 leading-relaxed mb-4 flex-1 line-clamp-2", children: product.short_description }),
              product.rating != null && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 mb-3 text-xs text-charcoal/50", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 13, className: "fill-gold text-gold" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-charcoal/70", children: product.rating.toFixed(2) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "out of 5" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-4 border-t border-sand", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-2", children: [
                  hasDiscount && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-charcoal/40 line-through", children: formatPrice(comparePrice, currency) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-lg font-bold text-maroon", children: formatPrice(price, currency) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 text-xs font-semibold text-gold group-hover:gap-2.5 transition-all", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { size: 13 }),
                  " View"
                ] })
              ] })
            ] })
          ] }, product.slug);
        }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  ShopLayout as component
};
