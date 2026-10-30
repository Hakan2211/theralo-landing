# Variante B: Arbeitsnotizen (tasteskill v2 + emil-design-eng)

Inhalte: `../shared/CONTENT.md` (dieselben wie Variante A). Diese Datei hält die Schritte 1–5 des Skills fest.

## 1. Brief

- Thema: thera, Windows-Desktop-App für niedergelassene Psychotherapeut:innen (GKV). Sitzung → Notiz → Bericht an den Gutachter (Muster PTV 3).
- Publikum: Therapeut:innen, die Berichte abends und am Wochenende schreiben; skeptisch gegenüber KI und Cloud wegen § 203 StGB.
- Die eine Handlung: **Für Windows herunterladen** (GitHub-Release-Link). Zweitens: Video ansehen.
- Stack: TanStack Start, Tailwind v4, statisch vorgerendert, Vercel.
- Marke: Papier #f7f6f2, Tinte #23272b, Petrol #337875, Inter + Libertinus Serif (aus der App; die Screenshots tragen sie).
- Bilder, die es wirklich gibt: 8 echte Screenshots der Demo-Praxis (2×), ein 4:50-Video (MP4, Demo-Praxis), App-Icon. Kein Foto, kein Bildgenerator.

### Inventar (gehört thera, keinem Mitbewerber)

1. Das Muster **PTV 3** selbst: „Bericht an die Gutachterin / den Gutachter“, sieben nummerierte Abschnitte (Relevante soziodemographische Daten … Zusätzlich erforderliche Angaben bei einem Umwandlungsantrag).
2. Die **Chiffre** (S140391): der Bericht trägt nur die Chiffre, nie den Namen. Pseudonym als Ritual des Fachs.
3. Platzhalter **[PERSON_1]** und „Pat.“: was den Rechner verlässt, ist sichtbar pseudonymisiert.
4. „**Woher kommt das?**“: jeder KI-Satz zeigt seine Quelle, „Sitzung 1 · 09.10.2026“, mit Zitat.
5. Das **Kontingent**: „10 von 12 Sitzungen“, KZT 1 → Umwandlungsantrag; die Frist kommt mit der Zählung.
6. Die **Zeitmarke** in der Abschrift (00:12, 00:24): jeder Fakt zeigt auf eine Sekunde im Gespräch.
7. Das **Notfall-Kit**: ein ausgedruckter Schlüssel auf Papier, beim ersten Start.
8. Die **Unterschrift**: Notiz und Bericht werden unterschrieben, danach nur noch Nachtrag.
9. **§ 203 StGB**, Schweigepflicht; AES-256; „Alle Daten bleiben auf diesem Gerät“.
10. Die Leitfaden-Hinweise der KBV unter jedem Abschnitt.
11. Der Gutachter-Satz: „Ein Gutachter würde fragen: Woran zeigt sich, dass die Kurzzeittherapie nicht ausreicht?“
12. Die Tageszeit des Problems: Berichte entstehen abends und am Wochenende.

## 2. Argument

| # | Behauptung | Beweis |
|---|---|---|
| Hero | thera schreibt den Bericht an den Gutachter mit, und alles bleibt auf Ihrem Rechner. | Der Bericht-Lotse, groß, echt; Download-Knopf |
| 2 | Aus der Sitzung wird eine Notiz, aus Notizen ein Bericht. | Drei echte Bildschirme in Reihenfolge: Notiz mit Zeitmarken → Lotse → Gutachter-Check |
| 3 | Jeder Satz hat eine Quelle, Sie entscheiden Satz für Satz. | „Woher kommt das?“ als Ausschnitt; das Satz-für-Satz-Ding (live) |
| 4 | Die Schweigepflicht bleibt gewahrt. | Der gesendete Text, pseudonymisiert; Liste „Nie an die KI“ |
| 5 | Sie behalten den Überblick über Fristen. | Heute/Fällig + Kontingent „10 von 12“ |
| 6 | So sieht es in 5 Minuten aus. | Das Video |
| 7 | In vier Schritten startklar, ohne Konto. | Installationsschritte, Voraussetzungen, Download |
| 8 | Offene Fragen. | FAQ (6 echte Fragen) |
| Fuß | thera, Version, Quellcode, Impressum. | – |

## 3. Richtung

Gezogen: `one-motif` (Seed 1811534241, `--keep palette,type`), Hero „Tabbed folder stack“. Gewählt statt `uneven-photographs` (braucht Fotos, die es nicht gibt) und `borrowed-category` (Formular-Look würde die verbotene Nummerierung erzwingen).

## 4. Idee

> Auf dieser Seite wird **der Reiter der Akte, der statt des Namens eine Chiffre oder einen Platzhalter trägt**, zur **einen Form**: Aktenreiter im Hero, die Oberkante des Knopfs, der Rahmen um jeden Bildschirm, die Aufzählungszeichen, das Band zwischen den Hälften.

Mitbewerber-Test: Cloud-Dokumentationssoftware kann „was hinausgeht, trägt einen Platzhalter“ nicht unterschreiben.

**Das eine lebendige Ding:** ein Satz zum Selbsttippen; Namen, Orte und Daten werden während des Tippens zu Platzhalter-Reitern, die Patientin wird zu „Pat.“. Ohne Skript: ein festes Vorher/Nachher.

## Abweichungen vom Bogen (für den Bericht)

- Keine gefundenen Archivbilder, keine Stimmungsfotos („Fog and quiet“): das Thema ist Software mit echter Oberfläche; die 8 echten Screenshots, Ausschnitte daraus und das Video sind die Bilder.
- Installation sitzt in den FAQ (erste Kachel, offen), weil die Abschnittsfolge des Bogens keinen eigenen Platz dafür hat.
- „Object on a disc“: statt Scheibe die Aktenform, statt Objektfoto ein Ausschnitt der Oberfläche.

## Gate und Kritik

- `lint.mjs`: 0 FAIL, 0 WARN. `inspect.mjs` (Produktions-Build, 1440/768/390): 0 FAIL, 1 WARN (`palette-cream`: Papierton #f7f6f2 ist der Markenton der App, mit `--keep palette` behalten).
- Runde 1: Design 7,5 · Benutzbarkeit 7 · Kreativität 8 · Inhalt 8 → 7,6. Behoben: Download-Knopf unter der ersten Bildschirmhöhe, abgeschnittene Akkordeon-Beschriftungen, Kacheln im Praxisalltag überdecken ihre Beschriftung (Telefon).
- Runde 2: Design 8 · Benutzbarkeit 8 · Kreativität 8 · Inhalt 8 → 8,0. Behoben: Kachelfarben (Papier auf Papier), Autopilot-Schalter zu groß.
- Animationen nach `review-animations`: Platzhalter-Reiter blenden nur neu erscheinende ein (keine Animation pro Tastendruck), reduzierte Bewegung behält Deckkraft und lässt Bewegung weg. Offener Punkt: das Akkordeon animiert `flex-grow` (Layout), wie der Bogen es verlangt; selten geklickt, bei reduzierter Bewegung aus.
- Bilder: 8 echte Screenshots der Demo-Praxis + Ausschnitte daraus + das Video. Keine gefundenen Archivbilder, keine Stimmungsfotos.
- Muster-/Platzhalterinhalte vor dem Start: Impressum und Datenschutzerklärung.
