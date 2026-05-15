import { cn } from "@/lib/utils"

export function GlitchWordmark({
  text,
  className
}: {
  text: string
  className?: string
}) {
  return (
    <span
      className={cn("glitch font-display tracking-tight", className)}
      data-text={text}
    >
      {text}
    </span>
  )
}
