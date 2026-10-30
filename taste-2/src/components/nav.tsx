import { useEffect, useState } from 'react'
import { MenuIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { DOWNLOAD_URL } from '@/lib/site'
import { cn } from '@/lib/utils'
import { WindowsMark } from './icons'

export const NAV = [
  { label: 'So geht’s', href: '/#ablauf' },
  { label: 'Bericht-Lotse', href: '/#lotse' },
  { label: 'Datenschutz', href: '/#schweigepflicht' },
  { label: 'Preise', href: '/#preise' },
  { label: 'Fragen', href: '/#fragen' },
]

export function Wordmark({ className }: { className?: string }) {
  return (
    <a href="/" className={cn('flex shrink-0 items-center gap-2.5', className)}>
      <img src="/icon.png" alt="" width={32} height={32} className="size-8 rounded-lg" />
      <span className="font-serif text-2xl leading-none font-semibold text-foreground">Theralo</span>
    </a>
  )
}

/** Sticky bar: wordmark, five links, the download. Below lg the links move into a sheet. */
export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b bg-background/85 backdrop-blur-md transition-colors',
        scrolled ? 'border-border' : 'border-transparent',
      )}
    >
      <div className="mx-auto flex h-[72px] w-full max-w-6xl items-center gap-6 px-5 sm:px-8">
        <Wordmark />

        <NavigationMenu viewport={false} className="mx-auto hidden lg:flex" aria-label="Hauptnavigation">
          <NavigationMenuList className="gap-1">
            {NAV.map((n) => (
              <NavigationMenuItem key={n.href}>
                <NavigationMenuLink
                  href={n.href}
                  className="rounded-lg px-4 py-2 text-base font-medium text-foreground/75 hover:bg-secondary hover:text-foreground focus:bg-secondary"
                >
                  {n.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <Button asChild size="lg" className="hidden h-11 rounded-lg px-5 text-[15px] sm:inline-flex">
            <a href={DOWNLOAD_URL}>
              <WindowsMark size={15} /> Herunterladen
            </a>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon-lg" className="lg:hidden" aria-label="Menü öffnen">
                <MenuIcon className="size-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(88vw,380px)] gap-0 bg-background">
              <SheetHeader className="border-b px-6 py-5">
                <SheetTitle className="font-serif text-2xl font-semibold">Theralo</SheetTitle>
                <SheetDescription className="sr-only">Navigation</SheetDescription>
              </SheetHeader>
              <nav aria-label="Hauptnavigation mobil" className="flex flex-col p-3">
                {NAV.map((n) => (
                  <SheetClose asChild key={n.href}>
                    <a href={n.href} className="rounded-lg px-3 py-3 text-lg font-medium hover:bg-secondary">
                      {n.label}
                    </a>
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-auto border-t p-6">
                <Button asChild size="xl" className="w-full">
                  <a href={DOWNLOAD_URL}>
                    <WindowsMark /> Für Windows herunterladen
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
