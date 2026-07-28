import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArrowRight, Check, Download } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { CtaBand } from '@/components/cta-band'
import { Button } from '@/components/ui/button'
import { products } from '@/lib/site-data'

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = products.find((item) => item.slug === slug)
  if (!product) return { title: 'Product Not Found' }
  return { title: product.name, description: product.short }
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = products.find((item) => item.slug === slug)
  if (!product) notFound()

  const related = products.filter((item) => item.slug !== product.slug)

  return (
    <>
      <PageHero
        eyebrow="Product Detail"
        title={product.name}
        description={product.short}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Products', href: '/products' },
          { label: product.name },
        ]}
      />

      <section className="container-page py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-cream">
            <Image
              src={product.image || '/placeholder.svg'}
              alt={product.name}
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold tracking-tight text-primary">
              Product Overview
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Cultivated under controlled laboratory conditions and processed to preserve bioactive
              content, this grade is prepared for consistent industrial and research use with full
              batch documentation.
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {product.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2 text-sm text-foreground">
                  <Check
                    className="mt-0.5 size-4 shrink-0 text-gold-foreground"
                    aria-hidden="true"
                  />
                  {highlight}
                </li>
              ))}
            </ul>

            <dl className="mt-8 grid grid-cols-2 gap-4 rounded-xl border border-border bg-cream p-5 sm:grid-cols-3">
              {product.specs.map((spec) => (
                <div key={spec.label}>
                  <dt className="text-xs tracking-wide text-muted-foreground uppercase">
                    {spec.label}
                  </dt>
                  <dd className="mt-1 font-heading text-sm font-semibold text-primary">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact">
                <Button className="bg-primary text-primary-foreground">
                  Request Quote
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-primary/25 bg-background text-primary hover:bg-secondary"
                >
                  <Download className="size-4" />
                  Download Spec Sheet
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-cream py-16 lg:py-20">
        <div className="container-page">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-primary">
            Other product formats
          </h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-3">
            {related.map((item) => (
              <li
                key={item.slug}
                className="flex flex-col overflow-hidden rounded-xl border border-border bg-card"
              >
                <div className="relative aspect-16/10">
                  <Image
                    src={item.image || '/placeholder.svg'}
                    alt={item.name}
                    fill
                    sizes="(min-width: 640px) 30vw, 90vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-heading text-base font-semibold text-primary">{item.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.short}</p>
                  <Link
                    href={`/products/${item.slug}`}
                    className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-medium text-primary hover:text-gold-foreground"
                  >
                    View details
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
