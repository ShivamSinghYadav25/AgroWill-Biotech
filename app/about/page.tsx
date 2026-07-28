import Image from 'next/image'
import type { Metadata } from 'next'
import { Compass, Handshake, Leaf, Lightbulb, ShieldCheck, Sparkles, Target } from 'lucide-react'
import { PageHero, SectionHeading } from '@/components/page-hero'
import { CtaBand } from '@/components/cta-band'
import { coreValues } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Agrowill Biotech is an emerging biotechnology company cultivating premium medicinal fungi using modern scientific techniques and controlled growing environments.',
}

const valueIcons = [ShieldCheck, Sparkles, Lightbulb, Leaf, Compass, Handshake]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Agrowill Biotech"
        title="Cultivating nature's best through science"
        description="An emerging biotechnology company dedicated to premium medicinal fungi, produced with modern scientific techniques inside controlled growing environments."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
      />

      <section className="container-page py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Story"
              title="Consistency, purity and quality in every cycle"
            />
            <div className="mt-5 flex flex-col gap-4 leading-relaxed text-muted-foreground">
              <p>
                Agrowill Biotech is an emerging biotechnology company dedicated to cultivating
                premium medicinal fungi using modern scientific techniques and carefully controlled
                growing environments.
              </p>
              <p>
                Our journey begins with one of the world&apos;s most valued functional mushrooms —
                Cordyceps. Every cultivation cycle is designed to maintain consistency, purity and
                quality while following strict production standards.
              </p>
              <p>
                Operating from our facility in the RIICO Industrial Area, Bagru Extension in Jaipur,
                we supply pharmaceutical companies, nutraceutical manufacturers, herbal medicine
                producers, research institutions and global buyers.
              </p>
            </div>
          </div>
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-border">
            <Image
              src="/images/about-team.png"
              alt="Agrowill Biotech scientists working at microscopes in a laboratory"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-cream py-16 lg:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Core Values"
            title="The principles behind every batch"
            description="Six commitments that shape how we cultivate, test and deliver."
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value, index) => {
              const Icon = valueIcons[index % valueIcons.length]
              return (
                <li key={value.title} className="rounded-xl border border-border bg-card p-6">
                  <span className="inline-flex size-11 items-center justify-center rounded-full bg-secondary text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-heading text-base font-semibold text-primary">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <section className="container-page py-16 lg:py-20">
        <SectionHeading
          eyebrow="Vision & Mission"
          title="Positioning India as a trusted global source"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-border bg-card p-7">
            <span className="inline-flex size-11 items-center justify-center rounded-full bg-secondary text-primary">
              <Target className="size-5" aria-hidden="true" />
            </span>
            <h3 className="mt-4 font-heading text-lg font-semibold text-primary">Our Vision</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              To become one of India&apos;s most trusted cultivators of premium-quality Cordyceps
              through scientific farming, controlled cultivation and uncompromising quality
              standards.
            </p>
          </article>
          <article className="rounded-2xl border border-border bg-card p-7">
            <span className="inline-flex size-11 items-center justify-center rounded-full bg-secondary text-primary">
              <Compass className="size-5" aria-hidden="true" />
            </span>
            <h3 className="mt-4 font-heading text-lg font-semibold text-primary">Our Mission</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              To produce consistent, traceable and sustainably cultivated Cordyceps that serves as a
              reliable raw material for pharmaceutical, nutraceutical, herbal and research
              industries, while expanding our agricultural portfolio of high-value commodities.
            </p>
          </article>
        </div>
      </section>

      <CtaBand
        title="Partner with us"
        description="Wholesalers, nutraceutical brands, pharmaceutical companies, retailers and wellness businesses — we build partnerships on trust, transparency and consistency."
      />
    </>
  )
}
