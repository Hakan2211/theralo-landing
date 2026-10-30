import type { ReactNode } from 'react'
import { DOWNLOAD_URL, REPO_URL } from '@/lib/site'

const FAQ: [string, ReactNode][] = [
  [
    'Was kostet Theralo?',
    <>
      Theralo bieten wir Praxen, MVZ und Unternehmen an. Den Preis richten wir nach Ihrer Praxis: Kontaktieren Sie uns
      für Preisgestaltung und einen Kostenvoranschlag (siehe{' '}
      <a href="#preise" className="link">
        Preisgestaltung
      </a>
      ). Zum Ausprobieren laden Sie Theralo{' '}
      <a href={DOWNLOAD_URL} className="link">
        kostenlos herunter
      </a>
      .
    </>,
  ],
  [
    'Wie installiere ich Theralo?',
    <>
      Laden Sie <span className="strong">Theralo-setup-x64.exe</span> herunter (etwa 71 MB) und starten Sie die Datei.
      Windows zeigt möglicherweise „Der Computer wurde durch Windows geschützt“, weil Theralo noch nicht signiert ist:
      Klicken Sie auf <span className="strong">Weitere Informationen</span> und dann auf{' '}
      <span className="strong">Trotzdem ausführen</span>. Beim ersten Start erhalten Sie Ihr Notfall-Kit; drucken Sie es
      aus und bewahren Sie es sicher auf. „Mit Beispieldaten ausprobieren“ öffnet die Demo-Praxis.
    </>,
  ],
  [
    'Warum warnt Windows beim Installieren?',
    <>
      Die Installationsdatei ist noch nicht digital signiert. Den Quellcode finden Sie{' '}
      <a href={REPO_URL} className="link">
        öffentlich auf GitHub
      </a>
      .
    </>,
  ],
  [
    'Was braucht mein Computer?',
    'Windows 10 oder 11 (64 Bit), ein Mikrofon für Aufnahme und Diktat und etwa 1 GB freien Speicher für das Sprachmodell, das Sie einmalig in der App laden. Für lokale KI-Entwürfe empfehlen wir 32 GB RAM oder eine Grafikkarte mit genug Speicher; Theralo prüft die Hardware und empfiehlt ein passendes Modell. Optional: ein eigener KI-Schlüssel (OpenRouter oder Requesty).',
  ],
  [
    'Brauche ich Internet?',
    'Nein. Aufnahme, Transkription, Notizen und Export funktionieren offline. Nur KI-Entwürfe über einen Cloud-Anbieter brauchen Internet. Mit einem lokalen Modell geht auch das offline.',
  ],
  [
    'Schreibt die KI meinen Bericht?',
    'Sie schlägt Sätze vor, jeweils mit Quelle aus Ihren Notizen. Sie übernehmen, ändern oder verwerfen jeden Satz einzeln. Diagnosen und Medikation trägt sie nie ein, und unterschreiben tun nur Sie.',
  ],
  [
    'Was passiert mit den Aufnahmen?',
    'Sie werden verschlüsselt gespeichert und gelöscht, sobald Sie die Abschrift bestätigen.',
  ],
  ['Gibt es Theralo für Mac?', 'Derzeit nur für Windows.'],
]

/** Answers as reading text: each question is the run-in of its paragraph. */
export function Fragen() {
  return (
    <section id="fragen" className="row section" aria-labelledby="fragen-h">
      <div className="left">
        <h2 id="fragen-h" className="head" data-rise>
          Fragen und Antworten
        </h2>
      </div>
      <div className="faq-text">
        {FAQ.map(([q, a], i) => (
          <p key={q} data-rise style={{ ['--d' as string]: i % 3 }}>
            <b>{q}</b> {a}
          </p>
        ))}
      </div>
    </section>
  )
}
