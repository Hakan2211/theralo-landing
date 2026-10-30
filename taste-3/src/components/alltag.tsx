import { Crop } from './ui'

const FEATURES = [
  ['Sitzungsnotiz mit Fakten.', 'Jeder vorgeschlagene Fakt verweist auf die Stelle in der Abschrift.'],
  ['Kontingent im Blick.', 'Theralo zählt die Sitzungen und erinnert rechtzeitig an Umwandlungs- und Fortführungsanträge.'],
  [
    'Heute, Kalender, Verlauf.',
    'Termine und Serien, Aufgaben, fällige Abschriften und Anträge auf einen Blick. Der Verlauf zeigt jede Sitzung mit einer Kurz-Zusammenfassung.',
  ],
  ['Diktat überall.', 'Live-Diktat, lokal auf Ihrem Computer.'],
  ['Assistent.', 'Beantwortet Fragen zu Terminen und Behandlungen und macht nur Vorschläge, die Sie bestätigen.'],
  [
    'Offline-Hilfe, Rundgang und Demo-Praxis.',
    'Probieren Sie alles mit erfundenen Beispieldaten aus, getrennt von Ihren echten Daten.',
  ],
]

/** A text page on the axis, then a gutterless mosaic of the app's other screens and two flat tiles. */
export function Alltag() {
  return (
    <section id="alltag" className="section" aria-labelledby="alltag-h" style={{ paddingBottom: 0 }}>
      <div className="row">
        <div className="left" />
        <div>
          <h2 id="alltag-h" className="head" data-rise>
            Der Praxisalltag, geordnet
          </h2>
          <div className="two-col">
            {FEATURES.map(([title, text], i) => (
              <p key={title} data-rise style={{ ['--d' as string]: i % 2 }}>
                <span className="strong">{title}</span> {text}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="mosaic">
        <Crop className="w2" src="/screens/heute.png" x={480} y={250} w={1900} alt="„Heute“ mit Termin, Aufgaben und Fälligem" />
        <div className="tile on-pink">
          <p>Heute: Termin, Aufgaben, fällige Abschriften und Anträge.</p>
        </div>
        <Crop src="/screens/verlauf.png" x={540} y={680} w={1100} alt="Verlauf mit KI-Zusammenfassungen und Quellenangaben je Sitzung" />
        <Crop src="/screens/kalender.png" x={1250} y={240} w={1300} alt="Kalender in der Wochenansicht" />
        <div className="tile" style={{ background: 'var(--surface)' }}>
          <p>Berichte als Board, vom Entwurf bis zum Export.</p>
        </div>
        <Crop className="w2" src="/screens/board.png" x={500} y={250} w={2000} alt="Berichte als Board: Entwurf, Bereit zur Prüfung, Unterschrieben, Exportiert" />
      </div>
    </section>
  )
}
