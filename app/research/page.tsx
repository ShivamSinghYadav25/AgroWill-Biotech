import Image from 'next/image'
import type { Metadata } from 'next'
import { Beaker, Dna, Microscope, Users } from 'lucide-react'
import { PageHero, SectionHeading } from '@/components/page-hero'
import { CtaBand } from '@/components/cta-band'

export const metadata: Metadata = {
  title: 'Research & Innovation',
  description:
    'Strain improvement, bioactive compound studies, product development and research collaborations at Agrowill Biotech.',
}

const pillars = [
  {
    title: 'Strain Improvement',
    description: 'Developing stronger, more stable strains with predictable yield behaviour.',
    icon: Dna,
  },
  {
    title: 'Bioactive Compounds',
    description: 'Studying and enhancing beneficial compounds such as cordycepin and adenosine.',
    icon: Microscope,
  },
  {
    title: 'Product Development',
    description: 'Translating research into intermediate formats ready for global markets.',
    icon: Beaker,
  },
  {
    title: 'Collaborations',
    description: 'Partnering with research institutions and formulation teams on applied studies.',
    icon: Users,
  },
]

const stats = [
  { value: '10+', label: 'Research Projects' },
  { value: '5+', label: 'Institutional Partners' },
  { value: '2', label: 'Innovation Labs' },
  { value: '100+', label: 'Studies Reviewed' },
]

export default function ResearchPage() {
  return (
    <>
      <PageHero
        eyebrow="Research & Innovation"
        title="Driving innovation through science"
        description="Research is the engine behind our consistency. We invest in strain development, analytical understanding and applied product work."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Research' }]}
      />

      <section className="container-page py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <ul className="flex flex-col gap-4">
            {pillars.map((pillar) => (
              <li
                key={pillar.title}
                className="flex items-start gap-4 rounded-xl border border-border bg-card p-5"
              >
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                  <pillar.icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="font-heading text-base font-semibold text-primary">
                    {pillar.title}
                  </h2>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {pillar.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-border">
            <Image
              src="/images/research-lab.png"
              alt="Research scientist analysing Cordyceps samples in a laboratory"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-forest-deep text-primary-foreground">
        <div className="container-page grid grid-cols-2 gap-6 py-12 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-3xl font-bold text-gold lg:text-4xl">{stat.value}</p>
              <p className="mt-1 text-xs tracking-wide text-primary-foreground/75 uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-16 lg:py-20">
        <SectionHeading
          eyebrow="Applied Science"
          title="From laboratory insight to reliable raw material"
          description="Findings from our internal studies feed directly back into cultivation parameters, drying protocols and product specifications."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Analytical Understanding',
              detail:
                'Every strain and cycle is characterised so specifications reflect real, measured behaviour.',
            },
            {
              title: 'Process Optimisation',
              detail:
                'Small parameter refinements are validated before they enter routine production.',
            },
            {
              title: 'Customer Co-development',
              detail:
                'We work alongside formulators to shape grades that fit specific applications.',
            },
          ].map((item) => (
            <article key={item.title} className="rounded-xl border border-border bg-cream p-6">
              <h3 className="font-heading text-base font-semibold text-primary">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <CtaBand
        title="Collaborate with our research team"
        description="Research institutions and product development teams are welcome to discuss joint studies and custom material."
      />
    </>
  )
}
