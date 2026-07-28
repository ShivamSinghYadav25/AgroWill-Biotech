import { LinkButton } from "@/components/link-button"

export function CtaBand({
  title = "Let us build a long-term supply partnership",
  description = "Share your requirement and our team will respond with specifications, pricing and lead times.",
}: {
  title?: string
  description?: string
}) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container-page flex flex-col items-center gap-6 py-12 text-center lg:flex-row lg:justify-between lg:py-14 lg:text-left">
        <div className="max-w-2xl">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-balance sm:text-3xl">{title}</h2>
          <p className="mt-3 leading-relaxed text-primary-foreground/80 text-pretty">{description}</p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <LinkButton href="/contact" variant="gold">
            Request Quotation
          </LinkButton>
          <LinkButton href="/products" variant="light">
            Explore Products
          </LinkButton>
        </div>
      </div>
    </section>
  )
}
