import { CONTACT_EMAIL, DOWNLOAD_SIZE, DOWNLOAD_URL, MAILTO, VERSION } from '@/lib/site'
import { WindowsMark } from './icons'

const PARTS = [
  {
    name: 'Die Software, einmalig.',
    text: 'Theralo für Ihre Praxis, installiert auf Ihren Computern. Die Daten bleiben bei Ihnen.',
  },
  {
    name: 'Monatlich: KI und Instandhaltung.',
    text: 'Die KI-Nutzung für Notizen, Entwürfe und den Gutachter-Check, dazu Updates, Anpassungen an neue KBV-Vorgaben und Unterstützung, wenn etwas hakt.',
  },
  {
    name: 'Individualisierung.',
    text: 'Neue Funktionen und Anpassungen für Ihre Abläufe, auf Wunsch für Ihre Praxis gebaut.',
  },
]

/** Two fields meeting at a hard edge: the request on moss, what the price is made of on sand. */
export function Preise() {
  return (
    <section id="preise" className="prices" aria-labelledby="preise-h">
      <div className="field-moss on-field">
        <h2 id="preise-h" className="t-display" data-rise>
          Preisgestaltung für Praxen
        </h2>
        <p className="t-lead mt-6 max-w-[26ch]" data-rise style={{ '--i': 1 } as never}>
          Für Praxen, MVZ und Unternehmen, abgestimmt auf Ihre Praxis.
        </p>
        <p className="mt-6 max-w-[40ch]" data-rise style={{ '--i': 2 } as never}>
          Den Preis stimmen wir auf Ihre Praxis ab: wie viele Therapeut:innen, welche KI, welche Anpassungen.
        </p>
        <div className="mt-auto pt-16" data-rise style={{ '--i': 3 } as never}>
          <p className="max-w-[34ch]">Kontaktieren Sie uns für Preisgestaltung und Kostenvoranschlag.</p>
          <a href={MAILTO} className="btn btn-paper mt-6">
            Angebot anfragen
          </a>
          <p className="mt-4">
            <a href={`mailto:${CONTACT_EMAIL}`} className="link">
              {CONTACT_EMAIL}
            </a>
          </p>
          <p className="t-small muted mt-2">Die E-Mail-Adresse ist vorläufig, bis das Postfach eingerichtet ist.</p>
        </div>
      </div>

      <div className="field-sand">
        <p className="t-lead max-w-[30ch]" data-rise>
          Der Preis setzt sich aus drei Teilen zusammen.
        </p>
        <ul className="mt-12 grid gap-12 md:mt-16">
          {PARTS.map((p, i) => (
            <li key={p.name} data-rise style={{ '--i': i + 1 } as never}>
              <h3 className="t-head">{p.name}</h3>
              <p className="mt-3 max-w-[48ch]">{p.text}</p>
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap items-end justify-between gap-6 pt-16" data-rise style={{ '--i': 4 } as never}>
          <p className="max-w-[36ch]">
            Erst ausprobieren? Laden Sie Theralo kostenlos herunter und testen Sie alles in der Demo-Praxis.
          </p>
          <div>
            <a href={DOWNLOAD_URL} className="btn">
              <WindowsMark /> Kostenlos testen
            </a>
            <p className="t-small muted mt-2">
              Version {VERSION} · Windows 10/11 · {DOWNLOAD_SIZE}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
