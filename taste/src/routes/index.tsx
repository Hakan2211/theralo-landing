import { createFileRoute } from '@tanstack/react-router'
import { Ablauf } from '@/components/ablauf'
import { Alltag } from '@/components/alltag'
import { Footer } from '@/components/footer'
import { Fragen } from '@/components/fragen'
import { Hero } from '@/components/hero'
import { Lotse } from '@/components/lotse'
import { Schweigepflicht } from '@/components/schweigepflicht'
import { Verdichten } from '@/components/verdichten'
import { useReveal } from '@/lib/reveal'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  useReveal()
  return (
    <>
      <Hero />
      <main>
        <Ablauf />
        <Lotse />
        <Verdichten />
        <Schweigepflicht />
        <Alltag />
        <Fragen />
      </main>
      <Footer />
    </>
  )
}
