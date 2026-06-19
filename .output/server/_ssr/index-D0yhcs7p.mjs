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
const STATUS_OPTIONS = ["new", "contacted", "qualified", "proposal_sent", "won", "lost"];
const STATUS_LABELS = {
  new: "New",
  contacted: "Contacted",
  qualified: "Qualified",
  proposal_sent: "Proposal Sent",
  won: "Won",
  lost: "Lost"
};
const STATUS_COLORS = {
  new: "bg-blue-900/40 text-blue-300",
  contacted: "bg-yellow-900/40 text-yellow-300",
  qualified: "bg-purple-900/40 text-purple-300",
  proposal_sent: "bg-orange-900/40 text-orange-300",
  won: "bg-green-900/40 text-green-400",
  lost: "bg-red-900/40 text-red-400"
};
function AdminPage() {
  const [authed, setAuthed] = reactExports.useState(false);
  const [pw, setPw] = reactExports.useState("");
  const [tab, setTab] = reactExports.useState("submissions");
  const [submissions, setSubmissions] = reactExports.useState([]);
  const [posts, setPosts] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(false);
  const [statusFilter, setStatusFilter] = reactExports.useState("all");
  const [expandedId, setExpandedId] = reactExports.useState(null);
  const [noteDrafts, setNoteDrafts] = reactExports.useState({});
  function login() {
    if (pw === ADMIN_PASSWORD) setAuthed(true);
    else alert("Wrong password");
  }
  function loadSubmissions() {
    setLoading(true);
    supabase.from("contact_submissions").select("*").order("created_at", {
      ascending: false
    }).then(({
      data
    }) => {
      setSubmissions(data ?? []);
      setLoading(false);
    });
  }
  reactExports.useEffect(() => {
    if (!authed) return;
    setLoading(true);
    if (tab === "submissions") {
      loadSubmissions();
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
  async function copyForLinkedIn(id) {
    const {
      data: post
    } = await supabase.from("blog_posts").select("*").eq("id", id).single();
    if (!post) return;
    const sections = post.content ?? [];
    const bodyParts = [];
    bodyParts.push(post.title.toUpperCase());
    bodyParts.push("");
    if (post.quick_answer) {
      bodyParts.push(post.quick_answer);
      bodyParts.push("");
    }
    for (const section of sections) {
      bodyParts.push(section.heading);
      bodyParts.push("");
      for (const para of section.paragraphs) bodyParts.push(para);
      if (section.bullets) {
        bodyParts.push("");
        for (const b of section.bullets) bodyParts.push(`→ ${b}`);
      }
      bodyParts.push("");
    }
    bodyParts.push("—");
    bodyParts.push(`Read the full piece on the Topton Media blog: https://toptonmedia.com/blog/${post.slug}`);
    bodyParts.push("");
    bodyParts.push(`#${post.category.replace(/[^a-zA-Z]/g, "")} #MarketingNigeria #ToptonMedia`);
    const text = bodyParts.join("\n");
    try {
      await navigator.clipboard.writeText(text);
      alert("Copied! Paste this directly into a LinkedIn article or newsletter post.");
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      alert("Copied! Paste this directly into a LinkedIn article or newsletter post.");
    }
  }
  async function updateStatus(id, status) {
    await supabase.from("contact_submissions").update({
      status
    }).eq("id", id);
    setSubmissions((s) => s.map((sub) => sub.id === id ? {
      ...sub,
      status
    } : sub));
  }
  async function saveNote(id) {
    const note = noteDrafts[id] ?? "";
    await supabase.from("contact_submissions").update({
      notes: note
    }).eq("id", id);
    setSubmissions((s) => s.map((sub) => sub.id === id ? {
      ...sub,
      notes: note
    } : sub));
  }
  async function setFollowUpDate(id, date) {
    await supabase.from("contact_submissions").update({
      follow_up_date: date || null
    }).eq("id", id);
    setSubmissions((s) => s.map((sub) => sub.id === id ? {
      ...sub,
      follow_up_date: date
    } : sub));
  }
  const filteredSubmissions = statusFilter === "all" ? submissions : submissions.filter((s) => (s.status ?? "new") === statusFilter);
  const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  const overdueCount = submissions.filter((s) => s.follow_up_date && s.follow_up_date < today && !["won", "lost"].includes(s.status)).length;
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
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 mb-8 items-center flex-wrap", children: [
      ["submissions", "blog"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setTab(t), className: `px-5 py-2 rounded-full text-sm font-semibold transition-colors ${tab === t ? "bg-gold text-charcoal" : "border border-gold/30 text-ivory/70 hover:border-gold"}`, children: t === "submissions" ? "Contact Submissions" : "Blog Posts" }, t)),
      tab === "submissions" && overdueCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-3 py-1.5 rounded-full text-xs font-semibold bg-red-900/40 text-red-300", children: [
        overdueCount,
        " overdue follow-up",
        overdueCount > 1 ? "s" : ""
      ] }),
      tab === "blog" && /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/admin/blog/new", className: "ml-auto px-5 py-2 rounded-full text-sm font-semibold bg-maroon text-ivory hover:opacity-90 transition-opacity", children: "+ New Post" })
    ] }),
    tab === "submissions" && !loading && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mb-6 flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setStatusFilter("all"), className: `px-3 py-1.5 rounded-full text-xs font-semibold ${statusFilter === "all" ? "bg-ivory text-charcoal" : "border border-ivory/20 text-ivory/60"}`, children: [
        "All (",
        submissions.length,
        ")"
      ] }),
      STATUS_OPTIONS.map((s) => {
        const count = submissions.filter((sub) => (sub.status ?? "new") === s).length;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setStatusFilter(s), className: `px-3 py-1.5 rounded-full text-xs font-semibold ${statusFilter === s ? STATUS_COLORS[s] : "border border-ivory/20 text-ivory/60"}`, children: [
          STATUS_LABELS[s],
          " (",
          count,
          ")"
        ] }, s);
      })
    ] }),
    loading && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-ivory/50", children: "Loading..." }),
    !loading && tab === "submissions" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      filteredSubmissions.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-ivory/40", children: "No submissions in this view." }),
      filteredSubmissions.map((s) => {
        const status = s.status ?? "new";
        const isExpanded = expandedId === s.id;
        const isOverdue = s.follow_up_date && s.follow_up_date < today && !["won", "lost"].includes(status);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `bg-cardbrown border rounded-xl p-6 ${isOverdue ? "border-red-700/50" : "border-gold/10"}`, children: [
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
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-3 py-1 rounded-full text-xs font-semibold ${STATUS_COLORS[status]}`, children: STATUS_LABELS[status] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-ivory/40", children: new Date(s.created_at).toLocaleString("en-NG") })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex flex-wrap gap-3 text-xs", children: [
            s.service && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1 rounded-full bg-maroon/20 text-gold", children: s.service }),
            s.budget && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1 rounded-full bg-gold/10 text-ivory/70", children: s.budget }),
            isOverdue && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1 rounded-full bg-red-900/40 text-red-300", children: "Follow-up overdue" })
          ] }),
          s.message && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-ivory/60 leading-relaxed", children: s.message }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setExpandedId(isExpanded ? null : s.id), className: "mt-4 text-xs font-semibold text-gold hover:underline", children: isExpanded ? "Hide CRM details" : "Manage status & notes →" }),
          isExpanded && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-4 border-t border-gold/10 grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-medium text-ivory/60 mb-1.5", children: "Status" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: status, onChange: (e) => updateStatus(s.id, e.target.value), className: "w-full rounded-lg border border-gold/20 bg-charcoal px-3 py-2 text-sm text-ivory", children: STATUS_OPTIONS.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: opt, children: STATUS_LABELS[opt] }, opt)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-medium text-ivory/60 mb-1.5", children: "Follow-up date" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "date", value: s.follow_up_date ?? "", onChange: (e) => setFollowUpDate(s.id, e.target.value), className: "w-full rounded-lg border border-gold/20 bg-charcoal px-3 py-2 text-sm text-ivory" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-medium text-ivory/60 mb-1.5", children: "Internal notes" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: noteDrafts[s.id] ?? s.notes ?? "", onChange: (e) => setNoteDrafts((d) => ({
                ...d,
                [s.id]: e.target.value
              })), rows: 3, className: "w-full rounded-lg border border-gold/20 bg-charcoal px-3 py-2 text-sm text-ivory", placeholder: "e.g. Called 12 June, interested in Growth package, follow up after their board meeting" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => saveNote(s.id), className: "mt-2 px-4 py-1.5 rounded-lg text-xs font-semibold bg-gold/20 text-gold hover:bg-gold/30 transition-colors", children: "Save Note" })
            ] })
          ] })
        ] }, s.id);
      })
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => copyForLinkedIn(p.id), className: "text-xs px-3 py-1.5 rounded-lg border border-blue-700/40 text-blue-300 hover:border-blue-400 transition-colors", children: "Copy for LinkedIn" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => deletePost(p.id), className: "text-xs px-3 py-1.5 rounded-lg border border-red-900/40 text-red-400 hover:border-red-400 transition-colors", children: "Delete" })
      ] }, p.id))
    ] })
  ] }) });
}
export {
  AdminPage as component
};
