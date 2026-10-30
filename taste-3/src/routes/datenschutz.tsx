import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/datenschutz')({
  head: () => ({ meta: [{ title: 'Datenschutzerklärung · Theralo' }, { name: 'robots', content: 'noindex' }] }),
  component: () => (
    <main className="row legal">
      <div className="left">
        <Link to="/" className="wordmark">
          Theralo
        </Link>
      </div>
      <div>
        <h1 className="head">Datenschutzerklärung</h1>
        {/* TODO: Angaben des Betreibers. */}
        <p className="lead measure" style={{ marginTop: 32 }}>
          Die Angaben folgen in Kürze.
        </p>
        <p style={{ marginTop: 24 }}>
          <Link to="/" className="link">
            Zurück zur Startseite
          </Link>
        </p>
      </div>
    </main>
  ),
})
