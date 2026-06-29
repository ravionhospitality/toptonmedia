import { CSSProperties, ImgHTMLAttributes } from 'react'

interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
  quality?: number
  className?: string
}

export function OptimizedImage({
  src,
  alt,
  width = 1200,
  height = 630,
  priority = false,
  quality = 80,
  className = '',
  style,
  ...props
}: OptimizedImageProps) {
  
  const isExternal = src.startsWith('http')
  
  const optimizeUrl = (url: string, w: number, q: number) => {
    if (url.includes('imgur.com')) {
      return `${url}?w=${w}&q=${q}&auto=format&fit=max`
    }
    if (url.includes('unsplash.com')) {
      return `${url}?w=${w}&q=${q}&auto=format&fit=max`
    }
    if (url.includes('supabase.co')) {
      return `${url}?width=${w}&quality=${q}`
    }
    return url
  }

  const srcSet = isExternal
    ? [
        `${optimizeUrl(src, 640, quality)} 640w`,
        `${optimizeUrl(src, 1024, quality)} 1024w`,
        `${optimizeUrl(src, 1280, quality)} 1280w`,
        `${optimizeUrl(src, 1920, quality)} 1920w`,
      ].join(', ')
    : undefined

  const sizes =
    '(max-width: 640px) 100vw, ' +
    '(max-width: 1024px) 90vw, ' +
    '(max-width: 1280px) 80vw, ' +
    '(max-width: 1920px) 75vw, ' +
    '1200px'

  const containerStyle: CSSProperties = {
    position: 'relative',
    aspectRatio: `${width} / ${height}`,
    ...style,
  }

  return (
    <div style={containerStyle} className={className}>
      <img
        src={isExternal ? optimizeUrl(src, width, quality) : src}
        alt={alt}
        srcSet={srcSet}
        sizes={sizes}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        {...props}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </div>
  )
}
