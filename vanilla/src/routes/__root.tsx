/// <reference types="vite/client" />
import type { ReactNode } from 'react'
import { HeadContent, Link, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'
import appCss from '@/styles.css?url'
import { DOWNLOAD_URL, REPO_URL, VERSION } from '@/lib/site'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Theralo: Dokumentation, die in der Praxis bleibt' },
      {
        name: 'description',
        content:
          'Sitzungsnotizen und Berichte an den Gutachter (PTV 3) mit KI-Unterstützung. Lokal verschlüsselt, pseudonymisiert vor jeder KI-Anfrage. Für Windows.',
      },
      { property: 'og:title', content: 'Theralo' },
      { property: 'og:url', content: 'https://theralo.app' },
      { property: 'og:image', content: 'https://theralo.app/screens/lotse.png' },
      { property: 'og:locale', content: 'de_DE' },
    ],
    links: [
      { rel: 'canonical', href: 'https://theralo.app' },
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', type: 'image/png', href: '/icon.png' },
    ],
  }),
  shellComponent: RootDocument,
  component: () => (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  ),
})

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line/80 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link to="/" className="flex items-center gap-2.5">
          <img src="/icon.png" alt="" className="size-7 rounded-md" />
          <span className="font-serif text-2xl leading-none">Theralo</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-ink-soft md:flex">
          <a href="/#funktionen" className="hover:text-ink">Funktionen</a>
          <a href="/#datenschutz" className="hover:text-ink">Datenschutz</a>
          <a href="/#video" className="hover:text-ink">Video</a>
          <a href="/#faq" className="hover:text-ink">FAQ</a>
        </nav>
        <a
          href={DOWNLOAD_URL}
          className="rounded-lg bg-teal px-4 py-2 text-sm font-medium text-white hover:bg-teal-dark"
        >
          Herunterladen
        </a>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 text-sm text-ink-soft md:flex-row md:items-start md:justify-between">
        <div className="max-w-md space-y-2">
          <p className="flex items-center gap-2 text-ink">
            <span className="font-serif text-xl">Theralo</span>
            <span>· Version {VERSION}</span>
          </p>
          <p>
            Theralo ist ein Dokumentationswerkzeug. Fachliche Verantwortung und Unterschrift liegen bei der
            Therapeutin bzw. dem Therapeuten.
          </p>
        </div>
        <div className="flex gap-6">
          <a href={REPO_URL} className="hover:text-ink">Quellcode auf GitHub</a>
          <Link to="/impressum" className="hover:text-ink">Impressum</Link>
          <Link to="/datenschutz" className="hover:text-ink">Datenschutz</Link>
        </div>
      </div>
    </footer>
  )
}
