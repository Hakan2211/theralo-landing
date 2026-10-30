# Variante 3: Arbeitsnotizen (tasteskill v2 + emil-design-eng)

Inhalte: `../shared/CONTENT.md` (dieselben wie die anderen Varianten). Diese Datei hält die Schritte 1–5 des Skills, die Abweichungen und das Gate fest.

## 1. Brief

- Thema: Theralo, Windows-Desktop-App für niedergelassene Psychotherapeut:innen (GKV). Sitzung → Notiz → Bericht an den Gutachter (Muster PTV 3).
- Publikum: Therapeut:innen, die Berichte abends und am Wochenende schreiben; skeptisch gegenüber KI und Cloud wegen § 203 StGB. Preise nur für Praxen, MVZ und Unternehmen, auf Anfrage.
- Die eine Handlung: **Für Windows herunterladen**. Zweitens: Video ansehen; für Praxen: Angebot anfragen.
- Stack: TanStack Start, Tailwind v4 (nur Reset), eigene CSS-Datei, statisch vorgerendert. Port 3202.
- Marke: bewusst **nicht** die App-Farben und -Schriften; die Richtung gibt Navy/Rosa und Imbue/Albert Sans vor (selbst gehostet über Fontsource).
- Bilder, die es wirklich gibt: 8 echte Screenshots der Demo-Praxis (2×) und Ausschnitte daraus, das Video (4:50). Keine Fotos.

### Inventar

Übernommen aus `taste/NOTES.md` (PTV 3 mit sieben Abschnitten, Chiffre S140391, Platzhalter [PERSON_1] und „Pat.“, „Woher kommt das?“, Kontingent, Zeitmarken, Notfall-Kit, Unterschrift, § 203 StGB, KBV-Leitfaden, der Gutachter-Satz, Abende und Wochenenden). Für diese Variante entscheidend: **der ausgehende Text unter „Was wurde gesendet?“**, in dem Namen, Orte und Daten als Platzhalter stehen.

## 2. Argument

| Abschnitt | Behauptung | Beweis |
|---|---|---|
| Hero | Dokumentation, die in der Praxis bleibt. | Masthead aus echten App-Ausschnitten, ein pseudonymisierter Satz als Farbkachel; Download-Knopf |
| Bericht-Lotse | Der Bericht entsteht Abschnitt für Abschnitt, mit Quelle und Gutachter-Check. | Drei echte Ansichten (Abschnitte, Woher kommt das?, Gutachter-Check) |
| Ablauf | Aus der Sitzung wird in vier Schritten ein Bericht. | Was Sie eingeben → was zurückkommt (Abschrift, Bestätigung, Fakten, Gutachter-Check) |
| Schweigepflicht | Was den Rechner verlässt, ist pseudonymisiert; Sie sehen es. | Live: eigener Satz → ausgehender Text; Anbieter, Zuordnung, Diagnose schalten |
| Praxisalltag | Fristen, Termine, Verlauf und Berichte an einem Ort. | Mosaik aus Heute, Verlauf, Kalender, Board |
| Video | So sieht es in 5 Minuten aus. | Das Video |
| Preise | Ein Preis aus drei Teilen, abgestimmt auf die Praxis. | Große Tabelle, Angebot anfragen, kostenlos testen |
| Fragen | Installation, SmartScreen, Internet, KI, Aufnahmen, Mac, Preis. | 8 Antworten als Lesetext |
| Schluss + Fuß | Der Bericht bleibt in Ihrer Praxis. | Download; Spalten, Wortmarke, Hinweis |

## 3. Richtung

Zugeteilt: **The printed annual** (Seed 687151629, sector health, tone quiet). Typ Imbue / Albert Sans, Palette Navy und Rosa, Hero „Void, then statement on axis“, Bewegung „Masked headline“. Achse bei 42 % der Breite: Überschriften, Hauptspalten und Menülinks beginnen dort; links davon stehen Randnotizen, Aktionen und die Tabellen-Beschriftungen.

## 4. Idee

