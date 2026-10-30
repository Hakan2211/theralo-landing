import { DOWNLOAD_SIZE, DOWNLOAD_URL, VERSION, VIDEO_URL } from '@/lib/site'

// Back to front. Each folder's tab names a section and links to it; the section takes its colour.
const FOLDERS = [
  { label: 'Ablauf', href: '#ablauf', bg: 'var(--color-p1)', fg: 'var(--color-night-ink)', x: '6%' },
  { label: 'Bericht-Lotse', href: '#lotse', bg: 'var(--color-p2)', fg: '#fff', x: '58%' },
  { label: 'Schweigepflicht', href: '#schweigepflicht', bg: 'var(--color-p3)', fg: '#fff', x: '27%' },
  { label: 'Fragen', href: '#fragen', bg: 'var(--color-p5)', fg: 'var(--color-ink)', x: '74%' },
]

export function Hero() {
  return (
    <header className="relative overflow-hidden bg-night text-night-ink">
      <div className="frame pt-[clamp(32px,5vw,96px)] text-center">
        <h1 className="hero-line font-serif text-display leading-[0.86] tracking-[-0.03em]" style={{ '--i': 0 } as never}>
          Theralo
        </h1>
        <p className="hero-line mx-auto mt-6 max-w-[46ch] font-serif text-lead leading-snug text-night-ink md:text-lead" style={{ '--i': 1 } as never}>
          Sitzungsnotizen und Berichte an den Gutachter, aus Ihren Sitzungen geschrieben. Alles bleibt verschlüsselt auf
          Ihrem Computer.
        </p>
      </div>

      {/* The stack: back folders show only their tab and a strip; the front one is open. */}
      <div className="relative mx-auto mt-[clamp(32px,4vw,64px)] w-[min(100%,1600px)] px-[var(--margin)] md:w-[86%] md:px-0">
        {FOLDERS.map((f, i) => (
          <div key={f.label} className="hero-folder relative" style={{ '--i': i } as never}>
            <a
              href={f.href}
              className="tab relative z-10 inline-flex h-10 items-center text-small font-semibold md:h-11 md:text-body"
              style={{ background: f.bg, color: f.fg, marginLeft: `min(${f.x}, calc(100% - 220px))` }}
            >
              {f.label}
            </a>
            <div className="h-[30px] md:h-[34px]" style={{ background: f.bg }} />
          </div>
        ))}

        <div className="hero-folder relative" style={{ '--i': FOLDERS.length } as never}>
          <span
            className="tab relative z-10 inline-flex h-10 items-center bg-paper text-small font-semibold text-ink md:h-11 md:text-body"
            style={{ marginLeft: 'min(42%, calc(100% - 260px))' }}
          >
            Version {VERSION} · Windows
          </span>
          <div className="bg-paper px-[clamp(16px,3vw,48px)] pt-6 pb-[clamp(24px,4vw,56px)] text-ink">
            <div className="flex flex-col gap-x-8 gap-y-4 sm:flex-row sm:items-center">
              <a href={DOWNLOAD_URL} className="btn btn-accent w-full justify-center sm:w-auto">
                <WindowsMark /> Für Windows herunterladen
              </a>
              <p className="text-small text-muted">
                Windows 10 und 11 · {DOWNLOAD_SIZE} · kein Konto nötig ·{' '}
                <a href="#film" className="link text-ink">
                  Film ansehen
                </a>
              </p>
            </div>
            <figure id="film" className="mt-[clamp(24px,3vw,40px)] scroll-mt-20">
              <video
                controls
                preload="metadata"
                poster="/screens/lotse.png"
                width={2560}
                height={1600}
                className="block aspect-[16/10] w-full bg-night object-cover"
                aria-label="Film: Theralo in 5 Minuten"
              >
                <source src={VIDEO_URL} type="video/mp4" />
              </video>
              <figcaption className="mt-3 text-small text-muted">
                Theralo in 5 Minuten: ein Rundgang durch die Demo-Praxis, von der Aufnahme bis zum fertigen Bericht. Alle
                Personen sind erfunden.
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </header>
  )
}

export function WindowsMark() {
  return (
    <svg viewBox="0 0 16 16" className="size-4 shrink-0" fill="currentColor" aria-hidden>
      <path d="M0 2.3 6.5 1.4v6.2H0zM7.3 1.3 16 0v7.6H7.3zM0 8.4h6.5v6.2L0 13.7zM7.3 8.4H16V16l-8.7-1.2z" />
    </svg>
  )
}
