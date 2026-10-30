import { Link } from '@tanstack/react-router'
import { CONTACT_EMAIL, DOWNLOAD_SIZE, DOWNLOAD_URL, MAILTO, RELEASES_URL, REPO_URL, VERSION } from '@/lib/site'
import { NAV } from './site-nav'
import { WinMark } from './win-mark'

const LETTERS = [
  { l: 'T', c: 'var(--person)', h: 100 },
  { l: 'h', c: 'var(--ort)', h: 74 },
  { l: 'e', c: 'var(--datum)', h: 88 },
  { l: 'r', c: 'var(--pat)', h: 62 },
  { l: 'a', c: 'var(--person)', h: 92 },
  { l: 'l', c: 'var(--ort)', h: 70 },
  { l: 'o', c: 'var(--datum)', h: 84 },
]

export function Schluss() {
  return (
    <section className="schluss on-dark" aria-labelledby="schluss-title">
      <div className="grid">
        <h2 id="schluss-title" className="t-display lines">
          <span className="line">
            <span data-rise>Unterschreiben</span>
          </span>
          <span className="line">
            <span data-rise style={{ ['--d' as string]: 1 }}>
              tun nur Sie.
            </span>
          </span>
        </h2>
      </div>
      <div className="grid schluss-foot">
        <p data-rise style={{ ['--d' as string]: 2 }}>
          Theralo schlägt vor, mit Quelle für jeden Satz. Laden Sie es kostenlos herunter und probieren Sie alles in der
          Demo-Praxis aus.
        </p>
        <a className="btn btn-accent" href={DOWNLOAD_URL} data-rise style={{ ['--d' as string]: 3 }}>
          <WinMark />
          Für Windows herunterladen
        </a>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="foot on-dark">
      <div className="blocks" role="img" aria-label="Theralo" data-rise>
        {LETTERS.map((x, i) => (
          <span
            key={i}
            className="block"
            aria-hidden="true"
            style={{ backgroundColor: x.c, height: `${x.h}%`, ['--d' as string]: i }}
          >
            {x.l}
          </span>
        ))}
      </div>
      <div className="grid foot-cols">
        <nav className="foot-col" aria-label="Seite">
          <h3>Seite</h3>
          <ul>
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href}>{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="foot-col">
          <h3>Theralo</h3>
          <ul>
            <li>
              <a href={DOWNLOAD_URL}>Herunterladen ({DOWNLOAD_SIZE})</a>
            </li>
            <li>
              <a href={RELEASES_URL}>Alle Versionen</a>
            </li>
            <li>
              <a href={REPO_URL}>Quellcode auf GitHub</a>
            </li>
            <li>
              <a href="#video">Video (5 Min.)</a>
            </li>
          </ul>
        </div>
        <div className="foot-col">
          <h3>Rechtliches</h3>
          <ul>
            <li>
              <Link to="/impressum">Impressum</Link>
            </li>
            <li>
              <Link to="/datenschutz">Datenschutzerklärung</Link>
            </li>
          </ul>
        </div>
        <div className="foot-col">
          <h3>Fotos</h3>
          <ul className="t-small">
            <li>Logan Adermatt, Breather, Padurariu Alexandru (Unsplash-Lizenz). Bildschirme: Demo-Praxis, erfundene Personen.</li>
          </ul>
        </div>
        <div className="foot-contact t-small">
          <a className="link" href={MAILTO}>
            {CONTACT_EMAIL}
          </a>
          <p>Theralo · Version {VERSION} · Windows 10/11, 64 Bit</p>
          <p>
            Theralo ist ein Dokumentationswerkzeug. Fachliche Verantwortung und Unterschrift liegen bei der Therapeutin bzw.
            dem Therapeuten.
          </p>
        </div>
      </div>
      <div className="grid foot-last">
        <p className="t-small">© 2026 Theralo</p>
        <a className="btn btn-small btn-accent" href={DOWNLOAD_URL}>
          <WinMark />
          Herunterladen
        </a>
      </div>
    </footer>
  )
}
