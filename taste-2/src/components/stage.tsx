import { useEffect, useRef, useState } from 'react'
import { DOWNLOAD_SIZE, DOWNLOAD_URL, VERSION } from '@/lib/site'
import { WindowsMark } from './icons'

// The fixed half: the real app, at its true size. Each step of the reading column has its screen;
// x/y are the CSS-pixel offsets into the 1280 × 800 screenshot.
const SHOTS = [
  { src: '/screens/lotse.png', x: 495, y: 70, cap: 'Bericht-Lotse: Entwurf Satz für Satz, mit Quelle', alt: 'Theralo, Bericht-Lotse: ein KI-Entwurf für Abschnitt 7 mit den Knöpfen Bearbeiten, Verwerfen, Übernehmen und der Quelle „Sitzung 1 · 09.10.2026“' },
  { src: '/screens/heute.png', x: 255, y: 120, cap: 'Heute: Termin, Aufgaben, fällige Abschriften', alt: 'Theralo, Ansicht Heute: Termin um 10:00 mit „Abschrift prüfen“, Aufgaben und fällige Anträge' },
  { src: '/screens/notiz.png', x: 255, y: 130, cap: 'Sitzungsnotiz: KI-Vorschläge mit Zeitmarke', alt: 'Theralo, Sitzungsnotiz vom 23.10.2026 mit KI-Vorschlägen aus der Abschrift, jeweils mit Zeitmarke' },
  { src: '/screens/verlauf.png', x: 255, y: 130, cap: 'Verlauf: jede Sitzung mit Kurz-Zusammenfassung', alt: 'Theralo, Verlauf der Patientin Lena Sommer mit KI-Zusammenfassungen und Anzahl der Quellen' },
  { src: '/screens/pruefen.png', x: 560, y: 300, cap: 'Gutachter-Check mit Vorschau nach Muster PTV 3', alt: 'Theralo, Gutachter-Check: offene Abschnitte, eine Frage des Gutachters und die Vorschau des Berichts' },
  { src: '/screens/kalender.png', x: 255, y: 60, cap: 'Kalender: Termine und Serien', alt: 'Theralo, Kalender in der Wochenansicht' },
]

type Crop = { src: string; x: number; y: number; h: number; alt: string }
const STEPS: { run: string; text: string; img?: { src: string; w: number; h: number; alt: string }; crop?: Crop }[] = [
  {
    run: 'Zuerst aufnehmen oder diktieren.',
    text: 'Mit Einwilligung nehmen Sie die Sitzung auf, sonst diktieren Sie danach eine kurze Zusammenfassung. Die Abschrift entsteht auf Ihrem Computer. Die Stimme Ihrer Patient:innen verlässt das Gerät nie (Cloud-Transkription nur mit eigener Einwilligung).',
    crop: { src: '/screens/heute.png', x: 262, y: 240, h: 110, alt: 'Termin um 10:00, Sitzung 12, Status „Durchgeführt“ mit dem Knopf „Abschrift prüfen“' },
  },
  {
    run: 'Dann die Abschrift prüfen.',
    text: 'Theralo trennt die Sprecher. Sie korrigieren und bestätigen. Danach wird das Audio gelöscht.',
    img: { src: '/screens/crops/fakten.png', w: 1316, h: 824, alt: 'KI-Vorschlag aus der Abschrift mit Zeitmarke 00:12 und Zuordnung zum Bericht-Abschnitt 6' },
  },
  {
    run: 'Danach schreibt der Autopilot vor:',
    text: 'Sitzungsnotiz, vorgeschlagene Fakten mit Quellenangabe und eine kurze Zusammenfassung. Sie übernehmen, ändern oder verwerfen, und Sie unterschreiben.',
    img: { src: '/screens/crops/quelle.png', w: 606, h: 364, alt: '„Woher kommt das?“: das Zitat aus der Notiz mit Quelle Sitzung 1 · 09.10.2026' },
  },
  {
    run: 'Zum Antrag führt der Bericht-Lotse.',
    text: 'Fragen vor dem Entwurf, Abschnitte Satz für Satz, eine KI-Prüfung aus Sicht der Gutachterin bzw. des Gutachters, Export im Format des Musters PTV 3 als PDF oder Word.',
    img: { src: '/screens/crops/check.png', w: 1192, h: 814, alt: 'Gutachter-Check: „Ein Gutachter würde fragen: Woran zeigt sich, dass die Kurzzeittherapie nicht ausreicht?“' },
  },
  {
    run: 'Und im Alltag:',
    text: 'Heute, Kalender und Verlauf zeigen Termine und Serien, Aufgaben, fällige Abschriften und Anträge auf einen Blick. Theralo zählt die Sitzungen im Kontingent und erinnert rechtzeitig an Umwandlungs- und Fortführungsanträge. Diktieren können Sie überall, live und lokal. Der Assistent beantwortet Fragen zu Terminen und Behandlungen und macht nur Vorschläge, die Sie bestätigen.',
    crop: { src: '/screens/heute.png', x: 880, y: 500, h: 300, alt: 'Fällig: 1 Transkript prüfen, 1 Antrag vorbereiten, Umwandlungsantrag bei 10 von 12 Sitzungen' },
  },
]

