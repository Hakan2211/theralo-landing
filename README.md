# Theralo: Landingpage

Varianten der Landingpage für [Theralo](https://github.com/Hakan2211/datorga) (Domain: theralo.app), zum Vergleichen.

| Ordner | Richtung | Port |
|---|---|---|
| `taste/` | Option 1: Aktenreiter (one-motif) | 3200 |
| `taste-2/` | Option 2, überarbeitet: App-Marke + shadcn/ui (Runde 2: split-stage) | 3201 |
| `taste-3/` | Option 3: Der gedruckte Jahresbericht (editorial-report) | 3202 |
| `taste-4/` | Option 4: Farbkapitel (colour-chapters) | 3203 |
| `vanilla/` | Runde 1, ohne Design-Skills | 3100 |

Alle Optionen außer `vanilla/` sind mit [taste-skill](https://www.tasteskill.dev/) und [emilkowalski/skills](https://github.com/emilkowalski/skills) gebaut. Die Arbeitsnotizen jeder Option liegen in `NOTES.md` in ihrem Ordner.

- `shared/CONTENT.md`: gemeinsame Inhalte, inklusive Preisgestaltung
- `shared/PROMPTS-gpt-image-2.md`: Bild-Prompts für Entwürfe
- `shared/screens/`: Screenshots aus der Demo-Praxis und das App-Icon

Alle Varianten sind TanStack-Start-Apps und werden statisch vorgerendert.

```
cd taste-2   # oder ein anderer Ordner
npm install
npm run dev
npm run build
```

## Vercel

Pro Variante ein Vercel-Projekt aus diesem Repo:
- Root Directory ist der Ordner der Variante.
- Framework-Preset: „Other“ oder „TanStack Start“.
- Nitro erkennt Vercel beim Build selbst.
- Die gewählte Variante bekommt die Domain theralo.app.

Jede Variante kopiert die Screenshots beim Build nach `public/screens/` (`predev`/`prebuild`).
