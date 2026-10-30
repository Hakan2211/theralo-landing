import { useState } from 'react'

const BANDS = [
  {
    cls: 'b-person',
    line: 'Alles bleibt auf Ihrem Computer.',
    cons: 'Datenbank und Aufnahmen verschlüsselt mit AES-256. Kein Konto, keine Cloud-Datenbank, kein Server von uns.',
  },
  {
    cls: 'b-ort',
    line: 'Sie wählen die KI selbst.',
    cons: 'Ein eigener Schlüssel bei OpenRouter (nur Endpunkte ohne Datenspeicherung) oder Requesty, oder ein lokales Modell ganz ohne Internet. Die Kosten sehen Sie in der App, nach Aufgabe und Modell.',
  },
  {
    cls: 'b-datum',
    line: 'Manches geht nie an die KI.',
    cons: 'Tonaufnahmen mit Patientenstimme (außer mit Einwilligung zur Cloud-Transkription), Diagnosen und Medikation, die Zuordnung der Platzhalter.',
  },
  {
    cls: 'b-pat',
    line: 'Das Notfall-Kit liegt bei Ihnen.',
    cons: 'Verschlüsselte Datensicherung, etwa auf einen USB-Stick. Wiederherstellung auf einem neuen Computer mit dem Notfall-Schlüssel.',
  },
]

/** Sentences with switches: each switch shows what the sentence means in practice. */
export function Schalter() {
  const [on, setOn] = useState([true, false, true, false])
  return (
    <section aria-label="Datenschutz im Einzelnen">
      {BANDS.map((b, i) => (
        <div key={b.cls} className={`band ${b.cls}`} data-on={on[i]}>
          <div className="band-text">
            <p id={`band-${i}`}>{b.line}</p>
            <div className="cons" id={`band-cons-${i}`}>
              <p>{b.cons}</p>
            </div>
          </div>
          <button
            type="button"
            role="switch"
            className="band-switch"
            data-ui
            aria-checked={on[i]}
            aria-labelledby={`band-${i}`}
            aria-describedby={`band-cons-${i}`}
            onClick={() => setOn((o) => o.map((v, j) => (j === i ? !v : v)))}
          >
            <span className="sw" aria-hidden="true" />
          </button>
        </div>
      ))}
    </section>
  )
}
