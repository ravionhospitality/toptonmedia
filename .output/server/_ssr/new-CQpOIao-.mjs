import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
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
const CATEGORIES = ["User Acquisition", "Lead Generation", "Performance Marketing", "Web Design & CRO", "Social Media Management", "PR & Communications", "Market Activations", "Printing Services", "Branded Corporate Gifts", "Brand Strategy & Creative", "Media Production", "Training & Workshops", "Africa Market Entry", "Email & CRM Marketing", "SEO"];
const SERVICE_SLUGS = ["user-acquisition", "lead-generation", "performance-marketing", "web-design-cro", "social-media-management", "pr-communications", "market-activations", "printing-services", "branded-gifts", "brand-strategy", "media-production", "training-workshops", "africa-market-entry", "email-crm", "seo"];
function slugify(text) {
  return text.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-");
}
function NewPostPage() {
  const navigate = useNavigate();
  const [saving, setSaving] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  const [form, setForm] = reactExports.useState({
    title: "",
    slug: "",
    category: CATEGORIES[0],
    relatedService: SERVICE_SLUGS[0],
    excerpt: "",
    quickAnswer: "",
    heroImage: "",
    metaTitle: "",
    metaDescription: "",
    keywords: "",
    readMinutes: 6,
    contentRaw: "",
    faqsRaw: "",
    published: false
  });
  function update(key, value) {
    setForm((f) => ({
      ...f,
      [key]: value
    }));
  }
  function handleTitleChange(title) {
    update("title", title);
    if (!form.slug) update("slug", slugify(title));
  }
  async function handleSave() {
    setError("");
    if (!form.title || !form.slug) {
      setError("Title and slug are required.");
      return;
    }
    setSaving(true);
    let content = [];
    try {
      content = form.contentRaw.trim() ? JSON.parse(form.contentRaw) : [];
    } catch {
      setError("Content JSON is invalid. Check the format and try again.");
      setSaving(false);
      return;
    }
    let faqs = [];
    try {
      faqs = form.faqsRaw.trim() ? JSON.parse(form.faqsRaw) : [];
    } catch {
      setError("FAQs JSON is invalid. Check the format and try again.");
      setSaving(false);
      return;
    }
    const {
      error: insertError
    } = await supabase.from("blog_posts").insert({
      slug: form.slug,
      title: form.title,
      meta_title: form.metaTitle || form.title,
      meta_description: form.metaDescription || form.excerpt,
      category: form.category,
      related_service: form.relatedService,
      excerpt: form.excerpt,
      quick_answer: form.quickAnswer,
      hero_image: form.heroImage,
      content,
      faqs,
      keywords: form.keywords.split(",").map((k) => k.trim()).filter(Boolean),
      read_minutes: form.readMinutes,
      published: form.published
    });
    setSaving(false);
    if (insertError) {
      setError(insertError.message);
      return;
    }
    navigate({
      to: "/admin"
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-charcoal text-ivory", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-6 py-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-bold", children: "New Blog Post" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/admin", className: "text-sm text-gold hover:underline", children: "← Back to Admin" })
      ] }),
      error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 bg-red-900/30 border border-red-700/40 rounded-xl px-5 py-3 text-sm text-red-300", children: error }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Title *", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: form.title, onChange: (e) => handleTitleChange(e.target.value), className: "admin-input", placeholder: "How to Reduce App Install Cost in Nigeria" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Slug *", hint: "Auto-generated from title, edit if needed", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: form.slug, onChange: (e) => update("slug", slugify(e.target.value)), className: "admin-input", placeholder: "reduce-app-install-cost-nigeria" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Category", children: /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: form.category, onChange: (e) => update("category", e.target.value), className: "admin-input", children: CATEGORIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: c, children: c }, c)) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Related Service Slug", children: /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: form.relatedService, onChange: (e) => update("relatedService", e.target.value), className: "admin-input", children: SERVICE_SLUGS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: s, children: s }, s)) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Hero Image URL", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: form.heroImage, onChange: (e) => update("heroImage", e.target.value), className: "admin-input", placeholder: "https://..." }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Excerpt", hint: "Shown on blog index and at top of post", children: /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: form.excerpt, onChange: (e) => update("excerpt", e.target.value), rows: 2, className: "admin-input" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Quick Answer", hint: "Short direct answer shown in a highlighted box — important for AI/search visibility", children: /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: form.quickAnswer, onChange: (e) => update("quickAnswer", e.target.value), rows: 2, className: "admin-input" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Meta Title (SEO)", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: form.metaTitle, onChange: (e) => update("metaTitle", e.target.value), className: "admin-input" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Read Minutes", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", value: form.readMinutes, onChange: (e) => update("readMinutes", Number(e.target.value)), className: "admin-input" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Meta Description (SEO)", children: /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: form.metaDescription, onChange: (e) => update("metaDescription", e.target.value), rows: 2, className: "admin-input" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Keywords", hint: "Comma-separated", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: form.keywords, onChange: (e) => update("keywords", e.target.value), className: "admin-input", placeholder: "app install cost Nigeria, CPI Nigeria" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Content Sections (JSON)", hint: 'Format: [{"heading": "...", "paragraphs": ["..."], "bullets": ["..."]}]', children: /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: form.contentRaw, onChange: (e) => update("contentRaw", e.target.value), rows: 10, className: "admin-input font-mono text-xs", placeholder: '[{"heading": "Why This Matters", "paragraphs": ["First paragraph...", "Second paragraph..."]}]' }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "FAQs (JSON)", hint: 'Format: [{"question": "...", "answer": "..."}]', children: /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: form.faqsRaw, onChange: (e) => update("faqsRaw", e.target.value), rows: 6, className: "admin-input font-mono text-xs", placeholder: '[{"question": "What is...", "answer": "It is..."}]' }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 text-sm text-ivory/70", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: form.published, onChange: (e) => update("published", e.target.checked) }),
          "Publish immediately"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 pt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleSave, disabled: saving, className: "px-6 py-3 rounded-full bg-gradient-to-r from-gold to-gold-bright text-charcoal font-semibold disabled:opacity-50", children: saving ? "Saving…" : "Save Post" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/admin", className: "px-6 py-3 rounded-full border border-ivory/20 text-ivory/70", children: "Cancel" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        .admin-input {
          width: 100%;
          background: #1A0E10;
          border: 1px solid rgba(201,168,76,0.2);
          border-radius: 0.75rem;
          padding: 0.7rem 1rem;
          color: #FAF6F0;
          font-size: 0.9rem;
        }
        .admin-input:focus { outline: none; border-color: #C9A84C; }
      ` })
  ] });
}
function Field({
  label,
  hint,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-ivory/80 mb-1.5", children: label }),
    hint && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-ivory/40 mb-1.5", children: hint }),
    children
  ] });
}
export {
  NewPostPage as component
};
