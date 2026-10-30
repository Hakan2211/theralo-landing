import { useState } from 'react'

// Dark to light: the order of the work is carried by the petrol steps.
const STAGES = [
  {
    name: 'Aufnehmen',
    text: 'Mit Einwilligung nehmen Sie die Sitzung auf, sonst diktieren Sie danach ein paar Sätze. Die Abschrift entsteht auf Ihrem Computer; die Stimme Ihrer Patient:innen verlässt ihn nie.',
    img: '/screens/heute.png',
    alt: 'Die Seite „Heute“ mit dem Termin, Aufgaben und dem Hinweis „1 Transkript prüfen“',
    bg: 'var(--color-p1)',
    fg: 'var(--color-night-ink)',
  },
  {
    name: 'Autopilot',
    text: 'Sie prüfen die Abschrift und bestätigen; das Audio wird gelöscht. Dann legt Theralo die Notiz an und schlägt Fakten vor, jeden mit der Zeitmarke im Gespräch.',
    img: '/screens/notiz.png',
    alt: 'Sitzungsnotiz mit KI-Vorschlägen aus der Abschrift, Zeitmarke 00:12 und Bericht-Abschnitt',
    bg: 'var(--color-p2)',
    fg: '#fff',
  },
  {
    name: 'Bericht',
    text: 'Der Bericht-Lotse entwirft leere Abschnitte des Musters PTV 3 aus Ihren unterschriebenen Notizen. Sie übernehmen, ändern oder verwerfen jeden Satz.',
    img: '/screens/lotse.png',
    alt: 'Bericht-Lotse im Schritt „Abschnitte“ mit dem KI-Entwurf und der Quelle des Satzes',
    bg: 'var(--color-p3)',
    fg: '#fff',
  },
  {
    name: 'Prüfen',
    text: 'Die KI liest den Bericht wie ein Gutachter und nennt, was nachgefragt würde. Den Text ändert sie nicht. Daneben steht die Vorschau im Format des Musters.',
    img: '/screens/pruefen.png',
    alt: 'Gutachter-Check mit Hinweisen und der Vorschau des Berichts',
    bg: 'var(--color-p4)',
    fg: 'var(--color-ink)',
  },
  {
    name: 'Abgeben',
    text: 'Sie unterschreiben und exportieren als PDF oder Word. Das Board zeigt jeden Antrag vom Entwurf bis zum Export, und wann das Kontingent endet.',
    img: '/screens/board.png',
    alt: 'Die Berichte als Board vom Entwurf bis zum Export',
    bg: 'var(--color-p5)',
    fg: 'var(--color-ink)',
  },
]

export function Ablauf() {
  const [open, setOpen] = useState(0)
  return (
    <section id="ablauf" className="frame scroll-mt-20 pt-[clamp(120px,14vw,200px)]" aria-labelledby="ablauf-h">
      <div className="grid gap-6 md:grid-cols-12">
        <h2 id="ablauf-h" data-rise className="font-serif text-head leading-[1.02] tracking-[-0.02em] md:col-span-5">
          Von der Sitzung zum Bericht
        </h2>
        <p data-rise style={{ '--i': 1 } as never} className="text-lead leading-relaxed md:col-span-5 md:col-start-7">
          Berichte an den Gutachter entstehen abends und am Wochenende, obwohl ihr Inhalt längst in den Sitzungen steht.
          Theralo nimmt die Routine dazwischen ab. Jede Entscheidung bleibt bei Ihnen.
        </p>
      </div>

      {/* Desktop: one row of panels; the open stage takes most of the width. Phone: stacked bars. */}
      <div data-rise style={{ '--i': 2 } as never} className="mt-16 flex flex-col md:h-[560px] md:flex-row">
        {STAGES.map((s, i) => {
          const isOpen = i === open
          return (
            <div
              key={s.name}
              className="relative overflow-hidden md:transition-[flex-grow] md:duration-[450ms] md:ease-[var(--ease-in-out)] motion-reduce:transition-none"
              style={{ background: s.bg, color: s.fg, flexGrow: isOpen ? 7.2 : 1, flexBasis: 0 }}
            >
              <button
                type="button"
                onClick={() => setOpen(i)}
                aria-expanded={isOpen}
                aria-controls={`stage-${i}`}
                className="flex h-16 w-full items-center px-5 text-left text-body font-semibold md:absolute md:inset-0 md:h-full md:items-end md:p-5"
                style={{ pointerEvents: isOpen ? 'none' : undefined }}
              >
                <span className={'md:rotate-180 md:whitespace-nowrap md:text-lead md:[writing-mode:vertical-rl] ' + (isOpen ? 'md:hidden' : '')}>
                  {s.name}
                </span>
              </button>
              <div
                id={`stage-${i}`}
                hidden={!isOpen}
                className="grid gap-6 px-5 pb-6 md:absolute md:inset-0 md:grid-cols-[minmax(260px,1fr)_1.5fr] md:gap-8 md:p-8"
              >
                <div className="flex flex-col justify-between gap-6">
                  <h3 className="hidden font-serif text-head leading-none md:block">{s.name}</h3>
                  <p className="max-w-[36ch] text-body leading-relaxed">{s.text}</p>
                </div>
                <img
                  src={s.img}
                  alt={s.alt}
                  width={2560}
                  height={1600}
                  loading="lazy"
                  className="stage-shot w-full self-center object-cover object-left-top md:h-full"
                />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
