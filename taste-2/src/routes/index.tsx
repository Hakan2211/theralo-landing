import { createFileRoute } from '@tanstack/react-router'
import { Fragen } from '@/components/fragen'
import { Lotse } from '@/components/lotse'
import { Nav } from '@/components/nav'
import { Preise } from '@/components/preise'
import { Abend, Footer } from '@/components/schluss'
import { Schweigepflicht } from '@/components/schweigepflicht'
import { Stage } from '@/components/stage'
import { Video } from '@/components/video'
import { useReveal } from '@/lib/reveal'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  useReveal()
  return (
    <>
      <Nav />
      <main>
        <Stage />
        <Video />
        <Lotse />
        <Schweigepflicht />
        <Preise />
        <Fragen />
        <Abend />
      </main>
      <Footer />
    </>
  )
}
