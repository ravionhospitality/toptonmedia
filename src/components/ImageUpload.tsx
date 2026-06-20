import { useRef, useState } from 'react'
import { supabase } from '../lib/supabase'

interface Props {
  value: string
  onChange: (url: string) => void
  label?: string
}

export function ImageUpload({ value, onChange, label = 'Hero Image' }: Props) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    setError('')
    setUploading(true)
    const ext = file.name.split('.').pop()
    const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`
    const { error: uploadErr } = await supabase.storage
      .from('blog-images')
      .upload(fileName, file, { upsert: true, contentType: file.type })
    if (uploadErr) { setError(uploadErr.message); setUploading(false); return }
    const { data } = supabase.storage.from('blog-images').getPublicUrl(fileName)
    onChange(data.publicUrl)
    setUploading(false)
  }

  return (
    <div>
      <label className="block text-sm font-medium text-ivory/80 mb-1.5">{label}</label>
      <div className="flex flex-col gap-2">
        {value && (
          <div className="relative w-full h-40 rounded-xl overflow-hidden border border-gold/20">
            <img src={value} alt="Preview" className="w-full h-full object-cover" />
            <button
              onClick={() => onChange('')}
              className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-lg hover:bg-red-900/80"
            >Remove</button>
          </div>
        )}
        <div className="flex gap-2 items-center">
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            disabled={uploading}
            className="px-4 py-2 rounded-xl border border-gold/30 text-gold text-sm hover:border-gold disabled:opacity-50 transition-colors"
          >
            {uploading ? 'Uploading…' : value ? 'Replace Image' : 'Upload Image'}
          </button>
          <span className="text-xs text-ivory/30">or paste a URL below</span>
        </div>
        <input
          type="text"
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder="https://..."
          className="admin-input"
        />
        <input ref={inputRef} type="file" accept="image/*" onChange={handleFile} className="hidden" />
        {error && <p className="text-xs text-red-400">{error}</p>}
      </div>
    </div>
  )
}
