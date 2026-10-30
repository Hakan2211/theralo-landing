import { CONTACT_EMAIL, DOWNLOAD_SIZE, DOWNLOAD_URL, RELEASES_URL, REPO_URL, VERSION } from '@/lib/site'
import { WindowsMark } from './icons'
import { NAV } from './nav'

/** The last photograph: the evening a report used to take. Text in the calm half. */
export function Abend() {
  return (
    <section className="last on-dark" data-rise-photo aria-labelledby="abend-h">
      <div className="last-photo">
        <img
          src="/photos/abend.jpg"
          alt="Ein Holzstuhl vor einem Fenster mit Vorhang in der Abenddämmerung"
          width={2400}
          height={1350}
          loading="lazy"
        />
      </div>
      <div className="last-text">
        <h2 id="abend-h" className="t-display max-w-[14ch]" data-rise>
          Weniger Abende am Bericht.
        </h2>
        <p className="mt-6 max-w-[42ch]" data-rise style={{ '--i': 1 } as never}>
          Laden Sie Theralo herunter und probieren Sie alles in der Demo-Praxis aus, mit erfundenen Beispieldaten und
          getrennt von Ihren echten Daten.
        </p>
        <div className="mt-8" data-rise style={{ '--i': 2 } as never}>
          <a href={DOWNLOAD_URL} className="btn btn-paper">
            <WindowsMark /> Für Windows herunterladen
          </a>
          <p className="t-small mt-3" style={{ color: '#e6e1d6' }}>
            Version {VERSION} · Windows 10/11 · {DOWNLOAD_SIZE}
          </p>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="foot on-dark">
      <div className="foot-photo">
        <img
          src="/photos/tasse.jpg"
          alt="Eine grüne Tasse auf einem Nachttisch am Morgen"
          width={1600}
          height={1000}
          loading="lazy"
        />
      </div>
      <div className="foot-menu">
        <p className="serif t-lead">Theralo</p>
        <ul className="foot-links mt-10">
          {NAV.map((n) => (
            <li key={n.href}>
              <a href={n.href} className="serif t-display">
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          <div className="t-small">
            <p className="medium">Kontakt</p>
            <p className="mt-2">
              <a href={`mailto:${CONTACT_EMAIL}`} className="link">
                {CONTACT_EMAIL}
              </a>
            </p>
            <p className="mt-1">
              <a href={DOWNLOAD_URL} className="link">
                Für Windows herunterladen
              </a>
            </p>
          </div>
          <div className="t-small">
            <p className="medium">Theralo · Version {VERSION}</p>
            <p className="mt-2">
              <a href={REPO_URL} className="link">
                Quellcode auf GitHub
              </a>
            </p>
            <p className="mt-1">
              <a href={RELEASES_URL} className="link">
                Alle Versionen
              </a>
            </p>
          </div>
        </div>
        <div className="t-small muted mt-auto pt-16">
          <p>
            Theralo ist ein Dokumentationswerkzeug. Fachliche Verantwortung und Unterschrift liegen bei der Therapeutin
            bzw. dem Therapeuten.
          </p>
          <p className="mt-3 flex flex-wrap gap-x-5 gap-y-1">
            <a href="/impressum" className="link">
              Impressum
            </a>
            <a href="/datenschutz" className="link">
              Datenschutzerklärung
            </a>
            <span>Fotos: Logan Adermatt, David Mao (Unsplash)</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
