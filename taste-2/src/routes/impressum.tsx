import { createFileRoute } from '@tanstack/react-router'
import { Nav } from '@/components/nav'

export const Route = createFileRoute('/impressum')({
  head: () => ({ meta: [{ title: 'Impressum · Theralo' }, { name: 'robots', content: 'noindex' }] }),
  component: () => (
    <>
      <Nav />
      <main className="frame grid min-h-[80svh] gap-[var(--m)] py-24 md:grid-cols-12">
        <h1 className="t-display md:col-span-5">Impressum</h1>
        <div className="md:col-span-6 md:col-start-7">
          {/* TODO: Angaben des Betreibers. */}
          <p className="t-lead">Die Angaben folgen in Kürze.</p>
          <p className="mt-6">
            <a href="/" className="link">
              Zurück zur Startseite
            </a>
          </p>
        </div>
      </main>
    </>
  ),
})
