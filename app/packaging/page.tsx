import Image from 'next/image'
import type { Metadata } from 'next'
import { Droplets, ShieldCheck, Tags, Utensils } from 'lucide-react'
import { PageHero, SectionHeading } from '@/components/page-hero'
import { CtaBand } from '@/components/cta-band'
import { packagingOptions } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Packaging Solutions',
  description:
    'Retail packs, bulk packs, drum packs and custom private label packaging — moisture proof, food grade and tamper proof.',
}

const features = [
  { title: 'Moisture Proof', detail: 'Barrier liners protect dryness in transit', icon: Droplets },
  { title: 'Food Grade', detail: 'Only approved contact materials used', icon: Utensils },
  { title: 'Tamper Proof', detail: 'Sealed and inspected before dispatch', icon: ShieldCheck },
  { title: 'Custom Labeling', detail: 'Your branding, batch and compliance data', icon: Tags },
]

export default function PackagingPage() {
  return (
    <>
      <PageHero
        eyebrow="Packaging Solutions"
        title="Safe, secure and customised packaging"
        description="From consumer ready retail formats to export drums, packaging is selected to protect potency and simplify your downstream handling."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Packaging' }]}
      />

      <section className="container-page py-16 lg:py-20">
        <div className="relative aspect-16/9 overflow-hidden rounded-2xl border border-border">
          <Image
            src="/images/packaging-lineup.png"
            alt="Packaging formats including pouch, bulk sack, fibre drum and shipping carton"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {packagingOptions.map((option) => (
            <li
              key={option.title}
              className="flex flex-col rounded-xl border border-border bg-card p-6"
            >
              <span className="w-fit rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                {option.tag}
              </span>
              <h2 className="mt-4 font-heading text-base font-semibold text-primary">
                {option.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {option.description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-border bg-cream py-16 lg:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Packaging Standards"
            title="Protection built into every pack"
            description="Each format is validated for storage stability, transport safety and regulatory labelling."
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <li key={feature.title} className="rounded-xl border border-border bg-card p-6">
                <span className="inline-flex size-11 items-center justify-center rounded-full bg-secondary text-primary">
                  <feature.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-heading text-sm font-semibold text-primary">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.detail}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Need a custom pack size?"
        description="Share your preferred format, labelling and volume requirement and we will quote accordingly."
      />
    </>
  )
}
