import { createFileRoute } from '@tanstack/react-router'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/schluss'
import { Container } from '@/components/section'
import { CONTACT_EMAIL, HOMEPAGE_URL, OPERATOR } from '@/lib/site'

const MAIL = <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>

export const Route = createFileRoute('/datenschutz')({
  head: () => ({ meta: [{ title: 'Datenschutzerklärung · Theralo' }, { name: 'robots', content: 'noindex' }] }),
  component: () => (
    <>
      <Nav />
      <main className="prose-page min-h-[60svh] py-20 md:py-28">
        <Container className="max-w-3xl">
          <h1 className="t-h2">Datenschutzerklärung</h1>
          <p className="t-lead mt-6">
            Diese Website setzt keine Cookies, verwendet kein Tracking und keine Analysewerkzeuge. Patientendaten
            erreichen uns weder über die Website noch über die App.
          </p>

          <h2>1. Verantwortlicher</h2>
          <p>Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser Website ist:</p>
          <address>
            {OPERATOR.name} ({OPERATOR.brand})
            <br />
            {OPERATOR.city}, {OPERATOR.country}
            <br />
            E-Mail: {MAIL}
            <br />
            Website: <a href={HOMEPAGE_URL}>hakanda.com</a>
          </address>
          <p>
            Der Verantwortliche hat seinen Sitz außerhalb der Europäischen Union. Weil sich dieses Angebot an Praxen in
            Deutschland richtet, gilt die Datenschutz-Grundverordnung (DSGVO) nach Art. 3 Abs. 2 DSGVO. Wir wenden ihr
            Schutzniveau auf alle Besucherinnen und Besucher an, unabhängig von deren Wohnort.
          </p>

          <h2>2. Was wir nicht tun</h2>
          <ul>
            <li>keine Cookies und keine Speicherung von Informationen auf Ihrem Gerät (§ 25 TDDDG)</li>
            <li>keine Reichweitenmessung, kein Tracking, keine Werbe- oder Social-Media-Dienste</li>
            <li>keine Profilbildung und keine automatisierten Entscheidungen nach Art. 22 DSGVO</li>
            <li>kein Verkauf und keine Weitergabe von Daten zu Werbezwecken</li>
            <li>keine extern geladenen Schriften: Schriften und Bilder liefert dieser Server selbst aus</li>
          </ul>

          <h2>3. Hosting und Server-Protokolle</h2>
          <p>
            Die Website wird bei Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA, gehostet und über deren
            weltweites Netz ausgeliefert. Beim Aufruf jeder Seite verarbeitet Vercel technisch notwendige Daten: IP-Adresse,
            Datum und Uhrzeit, aufgerufene Adresse, übertragene Datenmenge, Statuscode, Referrer sowie Browser und
            Betriebssystem.
          </p>
          <p>
            Zweck ist die Auslieferung der Website sowie die Abwehr von Angriffen und Missbrauch. Rechtsgrundlage ist
            Art. 6 Abs. 1 lit. f DSGVO; unser berechtigtes Interesse liegt in einem sicheren und stabilen Betrieb. Vercel
            verarbeitet diese Daten als Auftragsverarbeiter nach Art. 28 DSGVO und speichert sie nur so lange, wie es
            für Betrieb und Sicherheit nötig ist. Wir werten die Protokolle nicht zu Analysezwecken aus und führen sie
            nicht mit anderen Daten zusammen.
          </p>

          <h2>4. Erklärvideo</h2>
          <p>
            Das Video „Theralo in 5 Minuten“ liegt bei BunnyWay d.o.o., Cesta komandanta Staneta 4A, 1215 Medvode,
            Slowenien (bunny.net). Es wird erst geladen, wenn Sie auf Abspielen klicken. Erst dann erhält bunny.net Ihre
            IP-Adresse und die üblichen technischen Verbindungsdaten. Die Verarbeitung findet in der EU statt.
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO; unser berechtigtes Interesse ist eine schnelle,
            zuverlässige Auslieferung des Videos.
          </p>

          <h2>5. Download der App</h2>
          <p>
            Das Installationsprogramm liegt bei GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107,
            USA. Erst wenn Sie auf „Herunterladen“ klicken, ruft Ihr Browser die Datei bei GitHub ab; GitHub verarbeitet
            dabei Ihre IP-Adresse und technische Verbindungsdaten in eigener Verantwortung. Es gilt die{' '}
            <a href="https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement">
              Datenschutzerklärung von GitHub
            </a>
            .
          </p>

          <h2>6. Kontakt per E-Mail</h2>
          <p>
            Wenn Sie uns schreiben, etwa für einen Kostenvoranschlag, verarbeiten wir Ihre E-Mail-Adresse, Ihren Namen,
            die Angaben zu Ihrer Praxis und den Inhalt Ihrer Nachricht, um Ihre Anfrage zu beantworten. Rechtsgrundlage
            ist Art. 6 Abs. 1 lit. b DSGVO, wenn Ihre Anfrage auf einen Vertrag zielt, sonst Art. 6 Abs. 1 lit. f DSGVO;
            unser berechtigtes Interesse ist die Beantwortung Ihrer Anfrage.
          </p>
          <p>
            Unser Postfach wird von Google (Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA)
            betrieben. Wir löschen Ihre Anfrage, sobald sie erledigt ist und keine gesetzlichen Aufbewahrungspflichten
            entgegenstehen; Geschäftsbriefe und Unterlagen zu Verträgen bewahren wir bis zu sechs bzw. zehn Jahre auf.
          </p>
          <p>
            <strong>Bitte senden Sie uns keine Patientendaten</strong> und keine anderen Angaben, die der Schweigepflicht
            nach § 203 StGB unterliegen, auch nicht als Beispiel oder Anhang. E-Mail ist für solche Daten nicht geeignet.
          </p>

          <h2>7. Die App Theralo</h2>
          <p>
            Diese Erklärung betrifft die Website. Für die App gilt: Theralo speichert alle Daten verschlüsselt auf Ihrem
            Computer. Die App sendet keine Nutzungsstatistiken, keine Fehlerberichte und keine Inhalte an uns. Wir haben
            keinen Zugriff auf Ihre Daten oder die Ihrer Patientinnen und Patienten und sind deshalb auch kein
            Auftragsverarbeiter Ihrer Praxis.
          </p>
          <p>
            Nutzen Sie in der App einen KI-Dienst in der Cloud, schließen Sie den Vertrag direkt mit diesem Anbieter und
            verwenden Ihren eigenen Schlüssel. Die App pseudonymisiert Texte, bevor sie Ihren Computer verlassen.
            Verantwortlich für diese Verarbeitung ist Ihre Praxis; der Datenfluss läuft nicht über uns.
          </p>

          <h2>8. Empfänger und Übermittlung in Drittländer</h2>
          <p>
            Empfänger Ihrer Daten sind nur die oben genannten Dienstleister. Vercel, GitHub und Google haben ihren Sitz
            in den USA und sind nach dem EU-US Data Privacy Framework zertifiziert; für sie gilt der
            Angemessenheitsbeschluss der EU-Kommission vom 10. Juli 2023 (Art. 45 DSGVO). Ergänzend gelten die
            Standardvertragsklauseln der EU-Kommission (Art. 46 Abs. 2 lit. c DSGVO).
          </p>
          <p>
            Schreiben Sie uns, gelangen Ihre Angaben zum Verantwortlichen in die Türkei. Für die Türkei besteht kein
            Angemessenheitsbeschluss. Wir verarbeiten Ihre Angaben dort nur, um Ihre Anfrage zu beantworten oder einen
            von Ihnen gewünschten Vertrag anzubahnen und zu erfüllen (Art. 49 Abs. 1 lit. b DSGVO), und schützen sie mit
            den unter Nummer 10 genannten Maßnahmen.
          </p>

          <h2>9. Ihre Rechte</h2>
          <p>Sie haben jederzeit das Recht auf</p>
          <ul>
            <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
            <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
            <li>Löschung (Art. 17 DSGVO)</li>
            <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Widerruf einer Einwilligung mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)</li>
            <li>
              Beschwerde bei einer Datenschutz-Aufsichtsbehörde (Art. 77 DSGVO), insbesondere in dem Mitgliedstaat Ihres
              Aufenthaltsorts oder Arbeitsplatzes
            </li>
          </ul>
          <h3>Widerspruchsrecht (Art. 21 DSGVO)</h3>
          <p>
            <strong>
              Soweit wir Daten auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO verarbeiten, können Sie aus Gründen, die
              sich aus Ihrer besonderen Situation ergeben, jederzeit widersprechen. Wir verarbeiten die Daten dann nicht
              mehr, es sei denn, wir weisen zwingende schutzwürdige Gründe nach, die Ihre Interessen überwiegen, oder die
              Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.
            </strong>
          </p>
          <p>
            Für alle Anliegen genügt eine formlose E-Mail an {MAIL}. Wir antworten innerhalb eines Monats und können zum
            Schutz Ihrer Daten vorab Ihre Identität prüfen.
          </p>

          <h2>10. Sicherheit</h2>
          <p>
            Die Website wird ausschließlich verschlüsselt über HTTPS (TLS) ausgeliefert. Sie verarbeitet keine
            Formulare und keine Anmeldedaten. Zugriff auf die Konten bei den genannten Dienstleistern hat nur der
            Verantwortliche. Eine Pflicht, uns Daten
            bereitzustellen, besteht nicht; ohne Ihre E-Mail-Adresse können wir Ihnen allerdings nicht antworten.
          </p>

          <h2>11. Änderungen</h2>
          <p>
            Wir passen diese Erklärung an, wenn sich die Website, unsere Dienstleister oder die Rechtslage ändern. Es
            gilt die hier veröffentlichte Fassung.
          </p>
          <p className="text-muted-foreground">Stand: Oktober 2026</p>

          <p className="mt-10">
            <a href="/">Zurück zur Startseite</a>
          </p>
        </Container>
      </main>
      <Footer />
    </>
  ),
})
