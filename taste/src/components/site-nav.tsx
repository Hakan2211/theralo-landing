import { useEffect, useRef, useState } from 'react'
import { DOWNLOAD_URL } from '@/lib/site'
import { WindowsMark } from './hero'

export const NAV = [
  { label: 'Ablauf', href: '#ablauf' },
  { label: 'Bericht-Lotse', href: '#lotse' },
  { label: 'Schweigepflicht', href: '#schweigepflicht' },
  { label: 'Preise', href: '#preise' },
  { label: 'Fragen', href: '#fragen' },
]

/** The menu bar: sticky on the dark ground. Phones get a sheet under the bar. */
export function SiteNav() {
  const [open, setOpen] = useState(false)
  const toggle = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      setOpen(false)
      toggle.current?.focus()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <nav className="sticky top-0 z-50 bg-night text-night-ink" aria-label="Hauptnavigation">
      <div className="frame flex h-16 items-center justify-between gap-6">
        <a href="/" className="font-serif text-lead leading-none" onClick={() => setOpen(false)}>
          Theralo
        </a>

        <ul className="hidden items-center gap-7 text-small lg:flex">
          {NAV.map((n) => (
            <li key={n.href}>
              <a href={n.href} className="text-night-muted transition-colors duration-150 hover:text-night-ink">
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href={DOWNLOAD_URL} className="btn btn-accent hidden px-4 py-2 text-small sm:inline-flex" style={{ minHeight: 40 }}>
            <WindowsMark /> Herunterladen
          </a>
          <button
            ref={toggle}
            type="button"
            aria-expanded={open}
            aria-controls="nav-sheet"
            onClick={() => setOpen((o) => !o)}
            className="flex h-10 items-center px-2 text-small font-semibold transition-transform duration-150 active:scale-[0.97] lg:hidden"
          >
            {open ? 'Schließen' : 'Menü'}
          </button>
        </div>
      </div>

      {/* Sheet: slides down from under the bar; reduced motion only fades. */}
      <div
        id="nav-sheet"
        className={
          'nav-sheet absolute inset-x-0 top-16 bg-night lg:hidden ' + (open ? 'is-open' : 'pointer-events-none')
        }
        inert={!open}
      >
        <ul className="frame pt-2 pb-8">
          {NAV.map((n) => (
            <li key={n.href}>
              <a href={n.href} onClick={() => setOpen(false)} className="block py-3 font-serif text-head leading-tight">
                {n.label}
              </a>
            </li>
          ))}
          <li className="mt-6">
            <a href={DOWNLOAD_URL} className="btn btn-accent w-full justify-center">
              <WindowsMark /> Für Windows herunterladen
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
