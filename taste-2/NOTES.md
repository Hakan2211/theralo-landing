# Variante C: Arbeitsnotizen (tasteskill v2 + emil-design-eng, Richtung „The split stage“)

Inhalte: `../shared/CONTENT.md` (für alle Varianten gleich). Diese Datei hält die Schritte des Skills fest.

## 1. Brief

- Thema: Theralo, Windows-Desktop-App für niedergelassene Psychotherapeut:innen (GKV). Sitzung → Notiz → Bericht an den Gutachter (Muster PTV 3). Daten verschlüsselt auf dem Computer, jede KI-Anfrage pseudonymisiert.
- Publikum: Therapeut:innen, die Berichte abends und am Wochenende schreiben; skeptisch gegenüber KI und Cloud (§ 203 StGB). Preise nur für Praxen, MVZ und Unternehmen.
- Die eine Handlung: **Für Windows herunterladen**. Zweitens: Video ansehen; drittens (Praxen): Angebot anfragen.
- Stack: TanStack Start, Tailwind v4 (nur Reset und wenige Hilfsklassen, sonst eigenes CSS), statisch vorgerendert.
- Marke: bewusst **nicht** übernommen. Die Richtung bringt Sand und Moos, Gambarino und General Sans (selbst gehostet unter `public/fonts`, keine CDN-Anfrage).
- Bilder, die es wirklich gibt: 8 echte Screenshots der Demo-Praxis und Ausschnitte, das 4:50-Video, zwei Stimmungsfotos aus dem gezogenen Satz („Interior and table“, Unsplash, lokal in `public/photos`).

### Inventar

Übernommen aus `../taste/NOTES.md` (PTV 3, Chiffre S140391, [PERSON_1] und „Pat.“, „Woher kommt das?“, Kontingent 10 von 12, Zeitmarke 00:12, Notfall-Kit, Unterschrift, § 203 StGB / AES-256, KBV-Leitfaden, die Gutachter-Frage, Berichte am Abend). Dazu für diese Variante:

13. Der Satz der App selbst: „**Alle Daten bleiben auf diesem Gerät**“ (Ansicht Heute) und „Datenbank verschlüsselt“ (Fußzeile jeder Ansicht).
14. Der Claim „Dokumentation, die in der Praxis **bleibt**“: das Produkt verspricht Stillstand des Ortes, nicht Bewegung.

## 2. Argument

| Abschnitt | Behauptung | Beweis |
|---|---|---|
| Hero | Theralo dokumentiert mit Ihnen, und alles bleibt auf Ihrem Computer. | Echter Bericht-Lotse in Originalgröße in der festen Hälfte; Download-Knopf |
| So geht's | Aus der Sitzung wird in vier Schritten ein Bericht, plus Alltag (Kontingent, Kalender). | Fünf Absätze mit Einstieg; zu jedem wechselt der feste Bildschirm, darunter Ausschnitte |
| Video | So sieht es in 5 Minuten aus. | Das Video mit Poster |
| Bericht-Lotse | Er bereitet vier Dinge vor: Entwurf, Quelle, Gutachter-Check, Bericht. | Index zum Anklicken, das Dokument in HTML (data-ui) |
| Schweigepflicht | § 203 ist eingebaut: lokal, pseudonymisiert, Wahl der KI, nie an die KI. | Feste Vorschau „Was wurde gesendet?“, die jede Einstellung sofort ändert |
| Preise | Für Praxen, aus drei Teilen, auf Anfrage; testen kostenlos. | Zwei Farbfelder, Angebot anfragen (mailto), Kostenlos testen |
| Fragen | Installation, SmartScreen, Voraussetzungen, Kosten, Internet, KI, Aufnahmen, Mac. | 8 Antworten als Lesetext |
| Schluss + Fuß | Weniger Abende am Bericht. | Letztes Foto, Download; Menü groß, Impressum, Datenschutz |

## 3. Richtung

Zugeteilt: **The split stage** (Seed 1172244463, Sektor health, Ton quiet), Hero „Menu column, sticky photograph“, Typ Gambarino / General Sans, Farbe „Sand and moss“, Bewegung „Slow crossfade“. Die Richtung war vorgegeben; sie passt, weil das Versprechen des Produkts selbst Stillstand ist (die Daten bleiben, wo sie sind).

## 4. Idee

> Auf dieser Seite wird **der eigene Computer, auf dem alles bleibt**, zur **festen Bühnenhälfte**: die echte Theralo-Oberfläche steht in Originalgröße still, während der Text an ihr vorbeiläuft; sie wechselt nur den Bildschirm, nie den Ort.

