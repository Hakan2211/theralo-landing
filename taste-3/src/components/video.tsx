import { VIDEO_URL } from '@/lib/site'

/** A colour page carrying one large picture: the film. */
export function Video() {
  return (
    <section id="video" className="on-pink video-page" aria-labelledby="video-h">
      <div className="row">
        <div className="left">
          <p className="lead" data-rise style={{ maxWidth: '24ch' }}>
            Ein Rundgang durch die Demo-Praxis, von der Aufnahme bis zum fertigen Bericht. Alle Personen sind
            erfunden.
          </p>
        </div>
        <div>
          <h2 id="video-h" className="head" data-rise>
            Theralo in 5 Minuten
          </h2>
          <video
            controls
            preload="metadata"
            poster="/screens/lotse.png"
            style={{ marginTop: 40 }}
            data-rise
            aria-label="Video: Theralo in 5 Minuten"
          >
            <source src={VIDEO_URL} type="video/mp4" />
            <a href={VIDEO_URL}>Video herunterladen (MP4)</a>
          </video>
        </div>
      </div>
    </section>
  )
}
