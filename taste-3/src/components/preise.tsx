import { CONTACT_EMAIL, DOWNLOAD_URL, MAILTO } from '@/lib/site'
import { WindowsMark } from './ui'

const PARTS = [
  {
    name: 'Die Software',
    when: 'einmalig',
    what: 'Theralo für Ihre Praxis, installiert auf Ihren Computern.',
    incl: 'Die Daten bleiben bei Ihnen.',
  },
  {
    name: 'KI und Instandhaltung',
    when: 'monatlich',
    what: 'Die KI-Nutzung für Notizen, Entwürfe und den Gutachter-Check.',
    incl: 'Updates, Anpassungen an neue KBV-Vorgaben und Unterstützung, wenn etwas hakt.',
  },
  {
    name: 'Individualisierung',
    when: 'auf Wunsch',
    what: 'Neue Funktionen und Anpassungen für Ihre Abläufe.',
    incl: 'Für Ihre Praxis gebaut.',
  },
]

const ROWS: { label: string; key: 'what' | 'incl' | 'price' }[] = [
  { label: 'Was es ist', key: 'what' },
  { label: 'Was dazugehört', key: 'incl' },
  { label: 'Preis', key: 'price' },
]

/** Three parts of the price compared in a large table; the figures come with the quote. */
export function Preise() {
  return (
    <section id="preise" className="section" aria-label="Preisgestaltung für Praxen" style={{ paddingInline: 'var(--m)' }}>
      <table className="price-table" data-rise>
        <colgroup>
          <col style={{ width: 'calc(var(--axis) - var(--m))' }} />
          <col />
          <col />
          <col />
        </colgroup>
        <thead>
          <tr>
            <th scope="col" style={{ paddingRight: 48 }}>
              <h2 id="preise-h" className="head">
                Preisgestaltung für Praxen
              </h2>
            </th>
            {PARTS.map((p) => (
              <th key={p.name} scope="col">
                <span className="plan-name" style={{ display: 'block' }}>
                  {p.name}
                </span>
                <span className="muted">{p.when}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ROWS.map((r) => (
            <tr key={r.key}>
              <th scope="row">{r.label}</th>
              {r.key === 'price' ? (
                <td colSpan={3}>Im Kostenvoranschlag, abgestimmt auf Ihre Praxis: Anzahl der Therapeut:innen, KI, Anpassungen.</td>
              ) : (
                PARTS.map((p) => <td key={p.name}>{p[r.key as 'what' | 'incl']}</td>)
              )}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Phone: each part as its own block. */}
      <div className="plans">
        <h2 className="head">Preisgestaltung für Praxen</h2>
        {PARTS.map((p) => (
          <dl key={p.name} className="plan" data-rise>
            <h3 className="plan-title">{p.name}</h3>
            <p className="muted">{p.when}</p>
            {ROWS.filter((r) => r.key !== 'price').map((r) => (
              <div key={r.key}>
                <dt>{r.label}</dt>
                <dd>{p[r.key as 'what' | 'incl']}</dd>
              </div>
            ))}
          </dl>
        ))}
      </div>

      <div className="row price-close" style={{ paddingInline: 0 }}>
        <div className="left">
          <p className="lead" data-rise>
            Theralo gibt es für Praxen, MVZ und Unternehmen. Den Preis stimmen wir auf Ihre Praxis ab: wie viele
            Therapeut:innen, welche KI, welche Anpassungen.
          </p>
        </div>
        <div>
          <p className="lead" data-rise>
            Kontaktieren Sie uns für Preisgestaltung und Kostenvoranschlag.
          </p>
          <div className="price-actions" style={{ marginTop: 24 }} data-rise>
            <a href={MAILTO} className="btn">
              Angebot anfragen
            </a>
            <a href={MAILTO} className="link">
              {CONTACT_EMAIL}
            </a>
            <a href={DOWNLOAD_URL} className="link" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <WindowsMark /> Kostenlos testen
            </a>
          </div>
          <p className="small muted" style={{ marginTop: 16 }} data-rise>
            Die E-Mail-Adresse ist vorläufig, bis das Postfach eingerichtet ist.
          </p>
        </div>
      </div>
    </section>
  )
}
