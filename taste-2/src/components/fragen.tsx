import type { ReactNode } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { DOWNLOAD_SIZE } from '@/lib/site'
import { Section } from './section'

const link = 'font-medium text-primary underline underline-offset-4'

const FAQ: { q: string; a: ReactNode }[] = [
  {
    q: 'Was kostet Theralo?',
    a: (
      <>
        Theralo bieten wir Praxen, MVZ und Unternehmen an; den Preis richten wir nach Ihrer Praxis (siehe{' '}
        <a href="#preise" className={link}>
          Preise
        </a>
        ). Zum Ausprobieren laden Sie Theralo kostenlos herunter.
      </>
    ),
  },
  {
    q: 'Wie installiere ich Theralo?',
    a: `Laden Sie theralo-setup-x64.exe herunter (etwa ${DOWNLOAD_SIZE}) und starten Sie die Datei. Beim ersten Start erhalten Sie Ihr Notfall-Kit: Drucken Sie es aus und bewahren Sie es sicher auf. „Mit Beispieldaten ausprobieren“ öffnet danach die Demo-Praxis.`,
  },
  {
    q: 'Warum warnt Windows beim Installieren?',
    a: 'Die Installationsdatei ist noch nicht digital signiert. Klicken Sie bei „Der Computer wurde durch Windows geschützt“ auf „Weitere Informationen“ und dann auf „Trotzdem ausführen“.',
  },
  {
    q: 'Was braucht mein Computer?',
    a: (
      <ul className="grid list-disc gap-1 pl-5">
        <li>Windows 10 oder 11 (64 Bit) und ein Mikrofon für Aufnahme und Diktat</li>
        <li>Etwa 1 GB freier Speicher für das Sprachmodell (einmaliger Download in der App)</li>
        <li>Für lokale KI-Entwürfe 32 GB RAM oder eine Grafikkarte mit genug Speicher; Theralo empfiehlt ein passendes Modell</li>
        <li>Optional: ein eigener KI-Schlüssel (OpenRouter oder Requesty)</li>
      </ul>
    ),
  },
  {
    q: 'Brauche ich Internet?',
    a: 'Nein. Aufnahme, Transkription, Notizen und Export funktionieren offline. Nur KI-Entwürfe über einen Cloud-Anbieter brauchen Internet; mit einem lokalen Modell geht auch das offline.',
  },
  {
    q: 'Schreibt die KI meinen Bericht?',
    a: 'Sie schlägt Sätze vor, jeweils mit Quelle aus Ihren Notizen. Sie übernehmen, ändern oder verwerfen jeden Satz einzeln. Diagnosen und Medikation trägt sie nie ein, und unterschreiben tun nur Sie.',
  },
  {
    q: 'Was passiert mit den Aufnahmen?',
    a: 'Sie werden verschlüsselt gespeichert und gelöscht, sobald Sie die Abschrift bestätigen.',
  },
  { q: 'Gibt es Theralo für Mac?', a: 'Derzeit nur für Windows.' },
]

export function Fragen() {
  return (
    <Section id="fragen" eyebrow="Fragen" title="Fragen und Antworten" center className="border-t bg-sidebar">
      <Accordion type="single" collapsible className="rise mx-auto mt-12 max-w-3xl rounded-xl border bg-card px-5 shadow-xs sm:px-7">
        {FAQ.map((f) => (
          <AccordionItem key={f.q} value={f.q}>
            <AccordionTrigger className="py-5 text-base font-semibold hover:no-underline md:text-[17px]">{f.q}</AccordionTrigger>
            <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  )
}
