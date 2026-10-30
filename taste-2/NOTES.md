# Option 2, überarbeitet: App-Marke + shadcn/ui

Inhalte: `../shared/CONTENT.md`. Runde 2 (Split-Stage, Sand/Moos, Gambarino/General Sans) steht in der Git-Historie und in `.taste-skill/`.

## Warum überarbeitet

Rückmeldung zu Runde 2: wirkte billig und unaufgeräumt; Schrift und Schriftgrößen schlecht, Menü zu klein; Screenshots alt (Lotse noch mit dem überlaufenden „Übernehmen“-Knopf) und nicht responsiv (feste Ausschnitte mit Pixel-Versatz); zu viel Fließtext ohne Struktur; das Foto unten passte nicht zum Stil.

## Entscheidungen

- **Marke der App**: Farb-Tokens 1:1 aus `D:\Datorga\ui\src\styles.css` (Papier #f7f6f2, Petrol #337875, Sand), Inter für Text, Libertinus Serif für Überschriften und Wortmarke (selbst gehostet über @fontsource). Die Screenshots passen damit zur Seite.
- **shadcn/ui** (new-york, wie die App): Button (+ Größe `xl`), Badge, Card, Tabs, Accordion, NavigationMenu, Sheet, Switch, ToggleGroup, Textarea, Label, Separator.
- **Typo**: Fließtext 17/18 px, Zeilenhöhe 1,65; Überschriften `t-display` / `t-h2` / `t-h3`, Lead-Sätze `t-lead`, Eyebrows `t-eyebrow` (styles.css).
- **Menü**: 72 px hoch, Links 16 px, unter `lg` ein Sheet.
- **Struktur statt Textwänden**: jede Sektion = Eyebrow + Überschrift + ein Satz; Details in Karten, Stichpunkten, Tabs oder im Akkordeon.
  - Hero → drei Versprechen → So geht's (vertikale Tabs, Telefon: Karten) + „Im Alltag“ → Bericht-Lotse (Tabs) → Datenschutz (4 Karten + interaktive Pseudonymisierung) → Video → Preise (3 Teile + Angebots-Panel) → Fragen (Akkordeon) → Schluss (Produktbild statt Foto) → Fuß.
- **Screenshots** ganz und responsiv im Fensterrahmen (`BrowserFrame` + `Shot`, WebP 1×/2× mit `srcSet`). Keine Stockfotos mehr.
- Die HTML-Nachbauten der App-Oberfläche im Lotse-Abschnitt sind durch echte Screenshots ersetzt.
- Nitro mit `noExternals: true`: der Datei-Tracer scheitert unter Windows/Node 25 an `tslib` (kommt über Radix).

## Screenshots neu (30.10.2026)

Aus der Demo-Praxis nach Slice 41/42, 1280 × 800 CSS-px bei Faktor 2, mit einer Scratch-Kopie von `D:\Datorga\scripts\video\record.mjs --dry` (Overlays ausgeblendet, CDP-Screenshot). Liste: `../shared/screens/README.md`.

## Prüfung

- `npm run typecheck`, `npm run build` (3 Seiten vorgerendert).
- Playwright/Edge bei 390/768/1280/1440: kein horizontaler Überlauf, keine Konsolenfehler, Menülinks 16 px; Tabs (auch per Pfeiltaste), Akkordeon, Pseudonymisierung, Anbieterwahl, mobiles Menü (Esc schließt, Link schließt und springt).

## Offen

Impressum und Datenschutzerklärung sind Platzhalter. Kontaktadresse vorläufig.
