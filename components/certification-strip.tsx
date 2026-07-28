import { Award } from 'lucide-react'
import { certifications } from '@/lib/site-data'

export function CertificationStrip() {
  return (
    <ul className="grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
      {certifications.map((certification) => (
        <li
          key={certification.name}
          className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-5 text-center"
        >
          <span className="inline-flex size-12 items-center justify-center rounded-full bg-secondary text-primary">
            <Award className="size-6" aria-hidden="true" />
          </span>
          <p className="font-heading text-sm font-semibold text-primary">{certification.name}</p>
          <p className="text-xs leading-relaxed text-muted-foreground">{certification.detail}</p>
        </li>
      ))}
    </ul>
  )
}
