import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('mx-auto w-full max-w-6xl px-5 sm:px-8', className)}>{children}</div>
}

/** Every section opens the same way: eyebrow, heading, one sentence. */
export function Section({
  id,
  eyebrow,
  title,
  lead,
  center = false,
  className,
  children,
}: {
  id?: string
  eyebrow?: string
  title: ReactNode
  lead?: ReactNode
  center?: boolean
  className?: string
  children?: ReactNode
}) {
  const hid = id ? `${id}-h` : undefined
  return (
    <section id={id} aria-labelledby={hid} className={cn('py-20 md:py-28', className)}>
      <Container>
        <header className={cn('max-w-2xl rise', center && 'mx-auto text-center')}>
          {eyebrow ? <p className="t-eyebrow">{eyebrow}</p> : null}
          <h2 id={hid} className="t-h2 mt-3">
            {title}
          </h2>
          {lead ? <p className="t-lead mt-4">{lead}</p> : null}
        </header>
        {children}
      </Container>
    </section>
  )
}
