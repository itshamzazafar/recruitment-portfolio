import { PageHero } from '../components/PageHero'
import { IndustryCard } from '../components/IndustryCard'
import { CTABanner } from '../components/CTABanner'
import { FadeIn } from '../components/FadeIn'
import { industries } from '../data/industries'

export function Industries() {
  return (
    <>
      <PageHero
        title="Industries We Serve"
        subtitle="Sector-specialist consultants who understand your market, your challenges, and the talent you need."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, i) => (
            <FadeIn key={industry.id} delay={i * 60}>
              <IndustryCard industry={industry} />
            </FadeIn>
          ))}
        </div>
      </section>

      <CTABanner
        title="Recruiting in a sector not listed?"
        description="We work across many industries. Get in touch and we will connect you with the right specialist."
        primaryLabel="Contact Us"
        primaryTo="/contact"
      />
    </>
  )
}
