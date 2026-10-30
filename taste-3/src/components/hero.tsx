import { DOWNLOAD_SIZE, DOWNLOAD_URL, VERSION } from '@/lib/site'
import { Crop, WindowsMark } from './ui'

/** Masthead band of real app crops, then the title hanging from the axis. */
export function Hero() {
  return (
    <header>
      <div className="masthead">
        <Crop
          src="/screens/lotse.png"
          x={960}
          y={640}
          w={1240}
          eager
          alt="Bericht-Lotse: KI-Entwurf eines Abschnitts, Satz für Satz zum Übernehmen oder Verwerfen"
        />
        <div className="tile on-pink">
          <p className="tile-sentence">
            <span className="ph-inv">Pat.</span> erzählt, dass ihre Schwester <span className="ph-inv">[PERSON_1]</span> am{' '}
            <span className="ph-inv">[DATUM_1]</span> aus <span className="ph-inv">[ORT_1]</span> anrief.
          </p>
          <p className="small">So verlässt ein Satz Ihren Computer: pseudonymisiert, vor jeder KI-Anfrage.</p>
        </div>
        <Crop
          src="/screens/gesendet.png"
          x={560}
          y={560}
          w={1200}
          eager
          alt="„Was wurde gesendet?“: der pseudonymisierte Text, der an die KI ging"
        />
        <Crop
          src="/screens/pruefen.png"
          x={1730}
          y={690}
          w={800}
          eager
          alt="Vorschau des Berichts an die Gutachterin oder den Gutachter im Format des Musters PTV 3"
        />
      </div>

      <div className="row hero-foot">
        <div className="left hero-actions hero-after">
          <a href={DOWNLOAD_URL} className="btn">
            <WindowsMark /> Für Windows herunterladen
          </a>
          <p className="small muted">
            Version {VERSION} · Windows 10/11 · {DOWNLOAD_SIZE}
          </p>
          <a href="#video" className="link">
            Video ansehen (5 Min.)
          </a>
        </div>
        <div>
          <h1 className="display hero-title">
            <span className="line">
              <span data-line style={{ ['--i' as string]: 0 }}>
                Dokumentation, die
              </span>
            </span>
            <span className="line">
              <span data-line style={{ ['--i' as string]: 1 }}>
                in der Praxis bleibt.
              </span>
            </span>
          </h1>
          <p className="lead standfirst hero-after">
            Theralo nimmt Sitzungen auf, schreibt mit KI-Unterstützung Notizen in Minuten statt Stunden und führt Sie Schritt für Schritt
            durch den Bericht an den Gutachter. Ihre Daten bleiben verschlüsselt auf Ihrem Computer.
          </p>
        </div>
      </div>
    </header>
  )
}
