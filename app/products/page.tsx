import type { Metadata } from 'next'
import { FlaskConical, Layers, Leaf, Zap } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { ProductGrid } from '@/components/product-grid'
import { CtaBand } from '@/components/cta-band'

export const metadata: Metadata = {
  title: 'Our Products',
  description:
    'Premium cultivated Cordyceps in whole fruiting body, powder, extract and custom ingredient formats for pharmaceutical, nutraceutical and research industries.',
}

const assurances = [
  { title: '100% Pure', detail: 'No additives or fillers', icon: Leaf },
  { title: 'Lab Tested', detail: 'Trusted, documented results', icon: FlaskConical },
  { title: 'High Potency', detail: 'Active compounds preserved', icon: Zap },
  { title: 'Bulk Supply', detail: 'Export ready consignments', icon: Layers },
]

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Product Range"
        title="Our Products"
        description="Pharmaceutical grade Cordyceps products, available in carefully processed forms suitable for research, manufacturing, wellness brands and wholesale distribution."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Products' }]}
      />

      <section className="container-page py-16 lg:py-20">
        <ProductGrid />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {assurances.map((assurance) => (
            <li
              key={assurance.title}
              className="flex items-center gap-4 rounded-xl border border-border bg-cream p-5"
            >
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-background text-primary">
                <assurance.icon className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-heading text-sm font-semibold text-primary">
                  {assurance.title}
                </p>
                <p className="text-xs text-muted-foreground">{assurance.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <CtaBand
        title="Need a specific grade or specification?"
        description="Tell us your target application and volume, and we will recommend the right product format."
      />
    </>
  )
}
