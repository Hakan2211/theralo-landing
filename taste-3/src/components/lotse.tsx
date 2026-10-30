import { useState, type KeyboardEvent } from 'react'
import { DOWNLOAD_URL } from '@/lib/site'
import { Crop, WindowsMark } from './ui'

const VIEWS = [
  {
    id: 'abschnitte',
    tab: 'Abschnitte',
    text: 'Die KI entwirft leere Abschnitte aus Ihren unterschriebenen Notizen. Sie gehen die Vorschläge Satz für Satz durch: übernehmen, ändern oder verwerfen.',
    crop: { src: '/screens/lotse.png', x: 990, y: 640, w: 900 },
    alt: 'Bericht-Lotse, Abschnitt „Zusätzlich erforderliche Angaben bei einem Umwandlungsantrag“ mit KI-Entwurf und den Knöpfen Bearbeiten, Verwerfen, Übernehmen',
  },
  {
    id: 'quelle',
    tab: 'Woher kommt das?',
    text: 'Jeder vorgeschlagene Satz zeigt seine Quelle: die Stelle in Ihrer Notiz, mit Sitzung und Datum. Was noch fehlt, fragt der Lotse vor dem Entwurf ab.',
    crop: { src: '/screens/lotse.png', x: 1500, y: 150, w: 1000 },
    alt: '„Woher kommt das?“ mit Zitat aus Sitzung 1 vom 09.10.2026 und „Was fehlt noch?“ mit offenen Fragen',
  },
  {
    id: 'check',
    tab: 'Gutachter-Check',
    text: 'Die KI liest den Bericht wie ein Gutachter und nennt, was nachgefragt würde. Den Text ändert sie nicht. Export im Format des Musters PTV 3 als PDF oder Word.',
    crop: { src: '/screens/pruefen.png', x: 560, y: 440, w: 1150 },
    alt: 'Gutachter-Check: „Ein Gutachter würde fragen: Woran zeigt sich, dass die Kurzzeittherapie nicht ausreicht?“',
  },
]

/** Square plate, spare text: one view of the Lotse at a time, chosen by three plain tabs. */
export function Lotse() {
  const [active, setActive] = useState(0)
  const view = VIEWS[active]

  const onKey = (e: KeyboardEvent) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
    const next = (active + (e.key === 'ArrowRight' ? 1 : VIEWS.length - 1)) % VIEWS.length
    setActive(next)
    document.getElementById(`tab-${VIEWS[next].id}`)?.focus()
  }

  return (
    <section id="lotse" className="row plate" aria-labelledby="lotse-h">
      <div className="left">
        <div className="plate-square" style={{ position: 'relative' }} data-rise>
          {VIEWS.map((v, i) => (
            <Crop key={v.id} {...v.crop} alt={v.alt} className={i === active ? 'on' : ''} />
          ))}
        </div>
      </div>

      <div className="plate-text">
        <div role="tablist" aria-label="Ansichten des Bericht-Lotsen" className="tabs" onKeyDown={onKey} data-rise>
          {VIEWS.map((v, i) => (
            <button
              key={v.id}
              id={`tab-${v.id}`}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-controls="lotse-panel"
              tabIndex={i === active ? 0 : -1}
              onClick={() => setActive(i)}
            >
              {v.tab}
            </button>
          ))}
        </div>

        <div id="lotse-panel" role="tabpanel" aria-labelledby={`tab-${view.id}`}>
          <h2 id="lotse-h" className="head" data-rise style={{ ['--d' as string]: 1 }}>
            Der Bericht-Lotse
          </h2>
          <p className="lead measure" style={{ marginTop: 32 }} data-rise>
            Für Erst-, Umwandlungs- und Fortführungsantrag nach Muster PTV 3.
          </p>
          <p className="measure" style={{ marginTop: 16 }} data-rise>
            {view.text}
          </p>
        </div>

        <div className="cells" data-rise>
          <a href={DOWNLOAD_URL} className="btn">
            <WindowsMark /> Für Windows herunterladen
          </a>
          <a href="#video" className="btn btn-quiet">
            Den Lotsen im Video sehen
          </a>
        </div>
      </div>
    </section>
  )
}
