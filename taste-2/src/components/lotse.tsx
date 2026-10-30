import { useState } from 'react'
import type { ReactNode } from 'react'
import { Check } from './icons'

type Output = { name: string; text: string; narrow?: boolean; sheet: ReactNode }

// The Lotse's four outputs, rebuilt from the demo practice (Lena Sommer, S140391, invented person).
const OUTPUTS: Output[] = [
  {
    name: 'Entwurf',
    text: 'Die KI entwirft leere Abschnitte aus Ihren unterschriebenen Notizen. Sie gehen die Vorschläge Satz für Satz durch: übernehmen, bearbeiten oder verwerfen.',
    sheet: (
      <>
        <p className="muted">Umwandlungsantrag · S140391 · Verhaltenstherapie (VT)</p>
        <p className="serif t-lead mt-4">7. Zusätzlich erforderliche Angaben bei einem Umwandlungsantrag</p>
        <div className="ui-tint mt-5">
          <p className="medium">Entwurf der KI</p>
          <p className="mt-3 flex gap-2">
            <span className="ui-ok mt-1">
              <Check />
            </span>
            Pat. berichtet von frühmorgendlichem Erwachen gegen 4 Uhr und ausgeprägter Erschöpfung am Tag.
          </p>
          <p className="mt-2 flex gap-2">
            <span className="ui-ok mt-1">
              <Check />
            </span>
            Grübeln über Überforderung im Beruf und Haushalt in den Wachphasen.
          </p>
        </div>
        <div className="ui-box mt-3">
          <p>Geplanter Spaziergang zweimal umgesetzt, danach subjektiv leichte Stimmungsbesserung.</p>
          <p className="mt-2">
            <span className="ui-chip">Sitzung 1</span>
          </p>
          <p className="mt-4 flex flex-wrap gap-2">
            <span className="ui-btn">Bearbeiten</span>
            <span className="ui-btn">Verwerfen</span>
            <span className="ui-btn ui-btn-primary">Übernehmen</span>
          </p>
        </div>
        <p className="muted mt-6">Alles gespeichert · 4 von 7 Abschnitten fertig</p>
      </>
    ),
  },
  {
    name: 'Quelle',
    narrow: true,
    text: 'Jeder Satz zeigt seine Quelle aus Ihren Notizen. Und „Was fehlt noch?“ fragt nach, bevor ein Abschnitt dünn bleibt.',
    sheet: (
      <>
        <p className="medium">Woher kommt das?</p>
        <div className="ui-box mt-3">
          <p>„Geplanter Spaziergang zweimal umgesetzt, danach subjektiv leichte Stimmungsbesserung.“</p>
          <p className="ui-ok mt-2">Sitzung 1 · 09.10.2026</p>
        </div>
        <p className="medium mt-8">Was fehlt noch?</p>
        <div className="ui-box mt-3">
          <p>Wie verlief die Kurzzeittherapie, was hat sich an der Symptomatik verändert?</p>
          <p className="ui-btn mt-3 block muted">Stichworte oder Satz …</p>
        </div>
        <div className="ui-box mt-3">
          <p>Welche Therapieziele wurden erreicht, welche noch nicht?</p>
          <p className="ui-btn mt-3 block muted">Stichworte oder Satz …</p>
        </div>
        <div className="ui-box mt-3">
          <p>Warum reicht die Kurzzeittherapie nicht aus?</p>
          <p className="ui-btn mt-3 block muted">Stichworte oder Satz …</p>
        </div>
      </>
    ),
  },
  {
    name: 'Gutachter-Check',
    text: 'Die KI liest den Bericht wie ein Gutachter und nennt, was nachgefragt würde. Den Text ändert sie nicht.',
    sheet: (
      <>
        <p className="serif t-lead">Gutachter-Check</p>
        <p className="muted mt-1">Hinweise, keine Änderungen am Text</p>
        <div className="ui-warn mt-5">
          <p>Abschnitt 3 ausgefüllt</p>
          <p className="mt-2">
            <span className="ui-btn">Zum Abschnitt</span>
          </p>
        </div>
        <div className="ui-warn mt-3">
          <p>Abschnitt 6 ausgefüllt</p>
          <p className="mt-2">
            <span className="ui-btn">Zum Abschnitt</span>
          </p>
        </div>
        <div className="ui-ask mt-3">
          <p>Ein Gutachter würde fragen: Woran zeigt sich, dass die Kurzzeittherapie nicht ausreicht?</p>
          <p className="mt-2 flex gap-3">
            <span className="ui-btn">Zum Abschnitt</span>
            <span className="ui-btn">Ignorieren</span>
          </p>
        </div>
        <p className="muted mt-6">≈ 0,3 / 2 Seiten · Weiter: Unterschreiben</p>
      </>
    ),
  },
  {
    name: 'Bericht',
    text: 'Export im Format des Musters PTV 3, als PDF oder Word. Diagnosen trägt nur die Therapeutin bzw. der Therapeut ein, und unterschreiben tun nur Sie.',
    sheet: (
      <div className="ui-doc">
        <p className="muted flex justify-between">
          <span>Chiffre: S140391 · Verfahren: VT</span>
          <span>Seite 1 / 1</span>
        </p>
        <p className="muted mt-3 text-right">
          Praxis für Psychotherapie (Demo)
          <br />
          Beispielstraße 1, 12345 Musterstadt
        </p>
        <p className="serif t-lead mt-6">Bericht an die Gutachterin / den Gutachter</p>
        <p className="muted">Bericht zum Umwandlungsantrag</p>
        <p className="medium mt-5">1. Relevante soziodemographische Daten</p>
        <p>
          Pat. ist 35 Jahre alt, ledig und lebt allein in einer Mietwohnung. Sie arbeitet in Vollzeit als
          Projektkoordinatorin in einem Ingenieurbüro. Eine ältere Schwester lebt in derselben Stadt, zu den Eltern
          besteht regelmäßiger Kontakt.
        </p>
        <p className="medium mt-4">2. Symptomatik und psychischer Befund</p>
        <p>
          Zu Beginn der Kurzzeittherapie bestanden gedrückte Stimmung, Antriebsminderung, frühmorgendliches Erwachen
          gegen 4 Uhr und ausgeprägtes Grübeln über berufliche Überforderung. Im Verlauf hat sich die Stimmung
          gebessert; Pat. schläft meist bis 6 Uhr und hat soziale Aktivitäten wieder aufgenommen.
        </p>
        <p className="medium mt-4">4. Behandlungsrelevante Angaben zur Lebensgeschichte</p>
        <p>
          Pat. wuchs als jüngere von zwei Töchtern auf; Anerkennung erlebte sie vor allem über Leistung. Kritik
          aktiviert die Grundannahme, unfähig zu sein, und führt zu Rückzug und Grübeln.
        </p>
        <p className="muted mt-6 flex justify-between">
          <span>Datum: 30.10.2026</span>
          <span>Unterschrift</span>
        </p>
      </div>
    ),
  },
]

