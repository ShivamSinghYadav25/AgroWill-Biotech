import type { Metadata } from 'next'
import {
  Boxes,
  Building2,
  FlaskRound,
  HeartPulse,
  Leaf,
  Microscope,
  Pill,
  Ship,
} from 'lucide-react'
import { PageHero, SectionHeading } from '@/components/page-hero'
import { CtaBand } from '@/components/cta-band'
import { industries } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description:
    'Cordyceps raw material for pharmaceutical, nutraceutical, wellness, ayurvedic, food supplement, research, export and bulk supply industries.',
}

const icons = [Pill, HeartPulse, Leaf, FlaskRound, Building2, Microscope, Ship, Boxes]

const whyChooseUs = [
  'Premium controlled cultivation',
  'Consistent product quality',
  'Scientific production methods',
  'Transparent business practices',
  'Reliable supply chain',
  'Competitive bulk pricing',
  'Custom packaging',
  'Export-oriented vision',
  'Customer-centric service',
]

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Applications"
        title="Industries we serve"
        description="Agrowill Biotech products are suitable for multiple regulated and consumer industries, supported by documentation and dependable supply."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Industries' }]}
      />

      <section className="container-page py-16 lg:py-20">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => {
            const Icon = icons[index % icons.length]
            return (
              <li
                key={industry.title}
                className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-full bg-secondary text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h2 className="mt-4 font-heading text-base font-semibold text-primary">
                  {industry.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {industry.description}
                </p>
              </li>
            )
          })}
        </ul>
      </section>

      <section className="border-y border-border bg-cream py-16 lg:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Nine reasons partners stay with Agrowill"
            description="We believe successful partnerships are built on trust, transparency and consistency."
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((reason, index) => (
              <li
                key={reason}
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-5"
              >
                <span className="font-heading text-sm font-bold text-gold-foreground">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="font-heading text-sm font-semibold text-primary">{reason}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Tell us about your application"
        description="Share your industry and formulation goals, and we will match the right Cordyceps grade to it."
      />
    </>
  )
}
