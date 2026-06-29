import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { s as supabase } from "./supabase-DaC1xxvQ.mjs";
function ImageUpload({ value, onChange, label = "Hero Image" }) {
  const inputRef = reactExports.useRef(null);
  const [uploading, setUploading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  async function handleFile(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setError("");
    setUploading(true);
    const ext = file.name.split(".").pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
    const { error: uploadErr } = await supabase.storage.from("blog-images").upload(fileName, file, { upsert: true, contentType: file.type });
    if (uploadErr) {
      setError(uploadErr.message);
      setUploading(false);
      return;
    }
    const { data } = supabase.storage.from("blog-images").getPublicUrl(fileName);
    onChange(data.publicUrl);
    setUploading(false);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-ivory/80 mb-1.5", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
      value && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full h-40 rounded-xl overflow-hidden border border-gold/20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: value, alt: "Preview", className: "w-full h-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => onChange(""),
            className: "absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-lg hover:bg-red-900/80",
            children: "Remove"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => inputRef.current?.click(),
            disabled: uploading,
            className: "px-4 py-2 rounded-xl border border-gold/30 text-gold text-sm hover:border-gold disabled:opacity-50 transition-colors",
            children: uploading ? "Uploading…" : value ? "Replace Image" : "Upload Image"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-ivory/30", children: "or paste a URL below" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "text",
          value,
          onChange: (e) => onChange(e.target.value),
          placeholder: "https://...",
          className: "admin-input"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ref: inputRef, type: "file", accept: "image/*", onChange: handleFile, className: "hidden" }),
      error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-400", children: error })
    ] })
  ] });
}
export {
  ImageUpload as I
};
