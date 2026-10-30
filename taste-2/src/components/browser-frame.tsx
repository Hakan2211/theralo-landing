import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

/** A quiet desktop window around a screenshot, so it reads as the app and not as a picture. */
export function BrowserFrame({ children, title = 'Theralo', className }: { children: ReactNode; title?: string; className?: string }) {
  return (
    <div className={cn('overflow-hidden rounded-xl border bg-card shadow-lg', className)}>
      <div className="flex h-9 items-center gap-2 border-b bg-sidebar px-4" aria-hidden="true">
        <span className="size-2.5 rounded-full bg-input" />
        <span className="size-2.5 rounded-full bg-input" />
        <span className="size-2.5 rounded-full bg-input" />
        <span className="mx-auto pr-12 font-serif text-sm text-muted-foreground">{title}</span>
      </div>
      {children}
    </div>
  )
}
