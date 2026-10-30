import { createFileRoute } from '@tanstack/react-router'
import { Ablauf } from '@/components/ablauf'
import { Fragen } from '@/components/fragen'
import { Hero, Promises } from '@/components/hero'
import { Lotse } from '@/components/lotse'
import { Nav } from '@/components/nav'
import { Preise } from '@/components/preise'
import { Footer, Schluss } from '@/components/schluss'
import { Schweigepflicht } from '@/components/schweigepflicht'
import { Video } from '@/components/video'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Promises />
        <Ablauf />
        <Lotse />
        <Schweigepflicht />
        <Video />
        <Preise />
        <Fragen />
        <Schluss />
      </main>
      <Footer />
    </>
  )
}
