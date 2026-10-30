import { createFileRoute } from '@tanstack/react-router'
import type { ReactNode } from 'react'
import { DOWNLOAD_SIZE, DOWNLOAD_URL, RELEASES_URL, VERSION, VIDEO_URL } from '@/lib/site'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <main>
      <Hero />
      <Steps />
      <Features />
      <Privacy />
      <Video />
      <Install />
      <Faq />
      <FinalCta />
    </main>
  )
}

function DownloadButton({ large }: { large?: boolean }) {
  return (
    <a
      href={DOWNLOAD_URL}
      className={
        'inline-flex items-center gap-2.5 rounded-xl bg-teal font-medium text-white shadow-sm hover:bg-teal-dark ' +
        (large ? 'px-6 py-3.5 text-base' : 'px-5 py-3 text-sm')
      }
    >
      <WindowsIcon />
      Für Windows herunterladen
    </a>
  )
}

function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-16 pb-20 md:pt-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-5 inline-block rounded-full bg-teal-tint px-3 py-1 text-xs font-medium text-teal-dark">
          Für Psychotherapeut:innen · Berichte nach Muster PTV 3
        </p>
        <h1 className="font-serif text-5xl leading-[1.05] md:text-7xl">Dokumentation, die in der Praxis bleibt.</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-soft">
          Sitzungen aufnehmen, Notizen in Minuten statt Stunden und Berichte an den Gutachter Schritt für Schritt, mit
          KI-Unterstützung. Ihre Daten bleiben verschlüsselt auf Ihrem Computer.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <DownloadButton large />
          <a href="#video" className="inline-flex items-center gap-2 rounded-xl px-5 py-3.5 font-medium text-ink hover:bg-ink/5">
            <PlayIcon /> Video ansehen (5 Min.)
          </a>
        </div>
        <p className="mt-3 text-xs text-ink-soft">
          Version {VERSION} · Windows 10/11 · {DOWNLOAD_SIZE}
        </p>
      </div>
      <Screen src="/screens/heute.png" alt="Die Seite „Heute“ mit Terminen, Aufgaben und fälligen Anträgen" className="mt-14" />
      <ul className="mx-auto mt-10 grid max-w-4xl gap-4 text-sm text-ink-soft sm:grid-cols-3">
        <Trust>Lokal verschlüsselt (AES-256)</Trust>
        <Trust>Pseudonymisiert vor jeder KI-Anfrage</Trust>
        <Trust>Diagnosen tragen nur Sie ein</Trust>
      </ul>
    </section>
  )
}

function Trust({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-center justify-center gap-2">
      <span className="text-teal"><CheckIcon /></span> {children}
    </li>
  )
}

function Screen({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <figure className={'overflow-hidden rounded-xl border border-line bg-white shadow-[0_20px_60px_-25px_rgba(35,39,43,0.35)] ' + className}>
      <div className="flex h-8 items-center gap-1.5 border-b border-line bg-paper px-3">
        <span className="size-2.5 rounded-full bg-line" />
        <span className="size-2.5 rounded-full bg-line" />
        <span className="size-2.5 rounded-full bg-line" />
      </div>
      <img src={src} alt={alt} loading="lazy" width={1280} height={800} className="block h-auto w-full" />
    </figure>
  )
}

function SectionTitle({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="text-sm font-medium tracking-wide text-teal uppercase">{eyebrow}</p>
      <h2 className="mt-3 font-serif text-4xl md:text-5xl">{title}</h2>
      {children && <p className="mt-4 text-lg text-ink-soft">{children}</p>}
    </div>
  )
}

const STEPS = [
  {
    title: 'Aufnehmen oder diktieren',
    text: 'Mit Einwilligung nehmen Sie die Sitzung auf, sonst diktieren Sie danach eine kurze Zusammenfassung. Die Abschrift entsteht auf Ihrem Computer.',
  },
  {
    title: 'Abschrift prüfen',
    text: 'Theralo trennt die Sprecher. Sie korrigieren und bestätigen. Danach wird das Audio gelöscht.',
  },
  {
    title: 'Der Autopilot schreibt vor',
    text: 'Sitzungsnotiz, Fakten mit Quellenangabe und eine kurze Zusammenfassung. Sie übernehmen, ändern oder verwerfen und unterschreiben.',
  },
  {
    title: 'Bericht mit dem Lotsen',
    text: 'Fragen vor dem Entwurf, Abschnitte Satz für Satz, ein Gutachter-Check und Export nach Muster PTV 3 als PDF oder Word.',
  },
]

