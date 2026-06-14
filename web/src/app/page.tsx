import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { GlitchWordmark } from "@/components/glitch-wordmark"
import { Reveal } from "@/components/reveal"

const desktopDownloadUrl =
  "https://github.com/harshqs/Think/releases/download/v1.0.19/Think-Setup-1.0.19.exe"
const mobileDownloadUrl =
  "https://github.com/harshqs/Think/releases/download/v1.0.21/Think-1.0.21.apk"
const desktopVersion = "1.0.19"
const mobileVersion = "1.0.19"
const appVersion = desktopVersion

const features = [
  ["Realtime chat", "Fast private and group conversations synced with Firebase."],
  ["Media messages", "Share images, GIFs, voice notes, audio, and video in the same flow."],
  ["Stories", "Post status updates with custom colors, drawings, and expiry timers."],
  ["Personal themes", "Tune chat themes, app-wide colors, fonts, and composer effects."],
  ["Cross-platform", "Built for web, packaged for Windows desktop, and ready for Android."],
  ["Notifications", "Desktop and push notification paths keep chats visible when it matters."]
]

const platformStats = [
  ["Web", "Next.js"],
  ["Desktop", "Electron"],
  ["Android", "Capacitor"]
]

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <Card className="group relative overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-primary/35 hover:bg-card/90">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <CardHeader>
        <CardTitle className="text-base">{title}</CardTitle>
        <CardDescription className="leading-relaxed">{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}

export default function Home() {
  return (
    <main className="mx-auto flex max-w-[1160px] flex-col gap-20 px-4 pb-14 pt-5 sm:px-6 sm:pb-20 lg:pt-8">
      <header className="sticky top-3 z-20 rounded-lg border border-border/60 bg-background/55 px-4 py-3 backdrop-blur-xl">
        <div className="flex items-center justify-between gap-4">
          <a href="#" className="flex items-center gap-3">
            <div className="grid size-9 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-sm font-semibold text-primary">
              T
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold">
                <GlitchWordmark text="Think" className="text-sm" />
              </div>
              <div className="text-xs text-muted-foreground">Premium real-time chat</div>
            </div>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            <a href="#features" className="text-sm text-muted-foreground transition hover:text-foreground">
              Features
            </a>
            <a href="#platforms" className="text-sm text-muted-foreground transition hover:text-foreground">
              Platforms
            </a>
            <a href="#download" className="text-sm text-muted-foreground transition hover:text-foreground">
              Download
            </a>
          </nav>

          <Button asChild size="sm" className="rounded-lg">
            <a href={desktopDownloadUrl}>Download</a>
          </Button>
        </div>
      </header>

      <section className="relative grid items-center gap-12 py-4 lg:py-10">
        <Reveal className="flex flex-col gap-7">
          <div className="flex flex-wrap gap-2">
            <Badge variant="signal">v{appVersion}</Badge>
            <Badge>Web</Badge>
            <Badge>Desktop</Badge>
            <Badge>Android</Badge>
          </div>

          <div className="space-y-5">
            <h1 className="max-w-[11ch] text-balance text-[clamp(3rem,8vw,6.4rem)] font-semibold leading-[0.92] tracking-normal">
              Think
            </h1>
            <p className="max-w-[58ch] text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              A clean, premium chat app for realtime conversations, groups, stories, media sharing,
              voice notes, themes, and native desktop notifications.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild className="h-11 rounded-lg px-6">
              <a href={desktopDownloadUrl} id="download-cta">
                Download for Windows
              </a>
            </Button>
            <Button asChild variant="outline" className="h-11 rounded-lg px-6">
              <a href="#features">View features</a>
            </Button>
          </div>
        </Reveal>
      </section>

      <section id="features" className="scroll-mt-24">
        <Reveal className="flex flex-col gap-3">
          <Badge variant="ghost" className="w-fit px-0">
            What matters
          </Badge>
          <h2 className="text-2xl font-semibold tracking-normal md:text-3xl">Built for daily chat</h2>
          <p className="max-w-[68ch] text-sm leading-relaxed text-muted-foreground md:text-base">
            No long promises. Just the pieces a modern chat app needs, arranged in a focused and
            smooth interface.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(([title, description], index) => (
            <Reveal key={title} delayMs={(index % 3) * 70}>
              <FeatureCard title={title} description={description} />
            </Reveal>
          ))}
        </div>
      </section>

      <section id="platforms" className="scroll-mt-24">
        <Reveal className="grid gap-8 rounded-lg border border-border/60 bg-card/55 p-5 backdrop-blur md:grid-cols-[0.9fr_1.1fr] md:p-7">
          <div>
            <h2 className="text-2xl font-semibold tracking-normal md:text-3xl">One product, three targets</h2>
            <p className="mt-3 max-w-[58ch] text-sm leading-relaxed text-muted-foreground md:text-base">
              Think is a Next.js app at the core, wrapped for desktop with Electron and for Android
              with Capacitor.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {platformStats.map(([name, stack]) => (
              <div key={name} className="rounded-lg border border-border/60 bg-background/45 p-4">
                <div className="text-sm text-muted-foreground">{name}</div>
                <div className="mt-2 text-lg font-semibold">{stack}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section id="download" className="grid scroll-mt-24 gap-8 md:grid-cols-[1fr_0.9fr]">
        <Reveal className="rounded-lg border border-primary/25 bg-primary/10 p-6 md:p-8">
          <h2 className="text-2xl font-semibold tracking-normal md:text-3xl">Download Think</h2>
          <p className="mt-3 max-w-[62ch] text-sm leading-relaxed text-muted-foreground md:text-base">
            Get the current Windows installer and Android APK. Web and mobile builds are part of the
            same product family.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild className="h-11 rounded-lg px-6">
              <a href={desktopDownloadUrl}>Download now for Windows</a>
            </Button>
            <Button asChild variant="outline" className="h-11 rounded-lg px-6">
              <a href={mobileDownloadUrl}>Download Android APK</a>
            </Button>
          </div>
          <div className="mt-3 text-sm text-muted-foreground">
            Version v{desktopVersion} for Windows · Android APK v{mobileVersion}
          </div>
        </Reveal>

        <Reveal delayMs={120}>
          <Accordion type="single" collapsible className="rounded-lg border border-border/60 bg-card/65 px-4">
            <AccordionItem value="item-1">
              <AccordionTrigger>Does Think support group chats?</AccordionTrigger>
              <AccordionContent className="leading-relaxed">
                Yes. Think supports one-to-one chat, group rooms, friend requests, and unique user IDs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Can I send media?</AccordionTrigger>
              <AccordionContent className="leading-relaxed">
                Yes. The app supports images, GIFs, audio, video, and voice recording playback.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it only a website?</AccordionTrigger>
              <AccordionContent className="leading-relaxed">
                No. It has web, Electron desktop, and Android Capacitor targets.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Reveal>
      </section>

      <footer className="flex flex-col gap-3 text-xs text-muted-foreground">
        <Separator />
        <div className="flex flex-col justify-between gap-2 sm:flex-row">
          <div>Think - Premium real-time chat</div>
          <div>(c) {new Date().getFullYear()} Think</div>
        </div>
      </footer>
    </main>
  )
}
