import { useState } from 'react'

const STAGES = [
  {
    name: 'Aufnehmen oder diktieren',
    short: 'Aufnehmen',
    text: 'Mit Einwilligung nehmen Sie die Sitzung auf, sonst diktieren Sie danach eine kurze Zusammenfassung. Die Abschrift entsteht auf Ihrem Computer. Die Stimme Ihrer Patient:innen verlässt das Gerät nie (Cloud-Transkription nur mit eigener Einwilligung).',
    img: '/screens/heute.png',
    alt: 'Die Ansicht „Heute“ in Theralo: Termin, Aufgaben und fällige Abschriften',
    pos: '22% 30%',
  },
  {
    name: 'Abschrift prüfen',
    short: 'Abschrift prüfen',
    text: 'Theralo trennt die Sprecher. Sie korrigieren und bestätigen. Danach wird das Audio gelöscht.',
    img: '/screens/notiz.png',
    alt: 'Eine Sitzungsnotiz mit Zeitmarken aus der Abschrift',
    pos: '55% 35%',
  },
  {
    name: 'Der Autopilot schreibt vor',
    short: 'Autopilot',
    text: 'Sitzungsnotiz, vorgeschlagene Fakten mit Quellenangabe und eine kurze Zusammenfassung. Sie übernehmen, ändern oder verwerfen, und Sie unterschreiben.',
    img: '/screens/crops/fakten.png',
    alt: 'KI-Vorschläge aus der Abschrift, jeder mit Zeitmarke und Abschnitt im Bericht',
    pos: '0% 0%',
    w: 1316,
    h: 824,
  },
  {
    name: 'Bericht mit dem Bericht-Lotsen',
    short: 'Bericht',
    text: 'Fragen vor dem Entwurf, Abschnitte Satz für Satz, eine KI-Prüfung aus Sicht der Gutachterin bzw. des Gutachters, Export im Format des Musters PTV 3 als PDF oder Word.',
    img: '/screens/pruefen.png',
    alt: 'Der Gutachter-Check neben der Vorschau des Berichts nach Muster PTV 3',
    pos: '70% 30%',
  },
]

export function Ablauf() {
  const [open, setOpen] = useState(0)
  return (
    <section id="ablauf" className="ablauf chapter" aria-labelledby="ablauf-title">
      <div className="grid ablauf-intro">
        <h2 id="ablauf-title" className="t-head" data-rise>
          Von der Sitzung zum Bericht
        </h2>
        <p data-rise style={{ ['--d' as string]: 1 }}>
          Berichte an den Gutachter kosten Abende und Wochenenden. Die Inhalte stehen längst in den Sitzungen, nur nicht in
          der Form, die der Antrag verlangt. Theralo nimmt Ihnen die Routine ab und lässt Ihnen jede Entscheidung.
        </p>
      </div>
      <ol className="acc" data-rise style={{ ['--d' as string]: 2 }}>
        {STAGES.map((s, i) => {
          const isOpen = open === i
          return (
            <li key={s.name} className={`stage s${i + 1}`} data-open={isOpen}>
              <button
                type="button"
                className="stage-btn"
                aria-expanded={isOpen}
                aria-controls={`stage-${i}`}
                onClick={() => setOpen(i)}
              >
                <span>{s.short}</span>
              </button>
              <div id={`stage-${i}`} className="stage-panel" hidden={!isOpen}>
                <div className="stage-text">
                  <h3 className="t-lead">{s.name}</h3>
                  <p>{s.text}</p>
                </div>
                <div className="stage-pic">
                  <img src={s.img} alt={s.alt} loading="lazy" width={s.w ?? 2560} height={s.h ?? 1600} style={{ objectPosition: s.pos }} />
                </div>
              </div>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
