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
function escapeXml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const generateRssFeed_createServerFn_handler = createServerRpc({
  id: "7d005fe24c1d94f348ad8752740972cf352b754058409c8263b0cbe5b3e05ae5",
  name: "generateRssFeed",
  filename: "src/routes/rss.xml.tsx"
}, (opts) => generateRssFeed.__executeServer(opts));
const generateRssFeed = createServerFn({
  method: "GET"
}).handler(generateRssFeed_createServerFn_handler, async () => {
  const {
    data: posts
  } = await supabase.from("blog_posts").select("slug,title,excerpt,meta_description,hero_image,category,created_at").eq("published", true).order("created_at", {
    ascending: false
  }).limit(50);
  const items = (posts ?? []).map((post) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>https://toptonmedia.com/blog/${post.slug}</link>
      <guid isPermaLink="true">https://toptonmedia.com/blog/${post.slug}</guid>
      <pubDate>${new Date(post.created_at).toUTCString()}</pubDate>
      <description>${escapeXml(post.excerpt || post.meta_description || "")}</description>
      <category>${escapeXml(post.category)}</category>
      <media:content url="${escapeXml(post.hero_image)}" medium="image" />
      <enclosure url="${escapeXml(post.hero_image)}" type="image/jpeg" />
    </item>`).join("");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>Topton Media Blog</title>
    <link>https://toptonmedia.com/blog</link>
    <atom:link href="https://toptonmedia.com/rss.xml" rel="self" type="application/rss+xml" />
    <description>Growth and performance marketing insights from Topton Media — Lagos, Nigeria.</description>
    <language>en-NG</language>
    <lastBuildDate>${(/* @__PURE__ */ new Date()).toUTCString()}</lastBuildDate>
    <image>
      <url>https://i.imgur.com/yuWmsVc.png</url>
      <title>Topton Media Blog</title>
      <link>https://toptonmedia.com/blog</link>
    </image>${items}
  </channel>
</rss>`;
  return xml;
});
export {
  generateRssFeed_createServerFn_handler
};