> Auf dieser Seite wird **der ausgehende Text, den Theralo an die KI schickt (Namen als [PERSON_1], die Patientin als „Pat.“)** zum **Zweifarbendruck**: Jeder Name, der den Rechner nicht verlassen darf, ist ein voller Farbblock, so wie geschwärzt in einem gedruckten Bericht; Rosa auf Navy, Navy auf Rosa.

Mitbewerber-Test: Eine Cloud-Dokumentationssoftware kann diesen Satz nicht übernehmen, sie schickt Klartext. Die Blöcke stehen im Masthead (Farbkachel), im Live-Ausgabefeld und in der Zuordnungsliste.

**Das eine lebendige Ding:** Im Abschnitt Schweigepflicht tippen Sie einen eigenen Satz; links erscheint sofort, was hinausginge, mit Platzhalter-Blöcken. Drei weitere Schalter ändern dieselbe Ausgabe: KI-Anbieter (OpenRouter, Requesty, lokales Modell), „Zuordnung anzeigen“ (nur lokal), „Notiz mit Diagnose und Medikation“ (wird nie gesendet). Ohne Skript: das feste Beispiel.

## Abweichungen vom Bogen

- **Hero:** Die Richtung verlangt ein Masthead-Bild über 45 % des ersten Bildschirms, der Hero-Bauplan „Void“ keines. Die Richtung hat Vorrang: Masthead als lückenloses Mosaik aus drei echten App-Ausschnitten und einer rosa Kachel; darunter der Titel auf der Achse. Die Aktion links ist ein echter Knopf (Anpassung des Bogens).
- **Kopfzeile:** Statt Textlink rechts ein Download-Knopf; Menülinks beginnen auf der Achse; auf dem Telefon ein „Menü“-Panel.
- **Fotos:** Keine Archivbilder und keine der zugeteilten Interieur-Fotos. Das Thema ist Software mit echter Oberfläche; die 8 Screenshots, ihre Ausschnitte und das Video sind die Bilder (12 Bilder auf der Seite). Ein Tisch- oder Fensterfoto hätte nichts gezeigt, was Theralo ist.
- **Bericht-Lotse (Square plate):** Teilung auf der 42-%-Achse statt 50/50, damit die Achse überall gilt. Die drei Reiter schalten das Quadrat um.
- **Ablauf (Call and response):** vier statt drei Schritte (Inhalt hat vier). Die Erklärungen hängen als Randnotiz links der Achse.
- **Schweigepflicht (Fixed output):** Das feste Feld reicht vom Rand bis zur Achse. Fünfter Block ohne Regler (Notfall-Kit, Protokoll).
- **Preise (Large table):** Drei Bestandteile statt Pläne, keine hervorgehobene Spalte (es gibt keine Empfehlung), eine Preiszeile über alle drei Spalten („Im Kostenvoranschlag …“), ein Knopf „Angebot anfragen“ statt einer pro Spalte. Keine Zahlen.
- **Video:** eigene rosa Farbseite (nicht im Bogen), weil die Seite es braucht.
- **Typ:** Überschriften im Satzfall statt Versalien (lange deutsche Wörter); nur die Fuß-Wortmarke steht in Versalien. Wortmarke in der Leiste auf der Lead-Stufe, damit es bei fünf Größen bleibt.
- Muster-/Platzhalterinhalte vor dem Start: Impressum und Datenschutzerklärung; die Beispielsätze im Live-Feld und die Stichworte in Schritt 4 („Frühmorgendliches Erwachen …“) stammen aus der Demo-Praxis.

## Gate und Kritik

