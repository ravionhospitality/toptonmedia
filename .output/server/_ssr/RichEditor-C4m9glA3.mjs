import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useEditor, E as EditorContent } from "../_libs/tiptap__react.mjs";
import { i as index_default } from "../_libs/tiptap__starter-kit.mjs";
import { i as index_default$4 } from "../_libs/tiptap__extension-link.mjs";
import { i as index_default$5 } from "../_libs/tiptap__extension-image.mjs";
import { i as index_default$6 } from "../_libs/tiptap__extension-placeholder.mjs";
import { i as index_default$1 } from "../_libs/tiptap__extension-underline.mjs";
import { i as index_default$3 } from "../_libs/tiptap__extension-text-align.mjs";
import { i as index_default$2 } from "../_libs/@tiptap/extension-character-count+[...].mjs";
function ToolbarButton({
  onClick,
  active,
  title,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      onMouseDown: (e) => {
        e.preventDefault();
        onClick();
      },
      title,
      className: `px-2.5 py-1.5 rounded text-sm font-medium transition-colors ${active ? "bg-gold text-charcoal" : "text-ivory/70 hover:text-ivory hover:bg-ivory/10"}`,
      children
    }
  );
}
function RichEditor({ value, onChange, placeholder = "Start writing...", minHeight = 400 }) {
  const editor = useEditor({
    extensions: [
      index_default,
      index_default$1,
      index_default$3.configure({ types: ["heading", "paragraph"] }),
      index_default$2,
      index_default$4.configure({
        openOnClick: false,
        HTMLAttributes: { class: "text-gold underline" }
      }),
      index_default$5.configure({
        HTMLAttributes: { class: "rounded-xl max-w-full my-4" }
      }),
      index_default$6.configure({
        placeholder,
        emptyEditorClass: "before:content-[attr(data-placeholder)] before:text-ivory/30 before:pointer-events-none before:float-left before:h-0"
      })
    ],
    content: value,
    onUpdate: ({ editor: editor2 }) => onChange(editor2.getHTML()),
    editorProps: {
      attributes: {
        class: "prose prose-invert max-w-none focus:outline-none px-6 py-5",
        style: `min-height: ${minHeight}px`
      }
    }
  });
  reactExports.useEffect(() => {
    if (!editor) return;
    if (editor.getHTML() !== value) {
      editor.commands.setContent(value || "");
    }
  }, [value, editor]);
  const addLink = reactExports.useCallback(() => {
    const url = window.prompt("URL:");
    if (!url) return;
    if (editor?.state.selection.empty) {
      editor.chain().focus().setLink({ href: url }).run();
    } else {
      editor?.chain().focus().toggleLink({ href: url }).run();
    }
  }, [editor]);
  const addImage = reactExports.useCallback(() => {
    const url = window.prompt("Image URL:");
    if (url) editor?.chain().focus().setImage({ src: url }).run();
  }, [editor]);
  if (!editor) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-gold/20 rounded-xl overflow-hidden bg-charcoal", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-0.5 px-3 py-2 border-b border-gold/10 bg-black/20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarButton, { onClick: () => editor.chain().focus().toggleBold().run(), active: editor.isActive("bold"), title: "Bold (⌘B)", children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "B" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarButton, { onClick: () => editor.chain().focus().toggleItalic().run(), active: editor.isActive("italic"), title: "Italic (⌘I)", children: /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "I" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarButton, { onClick: () => editor.chain().focus().toggleUnderline().run(), active: editor.isActive("underline"), title: "Underline (⌘U)", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { textDecoration: "underline" }, children: "U" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarButton, { onClick: () => editor.chain().focus().toggleStrike().run(), active: editor.isActive("strike"), title: "Strikethrough", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { textDecoration: "line-through" }, children: "S" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-px h-5 bg-ivory/10 mx-1" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarButton, { onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(), active: editor.isActive("heading", { level: 2 }), title: "Heading 2", children: "H2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarButton, { onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(), active: editor.isActive("heading", { level: 3 }), title: "Heading 3", children: "H3" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-px h-5 bg-ivory/10 mx-1" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarButton, { onClick: () => editor.chain().focus().toggleBulletList().run(), active: editor.isActive("bulletList"), title: "Bullet List", children: "• List" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarButton, { onClick: () => editor.chain().focus().toggleOrderedList().run(), active: editor.isActive("orderedList"), title: "Numbered List", children: "1. List" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-px h-5 bg-ivory/10 mx-1" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarButton, { onClick: () => editor.chain().focus().toggleBlockquote().run(), active: editor.isActive("blockquote"), title: "Quote", children: '" "' }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarButton, { onClick: () => editor.chain().focus().toggleCode().run(), active: editor.isActive("code"), title: "Inline Code", children: "</>" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-px h-5 bg-ivory/10 mx-1" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarButton, { onClick: () => editor.chain().focus().setTextAlign("left").run(), active: editor.isActive({ textAlign: "left" }), title: "Align Left", children: "≡L" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarButton, { onClick: () => editor.chain().focus().setTextAlign("center").run(), active: editor.isActive({ textAlign: "center" }), title: "Center", children: "≡C" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-px h-5 bg-ivory/10 mx-1" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarButton, { onClick: addLink, active: editor.isActive("link"), title: "Add Link", children: "🔗 Link" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarButton, { onClick: addImage, title: "Add Image", children: "🖼 Image" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-px h-5 bg-ivory/10 mx-1" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarButton, { onClick: () => editor.chain().focus().undo().run(), title: "Undo (⌘Z)", children: "↩ Undo" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarButton, { onClick: () => editor.chain().focus().redo().run(), title: "Redo", children: "↪ Redo" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-auto text-xs text-ivory/30 pr-1", children: [
        editor.storage.characterCount.words(),
        " words"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EditorContent, { editor }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        .prose h2 { font-size: 1.4rem; font-weight: 700; margin: 1.5rem 0 0.75rem; color: #FAF6F0; }
        .prose h3 { font-size: 1.15rem; font-weight: 600; margin: 1.25rem 0 0.5rem; color: #FAF6F0; }
        .prose p { margin-bottom: 0.9rem; line-height: 1.75; color: rgba(250,246,240,0.8); }
        .prose ul, .prose ol { padding-left: 1.5rem; margin-bottom: 0.9rem; }
        .prose li { margin-bottom: 0.3rem; color: rgba(250,246,240,0.8); }
        .prose blockquote { border-left: 3px solid #C9A84C; padding-left: 1rem; margin: 1rem 0; color: rgba(250,246,240,0.6); font-style: italic; }
        .prose code { background: rgba(201,168,76,0.15); padding: 0.1rem 0.4rem; border-radius: 0.25rem; font-size: 0.85em; }
        .prose strong { color: #FAF6F0; }
        .prose a { color: #C9A84C; text-decoration: underline; }
      ` })
  ] });
}
export {
  RichEditor as R
};
