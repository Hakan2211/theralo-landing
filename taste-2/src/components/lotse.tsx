import { Check } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { BrowserFrame } from './browser-frame'
import { Section } from './section'
import { Shot } from './shot'

type Crop = { name: string; w: number; h: number; alt: string }
type Output = { id: string; label: string; title: string; points: string[]; shot?: { name: string; alt: string }; crops?: Crop[] }

const OUTPUTS: Output[] = [
  {
    id: 'entwurf',
    label: 'Entwurf',
    title: 'Abschnitt für Abschnitt, Satz für Satz',
    points: [
      'Die KI entwirft leere Abschnitte aus Ihren unterschriebenen Notizen',
      'Jeden Satz übernehmen, bearbeiten oder verwerfen, auch per Tastatur',
      'Diagnosen und Medikation trägt sie nie ein',
    ],
    crops: [{ name: 'lotse-entwurf', w: 842, h: 850, alt: 'Entwurf der KI: zwei übernommene Sätze und ein Vorschlag mit den Knöpfen Bearbeiten, Verwerfen und Übernehmen' }],
  },
  {
    id: 'quelle',
    label: 'Quelle',
    title: 'Woher kommt das? Was fehlt noch?',
    points: [
      'Jeder Satz zeigt die Sitzung, aus der er stammt',
      'Fehlt etwas, fragt der Lotse nach, bevor ein Abschnitt dünn bleibt',
      'Ihre Antworten gelten als Ihre eigene Angabe',
    ],
    crops: [
      { name: 'lotse-quelle', w: 648, h: 401, alt: '„Woher kommt das?“: das Zitat aus der Notiz mit Quelle Sitzung 1 · 09.10.2026' },
      { name: 'lotse-fehlt', w: 648, h: 1016, alt: '„Was fehlt noch?“: drei Fragen des Lotsen mit Eingabefeldern' },
    ],
  },
  {
    id: 'check',
    label: 'Gutachter-Check',
    title: 'Gelesen wie von der Gutachterin',
    points: [
      'Nennt, was ein Gutachter nachfragen würde',
      'Prüft, ob alle Pflichtabschnitte ausgefüllt sind',
      'Gibt nur Hinweise und ändert den Text nicht',
    ],
    shot: { name: 'pruefen', alt: 'Theralo, Gutachter-Check: offene Abschnitte, „Ein Gutachter würde fragen: Woran zeigt sich, dass die Kurzzeittherapie nicht ausreicht?“ und die Vorschau' },
  },
  {
    id: 'bericht',
    label: 'Bericht',
    title: 'Fertig im Format des Musters PTV 3',
    points: ['Vorschau, die sich bei jeder Änderung neu aufbaut', 'Export als PDF oder Word', 'Unterschreiben tun nur Sie'],
    shot: { name: 'bericht', alt: 'Theralo, Schritt Fertig: Vorschau des Berichts an die Gutachterin, Unterschreiben und Export als PDF oder DOCX' },
  },
]

export function Lotse() {
  return (
    <Section
      id="lotse"
      eyebrow="Bericht-Lotse"
      title="Der Bericht an den Gutachter, Schritt für Schritt"
      lead="Für Erst-, Umwandlungs- und Fortführungsantrag nach Muster PTV 3."
      className="border-y bg-sidebar"
    >
      <Tabs defaultValue={OUTPUTS[0].id} className="rise mt-12 gap-8">
        <TabsList className="grid w-full grid-cols-2 gap-1 rounded-xl bg-secondary p-1 group-data-[orientation=horizontal]/tabs:h-auto sm:inline-flex sm:w-fit">
          {OUTPUTS.map((o) => (
            <TabsTrigger key={o.id} value={o.id} className="h-10 rounded-lg px-4 text-[15px] data-[state=active]:bg-card sm:flex-none">
              {o.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {OUTPUTS.map((o) => (
          <TabsContent key={o.id} value={o.id} className="grid animate-in items-start gap-8 fade-in-0 duration-300 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4 lg:pt-4">
              <h3 className="font-serif text-2xl leading-tight font-semibold md:text-[1.75rem]">{o.title}</h3>
              <ul className="mt-6 grid gap-4">
                {o.points.map((p) => (
                  <li key={p} className="flex gap-3 text-base">
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                      <Check className="size-3.5" strokeWidth={2.6} aria-hidden="true" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-8">
              {o.shot ? (
                <BrowserFrame>
                  <Shot name={o.shot.name} alt={o.shot.alt} sizes="(min-width: 1024px) 760px, 100vw" />
                </BrowserFrame>
              ) : (
                <div className="flex flex-col items-center gap-5 rounded-xl border bg-background p-5 sm:flex-row sm:items-start sm:justify-center sm:p-8">
                  {o.crops!.map((c) => (
                    <img
                      key={c.name}
                      src={`/screens/crops/${c.name}@1x.webp`}
                      srcSet={`/screens/crops/${c.name}@1x.webp 1x, /screens/crops/${c.name}.webp 2x`}
                      alt={c.alt}
                      width={c.w / 2}
                      height={c.h / 2}
                      loading="lazy"
                      className="h-auto w-full rounded-lg shadow-md sm:w-auto sm:max-w-[min(421px,48%)] sm:max-h-[520px] sm:object-contain"
                      style={{ maxWidth: c.w / 2 }}
                    />
                  ))}
                </div>
              )}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </Section>
  )
}
