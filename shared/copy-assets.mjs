// Copies shared screenshots and the app icon into the calling variant's public/ folder.
import fs from 'node:fs'
import path from 'node:path'

const shared = path.dirname(new URL(import.meta.url).pathname.replace(/^\/(\w:)/, '$1'))
const pub = path.join(process.cwd(), 'public')
fs.mkdirSync(path.join(pub, 'screens'), { recursive: true })
for (const f of fs.readdirSync(path.join(shared, 'screens'))) {
  if (f.endsWith('.png') || f.endsWith('.webp')) fs.copyFileSync(path.join(shared, 'screens', f), path.join(pub, 'screens', f))
}
fs.copyFileSync(path.join(shared, 'app-icon-256.png'), path.join(pub, 'icon.png'))
