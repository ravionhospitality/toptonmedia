import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteNav, a as SiteFooter } from "./router-DRDvz_VB.mjs";
import { R as Reveal } from "./useReveal-CKye7TsH.mjs";
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
import "../_libs/lucide-react.mjs";
const PLACEHOLDER_POSTS = [{
  title: "Why Nigerian Brands Are Wasting 40% of Their Ad Spend (And How to Fix It)",
  category: "Paid Media",
  date: "2026-05-20",
  image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&q=80",
  excerpt: "Most Nigerian brands run ads without proper attribution setup. Here's the exact audit we run on every new account — and what we always find."
}, {
  title: "The Nigerian Fintech Playbook: How to Acquire Users at ₦1,200 CAC",
  category: "User Acquisition",
  date: "2026-05-10",
  image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&q=80",
  excerpt: "Fintech CAC in Nigeria doesn't have to be high. We break down the exact channel mix and creative strategy that keeps cost per activation under ₦1,500."
}, {
  title: "TikTok vs Meta for Nigerian E-commerce: Where to Put Your Budget in 2026",
  category: "Performance Marketing",
  date: "2026-04-28",
  image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
  excerpt: "We analysed 12 months of campaign data across both platforms for our Nigerian e-commerce clients. Here's what the numbers actually say."
}, {
  title: "SEO in Nigeria: Why Most Local Businesses Rank for Nothing (And What to Do)",
  category: "SEO",
  date: "2026-04-15",
  image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&q=80",
  excerpt: "Local SEO in Nigeria is an underserved opportunity. Most of your competitors aren't doing the basics. Here's how to outrank them in 90 days."
}, {
  title: "How to Brief a Marketing Agency (Without Wasting Everyone's Time)",
  category: "Strategy",
  date: "2026-04-01",
  image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
  excerpt: "A bad brief produces bad results. Here's the exact brief template we give every new client before we touch a campaign."
}, {
  title: "The Retargeting Playbook for Nigerian Apps: How to Win Back Lapsed Users",
  category: "User Acquisition",
  date: "2026-03-18",
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  excerpt: "Lapsed users are your cheapest acquisition target. Here's the retargeting sequence we use across Google, Meta, and TikTok to bring them back."
}];
function BlogPage() {
  const [featured, ...rest] = PLACEHOLDER_POSTS;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-charcoal pt-20 pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-gold mb-4", children: "Insights" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl sm:text-6xl font-extrabold leading-[1.1] text-ivory max-w-3xl", children: [
          "Growth Marketing Thinking",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-gold to-gold-bright bg-clip-text text-transparent", children: "From the Field." })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-ivory py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "mb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group grid grid-cols-1 lg:grid-cols-2 gap-8 bg-ivory border border-sand rounded-2xl overflow-hidden hover:border-gold hover:shadow-xl transition-all", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[16/9] lg:aspect-auto overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: featured.image, alt: featured.title, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500", loading: "lazy" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 flex flex-col justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-[Space_Grotesk] text-[11px] uppercase tracking-widest text-maroon", children: featured.category }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-charcoal/30", children: "·" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("time", { dateTime: featured.date, className: "text-xs text-charcoal/50", children: new Date(featured.date).toLocaleDateString("en-NG", {
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: rest.map((post, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i % 3 * 80, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group bg-ivory border border-sand rounded-2xl overflow-hidden hover:border-gold hover:shadow-lg transition-all h-full flex flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[16/9] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: post.image, alt: post.title, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500", loading: "lazy" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex flex-col flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-[Space_Grotesk] text-[11px] uppercase tracking-widest text-maroon", children: post.category }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-charcoal/30", children: "·" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("time", { dateTime: post.date, className: "text-xs text-charcoal/50", children: new Date(post.date).toLocaleDateString("en-NG", {
                month: "short",
                year: "numeric"
              }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-lg font-semibold text-charcoal mb-3 leading-snug flex-1", children: post.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-charcoal/55 leading-relaxed mb-4 line-clamp-3", children: post.excerpt }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-1 text-xs font-semibold text-gold group-hover:gap-2 transition-all", children: "Read More →" })
          ] })
        ] }) }, post.title)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  BlogPage as component
};
