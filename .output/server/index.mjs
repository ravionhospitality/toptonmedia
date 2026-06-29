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
    "mtime": "2026-06-24T07:47:48.756Z",
    "size": 52637,
    "path": "../public/og-image.jpg"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": '"94-FyThjQWHuzikUz3EsQj45VxEXi4"',
    "mtime": "2026-06-24T07:47:48.754Z",
    "size": 148,
    "path": "../public/robots.txt"
  },
  "/sitemap.xml": {
    "type": "application/xml",
    "etag": '"336c-zPJQxhECTyplgy6VpKaj2Sd7hXs"',
    "mtime": "2026-06-24T07:47:48.755Z",
    "size": 13164,
    "path": "../public/sitemap.xml"
  },
  "/assets/FAQAccordion-D0fKOjrD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"35d-zBpeITSSSPra0YY7/PmEwM3xTx0"',
    "mtime": "2026-06-24T07:47:43.041Z",
    "size": 861,
    "path": "../public/assets/FAQAccordion-D0fKOjrD.js"
  },
  "/assets/ImageUpload-Jv9FnDks.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6d7-d7ZkbvB8KVPQO34UwPSIJ/jktHc"',
    "mtime": "2026-06-24T07:47:43.041Z",
    "size": 1751,
    "path": "../public/assets/ImageUpload-Jv9FnDks.js"
  },
  "/assets/ResultsTicker-Cauv6Tf4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1f4-PMnarIcKLGzFy9wsJOQhmCPgXzg"',
    "mtime": "2026-06-24T07:47:43.039Z",
    "size": 500,
    "path": "../public/assets/ResultsTicker-Cauv6Tf4.js"
  },
  "/assets/_id-o_gQZ5hC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1b74-h7Xq3frHuI//eKx4D65haQwfaI4"',
    "mtime": "2026-06-24T07:47:43.040Z",
    "size": 7028,
    "path": "../public/assets/_id-o_gQZ5hC.js"
  },
  "/assets/RichEditor-B8_2mTFw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6709b-ULZuluuLvbiGv7JXgFBa5QmMuFc"',
    "mtime": "2026-06-24T07:47:43.041Z",
    "size": 422043,
    "path": "../public/assets/RichEditor-B8_2mTFw.js"
  },
  "/assets/_slug-BatVgV-G.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2097-H4cFjgIdPWiVocH9R6kijuz/8QQ"',
    "mtime": "2026-06-24T07:47:43.039Z",
    "size": 8343,
    "path": "../public/assets/_slug-BatVgV-G.js"
  },
  "/assets/_slug-BSYIDImB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1a5-qtDeejtZTw7VURQr7v94xfyRFTc"',
    "mtime": "2026-06-24T07:47:43.040Z",
    "size": 421,
    "path": "../public/assets/_slug-BSYIDImB.js"
  },
  "/assets/_slug-CT8Npr09.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"27a5-BAXEP7c4FOkP+7ypg++H75BiFeA"',
    "mtime": "2026-06-24T07:47:43.040Z",
    "size": 10149,
    "path": "../public/assets/_slug-CT8Npr09.js"
  },
  "/assets/_slug-Du-1gb91.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1af-+G66gMj2Lfh0BazkGR2EntV2YyM"',
    "mtime": "2026-06-24T07:47:43.039Z",
    "size": 431,
    "path": "../public/assets/_slug-Du-1gb91.js"
  },
  "/assets/_slug-k0f_Z29s.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2711-qvOKv1UsYdo1oAuqKvn/HT5uT4Y"',
    "mtime": "2026-06-24T07:47:43.040Z",
    "size": 10001,
    "path": "../public/assets/_slug-k0f_Z29s.js"
  },
  "/assets/_slug-u0vh94Fn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1a7-oAFo5edY2doE2yaKMawQRU0Rblk"',
    "mtime": "2026-06-24T07:47:43.039Z",
    "size": 423,
    "path": "../public/assets/_slug-u0vh94Fn.js"
  },
  "/assets/about-liqvl1sa.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1348-5odXv3/TUV5PedlyhthI68kg4RQ"',
    "mtime": "2026-06-24T07:47:43.039Z",
    "size": 4936,
    "path": "../public/assets/about-liqvl1sa.js"
  },
  "/assets/apply-DLxPTqaq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5262-vNEW10segnb7GZJDjQLYgU+/7Is"',
    "mtime": "2026-06-24T07:47:43.039Z",
    "size": 21090,
    "path": "../public/assets/apply-DLxPTqaq.js"
  },
  "/assets/arrow-up-right-ZdvIjCfK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a8-5zCNJDXhswoVRYFYKXtpNTu1Spg"',
    "mtime": "2026-06-24T07:47:43.039Z",
    "size": 168,
    "path": "../public/assets/arrow-up-right-ZdvIjCfK.js"
  },
  "/assets/blog-D4U85pyu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1a28-KEv7AP+zMAGss4o7MOx2iiohemU"',
    "mtime": "2026-06-24T07:47:43.039Z",
    "size": 6696,
    "path": "../public/assets/blog-D4U85pyu.js"
  },
  "/assets/browser-dEacV2fn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"267-L5MzyCTgbI7nPnWtM4uBQaNgGVA"',
    "mtime": "2026-06-24T07:47:43.041Z",
    "size": 615,
    "path": "../public/assets/browser-dEacV2fn.js"
  },
  "/assets/case-studies-_VklUnPp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"101e-uNlla0w2SMl3RaERqOSQqfgFO3E"',
    "mtime": "2026-06-24T07:47:43.039Z",
    "size": 4126,
    "path": "../public/assets/case-studies-_VklUnPp.js"
  },
  "/assets/check-jq3kTOPV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"78-eFOz0obpV8cr/vhe/E3ombreD2g"',
    "mtime": "2026-06-24T07:47:43.040Z",
    "size": 120,
    "path": "../public/assets/check-jq3kTOPV.js"
  },
  "/assets/clock-D6O2s2jH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a5-IdXWZhEswzh7W+UaL79XYZQrZAA"',
    "mtime": "2026-06-24T07:47:43.040Z",
    "size": 165,
    "path": "../public/assets/clock-D6O2s2jH.js"
  },
  "/assets/confirmation-DwmrzzMF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"16a7-YuhjczGKNm29ND9QVEsLXYMKa5Q"',
    "mtime": "2026-06-24T07:47:43.040Z",
    "size": 5799,
    "path": "../public/assets/confirmation-DwmrzzMF.js"
  },
  "/assets/contact-BUf4uZJf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"23da-DUc2RywYB3lCSd8eKIrTHIJYbvg"',
    "mtime": "2026-06-24T07:47:43.039Z",
    "size": 9178,
    "path": "../public/assets/contact-BUf4uZJf.js"
  },
  "/assets/index-2flPSrEp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"18dc-56AA9L8WryhK7SjukMhBsO3k45Q"',
    "mtime": "2026-06-24T07:47:43.039Z",
    "size": 6364,
    "path": "../public/assets/index-2flPSrEp.js"
  },
  "/assets/index-B5H3jmYh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"619b-w3Dp6OiNWqD69z6RxtQgQrqin0k"',
    "mtime": "2026-06-24T07:47:43.039Z",
    "size": 24987,
    "path": "../public/assets/index-B5H3jmYh.js"
  },
  "/assets/index-DL3kmNAu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3632-qFZe31Y9F+zbXqSvH20tBj+GzC4"',
    "mtime": "2026-06-24T07:47:43.039Z",
    "size": 13874,
    "path": "../public/assets/index-DL3kmNAu.js"
  },
  "/assets/loader-circle-DSIL5O0O.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"8c-20krq9yruhndbHZcywOdUuhbdtQ"',
    "mtime": "2026-06-24T07:47:43.039Z",
    "size": 140,
    "path": "../public/assets/loader-circle-DSIL5O0O.js"
  },
  "/assets/new-D98Xaq7f.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1900-S7Z01tBWCNufdwaCLLyN1+2hOeE"',
    "mtime": "2026-06-24T07:47:43.040Z",
    "size": 6400,
    "path": "../public/assets/new-D98Xaq7f.js"
  },
  "/assets/service-icons-DVScSiHW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1048-FZBlEPVMiQRTO8g6W/9wk+Y/m2A"',
    "mtime": "2026-06-24T07:47:43.040Z",
    "size": 4168,
    "path": "../public/assets/service-icons-DVScSiHW.js"
  },
  "/assets/services-BOgWujIe.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"110e-/Iua9RpNhZ+vczp5vCNSSVkTEs0"',
    "mtime": "2026-06-24T07:47:43.039Z",
    "size": 4366,
    "path": "../public/assets/services-BOgWujIe.js"
  },
  "/assets/star-CZQ3UxmB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1d9-yuC1g4FSOnEKZFmXrEV48BUBrsY"',
    "mtime": "2026-06-24T07:47:43.039Z",
    "size": 473,
    "path": "../public/assets/star-CZQ3UxmB.js"
  },
  "/assets/styles--X_uUQO_.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"10806-RUfSNPBRZhx2NkWgwTSlxLp3Kc8"',
    "mtime": "2026-06-24T07:47:43.038Z",
    "size": 67590,
    "path": "../public/assets/styles--X_uUQO_.css"
  },
  "/assets/index-DDTtirtz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7efbd-dhzqwVy2YzIS32xg41Opr02LdJI"',
    "mtime": "2026-06-24T07:47:43.039Z",
    "size": 520125,
    "path": "../public/assets/index-DDTtirtz.js"
  },
  "/assets/team-CPFn9d4R.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d4f-mo3vqeCmTz9s0Q+VYq9QPHu9h5U"',
    "mtime": "2026-06-24T07:47:43.039Z",
    "size": 3407,
    "path": "../public/assets/team-CPFn9d4R.js"
  },
  "/assets/useReveal-BQ5RHa9P.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"225-XDXc4mY1JfB+68caPo9Lk+OYx/4"',
    "mtime": "2026-06-24T07:47:43.040Z",
    "size": 549,
    "path": "../public/assets/useReveal-BQ5RHa9P.js"
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
