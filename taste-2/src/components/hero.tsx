import { Clock, Lock, MessageSquareQuote, PenLine, PlayCircle, ShieldCheck, UserCheck } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { DOWNLOAD_SIZE, DOWNLOAD_URL, VERSION } from '@/lib/site'
import { BrowserFrame } from './browser-frame'
import { WindowsMark } from './icons'
import { Container } from './section'
import { Shot } from './shot'

const TRUST = [
  { icon: Lock, text: 'Lokal verschlüsselt (AES-256)' },
  { icon: ShieldCheck, text: 'Pseudonymisiert vor jeder KI-Anfrage' },
  { icon: PenLine, text: 'Diagnosen und Unterschrift nur von Ihnen' },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-14 md:pt-20">
      {/* Soft teal light behind the app window. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[38%] -z-10 mx-auto h-[640px] max-w-5xl rounded-full bg-primary/12 blur-3xl"
      />
      <Container className="text-center">
        <Badge variant="outline" className="rise mx-auto h-8 gap-2 rounded-full bg-card px-3.5 text-sm font-medium text-muted-foreground">
          <span className="size-1.5 rounded-full bg-primary" />
          Für Psychotherapeut:innen · Windows 10/11
        </Badge>
        <h1 className="t-display rise mx-auto mt-6 max-w-[19ch]">Dokumentation, die in der Praxis bleibt.</h1>
        <p className="t-lead rise mx-auto mt-6 max-w-[46ch]">
          Theralo schreibt Sitzungsnotizen und Berichte an den Gutachter mit Ihnen, aus Ihren Sitzungen. Alles bleibt
          verschlüsselt auf Ihrem Computer.
        </p>
        <div className="rise mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="xl" className="w-full sm:w-auto">
            <a href={DOWNLOAD_URL}>
              <WindowsMark /> Für Windows herunterladen
            </a>
          </Button>
          <Button asChild size="xl" variant="outline" className="w-full bg-card sm:w-auto">
            <a href="#video">
              <PlayCircle /> Video ansehen (5 Min.)
            </a>
          </Button>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Kostenlos testen · Version {VERSION} · {DOWNLOAD_SIZE}
        </p>
        <ul className="mx-auto mt-10 flex max-w-4xl flex-col items-center justify-center gap-x-8 gap-y-3 text-[15px] text-foreground/80 lg:flex-row">
          {TRUST.map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-center gap-2 lg:whitespace-nowrap">
              <Icon className="size-[18px] text-primary" aria-hidden="true" />
              {text}
            </li>
          ))}
        </ul>
      </Container>

      <Container className="mt-14 md:mt-16">
        <BrowserFrame className="rise">
          <Shot
            name="lotse"
            eager
            alt="Theralo, Bericht-Lotse: KI-Entwurf für Abschnitt 7 Satz für Satz, mit den Knöpfen Bearbeiten, Verwerfen, Übernehmen, der Quelle „Sitzung 1 · 09.10.2026“ und den Fragen „Was fehlt noch?“"
          />
        </BrowserFrame>
        <p className="mt-4 text-center text-sm text-muted-foreground">Demo-Praxis mit erfundenen Personen</p>
      </Container>
    </section>
  )
}

const PROMISES = [
  {
    icon: Clock,
    problem: 'Berichte kosten Abende und Wochenenden.',
    title: 'Notizen in Minuten',
    text: 'Aus Aufnahme oder Diktat entstehen Sitzungsnotiz, Fakten und Zusammenfassung von selbst.',
  },
  {
    icon: MessageSquareQuote,
    problem: 'Die Inhalte stehen längst in den Sitzungen.',
    title: 'Jeder Satz mit Quelle',
    text: 'Entwürfe zeigen, aus welcher Sitzung jede Aussage stammt.',
  },
  {
    icon: UserCheck,
    problem: 'KI soll nicht über Ihre Patient:innen entscheiden.',
    title: 'Sie entscheiden',
    text: 'Übernehmen, ändern oder verwerfen, Satz für Satz. Unterschreiben tun nur Sie.',
  },
]

export function Promises() {
  return (
    <section aria-label="Was Theralo ändert" className="pt-20 md:pt-28">
      <Container>
        <ul className="grid gap-5 lg:grid-cols-3">
          {PROMISES.map(({ icon: Icon, problem, title, text }) => (
            <li key={title} className="rise rounded-xl border bg-card p-6 shadow-xs">
              <span className="flex size-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <p className="mt-5 text-sm text-muted-foreground">{problem}</p>
              <h3 className="t-h3 mt-1.5">{title}</h3>
              <p className="mt-2 text-base text-muted-foreground">{text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
