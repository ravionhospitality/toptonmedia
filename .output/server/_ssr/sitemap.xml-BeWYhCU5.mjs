import { c as createServerRpc } from "./createServerRpc-wV0Vk4NU.mjs";
import { c as createServerFn } from "./index.mjs";
import { s as supabase } from "./supabase-DaC1xxvQ.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:http";
import "node:stream";
import "node:stream/promises";
import "node:https";
import "node:http2";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/@supabase/node-fetch.mjs";
import "http";
import "url";
import "https";
import "zlib";
import "../_libs/whatwg-url.mjs";
import "../_libs/webidl-conversions.mjs";
import "punycode";
import "../_libs/tr46.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "../_libs/supabase__functions-js.mjs";
import "../_libs/supabase__storage-js.mjs";
const SERVICES = ["user-acquisition", "lead-generation", "performance-marketing", "web-design-cro", "social-media-management", "pr-communications", "market-activations", "printing-services", "branded-gifts", "brand-strategy", "media-production", "training-workshops", "africa-market-entry", "email-crm", "seo"];
const STATIC_PAGES = ["", "about", "services", "case-studies", "team", "blog", "contact"];
const generateSitemap_createServerFn_handler = createServerRpc({
  id: "666366155183ef065408fe26219b9a60139d48945d1c151071579827d71b8a1e",
  name: "generateSitemap",
  filename: "src/routes/sitemap.xml.tsx"
}, (opts) => generateSitemap.__executeServer(opts));
const generateSitemap = createServerFn({
  method: "GET"
}).handler(generateSitemap_createServerFn_handler, async () => {
  const {
    data: posts
  } = await supabase.from("blog_posts").select("slug,updated_at,created_at").eq("published", true);
  const urls = [];
  for (const p of STATIC_PAGES) {
    urls.push({
      loc: `https://toptonmedia.com/${p}`,
      priority: p === "" ? "1.0" : "0.8"
    });
  }
  for (const s of SERVICES) {
    urls.push({
      loc: `https://toptonmedia.com/services/${s}`,
      priority: "0.8"
    });
  }
  for (const post of posts ?? []) {
    urls.push({
      loc: `https://toptonmedia.com/blog/${post.slug}`,
      priority: "0.7",
      lastmod: (post.updated_at ?? post.created_at)?.slice(0, 10)
    });
  }
  const xmlItems = urls.map((u) => `
  <url>
    <loc>${u.loc}</loc>
    ${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ""}
    <changefreq>weekly</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join("");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${xmlItems}
</urlset>`;
});
export {
  generateSitemap_createServerFn_handler
};
