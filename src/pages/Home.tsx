import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Hero } from '../components/Hero'
import { StatsBar } from '../components/StatsBar'
import { ServiceCard } from '../components/ServiceCard'
import { IndustryCard } from '../components/IndustryCard'
import { TestimonialCard } from '../components/TestimonialCard'
import { CTABanner } from '../components/CTABanner'
import { FadeIn } from '../components/FadeIn'
import { services } from '../data/services'
import { industries } from '../data/industries'
import { testimonials } from '../data/testimonials'

export function Home() {
  const previewServices = services.slice(0, 4)
  const featuredIndustries = industries.slice(0, 6)
  const featuredTestimonials = testimonials.slice(0, 3)

  return (
    <>
      <Hero />
      <StatsBar />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <FadeIn>
          <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Our Services</h2>
              <p className="mt-2 text-slate-600">
                Tailored recruitment solutions for employers and candidates.
              </p>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700"
            >
              View all services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {previewServices.map((service, i) => (
            <FadeIn key={service.id} delay={i * 80}>
              <ServiceCard service={service} />
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                  Industries We Serve
                </h2>
                <p className="mt-2 text-slate-600">
                  Specialized expertise across key sectors.
                </p>
              </div>
              <Link
                to="/industries"
                className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700"
              >
                View all industries
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeIn>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredIndustries.map((industry, i) => (
              <FadeIn key={industry.id} delay={i * 60}>
                <IndustryCard industry={industry} compact />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <FadeIn>
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              What Our Clients Say
            </h2>
            <p className="mt-2 text-slate-600">
              Trusted by employers and professionals alike.
            </p>
          </div>
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredTestimonials.map((testimonial, i) => (
            <FadeIn key={testimonial.id} delay={i * 100}>
              <TestimonialCard testimonial={testimonial} />
            </FadeIn>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/testimonials"
            className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700"
          >
            Read more testimonials
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
