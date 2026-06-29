import { j as jsxRuntimeExports } from "./_libs/react.mjs";
import { L as Link } from "./_libs/tanstack__react-router.mjs";
import { n as Route$2, o as getServiceBySlug, S as SiteNav, a as SiteFooter } from "./_ssr/router-BffqhL8K.mjs";
import { F as FAQAccordion } from "./_ssr/FAQAccordion-C7GoqvOZ.mjs";
import "./_ssr/supabase-DaC1xxvQ.mjs";
import "./_ssr/index.mjs";
import "./_libs/seroval.mjs";
import { u as Calendar, n as Clock, A as ArrowRight } from "./_libs/lucide-react.mjs";
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
function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-NG", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}
function contentToHtml(content) {
  if (!content?.length) return "";
  return content.map((section) => {
    const heading = section.heading ? `<h2>${section.heading}</h2>` : "";
    const paras = (section.paragraphs ?? []).map((p) => `<p>${p}</p>`).join("");
    const bullets = section.bullets?.length ? `<ul>${section.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>` : "";
    return heading + paras + bullets;
  }).join("");
}
function BlogPostPage() {
  const {
    post,
    related,
    latest
  } = Route$2.useLoaderData();
  const service = getServiceBySlug(post.related_service);
  const articleHtml = post.body_html || contentToHtml(post.content);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative bg-charcoal overflow-hidden pt-20 pb-24", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pointer-events-none", style: {
          background: "radial-gradient(circle at 80% 20%, rgba(123,13,42,0.4) 0%, transparent 60%)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-7xl mx-auto px-6 lg:px-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { "aria-label": "Breadcrumb", className: "mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "flex items-center gap-2 text-xs text-ivory/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-ivory transition-colors", children: "Home" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "/" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/blog", className: "hover:text-ivory transition-colors", children: "Blog" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "/" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-gold", children: post.category })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-12 items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3 mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-gold", children: post.category }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl sm:text-6xl font-extrabold leading-[1.1] text-ivory mb-6", children: post.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-sand/90 leading-[1.7] mb-8 max-w-xl", children: post.excerpt }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-5 text-sm text-ivory/60", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 14 }),
                  formatDate(post.created_at)
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 14 }),
                  post.read_minutes,
                  " min read"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-ivory/80", children: "Topton Media" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-4 bg-gold/10 rounded-3xl blur-2xl" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: post.hero_image, alt: post.title, className: "relative rounded-2xl w-full aspect-[4/3] object-cover", loading: "lazy" })
            ] }) })
          ] })
        ] })
      ] }),
      post.quick_answer && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-ivory py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "quick-answer bg-maroon/5 border-l-4 border-maroon rounded-r-xl px-6 py-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-[Space_Grotesk] text-[11px] uppercase tracking-[0.12em] text-maroon mb-2", children: "Quick Answer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-charcoal/80 leading-relaxed text-[15px]", children: post.quick_answer })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: post.quick_answer ? "bg-ivory pb-24" : "bg-ivory py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "article-body", dangerouslySetInnerHTML: {
        __html: articleHtml
      } }) }) }),
      service && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-charcoal py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-cardbrown rounded-2xl p-10 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-gold mb-3", children: "Need Help With This?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display text-2xl sm:text-3xl font-bold text-ivory mb-3", children: [
          "Let's Talk About Your ",
          service.name
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-ivory/60 mb-7 max-w-md mx-auto", children: "Book a free 30-minute audit and we'll show you exactly where the opportunity is." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: service.bookingUrl, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gold to-gold-bright text-charcoal text-sm font-semibold hover:opacity-90 transition-opacity", children: [
            "Book Free Audit ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 15 })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services/$slug", params: {
            slug: service.slug
          }, className: "inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gold/40 text-ivory text-sm font-semibold hover:border-gold transition-colors", children: [
            "Explore ",
            service.name
          ] })
        ] })
      ] }) }) }),
      post.faqs?.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-sand/20 py-24 border-t border-sand", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-6 lg:px-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-maroon mb-4", children: "FAQs" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl sm:text-4xl font-bold text-charcoal", children: "Frequently Asked Questions" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FAQAccordion, { faqs: post.faqs })
      ] }) }),
      related.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-ivory py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-maroon mb-4", children: "Keep Reading" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl sm:text-4xl font-bold text-charcoal", children: [
            "More on ",
            post.category
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-6", children: related.map((rp) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog/$slug", params: {
          slug: rp.slug
        }, className: "group block rounded-2xl overflow-hidden border border-sand hover:border-gold hover:shadow-lg transition-all", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[16/9] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: rp.hero_image, alt: rp.title, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500", loading: "lazy" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-[Space_Grotesk] text-[10px] uppercase tracking-wide text-maroon mb-1.5", children: rp.category }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-base font-semibold text-charcoal leading-snug", children: rp.title })
          ] })
        ] }, rp.slug)) })
      ] }) }),
      latest.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-cardbrown py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-gold mb-4", children: "Latest Posts" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl sm:text-3xl font-bold text-ivory", children: "Fresh From the Blog" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5", children: latest.map((lp) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog/$slug", params: {
          slug: lp.slug
        }, className: "group block", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] overflow-hidden rounded-xl mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: lp.hero_image, alt: lp.title, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300", loading: "lazy" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-[Space_Grotesk] text-[10px] uppercase tracking-wide text-gold mb-1", children: lp.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold text-ivory leading-snug group-hover:text-gold transition-colors line-clamp-2", children: lp.title })
        ] }, lp.slug)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-maroon py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl sm:text-4xl font-bold text-ivory mb-4", children: "Is Your Marketing Actually Working?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-ivory/70 mb-8 max-w-xl mx-auto", children: "Book a free 30-minute audit and we'll walk you through exactly where the opportunity is." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://zcal.co/i/gABtQS4_", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-gold to-gold-bright text-charcoal text-sm font-semibold hover:opacity-90 transition-opacity", children: [
          "Book Free Audit ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        .article-body h2 { font-family: var(--font-display, 'Sora', sans-serif); font-size: 1.4rem; font-weight: 700; color: #1A0E10; margin: 2rem 0 0.75rem; line-height: 1.3; }
        .article-body h3 { font-family: var(--font-display, 'Sora', sans-serif); font-size: 1.15rem; font-weight: 600; color: #1A0E10; margin: 1.5rem 0 0.5rem; }
        .article-body p { color: rgba(26,14,16,0.75); line-height: 1.8; margin-bottom: 1rem; font-size: 1.05rem; }
        .article-body ul, .article-body ol { padding-left: 1.5rem; margin-bottom: 1rem; }
        .article-body li { color: rgba(26,14,16,0.75); line-height: 1.7; margin-bottom: 0.4rem; font-size: 1rem; }
        .article-body blockquote { border-left: 4px solid #7B0D2A; padding: 0.75rem 1.25rem; margin: 1.5rem 0; background: rgba(123,13,42,0.05); border-radius: 0 0.5rem 0.5rem 0; }
        .article-body blockquote p { color: rgba(26,14,16,0.65); font-style: italic; margin: 0; }
        .article-body strong { color: #1A0E10; font-weight: 600; }
        .article-body a { color: #7B0D2A; text-decoration: underline; }
        .article-body a:hover { color: #5A0A1F; }
        .article-body code { background: rgba(123,13,42,0.08); padding: 0.15rem 0.4rem; border-radius: 0.25rem; font-size: 0.88em; color: #7B0D2A; }
        .article-body img { max-width: 100%; border-radius: 0.75rem; margin: 1.5rem 0; }
        .article-body hr { border: none; border-top: 1px solid #E8DCC4; margin: 2rem 0; }
      ` })
  ] });
}
export {
  BlogPostPage as component
};
