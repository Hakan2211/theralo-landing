/// <reference types="vite/client" />
import type { ReactNode } from 'react'
import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'
import appCss from '@/styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Theralo: Sitzungsnotizen und Berichte an den Gutachter, lokal auf Ihrem Computer' },
      {
        name: 'description',
        content:
          'Theralo schreibt Sitzungsnotizen und Berichte nach Muster PTV 3 mit Ihnen, aus Ihren Sitzungen. Verschlüsselt auf Ihrem Computer, pseudonymisiert vor jeder KI-Anfrage. Für Windows.',
      },
      { name: 'theme-color', content: '#ddd6c6' },
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
  component: Outlet,
})

// Adds `js`, and shows everything after 4 s in case the app never hydrates.
const REVEAL_GUARD =
  "document.documentElement.classList.add('js');setTimeout(function(){document.querySelectorAll('[data-rise]').forEach(function(e){e.classList.add('in')})},4000)"

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <head>
        {/* Entrance motion only when script runs; without it the page is fully visible. */}
        <script dangerouslySetInnerHTML={{ __html: REVEAL_GUARD }} />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
