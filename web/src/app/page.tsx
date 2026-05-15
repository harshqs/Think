import Image from "next/image"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { GlitchWordmark } from "@/components/glitch-wordmark"
import { Reveal } from "@/components/reveal"

const downloadUrl =
  "https://github.com/harshqs/Think/releases/download/v1.0.14/Think-Setup-1.0.14.exe"

function versionFromUrl(url: string) {
  const v = url.match(/\/v(\d+\.\d+\.\d+)\//)?.[1]
  if (v) return v
  const file = url.match(/Think-Setup-(\d+\.\d+\.\d+)\.exe$/)?.[1]
  return file ?? "1.0.0"
}

const appVersion = versionFromUrl(downloadUrl)

const imgSplash =
  "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=cinematic%20dark%20glitch%20splash%20screen%20for%20a%20premium%203D%20horror%20aesthetic%20chat%20app%2C%20floating%20particles%2C%20neon%20teal%20and%20violet%20accents%2C%20high%20contrast%2C%20film%20grain%2C%20dramatic%20lighting%2C%20ultra%20realistic%20UI%20render%2C%20no%20text%2C%20SDXL&image_size=landscape_16_9"
const imgChat =
  "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=dark%20futuristic%203D%20chat%20dashboard%20interface%2C%20minimal%20panels%2C%20teal%20and%20violet%20glow%2C%20subtle%203D%20depth%2C%20ambient%20particles%2C%20cinematic%20lighting%2C%20high%20quality%20UI%20mockup%2C%20no%20text%2C%20SDXL&image_size=landscape_16_9"
const imgCall =
  "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=full%20screen%20voice%20call%20overlay%20UI%20in%20a%20dark%20horror%203D%20aesthetic%2C%20soft%20glowing%20rings%2C%20teal%20and%20violet%20accents%2C%20cinematic%20film%20grain%2C%20ambient%20particles%2C%20high%20quality%20interface%20render%2C%20no%20text%2C%20SDXL&image_size=landscape_16_9"

function FeatureCard({
  title,
  description
}: {
  title: string
  description: string
}) {
  return (
    <Card className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -inset-24 bg-[radial-gradient(circle_at_20%_0%,rgba(34,211,238,0.18),transparent_45%),radial-gradient(circle_at_75%_30%,rgba(168,85,247,0.12),transparent_50%)]" />
      </div>
      <CardHeader className="relative">
        <CardTitle className="text-base">{title}</CardTitle>
        <CardDescription className="leading-relaxed">{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}

function Screenshot({
  src,
  alt
}: {
  src: string
  alt: string
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-black/30 shadow-lift-ominous">
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -inset-10 bg-[radial-gradient(circle_at_35%_15%,rgba(34,211,238,0.22),transparent_55%),radial-gradient(circle_at_65%_70%,rgba(168,85,247,0.16),transparent_50%)] blur-xl" />
      </div>
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={675}
        priority={false}
        className="h-full w-full object-cover opacity-95 transition duration-700 group-hover:scale-[1.02] group-hover:opacity-100"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
    </div>
  )
}

export default function Home() {
  return (
    <main className="mx-auto flex max-w-[1150px] flex-col gap-16 px-4 pb-16 pt-6 sm:px-6 sm:pb-20 sm:pt-10">
      <header className="sticky top-0 z-20 rounded-2xl border border-border/40 bg-background/35 px-4 py-4 backdrop-blur">
        <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-9 rounded-xl border border-border/60 bg-secondary/40 backdrop-blur" />
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-wide">
              <GlitchWordmark text="Think" className="text-sm" />
            </div>
            <div className="text-xs text-muted-foreground">Nexus Chat 3D</div>
          </div>
        </div>
        <div className="hidden items-center gap-4 md:flex">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground">
            Features
          </a>
          <a href="#flow" className="text-sm text-muted-foreground hover:text-foreground">
            Experience
          </a>
          <a href="#download" className="text-sm text-muted-foreground hover:text-foreground">
            Download
          </a>
        </div>
        </div>
        <div className="mt-3 flex items-center gap-2 md:hidden">
          <Button asChild size="sm" variant="outline" className="rounded-xl">
            <a href="#features">Features</a>
          </Button>
          <Button asChild size="sm" variant="outline" className="rounded-xl">
            <a href="#flow">Experience</a>
          </Button>
          <Button asChild size="sm" className="rounded-xl">
            <a href="#download">Download</a>
          </Button>
        </div>
      </header>

      <section className="relative">
        <div className="absolute -inset-x-10 -top-10 -z-10 h-[520px] bg-[radial-gradient(circle_at_20%_25%,rgba(34,211,238,0.22),transparent_45%),radial-gradient(circle_at_85%_25%,rgba(168,85,247,0.16),transparent_48%),radial-gradient(circle_at_50%_80%,rgba(16,185,129,0.10),transparent_56%)] blur-2xl" />

        <div className="grid items-center gap-10 md:grid-cols-[1.12fr_0.88fr]">
          <Reveal className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="signal">Premium • Dark mode</Badge>
              <Badge>Stories</Badge>
              <Badge>Voice calling</Badge>
              <Badge>Groups</Badge>
            </div>

            <h1 className="text-balance text-[clamp(2.35rem,5.5vw,4.2rem)] font-semibold leading-[0.98] tracking-tight">
              <span className="block text-muted-foreground">A horrific and beautiful</span>
              <span className="block">
                chat experience in <GlitchWordmark text="3D" />
              </span>
            </h1>

            <p className="max-w-[56ch] text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Think (aka Nexus Chat 3D) is built for people who want atmosphere with their
              conversations: cinematic onboarding, ambient motion, and real-time connection—without
              the clutter.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild className="h-11 rounded-xl">
                <a href={downloadUrl} id="download-cta">
                  Download for Windows
                </a>
              </Button>
              <Button asChild variant="outline" className="h-11 rounded-xl">
                <a href="#features">Enter the features</a>
              </Button>
              <div className="text-xs text-muted-foreground sm:ml-auto">
                Current version: <span className="text-foreground">v{appVersion}</span>
              </div>
            </div>
          </Reveal>

          <Reveal delayMs={120} className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[28px] bg-black/25 blur-xl" />
            <div className="relative overflow-hidden rounded-[28px] border border-border/60 bg-card/50 shadow-lift-ominous backdrop-blur">
              <div className="relative p-5">
                <div className="flex items-center justify-between">
                  <Badge variant="ghost">Live</Badge>
                  <Badge>Now playing</Badge>
                </div>
                <div className="mt-5 space-y-3">
                  <div className="h-10 w-[78%] rounded-xl bg-secondary/55" />
                  <div className="h-10 w-[62%] rounded-xl bg-secondary/40" />
                  <div className="h-10 w-[84%] rounded-xl bg-secondary/55" />
                  <div className="h-10 w-[54%] rounded-xl bg-secondary/40" />
                </div>
                <Separator className="my-6" />
                <div className="grid grid-cols-3 gap-3">
                  <div className="h-9 rounded-xl bg-secondary/40" />
                  <div className="h-9 rounded-xl bg-secondary/55" />
                  <div className="h-9 rounded-xl bg-secondary/40" />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-24 top-10 size-72 rounded-full bg-primary/10 blur-2xl" />
                <div className="absolute -right-28 bottom-0 size-80 rounded-full bg-accent/10 blur-2xl" />
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/60 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="features" className="scroll-mt-20">
        <Reveal className="flex items-end justify-between gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">The core pillars</h2>
            <p className="max-w-[70ch] text-sm leading-relaxed text-muted-foreground md:text-base">
              Everything is tuned for a dark, premium feel: quick actions, clean layout, and
              atmosphere that stays in the background until you notice it.
            </p>
          </div>
          <Badge variant="ghost" className="hidden md:inline-flex">
            Friends • Chats • Groups • Stories • Calls
          </Badge>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Reveal delayMs={0}>
            <FeatureCard
              title="Realtime chats"
              description="Instant 1:1 messaging with crisp motion and subtle feedback."
            />
          </Reveal>
          <Reveal delayMs={70}>
            <FeatureCard
              title="Group rooms"
              description="Build squads, plan chaos, and keep the conversation moving."
            />
          </Reveal>
          <Reveal delayMs={140}>
            <FeatureCard
              title="Stories (Status)"
              description="Post moments that disappear—view, react, reply straight into chat."
            />
          </Reveal>
          <Reveal delayMs={0}>
            <FeatureCard
              title="Voice calling"
              description="Jump into real-time voice with a full-screen cinematic overlay."
            />
          </Reveal>
          <Reveal delayMs={70}>
            <FeatureCard
              title="Media + voice notes"
              description="Send images and voice drops without breaking the flow."
            />
          </Reveal>
          <Reveal delayMs={140}>
            <FeatureCard
              title="Personalization"
              description="Tweak the vibe—theme, fonts, privacy, notifications, and more."
            />
          </Reveal>
        </div>
      </section>

      <section id="flow" className="scroll-mt-20">
        <Reveal className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            From glitch to dashboard
          </h2>
          <p className="max-w-[70ch] text-sm leading-relaxed text-muted-foreground md:text-base">
            The experience is the product: a splash that feels like a trailer, a dashboard that
            feels alive, and interactions that stay sharp even in the dark.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <Reveal delayMs={0}>
            <Screenshot src={imgSplash} alt="Cinematic glitchy splash mood" />
          </Reveal>
          <Reveal delayMs={90}>
            <Screenshot src={imgChat} alt="Dark 3D chat dashboard mood" />
          </Reveal>
          <Reveal delayMs={180}>
            <Screenshot src={imgCall} alt="Full-screen call overlay mood" />
          </Reveal>
        </div>
      </section>

      <section className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Polished where it matters
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            Designed to feel premium: unread badges, quick actions, crisp states, and controls that
            respect your attention.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            <Badge>Unread clarity</Badge>
            <Badge>Notification control</Badge>
            <Badge>Clean recovery UX</Badge>
            <Badge>Update prompts</Badge>
          </div>
        </Reveal>

        <Reveal delayMs={120}>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">FAQ</CardTitle>
              <CardDescription>Quick answers before you download.</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is it dark-mode only?</AccordionTrigger>
                  <AccordionContent className="leading-relaxed">
                    The default experience is tuned for dark mode and cinematic contrast.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>What can I do inside?</AccordionTrigger>
                  <AccordionContent className="leading-relaxed">
                    Friends, 1:1 chats, group rooms, stories, media sharing, and voice calling—built
                    around a premium atmosphere.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Is there an Android build?</AccordionTrigger>
                  <AccordionContent className="leading-relaxed">
                    Mobile is part of the roadmap and ships as a companion build. This page currently
                    links the latest Windows desktop installer.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </Reveal>
      </section>

      <section id="download" className="scroll-mt-20">
        <Reveal>
          <Card className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-0 opacity-80">
              <div className="absolute -inset-24 bg-[radial-gradient(circle_at_22%_30%,rgba(34,211,238,0.22),transparent_48%),radial-gradient(circle_at_78%_40%,rgba(168,85,247,0.18),transparent_50%)] blur-2xl" />
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/70 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
            <CardHeader className="relative">
              <CardTitle className="text-2xl md:text-3xl">
                Download <span className="text-primary">Think</span>
              </CardTitle>
              <CardDescription className="max-w-[70ch] leading-relaxed">
                Grab the latest Windows installer and step into Nexus Chat 3D.
              </CardDescription>
            </CardHeader>
            <CardContent className="relative">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-sm text-muted-foreground">
                  Version <span className="text-foreground">v{appVersion}</span> • Windows setup
                  (.exe)
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button asChild className="h-11 rounded-xl">
                    <a href={downloadUrl}>Download now</a>
                  </Button>
                  <Button asChild variant="outline" className="h-11 rounded-xl">
                    <a href="#download-cta">Back to top</a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </section>

      <footer className="flex flex-col items-start gap-2 text-xs text-muted-foreground">
        <Separator />
        <div>Think • Nexus Chat 3D</div>
        <div>© {new Date().getFullYear()} Think</div>
      </footer>
    </main>
  )
}
