import { useId, useMemo, useState } from 'react'
import { SAMPLES, pseudonymize } from '@/lib/pseudo'

const PROVIDERS = [
  { id: 'openrouter', label: 'OpenRouter', to: 'OpenRouter, nur Endpunkte ohne Datenspeicherung' },
  { id: 'requesty', label: 'Requesty', to: 'Requesty, mit Ihrem eigenen Schlüssel' },
  { id: 'lokal', label: 'Lokales Modell', to: 'ein lokales Modell auf diesem Computer, ganz ohne Internet' },
] as const

function Switch({ checked, onChange, children }: { checked: boolean; onChange: (v: boolean) => void; children: string }) {
  return (
    <label className="switch">
      <input type="checkbox" className="sr-only" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      <span className="knob-track" aria-hidden="true">
        <span className="knob" />
      </span>
      <span>{children}</span>
    </label>
  )
}

/**
 * Fixed output, live controls. The card on the left is what would leave the computer; every control on
 * the right changes it at once. Names, places and dates print as solid blocks with their placeholder.
 */
export function Schweigepflicht() {
  const [text, setText] = useState<string>(SAMPLES[0])
  const [provider, setProvider] = useState<(typeof PROVIDERS)[number]['id']>('openrouter')
  const [showMap, setShowMap] = useState(false)
  const [diagnosis, setDiagnosis] = useState(false)
  const fieldId = useId()

  const pieces = useMemo(() => pseudonymize(text), [text])
  const mapping = pieces.filter((p) => p.tag)
  const to = PROVIDERS.find((p) => p.id === provider)!.to

  return (
    <section id="schweigepflicht" className="held" aria-labelledby="sp-h">
      <div className="held-head">
        <h2 id="sp-h" className="head" data-rise>
          Ihre Schweigepflicht ist eingebaut.
        </h2>
        <p className="lead measure" style={{ marginTop: 32 }} data-rise>
          Alles bleibt auf Ihrem Computer (§ 203 StGB). Datenbank und Aufnahmen sind verschlüsselt (AES-256). Kein
          Konto, keine Cloud-Datenbank, kein Server von uns.
        </p>

      </div>
      <div className="held-body">
      <div className="held-field on-pink">
        <div data-ui className="sent" aria-live="polite">
          <p className="sent-title">Was wurde gesendet?</p>
          <p className="sent-label">An</p>
          <p>{to}</p>
          <p className="sent-label">Ausgehender Text</p>
          <p className="sent-text">
            {pieces.map((p, i) =>
              p.tag ? (
                <span key={i} className="ph">
                  {p.tag}
                </span>
              ) : (
                <span key={i}>{p.text}</span>
              ),
            )}
          </p>
          {diagnosis && (
            <div className="later">
              <p className="sent-label">Diagnosen und Medikation</p>
              <p>Nicht gesendet. Sie bleiben in Ihrer Notiz.</p>
            </div>
          )}
          {showMap && (
            <div className="later">
              <p className="sent-label">Platzhalter (nur lokal, nicht gesendet)</p>
              {mapping.length ? (
                <div className="map">
                  {mapping.map((p, i) => (
                    <FragmentRow key={i} tag={p.tag!} text={p.text} />
                  ))}
                </div>
              ) : (
                <p>Keine Namen, Orte oder Daten erkannt.</p>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="held-text">
        <div className="block">
          <h3 data-rise>Pseudonymisiert vor jeder KI-Anfrage.</h3>
          <p data-rise>
            Namen, Orte, Arbeitgeber und Datumsangaben werden durch Platzhalter wie [PERSON_1] ersetzt. Schreiben Sie
            einen Satz und sehen Sie links, was hinausginge.
          </p>
          <div className="control" data-rise>
            <label htmlFor={fieldId} className="small muted" style={{ display: 'block', marginBottom: 8 }}>
              Ein Satz aus einer Sitzungsnotiz
            </label>
            <textarea id={fieldId} className="field" value={text} onChange={(e) => setText(e.target.value)} />
            <div className="samples">
              {SAMPLES.map((s, i) => (
                <button key={s} type="button" className="small" onClick={() => setText(s)}>
                  Beispiel {['eins', 'zwei', 'drei'][i]}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="block">
          <h3 data-rise>Sie wählen die KI.</h3>
          <p data-rise>
            Ein eigener Schlüssel bei OpenRouter (nur Endpunkte ohne Datenspeicherung) oder Requesty, oder ein lokales
            Modell ganz ohne Internet. Die Kosten sehen Sie in der App, nach Aufgabe und Modell.
          </p>
          <div className="control seg" role="group" aria-label="KI-Anbieter" data-rise>
            {PROVIDERS.map((p) => (
              <button key={p.id} type="button" aria-pressed={provider === p.id} onClick={() => setProvider(p.id)}>
                {p.label}
              </button>
            ))}
          </div>
        </div>

        <div className="block">
          <h3 data-rise>Die Zuordnung bleibt hier.</h3>
          <p data-rise>
            Welcher Platzhalter für welchen Namen steht, verlässt den Computer nie. Unter „Was wurde gesendet?“ sehen
            Sie in der App genau, was hinausging.
          </p>
          <div className="control" data-rise>
            <Switch checked={showMap} onChange={setShowMap}>
              Zuordnung anzeigen
            </Switch>
          </div>
        </div>

        <div className="block">
          <h3 data-rise>Nie an die KI.</h3>
          <p data-rise>
            Tonaufnahmen mit Patientenstimme (außer mit Einwilligung zur Cloud-Transkription), Diagnosen und
            Medikation, die Zuordnung der Platzhalter.
          </p>
          <div className="control" data-rise>
            <Switch checked={diagnosis} onChange={setDiagnosis}>
              Notiz mit Diagnose und Medikation
            </Switch>
          </div>
        </div>

        <div className="block">
          <h3 data-rise>Gesichert und protokolliert.</h3>
          <p data-rise>
            Notfall-Kit und verschlüsselte Datensicherung, etwa auf einen USB-Stick; die Wiederherstellung auf einem
            neuen Computer gelingt mit dem Notfall-Schlüssel. Jede Änderung und jede KI-Anfrage wird ohne Inhalte in
            einer manipulationssicheren Kette protokolliert.
          </p>
        </div>
      </div>
      </div>
    </section>
  )
}

function FragmentRow({ tag, text }: { tag: string; text: string }) {
  return (
    <>
      <span>
        <span className="ph">{tag}</span>
      </span>
      <span>{text}</span>
    </>
  )
}