/** Hero and "So geht's" share one stage: the right half never moves, only its screen changes. */
export function Stage() {
  const [active, setActive] = useState(0)
  const col = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const steps = col.current?.querySelectorAll<HTMLElement>('[data-step]')
    if (!steps) return
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.step))
      },
      { rootMargin: '-45% 0px -45% 0px' },
    )
    steps.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  return (
    <div className="stage">
      <aside className="stage-aside" aria-label="Theralo, Bildschirme aus der Demo-Praxis">
        <div className="panel">
          {SHOTS.map((s, i) => (
            <div key={s.src} className={'shot' + (i === active ? ' is-on' : '')} aria-hidden={i !== active}>
              <div className="shot-window">
                <img
                  src={s.src}
                  alt={s.alt}
                  width={1280}
                  height={800}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  style={{ '--x': s.x, '--y': s.y } as never}
                />
              </div>
            </div>
          ))}
          <div className="panel-bar t-small">
            <p className="cap" aria-live="polite">
              {SHOTS.map((s, i) => (
                <span key={s.src} className={i === active ? 'is-on' : ''} aria-hidden={i !== active}>
                  {s.cap}
                </span>
              ))}
            </p>
            <p className="demo muted">Demo-Praxis, erfundene Personen</p>
          </div>
        </div>
      </aside>

      <div className="stage-col" ref={col}>
        <header className="hero" data-step={0}>
          <h1 className="t-display" data-rise style={{ '--i': 0 } as never}>
            Dokumentation, die in der Praxis bleibt.
          </h1>
          <p className="mt-8 max-w-[40ch]" data-rise style={{ '--i': 1 } as never}>
            Theralo nimmt Sitzungen auf, schreibt Notizen in Minuten statt Stunden und führt Sie Schritt für Schritt
            durch den Bericht an den Gutachter, mit KI-Unterstützung. Ihre Daten bleiben verschlüsselt auf Ihrem
            Computer.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3" data-rise style={{ '--i': 2 } as never}>
            <a href={DOWNLOAD_URL} className="btn">
              <WindowsMark /> Für Windows herunterladen
            </a>
            <p className="t-small muted">
              Version {VERSION} · Windows 10/11 · {DOWNLOAD_SIZE}
            </p>
            <a href="#video" className="link t-small">
              Video ansehen (5 Min.)
            </a>
          </div>
          <p className="t-small muted mt-10 max-w-[44ch]" data-rise style={{ '--i': 3 } as never}>
            Lokal verschlüsselt (AES-256) · Pseudonymisiert vor jeder KI-Anfrage · Diagnosen trägt nur die
            Therapeutin bzw. der Therapeut ein
          </p>
        </header>

        <section id="ablauf" className="runin" aria-labelledby="ablauf-h">
          <h2 id="ablauf-h" className="t-head" data-rise>
            Von der Sitzung zum Bericht
          </h2>
          <p className="t-lead mt-10" data-rise style={{ '--i': 1 } as never}>
            Berichte an den Gutachter kosten Abende und Wochenenden. Die Inhalte stehen längst in den Sitzungen, nur
            nicht in der Form, die der Antrag verlangt.
          </p>
          <p className="mt-6" data-rise style={{ '--i': 2 } as never}>
            Theralo nimmt Ihnen die Routine ab und lässt Ihnen jede Entscheidung.
          </p>
          {STEPS.map((s, i) => (
            <div key={s.run} data-step={i + 1} className="mt-[72px] max-[899px]:mt-14">
              <p className="step" data-rise>
                <b>{s.run}</b> {s.text}
              </p>
              {s.img ? (
                <figure className="mt-5" data-rise style={{ '--i': 1 } as never}>
                  <img src={s.img.src} alt={s.img.alt} width={s.img.w / 2} height={s.img.h / 2} loading="lazy" />
                </figure>
              ) : null}
              {s.crop ? (
                <figure className="crop mt-5" style={{ height: s.crop.h }} data-rise>
                  <img src={s.crop.src} alt={s.crop.alt} width={1280} height={800} loading="lazy" style={{ '--x': s.crop.x, '--y': s.crop.y } as never} />
                </figure>
              ) : null}
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}
