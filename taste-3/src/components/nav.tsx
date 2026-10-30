import { useEffect, useRef, useState } from 'react'
import { DOWNLOAD_URL } from '@/lib/site'
import { NAV, WindowsMark } from './ui'

/** The menu bar: wordmark at the margin, links from the axis, the download at the right margin. */
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
    <nav className="bar" aria-label="Hauptnavigation">
      <div className="row bar-in">
        <a href="/" className="wordmark" onClick={() => setOpen(false)}>
          Theralo
        </a>
        <div className="bar-links">
          <ul>
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="navlink">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <a href={DOWNLOAD_URL} className="btn">
              <WindowsMark /> Herunterladen
            </a>
            <button
              ref={toggle}
              type="button"
              className="menu-btn"
              aria-expanded={open}
              aria-controls="menu-sheet"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? 'Schließen' : 'Menü'}
            </button>
          </div>
        </div>
      </div>

      <div id="menu-sheet" className={'sheet' + (open ? ' open' : '')} inert={!open}>
        <ul>
          {NAV.map((n) => (
            <li key={n.href}>
              <a href={n.href} className="sheet-link" onClick={() => setOpen(false)}>
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <a href={DOWNLOAD_URL} className="btn" style={{ marginTop: 24, width: '100%' }}>
          <WindowsMark /> Für Windows herunterladen
        </a>
      </div>
    </nav>
  )
}
