import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/impressum')({
  head: () => ({ meta: [{ title: 'Impressum · thera' }, { name: 'robots', content: 'noindex' }] }),
  component: () => (
    <main className="frame min-h-[70vh] py-16">
      <Link to="/" className="font-serif text-lead">
        thera
      </Link>
      <h1 className="mt-16 font-serif text-head">Impressum</h1>
      {/* TODO: Angaben des Betreibers. */}
      <p className="mt-6 max-w-[52ch]">Die Angaben folgen in Kürze.</p>
    </main>
  ),
})
