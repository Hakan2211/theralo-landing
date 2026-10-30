# Prompts für gpt-image-2: Entwürfe der Landingpage

These are for inspiration only. The real pages use real screenshots of the app; generated UI does not go on the site.

**Usage:**
- Use the API (`model: "gpt-image-2"`) or ChatGPT.
- Format: `size: "1536x1024"` (desktop, landscape) or `"1024x1536"` (phone, portrait); `quality: "high"`.
- Paste one block at a time. Better results come from the opening "Shared context" block placed in front of every prompt.
- The model renders German text correctly most of the time when it's in quotes. Keep each text short.

---

## Shared context (place in front of every prompt)

```
A website design mockup, shown flat and straight-on as a full browser viewport (no device frame, no perspective,
no mockup scene). Product: "Theralo", a Windows desktop app for psychotherapists in Germany that writes session
notes and reports to the insurance reviewer (form "PTV 3") from recorded sessions. All data stays encrypted on
the therapist's own computer; text sent to AI is pseudonymized first (names become placeholders like
"[PERSON_1]"). Audience: careful, privacy-minded German therapists. Tone: calm, precise, trustworthy, not techy,
not clinical-cold. All on-page text is German. Where the app appears, show it as a flat screenshot of a calm
document-editing app: light warm-white UI, left sidebar, a report form with numbered sections, a right panel
titled "Woher kommt das?". No stock photos of people, no smiling doctors, no brains, no glowing AI orbs, no
gradients, no drop shadows, no glassmorphism, no emoji, no lorem ipsum. Crisp typography, generous whitespace,
pixel-precise alignment on a 12-column grid.
```

---

## Option 1: Aktenreiter (one-motif, current version)

**1a, Desktop hero (1536x1024)**
```
Top: a slim near-black (#191814) menu bar with the wordmark "Theralo" in a classic book serif on the left; small
links "Ablauf", "Bericht-Lotse", "Schweigepflicht", "Preise", "Fragen" in the middle; a petrol (#337875) button
"Herunterladen" on the right whose top corners are cut at an angle like a file-folder tab. Below on the same dark
ground, the word "Theralo" huge and centered in a light book serif (#ece9e3), and under it one serif sentence:
"Sitzungsnotizen und Berichte an den Gutachter, aus Ihren Sitzungen geschrieben." Lower third: a stack of
overlapping file folders seen from the front, each a horizontal band in a petrol shade from dark to light, each
with a trapezoid tab labelled "Ablauf", "Bericht-Lotse", "Schweigepflicht", "Fragen". The front folder is warm
paper (#f7f6f2) and holds a petrol tab-shaped button "Für Windows herunterladen" and the start of an app
screenshot.
```

**1b, Full page (1024x1536, scaled down)**
```
The whole landing page as one tall scaled-down image: dark hero with a folder stack; a horizontal accordion of
five petrol panels with vertical labels "Aufnehmen", "Autopilot", "Bericht", "Prüfen", "Abgeben"; an index list
in large serif next to a petrol plate holding an app crop; a grid of beige fact tiles with bold labels "AES-256",
"Kein Konto", "[PERSON_1]"; a pricing section with three tall colour tiles; an FAQ of beige tiles; a footer with
a wordmark built from coloured blocks of uneven height. Paper ground #f7f6f2, ink #23272b, petrol accents.
```

**1c, Phone (1024x1536)**
```
A phone-width page (390 px wide, shown at 2x), centered on a plain warm-grey background. Dark top bar: "Theralo"
on the left, "Menü" on the right. Big serif "Theralo", a short sentence, then a stack of petrol folder bands with
tabs, and a full-width petrol button "Für Windows herunterladen" with angled top corners.
```

**1d, Pricing close-up (1536x1024)**
```
Pricing section of the page, no prices shown. Heading in book serif: "Preisgestaltung für Praxen". To the right:
"Für Praxen, MVZ und Unternehmen, mit einem Preis, der zu Ihrer Praxis passt." Below, three tall file-folder
cards side by side, each with an empty trapezoid tab on top: dark petrol "Die Software", mid petrol "KI und
Instandhaltung", pale mint "Individualisierung", each with one short line of body text at the bottom. Under them
a beige band: "Preis auf Anfrage", the line "Kontaktieren Sie uns für Preisgestaltung und Kostenvoranschlag." and
a black button "Angebot anfragen" with angled top corners.
```

---

## Option 2: Die geteilte Bühne (split-stage, sand and moss)

**2a, Desktop hero (1536x1024)**
```
A split layout, 45/55. The left half is a calm scrolling column on sand (#ddd6c6): a thin menu at the top
("Theralo" wordmark in a soft high-contrast display serif, links "Ablauf", "Bericht-Lotse", "Schweigepflicht",
"Preise", "Fragen" stacked as a vertical menu column), then the headline "Berichte, die aus Ihren Sitzungen
entstehen" in the display serif, two lines of body text in a clean neo-grotesk, and a moss-green (#4f6238)
button "Für Windows herunterladen". The right half is fixed: one large app screenshot sitting on a flat
slightly darker sand field (#d2cab8), edge to edge, like an object on a table. Ink #2a2a26.
```

**2b, Full page (1024x1536)**
```
A tall scaled-down page whose right half stays the same app screenshot all the way down (sticky stage) while the
left column changes: hero, "Von der Sitzung zum Bericht" with five short steps, "Bericht-Lotse", "Schweigepflicht"
with a short list, "Preisgestaltung für Praxen" with three text blocks, "Fragen", footer. Sand, moss and dark-ink
palette; a soft display serif and a neo-grotesk.
```

