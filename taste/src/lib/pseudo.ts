// A small in-browser imitation of thera's pseudonymizer for the live demo. The app works on its
// own dictionary per person; this only knows a handful of names, places and date shapes.

export type Piece = { text: string; tag?: string; kind?: 'person' | 'place' | 'date' | 'patient' }

const FIRST_NAMES = [
  'Anna', 'Lena', 'Jonas', 'Miriam', 'Paul', 'Lisa', 'Thomas', 'Sabine', 'Peter', 'Julia', 'Max', 'Sarah', 'Michael',
  'Laura', 'Stefan', 'Katrin', 'Tim', 'Sophie', 'Markus', 'Elif', 'Mehmet', 'Ayşe', 'Lukas', 'Marie', 'Ben', 'Emma',
]
const PLACES = [
  'Köln', 'Berlin', 'Hamburg', 'München', 'Frankfurt', 'Stuttgart', 'Düsseldorf', 'Leipzig', 'Dortmund', 'Essen',
  'Bremen', 'Dresden', 'Hannover', 'Nürnberg', 'Bonn', 'Münster', 'Aachen', 'Mallorca', 'Ehrenfeld', 'Siemens', 'Bosch',
]
const MONTHS = 'Januar|Februar|März|April|Mai|Juni|Juli|August|September|Oktober|November|Dezember'

const RULES: { kind: Piece['kind']; re: RegExp }[] = [
  // "Frau Sommer", "Herrn Albrecht": the patient in the demo is the person addressed this way.
  { kind: 'patient', re: /\b(?:Frau|Herr|Herrn)\s+[A-ZÄÖÜ][a-zäöüß]+/g },
  { kind: 'date', re: new RegExp(`\\b\\d{1,2}\\.\\s?(?:${MONTHS})(?:\\s\\d{4})?|\\b\\d{1,2}\\.\\d{1,2}\\.(?:\\d{2,4})?`, 'g') },
  { kind: 'place', re: new RegExp(`\\b(?:${PLACES.join('|')})\\b`, 'g') },
  { kind: 'person', re: new RegExp(`\\b(?:${FIRST_NAMES.join('|')})(?:\\s[A-ZÄÖÜ][a-zäöüß]+)?\\b`, 'g') },
]

const LABEL = { person: 'PERSON', place: 'ORT', date: 'DATUM' } as const

export function pseudonymize(input: string): Piece[] {
  type Hit = { start: number; end: number; kind: NonNullable<Piece['kind']> }
  const hits: Hit[] = []
  for (const { kind, re } of RULES) {
    for (const m of input.matchAll(re)) {
      const start = m.index ?? 0
      const end = start + m[0].length
      // First rule wins where matches overlap.
      if (!hits.some((h) => start < h.end && end > h.start)) hits.push({ start, end, kind: kind! })
    }
  }
  hits.sort((a, b) => a.start - b.start)

  const numbers = new Map<string, string>()
  const counters = { person: 0, place: 0, date: 0 }
  const pieces: Piece[] = []
  let at = 0
  for (const h of hits) {
    if (h.start > at) pieces.push({ text: input.slice(at, h.start) })
    const original = input.slice(h.start, h.end)
    if (h.kind === 'patient') {
      pieces.push({ text: original, tag: 'Pat.', kind: 'patient' })
    } else {
      // The same name gets the same placeholder every time it appears.
      let tag = numbers.get(original)
      if (!tag) {
        counters[h.kind] += 1
        tag = `[${LABEL[h.kind]}_${counters[h.kind]}]`
        numbers.set(original, tag)
      }
      pieces.push({ text: original, tag, kind: h.kind })
    }
    at = h.end
  }
  if (at < input.length) pieces.push({ text: input.slice(at) })
  return pieces
}

export const SAMPLES = [
  'Frau Sommer erzählt, dass ihre Schwester Anna am 12. Oktober aus Köln anrief und den Besuch absagte.',
  'Herr Albrecht berichtet, sein Vater Thomas habe nach der Mathearbeit am 21.10. abwertend reagiert.',
  'Frau Keller fühlt sich bei Siemens überfordert; ihr Kollege Markus übernimmt ab 3. November das Projekt.',
]
