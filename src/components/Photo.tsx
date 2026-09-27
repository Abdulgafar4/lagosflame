type PhotoProps = {
  src: string
  alt: string
  washed?: boolean
  radius?: string
  className?: string
}

export function Photo({ src, alt, washed = true, radius, className = '' }: PhotoProps) {
  return (
    <span className={`photo ${washed ? 'is-washed' : ''} ${className}`.trim()} style={radius ? { borderRadius: radius, overflow: 'hidden' } : undefined}>
      <img src={src} alt={alt} loading="lazy" />
    </span>
  )
}
