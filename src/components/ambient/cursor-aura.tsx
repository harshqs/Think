"use client"

import * as React from "react"

export function CursorAura() {
  const dotRef = React.useRef<HTMLDivElement | null>(null)
  const ringRef = React.useRef<HTMLDivElement | null>(null)
  const glowRef = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false
    const finePointer = window.matchMedia?.("(pointer: fine)")?.matches ?? false
    if (reduceMotion || !finePointer) return

    const dot = dotRef.current
    const ring = ringRef.current
    const glow = glowRef.current
    if (!dot || !ring || !glow) return

    let raf = 0
    let targetX = window.innerWidth / 2
    let targetY = window.innerHeight / 2
    let ringX = targetX
    let ringY = targetY
    let glowX = targetX
    let glowY = targetY

    const move = (event: PointerEvent) => {
      targetX = event.clientX
      targetY = event.clientY
      dot.style.opacity = "1"
      ring.style.opacity = "1"
      glow.style.opacity = "1"
      dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`
    }

    const leave = () => {
      dot.style.opacity = "0"
      ring.style.opacity = "0"
      glow.style.opacity = "0"
    }

    const frame = () => {
      ringX += (targetX - ringX) * 0.2
      ringY += (targetY - ringY) * 0.2
      glowX += (targetX - glowX) * 0.08
      glowY += (targetY - glowY) * 0.08

      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`
      glow.style.transform = `translate3d(${glowX}px, ${glowY}px, 0) translate(-50%, -50%)`
      raf = window.requestAnimationFrame(frame)
    }

    window.addEventListener("pointermove", move, { passive: true })
    document.addEventListener("pointerleave", leave)
    raf = window.requestAnimationFrame(frame)

    return () => {
      window.removeEventListener("pointermove", move)
      document.removeEventListener("pointerleave", leave)
      window.cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-50 hidden md:block">
      <div ref={glowRef} className="cursor-aura-glow" />
      <div ref={ringRef} className="cursor-aura-ring" />
      <div ref={dotRef} className="cursor-aura-dot" />
    </div>
  )
}
