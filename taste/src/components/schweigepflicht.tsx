import { useMemo, useState } from 'react'
import { pseudonymize, SAMPLES } from '@/lib/pseudo'
import { DOWNLOAD_URL } from '@/lib/site'
import { WindowsMark } from './hero'

const MARKS = [
  ['AES-256', 'Datenbank und Aufnahmen verschlüsselt, der Schlüssel im Windows-Schlüsselbund.'],
  ['Kein Konto', 'Keine Cloud-Datenbank, kein Server von uns. Alles liegt auf Ihrem Computer.'],
  ['[PERSON_1]', 'Namen, Orte, Arbeitgeber und Daten werden vor jeder KI-Anfrage ersetzt.'],
  ['Ihre KI', 'OpenRouter ohne Datenspeicherung, Requesty oder ein lokales Modell ganz ohne Internet.'],
  ['Nie gesendet', 'Diagnosen, Medikation, die Zuordnung der Platzhalter, Aufnahmen mit Patientenstimme.'],
  ['Protokoll', 'Jede Änderung und KI-Anfrage wird ohne Inhalte fälschungssicher protokolliert.'],
]

export function Schweigepflicht() {
  return (
    <section id="schweigepflicht" className="frame scroll-mt-20 pt-[clamp(120px,14vw,200px)]" aria-labelledby="sp-h">
      <div className="grid grid-cols-2 gap-[6px] md:gap-2 lg:grid-cols-4">
        <div data-rise className="col-span-2 flex flex-col justify-between gap-6 bg-p2 p-6 text-white md:p-8 lg:aspect-[3/1]">
          <h2 id="sp-h" className="font-serif text-head leading-[1.02] tracking-[-0.02em]">
            Schweigepflicht eingebaut
          </h2>
          <p className="max-w-[44ch] text-body leading-relaxed">
            Theralo ist so gebaut, dass Patientendaten den Computer nicht verlassen. Was zur KI geht, ist pseudonymisiert,
            und Sie sehen danach genau, was gesendet wurde.
          </p>
        </div>
        {MARKS.map(([mark, text], i) => (
          <div
            key={mark}
            data-rise
            style={{ '--i': i + 1 } as never}
            className="flex min-h-[150px] flex-col justify-between gap-4 bg-tile p-5 hyphens-auto md:p-6 lg:aspect-[3/2]"
          >
            <p className="text-lead font-bold tracking-[-0.01em] md:text-lead">{mark}</p>
            <p className="text-small leading-snug md:text-body">{text}</p>
          </div>
        ))}
      </div>

      <Live />
    </section>
  )
}

/** The one live thing: type a sentence, see what would leave the computer. */
function Live() {
  const [sample, setSample] = useState(0)
  const [text, setText] = useState(SAMPLES[0])
  const pieces = useMemo(() => pseudonymize(text), [text])

  return (
    <div className="mt-[clamp(80px,9vw,140px)] grid gap-10 md:grid-cols-2 md:gap-0" aria-labelledby="live-h">
      {/* Square plate: the sentence as typed, and as sent. */}
      <div data-rise className="md:pr-10">
        <div className="tab ml-6 inline-flex h-10 items-center bg-night text-small font-semibold text-night-ink">
          Ausprobieren
        </div>
        <div className="flex aspect-square flex-col bg-night p-[clamp(20px,3vw,40px)] text-night-ink max-md:aspect-auto">
          <label htmlFor="live-input" className="text-small text-night-muted">
            Ihr Satz
          </label>
          <textarea
            id="live-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={4}
            spellCheck={false}
            className="mt-2 min-h-[8.5em] w-full resize-none bg-p1 p-4 text-body leading-relaxed text-night-ink outline-none focus-visible:outline-p5"
          />
          <p className="mt-8 text-small text-night-muted" id="live-out-label">
            So geht er an die KI
          </p>
          <p className="mt-2 flex-1 text-body leading-[1.9] md:text-lead" aria-labelledby="live-out-label" aria-live="polite">
            {pieces.map((p, i) =>
              p.tag ? (
                <span
                  // Stable per placeholder, so typing elsewhere does not replay the fade.
                  key={`${p.tag}-${p.text}-${pieces.slice(0, i).filter((q) => q.text === p.text).length}`}
                  title={p.kind === 'patient' ? undefined : `Steht für „${p.text}“, nur auf Ihrem Computer`}
                  className={
                    'ph tab mx-[1px] inline-block py-[1px] text-[0.82em] font-semibold leading-[1.5] ' +
                    (p.kind === 'patient' ? 'bg-p5 text-ink' : 'bg-accent text-white')
                  }
                  style={{ paddingInline: '18px' }}
                >
                  {p.tag}
                </span>
              ) : (
                <span key={i}>{p.text}</span>
              ),
            )}
          </p>
          <p className="mt-6 text-small leading-snug text-night-muted">
            Vereinfacht, im Browser. Theralo erkennt mehr und lernt eigene Begriffe je Person.
          </p>
        </div>
      </div>

      {/* Text column: examples as tabs, the claim, the two actions. */}
      <div className="flex flex-col justify-between gap-10 md:pl-10">
        <div data-rise style={{ '--i': 1 } as never} className="flex gap-6 text-body" role="group" aria-label="Beispielsätze">
          {SAMPLES.map((s, i) => (
            <button
              key={s}
              type="button"
              aria-pressed={sample === i && text === s}
              onClick={() => {
                setSample(i)
                setText(s)
              }}
              className={'link ' + (sample === i && text === s ? 'text-ink' : 'text-muted no-underline hover:text-ink')}
            >
              Beispiel {['eins', 'zwei', 'drei'][i]}
            </button>
          ))}
        </div>
        <div data-rise style={{ '--i': 2 } as never}>
          <h3 id="live-h" className="font-serif text-head leading-[1.1]">
            Was die KI zu sehen bekommt
          </h3>
          <p className="mt-12 max-w-[34ch] text-body leading-relaxed">
            Bevor ein Text an einen KI-Dienst geht, ersetzt Theralo Namen, Orte und Daten durch Platzhalter. Die Antwort
            wird auf Ihrem Computer zurückübersetzt. Die Zuordnung verlässt ihn nie.
          </p>
        </div>
        <div data-rise style={{ '--i': 3 } as never} className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <a href={DOWNLOAD_URL} className="btn btn-ink h-[72px] justify-center">
            <WindowsMark /> Herunterladen
          </a>
          <a href="#film" className="flex h-[72px] items-center justify-center bg-tile font-semibold transition-[transform,background-color] duration-150 hover:bg-p6 active:scale-[0.97]">
            Film ansehen
          </a>
        </div>
      </div>
    </div>
  )
}
