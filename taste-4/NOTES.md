# Variante 4: Farbkapitel (tasteskill v2 + emil-design-eng)

Inhalte: `../shared/CONTENT.md` (dieselben wie alle Varianten). Diese Datei hält die Schritte 1–10 des Skills fest.

## 1. Brief

- Thema: Theralo, Windows-Desktop-App für niedergelassene Psychotherapeut:innen (GKV). Sitzung → Notiz → Bericht an den Gutachter (Muster PTV 3). Daten verschlüsselt auf dem Computer, KI nur pseudonymisiert.
- Publikum: Therapeut:innen, die Berichte abends und am Wochenende schreiben; skeptisch gegenüber KI und Cloud wegen § 203 StGB. Preise nur für Praxen, MVZ und Unternehmen.
- Die eine Handlung: **Für Windows herunterladen**. Zweitens: Video ansehen, Angebot anfragen.
- Stack: TanStack Start, statisch vorgerendert, eine CSS-Datei (`src/styles.css`), Epilogue selbst gehostet über `@fontsource/epilogue` (kein CDN).
- Marke: bewusst nicht übernommen (Richtung „Card pastels“ + Epilogue). Die Screenshots behalten ihr Petrol; sie stehen als Bilder auf Papier oder Farbfeld.
- Bilder, die es wirklich gibt: 8 echte Screenshots der Demo-Praxis, 8 Ausschnitte, das Video (4:50). Dazu drei Stimmungsfotos aus dem gezogenen Satz „Interior and table“ (Unsplash-Lizenz, lokal in `public/photos`, graustufig).

### Inventar

Übernommen aus `taste/NOTES.md` (Muster PTV 3, Chiffre, Platzhalter [PERSON_1] und „Pat.“, „Woher kommt das?“, Kontingent, Zeitmarken, Notfall-Kit, Unterschrift, § 203 StGB, KBV-Hinweise, Gutachter-Frage, Abende und Wochenenden). Für diese Variante zentral: **die vier Arten von Platzhaltern**, die Theralo vor jeder KI-Anfrage einsetzt: Personen ([PERSON_1]), Orte und Arbeitgeber ([ORT_1]), Daten ([DATUM_1]) und die Patientin bzw. der Patient („Pat.“).

## 2. Argument

| Abschnitt | Behauptung | Beweis |
|---|---|---|
| Hero | Theralo schreibt mit, und was hinausgeht, ist pseudonymisiert. | Mosaik: echter Lotse-Screenshot + die vier Platzhalter-Kacheln („[ORT_1] statt „Köln““); Download-Knopf |
| Ablauf | Von der Sitzung zum Bericht in vier Schritten. | Akkordeon mit vier echten Bildschirmen |
| Bericht-Lotse | Jeder Satz hat eine Quelle, Sie entscheiden Satz für Satz. | Sechs echte Ausschnitte auf der Scheibe, je mit einem Fakt |
| Schweigepflicht | Namen verlassen den Computer nie. | Lebendiger Pseudonymisierer + „Was wurde gesendet?“ |
| Schalter | Sie behalten die Kontrolle (lokal, KI-Wahl, nie an die KI, Notfall-Kit). | Vier Sätze mit Schalter, Folge in Klartext |
| Video | So sieht es in 5 Minuten aus. | Das Video mit Poster |
| Preise | Für Praxen: Software einmalig, monatlich KI + Instandhaltung, Individualisierung. | Drei gestufte Kacheln, E-Mail, Kostenlos testen |
| Fragen | Installation, SmartScreen, Kosten, Internet, KI, Aufnahmen, Mac. | 8 Bänder, alle offen |
| Schluss + Fuß | Unterschreiben tun nur Sie. | Download; Wortmarke aus Farbblöcken |

## 3. Richtung

Zugeteilt: **Colour chapters** (Seed 165826773, Sektor health, Ton quiet). Hero „Mosaic masthead, title on axis“, Typ Epilogue, Palette „Card pastels“, Bewegung „Masked headline“. Keine Neuziehung.

## 4. Idee