- `npm run build` und `tsc --noEmit`: sauber. `lint.mjs src`: 0 FAIL, 0 WARN. `inspect.mjs` (Produktions-Build, 1440/768/390): 0 FAIL, 0 WARN; Größen 14/19/24/60/118 px.
- Playwright (Edge): keine Konsolenfehler, kein horizontaler Überlauf bei 375/390/768/1440; Menü: `aria-expanded`, Esc schließt, Fokus zurück auf „Menü“, geschlossen `visibility:hidden` + `inert`.
- Erster Lauf: 2 FAIL (Eyebrow in den Telefon-Preisblöcken, verdeckte Überschrift unter dem klebenden Feld auf dem Telefon), 1 WARN (Creme-Ton der App-Fragmente). Behoben: Überschrift vor dem Feld, Preisblöcke mit h3 und Abstand, Fragmente weiß.

```
ROUND 1
Seen in one second: der große rosa Titel unter einem Band aus App-Ausschnitten.
Idea (one sentence): siehe oben; trug aber nur im Abschnitt Schweigepflicht.
Live thing: eigener Satz → ausgehender Text mit Platzhalter-Blöcken.
Layout words by section: hero=masthead / lotse=split / ablauf=list / schweigepflicht=pinned / alltag=text+mosaic / video=full-bleed / preise=table / fragen=reading text / schluss=statement / fuß=stack
Scores: design 7.5 · usability 8 · creativity 7.5 · content 8 → 7.7
Caps applied: keine
Top three problems:
1. Die Idee (Farbblöcke) fehlt im ersten Bildschirm (desktop-fold): die rosa Kachel trug nur eine Vertrauenszeile. Fix: pseudonymisierter Satz mit Navy-Blöcken in der Kachel.
2. Mehr als fünf Schriftgrößen (16 und 32 px aus Fuß und Wortmarke). Fix: Fuß auf Body, Wortmarke auf Lead.
3. Ablauf (desktop-page-01): die Randnotiz klebte über drei Bildschirme. Fix: Erklärung pro Schritt als Randnotiz links der Achse.
```

```
ROUND 2
Seen in one second: der Titel auf der Achse, darüber die Kachel mit [PERSON_1]-Blöcken.
Idea (one sentence): Was nicht hinaus darf, wird zum Farbblock; Masthead, Live-Feld, Zuordnung.
Live thing: wie oben, plus Anbieter/Zuordnung/Diagnose-Schalter; Reiter im Lotsen.
Layout words by section: unverändert, keine Wiederholung nebeneinander.
Scores: design 8 · usability 8 · creativity 8 · content 8 → 8.0
Caps applied: keine
Top three problems:
1. Tablet: Quadrat im Lotsen zu groß und zu stark vergrößert (tablet-page-01). Fix: max. 520 px.
2. Menü-Panel ohne Download-Knopf auf dem Telefon und ohne Tonstufe zur Seite. Fix: Knopf sichtbar, Panel auf --surface.
3. Ausgabekarte: Beschriftungen in nachgeladenen Teilen ohne Abstand; Preisabschluss auf dem Telefon ohne Abstand. Fix: Selektor und Abstand.
```

Bleibt: Die 50-svh-Abstände der Schweigepflicht-Blöcke lassen rechts viel Navy (vom Bauplan so gewollt, links steht das rosa Feld). Der erste Masthead-Ausschnitt zeigt mehrere angeschnittene Paneele.

### Animationen (review-animations, eigene Prüfung)

Eigene Kurve `cubic-bezier(0.23,1,0.32,1)` für alles Eintretende; Druck `scale(0.97)` in 140 ms; Hover nur unter `(hover:hover) and (pointer:fine)`; nur transform/opacity (Farben per `ease`). Signatur: Titelzeilen steigen aus der Maske (900 ms, 110 ms Versatz), danach Unterzeile und Knopf. Abschnitte: einmalige Einblendung mit 80-ms-Staffel; Schluss-Titel steigt zeilenweise; Mosaik driftet scrollgebunden (linear, `@supports`). Menü-Panel 240 ms auf / 200 ms zu. Reduzierte Bewegung: nur Deckkraft, keine Wege, kein Drift, kein Masthead-Zoom. Offener Punkt: Die nachgeladenen Teile der Ausgabekarte nutzen eine kurze Keyframe-Einblendung (220 ms) statt `@starting-style`; selten ausgelöst, daher belassen.