**2c, Phone (1024x1536)**
```
Phone-width page (390 px at 2x). Sand ground. Top bar "Theralo" with a "Menü" button. The stage becomes a full-
width app screenshot under the headline "Berichte, die aus Ihren Sitzungen entstehen", then a full-width moss
button "Für Windows herunterladen".
```

**2d, Pricing close-up (1536x1024)**
```
Split layout: right half the sticky stage now shows a crop of the app's "Vorschau PTV 3" report preview on sand.
Left column: heading "Preisgestaltung für Praxen", three short blocks titled "Die Software", "KI und
Instandhaltung", "Individualisierung", each one sentence; then "Kontaktieren Sie uns für Preisgestaltung und
Kostenvoranschlag." and a moss button "Angebot anfragen", a quiet text link "kostenlos testen".
```

---

## Option 3: Der gedruckte Jahresbericht (editorial-report, navy and pink)

**3a, Desktop hero (1536x1024)**
```
Laid out like a printed annual report. Deep navy ground (#1a2039), all type in a soft pink (#f9a3c0). A fixed
vertical axis at 42% of the width: headings and body text start exactly on it; the left 42% holds small side notes
or stays empty. Top: a slim menu "Theralo" (left), links on the axis. A wide masthead band across the top: a
cropped app screenshot printed as a two-colour image (navy and pink duotone). Below it a tight oversized serif
title starting on the axis: "Der Bericht schreibt sich mit", and a two-sentence standfirst in a clean sans. A pink
solid button with navy text "Für Windows herunterladen".
```

**3b, Full page (1024x1536)**
```
Tall scaled-down page in navy and pink, like a magazine feature: masthead image band, title on the axis, then
chapters with solid pink colour blocks the way a two-colour print job uses them: "Von der Sitzung zum Bericht",
"Bericht-Lotse", "Schweigepflicht" (a pull quote "Was die KI zu sehen bekommt"), "Preisgestaltung für Praxen",
"Fragen". Side notes in small type in the left margin zone.
```

**3c, Phone (1024x1536)**
```
Phone-width page (390 px at 2x), navy ground, pink type. Menu bar "Theralo" / "Menü". Duotone app crop as
masthead, title "Der Bericht schreibt sich mit", standfirst, a full-width pink button "Für Windows
herunterladen".
```

**3d, Pricing close-up (1536x1024)**
```
A spread from the printed report: on the axis the heading "Preisgestaltung für Praxen"; three columns of report-
style text titled "Die Software", "KI und Instandhaltung", "Individualisierung"; in the left margin zone a side
note "Für Praxen, MVZ und Unternehmen". A full-width solid pink block with navy text: "Kontaktieren Sie uns für
Preisgestaltung und Kostenvoranschlag." and a navy button "Angebot anfragen".
```

---

## Option 4: Farbkapitel (colour-chapters, card pastels)

**4a, Desktop hero (1536x1024)**
```
The first chapter of a page made of full-bleed flat colour fields. Off-white ground (#f7f7f5), black type in a
geometric grotesk with large, tight headlines. A mosaic masthead of four cropped app screenshots in pastel card
frames across the top half; below it the title "Theralo" huge, starting on a vertical axis, and the line
"Sitzungsnotizen und Berichte an den Gutachter, lokal auf Ihrem Computer." Menu bar at the top: "Theralo" left,
section links, a magenta (#d0106f) button "Herunterladen" right.
```

**4b, Full page (1024x1536)**
```
Tall scaled-down page made of floor-to-ceiling flat colour chapters butted together with no gaps: off-white hero,
a pale mint chapter "Von der Sitzung zum Bericht", a pale lilac chapter "Bericht-Lotse" with one app screenshot, a
pale yellow chapter "Schweigepflicht", a pale pink chapter "Preisgestaltung für Praxen", an off-white "Fragen",
a black footer. Each chapter holds one thing: a huge heading with a short paragraph, or one picture, or one list.
```

**4c, Phone (1024x1536)**
```
Phone-width page (390 px at 2x): off-white hero with a 2x2 mosaic of pastel app crops, "Theralo" large, a short
line, a full-width magenta button "Für Windows herunterladen"; the next chapter in pale mint starts at the
bottom.
```

**4d, Pricing close-up (1536x1024)**
```
One full-bleed pale pink chapter: huge black heading "Preisgestaltung für Praxen" across the left, a short
paragraph; three stacked rows "Die Software", "KI und Instandhaltung", "Individualisierung", each with one
sentence; at the bottom "Kontaktieren Sie uns für Preisgestaltung und Kostenvoranschlag." and a magenta button
"Angebot anfragen".
```

---

## Free exploration (no fixed direction)

```
Design a landing page hero for "Theralo", calm German practice software for psychotherapists: session notes and
insurance reports written from recorded sessions, everything stays encrypted on the therapist's own computer.
Invent an unexpected but trustworthy art direction. It must not look like a generic SaaS template (no centered
headline over a floating laptop, no gradient, no glow). Show a menu bar with "Ablauf", "Bericht-Lotse",
"Schweigepflicht", "Preise", "Fragen" and a button "Für Windows herunterladen". Headline in German, at most 8
words. Flat, straight-on, 1536x1024.
```

Variation: add „Stil: wie ein Schweizer Plakat der 60er“, „Stil: wie ein Leinenbucheinband mit Prägung“ or
„Stil: wie ein ruhiges skandinavisches Möbelmagazin“ to the end.
