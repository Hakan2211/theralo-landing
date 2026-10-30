import { DOWNLOAD_SIZE, DOWNLOAD_URL, VERSION } from '@/lib/site'
import { WinMark } from './win-mark'

/** The colour key of the page: each placeholder kind Theralo uses before an AI request has its own colour. */
const TILES = [
  { cls: 'm-person c-person', tag: '[PERSON_1]', was: 'statt „Anna“' },
  { cls: 'm-datum c-datum', tag: '[DATUM_1]', was: 'statt „12. Oktober“' },
  { cls: 'm-ort c-ort', tag: '[ORT_1]', was: 'statt „Köln“' },
  { cls: 'm-pat c-pat', tag: 'Pat.', was: 'statt „Frau Sommer“' },
]

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title">
      <div className="mosaic">
        <div className="cell m-shot">
          <img
            src="/screens/lotse.png"
            alt="Der Bericht-Lotse in Theralo: die Abschnitte des Berichts, ein KI-Entwurf Satz für Satz und die Frage „Woher kommt das?“"
            width={2560}
            height={1600}
            fetchPriority="high"
          />
        </div>
        {TILES.map((t) => (
          <div key={t.tag} className={`cell tile ${t.cls}`} aria-hidden="true">
            <b>{t.tag}</b>
            <span className="t-small">{t.was}</span>
          </div>
        ))}
        <div className="cell m-p1">
          <img className="photo" src="/photos/p311.jpg" alt="Ein Holzstuhl am Fenster mit Vorhang" width={900} height={800} />
        </div>
        <div className="cell m-p2">
          <img className="photo" src="/photos/p1068.jpg" alt="Ein Tisch mit einem Zweig in der Vase vor einer hellen Wand" width={900} height={800} />
        </div>
        <div className="cell m-p3">
          <img className="photo" src="/photos/p625.jpg" alt="Ein heller Raum mit Tisch und Stühlen vor großen Fenstern" width={900} height={800} />
        </div>
      </div>

      <div className="grid hero-body">
        <div className="hero-main">
          <h1 id="hero-title" className="t-display lines">
            <span className="line">
              <span data-line style={{ ['--i' as string]: 0 }}>
                Theralo
              </span>
            </span>
            <span className="line">
              <span data-line style={{ ['--i' as string]: 1 }}>
                schreibt mit.
              </span>
            </span>
          </h1>
          <div className="hero-after">
            <p className="hero-sub">
              Sitzungen aufnehmen, Notizen in Minuten statt Stunden und Berichte an den Gutachter Schritt für Schritt, mit
              KI-Unterstützung. Ihre Daten bleiben verschlüsselt auf Ihrem Computer.
            </p>
            <div className="hero-actions">
              <a className="btn" href={DOWNLOAD_URL}>
                <WinMark />
                Für Windows herunterladen
              </a>
              <a className="textlink" href="#video">
                Video ansehen (5 Min.)
              </a>
            </div>
            <p className="hero-meta t-small muted">
              Version {VERSION} · Windows 10/11 · {DOWNLOAD_SIZE}
            </p>
          </div>
        </div>
        <div className="standfirst hero-after">
          <p className="t-lead">Dokumentation, die in der Praxis bleibt.</p>
          <ul className="hero-trust t-small">
            <li>
              <i className="c-person" aria-hidden="true" />
              Lokal verschlüsselt (AES-256)
            </li>
            <li>
              <i className="c-ort" aria-hidden="true" />
              Pseudonymisiert vor jeder KI-Anfrage
            </li>
            <li>
              <i className="c-datum" aria-hidden="true" />
              Diagnosen trägt nur die Therapeutin bzw. der Therapeut ein
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
