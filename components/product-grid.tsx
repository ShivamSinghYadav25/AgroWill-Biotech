import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { products } from '@/lib/site-data'

export function ProductGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <article
          key={product.slug}
          className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-md"
        >
          <div className="relative aspect-square bg-cream">
            <Image
              src={product.image || '/placeholder.svg'}
              alt={product.name}
              fill
              sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col gap-2 p-5">
            <h3 className="font-heading text-base font-semibold text-primary">{product.name}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{product.short}</p>
            <Link
              href={`/products/${product.slug}`}
              className="mt-auto inline-flex items-center gap-1 pt-3 text-sm font-medium text-primary hover:text-gold-foreground"
            >
              Learn More
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </article>
      ))}
    </div>
  )
}