/** Output index: the names on the left are the controls; the stage on the right shows the document. */
export function Lotse() {
  const [sel, setSel] = useState(0)
  return (
    <section id="lotse" className="lotse frame" aria-labelledby="lotse-h">
      <div className="lotse-index">
        <h2 id="lotse-h" className="t-head" data-rise>
          Der Bericht-Lotse
        </h2>
        <p className="mt-6 max-w-[42ch]" data-rise style={{ '--i': 1 } as never}>
          Für Erst-, Umwandlungs- und Fortführungsantrag nach Muster PTV 3. Wählen Sie, was der Lotse für Sie
          vorbereitet:
        </p>
        <ul className="out-list mt-8" data-rise style={{ '--i': 2 } as never}>
          {OUTPUTS.map((o, i) => (
            <li key={o.name}>
              <button
                type="button"
                className="out-name serif t-display"
                aria-pressed={i === sel}
                aria-controls="lotse-sheet"
                onClick={() => setSel(i)}
              >
                {o.name}
              </button>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-[42ch]" aria-live="polite" data-rise style={{ '--i': 3 } as never}>
          {OUTPUTS[sel].text}
        </p>
      </div>
      <div className="lotse-stage" id="lotse-sheet" data-rise style={{ '--i': 2 } as never}>
        {OUTPUTS.map((o, i) => (
          <div
            key={o.name}
            data-ui
            className={'sheet ui' + (o.narrow ? ' sheet-narrow' : '') + (i === sel ? ' is-on' : '')}
            aria-hidden={i !== sel}
            inert={i !== sel}
          >
            {o.sheet}
          </div>
        ))}
      </div>
    </section>
  )
}
