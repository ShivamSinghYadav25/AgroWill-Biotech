import type { Metadata } from 'next'
import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { InquiryForm } from '@/components/inquiry-form'
import { company } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact Agrowill Biotech in Jaipur for Cordyceps quotations, specifications, samples and export inquiries.',
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's build long-term partnerships"
        description="Reach our team for quotations, technical specifications, samples or export documentation."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
      />

      <section className="container-page py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
          <div className="lg:col-span-2">
            <h2 className="font-heading text-xl font-bold tracking-tight text-primary">
              Contact details
            </h2>
            <ul className="mt-6 flex flex-col gap-5">
              <ContactRow icon={Phone} label="Phone">
                <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="hover:text-primary">
                  {company.phone}
                </a>
                <br />
                <a
                  href={`tel:${company.phoneAlt.replace(/\s/g, '')}`}
                  className="hover:text-primary"
                >
                  {company.phoneAlt}
                </a>
              </ContactRow>
              <ContactRow icon={MessageCircle} label="WhatsApp">
                <a
                  href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, '')}`}
                  className="hover:text-primary"
                >
                  {company.whatsapp}
                </a>
              </ContactRow>
              <ContactRow icon={Mail} label="Email">
                <a href={`mailto:${company.email}`} className="hover:text-primary">
                  {company.email}
                </a>
              </ContactRow>
              <ContactRow icon={MapPin} label="Address">
                {company.address}
              </ContactRow>
              <ContactRow icon={Clock} label="Working Hours">
                Monday to Saturday, 9:30 AM - 6:30 PM IST
              </ContactRow>
            </ul>

            <div className="mt-8 rounded-2xl border border-border bg-cream p-6">
              <p className="font-heading text-sm font-semibold text-primary">
                Samples and documentation
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Evaluation samples, certificates of analysis and product specification sheets are
                available for qualified buyers on request.
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <InquiryForm />
          </div>
        </div>
      </section>
    </>
  )
}

function ContactRow({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  children: React.ReactNode
}) {
  return (
    <li className="flex items-start gap-4">
      <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
        <Icon className="size-5" />
      </span>
      <div>
        <p className="text-xs tracking-wide text-muted-foreground uppercase">{label}</p>
        <p className="mt-1 text-sm leading-relaxed text-foreground">{children}</p>
      </div>
    </li>
  )
}
