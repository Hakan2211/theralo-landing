import { useState } from 'react'

const ITEMS = [
  {
    name: 'Abschnitte',
    img: '/screens/crops/abschnitte.png',
    w: 420,
    h: 1132,
    alt: 'Die sieben Abschnitte des Berichts nach Muster PTV 3, jeder mit seinem Stand',
    fact: 'Erst-, Umwandlungs- und Fortführungsantrag: alle Abschnitte des Musters PTV 3, jeder mit seinem Stand.',
    colour: 'var(--person)',
  },
  {
    name: 'Satz für Satz',
    img: '/screens/crops/entwurf.png',
    w: 802,
    h: 640,
    alt: 'Ein KI-Entwurf mit den Knöpfen Bearbeiten, Verwerfen und Übernehmen',
    fact: 'Die KI entwirft leere Abschnitte aus Ihren unterschriebenen Notizen. Sie gehen die Vorschläge Satz für Satz durch.',
    colour: 'var(--ort)',
  },
  {
    name: 'Woher kommt das?',
    img: '/screens/crops/quelle.png',
    w: 606,
    h: 364,
    alt: 'Die Quelle eines Satzes: ein Zitat aus der Sitzungsnotiz mit Sitzung und Datum',
    fact: 'Jeder Satz zeigt seine Quelle: das Zitat aus Ihrer Notiz, mit Sitzung und Datum.',
    colour: 'var(--datum)',
  },
  {
    name: 'Was fehlt noch?',
    img: '/screens/crops/fehlt.png',
    w: 606,
    h: 920,
    alt: 'Fragen vor dem Entwurf, jede mit einem Feld für Stichworte oder Diktat',
    fact: 'Fragen vor dem Entwurf. Sie antworten mit Stichworten oder einem Satz, getippt oder diktiert.',
    colour: 'var(--pat)',
  },
  {
    name: 'Gutachter-Check',
    img: '/screens/crops/check.png',
    w: 1192,
    h: 814,
    alt: 'Der Gutachter-Check: Hinweise wie „Ein Gutachter würde fragen: Woran zeigt sich, dass die Kurzzeittherapie nicht ausreicht?“',
    fact: 'Die KI liest den Bericht wie ein Gutachter und nennt, was nachgefragt würde. Den Text ändert sie nicht.',
    colour: 'var(--person)',
  },
  {
    name: 'Export nach PTV 3',
    img: '/screens/crops/vorschau.png',
    w: 680,
    h: 814,
    alt: 'Die Vorschau des Berichts an die Gutachterin bzw. den Gutachter mit Chiffre statt Namen',
    fact: 'Export im Format des Musters PTV 3, als PDF oder Word. Unterschreiben tun nur Sie.',
    colour: 'var(--ort)',
  },
]

export function Lotse() {
  const [sel, setSel] = useState(1)
  const item = ITEMS[sel]
  return (
    <section id="lotse" className="lotse frame" aria-labelledby="lotse-title">
      <div className="lotse-stage" data-rise style={{ ['--d' as string]: 1 }}>
        {ITEMS.map((it, i) => (
          <div key={it.name} className="disc" data-on={i === sel} style={{ backgroundColor: it.colour }} />
        ))}
        <div className="objects">
          {ITEMS.map((it, i) => (
            <div key={it.name} className="object" data-on={i === sel} aria-hidden={i !== sel}>
              <img src={it.img} alt={i === sel ? it.alt : ''} width={it.w} height={it.h} loading="lazy" />
            </div>
          ))}
        </div>
        <p className="fact" aria-live="polite">
          {item.fact}
        </p>
      </div>
      <div className="lotse-list">
        <h2 id="lotse-title" className="t-lead" data-rise>
          Der Bericht-Lotse
        </h2>
        <ul data-rise style={{ ['--d' as string]: 1 }}>
          {ITEMS.map((it, i) => (
            <li key={it.name}>
              <button type="button" aria-pressed={i === sel} onClick={() => setSel(i)}>
                {it.name}
              </button>
            </li>
          ))}
        </ul>
        <p className="fact-mobile">{item.fact}</p>
        <p className="lotse-note" data-rise style={{ ['--d' as string]: 2 }}>
          Für den Bericht an die Gutachterin bzw. den Gutachter nach Muster PTV 3: von den Fragen vor dem Entwurf bis zum
          Export.
        </p>
      </div>
    </section>
  )
}