> Auf dieser Seite werden **die vier Platzhalter, die Theralo vor jeder KI-Anfrage einsetzt ([PERSON_1], [ORT_1], [DATUM_1], Pat.)**, zu **den Farbkapiteln**: jede Art hat ihre Farbe (Blau, Grün, Gelb, Türkis), das Mosaik im Kopf ist die Legende, die Kapitel, Schalter, Preis-Kacheln und die Wortmarke im Fuß tragen dieselben vier Farben, und im Schweigepflicht-Kapitel färbt sich Ihr eigener Satz beim Tippen genau so.

Mitbewerber-Test: Eine Cloud-Dokumentation kann ihre Farben nicht aus „was die KI statt des Namens sieht“ ableiten.

**Das eine lebendige Ding:** ein Textfeld mit einem Sitzungssatz; Namen, Orte, Daten und „Frau …“ werden live zu farbigen Platzhaltern (drei Beispielsätze per Knopf). Ohne Skript: der vorgerenderte Beispielsatz mit Platzhaltern. Daneben zwei weitere Bedienungen aus dem Bogen: die Scheibe des Lotsen (Namen wählen) und die Schalter-Bänder.

## Abweichungen vom Bogen

- Abschnittsfolge nach dem Argument umgestellt: Ablauf (Akkordeon) vor dem Lotsen (Scheibe); Schweigepflicht als schwarzes Kapitel vor den Schalter-Bändern; Video als eigenes türkises Kapitel.
- Hero: Überschrift ist der Name plus Verb („Theralo / schreibt mit.“), der Claim „Dokumentation, die in der Praxis bleibt.“ steht als Standfirst links; die Kopfzeile ist ein eigener Streifen über dem Mosaik (sticky), mit fünf Ankern statt drei und einem echten Download-Knopf. Eine Mosaik-Zelle ist der echte Lotse-Screenshot statt eines Fotos.
- Telefon-Kopf: Mosaik-Beschriftungen oben in den Kacheln (sonst als Eyebrow über dem h1 gelesen).
- Akkordeon: Breite springt sofort (kein `flex-basis`-Übergang, um nur transform/opacity zu animieren); der Inhalt steigt in 320 ms ein.
- Scheibe: Inaktive Namen in `--muted` (volle Deckkraft), aktiver in Schwarz und fett. Telefon: Namen umbrechend statt seitlich scrollend, Überschrift vor der Scheibe.
- Schalter-Bänder: vier statt fünf; Satz in Spalte 1–6, Folge in 7–10, Schalter rechts (sonst leere Mitte). Folge ist Text, keine Zahlen (es gibt keine echten).
- Preise: statt Preis „einmalig / monatlich / auf Wunsch“; die dritte Kachel reicht bis zur Oberkante der Überschrift. Unter 1280 px gestapelt.
- CTA auf dem Telefon in der Überschriftengröße statt Display (sonst wird „Unterschreiben“ abgeschnitten).
- Fotos: drei aus „Interior and table“ statt Archivbildern; sie zeigen Räume, nie das Produkt.

## Gate und Kritik

- `npm run build` und `npx tsc --noEmit`: sauber. Server: `PORT=3203 node .output/server/index.mjs`.
- `lint.mjs src`: **0 FAIL, 0 WARN**.
- `inspect.mjs` (Produktions-Build, 1440/768/390): **0 FAIL, 1 WARN** (`card-rows`: die vier Platzhalter-Kacheln im Mosaik und die drei Preis-Kacheln; beide sind die Geometrie des Bogens, die Kacheln haben verschiedene Farben und, bei den Preisen, verschiedene Höhen). 5 Schriftgrößen (14/19/33/82/110 px bei 1440), nur Epilogue.
- Playwright (Edge): keine Konsolenfehler oder -warnungen bei 375/390/768/1100/1280/1440; kein horizontaler Überlauf; Menü: `aria-expanded`, Fokus auf ersten Link, Esc schließt und gibt Fokus zurück, Link-Tipp schließt, geschlossen `visibility:hidden` + `inert`; `#preise` landet unter der Leiste (scroll-margin).

