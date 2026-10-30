import type { ReactNode } from 'react'
import { REPO_URL } from '@/lib/site'

const FAQ: { q: string; a: ReactNode }[] = [
  {
    q: 'Was kostet Theralo?',
    a: (
      <>
        Theralo bieten wir Praxen, MVZ und Unternehmen an. Den Preis richten wir nach Ihrer Praxis: Kontaktieren Sie
        uns für Preisgestaltung und einen Kostenvoranschlag (siehe{' '}
        <a href="#preise" className="link">
          Preisgestaltung
        </a>
        ). Zum Ausprobieren laden Sie Theralo kostenlos herunter.
      </>
    ),
  },
  {
    q: 'Wie installiere ich Theralo?',
    a: 'Laden Sie Theralo-setup-x64.exe herunter (etwa 71 MB) und starten Sie die Datei. Beim ersten Start erhalten Sie Ihr Notfall-Kit: Drucken Sie es aus und bewahren Sie es sicher auf. „Mit Beispieldaten ausprobieren“ öffnet danach die Demo-Praxis.',
  },
  {
    q: 'Warum warnt Windows beim Installieren?',
    a: (
      <>
        Windows zeigt möglicherweise „Der Computer wurde durch Windows geschützt“, weil die Installationsdatei noch
        nicht digital signiert ist. Klicken Sie auf „Weitere Informationen“ und dann auf „Trotzdem ausführen“. Den
        Quellcode finden Sie öffentlich auf{' '}
        <a href={REPO_URL} className="link">
          GitHub
        </a>
        .
      </>
    ),
  },
  {
    q: 'Was braucht mein Computer?',
    a: 'Windows 10 oder 11 (64 Bit), ein Mikrofon für Aufnahme und Diktat und etwa 1 GB freien Speicher für das Sprachmodell (einmaliger Download in der App). Für lokale KI-Entwürfe sind 32 GB RAM oder eine Grafikkarte mit genug Speicher empfohlen; Theralo prüft die Hardware und empfiehlt ein passendes Modell. Optional: ein eigener KI-Schlüssel (OpenRouter/Requesty).',
  },
  {
    q: 'Brauche ich Internet?',
    a: 'Nein. Aufnahme, Transkription, Notizen und Export funktionieren offline. Nur KI-Entwürfe über einen Cloud-Anbieter brauchen Internet. Mit einem lokalen Modell geht auch das offline.',
  },
  {
    q: 'Schreibt die KI meinen Bericht?',
    a: 'Sie schlägt Sätze vor, jeweils mit Quelle aus Ihren Notizen. Sie übernehmen, ändern oder verwerfen jeden Satz einzeln. Diagnosen und Medikation trägt sie nie ein, und unterschreiben tun nur Sie.',
  },
  {
    q: 'Was passiert mit den Aufnahmen?',
    a: 'Sie werden verschlüsselt gespeichert und gelöscht, sobald Sie die Abschrift bestätigen.',
  },
  {
    q: 'Gibt es Theralo für Mac?',
    a: 'Derzeit nur für Windows.',
  },
]

/** Questions and answers set as reading text, like the notes at the back of a programme. */
export function Fragen() {
  return (
    <section id="fragen" className="faq frame" aria-labelledby="fragen-h">
      <h2 id="fragen-h" className="t-head" data-rise>
        Fragen und Antworten
      </h2>
      <div className="faq-text">
        {FAQ.map((f, i) => (
          <p key={f.q} data-rise style={{ '--i': i % 4 } as never}>
            <b>{f.q}</b> {f.a}
          </p>
        ))}
      </div>
    </section>
  )
}
