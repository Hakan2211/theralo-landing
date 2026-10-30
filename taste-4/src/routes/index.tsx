import { createFileRoute } from '@tanstack/react-router'
import { useReveal } from '@/lib/reveal'
import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { Ablauf } from '@/components/ablauf'
import { Lotse } from '@/components/lotse'
import { Schweigepflicht } from '@/components/schweigepflicht'
import { Schalter } from '@/components/schalter'
import { Video } from '@/components/video'
import { Preise } from '@/components/preise'
import { Fragen } from '@/components/fragen'
import { Footer, Schluss } from '@/components/schluss'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  useReveal()
  return (
    <>
      <a className="skip" href="#inhalt">
        Zum Inhalt
      </a>
      <SiteNav />
      <main id="inhalt">
        <Hero />
        <Ablauf />
        <Lotse />
        <Schweigepflicht />
        <Schalter />
        <Video />
        <Preise />
        <Fragen />
        <Schluss />
      </main>
      <Footer />
    </>
  )
}
