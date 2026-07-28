import Link from 'next/link'
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import { company, products } from '@/lib/site-data'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Cultivation', href: '/cultivation' },
  { label: 'Quality', href: '/quality' },
  { label: 'Research', href: '/research' },
]

const industryLinks = [
  { label: 'Pharmaceutical', href: '/industries' },
  { label: 'Nutraceutical', href: '/industries' },
  { label: 'Wellness Brands', href: '/industries' },
  { label: 'Ayurvedic', href: '/industries' },
  { label: 'Research & Labs', href: '/industries' },
]

const supportLinks = [
  { label: 'Packaging Solutions', href: '/packaging' },
 
  { label: 'Certifications', href: '/quality' },
  { label: 'Blog & Insights', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
]

export function SiteFooter() {
  return (
    <footer className="bg-forest-deep text-primary-foreground">
      <div className="container-page py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-heading text-2xl font-bold tracking-tight">Agrowill Biotech</p>
            <p className="mt-1 text-sm text-gold">{company.tagline}</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/75">
              Premium laboratory cultivated Cordyceps for pharmaceutical, nutraceutical, wellness
              and research industries in India and worldwide.
            </p>
            <ul className="mt-6 flex flex-col gap-3 text-sm text-primary-foreground/85">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                <span>
                  {company.phone} &middot; {company.phoneAlt}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                <a href={`mailto:${company.email}`} className="hover:text-gold">
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                <span>{company.address}</span>
              </li>
            </ul>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-4">
            <FooterColumn title="Quick Links" links={quickLinks} />
            <FooterColumn
              title="Our Products"
              links={products.map((product) => ({
                label: product.name,
                href: `/products/${product.slug}`,
              }))}
            />
            <FooterColumn title="Industries" links={industryLinks} />
            <FooterColumn title="Support" links={supportLinks} />
          </div>

          <div className="lg:col-span-3">
            <h2 className="font-heading text-sm font-semibold tracking-wide uppercase">
              Subscribe Newsletter
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-primary-foreground/75">
              Get updates on new products, research and industry insights.
            </p>
            <form className="mt-4 flex items-center gap-2">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="Enter your email"
                className="h-10 w-full rounded-md border border-primary-foreground/25 bg-primary-foreground/10 px-3 text-sm text-primary-foreground placeholder:text-primary-foreground/60 focus:border-gold focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex size-10 shrink-0 items-center justify-center rounded-md bg-gold text-gold-foreground transition-opacity hover:opacity-90"
              >
                <span className="sr-only">Subscribe</span>
                <ArrowRight className="size-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/65 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Agrowill Biotech. All rights reserved.</p>
          <p>Laboratory Cultivated · Pharmaceutical Grade · Export Ready</p>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({
  title,
  links,
}: {
  title: string
  links: { label: string; href: string }[]
}) {
  return (
    <div>
      <h2 className="font-heading text-sm font-semibold tracking-wide uppercase">{title}</h2>
      <ul className="mt-3 flex flex-col gap-2 text-sm text-primary-foreground/75">
        {links.map((link) => (
          <li key={`${title}-${link.label}`}>
            <Link href={link.href} className="hover:text-gold">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
