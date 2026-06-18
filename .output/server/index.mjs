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
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": '"94-FyThjQWHuzikUz3EsQj45VxEXi4"',
    "mtime": "2026-06-17T15:20:12.862Z",
    "size": 148,
    "path": "../public/robots.txt"
  },
  "/sitemap.xml": {
    "type": "application/xml",
    "etag": '"c82-0v74Z7C9w/4QeMl53+G6s7PmDf4"',
    "mtime": "2026-06-17T15:20:12.862Z",
    "size": 3202,
    "path": "../public/sitemap.xml"
  },
  "/assets/FAQAccordion--IOA7C_x.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"35d-6l4xM//FdpyGIcmCebrS+dbVmoA"',
    "mtime": "2026-06-17T15:20:07.557Z",
    "size": 861,
    "path": "../public/assets/FAQAccordion--IOA7C_x.js"
  },
  "/assets/_slug-CDifXJ0K.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1af-wdHf+yNFotF/19j8H+BuURGba6o"',
    "mtime": "2026-06-17T15:20:07.555Z",
    "size": 431,
    "path": "../public/assets/_slug-CDifXJ0K.js"
  },
  "/assets/_slug-D4_7G11c.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1a5-nEXtfKYs2nXJNXtVtg4PuH58X7w"',
    "mtime": "2026-06-17T15:20:07.556Z",
    "size": 421,
    "path": "../public/assets/_slug-D4_7G11c.js"
  },
  "/assets/_slug-DCpY4bQI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"27a2-GnVkNhZIkdyDhKtdO1UHuPe7Im4"',
    "mtime": "2026-06-17T15:20:07.556Z",
    "size": 10146,
    "path": "../public/assets/_slug-DCpY4bQI.js"
  },
  "/assets/_slug-PxxkZFtM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15e9-fdcMDm7FeCbiM6surcC4vgOzwf4"',
    "mtime": "2026-06-17T15:20:07.556Z",
    "size": 5609,
    "path": "../public/assets/_slug-PxxkZFtM.js"
  },
  "/assets/about--dkmxKEL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1348-gybJ+DT9FXElrTeTDRwU/j0XigQ"',
    "mtime": "2026-06-17T15:20:07.551Z",
    "size": 4936,
    "path": "../public/assets/about--dkmxKEL.js"
  },
  "/assets/arrow-up-right-B1o_WK95.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a2-jRbRX8a99/H1b4v4eQkmH9jC7jQ"',
    "mtime": "2026-06-17T15:20:07.554Z",
    "size": 162,
    "path": "../public/assets/arrow-up-right-B1o_WK95.js"
  },
  "/assets/blog-DlTRSbDd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1102-M6I23rZtXwvdwN8rnoCMPTZoyqI"',
    "mtime": "2026-06-17T15:20:07.556Z",
    "size": 4354,
    "path": "../public/assets/blog-DlTRSbDd.js"
  },
  "/assets/browser-WwYISG-T.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"267-MoaoPwd8ybSAiexnJ6fJubu5n4o"',
    "mtime": "2026-06-17T15:20:07.556Z",
    "size": 615,
    "path": "../public/assets/browser-WwYISG-T.js"
  },
  "/assets/ResultsTicker-DpxSZKgj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1f4-xLe+l4oDnuu/lTBZLvjPJSUPuZc"',
    "mtime": "2026-06-17T15:20:07.551Z",
    "size": 500,
    "path": "../public/assets/ResultsTicker-DpxSZKgj.js"
  },
  "/assets/case-studies-EFACO5H7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"101e-997i+jMJiLkSEBeue7aoXlMmIgs"',
    "mtime": "2026-06-17T15:20:07.551Z",
    "size": 4126,
    "path": "../public/assets/case-studies-EFACO5H7.js"
  },
  "/assets/contact-Dcu9PGl-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2377-GbChT8DjRgOOpxftbhNIA00dZqE"',
    "mtime": "2026-06-17T15:20:07.547Z",
    "size": 9079,
    "path": "../public/assets/contact-Dcu9PGl-.js"
  },
  "/assets/index-BW0Ci0hO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2f80-e9K2AxcQLDPlN4meAzRnKu1mhb4"',
    "mtime": "2026-06-17T15:20:07.554Z",
    "size": 12160,
    "path": "../public/assets/index-BW0Ci0hO.js"
  },
  "/assets/index-BzAIgErI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13ea-pWUPGylJMrY+yj+GMhJGBO1PYPA"',
    "mtime": "2026-06-17T15:20:07.554Z",
    "size": 5098,
    "path": "../public/assets/index-BzAIgErI.js"
  },
  "/assets/service-icons-C69xzkhM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ffd-enZLW4QtcEIcI3BZpAl3S//w4QA"',
    "mtime": "2026-06-17T15:20:07.556Z",
    "size": 4093,
    "path": "../public/assets/service-icons-C69xzkhM.js"
  },
  "/assets/services-DZGQWW98.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1014-fBZXtvdgjkWMSvh6HMUFy7BU4xs"',
    "mtime": "2026-06-17T15:20:07.546Z",
    "size": 4116,
    "path": "../public/assets/services-DZGQWW98.js"
  },
  "/assets/styles-ByTU5yA-.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"d5d8-IfxhPSCic61qQz1Azd80Vh5AtZE"',
    "mtime": "2026-06-17T15:20:07.547Z",
    "size": 54744,
    "path": "../public/assets/styles-ByTU5yA-.css"
  },
  "/assets/supabase-DQ-Wlf_i.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1882d-E0m+kaGLyQPOCuOUeV84OVj5qAg"',
    "mtime": "2026-06-17T15:20:07.556Z",
    "size": 100397,
    "path": "../public/assets/supabase-DQ-Wlf_i.js"
  },
  "/assets/team-CEJeEFA7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"c31-Yk+RugXX8p8QjZFoK2nJETJJjs8"',
    "mtime": "2026-06-17T15:20:07.547Z",
    "size": 3121,
    "path": "../public/assets/team-CEJeEFA7.js"
  },
  "/assets/useReveal-BJyB7yC0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"21f-g7K5bXOCwU7P2bNVjHCXXDthQ6Q"',
    "mtime": "2026-06-17T15:20:07.557Z",
    "size": 543,
    "path": "../public/assets/useReveal-BJyB7yC0.js"
  },
  "/assets/check-IgkJjDTZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"74-4l3xRDIsnDwCtHHSi0BrIO/C9Sc"',
    "mtime": "2026-06-17T15:20:07.555Z",
    "size": 116,
    "path": "../public/assets/check-IgkJjDTZ.js"
  },
  "/assets/index-CNl72R68.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"81778-qVAKGs5Sa+Jg/lj5FI4Ggjxfx3E"',
    "mtime": "2026-06-17T15:20:07.558Z",
    "size": 530296,
    "path": "../public/assets/index-CNl72R68.js"
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
