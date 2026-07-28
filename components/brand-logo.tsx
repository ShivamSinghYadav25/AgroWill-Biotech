import Image from "next/image"
import { cn } from "@/lib/utils"

export function BrandLogo({ className, priority = false }: { className?: string; priority?: boolean }) {
  return (
    <span className={cn("relative block h-10 w-29.5 overflow-hidden lg:h-12 lg:w-35.5", className)}>
      <Image
        src="/images/my-logo.png"
        alt="Agrowill Biotech"
        width={420}
        height={420}
        priority={priority}
        className="absolute top-1/2 left-1/2 w-[246%] max-w-none -translate-x-1/2 -translate-y-1/2"
      />
    </span>
  )
}