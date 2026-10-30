import { VIDEO_URL } from '@/lib/site'

export function Video() {
  return (
    <section id="video" className="video grid chapter" aria-labelledby="video-title">
      <h2 id="video-title" className="t-head" data-rise>
        Theralo in 5 Minuten
      </h2>
      <p className="video-text" data-rise style={{ ['--d' as string]: 1 }}>
        Ein Rundgang durch die Demo-Praxis, von der Aufnahme bis zum fertigen Bericht. Alle Personen sind erfunden.
      </p>
      <div className="video-frame" data-rise style={{ ['--d' as string]: 2 }}>
        <video controls preload="metadata" poster="/screens/heute.png" width={1920} height={1080}>
          <source src={VIDEO_URL} type="video/mp4" />
          <a href={VIDEO_URL}>Video „Theralo in 5 Minuten“ herunterladen</a>
        </video>
      </div>
    </section>
  )
}
