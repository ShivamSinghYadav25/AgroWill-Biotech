import Link from "next/link"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

const variants = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90",
  gold: "bg-gold text-gold-foreground hover:opacity-90",
  outline: "border border-border bg-background text-foreground hover:bg-muted",
  light: "border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10",
}

const sizes = {
  md: "h-10 px-5 text-sm",
  lg: "h-12 px-7 text-sm",
}

export function LinkButton({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
}: {
  href: string
  children: ReactNode
  variant?: keyof typeof variants
  size?: keyof typeof sizes
  className?: string
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md font-medium tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
        variants[variant],
        sizes[size],
        className,
      )}
    >
      {children}
    </Link>
  )
}
