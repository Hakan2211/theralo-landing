import { useEffect, useRef, useState } from 'react'
import { DOWNLOAD_URL } from '@/lib/site'
import { WinMark } from './win-mark'

export const NAV = [
  { href: '#ablauf', label: 'Ablauf' },
  { href: '#lotse', label: 'Bericht-Lotse' },
  { href: '#schweigepflicht', label: 'Schweigepflicht' },
  { href: '#preise', label: 'Preise' },
  { href: '#fragen', label: 'Fragen' },
]

export function SiteNav() {
  const [open, setOpen] = useState(false)
  const btn = useRef<HTMLButtonElement>(null)
  const sheet = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    sheet.current?.querySelector<HTMLAnchorElement>('a')?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        btn.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <header className="bar">
        <a href="#top" className="bar-mark" aria-label="Theralo, zum Seitenanfang">
          Theralo
        </a>
        <nav className="bar-tab" aria-label="Hauptmenü">
          {NAV.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
        </nav>
        <div className="bar-end">
          <a className="btn" href={DOWNLOAD_URL}>
            <WinMark />
            Herunterladen
          </a>
          <button
            ref={btn}
            type="button"
            className="menu-btn"
            aria-expanded={open}
            aria-controls="menu-sheet"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? 'Schließen' : 'Menü'}
          </button>
        </div>
      </header>
      <div
        id="menu-sheet"
        ref={sheet}
        className="sheet on-dark"
        data-open={open}
        inert={!open}
        aria-hidden={!open}
      >
        <nav aria-label="Menü">
          <ul>
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} onClick={() => setOpen(false)}>
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a className="btn btn-accent" href={DOWNLOAD_URL} onClick={() => setOpen(false)}>
          <WinMark />
          Für Windows herunterladen
        </a>
      </div>
    </>
  )
}
