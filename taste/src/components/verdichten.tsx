// Many into one: facts scattered across sessions, pulled into one strand, laid out as the seven
// sections of the PTV 3 form. Each mark is the page's tab shape. Positions are seeded, so the
// prerendered SVG and the hydrated one match.

function rand(seed: number) {
  let s = seed
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296
    return s / 4294967296
  }
}

const W = 1200
const H = 280
const TAB = 'M0 9 L2.5 0 L11.5 0 L14 9 Z'

function marks() {
  const r = rand(203)
  const out: { x: number; y: number; tone: 0 | 1 | 2 }[] = []
  // Scatter: twelve sessions' worth of loose facts.
  for (let i = 0; i < 64; i++) out.push({ x: 10 + r() * 360, y: 20 + r() * (H - 50), tone: r() > 0.5 ? 0 : 1 })
  // Strand: three rows, tight.
  for (let i = 0; i < 48; i++) out.push({ x: 430 + (i % 16) * 18, y: H / 2 - 18 + Math.floor(i / 16) * 13, tone: 1 })
  // Order: seven rows, one per section of the form, of uneven length.
  const lengths = [6, 9, 3, 11, 4, 8, 7]
  lengths.forEach((n, row) => {
    for (let k = 0; k < n; k++) out.push({ x: 800 + k * 34, y: 26 + row * 34, tone: 2 })
  })
  return out
}

const MARKS = marks()
const FILL = ['var(--color-p5)', 'var(--color-p4)', 'var(--color-accent)']

const STEPS = [
  ['Sitzungen', 'Aus jeder Sitzung schlägt der Autopilot Fakten vor. Sie übernehmen, was stimmt.'],
  ['Fakten', 'Jeder Fakt kennt seine Quelle und den Abschnitt des Berichts, in den er gehört.'],
  ['Bericht', 'Der Lotse ordnet sie den sieben Abschnitten des Musters PTV 3 zu und entwirft daraus.'],
]

export function Verdichten() {
  return (
    <section className="frame pt-[clamp(120px,14vw,200px)]" aria-labelledby="vd-h">
      <div className="grid gap-6 md:grid-cols-12">
        <h2 id="vd-h" data-rise className="font-serif text-head leading-[1.02] tracking-[-0.02em] md:col-span-6">
          Viele Sitzungen,
          <br /> ein Bericht
        </h2>
        <p data-rise style={{ '--i': 1 } as never} className="text-body leading-relaxed md:col-span-5 md:col-start-8 md:self-end">
          Ein Umwandlungsantrag fasst zwölf Sitzungen zusammen. thera sammelt dafür, was Sie Woche für Woche bestätigt
          haben.
        </p>
      </div>

      <div data-rise style={{ '--i': 2 } as never} className="mt-14">
        <svg viewBox={`0 0 ${W} ${H}`} className="hidden w-full md:block" role="img" aria-label="Verstreute Fakten werden zu einem Strang und dann zu sieben geordneten Reihen">
          {MARKS.map((m, i) => (
            <path key={i} d={TAB} transform={`translate(${m.x.toFixed(1)} ${m.y.toFixed(1)})`} fill={FILL[m.tone]} />
          ))}
        </svg>
        {/* Phone: the same idea top to bottom, three bands. */}
        <svg viewBox="0 0 300 400" className="w-full md:hidden" role="img" aria-label="Verstreute Fakten werden zu einem Strang und dann zu sieben geordneten Reihen">
          {MARKS.map((m, i) => {
            const x = m.x < 400 ? (m.y / H) * 280 : m.x < 780 ? 120 + Math.floor((m.x - 430) / 18) % 3 * 16 : 20 + ((m.x - 800) / 34) * 24
            const y = m.x < 400 ? 10 + (m.x / 370) * 110 : m.x < 780 ? 140 + ((m.x - 430) / 288) * 100 : 260 + ((m.y - 26) / 34) * 20
            return <path key={i} d={TAB} transform={`translate(${x.toFixed(1)} ${y.toFixed(1)})`} fill={FILL[m.tone]} />
          })}
        </svg>
      </div>

      <ol className="mt-10 grid gap-8 md:grid-cols-3">
        {STEPS.map(([name, text], i) => (
          <li key={name} data-rise style={{ '--i': i + 3 } as never}>
            <h3 className="text-lead font-bold">{name}</h3>
            <p className="mt-2 max-w-[34ch] text-small leading-relaxed">{text}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
