import { useMemo, useState } from 'react'
import { SAMPLES, pseudonymize } from '@/lib/pseudo'
import { Lock } from './icons'

const TARGETS = [
  { id: 'openrouter', label: 'OpenRouter', to: 'OpenRouter (nur Endpunkte ohne Datenspeicherung)' },
  { id: 'requesty', label: 'Requesty', to: 'Requesty' },
  { id: 'lokal', label: 'Lokales Modell', to: '' },
] as const

type Target = (typeof TARGETS)[number]['id']

/** Fixed output, live controls: every control on the right changes the "Was wurde gesendet?" card. */
export function Schweigepflicht() {
  const [text, setText] = useState<string>(SAMPLES[0])
  const [target, setTarget] = useState<Target>('openrouter')
  const [consent, setConsent] = useState(false)
  const [backup, setBackup] = useState(false)

  const pieces = useMemo(() => pseudonymize(text), [text])
  const map = pieces.filter((p) => p.tag && p.kind !== 'patient')
  const seen = new Set<string>()
  const mapping = map.filter((p) => (seen.has(p.tag!) ? false : (seen.add(p.tag!), true)))
  const local = target === 'lokal'
  const to = TARGETS.find((t) => t.id === target)!.to

  return (
    <section id="schweigepflicht" className="secret frame" aria-labelledby="secret-h">
      <div className="secret-field" aria-label="Vorschau: Was wurde gesendet?">
        <div className="card ui" data-ui data-rise>
          <p className="medium t-body">Was wurde gesendet? · Zusammenfassung schreiben</p>
          <p className="mt-2" style={{ color: '#5d6166' }}>
            {local
              ? 'Dieser Text blieb auf diesem Computer: Das lokale Modell braucht kein Internet.'
              : `Diesen pseudonymisierten Text hat der Autopilot an ${to} geschickt. Die Zuordnung der Platzhalter blieb auf diesem Computer.`}
          </p>
          <p className="medium mt-4">Ausgehender Text</p>
          <p className="ui-box mt-2" aria-live="polite">
            {pieces.map((p, i) =>
              p.tag ? (
                <span key={i} className="ui-tag">
                  {p.tag}
                </span>
              ) : (
                <span key={i}>{p.text}</span>
              ),
            )}
          </p>
          <p className="medium mt-4">Platzhalter, nur lokal</p>
          <p className="mt-1" style={{ color: '#5d6166' }}>
            {mapping.length === 0
              ? 'Keine Namen, Orte oder Daten erkannt.'
              : mapping.map((p) => `${p.tag} = ${p.text}`).join(' · ')}
          </p>
          <p className="medium mt-4">Nicht gesendet</p>
          <p className="mt-1" style={{ color: '#5d6166' }}>
            {consent ? '' : 'Tonaufnahme mit Patientenstimme · '}Diagnosen und Medikation · Zuordnung der Platzhalter
          </p>
          {consent ? (
            <p className="mt-1" style={{ color: '#5d6166' }}>
              Tonaufnahme: nur zur Transkription, mit Einwilligung
            </p>
          ) : null}
          <p className="ui-ok mt-4 flex items-center gap-2">
            <Lock /> Datenbank verschlüsselt{backup ? ' · Sicherung verschlüsselt auf USB-Stick' : ''}
          </p>
        </div>
      </div>

      <div className="secret-col">
        <h2 id="secret-h" className="t-head" data-rise>
          Ihre Schweigepflicht ist eingebaut.
        </h2>
        <p className="mt-6" data-rise style={{ '--i': 1 } as never}>
          Was Sie in der Sitzung hören, steht unter Ihrer Schweigepflicht nach § 203 StGB. Theralo ist so gebaut, dass
          es dort bleibt. Probieren Sie es aus: Jede Einstellung hier ändert die Vorschau.
        </p>

        <div className="secret-block" style={{ marginTop: 72 }}>
          <p className="serif t-lead" data-rise>
            Alles bleibt auf Ihrem Computer.
          </p>
          <p className="mt-4" data-rise style={{ '--i': 1 } as never}>
            Datenbank und Aufnahmen sind verschlüsselt (AES-256). Kein Konto, keine Cloud-Datenbank, kein Server von
            uns. Jede Änderung und jede KI-Anfrage wird ohne Inhalte in einer manipulationssicheren Kette protokolliert.
            Beim ersten Start erhalten Sie ein Notfall-Kit; damit stellen Sie eine Sicherung auch auf einem neuen
            Computer wieder her.
          </p>
          <button
            type="button"
            role="switch"
            aria-checked={backup}
            className="switch mt-5"
            onClick={() => setBackup((b) => !b)}
            data-rise
            style={{ '--i': 2 } as never}
          >
            <span className="track">
              <span className="knob" />
            </span>
            Verschlüsselte Datensicherung auf USB-Stick
          </button>
        </div>

        <div className="secret-block">
          <p className="serif t-lead" data-rise>
            Pseudonymisiert vor jeder KI-Anfrage.
          </p>
          <p className="mt-4" data-rise style={{ '--i': 1 } as never}>
            Namen, Orte, Arbeitgeber und Datumsangaben werden durch Platzhalter wie [PERSON_1] ersetzt. Die Zuordnung
            verlässt den Computer nie. Unter „Was wurde gesendet?“ sehen Sie genau, was hinausging.
          </p>
          <div className="mt-5" data-rise style={{ '--i': 2 } as never}>
            <label htmlFor="pseudo-in" className="t-small muted block mb-2">
              Ein Satz wie aus einer Notiz, gern mit Namen, Ort und Datum
            </label>
            <textarea id="pseudo-in" className="ctl-text" value={text} onChange={(e) => setText(e.target.value)} />
          </div>
        </div>

        <div className="secret-block">
          <p className="serif t-lead" data-rise>
            Sie wählen die KI.
          </p>
          <p className="mt-4" data-rise style={{ '--i': 1 } as never}>
            Ein eigener Schlüssel bei OpenRouter (nur Endpunkte ohne Datenspeicherung) oder Requesty, oder ein lokales
            Modell ganz ohne Internet. Die Kosten sehen Sie in der App, nach Aufgabe und Modell.
          </p>
          <div className="seg mt-5" role="group" aria-label="KI-Anbieter" data-rise style={{ '--i': 2 } as never}>
            {TARGETS.map((t) => (
              <button key={t.id} type="button" aria-pressed={target === t.id} onClick={() => setTarget(t.id)}>
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="secret-block">
          <p className="serif t-lead" data-rise>
            Nie an die KI.
          </p>
          <p className="mt-4" data-rise style={{ '--i': 1 } as never}>
            Tonaufnahmen mit Patientenstimme, Diagnosen und Medikation und die Zuordnung der Platzhalter. Eine Aufnahme
            geht nur hinaus, wenn eine Einwilligung zur Cloud-Transkription vorliegt.
          </p>
          <button
            type="button"
            role="switch"
            aria-checked={consent}
            className="switch mt-5"
            onClick={() => setConsent((c) => !c)}
            data-rise
            style={{ '--i': 2 } as never}
          >
            <span className="track">
              <span className="knob" />
            </span>
            Einwilligung zur Cloud-Transkription liegt vor
          </button>
        </div>
      </div>
    </section>
  )
}
