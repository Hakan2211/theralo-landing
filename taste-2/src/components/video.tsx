import { VIDEO_URL } from '@/lib/site'
import { BrowserFrame } from './browser-frame'
import { Section } from './section'

export function Video() {
  return (
    <Section
      id="video"
      eyebrow="Video"
      title="Theralo in 5 Minuten"
      lead="Ein Rundgang durch die Demo-Praxis, von der Aufnahme bis zum fertigen Bericht."
      center
    >
      <BrowserFrame title="Theralo in 5 Minuten" className="rise mx-auto mt-12 max-w-4xl">
        <video controls preload="metadata" poster="/screens/kalender@1x.webp" width={1920} height={1080} className="block aspect-video h-auto w-full bg-foreground object-cover">
          <source src={VIDEO_URL} type="video/mp4" />
          <a href={VIDEO_URL}>Video herunterladen</a>
        </video>
      </BrowserFrame>
      <p className="mx-auto mt-5 max-w-xl text-center text-[15px] text-muted-foreground">
        In der App finden Sie außerdem Offline-Hilfe, einen Rundgang und die Demo-Praxis, getrennt von Ihren echten
        Daten.
      </p>
    </Section>
  )
}
