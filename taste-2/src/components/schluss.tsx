import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { CONTACT_EMAIL, DOWNLOAD_SIZE, DOWNLOAD_URL, RELEASES_URL, REPO_URL, VERSION } from '@/lib/site'
import { BrowserFrame } from './browser-frame'
import { WindowsMark } from './icons'
import { NAV, Wordmark } from './nav'
import { Container } from './section'
import { Shot } from './shot'

/** Last call to action: the download, with the app itself rising out of the bottom edge. */
export function Schluss() {
  return (
    <section aria-labelledby="schluss-h" className="overflow-hidden pt-20 md:pt-28">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border bg-sand px-6 pt-14 text-center sm:px-12 md:pt-20">
          <h2 id="schluss-h" className="t-h2 rise mx-auto max-w-[18ch]">
            Weniger Abende am Bericht.
          </h2>
          <p className="t-lead rise mx-auto mt-4 max-w-[44ch]">
            Probieren Sie alles in der Demo-Praxis aus, mit erfundenen Beispieldaten und getrennt von Ihren echten Daten.
          </p>
          <div className="rise mt-8 flex flex-col items-center gap-3">
            <Button asChild size="xl">
              <a href={DOWNLOAD_URL}>
                <WindowsMark /> Für Windows herunterladen
              </a>
            </Button>
            <p className="text-sm text-muted-foreground">
              Version {VERSION} · Windows 10/11 · {DOWNLOAD_SIZE}
            </p>
          </div>
          <div className="rise mx-auto mt-12 max-w-4xl translate-y-2 md:mt-16">
            <BrowserFrame className="rounded-b-none border-b-0 shadow-xl">
              <div className="aspect-[16/7] overflow-hidden">
                <Shot
                  name="heute"
                  alt="Theralo, Ansicht Heute: Termin um 10:00, Aufgaben und fällige Abschriften und Anträge"
                  sizes="(min-width: 1024px) 896px, 100vw"
                />
              </div>
            </BrowserFrame>
          </div>
        </div>
      </Container>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="mt-20 border-t bg-sidebar">
      <Container className="grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <Wordmark />
          <p className="mt-4 max-w-sm text-[15px] text-muted-foreground">
            Sitzungsnotizen und Berichte an den Gutachter, lokal auf Ihrem Computer. Theralo ist ein
            Dokumentationswerkzeug; fachliche Verantwortung und Unterschrift liegen bei Ihnen.
          </p>
        </div>
        <nav aria-label="Seite" className="md:col-span-3 md:col-start-7">
          <p className="text-sm font-semibold">Produkt</p>
          <ul className="mt-4 grid gap-2.5 text-[15px] text-muted-foreground">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-foreground">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:col-span-3">
          <p className="text-sm font-semibold">Theralo</p>
          <ul className="mt-4 grid gap-2.5 text-[15px] text-muted-foreground">
            <li>
              <a href={DOWNLOAD_URL} className="hover:text-foreground">
                Für Windows herunterladen
              </a>
            </li>
            <li>
              <a href={RELEASES_URL} className="hover:text-foreground">
                Alle Versionen
              </a>
            </li>
            <li>
              <a href={REPO_URL} className="hover:text-foreground">
                Quellcode auf GitHub
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-foreground">
                {CONTACT_EMAIL}
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <Separator />
      <Container className="flex flex-col gap-3 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>Theralo · Version {VERSION}</p>
        <p className="flex gap-6">
          <a href="/impressum" className="hover:text-foreground">
            Impressum
          </a>
          <a href="/datenschutz" className="hover:text-foreground">
            Datenschutzerklärung
          </a>
        </p>
      </Container>
    </footer>
  )
}
