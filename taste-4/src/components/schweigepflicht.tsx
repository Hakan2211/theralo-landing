import { useEffect, useMemo, useRef, useState } from 'react'
import { SAMPLES, pseudonymize } from '@/lib/pseudo'

const KIND_CLASS = { person: 'k-person', place: 'k-place', date: 'k-date', patient: 'k-patient' } as const

export function Schweigepflicht() {
  const [text, setText] = useState(SAMPLES[0])
  const pieces = useMemo(() => pseudonymize(text), [text])
  // Placeholders seen before: only newly appearing ones get the small arrival.
  const seen = useRef(new Set<string>())
  const fresh = new Set<string>()
  for (const p of pieces) if (p.tag && !seen.current.has(p.tag)) fresh.add(p.tag)
  useEffect(() => {
    for (const p of pieces) if (p.tag) seen.current.add(p.tag)
  }, [pieces])

  return (
    <section id="schweigepflicht" className="schweige chapter on-dark" aria-labelledby="schweige-title">
      <div className="grid">
        <h2 id="schweige-title" className="t-head" data-rise>
          Schweigepflicht, eingebaut.
        </h2>
        <p className="schweige-lede" data-rise style={{ ['--d' as string]: 1 }}>
          Für Berufsgeheimnisträger nach § 203 StGB. Alles bleibt auf Ihrem Computer: Datenbank und Aufnahmen sind
          verschlüsselt (AES-256). Kein Konto, keine Cloud-Datenbank, kein Server von uns.
        </p>
        <p className="schweige-lede" data-rise style={{ ['--d' as string]: 2 }}>
          Vor jeder KI-Anfrage werden Namen, Orte, Arbeitgeber und Datumsangaben durch Platzhalter wie [PERSON_1] ersetzt.
          Die Zuordnung verlässt den Computer nie.
        </p>

        <div className="demo" data-rise style={{ ['--d' as string]: 1 }}>
          <label htmlFor="pseudo-in">Ihr Satz aus einer Sitzung</label>
          <textarea id="pseudo-in" value={text} onChange={(e) => setText(e.target.value)} spellCheck={false} />
          <div className="samples" role="group" aria-label="Beispielsätze">
            {SAMPLES.map((s, i) => (
              <button key={s} type="button" onClick={() => setText(s)}>
                Beispiel {i + 1}
              </button>
            ))}
          </div>
          <div className="out" aria-live="polite">
            <span className="out-label">So geht er an die KI</span>
            <p>
              {pieces.map((p, i) =>
                p.tag ? (
                  <span key={i} className={`ph ${KIND_CLASS[p.kind!]}`} data-new={fresh.has(p.tag) ? '' : undefined}>
                    {p.tag}
                  </span>
                ) : (
                  <span key={i}>{p.text}</span>
                ),
              )}
            </p>
          </div>
          <p className="legend t-small">
            <span>Blau: Personen</span>
            <span>Grün: Orte und Arbeitgeber</span>
            <span>Gelb: Daten</span>
            <span>Türkis: die Patientin oder der Patient</span>
          </p>
        </div>

        <figure className="sent" data-rise style={{ ['--d' as string]: 2 }}>
          <img
            src="/screens/crops/gesendet.png"
            alt="Das Fenster „Was wurde gesendet?“ mit dem pseudonymisierten ausgehenden Text einer Sitzungsnotiz"
            width={1564}
            height={1130}
            loading="lazy"
          />
          <figcaption className="t-small">
            Unter „Was wurde gesendet?“ sehen Sie genau, was hinausging. Jede Änderung und jede KI-Anfrage wird ohne Inhalte
            in einer manipulationssicheren Kette protokolliert.
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
