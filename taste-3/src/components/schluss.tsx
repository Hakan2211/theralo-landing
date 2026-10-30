import { DOWNLOAD_SIZE, DOWNLOAD_URL, VERSION } from '@/lib/site'
import { WindowsMark } from './ui'

/** The idea again, inverted: pink ground, navy ink. */
export function Schluss() {
  return (
    <section className="on-pink close" aria-labelledby="close-h">
      <h2 id="close-h" className="display lines" data-lines>
        <span className="line">
          <span style={{ ['--i' as string]: 0 }}>Der Bericht bleibt</span>
        </span>
        <span className="line">
          <span style={{ ['--i' as string]: 1 }}>in Ihrer Praxis.</span>
        </span>
      </h2>
      <div className="close-foot">
        <p className="lead" style={{ maxWidth: '34ch' }} data-rise>
          Kostenlos herunterladen und in der Demo-Praxis ausprobieren, ohne Konto. Version {VERSION} · Windows 10/11 ·{' '}
          {DOWNLOAD_SIZE}.
        </p>
        <a href={DOWNLOAD_URL} className="btn" data-rise style={{ ['--d' as string]: 1 }}>
          <WindowsMark /> Für Windows herunterladen
        </a>
      </div>
    </section>
  )
}