```
ROUND 1
Seen in one second: „Theralo schreibt mit.“ unter einem bunten Mosaik.
Idea: Die vier Platzhalter-Farben sind die Kapitel-Farben.
Live thing: Pseudonymisierer zum Selbsttippen.
Layout words: hero=mosaic / ablauf=accordion / lotse=disc / schweige=split-demo / schalter=bands / video=full-bleed / preise=steps / fragen=bands / schluss=statement / fuß=blocks
Scores: design 7.5 · usability 7.5 · creativity 8 · content 8 → 7.7
Caps applied: keine (0 FAIL nach Korrektur)
Top three:
1. Scheibe (desktop-page-01): Ausschnitt größer als die Scheibe, Fakt überlappt den Knopf „Übernehmen“ und klebt 3 px am Rand → Objekt auf ~78 % der Scheibe, Fakt-Breite aus dem Restplatz berechnet.
2. Schalter-Bänder (desktop-page-02): Folge-Text in Satzgröße fett, Satz und Schalter mit 650 px Leere dazwischen → Folge als Fließtext in Spalte 7–10.
3. Tablet (tablet-page-01): Mosaik-Beschriftungen abgeschnitten, Scheibe überlappt die Namensliste, CTA-Knopf umbrochen → kleine Beschriftung oben, Scheibe gestapelt, CTA gestapelt.

ROUND 2
Seen in one second: dasselbe; die Farbfolge Blau → Papier → Schwarz → Bänder → Türkis → Kacheln → Magenta → Schwarz trägt.
Scores: design 8 · usability 8 · creativity 8 · content 8 → 8.0
Top three:
1. Telefon (mobile-page-02): „Unterschreiben“ rechts abgeschnitten → Überschriftengröße auf dem Telefon.
2. Telefon (mobile-page-01): Video-Kapitel mit großer leerer Türkis-Fläche → min-height auf dem Telefon aus.
3. 1100 px: „[PERSON_1]“ breiter als die Kachel → Kachelbeschriftung unter 1280 in Fließtextgröße.
```

Offen: Die Lotse-Scheibe lässt auf dem Desktop oben links viel Papier (so im Bogen); die dritte Preis-Kachel hat unten viel Gelb. Beides bewusst, aber die schwächsten Stellen.

### Bewegung (`review-animations`)

| Before | After | Why |
| --- | --- | --- |
| `transition: background-color` auf Knöpfen, Bändern, Schalter, Listen | entfernt; Zustand springt, nur transform/opacity bewegen sich | nur GPU-Eigenschaften |
| Scheibe wechselt `background-color` | sechs gestapelte Scheiben, Überblendung per `opacity` 300 ms | transform/opacity only |
| Menü-Panel `translateY` auch bei reduzierter Bewegung | bei `reduce` nur Deckkraft | sanfter, nicht null |
| Akkordeon-Inhalt 420 ms | 320 ms, ease-out | kürzer für UI |
| Akkordeon-Reiter ohne Druck-Feedback | `scale(0.97)` auf `:active` | Feedback |

Bleibt: Masked headline (900 ms, 110 ms versetzt, Signatur), Einstiege je Abschnittsteil (24 px, 80 ms gestaffelt, einmal), Fotos im Mosaik setzen sich von `scale(1.08)` (1,8 s), Fuß-Blöcke wachsen aus `scaleY(0.6)`, neue Platzhalter steigen 4 px. Alles mit `cubic-bezier(0.23,1,0.32,1)`, Hover nur unter `(hover:hover) and (pointer:fine)`, reduzierte Bewegung = nur Deckkraft. Urteil: Approve.

### Bilder und Nachweise

- 8 Screenshots + Ausschnitte der Demo-Praxis (eigene), Video (eigenes).
- Stimmungsfotos (Unsplash-Lizenz, via picsum.photos, lokal): Logan Adermatt (Stuhl am Fenster, id 311), Breather (Tisch und Stühle, id 625), Padurariu Alexandru (Tisch mit Vase, id 1068). Nachweis im Fuß unter „Fotos“. Ersetzbar durch eigene Praxisfotos.
- Vor dem Start: Impressum und Datenschutzerklärung (Platzhalter), E-Mail-Adresse vorläufig.
