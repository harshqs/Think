import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border border-border/70 bg-secondary/40 px-3 py-1 text-xs font-medium text-secondary-foreground backdrop-blur",
  {
    variants: {
      variant: {
        default: "",
        ghost: "border-transparent bg-transparent text-muted-foreground",
        signal: "border-transparent bg-primary/15 text-primary"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof badgeVariants>) {
  return <div className={cn(badgeVariants({ variant, className }))} {...props} />
}

export { Badge, badgeVariants }
