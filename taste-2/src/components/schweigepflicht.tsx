import { useMemo, useState } from 'react'
import { Ban, HardDrive, KeyRound, Lock, ShieldCheck, Shuffle } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Textarea } from '@/components/ui/textarea'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { SAMPLES, pseudonymize } from '@/lib/pseudo'
import { Section } from './section'

const PILLARS = [
  {
    icon: HardDrive,
    title: 'Alles bleibt auf Ihrem Computer',
    text: 'Datenbank und Aufnahmen verschlüsselt (AES-256). Kein Konto, keine Cloud-Datenbank, kein Server von uns.',
  },
  {
    icon: Shuffle,
    title: 'Pseudonymisiert vor jeder KI-Anfrage',
    text: 'Namen, Orte und Daten werden zu Platzhaltern wie [PERSON_1]. Die Zuordnung verlässt den Computer nie.',
  },
  {
    icon: KeyRound,
    title: 'Sie wählen die KI',
    text: 'Eigener Schlüssel bei OpenRouter (nur Endpunkte ohne Datenspeicherung) oder Requesty, oder ein lokales Modell ohne Internet.',
  },
  {
    icon: Ban,
    title: 'Nie an die KI',
    text: 'Tonaufnahmen mit Patientenstimme, Diagnosen und Medikation. Eine Aufnahme geht nur mit Einwilligung zur Cloud-Transkription hinaus.',
  },
]

const TARGETS = [
  { id: 'openrouter', label: 'OpenRouter', to: 'OpenRouter (nur Endpunkte ohne Datenspeicherung)' },
  { id: 'requesty', label: 'Requesty', to: 'Requesty' },
  { id: 'lokal', label: 'Lokales Modell', to: '' },
] as const

type Target = (typeof TARGETS)[number]['id']

export function Schweigepflicht() {
  return (
    <Section
      id="schweigepflicht"
      eyebrow="Datenschutz"
      title="Ihre Schweigepflicht ist eingebaut."
      lead="Was Sie in der Sitzung hören, steht unter § 203 StGB. Theralo ist so gebaut, dass es dort bleibt."
    >
      <div className="mt-12 grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
        <ul className="grid min-w-0 gap-4 sm:grid-cols-2 lg:col-span-6 lg:grid-cols-1 xl:grid-cols-2">
          {PILLARS.map(({ icon: Icon, title, text }) => (
            <li key={title} className="rise rounded-xl border bg-card p-5 shadow-xs">
              <span className="flex size-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <Icon className="size-[18px]" aria-hidden="true" />
              </span>
              <p className="mt-4 font-semibold leading-snug">{title}</p>
              <p className="mt-1.5 text-[15px] leading-snug text-muted-foreground">{text}</p>
            </li>
          ))}
        </ul>
        <div className="min-w-0 lg:sticky lg:top-24 lg:col-span-6">
          <PseudoDemo />
        </div>
      </div>
    </Section>
  )
}

/** Live imitation of "Was wurde gesendet?": every control changes the outgoing text at once. */
function PseudoDemo() {
  const [text, setText] = useState<string>(SAMPLES[0])
  const [target, setTarget] = useState<Target>('openrouter')
  const [consent, setConsent] = useState(false)
  const [backup, setBackup] = useState(false)

  const pieces = useMemo(() => pseudonymize(text), [text])
  const seen = new Set<string>()
  const mapping = pieces.filter((p) => p.tag && p.kind !== 'patient' && (seen.has(p.tag) ? false : (seen.add(p.tag), true)))
  const local = target === 'lokal'
  const to = TARGETS.find((t) => t.id === target)!.to

  return (
    <Card className="rise gap-0 py-0 shadow-md">
      <CardHeader className="border-b px-5 py-4 sm:px-6 [.border-b]:pb-4">
        <CardTitle className="flex items-center gap-2 text-base">
          <ShieldCheck className="size-[18px] text-primary" aria-hidden="true" />
          Probieren Sie es aus
        </CardTitle>
        <p className="text-sm text-muted-foreground">Eine Nachbildung der Ansicht „Was wurde gesendet?“ aus der App.</p>
      </CardHeader>
      <CardContent className="grid gap-5 px-5 py-5 sm:px-6">
        <div className="grid gap-2">
          <Label htmlFor="pseudo-in" className="text-sm">
            Ein Satz wie aus einer Notiz, gern mit Namen, Ort und Datum
          </Label>
          <Textarea id="pseudo-in" value={text} onChange={(e) => setText(e.target.value)} className="min-h-20 bg-background text-base md:text-[15px]" />
        </div>

        <div className="grid gap-2">
          <p className="text-sm font-medium">KI-Anbieter</p>
          <ToggleGroup
            type="single"
            variant="outline"
            value={target}
            onValueChange={(v) => v && setTarget(v as Target)}
            className="w-full"
            aria-label="KI-Anbieter"
          >
            {TARGETS.map((t) => (
              <ToggleGroupItem key={t.id} value={t.id} className="h-9 min-w-0 flex-1 px-2 text-[13px] sm:text-sm data-[state=on]:bg-accent data-[state=on]:text-accent-foreground">
                {t.label}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <label className="flex items-center gap-3 text-sm">
            <Switch checked={consent} onCheckedChange={setConsent} />
            Einwilligung zur Cloud-Transkription
          </label>
          <label className="flex items-center gap-3 text-sm">
            <Switch checked={backup} onCheckedChange={setBackup} />
            Sicherung auf USB-Stick
          </label>
        </div>

        <div className="rounded-lg border bg-sidebar p-4">
          <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">Ausgehender Text</p>
          <p className="mt-1 text-sm text-muted-foreground">
            {local
              ? 'Bleibt auf diesem Computer: Das lokale Modell braucht kein Internet.'
              : `Geht pseudonymisiert an ${to}.`}
          </p>
          <p className="mt-3 rounded-md border bg-card p-3 text-[15px] leading-relaxed" aria-live="polite">
            {pieces.map((p, i) =>
              p.tag ? (
                <Badge key={i} variant="secondary" className="mx-0.5 rounded-md bg-accent px-1.5 font-mono text-[13px] text-accent-foreground">
                  {p.tag}
                </Badge>
              ) : (
                <span key={i}>{p.text}</span>
              ),
            )}
          </p>
          <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
            <div>
              <dt className="font-medium">Platzhalter, nur lokal</dt>
              <dd className="mt-0.5 text-muted-foreground">
                {mapping.length === 0 ? 'Keine Namen, Orte oder Daten erkannt.' : mapping.map((p) => `${p.tag} = ${p.text}`).join(' · ')}
              </dd>
            </div>
            <div>
              <dt className="font-medium">Nicht gesendet</dt>
              <dd className="mt-0.5 text-muted-foreground">
                {consent ? 'Diagnosen, Medikation, Zuordnung der Platzhalter. Tonaufnahme nur zur Transkription.' : 'Tonaufnahme, Diagnosen, Medikation, Zuordnung der Platzhalter.'}
              </dd>
            </div>
          </dl>
          <p className="mt-4 flex items-center gap-2 text-sm font-medium text-success">
            <Lock className="size-4" aria-hidden="true" />
            Datenbank verschlüsselt{backup ? ' · Sicherung verschlüsselt auf USB-Stick' : ''}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
