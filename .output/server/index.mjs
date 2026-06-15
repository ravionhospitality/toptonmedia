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
  "/assets/NotFound-BgfGNtgn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"81-8Cfq8Pw2FLWIS6IoHh/al1h1ArE"',
    "mtime": "2026-06-15T09:53:23.997Z",
    "size": 129,
    "path": "../public/assets/NotFound-BgfGNtgn.js"
  },
  "/assets/SiteFooter-0Px9GRWb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1de2-MzlvRpQa0+EkDNzXGQv0lpDKkfI"',
    "mtime": "2026-06-15T09:53:23.997Z",
    "size": 7650,
    "path": "../public/assets/SiteFooter-0Px9GRWb.js"
  },
  "/assets/clock-Ct4emjYG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"aa-h9xlzRvbvtwYfN1xQfjDsyHIf0o"',
    "mtime": "2026-06-15T09:53:23.997Z",
    "size": 170,
    "path": "../public/assets/clock-Ct4emjYG.js"
  },
  "/assets/blog-OMdXfQTN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"28bd-kRRZdPHPAVw6n1fvrVMv7hPUy1s"',
    "mtime": "2026-06-15T09:53:23.997Z",
    "size": 10429,
    "path": "../public/assets/blog-OMdXfQTN.js"
  },
  "/assets/contact-A_dZwSpX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"28a5-T1KuB55Mt3smeAg1ZqjNB71V1G4"',
    "mtime": "2026-06-15T09:53:23.997Z",
    "size": 10405,
    "path": "../public/assets/contact-A_dZwSpX.js"
  },
  "/assets/index-CaEKBhEQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"200e-WnZBMRF7nolZz1BYH67QTR/Jkn4"',
    "mtime": "2026-06-15T09:53:23.997Z",
    "size": 8206,
    "path": "../public/assets/index-CaEKBhEQ.js"
  },
  "/assets/services-BrRZiypE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1f74-a3cFC53Ipyfi3nvVnsY8CbpY5bI"',
    "mtime": "2026-06-15T09:53:23.997Z",
    "size": 8052,
    "path": "../public/assets/services-BrRZiypE.js"
  },
  "/assets/about-i1tp7nzY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1d86-xtD10yVC40UiF0ifOryy/wfHGQs"',
    "mtime": "2026-06-15T09:53:23.997Z",
    "size": 7558,
    "path": "../public/assets/about-i1tp7nzY.js"
  },
  "/assets/team-jszoxfKJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1e33-h4x1ZaJoGMsqHEhDhmmPDl3sLSw"',
    "mtime": "2026-06-15T09:53:23.997Z",
    "size": 7731,
    "path": "../public/assets/team-jszoxfKJ.js"
  },
  "/assets/trending-up-Ca4jOBA-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b5-pYGewV6u/8Czs7dEp8nv73bwcp4"',
    "mtime": "2026-06-15T09:53:23.997Z",
    "size": 181,
    "path": "../public/assets/trending-up-Ca4jOBA-.js"
  },
  "/assets/users-BaLlc0hD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2b0-Xj3aIkaIJOlJXln5euqCLPaAe5w"',
    "mtime": "2026-06-15T09:53:23.997Z",
    "size": 688,
    "path": "../public/assets/users-BaLlc0hD.js"
  },
  "/assets/work-Dz0lh97p.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1f42-zLzCI8Tk688k9TPoh0UbP71oEoQ"',
    "mtime": "2026-06-15T09:53:23.997Z",
    "size": 8002,
    "path": "../public/assets/work-Dz0lh97p.js"
  },
  "/assets/styles-cH_YoiOb.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"93de-7No9TwJQufNEGWy8pGP2GtOryPY"',
    "mtime": "2026-06-15T09:53:23.994Z",
    "size": 37854,
    "path": "../public/assets/styles-cH_YoiOb.css"
  },
  "/assets/index-Byw693gA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4cade-Fn2vzIcr++g3trGSV3A8aIbZbfo"',
    "mtime": "2026-06-15T09:53:23.997Z",
    "size": 314078,
    "path": "../public/assets/index-Byw693gA.js"
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
