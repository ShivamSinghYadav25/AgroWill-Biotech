import Image from "next/image";
import { Download } from "lucide-react";
import { LinkButton } from "@/components/link-button";
import { metrics } from "@/lib/site-data";

const badges = [
  { label: "Laboratory Cultivated", icon: "⚗️" },
  { label: "Pharmaceutical Grade", icon: "🛡️" },
  { label: "Export Ready", icon: "🌐" },
  { label: "Bulk Supply", icon: "🧱" },
  { label: "Quality Tested", icon: "🍃" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-cream">
      <div className="container-page grid items-center gap-10 py-14 lg:grid-cols-2 lg:gap-12 lg:py-20">
        {/* Left Content */}
        <div>
          <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-gold-foreground">
            Cultivating Nature · Delivering Wellness
          </p>

          <h1 className="mt-4 font-heading text-4xl font-bold leading-[1.1] tracking-tight text-primary sm:text-5xl lg:text-6xl">
            Science Driven.
            <br />
            Nature Powered.
            <br />
            <span className="text-gold-foreground">
              Globally Trusted.
            </span>
          </h1>

          <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
            Premium laboratory cultivated Cordyceps militaris for
            pharmaceutical, nutraceutical and research applications,
            produced under controlled conditions with full traceability.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
  <LinkButton href="/contact" size="lg">
    Request Quotation
  </LinkButton>

  <a
    href="/Download/Agrowill brochure.pdf"
    download
    className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary/25 px-6 py-3 text-primary hover:bg-secondary transition"
  >
    <Download className="h-4 w-4" aria-hidden="true" />
    Download Brochure
  </a>
</div>

          {/* Badges */}
          <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3">
            {badges.map((badge) => (
              <li
                key={badge.label}
                className="flex items-center gap-2 text-xs font-medium text-primary"
              >
                <span className="text-lg">{badge.icon}</span>
                <span>{badge.label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-border bg-background shadow-sm">
            <Image
              src="/images/hero-cordyceps.png"
              alt="Cultivated Cordyceps militaris displayed under a glass dome in a laboratory setting"
              fill
              priority
              sizes="(min-width:1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div className="bg-forest-deep text-primary-foreground">
        <div className="container-page grid grid-cols-2 divide-x divide-primary-foreground/15 py-8 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="px-4 py-2 text-center"
            >
              <p className="font-heading text-3xl font-bold text-gold lg:text-4xl">
                {metric.value}
              </p>

              <p className="mt-1 text-xs uppercase tracking-wide text-primary-foreground/75">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}