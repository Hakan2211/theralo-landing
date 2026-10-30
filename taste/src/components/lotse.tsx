import { useState } from 'react'

// Parts of the Bericht-Lotse, each a crop of the real screen (shared/screens/crops).
const PARTS = [
  {
    name: 'Entwurf der KI',
    img: '/screens/crops/entwurf.png',
    w: 802,
    h: 640,
    fact: 'Die KI entwirft nur leere Abschnitte, aus Ihren unterschriebenen Notizen. Sie gehen jeden Satz einzeln durch: übernehmen, bearbeiten, verwerfen.',
  },
  {
    name: 'Woher kommt das?',
    img: '/screens/crops/quelle.png',
    w: 606,
    h: 364,
    fact: 'Neben jedem Satz steht seine Quelle: das Zitat aus der Notiz, mit Sitzung und Datum.',
  },
  {
    name: 'Was fehlt noch?',
    img: '/screens/crops/fehlt.png',
    w: 606,
    h: 920,
    fact: 'Fragen, die Ihre Notizen nicht beantworten, stellt der Lotse vor dem Entwurf. Ihre Antwort zählt als Ihre eigene Angabe, getippt oder diktiert.',
  },
  {
    name: 'Gutachter-Check',
    img: '/screens/crops/check.png',
    w: 1192,
    h: 814,
    fact: 'Vor der Unterschrift liest die KI den Bericht wie ein Gutachter und nennt, was nachgefragt würde. Diagnosen werden dafür nie gesendet.',
  },
  {
    name: 'Vorschau PTV 3',
    img: '/screens/crops/vorschau.png',
    w: 680,
    h: 814,
    fact: 'Der Bericht im Format des Musters PTV 3, mit Chiffre statt Namen. Export als PDF oder Word.',
  },
]

export function Lotse() {
  const [active, setActive] = useState(0)
  const part = PARTS[active]
  return (
    <section id="lotse" className="frame scroll-mt-4 pt-[clamp(120px,14vw,200px)]" aria-labelledby="lotse-h">
      <div className="grid items-end gap-10 md:grid-cols-12">
        {/* The plate: the folder shape in the accent colour, the crop standing on it. */}
        <div data-rise className="order-1 min-w-0 md:order-2 md:col-span-7 md:col-start-6">
          <div className="tab ml-[8%] inline-flex h-11 items-center bg-accent text-small font-semibold text-white">S140391</div>
          <div className="relative grid min-h-[clamp(320px,44vw,620px)] place-items-center bg-accent px-[6%] py-[8%]">
            {PARTS.map((p, i) => (
              <img
                key={p.name}
                src={p.img}
                alt={i === active ? `Ausschnitt aus thera: ${p.name}` : ''}
                aria-hidden={i !== active}
                width={p.w}
                height={p.h}
                loading="lazy"
                className={
                  'col-start-1 row-start-1 max-h-[clamp(240px,36vw,520px)] w-auto max-w-full transition-[opacity,transform,filter] duration-300 ease-[var(--ease-out)] ' +
                  (i === active ? 'opacity-100' : 'opacity-0 blur-[2px] motion-safe:translate-y-[10px] motion-safe:scale-[0.98]')
                }
              />
            ))}
          </div>
        </div>

        <div className="order-2 min-w-0 md:order-1 md:col-span-5">
          <h2 id="lotse-h" data-rise className="font-serif text-head leading-[1.15] text-muted">
            Bericht-Lotse
          </h2>
          <ul className="mt-1" role="tablist" aria-label="Teile des Bericht-Lotsen">
            {PARTS.map((p, i) => (
              <li key={p.name} data-rise style={{ '--i': i + 1 } as never} >
                <button
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  onClick={() => setActive(i)}
                  onPointerEnter={(e) => e.pointerType === 'mouse' && setActive(i)}
                  className={
                    'py-0.5 text-left font-serif text-head leading-[1.15] transition-colors duration-200 ' +
                    (i === active ? 'text-ink' : 'text-muted hover:text-ink')
                  }
                >
                  {p.name}
                </button>
              </li>
            ))}
          </ul>
          <p data-rise style={{ '--i': 6 } as never} className="mt-8 max-w-[40ch] text-body leading-relaxed" aria-live="polite">
            {part.fact}
          </p>
        </div>
      </div>
    </section>
  )
}
