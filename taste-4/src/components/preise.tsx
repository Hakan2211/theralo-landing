import { CONTACT_EMAIL, DOWNLOAD_URL, MAILTO } from '@/lib/site'

export function Preise() {
  return (
    <section id="preise" className="preise frame chapter" aria-labelledby="preise-title">
      <div className="plans">
        <div className="preise-head">
          <h2 id="preise-title" className="t-head" data-rise>
            Preisgestaltung für Praxen
          </h2>
          <p className="t-body" data-rise style={{ ['--d' as string]: 1, marginTop: '1.75rem' }}>
            Theralo gibt es für Praxen, MVZ und Unternehmen. Den Preis stimmen wir auf Ihre Praxis ab: wie viele
            Therapeut:innen, welche KI, welche Anpassungen.
          </p>
          <p className="t-body" data-rise style={{ ['--d' as string]: 2 }}>
            Kontaktieren Sie uns für Preisgestaltung und Kostenvoranschlag:{' '}
            <a className="link" href={MAILTO}>
              {CONTACT_EMAIL}
            </a>
          </p>
          <p className="t-small muted" data-rise style={{ ['--d' as string]: 3 }}>
            Die E-Mail-Adresse ist vorläufig, bis das Postfach eingerichtet ist.
          </p>
        </div>

        <article className="plan plan-1" data-rise style={{ ['--d' as string]: 1 }}>
          <h3 className="t-lead">Die Software</h3>
          <p className="t-head">einmalig</p>
          <ul>
            <li>Theralo für Ihre Praxis, installiert auf Ihren Computern.</li>
            <li>Die Daten bleiben bei Ihnen.</li>
          </ul>
          <a className="strip" href={DOWNLOAD_URL}>
            Kostenlos testen <span className="arrow" aria-hidden="true">→</span>
          </a>
        </article>

        <article className="plan plan-2" data-rise style={{ ['--d' as string]: 2 }}>
          <h3 className="t-lead">KI und Instandhaltung</h3>
          <p className="t-head">monatlich</p>
          <ul>
            <li>Die KI-Nutzung für Notizen, Entwürfe und den Gutachter-Check.</li>
            <li>Updates und Anpassungen an neue KBV-Vorgaben.</li>
            <li>Unterstützung, wenn etwas hakt.</li>
          </ul>
          <a className="strip" href={MAILTO}>
            Angebot anfragen <span className="arrow" aria-hidden="true">→</span>
          </a>
        </article>

        <article className="plan plan-3" data-rise style={{ ['--d' as string]: 3 }}>
          <h3 className="t-lead">Individualisierung</h3>
          <p className="t-head">auf Wunsch</p>
          <ul>
            <li>Neue Funktionen für Ihre Abläufe.</li>
            <li>Anpassungen, auf Wunsch für Ihre Praxis gebaut.</li>
            <li>Schildern Sie uns, was Ihrer Praxis fehlt.</li>
          </ul>
          <a className="strip" href={MAILTO}>
            Anpassung anfragen <span className="arrow" aria-hidden="true">→</span>
          </a>
        </article>
      </div>
    </section>
  )
}
