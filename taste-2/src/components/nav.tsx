import { useEffect, useRef, useState } from 'react'
import { DOWNLOAD_URL } from '@/lib/site'
import { WindowsMark } from './icons'

export const NAV = [
  { label: 'So geht’s', href: '/#ablauf' },
  { label: 'Bericht-Lotse', href: '/#lotse' },
  { label: 'Schweigepflicht', href: '/#schweigepflicht' },
  { label: 'Preise', href: '/#preise' },
  { label: 'Fragen', href: '/#fragen' },
]

/** A plain bar: wordmark, five links, the download. Phones get a sheet under the bar. */
export function Nav() {
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
    <nav className="nav" aria-label="Hauptnavigation">
      <div className="frame nav-row">
        <a href="/" className="serif t-lead" style={{ lineHeight: 1 }} onClick={() => setOpen(false)}>
          Theralo
        </a>
        <ul className="nav-links t-small">
          {NAV.map((n) => (
            <li key={n.href}>
              <a href={n.href}>{n.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a href={DOWNLOAD_URL} className="btn btn-sm hidden sm:inline-flex">
            <WindowsMark size={14} /> Herunterladen
          </a>
          <button
            ref={toggle}
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="nav-sheet"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? 'Schließen' : 'Menü'}
          </button>
        </div>
      </div>

      <div id="nav-sheet" className={'nav-sheet' + (open ? ' is-open' : '')} inert={!open}>
        <ul className="frame">
          {NAV.map((n) => (
            <li key={n.href}>
              <a href={n.href} onClick={() => setOpen(false)} className="serif t-head block py-2">
                {n.label}
              </a>
            </li>
          ))}
          <li className="mt-6">
            <a href={DOWNLOAD_URL} className="btn w-full">
              <WindowsMark /> Für Windows herunterladen
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
