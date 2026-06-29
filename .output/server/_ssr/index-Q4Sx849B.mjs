import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { s as supabase } from "./supabase-DaC1xxvQ.mjs";
import { g as SERVICES } from "./router-BffqhL8K.mjs";
import { I as ImageUpload } from "./ImageUpload-B8MEh6RQ.mjs";
import "./index.mjs";
import "../_libs/seroval.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
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
import "../_libs/lucide-react.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:http";
import "node:stream/promises";
import "node:https";
import "node:http2";
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
function blankService() {
  return {
    slug: "",
    name: "",
    category: "",
    pitch: "",
    price_from: "",
    card_image: "",
    hero_image: "",
    bullets: ["", "", ""],
    pricing: [{
      label: "",
      price: "",
      note: ""
    }],
    faqs: [{
      question: "",
      answer: ""
    }],
    seo_title: "",
    seo_description: "",
    featured_on_home: false,
    what_it_is: [""],
    who_for: [""],
    deliverables: [{
      name: "",
      detail: ""
    }],
    result_stat: {
      label: "",
      value: ""
    },
    pricing_note: ""
  };
}
function slugify(t) {
  return t.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-");
}
function downloadCSV(rows) {
  if (!rows.length) {
    alert("No submissions to export.");
    return;
  }
  const cols = ["name", "email", "phone", "company", "service", "budget", "status", "source", "follow_up_date", "notes", "message", "created_at"];
  const escape = (v) => {
    if (v == null) return "";
    const s = String(v).replace(/"/g, '""');
    return s.includes(",") || s.includes("\n") || s.includes('"') ? `"${s}"` : s;
  };
  const lines = [cols.join(","), ...rows.map((r) => cols.map((c) => escape(r[c])).join(","))];
  const blob = new Blob([lines.join("\n")], {
    type: "text/csv"
  });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `topton-leads-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`;
  a.click();
}
function AdminPage() {
  const [authed, setAuthed] = reactExports.useState(false);
  const [authChecked, setAuthChecked] = reactExports.useState(false);
  const [pw, setPw] = reactExports.useState("");
  const [tab, setTab] = reactExports.useState("submissions");
  const [submissions, setSubmissions] = reactExports.useState([]);
  const [posts, setPosts] = reactExports.useState([]);
  const [services, setServices] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(false);
  const [statusFilter, setStatusFilter] = reactExports.useState("all");
  const [expandedId, setExpandedId] = reactExports.useState(null);
  const [noteDrafts, setNoteDrafts] = reactExports.useState({});
  const [fetchError, setFetchError] = reactExports.useState("");
  const [editingService, setEditingService] = reactExports.useState(null);
  const [serviceForm, setServiceForm] = reactExports.useState(blankService());
  const [serviceSaving, setServiceSaving] = reactExports.useState(false);
  const [serviceError, setServiceError] = reactExports.useState("");
  const [serviceSaved, setServiceSaved] = reactExports.useState(false);
  const [seedingServices, setSeedingServices] = reactExports.useState(false);
  const [seedMessage, setSeedMessage] = reactExports.useState("");
  reactExports.useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("topton_admin") === "1") {
      setAuthed(true);
    }
    setAuthChecked(true);
  }, []);
  function login() {
    if (pw === ADMIN_PASSWORD) {
      setAuthed(true);
      sessionStorage.setItem("topton_admin", "1");
    } else alert("Wrong password");
  }
  function loadSubmissions() {
    setLoading(true);
    setFetchError("");
    supabase.from("contact_submissions").select("*").order("created_at", {
      ascending: false
    }).then(({
      data,
      error
    }) => {
      if (error) setFetchError(error.message);
      setSubmissions(data ?? []);
      setLoading(false);
    }).catch((err) => {
      setFetchError(String(err));
      setLoading(false);
    });
  }
  function loadServices() {
    setLoading(true);
    supabase.from("services").select("*").order("name").then(({
      data,
      error
    }) => {
      if (error || !data || data.length === 0) {
        setServices([]);
      } else {
        setServices(data);
      }
      setLoading(false);
    }).catch(() => {
      setServices([]);
      setLoading(false);
    });
  }
  async function seedServices() {
    setSeedingServices(true);
    setServiceError("");
    setSeedMessage("");
    for (const s of SERVICES) {
      const {
        error
      } = await supabase.from("services").upsert({
        slug: s.slug,
        name: s.name,
        category: s.category,
        pitch: s.pitch,
        price_from: s.priceFrom,
        booking_url: s.bookingUrl,
        card_image: s.cardImage,
        hero_image: s.heroImage,
        bullets: s.bullets,
        what_it_is: s.whatItIs,
        deliverables: s.deliverables,
        pricing: s.pricing,
        pricing_note: s.pricingNote ?? "",
        who_for: s.whoFor,
        result_stat: s.resultStat,
        faqs: s.faqs,
        seo_title: s.seoTitle,
        seo_description: s.seoDescription,
        featured_on_home: s.featuredOnHome ?? false
      }, {
        onConflict: "slug"
      });
      if (error) {
        console.error("Seed failed for", s.slug, error);
        setServiceError(`Failed on "${s.slug}": ${error.message}`);
        setSeedingServices(false);
        return;
      }
    }
    setSeedingServices(false);
    setSeedMessage(`Imported ${SERVICES.length} services successfully.`);
    loadServices();
  }
  reactExports.useEffect(() => {
    if (!authed) return;
    setLoading(true);
    if (tab === "submissions") loadSubmissions();
    else if (tab === "blog") {
      supabase.from("blog_posts").select("id,slug,title,category,published,created_at").order("created_at", {
        ascending: false
      }).then(({
        data,
        error
      }) => {
        if (error) setFetchError(error.message);
        setPosts(data ?? []);
        setLoading(false);
      }).catch((err) => {
        setFetchError(String(err));
        setLoading(false);
      });
    } else {
      loadServices();
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
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    alert("Copied! Paste this directly into a LinkedIn article or newsletter post.");
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
  function openNewService() {
    setEditingService({
      id: "new",
      ...blankService()
    });
    setServiceForm(blankService());
    setServiceError("");
    setServiceSaved(false);
  }
  function openEditService(svc) {
    setEditingService(svc);
    setServiceForm({
      slug: svc.slug,
      name: svc.name,
      category: svc.category,
      pitch: svc.pitch,
      price_from: svc.price_from,
      card_image: svc.card_image,
      hero_image: svc.hero_image,
      bullets: [...svc.bullets],
      pricing: [...svc.pricing],
      faqs: [...svc.faqs],
      seo_title: svc.seo_title,
      seo_description: svc.seo_description,
      featured_on_home: svc.featured_on_home,
      what_it_is: [...svc.what_it_is],
      who_for: [...svc.who_for],
      deliverables: [...svc.deliverables],
      result_stat: {
        ...svc.result_stat
      },
      pricing_note: svc.pricing_note ?? ""
    });
    setServiceError("");
    setServiceSaved(false);
  }
  async function saveService() {
    if (!serviceForm.name || !serviceForm.slug) {
      setServiceError("Name and slug are required");
      return;
    }
    setServiceSaving(true);
    setServiceError("");
    setServiceSaved(false);
    const payload = {
      ...serviceForm,
      slug: slugify(serviceForm.slug)
    };
    if (editingService?.id === "new") {
      const {
        error
      } = await supabase.from("services").insert(payload);
      if (error) {
        setServiceError(error.message);
        setServiceSaving(false);
        return;
      }
    } else {
      const {
        error
      } = await supabase.from("services").update(payload).eq("id", editingService.id);
      if (error) {
        setServiceError(error.message);
        setServiceSaving(false);
        return;
      }
    }
    setServiceSaving(false);
    setServiceSaved(true);
    loadServices();
  }
  async function deleteService(id) {
    if (!confirm("Delete this service permanently?")) return;
    await supabase.from("services").delete().eq("id", id);
    setServices((s) => s.filter((sv) => sv.id !== id));
  }
  function sfUp(key, val) {
    setServiceForm((f) => ({
      ...f,
      [key]: val
    }));
  }
  const filteredSubmissions = statusFilter === "all" ? submissions : submissions.filter((s) => (s.status ?? "new") === statusFilter);
  const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  const overdueCount = submissions.filter((s) => s.follow_up_date && s.follow_up_date < today && !["won", "lost"].includes(s.status)).length;
  if (!authChecked) {
    return null;
  }
  if (!authed) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-charcoal flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-cardbrown border border-gold/20 rounded-2xl p-10 w-full max-w-sm text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-bold text-ivory mb-6", children: "Admin Login" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "password", value: pw, onChange: (e) => setPw(e.target.value), onKeyDown: (e) => e.key === "Enter" && login(), placeholder: "Enter password", className: "w-full rounded-xl border border-gold/20 bg-charcoal px-4 py-3 text-ivory mb-4 focus:outline-none focus:border-gold" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: login, className: "w-full py-3 rounded-full bg-gradient-to-r from-gold to-gold-bright text-charcoal font-semibold", children: "Login" })
  ] }) });
  if (editingService) return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-charcoal text-ivory", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-6 py-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-bold", children: editingService.id === "new" ? "New Service" : "Edit Service" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setEditingService(null), className: "text-sm text-ivory/50 hover:text-ivory", children: "← Back to Admin" })
      ] }),
      serviceError && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 bg-red-900/30 border border-red-700/40 rounded-xl px-5 py-3 text-sm text-red-300", children: [
        "⚠ ",
        serviceError
      ] }),
      serviceSaved && !serviceError && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 bg-green-900/30 border border-green-700/40 rounded-xl px-5 py-3 text-sm text-green-300", children: "✓ Saved successfully." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SField, { label: "Service Name *", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: serviceForm.name, onChange: (e) => {
            sfUp("name", e.target.value);
            if (!serviceForm.slug || editingService.id === "new") sfUp("slug", slugify(e.target.value));
          }, className: "admin-input" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SField, { label: "Slug *", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: serviceForm.slug, onChange: (e) => sfUp("slug", slugify(e.target.value)), className: "admin-input" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SField, { label: "Category", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: serviceForm.category, onChange: (e) => sfUp("category", e.target.value), className: "admin-input", placeholder: "e.g. GROWTH MARKETING" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SField, { label: "Price From", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: serviceForm.price_from, onChange: (e) => sfUp("price_from", e.target.value), className: "admin-input", placeholder: "₦400,000/month" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SField, { label: "Pitch (one-liner)", children: /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: serviceForm.pitch, onChange: (e) => sfUp("pitch", e.target.value), rows: 2, className: "admin-input" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ImageUpload, { value: serviceForm.card_image, onChange: (v) => sfUp("card_image", v), label: "Card Image (used on Services listing)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ImageUpload, { value: serviceForm.hero_image, onChange: (v) => sfUp("hero_image", v), label: "Hero Image (used on Service detail page)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SField, { label: "Bullet Points (3 key highlights)", children: [
          serviceForm.bullets.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: b, onChange: (e) => {
              const arr = [...serviceForm.bullets];
              arr[i] = e.target.value;
              sfUp("bullets", arr);
            }, className: "admin-input flex-1", placeholder: `Bullet ${i + 1}` }),
            serviceForm.bullets.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => sfUp("bullets", serviceForm.bullets.filter((_, j) => j !== i)), className: "text-red-400 text-xs px-2", children: "✕" })
          ] }, i)),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => sfUp("bullets", [...serviceForm.bullets, ""]), className: "text-xs text-gold hover:underline", children: "+ Add bullet" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SField, { label: "What It Is (paragraphs)", children: [
          serviceForm.what_it_is.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: p, onChange: (e) => {
              const arr = [...serviceForm.what_it_is];
              arr[i] = e.target.value;
              sfUp("what_it_is", arr);
            }, rows: 2, className: "admin-input flex-1", placeholder: `Paragraph ${i + 1}` }),
            serviceForm.what_it_is.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => sfUp("what_it_is", serviceForm.what_it_is.filter((_, j) => j !== i)), className: "text-red-400 text-xs px-2 self-start mt-2", children: "✕" })
          ] }, i)),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => sfUp("what_it_is", [...serviceForm.what_it_is, ""]), className: "text-xs text-gold hover:underline", children: "+ Add paragraph" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SField, { label: "Deliverables (what the client gets)", children: [
          serviceForm.deliverables.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-charcoal/50 rounded-xl p-3 mb-3 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: d.name, onChange: (e) => {
                const arr = [...serviceForm.deliverables];
                arr[i] = {
                  ...arr[i],
                  name: e.target.value
                };
                sfUp("deliverables", arr);
              }, className: "admin-input flex-1", placeholder: "Deliverable name" }),
              serviceForm.deliverables.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => sfUp("deliverables", serviceForm.deliverables.filter((_, j) => j !== i)), className: "text-red-400 text-xs px-2", children: "✕" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: d.detail, onChange: (e) => {
              const arr = [...serviceForm.deliverables];
              arr[i] = {
                ...arr[i],
                detail: e.target.value
              };
              sfUp("deliverables", arr);
            }, rows: 2, className: "admin-input w-full", placeholder: "Detail / description" })
          ] }, i)),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => sfUp("deliverables", [...serviceForm.deliverables, {
            name: "",
            detail: ""
          }]), className: "text-xs text-gold hover:underline", children: "+ Add deliverable" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SField, { label: "Who It's For (comma-separated tags)", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: serviceForm.who_for.join(", "), onChange: (e) => sfUp("who_for", e.target.value.split(",").map((s) => s.trim()).filter(Boolean)), className: "admin-input", placeholder: "E-commerce brands, Fintechs" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SField, { label: "Result Stat", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: serviceForm.result_stat.label, onChange: (e) => sfUp("result_stat", {
            ...serviceForm.result_stat,
            label: e.target.value
          }), className: "admin-input", placeholder: "Label e.g. Average ROAS" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: serviceForm.result_stat.value, onChange: (e) => sfUp("result_stat", {
            ...serviceForm.result_stat,
            value: e.target.value
          }), className: "admin-input", placeholder: "Value e.g. 4.2x" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SField, { label: "Pricing Tiers", children: [
          serviceForm.pricing.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: p.label, onChange: (e) => {
              const arr = [...serviceForm.pricing];
              arr[i] = {
                ...arr[i],
                label: e.target.value
              };
              sfUp("pricing", arr);
            }, className: "admin-input", placeholder: "Label" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: p.price, onChange: (e) => {
              const arr = [...serviceForm.pricing];
              arr[i] = {
                ...arr[i],
                price: e.target.value
              };
              sfUp("pricing", arr);
            }, className: "admin-input", placeholder: "Price" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: p.note ?? "", onChange: (e) => {
                const arr = [...serviceForm.pricing];
                arr[i] = {
                  ...arr[i],
                  note: e.target.value
                };
                sfUp("pricing", arr);
              }, className: "admin-input flex-1", placeholder: "Note" }),
              serviceForm.pricing.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => sfUp("pricing", serviceForm.pricing.filter((_, j) => j !== i)), className: "text-red-400 text-xs", children: "✕" })
            ] })
          ] }, i)),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => sfUp("pricing", [...serviceForm.pricing, {
            label: "",
            price: "",
            note: ""
          }]), className: "text-xs text-gold hover:underline", children: "+ Add pricing tier" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SField, { label: "Pricing Note (optional)", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: serviceForm.pricing_note ?? "", onChange: (e) => sfUp("pricing_note", e.target.value), className: "admin-input", placeholder: "e.g. Rush printing +30%..." }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SField, { label: "FAQs", children: [
          serviceForm.faqs.map((faq, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-charcoal/50 rounded-xl p-3 mb-3 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: faq.question, onChange: (e) => {
                const arr = [...serviceForm.faqs];
                arr[i] = {
                  ...arr[i],
                  question: e.target.value
                };
                sfUp("faqs", arr);
              }, className: "admin-input flex-1", placeholder: "Question" }),
              serviceForm.faqs.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => sfUp("faqs", serviceForm.faqs.filter((_, j) => j !== i)), className: "text-red-400 text-xs", children: "✕" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: faq.answer, onChange: (e) => {
              const arr = [...serviceForm.faqs];
              arr[i] = {
                ...arr[i],
                answer: e.target.value
              };
              sfUp("faqs", arr);
            }, rows: 2, className: "admin-input w-full", placeholder: "Answer" })
          ] }, i)),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => sfUp("faqs", [...serviceForm.faqs, {
            question: "",
            answer: ""
          }]), className: "text-xs text-gold hover:underline", children: "+ Add FAQ" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SField, { label: "SEO Title", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: serviceForm.seo_title, onChange: (e) => sfUp("seo_title", e.target.value), className: "admin-input" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SField, { label: "Featured on Home?", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 mt-2 text-sm text-ivory/70 cursor-pointer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: serviceForm.featured_on_home, onChange: (e) => sfUp("featured_on_home", e.target.checked) }),
            "Show on homepage"
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SField, { label: "SEO Description", children: /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: serviceForm.seo_description, onChange: (e) => sfUp("seo_description", e.target.value), rows: 2, className: "admin-input" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 pt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: saveService, disabled: serviceSaving, className: "px-6 py-3 rounded-full bg-gradient-to-r from-gold to-gold-bright text-charcoal font-semibold disabled:opacity-50", children: serviceSaving ? "Saving…" : "Save Service" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setEditingService(null), className: "px-6 py-3 rounded-full border border-ivory/20 text-ivory/70", children: "Cancel" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `.admin-input { width: 100%; background: #1A0E10; border: 1px solid rgba(201,168,76,0.2); border-radius: 0.75rem; padding: 0.7rem 1rem; color: #FAF6F0; font-size: 0.9rem; } .admin-input:focus { outline: none; border-color: #C9A84C; }` })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-charcoal text-ivory", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6 py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-bold text-ivory", children: "Topton Media Admin" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "text-sm text-gold hover:underline", children: "View Site" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
          sessionStorage.removeItem("topton_admin");
          setAuthed(false);
        }, className: "text-sm text-ivory/40 hover:text-ivory", children: "Logout" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 mb-8 items-center flex-wrap", children: [
      ["submissions", "blog", "services"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setTab(t), className: `px-5 py-2 rounded-full text-sm font-semibold transition-colors ${tab === t ? "bg-gold text-charcoal" : "border border-gold/30 text-ivory/70 hover:border-gold"}`, children: t === "submissions" ? "Contact Submissions" : t === "blog" ? "Blog Posts" : "Services" }, t)),
      tab === "submissions" && overdueCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-3 py-1.5 rounded-full text-xs font-semibold bg-red-900/40 text-red-300", children: [
        overdueCount,
        " overdue follow-up",
        overdueCount > 1 ? "s" : ""
      ] }),
      tab === "submissions" && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => downloadCSV(filteredSubmissions), className: "ml-auto px-4 py-2 rounded-full text-sm font-semibold border border-gold/30 text-gold hover:border-gold transition-colors", children: "↓ Export CSV" }),
      tab === "blog" && /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/admin/blog/new", className: "ml-auto px-5 py-2 rounded-full text-sm font-semibold bg-maroon text-ivory hover:opacity-90 transition-opacity", children: "+ New Post" }),
      tab === "services" && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: openNewService, className: "ml-auto px-5 py-2 rounded-full text-sm font-semibold bg-maroon text-ivory hover:opacity-90 transition-opacity", children: "+ New Service" })
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
    loading && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-ivory/50", children: "Loading…" }),
    !loading && fetchError && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-900/30 border border-red-700/40 rounded-xl px-5 py-3 text-sm text-red-300 mb-4", children: [
      "⚠ Could not load data: ",
      fetchError
    ] }),
    !loading && tab === "submissions" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      filteredSubmissions.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-ivory/40", children: "No submissions in this view." }),
      filteredSubmissions.map((s) => {
        const status = s.status ?? "new";
        const isExpanded = expandedId === s.id;
        const isOverdue = s.follow_up_date && s.follow_up_date < today && !["won", "lost"].includes(status);
        const isQualifier = s.source === "qualifier_form";
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `bg-cardbrown border rounded-xl p-6 ${isOverdue ? "border-red-700/50" : "border-gold/10"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold text-ivory", children: [
                  s.name,
                  s.company ? ` — ${s.company}` : ""
                ] }),
                isQualifier && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded-full text-xs font-semibold bg-blue-900/40 text-blue-300", children: "Qualifier Lead" })
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
          s.message && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-ivory/60 leading-relaxed whitespace-pre-line", children: isQualifier ? "[Qualifier answers — expand to review]" : s.message }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setExpandedId(isExpanded ? null : s.id), className: "mt-4 text-xs font-semibold text-gold hover:underline", children: isExpanded ? "Hide CRM details" : "Manage status & notes →" }),
          isExpanded && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-4 border-t border-gold/10 space-y-4", children: [
            isQualifier && s.message && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-charcoal/60 rounded-xl p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-ivory/60 mb-2", children: "Qualifier Answers" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "text-xs text-ivory/70 whitespace-pre-wrap font-mono", children: s.message })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
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
                })), rows: 3, className: "w-full rounded-lg border border-gold/20 bg-charcoal px-3 py-2 text-sm text-ivory", placeholder: "e.g. Called 12 June, interested in Growth package" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => saveNote(s.id), className: "mt-2 px-4 py-1.5 rounded-lg text-xs font-semibold bg-gold/20 text-gold hover:bg-gold/30 transition-colors", children: "Save Note" })
              ] })
            ] })
          ] })
        ] }, s.id);
      })
    ] }),
    !loading && tab === "blog" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      posts.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-ivory/40", children: "No blog posts yet." }),
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
    ] }),
    !loading && tab === "services" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      seedMessage && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 bg-green-900/30 border border-green-700/40 rounded-xl px-5 py-3 text-sm text-green-300", children: [
        "✓ ",
        seedMessage
      ] }),
      serviceError && services.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 bg-red-900/30 border border-red-700/40 rounded-xl px-5 py-3 text-sm text-red-300", children: [
        "⚠ ",
        serviceError
      ] }),
      services.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-ivory/40 mb-4", children: "No services in database yet." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: seedServices, disabled: seedingServices, className: "px-6 py-3 rounded-full bg-gradient-to-r from-gold to-gold-bright text-charcoal font-semibold disabled:opacity-50", children: seedingServices ? "Importing…" : "Import from services.ts (one-time setup)" })
      ] }) : services.map((svc) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-cardbrown border border-gold/10 rounded-xl px-6 py-4 flex items-center gap-4 flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-ivory", children: svc.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-ivory/40 mt-0.5", children: [
            svc.category,
            " · /services/",
            svc.slug,
            " · ",
            svc.price_from
          ] })
        ] }),
        svc.featured_on_home && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded-full text-xs font-semibold bg-gold/20 text-gold", children: "Featured" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `/services/${svc.slug}`, target: "_blank", rel: "noopener noreferrer", className: "text-xs px-3 py-1.5 rounded-lg border border-gold/30 text-gold hover:border-gold transition-colors", children: "View Live" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => openEditService(svc), className: "text-xs px-3 py-1.5 rounded-lg border border-ivory/20 text-ivory/60 hover:border-ivory/40 transition-colors", children: "Edit" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => deleteService(svc.id), className: "text-xs px-3 py-1.5 rounded-lg border border-red-900/40 text-red-400 hover:border-red-400 transition-colors", children: "Delete" })
      ] }, svc.id))
    ] })
  ] }) });
}
function SField({
  label,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-ivory/80 mb-1.5", children: label }),
    children
  ] });
}
export {
  AdminPage as component
};