function Steps() {
  return (
    <section className="border-y border-line bg-white py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle eyebrow="So funktioniert's" title="Von der Sitzung zum Bericht">
          Berichte an den Gutachter kosten Abende und Wochenenden. Die Inhalte stehen längst in den Sitzungen. Theralo
          nimmt Ihnen die Routine ab und lässt Ihnen jede Entscheidung.
        </SectionTitle>
        <ol className="grid gap-6 md:grid-cols-4">
          {STEPS.map((s, i) => (
            <li key={s.title} className="rounded-xl border border-line bg-paper p-6">
              <span className="flex size-9 items-center justify-center rounded-full bg-teal text-sm font-semibold text-white">
                {i + 1}
              </span>
              <h3 className="mt-4 font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

const SHOWCASE = [
  {
    screen: '/screens/lotse.png',
    alt: 'Bericht-Lotse: KI-Entwurf eines Abschnitts, Satz für Satz zu prüfen',
    title: 'Bericht-Lotse für PTV 3',
    text: 'Erst-, Umwandlungs- und Fortführungsantrag. Die KI entwirft leere Abschnitte aus Ihren unterschriebenen Notizen, jeder Satz mit Quelle. Sie gehen die Vorschläge Satz für Satz durch.',
  },
  {
    screen: '/screens/notiz.png',
    alt: 'Sitzungsnotiz mit vorgeschlagenen Fakten und Zeitmarken in der Abschrift',
    title: 'Sitzungsnotiz mit Fakten',
    text: 'Nach der Sitzung schlägt der Autopilot Fakten vor. Jeder verweist auf die Stelle in der Abschrift. Was stimmt, übernehmen Sie mit einem Klick.',
  },
  {
    screen: '/screens/pruefen.png',
    alt: 'Gutachter-Check: Hinweise, was ein Gutachter nachfragen würde',
    title: 'Gutachter-Check',
    text: 'Die KI liest den Bericht wie ein Gutachter und nennt, was nachgefragt würde. Den Text ändert sie nicht.',
  },
]

const MORE = [
  ['Kontingent im Blick', 'Theralo zählt die Sitzungen und erinnert rechtzeitig an Umwandlungs- und Fortführungsanträge.'],
  ['Heute, Kalender, Verlauf', 'Termine und Serien, Aufgaben und fällige Abschriften auf einen Blick. Der Verlauf zeigt jede Sitzung kurz zusammengefasst.'],
  ['Diktat überall', 'Live-Diktat, lokal auf Ihrem Computer.'],
  ['Assistent', 'Beantwortet Fragen zu Terminen und Behandlungen und macht nur Vorschläge, die Sie bestätigen.'],
  ['Demo-Praxis', 'Probieren Sie alles mit erfundenen Beispieldaten aus, getrennt von Ihren echten Daten.'],
  ['Hilfe ohne Internet', 'Hilfe, Rundgang und Befehlssuche mit Strg + K.'],
]

function Features() {
  return (
    <section id="funktionen" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
      <SectionTitle eyebrow="Funktionen" title="Weniger Schreibarbeit, volle Kontrolle" />
      <div className="space-y-24">
        {SHOWCASE.map((f, i) => (
          <div key={f.title} className="grid items-center gap-10 md:grid-cols-5">
            <div className={'md:col-span-2 ' + (i % 2 ? 'md:order-2' : '')}>
              <h3 className="font-serif text-3xl">{f.title}</h3>
              <p className="mt-4 leading-relaxed text-ink-soft">{f.text}</p>
            </div>
            <Screen src={f.screen} alt={f.alt} className="md:col-span-3" />
          </div>
        ))}
      </div>
      <div className="mt-24 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {MORE.map(([title, text]) => (
          <div key={title} className="bg-paper p-6">
            <h3 className="font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

const PRIVACY = [
  ['Alles bleibt auf Ihrem Computer.', 'Datenbank und Aufnahmen sind verschlüsselt (AES-256). Kein Konto, keine Cloud-Datenbank, kein Server von uns.'],
  ['Pseudonymisiert vor jeder KI-Anfrage.', 'Namen, Orte, Arbeitgeber und Datumsangaben werden durch Platzhalter wie [PERSON_1] ersetzt. Die Zuordnung verlässt den Computer nie.'],
  ['Sie wählen die KI.', 'Ein eigener Schlüssel bei OpenRouter (nur Endpunkte ohne Datenspeicherung) oder Requesty, oder ein lokales Modell ganz ohne Internet.'],
  ['Nie an die KI:', 'Tonaufnahmen mit Patientenstimme (außer mit Einwilligung zur Cloud-Transkription), Diagnosen und Medikation, die Zuordnung der Platzhalter.'],
  ['Notfall-Kit und Datensicherung.', 'Verschlüsselte Sicherung, etwa auf einen USB-Stick. Wiederherstellung auf einem neuen Computer mit dem Notfall-Schlüssel.'],
  ['Protokoll.', 'Jede Änderung und jede KI-Anfrage wird ohne Inhalte in einer manipulationssicheren Kette protokolliert.'],
]

function Privacy() {
  return (
    <section id="datenschutz" className="scroll-mt-16 bg-night py-24 text-[#ece9e3]">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <p className="text-sm font-medium tracking-wide text-[#8fcfc8] uppercase">Datenschutz · § 203 StGB</p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">Ihre Schweigepflicht ist eingebaut.</h2>
            <p className="mt-5 text-lg text-[#a29d94]">
              Unter „Was wurde gesendet?“ sehen Sie genau, welcher Text Ihren Computer verlassen hat, pseudonymisiert.
            </p>
            <figure className="mt-10 overflow-hidden rounded-xl border border-white/10">
              <img src="/screens/gesendet.png" alt="Dialog „Was wurde gesendet?“ mit dem pseudonymisierten Text" loading="lazy" width={1280} height={800} className="block h-auto w-full" />
            </figure>
          </div>
          <dl className="space-y-7 self-center">
            {PRIVACY.map(([title, text]) => (
              <div key={title} className="flex gap-4">
                <span className="mt-1 text-[#8fcfc8]">
                  <CheckIcon />
                </span>
                <div>
                  <dt className="font-semibold text-white">{title}</dt>
                  <dd className="mt-1 leading-relaxed text-[#a29d94]">{text}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

function Video() {
  return (
    <section id="video" className="mx-auto max-w-5xl scroll-mt-20 px-5 py-24">
      <SectionTitle eyebrow="Video" title="Theralo in 5 Minuten">
        Ein Rundgang durch die Demo-Praxis, von der Aufnahme bis zum fertigen Bericht. Alle Personen sind erfunden.
      </SectionTitle>
      <video
        controls
        preload="metadata"
        poster="/screens/heute.png"
        className="aspect-video w-full rounded-xl border border-line bg-black shadow-[0_20px_60px_-25px_rgba(35,39,43,0.35)]"
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>
    </section>
  )
}

const INSTALL = [
  ['Herunterladen', <>Die Datei <code className="rounded bg-ink/5 px-1">Theralo-setup-x64.exe</code> (etwa {DOWNLOAD_SIZE}).</>],
  [
    'Starten',
    <>
      Windows zeigt möglicherweise „Der Computer wurde durch Windows geschützt“, weil Theralo noch nicht signiert ist. Klicken
      Sie auf <strong>Weitere Informationen</strong> und dann auf <strong>Trotzdem ausführen</strong>.
    </>,
  ],
  ['Einrichten', 'Beim ersten Start erhalten Sie Ihr Notfall-Kit. Drucken Sie es aus und bewahren Sie es sicher auf.'],
  ['Ausprobieren', '„Mit Beispieldaten ausprobieren“ öffnet die Demo-Praxis.'],
] as const

function Install() {
  return (
    <section className="border-y border-line bg-white py-24">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 lg:grid-cols-2">
        <div>
          <p className="text-sm font-medium tracking-wide text-teal uppercase">Installation</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">In vier Schritten startklar</h2>
          <div className="mt-8">
            <DownloadButton />
            <p className="mt-3 text-sm text-ink-soft">
              Ältere Versionen und Änderungen: <a href={RELEASES_URL} className="text-teal underline-offset-2 hover:underline">GitHub Releases</a>
            </p>
          </div>
          <div className="mt-10 rounded-xl border border-line bg-paper p-6 text-sm">
            <h3 className="font-semibold">Systemvoraussetzungen</h3>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-ink-soft">
              <li>Windows 10 oder 11 (64 Bit)</li>
              <li>Mikrofon für Aufnahme und Diktat</li>
              <li>Etwa 1 GB freier Speicher für das Sprachmodell (einmaliger Download in der App)</li>
              <li>Für lokale KI-Entwürfe: 32 GB RAM oder eine Grafikkarte mit genug Speicher</li>
              <li>Optional: ein eigener KI-Schlüssel (OpenRouter oder Requesty)</li>
            </ul>
          </div>
        </div>
        <ol className="space-y-6 self-center">
          {INSTALL.map(([title, text], i) => (
            <li key={title} className="flex gap-5">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-teal text-sm font-semibold text-teal">
                {i + 1}
              </span>
              <div>
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-1 leading-relaxed text-ink-soft">{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

const FAQ = [
  [
    'Was kostet die KI-Nutzung?',
    'Die KI-Nutzung zahlen Sie direkt beim Anbieter Ihrer Wahl, oft wenige Cent pro Notiz. Theralo zeigt die Kosten nach Aufgabe und Modell. Mit einem lokalen Modell fallen keine KI-Kosten an.',
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
  ['Gibt es Theralo für Mac?', 'Derzeit nur für Windows.'],
  [
    'Warum warnt Windows beim Installieren?',
    'Die Installationsdatei ist noch nicht digital signiert. Den Quellcode finden Sie öffentlich auf GitHub.',
  ],
]

function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl scroll-mt-20 px-5 py-24">
      <SectionTitle eyebrow="FAQ" title="Häufige Fragen" />
      <div className="divide-y divide-line border-y border-line">
        {FAQ.map(([q, a]) => (
          <details key={q} className="group py-5">
            <summary className="flex cursor-pointer items-center justify-between gap-4 font-medium">
              {q}
              <span className="text-xl text-teal transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 leading-relaxed text-ink-soft">{a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

function FinalCta() {
  return (
    <section className="px-5 pb-24">
      <div className="mx-auto max-w-6xl rounded-2xl bg-teal px-6 py-16 text-center text-white">
        <h2 className="font-serif text-4xl md:text-5xl">Probieren Sie Theralo in der Demo-Praxis aus.</h2>
        <p className="mx-auto mt-4 max-w-xl text-white/80">Erfundene Beispieldaten, getrennt von Ihren echten Daten. Kein Konto nötig.</p>
        <a
          href={DOWNLOAD_URL}
          className="mt-8 inline-flex items-center gap-2.5 rounded-xl bg-white px-6 py-3.5 font-medium text-teal-dark hover:bg-paper"
        >
          <WindowsIcon /> Für Windows herunterladen
        </a>
      </div>
    </section>
  )
}

function WindowsIcon() {
  return (
    <svg viewBox="0 0 16 16" className="size-4" fill="currentColor" aria-hidden>
      <path d="M0 2.3 6.5 1.4v6.2H0zM7.3 1.3 16 0v7.6H7.3zM0 8.4h6.5v6.2L0 13.7zM7.3 8.4H16V16l-8.7-1.2z" />
    </svg>
  )
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 20 20" className="size-5" fill="currentColor" aria-hidden>
      <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-1.5-11.2 5 3.2-5 3.2z" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" className="size-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
      <path d="m4.5 10.5 3.5 3.5 7.5-8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
