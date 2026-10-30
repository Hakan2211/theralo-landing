import type { CSSProperties } from 'react'

export const NAV = [
  { label: 'Bericht-Lotse', href: '#lotse' },
  { label: 'Ablauf', href: '#ablauf' },
  { label: 'Schweigepflicht', href: '#schweigepflicht' },
  { label: 'Preise', href: '#preise' },
  { label: 'Fragen', href: '#fragen' },
]

export function WindowsMark() {
  return (
    <svg className="win" viewBox="0 0 16 16" aria-hidden="true" fill="currentColor">
      <path d="M0 2.2 6.5 1.3v6.3H0zM7.3 1.2 16 0v7.6H7.3zM0 8.4h6.5v6.3L0 13.8zM7.3 8.4H16V16l-8.7-1.2z" />
    </svg>
  )
}

/**
 * A crop of one real app screenshot (2560 × 1600, 2× pixels). `x`, `y` and `w` are in image pixels:
 * the region starting at x/y and `w` pixels wide fills the frame's width.
 */
export function Crop({
  src,
  x,
  y,
  w,
  alt,
  className = '',
  eager = false,
  style,
}: {
  src: string
  x: number
  y: number
  w: number
  alt: string
  className?: string
  eager?: boolean
  style?: CSSProperties
}) {
  const IW = 2560
  const IH = 1600
  return (
    <div className={'crop ' + className} style={style}>
      <div className="drift">
        <img
          src={src}
          alt={alt}
          width={IW}
          height={IH}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          style={{ width: `${(IW / w) * 100}%`, transform: `translate(${(-x / IW) * 100}%, ${(-y / IH) * 100}%)` }}
        />
      </div>
    </div>
  )
}
