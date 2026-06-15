import { createRootRoute, HeadContent, Outlet, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsxs, jsx } from "react/jsx-runtime";
const appCss = "/assets/styles-CrsFgTH9.css";
const Route$8 = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Topton Media — Performance Marketing Studio, Lagos" },
      {
        name: "description",
        content: "Topton Media is a performance marketing studio helping ambitious brands turn ad spend into measurable revenue. Paid media, growth strategy, and creative that converts."
      },
      { name: "theme-color", content: "#7B0D2A" },
      { property: "og:title", content: "Topton Media — Performance Marketing Studio" },
      { property: "og:description", content: "We turn ad spend into measurable revenue. Paid media, growth strategy, and creative that converts." },
      { property: "og:type", content: "website" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico" }
    ]
  }),
  component: RootLayout
});
function RootLayout() {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      /* @__PURE__ */ jsx(Outlet, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const $$splitComponentImporter$7 = () => import("./work-CT1se4s3.js");
const Route$7 = createFileRoute("/work")({
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./team-DCcaRs1b.js");
const Route$6 = createFileRoute("/team")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./services-DqbIq-8T.js");
const Route$5 = createFileRoute("/services")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./contact-SfO7y5kI.js");
const Route$4 = createFileRoute("/contact")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./blog-C_mtwdGo.js");
const Route$3 = createFileRoute("/blog")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./about-DSNJ8FL1.js");
const Route$2 = createFileRoute("/about")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./NotFound-ixNOBG2v.js");
const Route$1 = createFileRoute("/NotFound")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-CYe_syYp.js");
const Route = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const WorkRoute = Route$7.update({
  id: "/work",
  path: "/work",
  getParentRoute: () => Route$8
});
const TeamRoute = Route$6.update({
  id: "/team",
  path: "/team",
  getParentRoute: () => Route$8
});
const ServicesRoute = Route$5.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$8
});
const ContactRoute = Route$4.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$8
});
const BlogRoute = Route$3.update({
  id: "/blog",
  path: "/blog",
  getParentRoute: () => Route$8
});
const AboutRoute = Route$2.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$8
});
const NotFoundRoute = Route$1.update({
  id: "/NotFound",
  path: "/NotFound",
  getParentRoute: () => Route$8
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$8
});
const rootRouteChildren = {
  IndexRoute,
  NotFoundRoute,
  AboutRoute,
  BlogRoute,
  ContactRoute,
  ServicesRoute,
  TeamRoute,
  WorkRoute
};
const routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
function getRouter() {
  return createRouter({
    routeTree,
    defaultPreload: "intent",
    scrollRestoration: true
  });
}
export {
  getRouter
};
