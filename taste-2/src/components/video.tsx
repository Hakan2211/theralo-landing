import { VIDEO_URL } from '@/lib/site'

export function Video() {
  return (
    <section id="video" className="video on-dark" aria-labelledby="video-h">
      <div className="frame">
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-[var(--m)]">
          <div className="lg:col-span-4">
          <h2 id="video-h" className="t-display max-w-[9ch]" data-rise>
            Theralo in 5 Minuten
          </h2>
          <div className="mt-8" data-rise style={{ '--i': 1 } as never}>
            <p>
              Ein Rundgang durch die Demo-Praxis, von der Aufnahme bis zum fertigen Bericht. Alle Personen sind
              erfunden.
            </p>
            <p className="muted mt-4">
              In der App selbst finden Sie Offline-Hilfe, einen Rundgang und die Demo-Praxis: Probieren Sie alles mit
              erfundenen Beispieldaten aus, getrennt von Ihren echten Daten.
            </p>
          </div>
          </div>
          <div className="mt-6 lg:col-span-8 lg:mt-0" data-rise style={{ '--i': 2 } as never}>
            <video controls preload="metadata" poster="/screens/heute.png" width={1920} height={1080}>
              <source src={VIDEO_URL} type="video/mp4" />
              <a href={VIDEO_URL}>Video herunterladen</a>
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}
