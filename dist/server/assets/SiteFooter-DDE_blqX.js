import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { useLocation, Link } from "@tanstack/react-router";
import { X, Menu, Mail } from "lucide-react";
const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/team", label: "Team" },
  { to: "/contact", label: "Contact" }
];
function SiteNav() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  return /* @__PURE__ */ jsxs("header", { className: "sticky top-0 z-50 bg-ivory/90 backdrop-blur-md border-b border-sand", children: [
    /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-6 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between h-20", children: [
      /* @__PURE__ */ jsxs(Link, { to: "/", className: "font-display text-2xl font-semibold tracking-tight text-maroon", children: [
        "Topton",
        /* @__PURE__ */ jsx("span", { className: "text-gold", children: "." })
      ] }),
      /* @__PURE__ */ jsx("nav", { className: "hidden md:flex items-center gap-10", children: NAV_LINKS.map((link) => {
        const active = pathname === link.to;
        return /* @__PURE__ */ jsxs(
          Link,
          {
            to: link.to,
            className: `text-sm font-medium tracking-wide transition-colors relative py-1 ${active ? "text-maroon" : "text-charcoal/70 hover:text-maroon"}`,
            children: [
              link.label,
              active && /* @__PURE__ */ jsx("span", { className: "absolute -bottom-1 left-0 right-0 h-px bg-gold" })
            ]
          },
          link.to
        );
      }) }),
      /* @__PURE__ */ jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ jsx(
        Link,
        {
          to: "/contact",
          className: "inline-flex items-center px-5 py-2.5 rounded-full bg-maroon text-ivory text-sm font-semibold tracking-wide hover:bg-maroon-deep transition-colors",
          children: "Start a Project"
        }
      ) }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setOpen((o) => !o),
          className: "md:hidden p-2 -mr-2 text-maroon",
          "aria-label": open ? "Close menu" : "Open menu",
          children: open ? /* @__PURE__ */ jsx(X, { size: 24 }) : /* @__PURE__ */ jsx(Menu, { size: 24 })
        }
      )
    ] }) }),
    open && /* @__PURE__ */ jsx("div", { className: "md:hidden border-t border-sand bg-ivory", children: /* @__PURE__ */ jsxs("nav", { className: "flex flex-col px-6 py-4 gap-1", children: [
      NAV_LINKS.map((link) => {
        const active = pathname === link.to;
        return /* @__PURE__ */ jsx(
          Link,
          {
            to: link.to,
            onClick: () => setOpen(false),
            className: `py-3 text-base font-medium border-b border-sand/60 last:border-0 ${active ? "text-maroon" : "text-charcoal/80"}`,
            children: link.label
          },
          link.to
        );
      }),
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/contact",
          onClick: () => setOpen(false),
          className: "mt-4 inline-flex items-center justify-center px-5 py-3 rounded-full bg-maroon text-ivory text-sm font-semibold tracking-wide",
          children: "Start a Project"
        }
      )
    ] }) })
  ] });
}
const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
function InstagramIcon({ size = 18, className }) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      className,
      ...base,
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ jsx("rect", { x: "2", y: "2", width: "20", height: "20", rx: "5" }),
        /* @__PURE__ */ jsx("path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }),
        /* @__PURE__ */ jsx("line", { x1: "17.5", y1: "6.5", x2: "17.51", y2: "6.5" })
      ]
    }
  );
}
function LinkedinIcon({ size = 18, className }) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      className,
      ...base,
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ jsx("path", { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" }),
        /* @__PURE__ */ jsx("rect", { x: "2", y: "9", width: "4", height: "12" }),
        /* @__PURE__ */ jsx("circle", { cx: "4", cy: "4", r: "2" })
      ]
    }
  );
}
function SiteFooter() {
  return /* @__PURE__ */ jsx("footer", { className: "bg-charcoal text-ivory", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10 py-16", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "font-display text-2xl font-semibold tracking-tight", children: [
          "Topton",
          /* @__PURE__ */ jsx("span", { className: "text-gold", children: "." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm text-ivory/60 max-w-sm leading-relaxed", children: "A performance marketing studio for brands that measure growth in revenue, not impressions. Based in Lagos, working everywhere." }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mt-6", children: [
          /* @__PURE__ */ jsx("a", { href: "#", "aria-label": "Instagram", className: "text-ivory/50 hover:text-gold transition-colors", children: /* @__PURE__ */ jsx(InstagramIcon, { size: 18 }) }),
          /* @__PURE__ */ jsx("a", { href: "#", "aria-label": "LinkedIn", className: "text-ivory/50 hover:text-gold transition-colors", children: /* @__PURE__ */ jsx(LinkedinIcon, { size: 18 }) }),
          /* @__PURE__ */ jsx("a", { href: "#", "aria-label": "X (Twitter)", className: "text-ivory/50 hover:text-gold transition-colors", children: /* @__PURE__ */ jsx(X, { size: 18 }) }),
          /* @__PURE__ */ jsx("a", { href: "mailto:hello@toptonmedia.com", "aria-label": "Email", className: "text-ivory/50 hover:text-gold transition-colors", children: /* @__PURE__ */ jsx(Mail, { size: 18 }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-gold mb-4", children: "Studio" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-sm text-ivory/70", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/about", className: "hover:text-ivory transition-colors", children: "About" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/services", className: "hover:text-ivory transition-colors", children: "Services" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/work", className: "hover:text-ivory transition-colors", children: "Work" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/team", className: "hover:text-ivory transition-colors", children: "Team" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-gold mb-4", children: "Get in touch" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-sm text-ivory/70", children: [
          /* @__PURE__ */ jsx("li", { children: "Lagos, Nigeria" }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "mailto:hello@toptonmedia.com", className: "hover:text-ivory transition-colors", children: "hello@toptonmedia.com" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/contact", className: "hover:text-ivory transition-colors", children: "Start a project →" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-16 pt-8 border-t border-ivory/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory/40", children: [
      /* @__PURE__ */ jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Topton Media. All rights reserved."
      ] }),
      /* @__PURE__ */ jsx("p", { children: "Crafted in Lagos." })
    ] })
  ] }) });
}
export {
  SiteNav as S,
  SiteFooter as a
};
