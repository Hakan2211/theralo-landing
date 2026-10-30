import { Link } from '@tanstack/react-router'
import { CONTACT_EMAIL, MAILTO, RELEASES_URL, REPO_URL, VERSION } from '@/lib/site'
import { NAV } from './ui'

/** Columns above, the wordmark across the full width below. Uncovered as the page slides away. */
export function Footer() {
  return (
    <footer className="foot">
      <div className="foot-cols">
        <ul>
          <li>Theralo</li>
          <li>Version {VERSION}</li>
          <li>Windows 10/11, 64 Bit</li>
          <li>
            <a href={REPO_URL} className="link">
              Quellcode auf GitHub
            </a>
          </li>
          <li>
            <a href={RELEASES_URL} className="link">
              Alle Versionen
            </a>
          </li>
        </ul>
        <ul>
          <li>Auf dieser Seite</li>
          {NAV.map((n) => (
            <li key={n.href}>
              <a href={n.href} className="link">
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <ul>
          <li>Kontakt</li>
          <li>
            <a href={MAILTO} className="link">
              {CONTACT_EMAIL}
            </a>
          </li>
          <li>
            <a href={MAILTO} className="link">
              Angebot anfragen
            </a>
          </li>
        </ul>
        <ul>
          <li>Rechtliches</li>
          <li>
            <Link to="/impressum" className="link">
              Impressum
            </Link>
          </li>
          <li>
            <Link to="/datenschutz" className="link">
              Datenschutzerklärung
            </Link>
          </li>
        </ul>
      </div>
      <div />
      <div>
        <svg className="foot-mark" viewBox="0 0 1000 300" role="img" aria-label="Theralo">
          <text x="500" y="262" textAnchor="middle" textLength="1000" lengthAdjust="spacingAndGlyphs" fontFamily="'Imbue Variable', Georgia, serif" fontSize="340">
            THERALO
          </text>
        </svg>
        <p className="small muted foot-legal">
          Theralo ist ein Dokumentationswerkzeug. Fachliche Verantwortung und Unterschrift liegen bei der Therapeutin bzw.
          dem Therapeuten.
        </p>
      </div>
    </footer>
  )
}
