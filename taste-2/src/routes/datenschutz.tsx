import { createFileRoute } from '@tanstack/react-router'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/schluss'
import { Container } from '@/components/section'

export const Route = createFileRoute('/datenschutz')({
  head: () => ({ meta: [{ title: 'Datenschutzerklärung · Theralo' }, { name: 'robots', content: 'noindex' }] }),
  component: () => (
    <>
      <Nav />
      <main className="prose-page min-h-[60svh] py-20 md:py-28">
        <Container className="max-w-3xl">
          <h1 className="t-h2">Datenschutzerklärung</h1>
          {/* TODO: Angaben des Betreibers. */}
          <p className="t-lead mt-6">Die Angaben folgen in Kürze.</p>
          <p className="mt-6">
            <a href="/" className="font-medium text-primary underline underline-offset-4">
              Zurück zur Startseite
            </a>
          </p>
        </Container>
      </main>
      <Footer />
    </>
  ),
})
