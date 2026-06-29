import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { f as useNavigate, L as Link } from "./_libs/tanstack__react-router.mjs";
import { s as supabase } from "./_ssr/supabase-DaC1xxvQ.mjs";
import { R as RichEditor } from "./_ssr/RichEditor-C4m9glA3.mjs";
import { I as ImageUpload } from "./_ssr/ImageUpload-B8MEh6RQ.mjs";
import { p as Route } from "./_ssr/router-BffqhL8K.mjs";
import "./_libs/tiptap__starter-kit.mjs";
import "./_libs/tiptap__extension-link.mjs";
import "./_libs/tiptap__extension-image.mjs";
import "./_libs/tiptap__extensions.mjs";
import "./_libs/tiptap__extension-underline.mjs";
import "./_libs/tiptap__extension-text-align.mjs";
import "./_ssr/index.mjs";
import "./_libs/seroval.mjs";
import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "./_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./_libs/isbot.mjs";
import "./_libs/supabase__supabase-js.mjs";
import "./_libs/supabase__postgrest-js.mjs";
import "./_libs/@supabase/node-fetch.mjs";
import "http";
import "url";
import "https";
import "zlib";
import "./_libs/whatwg-url.mjs";
import "./_libs/webidl-conversions.mjs";
import "punycode";
import "./_libs/tr46.mjs";
import "./_libs/supabase__realtime-js.mjs";
import "./_libs/supabase__auth-js.mjs";
import "./_libs/supabase__functions-js.mjs";
import "./_libs/supabase__storage-js.mjs";
import "./_libs/tiptap__react.mjs";
import "./_libs/use-sync-external-store.mjs";
import "./_libs/tiptap__core.mjs";
import "./_libs/prosemirror-transform.mjs";
import "./_libs/prosemirror-model.mjs";
import "./_libs/orderedmap.mjs";
import "./_libs/prosemirror-commands.mjs";
import "./_libs/prosemirror-state.mjs";
import "./_libs/prosemirror-schema-list.mjs";
import "./_libs/prosemirror-view.mjs";
import "./_libs/prosemirror-keymap.mjs";
import "./_libs/w3c-keyname.mjs";
import "./_libs/fast-equals.mjs";
import "./_libs/tiptap__extension-placeholder.mjs";
import "./_libs/@tiptap/extension-character-count+[...].mjs";
import "./_libs/lucide-react.mjs";
import "node:async_hooks";
import "./_libs/h3-v2.mjs";
import "./_libs/rou3.mjs";
import "./_libs/srvx.mjs";
import "node:http";
import "node:stream/promises";
import "node:https";
import "node:http2";
import "./_libs/tiptap__extension-blockquote.mjs";
import "./_libs/tiptap__extension-bold.mjs";
import "./_libs/tiptap__extension-code.mjs";
import "./_libs/tiptap__extension-code-block.mjs";
import "./_libs/tiptap__extension-document.mjs";
import "./_libs/tiptap__extension-hard-break.mjs";
import "./_libs/tiptap__extension-heading.mjs";
import "./_libs/@tiptap/extension-horizontal-rule+[...].mjs";
import "./_libs/tiptap__extension-italic.mjs";
import "./_libs/tiptap__extension-list.mjs";
import "./_libs/tiptap__extension-paragraph.mjs";
import "./_libs/tiptap__extension-strike.mjs";
import "./_libs/tiptap__extension-text.mjs";
import "./_libs/linkifyjs.mjs";
import "./_libs/prosemirror-dropcursor.mjs";
import "./_libs/prosemirror-gapcursor.mjs";
import "./_libs/prosemirror-history.mjs";
import "./_libs/rope-sequence.mjs";
const CATEGORIES = ["User Acquisition", "Lead Generation", "Performance Marketing", "Web Design & CRO", "Social Media Management", "PR & Communications", "Market Activations", "Printing Services", "Branded Corporate Gifts", "Brand Strategy & Creative", "Media Production", "Training & Workshops", "Africa Market Entry", "Email & CRM Marketing", "SEO"];
const SERVICE_SLUGS = ["user-acquisition", "lead-generation", "performance-marketing", "web-design-cro", "social-media-management", "pr-communications", "market-activations", "printing-services", "branded-gifts", "brand-strategy", "media-production", "training-workshops", "africa-market-entry", "email-crm", "seo"];
function EditPostPage() {
  const {
    id
  } = Route.useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = reactExports.useState(true);
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
    bodyHtml: "",
    faqsRaw: "",
    published: false
  });
  reactExports.useEffect(() => {
    supabase.from("blog_posts").select("*").eq("id", id).single().then(({
      data,
      error: fetchErr
    }) => {
      if (fetchErr || !data) {
        setError("Could not load this post.");
        setLoading(false);
        return;
      }
      let bodyHtml = data.body_html ?? "";
      if (!bodyHtml && data.content && Array.isArray(data.content) && data.content.length > 0) {
        bodyHtml = data.content.map((section) => {
          const heading = section.heading ? `<h2>${section.heading}</h2>` : "";
          const paras = (section.paragraphs ?? []).map((p) => `<p>${p}</p>`).join("");
          const bullets = section.bullets?.length ? `<ul>${section.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>` : "";
          return heading + paras + bullets;
        }).join("");
      }
      setForm({
        title: data.title ?? "",
        slug: data.slug ?? "",
        category: data.category ?? CATEGORIES[0],
        relatedService: data.related_service ?? SERVICE_SLUGS[0],
        excerpt: data.excerpt ?? "",
        quickAnswer: data.quick_answer ?? "",
        heroImage: data.hero_image ?? "",
        metaTitle: data.meta_title ?? "",
        metaDescription: data.meta_description ?? "",
        keywords: (data.keywords ?? []).join(", "),
        readMinutes: data.read_minutes ?? 6,
        bodyHtml,
        faqsRaw: data.faqs?.length ? JSON.stringify(data.faqs, null, 2) : "",
        published: data.published ?? false
      });
      setLoading(false);
    });
  }, [id]);
  function update(key, value) {
    setForm((f) => ({
      ...f,
      [key]: value
    }));
  }
  async function handleSave() {
    setError("");
    if (!form.title || !form.slug) {
      setError("Title and slug are required.");
      return;
    }
    setSaving(true);
    let faqs = [];
    try {
      faqs = form.faqsRaw.trim() ? JSON.parse(form.faqsRaw) : [];
    } catch {
      setError('FAQs JSON is invalid. Format: [{"question":"...","answer":"..."}]');
      setSaving(false);
      return;
    }
    const {
      error: updateError
    } = await supabase.from("blog_posts").update({
      slug: form.slug,
      title: form.title,
      meta_title: form.metaTitle || form.title,
      meta_description: form.metaDescription || form.excerpt,
      category: form.category,
      related_service: form.relatedService,
      excerpt: form.excerpt,
      quick_answer: form.quickAnswer,
      hero_image: form.heroImage,
      body_html: form.bodyHtml,
      faqs,
      keywords: form.keywords.split(",").map((k) => k.trim()).filter(Boolean),
      read_minutes: form.readMinutes,
      published: form.published
    }).eq("id", id);
    setSaving(false);
    if (updateError) {
      setError(updateError.message);
      return;
    }
    navigate({
      to: "/admin"
    });
  }
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-charcoal flex items-center justify-center text-ivory/50", children: "Loading…" });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-charcoal text-ivory", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-6 py-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-bold", children: "Edit Post" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `/blog/${form.slug}`, target: "_blank", rel: "noopener noreferrer", className: "text-sm text-gold hover:underline", children: "Preview →" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/admin", className: "text-sm text-ivory/50 hover:underline", children: "← Admin" })
        ] })
      ] }),
      error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 bg-red-900/30 border border-red-700/40 rounded-xl px-5 py-3 text-sm text-red-300", children: error }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Title *", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: form.title, onChange: (e) => update("title", e.target.value), className: "admin-input" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Slug *", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: form.slug, onChange: (e) => update("slug", e.target.value), className: "admin-input" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Category", children: /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: form.category, onChange: (e) => update("category", e.target.value), className: "admin-input", children: CATEGORIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: c }, c)) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Related Service", children: /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: form.relatedService, onChange: (e) => update("relatedService", e.target.value), className: "admin-input", children: SERVICE_SLUGS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: s }, s)) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ImageUpload, { value: form.heroImage, onChange: (v) => update("heroImage", v) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Excerpt", hint: "1-2 sentences shown on the blog index", children: /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: form.excerpt, onChange: (e) => update("excerpt", e.target.value), rows: 2, className: "admin-input" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Quick Answer", hint: "Short direct answer for AI Overview / featured snippet", children: /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: form.quickAnswer, onChange: (e) => update("quickAnswer", e.target.value), rows: 2, className: "admin-input" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Article Body", hint: "Write freely — bold, headings, lists, links, images all supported", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RichEditor, { value: form.bodyHtml, onChange: (html) => update("bodyHtml", html), minHeight: 500 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "FAQs (JSON)", hint: 'Optional. Format: [{"question": "...", "answer": "..."}]', children: /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: form.faqsRaw, onChange: (e) => update("faqsRaw", e.target.value), rows: 5, className: "admin-input font-mono text-xs" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Meta Title (SEO)", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: form.metaTitle, onChange: (e) => update("metaTitle", e.target.value), className: "admin-input" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Read Minutes", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", value: form.readMinutes, onChange: (e) => update("readMinutes", Number(e.target.value)), className: "admin-input" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Meta Description (SEO)", children: /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: form.metaDescription, onChange: (e) => update("metaDescription", e.target.value), rows: 2, className: "admin-input" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Keywords", hint: "Comma-separated", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: form.keywords, onChange: (e) => update("keywords", e.target.value), className: "admin-input" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 text-sm text-ivory/70 cursor-pointer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: form.published, onChange: (e) => update("published", e.target.checked) }),
          "Published"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 pt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleSave, disabled: saving, className: "px-6 py-3 rounded-full bg-gradient-to-r from-gold to-gold-bright text-charcoal font-semibold disabled:opacity-50", children: saving ? "Saving…" : "Save Changes" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/admin", className: "px-6 py-3 rounded-full border border-ivory/20 text-ivory/70", children: "Cancel" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `.admin-input { width: 100%; background: #1A0E10; border: 1px solid rgba(201,168,76,0.2); border-radius: 0.75rem; padding: 0.7rem 1rem; color: #FAF6F0; font-size: 0.9rem; } .admin-input:focus { outline: none; border-color: #C9A84C; }` })
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
  EditPostPage as component
};
