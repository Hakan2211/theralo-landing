import { cn } from '@/lib/utils'

/** A real Theralo screenshot (shared/screens), 1280 × 800 CSS px, served as WebP at 1× and 2×. */
export function Shot({
  name,
  alt,
  sizes = '(min-width: 1280px) 1152px, 100vw',
  eager = false,
  className,
}: {
  name: string
  alt: string
  sizes?: string
  eager?: boolean
  className?: string
}) {
  return (
    <img
      src={`/screens/${name}@1x.webp`}
      srcSet={`/screens/${name}@1x.webp 1280w, /screens/${name}.webp 2560w`}
      sizes={sizes}
      alt={alt}
      width={2560}
      height={1600}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      className={cn('block h-auto w-full', className)}
    />
  )
}
