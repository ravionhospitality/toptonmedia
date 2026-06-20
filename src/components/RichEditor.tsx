import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Link from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'
import Placeholder from '@tiptap/extension-placeholder'
import Underline from '@tiptap/extension-underline'
import TextAlign from '@tiptap/extension-text-align'
import CharacterCount from '@tiptap/extension-character-count'
import { useEffect, useCallback } from 'react'

interface RichEditorProps {
  value: string
  onChange: (html: string) => void
  placeholder?: string
  minHeight?: number
}

function ToolbarButton({
  onClick,
  active,
  title,
  children,
}: {
  onClick: () => void
  active?: boolean
  title: string
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onMouseDown={e => { e.preventDefault(); onClick() }}
      title={title}
      className={`px-2.5 py-1.5 rounded text-sm font-medium transition-colors ${
        active
          ? 'bg-gold text-charcoal'
          : 'text-ivory/70 hover:text-ivory hover:bg-ivory/10'
      }`}
    >
      {children}
    </button>
  )
}

export function RichEditor({ value, onChange, placeholder = 'Start writing...', minHeight = 400 }: RichEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      CharacterCount,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: { class: 'text-gold underline' },
      }),
      Image.configure({
        HTMLAttributes: { class: 'rounded-xl max-w-full my-4' },
      }),
      Placeholder.configure({
        placeholder,
        emptyEditorClass: 'before:content-[attr(data-placeholder)] before:text-ivory/30 before:pointer-events-none before:float-left before:h-0',
      }),
    ],
    content: value,
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
    editorProps: {
      attributes: {
        class: 'prose prose-invert max-w-none focus:outline-none px-6 py-5',
        style: `min-height: ${minHeight}px`,
      },
    },
  })

  // Sync external value changes (e.g. when loading a post for editing)
  useEffect(() => {
    if (!editor) return
    if (editor.getHTML() !== value) {
      editor.commands.setContent(value || '')
    }
  }, [value, editor])

  const addLink = useCallback(() => {
    const url = window.prompt('URL:')
    if (!url) return
    if (editor?.state.selection.empty) {
      editor.chain().focus().setLink({ href: url }).run()
    } else {
      editor?.chain().focus().toggleLink({ href: url }).run()
    }
  }, [editor])

  const addImage = useCallback(() => {
    const url = window.prompt('Image URL:')
    if (url) editor?.chain().focus().setImage({ src: url }).run()
  }, [editor])

  if (!editor) return null

  return (
    <div className="border border-gold/20 rounded-xl overflow-hidden bg-charcoal">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-0.5 px-3 py-2 border-b border-gold/10 bg-black/20">
        {/* Text style */}
        <ToolbarButton onClick={() => editor.chain().focus().toggleBold().run()} active={editor.isActive('bold')} title="Bold (⌘B)">
          <strong>B</strong>
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleItalic().run()} active={editor.isActive('italic')} title="Italic (⌘I)">
          <em>I</em>
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleUnderline().run()} active={editor.isActive('underline')} title="Underline (⌘U)">
          <span style={{ textDecoration: 'underline' }}>U</span>
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleStrike().run()} active={editor.isActive('strike')} title="Strikethrough">
          <span style={{ textDecoration: 'line-through' }}>S</span>
        </ToolbarButton>

        <span className="w-px h-5 bg-ivory/10 mx-1" />

        {/* Headings */}
        <ToolbarButton onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} active={editor.isActive('heading', { level: 2 })} title="Heading 2">
          H2
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} active={editor.isActive('heading', { level: 3 })} title="Heading 3">
          H3
        </ToolbarButton>

        <span className="w-px h-5 bg-ivory/10 mx-1" />

        {/* Lists */}
        <ToolbarButton onClick={() => editor.chain().focus().toggleBulletList().run()} active={editor.isActive('bulletList')} title="Bullet List">
          • List
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleOrderedList().run()} active={editor.isActive('orderedList')} title="Numbered List">
          1. List
        </ToolbarButton>

        <span className="w-px h-5 bg-ivory/10 mx-1" />

        {/* Quote & code */}
        <ToolbarButton onClick={() => editor.chain().focus().toggleBlockquote().run()} active={editor.isActive('blockquote')} title="Quote">
          " "
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleCode().run()} active={editor.isActive('code')} title="Inline Code">
          {'</>'}
        </ToolbarButton>

        <span className="w-px h-5 bg-ivory/10 mx-1" />

        {/* Alignment */}
        <ToolbarButton onClick={() => editor.chain().focus().setTextAlign('left').run()} active={editor.isActive({ textAlign: 'left' })} title="Align Left">
          ≡L
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().setTextAlign('center').run()} active={editor.isActive({ textAlign: 'center' })} title="Center">
          ≡C
        </ToolbarButton>

        <span className="w-px h-5 bg-ivory/10 mx-1" />

        {/* Link & Image */}
        <ToolbarButton onClick={addLink} active={editor.isActive('link')} title="Add Link">
          🔗 Link
        </ToolbarButton>
        <ToolbarButton onClick={addImage} title="Add Image">
          🖼 Image
        </ToolbarButton>

        <span className="w-px h-5 bg-ivory/10 mx-1" />

        {/* Undo/Redo */}
        <ToolbarButton onClick={() => editor.chain().focus().undo().run()} title="Undo (⌘Z)">
          ↩ Undo
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().redo().run()} title="Redo">
          ↪ Redo
        </ToolbarButton>

        <span className="ml-auto text-xs text-ivory/30 pr-1">
          {editor.storage.characterCount.words()} words
        </span>
      </div>

      {/* Editor area */}
      <EditorContent editor={editor} />

      <style>{`
        .prose h2 { font-size: 1.4rem; font-weight: 700; margin: 1.5rem 0 0.75rem; color: #FAF6F0; }
        .prose h3 { font-size: 1.15rem; font-weight: 600; margin: 1.25rem 0 0.5rem; color: #FAF6F0; }
        .prose p { margin-bottom: 0.9rem; line-height: 1.75; color: rgba(250,246,240,0.8); }
        .prose ul, .prose ol { padding-left: 1.5rem; margin-bottom: 0.9rem; }
        .prose li { margin-bottom: 0.3rem; color: rgba(250,246,240,0.8); }
        .prose blockquote { border-left: 3px solid #C9A84C; padding-left: 1rem; margin: 1rem 0; color: rgba(250,246,240,0.6); font-style: italic; }
        .prose code { background: rgba(201,168,76,0.15); padding: 0.1rem 0.4rem; border-radius: 0.25rem; font-size: 0.85em; }
        .prose strong { color: #FAF6F0; }
        .prose a { color: #C9A84C; text-decoration: underline; }
      `}</style>
    </div>
  )
}
