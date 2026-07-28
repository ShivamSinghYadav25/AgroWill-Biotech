import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { Hero } from '@/components/home/hero'
import { ProductGrid } from '@/components/product-grid'
import { BlogGrid } from '@/components/blog-grid'
import { CertificationStrip } from '@/components/certification-strip'
import { CtaBand } from '@/components/cta-band'
import { SectionHeading } from '@/components/page-hero'
import { LinkButton } from '@/components/link-button'
import { benefits, cultivationSteps, industries } from '@/lib/site-data'

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="container-page py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-border">
            <Image
              src="/images/cordyceps-packaging.jpg"
              alt="Agrowill Biotech Cordyceps sinensis retail carton and glass jar packaging"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="What is Cordyceps"
              title="One of the world's most respected medicinal fungi"
              description="Traditionally valued in Asian wellness systems for centuries, Cordyceps is now extensively studied for its bioactive compounds and its growing role in modern functional nutrition."
            />
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Unlike wild-harvested material, cultivated Cordyceps offers better consistency,
              controlled production conditions, improved traceability and genuinely sustainable
              sourcing.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="size-4 shrink-0 text-gold-foreground" aria-hidden="true" />
                  {benefit}
                </li>
              ))}
            </ul>
            <LinkButton href="/about" className="mt-8">
              About Agrowill Biotech
            </LinkButton>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-cream py-16 lg:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Products"
            title="Pharmaceutical grade Cordyceps for diverse industries"
            description="Carefully processed forms suitable for research, nutraceutical manufacturing, wellness brands and wholesale distribution."
          />
          <div className="mt-10">
            <ProductGrid />
          </div>
        </div>
      </section>

      <section className="container-page py-16 lg:py-20">
        <SectionHeading
          eyebrow="Scientific Cultivation"
          title="Advanced biotechnology for consistent quality"
          description="Every cultivation cycle follows the same controlled seven-stage process to protect purity, potency and traceability."
        />
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cultivationSteps.map((step) => (
            <li
              key={step.step}
              className="rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-md"
            >
              <span className="font-heading text-sm font-bold text-gold-foreground">
                {step.step}
              </span>
              <h3 className="mt-2 font-heading text-base font-semibold text-primary">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </li>
          ))}
          <li className="flex flex-col justify-center rounded-xl border border-dashed border-primary/30 bg-secondary p-5">
            <p className="font-heading text-base font-semibold text-primary">
              Full process transparency
            </p>
            <Link
              href="/cultivation"
              className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-gold-foreground"
            >
              View cultivation process
              <ArrowRight className="size-4" />
            </Link>
          </li>
        </ol>
      </section>

      <section className="border-y border-border bg-cream py-16 lg:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Quality Assurance"
            title="Committed to international quality standards"
            description="Uncompromised control at every stage, backed by documented testing and certification discipline."
          />
          <div className="mt-10">
            <CertificationStrip />
          </div>
          <div className="mt-8 flex justify-center">
            <LinkButton
              href="/quality"
              variant="outline"
              className="border-primary/25 text-primary hover:bg-secondary"
            >
              Explore Quality Assurance
            </LinkButton>
          </div>
        </div>
      </section>

      <section className="container-page py-16 lg:py-20">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Trusted raw material across multiple sectors"
          description="Agrowill Biotech products are suitable for a wide range of regulated and consumer industries."
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.slice(0, 8).map((industry) => (
            <li key={industry.title} className="rounded-xl border border-border bg-card p-5">
              <h3 className="font-heading text-sm font-semibold text-primary">{industry.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {industry.description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-border bg-cream py-16 lg:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Blog & Insights"
            title="Stay updated with the latest research"
            description="Perspectives on functional mushrooms, bioactive compounds and industry direction."
          />
          <div className="mt-10">
            <BlogGrid />
          </div>
          <div className="mt-8 flex justify-center">
            <LinkButton
              href="/blog"
              variant="outline"
              className="border-primary/25 text-primary hover:bg-secondary"
            >
              View All Articles
            </LinkButton>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
