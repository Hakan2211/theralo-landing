import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { nitro } from 'nitro/vite'

// Static site: every page is prerendered at build time. Nitro picks the Vercel preset on Vercel.
// noExternals: bundle server deps; nitro's file tracer fails on tslib (Radix) on Windows/Node 25.
export default defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [tailwindcss(), tanstackStart({ prerender: { enabled: true, crawlLinks: true, filter: ({ path }) => !path.includes('#') } }), nitro({ noExternals: true }), viteReact()],
})
