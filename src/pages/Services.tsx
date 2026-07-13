import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { CTABanner } from '../components/CTABanner'
import { FadeIn } from '../components/FadeIn'
import { employerServices, candidateServices } from '../data/services'
import { getIcon } from '../utils/icons'

function ServiceSection({
  title,
  subtitle,
  services,
}: {
  title: string
  subtitle: string
  services: typeof employerServices
}) {
  return (
    <div className="mb-16 last:mb-0">
      <FadeIn>
        <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
        <p className="mt-2 max-w-2xl text-slate-600">{subtitle}</p>
      </FadeIn>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {services.map((service, i) => {
          const Icon = getIcon(service.icon)
          return (
            <FadeIn key={service.id} delay={i * 80}>
              <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.description}</p>
                <ul className="mt-4 space-y-2">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 text-sm text-slate-700">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700"
                >
                  Get started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            </FadeIn>
          )
        })}
      </div>
    </div>
  )
}

export function Services() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Comprehensive recruitment solutions designed for employers building teams and professionals building careers."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <ServiceSection
          title="For Employers"
          subtitle="Find the right people faster with our end-to-end hiring solutions."
          services={employerServices}
        />
        <ServiceSection
          title="For Candidates"
          subtitle="Take the next step in your career with expert guidance and exclusive opportunities."
          services={candidateServices}
        />
      </section>

      <CTABanner
        title="Not sure which service fits?"
        description="Tell us about your needs and we will recommend the best approach."
        primaryLabel="Talk to Us"
        primaryTo="/contact"
      />
    </>
  )
}
