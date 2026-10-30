// Copies shared screenshots and the app icon into the calling variant's public/ folder.
import fs from 'node:fs'
import path from 'node:path'

const shared = path.dirname(new URL(import.meta.url).pathname.replace(/^\/(\w:)/, '$1'))
const pub = path.join(process.cwd(), 'public')
for (const dir of ['screens', 'screens/crops']) {
  fs.mkdirSync(path.join(pub, dir), { recursive: true })
  for (const f of fs.readdirSync(path.join(shared, dir))) {
    if (f.endsWith('.png') || f.endsWith('.webp')) fs.copyFileSync(path.join(shared, dir, f), path.join(pub, dir, f))
  }
}
fs.copyFileSync(path.join(shared, 'app-icon-256.png'), path.join(pub, 'icon.png'))
