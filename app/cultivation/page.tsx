import Image from 'next/image'
import type { Metadata } from 'next'
import { Droplets, Gauge, Thermometer, Wind } from 'lucide-react'
import { PageHero, SectionHeading } from '@/components/page-hero'
import { CtaBand } from '@/components/cta-band'
import { cultivationSteps } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Scientific Cultivation',
  description:
    'A controlled seven-stage Cordyceps cultivation process from mother culture to low temperature harvest and drying.',
}

const controls = [
  { title: 'Temperature', detail: 'Stage specific ranges held continuously', icon: Thermometer },
  { title: 'Humidity', detail: 'Monitored to protect fruiting quality', icon: Droplets },
  { title: 'Airflow & CO2', detail: 'Balanced exchange for dense growth', icon: Wind },
  { title: 'Batch Records', detail: 'Every cycle logged and traceable', icon: Gauge },
]

export default function CultivationPage() {
  return (
    <>
      <PageHero
        eyebrow="Scientific Cultivation"
        title="Advanced biotechnology for consistent quality"
        description="Cultivation happens inside controlled environments where each stage is measured, documented and repeatable — the foundation of consistent Cordyceps."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Cultivation' }]}
      />

      <section className="container-page py-16 lg:py-20">
        <SectionHeading
          eyebrow="Process Timeline"
          title="Seven controlled stages, every cycle"
          description="From authenticated mother culture to low temperature drying, nothing is left to chance."
        />
        <ol className="mt-10 flex flex-col gap-4">
          {cultivationSteps.map((step) => (
            <li
              key={step.step}
              className="flex flex-col gap-3 rounded-xl border border-border bg-card p-5 sm:flex-row sm:items-center sm:gap-6"
            >
              <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-sm font-bold text-primary-foreground">
                {step.step}
              </span>
              <div className="sm:w-56 sm:shrink-0">
                <h3 className="font-heading text-base font-semibold text-primary">{step.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-border bg-cream py-16 lg:py-20">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-border">
            <Image
              src="/images/cultivation-lab.png"
              alt="Rows of cultivation jars with Cordyceps militaris inside a controlled grow room"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Controlled Environment"
              title="Parameters that protect potency"
              description="Cultivated Cordyceps outperforms wild-harvested material on consistency, traceability and sustainability because the environment is engineered, not assumed."
            />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {controls.map((control) => (
                <li key={control.title} className="rounded-xl border border-border bg-card p-5">
                  <span className="inline-flex size-10 items-center justify-center rounded-full bg-secondary text-primary">
                    <control.icon className="size-5" aria-hidden="true" />
                  </span>
                  <p className="mt-3 font-heading text-sm font-semibold text-primary">
                    {control.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {control.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand
        title="Want to review our cultivation protocol?"
        description="We are happy to walk technical teams through our process, controls and documentation."
      />
    </>
  )
}
