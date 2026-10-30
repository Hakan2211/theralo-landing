import { Mail, Package, RefreshCw, Wrench } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CONTACT_EMAIL, DOWNLOAD_URL, MAILTO } from '@/lib/site'
import { WindowsMark } from './icons'
import { Section } from './section'

const PARTS = [
  { icon: Package, title: 'Software, einmalig', text: 'Theralo für Ihre Praxis, installiert auf Ihren Computern. Die Daten bleiben bei Ihnen.' },
  {
    icon: RefreshCw,
    title: 'Monatlich: KI und Instandhaltung',
    text: 'KI-Nutzung für Notizen, Entwürfe und Gutachter-Check, Updates, neue KBV-Vorgaben und Unterstützung.',
  },
  { icon: Wrench, title: 'Individualisierung', text: 'Neue Funktionen und Anpassungen für Ihre Abläufe, auf Wunsch für Ihre Praxis gebaut.' },
]

export function Preise() {
  return (
    <Section
      id="preise"
      eyebrow="Preise"
      title="Preisgestaltung für Praxen"
      lead="Für Praxen, MVZ und Unternehmen. Der Preis richtet sich nach Ihrer Praxis und setzt sich aus drei Teilen zusammen."
    >
      <ul className="mt-12 grid gap-5 md:grid-cols-3">
        {PARTS.map(({ icon: Icon, title, text }, i) => (
          <li key={title} className="rise flex flex-col rounded-xl border bg-card p-6 shadow-xs">
            <div className="flex items-center justify-between">
              <span className="flex size-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <span className="font-serif text-3xl text-border">{i + 1}</span>
            </div>
            <h3 className="t-h3 mt-5">{title}</h3>
            <p className="mt-2 text-base text-muted-foreground">{text}</p>
          </li>
        ))}
      </ul>

      <div className="rise mt-6 flex flex-col gap-8 rounded-2xl bg-primary p-7 text-primary-foreground sm:p-10 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <h3 className="font-serif text-3xl leading-tight font-semibold">Angebot für Ihre Praxis</h3>
          <p className="mt-3 text-primary-foreground/85">
            Wie viele Therapeut:innen, welche KI, welche Anpassungen: Schreiben Sie uns, wir schicken Ihnen einen
            Kostenvoranschlag.
          </p>
          <p className="mt-3 text-sm text-primary-foreground/70">
            <a href={`mailto:${CONTACT_EMAIL}`} className="underline underline-offset-4">
              {CONTACT_EMAIL}
            </a>{' '}
            (vorläufig, bis das Postfach eingerichtet ist)
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
          <Button asChild size="xl" variant="secondary" className="bg-card text-foreground hover:bg-card/90">
            <a href={MAILTO}>
              <Mail /> Angebot anfragen
            </a>
          </Button>
          <Button
            asChild
            size="xl"
            variant="outline"
            className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <a href={DOWNLOAD_URL}>
              <WindowsMark /> Kostenlos testen
            </a>
          </Button>
        </div>
      </div>
    </Section>
  )
}
