import { Link } from '@tanstack/react-router'
import { DOWNLOAD_URL, RELEASES_URL, REPO_URL, VERSION } from '@/lib/site'

// The wordmark built from blocks: each letter knocked out of its own rectangle, uneven heights.
const BLOCKS = [
  { ch: 't', h: 0.78, bg: 'var(--color-p1)' },
  { ch: 'h', h: 1, bg: 'var(--color-p2)' },
  { ch: 'e', h: 0.64, bg: 'var(--color-p3)' },
  { ch: 'r', h: 0.86, bg: 'var(--color-p4)' },
  { ch: 'a', h: 0.7, bg: 'var(--color-p5)' },
]

export function Footer() {
  return (
    <footer className="mt-[clamp(96px,10vw,160px)] bg-p6 pt-[clamp(32px,4vw,56px)] pb-8">
      <div className="frame">
        <svg viewBox="0 0 1000 300" className="block h-auto w-full" role="img" aria-label="thera">
          {BLOCKS.map((b, i) => {
            const h = 300 * b.h
            const x = i * 200 + (i ? 2 : 0)
            return (
              <g key={b.ch}>
                <rect x={x} y={300 - h} width={i === BLOCKS.length - 1 ? 200 - 2 : 200 - (i ? 4 : 2)} height={h} fill={b.bg} />
                <text x={x + 98} y={300 - h / 2 + 52} textAnchor="middle" fontFamily="Libertinus Serif, Georgia, serif" fontSize="170" fill="var(--color-p6)">
                  {b.ch}
                </text>
              </g>
            )
          })}
        </svg>

        <div className="mt-14 grid grid-cols-2 gap-8 text-small md:grid-cols-12">
          <nav className="md:col-span-2" aria-label="Seite">
            <ul className="space-y-2">
              <li><a href="#ablauf" className="hover:underline">Ablauf</a></li>
              <li><a href="#lotse" className="hover:underline">Bericht-Lotse</a></li>
              <li><a href="#schweigepflicht" className="hover:underline">Schweigepflicht</a></li>
              <li><a href="#fragen" className="hover:underline">Fragen</a></li>
            </ul>
          </nav>
          <nav className="md:col-span-2" aria-label="Download">
            <ul className="space-y-2">
              <li><a href={DOWNLOAD_URL} className="hover:underline">Für Windows</a></li>
              <li><a href={RELEASES_URL} className="hover:underline">Alle Versionen</a></li>
              <li><a href={REPO_URL} className="hover:underline">Quellcode</a></li>
            </ul>
          </nav>
          <nav className="md:col-span-2" aria-label="Rechtliches">
            <ul className="space-y-2">
              <li><Link to="/impressum" className="hover:underline">Impressum</Link></li>
              <li><Link to="/datenschutz" className="hover:underline">Datenschutz</Link></li>
            </ul>
          </nav>
          <p className="col-span-2 max-w-[44ch] leading-relaxed md:col-span-4 md:col-start-9">
            thera ist ein Dokumentationswerkzeug. Fachliche Verantwortung und Unterschrift liegen bei der Therapeutin bzw.
            dem Therapeuten.
          </p>
        </div>

        <div className="mt-12 flex items-center justify-between gap-4 text-small">
          <span>thera · Version {VERSION}</span>
          <a href={DOWNLOAD_URL} className="btn btn-ink min-h-10 px-4 py-2 text-small">
            Herunterladen
          </a>
        </div>
      </div>
    </footer>
  )
}
