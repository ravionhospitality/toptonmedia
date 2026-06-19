import { j as jsxRuntimeExports } from "./_libs/react.mjs";
import { L as Link } from "./_libs/tanstack__react-router.mjs";
import { j as Route$2, k as getServiceBySlug, S as SiteNav, a as SiteFooter } from "./_ssr/router-VSIbab2f.mjs";
import { F as FAQAccordion } from "./_ssr/FAQAccordion-C7GoqvOZ.mjs";
import { R as Reveal } from "./_ssr/useReveal-DwBfzFbe.mjs";
import "./_ssr/supabase-DaC1xxvQ.mjs";
import "./_ssr/index.mjs";
import "./_libs/seroval.mjs";
import { p as Clock, A as ArrowRight } from "./_libs/lucide-react.mjs";
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
function BlogPostPage() {
  const {
    post,
    related
  } = Route$2.useLoaderData();
  const service = getServiceBySlug(post.related_service);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative bg-charcoal overflow-hidden pt-20 pb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pointer-events-none", style: {
          background: "radial-gradient(circle at 80% 20%, rgba(123,13,42,0.4) 0%, transparent 60%)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-4xl mx-auto px-6 lg:px-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { "aria-label": "Breadcrumb", className: "mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "flex items-center gap-2 text-xs text-ivory/40 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-ivory transition-colors", children: "Home" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "/" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/blog", className: "hover:text-ivory transition-colors", children: "Blog" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "/" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-gold", children: post.category })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-gold", children: post.category }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-ivory/30", children: "·" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("time", { dateTime: post.created_at, className: "text-xs text-ivory/50", children: new Date(post.created_at).toLocaleDateString("en-NG", {
              day: "numeric",
              month: "long",
              year: "numeric"
            }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-ivory/30", children: "·" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-xs text-ivory/50", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 12 }),
              " ",
              post.read_minutes,
              " min read"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl sm:text-5xl font-extrabold leading-[1.15] text-ivory mb-6", children: post.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "article-excerpt text-lg text-sand/80 leading-[1.7]", children: post.excerpt })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-ivory", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto px-6 lg:px-10 -mt-10 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: post.hero_image, alt: post.title, className: "w-full aspect-[16/9] object-cover rounded-2xl shadow-xl", loading: "lazy" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-ivory py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-6 lg:px-10", children: [
        post.quick_answer && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "quick-answer mb-12 bg-sand/40 border-l-4 border-maroon rounded-xl px-6 py-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-[Space_Grotesk] text-[11px] uppercase tracking-[0.12em] text-maroon mb-2", children: "Quick Answer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-charcoal/80 leading-relaxed text-[15px]", children: post.quick_answer })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("article", { className: "space-y-12", children: post.content.map((section, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: Math.min(i * 40, 200), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl sm:text-3xl font-bold text-charcoal mb-5", children: section.heading }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: section.paragraphs.map((p, pi) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-charcoal/70 leading-[1.75]", children: p }, pi)) }),
          section.bullets && /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-2.5", children: section.bullets.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5 text-charcoal/70 leading-relaxed", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" }),
            b
          ] }, b)) })
        ] }, i)) }),
        service && /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 150, className: "mt-14 bg-charcoal rounded-2xl p-8 lg:p-10 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-gold mb-3", children: "Need Help With This?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display text-2xl font-bold text-ivory mb-4", children: [
            "Let's Talk About Your ",
            service.name
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-ivory/60 mb-7 max-w-md mx-auto", children: "Book a free 30-minute audit and we'll show you exactly where the opportunity is." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: service.bookingUrl, target: "_blank", rel: "noopener noreferrer", className: "cta-glow inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-gold to-gold-bright text-charcoal text-sm font-semibold hover:opacity-90 transition-opacity", children: [
              "Book Free Audit ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services/$slug", params: {
              slug: service.slug
            }, className: "inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-gold/40 text-ivory text-sm font-semibold hover:border-gold transition-colors", children: [
              "Explore ",
              service.name
            ] })
          ] })
        ] }),
        post.faqs?.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 pt-12 border-t border-sand", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-charcoal mb-8", children: "Frequently Asked Questions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FAQAccordion, { faqs: post.faqs })
        ] })
      ] }) }),
      related.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-sand/20 py-20 border-t border-sand", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-2xl sm:text-3xl font-bold text-charcoal mb-10", children: [
          "More on ",
          post.category
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-6", children: related.map((rp) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog/$slug", params: {
          slug: rp.slug
        }, className: "service-card group bg-ivory border border-sand rounded-2xl overflow-hidden hover:border-gold hover:shadow-lg transition-all", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[16/9] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: rp.hero_image, alt: rp.title, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500", loading: "lazy" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-base font-semibold text-charcoal leading-snug mb-2", children: rp.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-gold", children: "Read More →" })
          ] })
        ] }, rp.slug)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  BlogPostPage as component
};
