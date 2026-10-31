import { createFileRoute } from '@tanstack/react-router'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/schluss'
import { Container } from '@/components/section'
import { CONTACT_EMAIL, HOMEPAGE_URL, OPERATOR } from '@/lib/site'

export const Route = createFileRoute('/impressum')({
  head: () => ({ meta: [{ title: 'Impressum · Theralo' }, { name: 'robots', content: 'noindex' }] }),
  component: () => (
    <>
      <Nav />
      <main className="prose-page min-h-[60svh] py-20 md:py-28">
        <Container className="max-w-3xl">
          <h1 className="t-h2">Impressum</h1>
          <p className="t-lead mt-6">Angaben zum Anbieter der Website theralo.app und der Software Theralo.</p>

          <h2>Anbieter</h2>
          <address>
            {OPERATOR.brand}
            <br />
            {OPERATOR.street}
            <br />
            {OPERATOR.city}, {OPERATOR.country}
          </address>

          <h2>Kontakt</h2>
          <p>
            E-Mail: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            <br />
            Website: <a href={HOMEPAGE_URL}>hakanda.com</a>
          </p>

          <h2>Verantwortlich für den Inhalt</h2>
          <p>{OPERATOR.brand}, Anschrift wie oben.</p>

          <h2>Hinweis zur Software</h2>
          <p>
            Theralo ist ein Dokumentationswerkzeug für Psychotherapeutinnen und Psychotherapeuten. Es ist kein
            Medizinprodukt, stellt keine Diagnosen und ersetzt keine fachliche Beurteilung. Inhalt, Prüfung und
            Unterschrift von Sitzungsnotizen und Berichten verantworten die Anwenderinnen und Anwender.
          </p>

          <h2>Verbraucherstreitbeilegung</h2>
          <p>
            Theralo richtet sich an Praxen. Wir sind weder bereit noch verpflichtet, an Streitbeilegungsverfahren vor
            einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>

          <h2>Haftung für Inhalte und Links</h2>
          <p>
            Wir erstellen die Inhalte dieser Seiten mit Sorgfalt, übernehmen für Richtigkeit, Vollständigkeit und
            Aktualität aber keine Gewähr. Für die Inhalte verlinkter fremder Seiten ist allein deren Anbieter
            verantwortlich. Bei der Verlinkung waren keine Rechtsverstöße erkennbar. Werden uns solche bekannt,
            entfernen wir den Link umgehend.
          </p>

          <h2>Urheberrecht</h2>
          <p>
            Texte, Bilder, Screenshots und Videos auf dieser Website sind urheberrechtlich geschützt. Vervielfältigung
            und Verbreitung außerhalb der gesetzlichen Schranken bedürfen unserer vorherigen schriftlichen Zustimmung.
            Alle Personen und Patientendaten in Screenshots und Video sind erfunden.
          </p>

          <p className="mt-10">
            <a href="/">Zurück zur Startseite</a>
          </p>
        </Container>
      </main>
      <Footer />
    </>
  ),
})
