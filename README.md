# thera: Landingpage

Zwei Varianten der Landingpage für [thera](https://github.com/Hakan2211/datorga), zum Vergleichen:

- `vanilla/`: ohne Design-Skills gebaut
- `taste/`: mit [taste-skill](https://www.tasteskill.dev/) und [emilkowalski/skills](https://github.com/emilkowalski/skills)
- `shared/`: gemeinsame Inhalte (`CONTENT.md`), App-Icon und Screenshots aus der Demo-Praxis

Beide sind TanStack-Start-Apps und werden statisch vorgerendert.

```
cd vanilla   # oder taste
npm install
npm run dev
npm run build
```

## Vercel

Pro Variante ein Vercel-Projekt aus diesem Repo. Root Directory: `vanilla` bzw. `taste`, Framework-Preset „Other“ oder „TanStack Start“. Nitro erkennt Vercel beim Build selbst.

Die Screenshots liegen in `shared/screens/`. Jede Variante kopiert sie beim Build nach `public/screens/` (`predev`/`prebuild`).
