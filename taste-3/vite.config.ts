import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { nitro } from 'nitro/vite'

// Static site: every page is prerendered at build time. Nitro picks the Vercel preset on Vercel.
export default defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [tailwindcss(), tanstackStart({ prerender: { enabled: true, crawlLinks: true, filter: ({ path }) => !path.includes('#') } }), nitro(), viteReact()],
})
