import { createFileRoute } from '@tanstack/react-router'
import { Ablauf } from '@/components/ablauf'
import { Alltag } from '@/components/alltag'
import { Footer } from '@/components/footer'
import { Fragen } from '@/components/fragen'
import { Hero } from '@/components/hero'
import { Lotse } from '@/components/lotse'
import { Nav } from '@/components/nav'
import { Preise } from '@/components/preise'
import { Schluss } from '@/components/schluss'
import { Schweigepflicht } from '@/components/schweigepflicht'
import { Video } from '@/components/video'
import { useReveal } from '@/lib/reveal'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  useReveal()
  return (
    <>
      <div className="page">
        <Nav />
        <Hero />
        <main>
          <Lotse />
          <Ablauf />
          <Schweigepflicht />
          <Alltag />
          <Video />
          <Preise />
          <Fragen />
          <Schluss />
        </main>
      </div>
      <Footer />
    </>
  )
}