Mitbewerber-Test: Eine Cloud-Dokumentation kann „die Hälfte, die sich nie bewegt“ nicht als Beweis benutzen; ihr Versprechen ist das Gegenteil (überall verfügbar).

**Das lebendige Ding:** die feste Vorschau „Was wurde gesendet?“ im Abschnitt Schweigepflicht. Man tippt einen eigenen Satz (Namen, Orte, Daten werden zu [PERSON_1], [ORT_1], [DATUM_1], die Patientin zu „Pat.“), wählt OpenRouter / Requesty / lokales Modell, schaltet Einwilligung und USB-Sicherung, und die Vorschau ändert sich sofort. Zweites, kleineres: der Index des Bericht-Lotsen tauscht das Dokument. Ohne Skript: fester Beispielsatz, erstes Dokument sichtbar.

## Abweichungen vom Bogen

- Feste Hälfte zeigt **Screenshots in Originalgröße auf Moosgrün** statt eines Fotos („or the object centred on a flat field“ erlaubt das). Der Balken unten trägt statt Öffnungszeiten und Adresse die Bildunterschrift des aktuellen Bildschirms und „Demo-Praxis, erfundene Personen“.
- Ecken eckig, ein Knopf-Format (Bogen-Anpassung). Wortmarke des Heros wandert in die geforderte Menüleiste.
- Abschnittsfolge an das Argument angepasst: So geht's sitzt mit dem Hero auf derselben Bühne; Video eingefügt (Pflicht); „pricing: Two plans“ trägt Anfrage (links, Moos) gegen die drei Preisbestandteile (rechts, Sand), keine Preise.
- „Fixed output, live controls“: Blöcke 30vh statt 50vh auseinander; auf dem Telefon ist die Vorschau nicht klebend (der Inspektor meldete verdeckte Überschriften), sondern steht vor den Bedienelementen.
- Showcase-Namen ohne Artikel („Gutachter-Check“ statt „Der Gutachter-Check“), damit jeder auf eine Zeile passt.
- Keine Archivbilder (Software mit echter Oberfläche); zwei gezogene Stimmungsfotos (Logan Adermatt: Stuhl am Fenster in der Dämmerung, im Schlussbild gespiegelt; David Mao: grüne Tasse am Morgen, im Fuß), Gutschrift im Fuß. Austauschbar.
- Crossfade: alter Bildschirm geht in 500 ms, neuer kommt in 1,1 s nach 350 ms, damit sich zwei Oberflächen nie lange überlagern; bei reduzierter Bewegung 240 ms Blende.

## Gate und Kritik

- `lint.mjs src`: 0 FAIL, 0 WARN (Ränder der App-Ausschnitte mit `taste-skill-ignore`, sie sind data-ui).
- `inspect.mjs` (Produktions-Build, 1440/768/390): 0 FAIL, 0 WARN. Größen 14 / 19 / 26 / 44 / 71 px, Gambarino + General Sans geladen, 13 Bilder, Hero-Medium 71 %.
- Playwright (Edge): keine Konsolenfehler, kein horizontaler Überlauf bei 375/390/768/1440; Menü: aria-expanded, Esc schließt und gibt Fokus zurück, geschlossen `visibility:hidden` + `inert`, schließt beim Link.
- Runde 1: Design 7,5 · Benutzbarkeit 8 · Kreativität 8 · Inhalt 8 → 7,8. Behoben: Hero-Titel auf drei Zeilen (Maß 13ch → 17ch), Telefon-Vorschau klebte über der Überschrift, Video höher als ein Bildschirm (jetzt neben dem Titel), Sandloch unter dem Lotsen, zwei Schritte ohne Beleg, Ausschnitte wurden durch eine CSS-Spezifität leer gerendert.
- Runde 2: Design 8 · Benutzbarkeit 8 · Kreativität 8 · Inhalt 8 → 8,0. Behoben: Segmentwahl auf dem Telefon umbrechend, zu langes Sandband vor den Preisen.
- Animationen nach `review-animations`: Ease-out `cubic-bezier(0.23,1,0.32,1)`, Druck `scale(0.97)`, Hover nur unter `(hover:hover) and (pointer:fine)`, nur transform/opacity (Farbübergänge an Knöpfen ausgenommen), keine Keyframes, kein `scale(0)`, jede Bewegung mit reduzierter Fassung. Bewusst lang: der Bühnen-Crossfade (Signatur) und das langsame Schlussbild (2,4 s), beide nicht interaktiv.
- Offen: Impressum und Datenschutzerklärung sind Platzhalter; die beiden Stimmungsfotos sind austauschbar; Gutachter-Check-Fragment und PTV-3-Blatt sind aus der Demo-Praxis nachgebaut.
