globalThis.__nitro_main__ = import.meta.url;
import { N as NodeResponse, s as serve } from "./_libs/srvx.mjs";
import { d as defineHandler, H as HTTPError, t as toEventHandler, a as defineLazyEventHandler, b as H3Core } from "./_libs/h3.mjs";
import { d as decodePath, w as withLeadingSlash, a as withoutTrailingSlash, j as joinURL } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import "node:http";
import "node:stream";
import "node:stream/promises";
import "node:https";
import "node:http2";
import "./_libs/rou3.mjs";
const headers = ((m) => function headersRouteRule(event) {
  for (const [key2, value] of Object.entries(m.options || {})) {
    event.res.headers.set(key2, value);
  }
});
const assets = {
  "/og-image.jpg": {
    "type": "image/jpeg",
    "etag": '"cd9d-nGPBG2cdxKanV9fkpOQ+WKsTsAM"',
    "mtime": "2026-06-18T12:51:13.438Z",
    "size": 52637,
    "path": "../public/og-image.jpg"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": '"94-FyThjQWHuzikUz3EsQj45VxEXi4"',
    "mtime": "2026-06-18T12:51:13.437Z",
    "size": 148,
    "path": "../public/robots.txt"
  },
  "/sitemap.xml": {
    "type": "application/xml",
    "etag": '"336c-zPJQxhECTyplgy6VpKaj2Sd7hXs"',
    "mtime": "2026-06-18T12:51:13.437Z",
    "size": 13164,
    "path": "../public/sitemap.xml"
  },
  "/assets/FAQAccordion-C9vVjxXw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"35d-5npVnws5GlPSCcdgai2+kLCKsDs"',
    "mtime": "2026-06-18T12:51:10.905Z",
    "size": 861,
    "path": "../public/assets/FAQAccordion-C9vVjxXw.js"
  },
  "/assets/ResultsTicker-BqXQhcve.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1f4-XEH7eVGdnO/5caDYSCxKN45vlqI"',
    "mtime": "2026-06-18T12:51:10.904Z",
    "size": 500,
    "path": "../public/assets/ResultsTicker-BqXQhcve.js"
  },
  "/assets/_id-QcAW9IZa.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ad4-JU3fWBgvuTeOr9bWa77LykN/9sM"',
    "mtime": "2026-06-18T12:51:10.905Z",
    "size": 6868,
    "path": "../public/assets/_id-QcAW9IZa.js"
  },
  "/assets/_slug-C-xHhcwB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"174c-btv0n3/5WcBBBYdnkzhqXotoEy0"',
    "mtime": "2026-06-18T12:51:10.905Z",
    "size": 5964,
    "path": "../public/assets/_slug-C-xHhcwB.js"
  },
  "/assets/_slug-C9I-nBYP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1a5-cGGTirz/izUNEhYi0XCY8onLjk4"',
    "mtime": "2026-06-18T12:51:10.905Z",
    "size": 421,
    "path": "../public/assets/_slug-C9I-nBYP.js"
  },
  "/assets/_slug-CYgMK2sD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1af-D9rmYQU/hbXOSa1QMq2EI47l4eo"',
    "mtime": "2026-06-18T12:51:10.904Z",
    "size": 431,
    "path": "../public/assets/_slug-CYgMK2sD.js"
  },
  "/assets/_slug-LfdRcC0y.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"27a2-zhY5Tm1FD1JHC8bHikz+PYzQGZ0"',
    "mtime": "2026-06-18T12:51:10.905Z",
    "size": 10146,
    "path": "../public/assets/_slug-LfdRcC0y.js"
  },
  "/assets/about-DenKMHf1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1348-goUN1wsb3XRbIzDYLxGWkvJ6ns4"',
    "mtime": "2026-06-18T12:51:10.904Z",
    "size": 4936,
    "path": "../public/assets/about-DenKMHf1.js"
  },
  "/assets/arrow-up-right-DI2fT12d.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a8-qDmx3GdgrVKAGdSRG/n6niRLOxg"',
    "mtime": "2026-06-18T12:51:10.904Z",
    "size": 168,
    "path": "../public/assets/arrow-up-right-DI2fT12d.js"
  },
  "/assets/blog-Di7Z8GSo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"12f7-WMq+JPI6/c+QJTdlKNmRNZha7J8"',
    "mtime": "2026-06-18T12:51:10.903Z",
    "size": 4855,
    "path": "../public/assets/blog-Di7Z8GSo.js"
  },
  "/assets/browser-DiM55WCb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"267-IV2u7XI+/PS+c6iVmyanroQHLs8"',
    "mtime": "2026-06-18T12:51:10.906Z",
    "size": 615,
    "path": "../public/assets/browser-DiM55WCb.js"
  },
  "/assets/case-studies-DFsNIb3C.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"101e-8OmeqiZGlTePzBHmn+MwSXKoTUU"',
    "mtime": "2026-06-18T12:51:10.903Z",
    "size": 4126,
    "path": "../public/assets/case-studies-DFsNIb3C.js"
  },
  "/assets/check-C1gCkIzW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7d-hbONXo/cD5wwC2MCDTbp6o5dzjo"',
    "mtime": "2026-06-18T12:51:10.905Z",
    "size": 125,
    "path": "../public/assets/check-C1gCkIzW.js"
  },
  "/assets/contact-D_1486dZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"23da-JR+03gYWgqvcSaCoDxjOOAr0n/c"',
    "mtime": "2026-06-18T12:51:10.903Z",
    "size": 9178,
    "path": "../public/assets/contact-D_1486dZ.js"
  },
  "/assets/index-CfXgtaSe.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2751-ZmRSr5j2hKHI3NYrBe3/RyBg+mo"',
    "mtime": "2026-06-18T12:51:10.904Z",
    "size": 10065,
    "path": "../public/assets/index-CfXgtaSe.js"
  },
  "/assets/index-DBvabJsj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2f85-hscvVVN6oxKNX7qlZ5Nu9brVP38"',
    "mtime": "2026-06-18T12:51:10.903Z",
    "size": 12165,
    "path": "../public/assets/index-DBvabJsj.js"
  },
  "/assets/new-z0L1pvLm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"19ff-bA7k5zdRXdyHZX+bv5djIpLaMf0"',
    "mtime": "2026-06-18T12:51:10.905Z",
    "size": 6655,
    "path": "../public/assets/new-z0L1pvLm.js"
  },
  "/assets/service-icons-FiTfn-7Y.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1048-9nDHj9O6Lj2CYAWRMwhfbad40OU"',
    "mtime": "2026-06-18T12:51:10.905Z",
    "size": 4168,
    "path": "../public/assets/service-icons-FiTfn-7Y.js"
  },
  "/assets/services-qaNDBTAQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1014-i4kOVllf7mZExP+pMrfXIa3K3JE"',
    "mtime": "2026-06-18T12:51:10.901Z",
    "size": 4116,
    "path": "../public/assets/services-qaNDBTAQ.js"
  },
  "/assets/styles-QwwFNA3-.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"e1f1-fXmatBTpkg4cNmLO5LKhIKmNs5w"',
    "mtime": "2026-06-18T12:51:10.903Z",
    "size": 57841,
    "path": "../public/assets/styles-QwwFNA3-.css"
  },
  "/assets/team-B469BQnd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d4f-Xz1VYxaFEQlQvTtY6YTXCIWcFGw"',
    "mtime": "2026-06-18T12:51:10.903Z",
    "size": 3407,
    "path": "../public/assets/team-B469BQnd.js"
  },
  "/assets/index-Pejv6jpL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7dcd6-S1gOU9QkvPrEeBz4hClhHuL2Ioc"',
    "mtime": "2026-06-18T12:51:10.903Z",
    "size": 515286,
    "path": "../public/assets/index-Pejv6jpL.js"
  },
  "/assets/useReveal-BcMYZqDm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"21f-C6QBI/FLM4aTTN5WeLM/39swZVI"',
    "mtime": "2026-06-18T12:51:10.905Z",
    "size": 543,
    "path": "../public/assets/useReveal-BcMYZqDm.js"
  }
};
function readAsset(id) {
  const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
  return promises.readFile(resolve(serverDir, assets[id].path));
}
const publicAssetBases = {};
function isPublicAssetURL(id = "") {
  if (assets[id]) {
    return true;
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) {
      return true;
    }
  }
  return false;
}
function getAsset(id) {
  return assets[id];
}
const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = {
  gzip: ".gz",
  br: ".br",
  zstd: ".zst"
};
const _K00vPL = defineHandler((event) => {
  if (event.req.method && !METHODS.has(event.req.method)) {
    return;
  }
  let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
  let asset;
  const encodingHeader = event.req.headers.get("accept-encoding") || "";
  const encodings = [...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.res.headers.delete("Cache-Control");
      throw new HTTPError({ status: 404 });
    }
    return;
  }
  if (encodings.length > 1) {
    event.res.headers.append("Vary", "Accept-Encoding");
  }
  const ifNotMatch = event.req.headers.get("if-none-match") === asset.etag;
  if (ifNotMatch) {
    event.res.status = 304;
    event.res.statusText = "Not Modified";
    return "";
  }
  const ifModifiedSinceH = event.req.headers.get("if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    event.res.status = 304;
    event.res.statusText = "Not Modified";
    return "";
  }
  if (asset.type) {
    event.res.headers.set("Content-Type", asset.type);
  }
  if (asset.etag && !event.res.headers.has("ETag")) {
    event.res.headers.set("ETag", asset.etag);
  }
  if (asset.mtime && !event.res.headers.has("Last-Modified")) {
    event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.res.headers.has("Content-Encoding")) {
    event.res.headers.set("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.res.headers.has("Content-Length")) {
    event.res.headers.set("Content-Length", asset.size.toString());
  }
  return readAsset(id);
});
const findRouteRules = /* @__PURE__ */ (() => {
  const $0 = [{ name: "headers", route: "/assets/**", handler: headers, options: { "cache-control": "public, max-age=31536000, immutable" } }];
  return (m, p) => {
    let r = [];
    if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
    let s = p.split("/"), l = s.length;
    if (l > 1) {
      if (s[1] === "assets") {
        r.unshift({ data: $0, params: { "_": s.slice(2).join("/") } });
      }
    }
    return r;
  };
})();
const _lazy__jOYFo = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
const findRoute = /* @__PURE__ */ (() => {
  const data = { route: "/**", handler: _lazy__jOYFo };
  return ((_m, p) => {
    return { data, params: { "_": p.slice(1) } };
  });
})();
const globalMiddleware = [
  toEventHandler(_K00vPL)
].filter(Boolean);
const errorHandler$1 = (error, event) => {
  const res = defaultHandler(error, event);
  return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
  const unhandled = error.unhandled ?? !HTTPError.isError(error);
  const { status = 500, statusText = "" } = unhandled ? {} : error;
  if (status === 404) {
    const url = event.url || new URL(event.req.url);
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      return {
        status: 302,
        headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
      };
    }
  }
  const headers2 = new Headers(unhandled ? {} : error.headers);
  headers2.set("content-type", "application/json; charset=utf-8");
  const jsonBody = unhandled ? {
    status,
    unhandled: true
  } : typeof error.toJSON === "function" ? error.toJSON() : {
    status,
    statusText,
    message: error.message
  };
  return {
    status,
    statusText,
    headers: headers2,
    body: {
      error: true,
      ...jsonBody
    }
  };
}
const errorHandlers = [errorHandler$1];
async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      const response = await handler(error, event, { defaultHandler });
      if (response) {
        return response;
      }
    } catch (error2) {
      console.error(error2);
    }
  }
}
function createNitroApp() {
  const captureError = (error, errorCtx) => {
    if (errorCtx?.event) {
      const errors = errorCtx.event.req.context?.nitro?.errors;
      if (errors) {
        errors.push({ error, context: errorCtx });
      }
    }
  };
  const h3App = createH3App({
    onError(error, event) {
      return errorHandler(error, event);
    }
  });
  let appHandler = (req) => {
    req.context ||= {};
    req.context.nitro = req.context.nitro || { errors: [] };
    return h3App.fetch(req);
  };
  return {
    fetch: appHandler,
    h3: h3App,
    hooks: void 0,
    captureError
  };
}
function createH3App(config) {
  const h3App = new H3Core(config);
  h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
  h3App["~middleware"].push(...globalMiddleware);
  h3App["~getMiddleware"] = (event, route) => {
    const pathname = event.url.pathname;
    const method = event.req.method;
    const middleware = [];
    const routeRules = getRouteRules(method, pathname);
    event.context.routeRules = routeRules?.routeRules;
    if (routeRules?.routeRuleMiddleware.length) {
      middleware.push(...routeRules.routeRuleMiddleware);
    }
    middleware.push(...h3App["~middleware"]);
    if (route?.data?.middleware?.length) {
      middleware.push(...route.data.middleware);
    }
    return middleware;
  };
  return h3App;
}
const APP_ID = "default";
function useNitroApp() {
  let instance = useNitroApp._instance;
  if (instance) {
    return instance;
  }
  instance = useNitroApp._instance = createNitroApp();
  globalThis.__nitro__ = globalThis.__nitro__ || {};
  globalThis.__nitro__[APP_ID] = instance;
  return instance;
}
function getRouteRules(method, pathname) {
  const m = findRouteRules(method, pathname);
  if (!m?.length) {
    return { routeRuleMiddleware: [] };
  }
  const routeRules = {};
  for (const layer of m) {
    for (const rule of layer.data) {
      const currentRule = routeRules[rule.name];
      if (currentRule) {
        if (rule.options === false) {
          delete routeRules[rule.name];
          continue;
        }
        if (typeof currentRule.options === "object" && typeof rule.options === "object") {
          currentRule.options = {
            ...currentRule.options,
            ...rule.options
          };
        } else {
          currentRule.options = rule.options;
        }
        currentRule.route = rule.route;
        currentRule.params = {
          ...currentRule.params,
          ...layer.params
        };
      } else if (rule.options !== false) {
        routeRules[rule.name] = {
          ...rule,
          params: layer.params
        };
      }
    }
  }
  const middleware = [];
  const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
  for (const rule of orderedRules) {
    if (rule.options === false || !rule.handler) {
      continue;
    }
    middleware.push(rule.handler(rule));
  }
  return {
    routeRules,
    routeRuleMiddleware: middleware
  };
}
function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
  process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
  process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
const tracingSrvxPlugins = [];
const _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
const port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
const host = process.env.NITRO_HOST || process.env.HOST;
const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const nitroApp = useNitroApp();
serve({
  port,
  hostname: host,
  tls: cert && key ? {
    cert,
    key
  } : void 0,
  fetch: nitroApp.fetch,
  plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
const nodeServer = {};
export {
  nodeServer as default
};
