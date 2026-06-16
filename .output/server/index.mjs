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
  "/sitemap.xml": {
    "type": "application/xml",
    "etag": '"c82-0v74Z7C9w/4QeMl53+G6s7PmDf4"',
    "mtime": "2026-06-16T13:32:07.900Z",
    "size": 3202,
    "path": "../public/sitemap.xml"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": '"94-FyThjQWHuzikUz3EsQj45VxEXi4"',
    "mtime": "2026-06-16T13:32:07.900Z",
    "size": 148,
    "path": "../public/robots.txt"
  },
  "/assets/FAQAccordion-BFaPIKhn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"35d-0VcL7gH0/fkwmJstRV/6OeiGDQY"',
    "mtime": "2026-06-16T13:32:06.669Z",
    "size": 861,
    "path": "../public/assets/FAQAccordion-BFaPIKhn.js"
  },
  "/assets/_slug-CsJO3znN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1af-qFYuJmmfd97lqtHKaAeXWwn4GYA"',
    "mtime": "2026-06-16T13:32:06.668Z",
    "size": 431,
    "path": "../public/assets/_slug-CsJO3znN.js"
  },
  "/assets/_slug-DpIG48wf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"224b-y2U1A473MwgHtLRyU2g0i/R4i0c"',
    "mtime": "2026-06-16T13:32:06.668Z",
    "size": 8779,
    "path": "../public/assets/_slug-DpIG48wf.js"
  },
  "/assets/about-DOrnDu2W.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1348-kFLQ1IgOfQ2g6MQ+Qaqqmz2PCIg"',
    "mtime": "2026-06-16T13:32:06.668Z",
    "size": 4936,
    "path": "../public/assets/about-DOrnDu2W.js"
  },
  "/assets/ResultsTicker-DIuf9n2X.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1f4-Z8e5YLnvvWH3dySEgFWAHzSELL8"',
    "mtime": "2026-06-16T13:32:06.668Z",
    "size": 500,
    "path": "../public/assets/ResultsTicker-DIuf9n2X.js"
  },
  "/assets/arrow-up-right-BNDna2Lt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a2-B6aeHwnkmjlJ2dH8BzH7HxLxcj4"',
    "mtime": "2026-06-16T13:32:06.668Z",
    "size": 162,
    "path": "../public/assets/arrow-up-right-BNDna2Lt.js"
  },
  "/assets/blog-BBn7xSEL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1662-wU0Whz1SfLWalTpjLRcyDUWtvYw"',
    "mtime": "2026-06-16T13:32:06.669Z",
    "size": 5730,
    "path": "../public/assets/blog-BBn7xSEL.js"
  },
  "/assets/case-studies-PslnXan0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"101e-0qCN3CdXl7EA3c7tz+qvhJl5iEo"',
    "mtime": "2026-06-16T13:32:06.667Z",
    "size": 4126,
    "path": "../public/assets/case-studies-PslnXan0.js"
  },
  "/assets/check-DGqvTRgY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"79-atFVxOwikpLsKczi360f3zBZs3s"',
    "mtime": "2026-06-16T13:32:06.668Z",
    "size": 121,
    "path": "../public/assets/check-DGqvTRgY.js"
  },
  "/assets/contact-DXyStj17.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2355-JypsxdEa+z8Dkph35dej1dPOOXM"',
    "mtime": "2026-06-16T13:32:06.668Z",
    "size": 9045,
    "path": "../public/assets/contact-DXyStj17.js"
  },
  "/assets/index-DaYrv_K9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2f82-3ruRwXaqELOF8J6aZopovbyM9+s"',
    "mtime": "2026-06-16T13:32:06.668Z",
    "size": 12162,
    "path": "../public/assets/index-DaYrv_K9.js"
  },
  "/assets/index-pwGzAtwY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"60f2e-4fxWliT0TbUKPB4VZ/tqkvJcYRc"',
    "mtime": "2026-06-16T13:32:06.669Z",
    "size": 397102,
    "path": "../public/assets/index-pwGzAtwY.js"
  },
  "/assets/service-icons-B90VRap2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1002-JM/JQcxXoMIJ+xV+HR4j41GHe+o"',
    "mtime": "2026-06-16T13:32:06.668Z",
    "size": 4098,
    "path": "../public/assets/service-icons-B90VRap2.js"
  },
  "/assets/services-BrY82RFL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ec3-vNpfg8MFqvhEz4aqnVkjuDZa7mY"',
    "mtime": "2026-06-16T13:32:06.668Z",
    "size": 3779,
    "path": "../public/assets/services-BrY82RFL.js"
  },
  "/assets/styles-BSJjoJ74.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"c840-mMRyBHOy0BCIfZWeYItUtMuwMws"',
    "mtime": "2026-06-16T13:32:06.665Z",
    "size": 51264,
    "path": "../public/assets/styles-BSJjoJ74.css"
  },
  "/assets/team-BzQ9Nk9D.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b16-oQluKhBdnJyTEP/Rpg6SKsDdHVI"',
    "mtime": "2026-06-16T13:32:06.668Z",
    "size": 2838,
    "path": "../public/assets/team-BzQ9Nk9D.js"
  },
  "/assets/useReveal-BxINNSkG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"226-M+s6Ut2nAK/WBVkFe5oFsg1xOSc"',
    "mtime": "2026-06-16T13:32:06.668Z",
    "size": 550,
    "path": "../public/assets/useReveal-BxINNSkG.js"
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
