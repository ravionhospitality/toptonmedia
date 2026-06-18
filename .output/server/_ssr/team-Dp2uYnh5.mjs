import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteNav, T as TEAM, C as CONTACT, a as SiteFooter } from "./router-CWsCpVyg.mjs";
import { R as Reveal } from "./useReveal-DwBfzFbe.mjs";
import { L as Linkedin } from "../_libs/lucide-react.mjs";
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
function initials(name) {
  return name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
}
function TeamPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-charcoal pt-20 pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-[Space_Grotesk] text-xs uppercase tracking-[0.12em] text-gold mb-4", children: "The Team" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl sm:text-6xl font-extrabold leading-[1.1] text-ivory max-w-3xl", children: [
          "Small Team.",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-gold to-gold-bright bg-clip-text text-transparent", children: "Big Scoreboard." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-sand/80 leading-[1.7] max-w-2xl", children: "Nine people across strategy, media, creative, and product — each one close enough to the work to know exactly why a number moved." })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-ivory py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8", children: TEAM.map((member, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i % 3 * 80, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group bg-ivory border border-sand rounded-2xl p-7 hover:border-gold hover:shadow-lg transition-all h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-2xl bg-gradient-to-br from-cardbrown to-maroon flex items-center justify-center mb-5 border border-gold/10 group-hover:border-gold/40 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xl font-bold text-gold/80", children: initials(member.name) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-semibold text-charcoal", children: member.name }),
          member.linkedin && /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: member.linkedin, target: "_blank", rel: "noopener noreferrer", "aria-label": `${member.name} on LinkedIn`, className: "text-charcoal/40 hover:text-maroon transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { size: 16 }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-maroon font-medium mb-3", children: member.role }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-charcoal/60 leading-relaxed mb-4", children: member.bio }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: member.skills.map((skill) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] px-2.5 py-1 rounded-full bg-sand/70 text-charcoal/70 font-medium", children: skill }, skill)) })
      ] }) }, member.name)) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-maroon py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold text-ivory mb-4", children: "Want to Work With This Team?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: CONTACT.discoveryCallUrl, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-gold to-gold-bright text-charcoal text-sm font-semibold hover:opacity-90 transition-opacity", children: "Book a Free Audit" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  TeamPage as component
};
