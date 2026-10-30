import type { ReactNode } from 'react'

function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="m3 8.5 3.2 3L13 4.5" />
    </svg>
  )
}

const LINES = [
  ['00:00', 'T', 'Du hattest geschrieben, dass die Woche anstrengend war. Magst du erzählen?'],
  ['00:12', 'P', 'Am Dienstag war die Mathearbeit. Ich hatte schon am Abend vorher Bauchschmerzen.'],
  ['00:24', 'P', 'Morgens wollte ich eigentlich nicht in die Schule, aber meine Mutter hat mich gefahren.'],
]

const STEPS: { say: string; text: string; label: string; call: string; chip?: string; resp: ReactNode; wide?: boolean }[] = [
  {
    say: 'Zuerst nehmen Sie auf oder diktieren.',
    text: 'Mit Einwilligung nehmen Sie die Sitzung auf, sonst diktieren Sie danach eine kurze Zusammenfassung. Die Abschrift entsteht auf Ihrem Computer; die Stimme Ihrer Patient:innen verlässt das Gerät nie (Cloud-Transkription nur mit eigener Einwilligung).',
    label: 'Aufnahme',
    call: 'Sitzung · 00:36',
    chip: 'Beenden',
    resp: (
      <div data-ui className="frag">
        <div className="frag-head">
          <span>Abschrift</span>
          <span className="frag-note">auf diesem Computer erstellt</span>
        </div>
        {LINES.map(([t, who, line]) => (
          <div key={t} className="t-row">
            <span className="t-time">{t}</span>
            <span className="t-who">{who}</span>
            <span>{line}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    say: 'Dann prüfen Sie die Abschrift.',
    text: 'Theralo trennt die Sprecher. Sie korrigieren und bestätigen. Danach wird das Audio gelöscht.',
    label: 'Ihre Korrektur',
    call: 'P: Am Dienstag war die Mathearbeit. Ich hatte schon am Abend vorher Bauchschmerzen.',
    chip: 'Bestätigen',
    resp: (
      <div data-ui className="frag ok">
        <Check />
        <span>Abschrift bestätigt. Die Aufnahme wurde gelöscht.</span>
      </div>
    ),
  },
  {
    say: 'Danach schreibt der Autopilot vor.',
    text: 'Sitzungsnotiz, vorgeschlagene Fakten mit Quellenangabe und eine kurze Zusammenfassung. Sie übernehmen, ändern oder verwerfen, und Sie unterschreiben.',
    label: 'Sitzungsnotiz',
    call: 'KI-Vorschläge aus der Abschrift',
    chip: 'Neu vorschlagen',
    resp: (
      <img
        className="shot"
        src="/screens/crops/fakten.png"
        width={1316}
        height={824}
        loading="lazy"
        alt="KI-Vorschläge aus der Abschrift: Fakten mit Zeitmarke 00:12 und Zuordnung zu einem Bericht-Abschnitt"
      />
    ),
  },
  {
    say: 'Zum Schluss schreiben Sie den Bericht mit dem Lotsen.',
    text: 'Fragen vor dem Entwurf, Abschnitte Satz für Satz, eine KI-Prüfung aus Sicht der Gutachterin bzw. des Gutachters und der Export im Format des Musters PTV 3, als PDF oder Word.',
    label: 'Was fehlt noch? Warum reicht die Kurzzeittherapie nicht aus?',
    call: 'Frühmorgendliches Erwachen, Grübeln über Überforderung im Beruf',
    wide: true,
    resp: (
      <img
        className="shot"
        src="/screens/crops/check.png"
        width={1192}
        height={814}
        loading="lazy"
        alt="Gutachter-Check: offene Abschnitte und die Frage, die ein Gutachter stellen würde"
      />
    ),
  },
]

/** Call and response: what you give Theralo, and what comes back. The explanation hangs left of the axis. */
export function Ablauf() {
  return (
    <section id="ablauf" className="section" aria-labelledby="ablauf-h" style={{ paddingInline: 'var(--m)' }}>
      <div className="step-head">
        <p className="lead note" data-rise>
          Berichte an den Gutachter kosten Abende und Wochenenden. Die Inhalte stehen längst in den Sitzungen, nur
          nicht in der Form, die der Antrag verlangt. Theralo nimmt Ihnen die Routine ab und lässt Ihnen jede
          Entscheidung.
        </p>
        <h2 id="ablauf-h" className="head" data-rise>
          So entsteht ein Bericht
        </h2>
      </div>
      <ol className="steps">
        {STEPS.map((s) => (
          <li key={s.say} className="step">
            <p className="say" data-rise>
              {s.say}
            </p>
            <p className="note" data-rise style={{ ['--d' as string]: 1 }}>
              {s.text}
            </p>
            <div className="call" data-rise style={{ ['--d' as string]: 1 }}>
              <p className="small muted">{s.label}</p>
              <div className="call-field">
                <span>{s.call}</span>
                {s.chip && <span className="chip">{s.chip}</span>}
              </div>
            </div>
            <div className={'resp' + (s.wide ? ' wide' : '')} data-rise style={{ ['--d' as string]: 2 }}>
              {s.resp}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
