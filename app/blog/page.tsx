import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { BlogGrid } from '@/components/blog-grid'
import { CtaBand } from '@/components/cta-band'
import { benefits } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Blog & Insights',
  description:
    'Articles on Cordyceps health benefits, cordycepin research and the future of functional mushrooms in global nutrition.',
}

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog & Insights"
        title="Research, wellness and industry perspective"
        description="Stay updated with the latest thinking on cultivated medicinal fungi and their applications."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Blog' }]}
      />

      <section className="container-page py-16 lg:py-20">
        <BlogGrid />

        <div className="mt-14 rounded-2xl border border-border bg-cream p-8">
          <h2 className="font-heading text-xl font-bold tracking-tight text-primary">
            Reported benefits of Cordyceps
          </h2>
          <p className="mt-2 max-w-2xl leading-relaxed text-muted-foreground">
            Traditionally valued and increasingly studied, Cordyceps is associated with a broad range
            of wellness applications.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground"
              >
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
