import type { Metadata } from "next"
import { Rubik_Glitch, Spline_Sans_Mono } from "next/font/google"

import "./globals.css"
import { cn } from "@/lib/utils"
import { AmbientShell } from "@/components/ambient/ambient-shell"

const displayFont = Rubik_Glitch({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display"
})

const bodyFont = Spline_Sans_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body"
})

export const metadata: Metadata = {
  title: "Think - Premium Real-Time Chat",
  description:
    "A premium real-time chat app for web, desktop, and Android with groups, media, stories, themes, and voice messaging."
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={cn(displayFont.variable, bodyFont.variable, "font-sans antialiased")}
      >
        <AmbientShell>{children}</AmbientShell>
      </body>
    </html>
  )
}
