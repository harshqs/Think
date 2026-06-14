"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  hue: number
}

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min
}

export function ParticleField({ className }: { className?: string }) {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null)

  React.useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const activeCanvas = canvas

    const ctx = canvas.getContext("2d")
    if (!ctx) return
    const activeCtx = ctx

    let raf = 0
    let dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1))
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false

    const particles: Particle[] = []
    let lastFrameAt = 0
    let connectDist = 160
    let drawConnections = true

    function resize() {
      dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1))
      const { innerWidth: w, innerHeight: h } = window
      activeCanvas.width = Math.floor(w * dpr)
      activeCanvas.height = Math.floor(h * dpr)
      activeCanvas.style.width = `${w}px`
      activeCanvas.style.height = `${h}px`
      activeCtx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const density = Math.round((w * h) / 38000)
      const mobile = w < 640
      connectDist = mobile ? 120 : 160
      particles.length = 0
      const cap = mobile ? 42 : 78
      for (let i = 0; i < Math.min(cap, Math.max(26, density)); i++) {
        particles.push({
          x: rand(0, w),
          y: rand(0, h),
          vx: rand(-0.16, 0.16),
          vy: rand(-0.14, 0.14),
          r: rand(0.7, 2.0),
          hue: Math.random() > 0.55 ? 166 : 282
        })
      }
    }

    function frame(now: number) {
      if (reduceMotion) return
      const frameBudget = 1000 / 32
      if (now - lastFrameAt < frameBudget) {
        raf = window.requestAnimationFrame(frame)
        return
      }
      lastFrameAt = now
      drawConnections = !drawConnections

      const w = window.innerWidth
      const h = window.innerHeight

      activeCtx.clearRect(0, 0, w, h)
      activeCtx.globalCompositeOperation = "lighter"

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < -20) p.x = w + 20
        if (p.x > w + 20) p.x = -20
        if (p.y < -20) p.y = h + 20
        if (p.y > h + 20) p.y = -20
      }

      if (drawConnections) {
        for (let i = 0; i < particles.length; i++) {
          const a = particles[i]
          for (let j = i + 1; j < particles.length; j++) {
            const b = particles[j]
            const dx = a.x - b.x
            const dy = a.y - b.y
            const d = Math.hypot(dx, dy)
            if (d > connectDist) continue

            const alpha = (1 - d / connectDist) * 0.14
            activeCtx.strokeStyle = `hsla(${a.hue}, 85%, 60%, ${alpha})`
            activeCtx.lineWidth = 1
            activeCtx.beginPath()
            activeCtx.moveTo(a.x, a.y)
            activeCtx.lineTo(b.x, b.y)
            activeCtx.stroke()
          }
        }
      }

      for (const p of particles) {
        activeCtx.fillStyle = `hsla(${p.hue}, 85%, 60%, 0.35)`
        activeCtx.beginPath()
        activeCtx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        activeCtx.fill()
      }

      activeCtx.globalCompositeOperation = "source-over"
      raf = window.requestAnimationFrame(frame)
    }

    const onResize = () => resize()
    resize()
    if (reduceMotion) return
    raf = window.requestAnimationFrame(frame)
    window.addEventListener("resize", onResize)

    return () => {
      window.removeEventListener("resize", onResize)
      window.cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 z-0 opacity-80", className)}
    />
  )
}
