import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
}: {
  eyebrow?: string
  title: string
  description?: string
  breadcrumb?: { label: string; href?: string }[]
}) {
  return (
    <section className="border-b border-border bg-cream">
      <div className="container-page py-12 text-center lg:py-16">
        {breadcrumb && (
          <nav aria-label="Breadcrumb" className="mb-5 flex justify-center">
            <ol className="flex flex-wrap items-center justify-center gap-1 text-xs text-muted-foreground">
              {breadcrumb.map((crumb, index) => (
                <li key={crumb.label} className="flex items-center gap-1">
                  {index > 0 && <ChevronRight className="size-3" aria-hidden="true" />}
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-primary">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-foreground">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && (
          <p className="font-heading text-xs font-semibold tracking-[0.2em] text-gold-foreground uppercase">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-primary text-balance sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground text-pretty">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: 'center' | 'left'
}) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && (
        <p className="font-heading text-xs font-semibold tracking-[0.2em] text-gold-foreground uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 text-2xl font-bold tracking-tight text-primary text-balance sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 leading-relaxed text-muted-foreground text-pretty">{description}</p>
      )}
    </div>
  )
}
