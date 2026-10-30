import type { ReactNode } from 'react'
import { DOWNLOAD_SIZE, DOWNLOAD_URL, REPO_URL } from '@/lib/site'

const QA: { q: string; a: ReactNode }[] = [
  {
    q: 'Wie installiere ich Theralo?',
    a: (
      <ol>
        <li>
          <a className="link" href={DOWNLOAD_URL}>
            Herunterladen
          </a>
          : Theralo-setup-x64.exe (etwa {DOWNLOAD_SIZE}).
        </li>
        <li>
          Starten. Windows zeigt möglicherweise „Der Computer wurde durch Windows geschützt“, weil Theralo noch nicht
          signiert ist. Klicken Sie auf „Weitere Informationen“ und dann auf „Trotzdem ausführen“.
        </li>
        <li>Einrichten: Beim ersten Start erhalten Sie Ihr Notfall-Kit. Drucken Sie es aus und bewahren Sie es sicher auf.</li>
        <li>Ausprobieren: „Mit Beispieldaten ausprobieren“ öffnet die Demo-Praxis.</li>
      </ol>
    ),
  },
  {
    q: 'Was braucht mein Computer?',
    a: (
      <>
        <p>
          Windows 10 oder 11 (64 Bit), ein Mikrofon für Aufnahme und Diktat und etwa 1 GB freien Speicher für das
          Sprachmodell (einmaliger Download in der App).
        </p>
        <p>
          Für lokale KI-Entwürfe empfehlen wir 32 GB RAM oder eine Grafikkarte mit genug Speicher; Theralo prüft die
          Hardware und empfiehlt ein passendes Modell. Optional: ein eigener KI-Schlüssel (OpenRouter/Requesty).
        </p>
      </>
    ),
  },
  {
    q: 'Was kostet Theralo?',
    a: (
      <p>
        Theralo bieten wir Praxen, MVZ und Unternehmen an. Den Preis richten wir nach Ihrer Praxis: Kontaktieren Sie uns für
        Preisgestaltung und einen Kostenvoranschlag (siehe{' '}
        <a className="link" href="#preise">
          Preisgestaltung
        </a>
        ). Zum Ausprobieren laden Sie Theralo kostenlos herunter.
      </p>
    ),
  },
  {
    q: 'Brauche ich Internet?',
    a: (
      <p>
        Nein. Aufnahme, Transkription, Notizen und Export funktionieren offline. Nur KI-Entwürfe über einen Cloud-Anbieter
        brauchen Internet. Mit einem lokalen Modell geht auch das offline.
      </p>
    ),
  },
  {
    q: 'Schreibt die KI meinen Bericht?',
    a: (
      <p>
        Sie schlägt Sätze vor, jeweils mit Quelle aus Ihren Notizen. Sie übernehmen, ändern oder verwerfen jeden Satz
        einzeln. Diagnosen und Medikation trägt sie nie ein, und unterschreiben tun nur Sie.
      </p>
    ),
  },
  {
    q: 'Was passiert mit den Aufnahmen?',
    a: <p>Sie werden verschlüsselt gespeichert und gelöscht, sobald Sie die Abschrift bestätigen.</p>,
  },
  {
    q: 'Gibt es Theralo für Mac?',
    a: <p>Derzeit nur für Windows.</p>,
  },
  {
    q: 'Warum warnt Windows beim Installieren?',
    a: (
      <p>
        Die Installationsdatei ist noch nicht digital signiert. Den Quellcode finden Sie öffentlich auf{' '}
        <a className="link" href={REPO_URL}>
          GitHub
        </a>
        .
      </p>
    ),
  },
]

export function Fragen() {
  return (
    <section id="fragen" aria-labelledby="fragen-title">
      <div className="faq-head">
        <h2 id="fragen-title" className="t-head" data-rise>
          Fragen und Antworten
        </h2>
      </div>
      <div>
        {QA.map((x) => (
          <div key={x.q} className="qa grid">
            <h3 data-rise>{x.q}</h3>
            <div className="a" data-rise style={{ ['--d' as string]: 1 }}>
              {x.a}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
