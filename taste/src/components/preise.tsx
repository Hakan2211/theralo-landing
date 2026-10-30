import { CONTACT_EMAIL, DOWNLOAD_URL, MAILTO } from '@/lib/site'

// Three folders, one per part of the offer. No prices on the page: they are quoted per Praxis.
const PARTS = [
  {
    name: 'Die Software',
    text: 'Einmalig: Theralo für Ihre Praxis, installiert auf Ihren Computern. Die Daten bleiben bei Ihnen.',
    bg: 'var(--color-p1)',
    fg: 'var(--color-night-ink)',
  },
  {
    name: 'KI und Instandhaltung',
    text: 'Jeden Monat: die KI-Nutzung für Notizen, Entwürfe und den Gutachter-Check. Dazu Updates, Anpassungen an neue KBV-Vorgaben und Hilfe, wenn etwas hakt.',
    bg: 'var(--color-p2)',
    fg: '#fff',
  },
  {
    name: 'Individuali­sierung',
    text: 'Auf Wunsch: neue Funktionen und Anpassungen an Ihre Abläufe, für Ihre Praxis gebaut.',
    bg: 'var(--color-p5)',
    fg: 'var(--color-ink)',
  },
]

export function Preise() {
  return (
    <section id="preise" className="frame scroll-mt-20 pt-[clamp(120px,14vw,200px)]" aria-labelledby="preise-h">
      <div className="grid gap-6 md:grid-cols-12">
        <h2 id="preise-h" data-rise className="font-serif text-head leading-[1.02] tracking-[-0.02em] md:col-span-5">
          Preisgestaltung für Praxen
        </h2>
        <p data-rise style={{ '--i': 1 } as never} className="text-lead leading-relaxed md:col-span-5 md:col-start-7">
          Für Praxen, MVZ und Unternehmen, mit einem Preis, der zu Ihrer Praxis passt.
        </p>
      </div>

      <div className="mt-16 grid gap-2 lg:grid-cols-3">
        {PARTS.map((p, i) => (
          <div key={p.name} data-rise style={{ '--i': i + 2 } as never} className="flex flex-col">
            {/* The tab carries no label: in Theralo a file's tab holds a Chiffre, never a name. */}
            <span aria-hidden className="tab ml-6 block h-6 w-28" style={{ background: p.bg }} />
            <div
              className="flex flex-1 flex-col gap-6 p-6 md:p-8 lg:min-h-[300px] lg:justify-between"
              style={{ background: p.bg, color: p.fg }}
            >
              <h3 className="font-serif text-head leading-[1.05]">{p.name}</h3>
              <p className="max-w-[36ch] text-body leading-relaxed">{p.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div data-rise className="mt-2 grid gap-8 bg-tile p-6 md:grid-cols-12 md:items-center md:p-8">
        <div className="md:col-span-7">
          <h3 className="font-serif text-head leading-[1.05]">Preis auf Anfrage</h3>
          <p className="mt-4 max-w-[44ch] text-lead leading-snug">
            Kontaktieren Sie uns für Preisgestaltung und Kostenvoranschlag.
          </p>
        </div>
        <div className="flex flex-col gap-3 md:col-span-4 md:col-start-9">
          <a href={MAILTO} className="btn btn-ink h-[64px] justify-center">
            Angebot anfragen
          </a>
          <p className="text-small text-muted">
            Per E-Mail an {CONTACT_EMAIL}. Zum Ausprobieren:{' '}
            <a href={DOWNLOAD_URL} className="link text-ink">
              kostenlos herunterladen
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
