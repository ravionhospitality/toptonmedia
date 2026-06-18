import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { s as supabase } from "./supabase-DaC1xxvQ.mjs";
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
const ADMIN_PASSWORD = "topton2026admin";
function AdminPage() {
  const [authed, setAuthed] = reactExports.useState(false);
  const [pw, setPw] = reactExports.useState("");
  const [tab, setTab] = reactExports.useState("submissions");
  const [submissions, setSubmissions] = reactExports.useState([]);
  const [posts, setPosts] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(false);
  function login() {
    if (pw === ADMIN_PASSWORD) setAuthed(true);
    else alert("Wrong password");
  }
  reactExports.useEffect(() => {
    if (!authed) return;
    setLoading(true);
    if (tab === "submissions") {
      supabase.from("contact_submissions").select("*").order("created_at", {
        ascending: false
      }).then(({
        data
      }) => {
        setSubmissions(data ?? []);
        setLoading(false);
      });
    } else {
      supabase.from("blog_posts").select("id,slug,title,category,published,created_at").order("created_at", {
        ascending: false
      }).then(({
        data
      }) => {
        setPosts(data ?? []);
        setLoading(false);
      });
    }
  }, [authed, tab]);
  async function togglePublish(id, current) {
    await supabase.from("blog_posts").update({
      published: !current
    }).eq("id", id);
    setPosts((p) => p.map((post) => post.id === id ? {
      ...post,
      published: !current
    } : post));
  }
  async function deletePost(id) {
    if (!confirm("Delete this post?")) return;
    await supabase.from("blog_posts").delete().eq("id", id);
    setPosts((p) => p.filter((post) => post.id !== id));
  }
  if (!authed) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-charcoal flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-cardbrown border border-gold/20 rounded-2xl p-10 w-full max-w-sm text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-bold text-ivory mb-6", children: "Admin Login" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "password", value: pw, onChange: (e) => setPw(e.target.value), onKeyDown: (e) => e.key === "Enter" && login(), placeholder: "Enter password", className: "w-full rounded-xl border border-gold/20 bg-charcoal px-4 py-3 text-ivory mb-4 focus:outline-none focus:border-gold" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: login, className: "w-full py-3 rounded-full bg-gradient-to-r from-gold to-gold-bright text-charcoal font-semibold", children: "Login" })
  ] }) });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-charcoal text-ivory", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6 py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-bold text-ivory", children: "Topton Media Admin" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "text-sm text-gold hover:underline", children: "View Site" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 mb-8", children: [
      ["submissions", "blog"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setTab(t), className: `px-5 py-2 rounded-full text-sm font-semibold transition-colors ${tab === t ? "bg-gold text-charcoal" : "border border-gold/30 text-ivory/70 hover:border-gold"}`, children: t === "submissions" ? "Contact Submissions" : "Blog Posts" }, t)),
      tab === "blog" && /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/admin/blog/new", className: "ml-auto px-5 py-2 rounded-full text-sm font-semibold bg-maroon text-ivory hover:opacity-90 transition-opacity", children: "+ New Post" })
    ] }),
    loading && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-ivory/50", children: "Loading..." }),
    !loading && tab === "submissions" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      submissions.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-ivory/40", children: "No submissions yet." }),
      submissions.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-cardbrown border border-gold/10 rounded-xl p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold text-ivory", children: [
              s.name,
              " ",
              s.company ? `— ${s.company}` : ""
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${s.email}`, className: "text-gold text-sm hover:underline", children: s.email }),
            s.phone && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-ivory/50 text-sm ml-3", children: s.phone })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-ivory/40", children: new Date(s.created_at).toLocaleString("en-NG") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex flex-wrap gap-3 text-xs", children: [
          s.service && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1 rounded-full bg-maroon/20 text-gold", children: s.service }),
          s.budget && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1 rounded-full bg-gold/10 text-ivory/70", children: s.budget })
        ] }),
        s.message && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-ivory/60 leading-relaxed", children: s.message })
      ] }, s.id))
    ] }),
    !loading && tab === "blog" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      posts.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-ivory/40", children: "No blog posts yet. Click New Post to add one." }),
      posts.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-cardbrown border border-gold/10 rounded-xl px-6 py-4 flex items-center gap-4 flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-ivory truncate", children: p.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-ivory/40 mt-0.5", children: [
            p.category,
            " · /blog/",
            p.slug
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-3 py-1 rounded-full text-xs font-semibold ${p.published ? "bg-green-900/40 text-green-400" : "bg-sand/20 text-ivory/50"}`, children: p.published ? "Published" : "Draft" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => togglePublish(p.id, p.published), className: "text-xs px-3 py-1.5 rounded-lg border border-gold/30 text-gold hover:border-gold transition-colors", children: p.published ? "Unpublish" : "Publish" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/admin/blog/$id", params: {
          id: p.id
        }, className: "text-xs px-3 py-1.5 rounded-lg border border-ivory/20 text-ivory/60 hover:border-ivory/40 transition-colors", children: "Edit" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => deletePost(p.id), className: "text-xs px-3 py-1.5 rounded-lg border border-red-900/40 text-red-400 hover:border-red-400 transition-colors", children: "Delete" })
      ] }, p.id))
    ] })
  ] }) });
}
export {
  AdminPage as component
};
