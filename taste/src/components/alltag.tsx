import type { ReactNode } from 'react'

// Close-ups: real controls of the app, rebuilt in HTML and enlarged inside their tiles (data-ui).
function Tile({ area, bg, fg = 'var(--color-ink)', name, line, children, i }: {
  area: string
  bg: string
  fg?: string
  name: string
  line: string
  children: ReactNode
  i: number
}) {
  return (
    <figure data-rise style={{ gridArea: area, background: bg, color: fg, '--i': i } as never} className="relative min-h-[240px] overflow-hidden min-[900px]:min-h-0">
      <div data-ui aria-hidden className="pointer-events-none absolute inset-x-0 top-0 bottom-28 overflow-hidden select-none">
        {children}
      </div>
      <figcaption className="absolute bottom-0 left-0 max-w-[30ch] p-5">
        <span className="block text-body font-medium">{name}</span>
        <span className="mt-1 block text-small leading-snug opacity-90">{line}</span>
      </figcaption>
    </figure>
  )
}

export function Alltag() {
  return (
    <section id="alltag" className="pt-[clamp(120px,14vw,200px)]" aria-labelledby="alltag-h">
      <div className="alltag-board frame grid gap-2">
        <div data-rise style={{ gridArea: 'h' }} className="flex flex-col justify-between bg-p6 p-6">
          <h2 id="alltag-h" className="font-serif text-head leading-[1.02] tracking-[-0.02em]">
            Im Praxisalltag
          </h2>
          <p className="max-w-[44ch] text-body">Was thera zwischen den Sitzungen für Sie im Blick behält.</p>
        </div>

        <Tile i={1} area="a" bg="var(--color-night)" fg="var(--color-night-ink)" name="Autopilot nach der Sitzung" line="Abschrift, Notiz, Fakten und Zusammenfassung laufen im Hintergrund.">
          <div className="left-[0.4em] top-[0.4em] flex items-center gap-[0.5em] text-[48px] min-[900px]:text-[56px]" style={{ position: 'absolute', whiteSpace: 'nowrap' }}>
            <span className="relative inline-block h-[0.9em] w-[1.6em] rounded-full bg-accent">
              <span className="absolute top-[0.1em] right-[0.1em] size-[0.7em] rounded-full bg-white" />
            </span>
            <span className="font-medium">An</span>
          </div>
        </Tile>

        <Tile i={2} area="b" bg="var(--color-tile)" name="Kontingent im Blick" line="thera zählt die Sitzungen und erinnert rechtzeitig an den Umwandlungs- oder Fortführungsantrag.">
          <div className="left-[0.4em] top-[0.35em] text-[56px] min-[900px]:text-[96px]" style={{ position: 'absolute', whiteSpace: 'nowrap' }}>
            <span className="font-semibold tabular-nums">10 von 12</span>
            <span className="mt-[0.25em] flex h-[0.32em] w-[7em] bg-tile">
              <span className="h-full w-[83%] bg-accent" />
            </span>
            <span className="mt-[0.3em] block text-[0.32em] text-muted">Sitzungen · KZT 1</span>
          </div>
        </Tile>

        <Tile i={3} area="c" bg="var(--color-p5)" name="Strg + K" line="Jede Seite, Person und Sitzung mit zwei Tasten.">
          <div className="left-[0.3em] top-[0.3em] flex gap-[0.15em] text-[48px] min-[900px]:text-[96px]" style={{ position: 'absolute' }}>
            <span className="bg-paper px-[0.3em] py-[0.05em] font-medium">Strg</span>
            <span className="bg-paper px-[0.3em] py-[0.05em] font-medium">K</span>
          </div>
        </Tile>

        <Tile i={4} area="d" bg="var(--color-p6)" name="Patient:innen als Karten" line="Verfahren, Diagnose und der nächste Termin auf einen Blick.">
          <div className="left-[0.3em] top-[0.25em] flex text-[48px] min-[900px]:text-[64px]" style={{ position: 'absolute' }}>
            {['LS', 'MK', 'JA'].map((n, k) => (
              <span
                key={n}
                className="ml-[0.12em] grid size-[1.4em] place-items-center rounded-full font-serif"
                style={{ background: ['var(--color-paper)', 'var(--color-p5)', 'var(--color-p4)'][k] }}
              >
                {n}
              </span>
            ))}
          </div>
        </Tile>

        <Tile i={5} area="e" bg="var(--color-accent)" fg="#fff" name="Jede Stelle belegt" line="Ein Klick auf die Zeitmarke spielt die Stelle der Abschrift ab.">
          <div className="left-[0.3em] top-[0.3em] bg-white/90 px-[0.25em] text-[40px] font-medium text-ink tabular-nums min-[900px]:text-[64px]" style={{ position: 'absolute' }}>
            00:12
          </div>
        </Tile>

        <Tile i={6} area="f" bg="var(--color-p5)" name="Unterschrieben, dann fest" line="Danach ist die Notiz fest; Ergänzungen kommen als Nachtrag.">
          <div className="left-[0.35em] top-[0.3em] bg-paper px-[0.3em] text-[30px] font-medium text-p1 min-[900px]:text-[60px]" style={{ position: 'absolute', whiteSpace: 'nowrap' }}>
            signiert
          </div>
        </Tile>

        <Tile i={7} area="g" bg="var(--color-p1)" fg="var(--color-night-ink)" name="Diktat überall" line="Live-Diktat, lokal auf Ihrem Computer.">
          <svg viewBox="0 0 24 24" className="right-[0.2em] top-[0.1em] size-[1.2em] text-[56px] text-p4 min-[900px]:text-[80px]" style={{ position: 'absolute' }} fill="none" stroke="currentColor" strokeWidth="1.6">
            <rect x="9" y="3" width="6" height="11" rx="3" />
            <path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21" strokeLinecap="round" />
          </svg>
        </Tile>

        <Tile i={8} area="i" bg="var(--color-p6)" name="Demo-Praxis" line="Alles mit erfundenen Beispieldaten ausprobieren, getrennt von Ihren echten.">
          <div className="left-[0.3em] top-[0.3em] bg-[#f3e6d6] px-[0.3em] text-[28px] font-medium text-[#8a5a2b] min-[900px]:text-[40px]" style={{ position: 'absolute', whiteSpace: 'nowrap' }}>
            Demo-Praxis
          </div>
        </Tile>
      </div>
    </section>
  )
}
