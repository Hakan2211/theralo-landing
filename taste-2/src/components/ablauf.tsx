import { Bot, CalendarDays, Gauge, Mic } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { BrowserFrame } from './browser-frame'
import { Section } from './section'
import { Shot } from './shot'

const STEPS = [
  {
    id: 'aufnehmen',
    title: 'Aufnehmen oder diktieren',
    short: 'Mit Einwilligung die Sitzung, sonst ein kurzes Diktat danach.',
    points: ['Abschrift entsteht lokal auf Ihrem Computer', 'Die Stimme Ihrer Patient:innen verlässt das Gerät nie'],
    shot: 'aufnahme',
    alt: 'Theralo, Aufnahme einer Sitzung mit Pegel und dem Knopf zum Beenden',
  },
  {
    id: 'pruefen',
    title: 'Abschrift prüfen',
    short: 'Theralo trennt die Sprecher, Sie korrigieren und bestätigen.',
    points: ['Zeitmarken zum Nachhören', 'Nach dem Bestätigen wird das Audio gelöscht'],
    shot: 'abschrift',
    alt: 'Theralo, Abschrift mit Zeitmarken und den Sprechern Therapeut/in und Patient/in',
  },
  {
    id: 'autopilot',
    title: 'Der Autopilot schreibt vor',
    short: 'Sitzungsnotiz, Fakten mit Zeitmarke und eine Kurz-Zusammenfassung.',
    points: ['Jeder Vorschlag mit Quelle aus der Abschrift', 'Sie übernehmen, ändern, verwerfen und unterschreiben'],
    shot: 'notiz',
    alt: 'Theralo, Sitzungsnotiz mit KI-Vorschlägen, Zeitmarken und der Checkliste vor der Unterschrift',
  },
  {
    id: 'bericht',
    title: 'Zum Bericht mit dem Lotsen',
    short: 'Erst-, Umwandlungs- und Fortführungsantrag nach Muster PTV 3.',
    points: [],
    shot: 'board',
    alt: 'Theralo, Berichte als Board mit Fristen und dem Status „Bereit zur Prüfung“',
  },
]

const DAILY = [
  { icon: CalendarDays, title: 'Kalender', text: 'Termine und Serien, Heute-Ansicht mit fälligen Aufgaben.' },
  { icon: Gauge, title: 'Kontingent', text: 'Zählt die Sitzungen und erinnert an Umwandlung und Fortführung.' },
  { icon: Mic, title: 'Diktat überall', text: 'Live und lokal, in jedem Textfeld.' },
  { icon: Bot, title: 'Assistent', text: 'Beantwortet Fragen und macht nur Vorschläge, die Sie bestätigen.' },
]

export function Ablauf() {
  return (
    <Section
      id="ablauf"
      eyebrow="So geht’s"
      title="Von der Sitzung zum Bericht in vier Schritten"
      lead="Theralo nimmt Ihnen die Routine ab und lässt Ihnen jede Entscheidung."
    >
      {/* Desktop: the steps are tabs, the screen beside them changes. */}
      <Tabs defaultValue={STEPS[0].id} orientation="vertical" className="rise mt-14 hidden gap-10 lg:flex lg:flex-row">
        <TabsList className="h-fit w-[340px] shrink-0 gap-2 bg-transparent p-0">
          {STEPS.map((s, i) => (
            <TabsTrigger
              key={s.id}
              value={s.id}
              className="group h-auto items-start gap-4 rounded-xl border border-transparent px-4 py-4 text-left whitespace-normal text-foreground after:hidden hover:bg-card/60 data-[state=active]:border-border data-[state=active]:bg-card data-[state=active]:shadow-sm"
            >
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-semibold text-muted-foreground group-data-[state=active]:bg-primary group-data-[state=active]:text-primary-foreground">
                {i + 1}
              </span>
              <span className="flex flex-col gap-1">
                <span className="text-base font-semibold">{s.title}</span>
                <span className="text-[15px] leading-snug font-normal text-muted-foreground">{s.short}</span>
              </span>
            </TabsTrigger>
          ))}
        </TabsList>
        {STEPS.map((s) => (
          <TabsContent key={s.id} value={s.id} className="min-w-0 animate-in fade-in-0 duration-300">
            <BrowserFrame>
              <Shot name={s.shot} alt={s.alt} sizes="(min-width: 1280px) 780px, 60vw" />
            </BrowserFrame>
            <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[15px] text-muted-foreground">
              {s.points.map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </TabsContent>
        ))}
      </Tabs>

      {/* Phones and tablets: one card per step. */}
      <ol className="mt-12 grid gap-6 lg:hidden">
        {STEPS.map((s, i) => (
          <li key={s.id} className="rise overflow-hidden rounded-xl border bg-card shadow-xs">
            <div className="p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  {i + 1}
                </span>
                <h3 className="t-h3">{s.title}</h3>
              </div>
              <p className="mt-3 text-base text-muted-foreground">{s.short}</p>
              <ul className="mt-3 grid gap-1.5 text-[15px] text-muted-foreground">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t bg-sidebar">
              <Shot name={s.shot} alt={s.alt} sizes="100vw" />
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-20">
        <h3 className="t-h3 rise">Und im Alltag</h3>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {DAILY.map(({ icon: Icon, title, text }) => (
            <li key={title} className="rise rounded-xl border bg-card p-5 shadow-xs">
              <Icon className="size-5 text-primary" aria-hidden="true" />
              <p className="mt-3 font-semibold">{title}</p>
              <p className="mt-1 text-[15px] leading-snug text-muted-foreground">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
