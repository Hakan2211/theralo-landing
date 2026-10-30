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
      { name: 'theme-color', content: '#f7f6f2' },
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
