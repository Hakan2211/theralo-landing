import type { ReactNode } from 'react'
import { DOWNLOAD_SIZE, DOWNLOAD_URL, RELEASES_URL } from '@/lib/site'

const FAQ: [string, ReactNode][] = [
  [
    'Wie installiere ich thera?',
    <ul className="tab-list space-y-2">
      <li>
        <a href={DOWNLOAD_URL} className="link">
          thera-setup-x64.exe
        </a>{' '}
        herunterladen ({DOWNLOAD_SIZE}) und starten.
      </li>
      <li>
        Windows zeigt vielleicht „Der Computer wurde durch Windows geschützt“, weil thera noch nicht signiert ist. Klicken
        Sie auf <strong>Weitere Informationen</strong> und dann auf <strong>Trotzdem ausführen</strong>.
      </li>
      <li>Beim ersten Start erhalten Sie Ihr Notfall-Kit. Drucken Sie es aus und bewahren Sie es sicher auf.</li>
      <li>„Mit Beispieldaten ausprobieren“ öffnet die Demo-Praxis.</li>
    </ul>,
  ],
  [
    'Was braucht mein Computer?',
    <ul className="tab-list space-y-2">
      <li>Windows 10 oder 11, 64 Bit, und ein Mikrofon für Aufnahme und Diktat.</li>
      <li>Etwa 1 GB freien Speicher für das Sprachmodell, das Sie einmal in der App laden.</li>
      <li>Für lokale KI-Entwürfe 32 GB RAM oder eine Grafikkarte mit genug Speicher; thera prüft das und empfiehlt ein Modell.</li>
      <li>Für Cloud-Entwürfe einen eigenen Schlüssel bei OpenRouter oder Requesty.</li>
    </ul>,
  ],
  [
    'Was kostet die KI-Nutzung?',
    'Sie zahlen direkt beim Anbieter Ihrer Wahl, oft wenige Cent pro Notiz. thera zeigt die Kosten nach Aufgabe und Modell. Mit einem lokalen Modell fallen keine KI-Kosten an.',
  ],
  [
    'Brauche ich Internet?',
    'Nein. Aufnahme, Transkription, Notizen und Export funktionieren offline. Nur KI-Entwürfe über einen Cloud-Anbieter brauchen Internet; mit einem lokalen Modell geht auch das offline.',
  ],
  [
    'Schreibt die KI meinen Bericht?',
    'Sie schlägt Sätze vor, jeweils mit Quelle aus Ihren Notizen. Sie übernehmen, ändern oder verwerfen jeden Satz einzeln. Diagnosen und Medikation trägt sie nie ein, und unterschreiben tun nur Sie.',
  ],
  ['Was passiert mit den Aufnahmen?', 'Sie werden verschlüsselt gespeichert und gelöscht, sobald Sie die Abschrift bestätigen.'],
  [
    'Warum warnt Windows beim Installieren?',
    <>
      Die Installationsdatei ist noch nicht digital signiert. Den Quellcode und alle Versionen finden Sie öffentlich auf{' '}
      <a href={RELEASES_URL} className="link">
        GitHub
      </a>
      .
    </>,
  ],
  ['Gibt es thera für Mac?', 'Derzeit nur für Windows.'],
]

export function Fragen() {
  return (
    <section id="fragen" className="frame scroll-mt-4 pt-[clamp(120px,14vw,200px)]" aria-labelledby="fragen-h">
      <div className="grid gap-8 md:grid-cols-12">
        <h2 id="fragen-h" data-rise className="font-serif text-head leading-[1.02] tracking-[-0.02em] md:sticky md:top-24 md:col-span-4 md:self-start ">
          Fragen
        </h2>
        <div className="space-y-[6px] md:col-span-8 md:space-y-2">
          {FAQ.map(([q, a], i) => (
            <details key={q} name="faq" open={i === 0} data-rise style={{ '--i': i } as never} className="faq group bg-tile open:bg-accent open:text-white">
              <summary className="flex min-h-16 cursor-pointer items-center justify-between gap-6 px-5 py-4 text-body font-medium md:min-h-[72px] md:px-6 md:text-lead">
                {q}
                <span aria-hidden className="relative size-4 shrink-0">
                  <span className="absolute top-[6.5px] left-0 h-[3px] w-4 bg-current" />
                  <span className="absolute top-[6.5px] left-0 h-[3px] w-4 rotate-90 bg-current transition-transform duration-200 ease-[var(--ease-out)] group-open:rotate-0" />
                </span>
              </summary>
              <div className="max-w-[52ch] px-5 pb-6 text-small leading-relaxed md:px-6 md:text-body">{a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
