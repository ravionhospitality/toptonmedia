import { j as jsxRuntimeExports } from "./_libs/react.mjs";
import { L as Link } from "./_libs/tanstack__react-router.mjs";
import { i as Route$1, e as CASE_STUDIES, S as SiteNav, a as SiteFooter } from "./_ssr/router-CWsCpVyg.mjs";
import { F as FAQAccordion } from "./_ssr/FAQAccordion-C7GoqvOZ.mjs";
import { R as Reveal } from "./_ssr/useReveal-DwBfzFbe.mjs";
import { S as SERVICE_ICONS } from "./_ssr/service-icons-Ceekj4k4.mjs";
import { p as Check, A as ArrowRight } from "./_libs/lucide-react.mjs";
import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "./_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./_libs/isbot.mjs";
function ServiceDetailPage() {
  const service = Route$1.useLoaderData();
  const Icon = SERVICE_ICONS[service.slug];
  const relatedCaseStudy = CASE_STUDIES.find((cs) => cs.relatedService === service.slug);
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", className: "hover:text-ivory transition-colors", children: "Services" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "/" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-gold", children: service.name })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-12 items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 24, className: "text-gold", strokeWidth: 1.5 }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-gold", children: service.category })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl sm:text-6xl font-extrabold leading-[1.1] text-ivory mb-6", children: service.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-sand/90 leading-[1.7] mb-8 max-w-xl", children: service.pitch }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3 mb-10", children: service.bullets.map((bullet) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5 text-ivory/70 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 16, className: "text-gold flex-shrink-0 mt-0.5" }),
                bullet
              ] }, bullet)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: service.bookingUrl, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-gold to-gold-bright text-charcoal text-sm font-semibold hover:opacity-90 transition-opacity", children: [
                  "Book Free Consultation ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", className: "inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-gold/40 text-ivory text-sm font-semibold hover:border-gold transition-colors", children: "Browse All Services" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-4 bg-gold/10 rounded-3xl blur-2xl" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: service.heroImage, alt: `${service.name} — Topton Media`, className: "relative rounded-2xl w-full aspect-[4/3] object-cover", loading: "lazy" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-4 right-4 bg-charcoal/90 backdrop-blur-sm border border-gold/20 rounded-xl px-4 py-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-[Space_Grotesk] text-[10px] uppercase tracking-widest text-gold/70 mb-0.5", children: service.resultStat.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl font-extrabold text-gold", children: service.resultStat.value })
              ] })
            ] }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-ivory py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-maroon mb-4", children: "What It Is" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl sm:text-4xl font-bold text-charcoal mb-8", children: [
              "What Does ",
              service.name,
              " Actually Mean?"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-5", children: service.whatItIs.map((para, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 80, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-charcoal/70 leading-[1.7]", children: para }) }, i)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-cardbrown rounded-2xl p-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-gold mb-5", children: "Who This Is For" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: service.whoFor.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5 text-ivory/80 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 15, className: "text-gold flex-shrink-0 mt-0.5" }),
            item
          ] }, item)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 pt-6 border-t border-ivory/10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-gold mb-2", children: "Starting From" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl font-bold text-ivory", children: service.priceFrom })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: service.bookingUrl, target: "_blank", rel: "noopener noreferrer", className: "mt-5 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-gold to-gold-bright text-charcoal text-sm font-semibold hover:opacity-90 transition-opacity w-full justify-center", children: [
            "Book Free Consultation ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 15 })
          ] })
        ] }) }) })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-charcoal py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-gold mb-4", children: "Deliverables" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl sm:text-4xl font-bold text-ivory", children: "What You Get" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5", children: service.deliverables.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i % 3 * 60, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-cardbrown border border-gold/10 rounded-xl p-5 h-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-base font-semibold text-ivory mb-2", children: d.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-ivory/55 leading-relaxed", children: d.detail })
        ] }) }, d.name)) })
      ] }) }),
      relatedCaseStudy && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-cardbrown py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-gold mb-4", children: "Real Results" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-charcoal border border-gold/15 rounded-2xl overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5 aspect-[16/10] lg:aspect-auto lg:h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: relatedCaseStudy.image, alt: relatedCaseStudy.title, className: "w-full h-full object-cover", loading: "lazy" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 p-8 lg:p-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold text-ivory mb-3 leading-snug", children: relatedCaseStudy.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-ivory/60 leading-relaxed mb-6", children: relatedCaseStudy.summary }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-8 mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-wide text-ivory/40", children: "Result" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl font-bold text-gold", children: relatedCaseStudy.result })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/case-studies", className: "inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:gap-2.5 transition-all", children: [
              "Read More Case Studies ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
            ] })
          ] })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-ivory py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-maroon mb-4", children: "Pricing" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl sm:text-4xl font-bold text-charcoal", children: "Investment" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6", children: service.pricing.map((tier, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 80, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-ivory border-2 border-sand rounded-2xl p-6 h-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-charcoal/50 mb-2", children: tier.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl font-bold text-maroon mb-1", children: tier.price }),
          tier.note && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-charcoal/50", children: tier.note })
        ] }) }, tier.label)) }),
        service.pricingNote && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-charcoal/50 bg-sand/40 rounded-xl px-5 py-3 border border-sand", children: service.pricingNote }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: service.bookingUrl, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-gold to-gold-bright text-charcoal text-sm font-semibold hover:opacity-90 transition-opacity", children: [
          "Book Free Consultation — ",
          service.name,
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-sand/20 py-24 border-t border-sand", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-6 lg:px-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-maroon mb-4", children: "FAQs" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl sm:text-4xl font-bold text-charcoal", children: "Frequently Asked Questions" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FAQAccordion, { faqs: service.faqs })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-maroon py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 lg:px-10 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl sm:text-4xl font-bold text-ivory mb-4", children: [
          "Ready to Get Started with ",
          service.name,
          "?"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-ivory/70 mb-8 max-w-xl mx-auto", children: "Book a free 30-minute consultation and we'll walk you through exactly how we'd approach your growth goals." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: service.bookingUrl, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-gold to-gold-bright text-charcoal text-sm font-semibold hover:opacity-90 transition-opacity", children: [
          "Book Free Consultation → ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
        ] })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  ServiceDetailPage as component
};
