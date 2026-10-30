import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/datenschutz')({
  head: () => ({ meta: [{ title: 'Datenschutzerklärung · Theralo' }, { name: 'robots', content: 'noindex' }] }),
  component: () => (
    <>
      <header className="bar">
        <Link to="/" className="bar-mark">
          Theralo
        </Link>
      </header>
      <main className="legal">
        <h1 className="t-head">Datenschutzerklärung</h1>
        {/* TODO: Angaben des Betreibers. */}
        <p className="t-lead" style={{ marginTop: '2rem', maxWidth: '30ch' }}>
          Die Angaben folgen in Kürze.
        </p>
        <p style={{ marginTop: '2rem' }}>
          <Link to="/" className="textlink">
            Zurück zur Startseite
          </Link>
        </p>
      </main>
    </>
  ),
})
