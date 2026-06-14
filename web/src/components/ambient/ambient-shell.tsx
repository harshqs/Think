import { ParticleField } from "@/components/ambient/particle-field"
import { CursorAura } from "@/components/ambient/cursor-aura"

export function AmbientShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="glow-ring" />
        <div className="scanlines" />
        <div className="grain" />
      </div>

      <ParticleField />
      <CursorAura />

      <div className="relative z-10">{children}</div>
    </div>
  )
}
