import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/datenschutz')({
  head: () => ({ meta: [{ title: 'Datenschutzerklärung · Theralo' }, { name: 'robots', content: 'noindex' }] }),
  component: () => (
    <main className="mx-auto min-h-[60vh] max-w-3xl px-5 py-20">
      <h1 className="font-serif text-5xl">Datenschutzerklärung</h1>
      {/* TODO: Angaben des Betreibers. */}
      <p className="mt-6 text-ink-soft">Die Angaben folgen in Kürze.</p>
    </main>
  ),
})
