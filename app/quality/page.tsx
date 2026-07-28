import Image from 'next/image'
import type { Metadata } from 'next'
import { ClipboardCheck, FileCheck2, FlaskConical, PackageCheck, SearchCheck } from 'lucide-react'
import { PageHero, SectionHeading } from '@/components/page-hero'
import { CertificationStrip } from '@/components/certification-strip'
import { CtaBand } from '@/components/cta-band'
import { qualitySteps } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Quality Assurance & Certifications',
  description:
    'Raw material checks, in-process control, laboratory testing, final release and secure packaging — quality assurance at Agrowill Biotech.',
}

const stepIcons = [SearchCheck, ClipboardCheck, FlaskConical, FileCheck2, PackageCheck]

export default function QualityPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality Assurance"
        title="Uncompromised quality at every stage"
        description="Documented controls from incoming raw material through to sealed, tamper proof packaging — so every batch performs the way your formulation expects."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Quality' }]}
      />

      <section className="container-page py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-border lg:sticky lg:top-28">
            <Image
              src="/images/quality-lab.png"
              alt="Quality control analyst examining a Cordyceps sample under a microscope"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <ol className="flex flex-col gap-4">
            {qualitySteps.map((step, index) => {
              const Icon = stepIcons[index % stepIcons.length]
              return (
                <li
                  key={step.title}
                  className="flex items-start gap-4 rounded-xl border border-border bg-card p-5"
                >
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h2 className="font-heading text-base font-semibold text-primary">
                      {step.title}
                    </h2>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </section>

      <section className="border-y border-border bg-cream py-16 lg:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Certifications"
            title="Committed to international standards"
            description="Our systems are aligned with globally recognised food safety and manufacturing frameworks."
          />
          <div className="mt-10">
            <CertificationStrip />
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'International Standards', detail: 'Aligned documentation and testing' },
              { title: 'Third Party Audited', detail: 'Independent verification of controls' },
              { title: 'Regulatory Compliant', detail: 'Export documentation support' },
              { title: 'Consistent Quality', detail: 'Batch to batch uniformity' },
            ].map((item) => (
              <li key={item.title} className="rounded-xl border border-border bg-card p-5">
                <p className="font-heading text-sm font-semibold text-primary">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Request documentation for your compliance team"
        description="Certificates of analysis, specifications and compliance documents are available on request."
      />
    </>
  )
}
