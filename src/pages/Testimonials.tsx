import { useState } from 'react'
import { PageHero } from '../components/PageHero'
import { TestimonialCard } from '../components/TestimonialCard'
import { CTABanner } from '../components/CTABanner'
import { FadeIn } from '../components/FadeIn'
import { testimonials, type TestimonialType } from '../data/testimonials'

type Filter = 'all' | TestimonialType

const filters: { value: Filter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'client', label: 'Clients' },
  { value: 'candidate', label: 'Candidates' },
]

export function Testimonials() {
  const [filter, setFilter] = useState<Filter>('all')

  const filtered =
    filter === 'all' ? testimonials : testimonials.filter((t) => t.type === filter)

  return (
    <>
      <PageHero
        title="Testimonials"
        subtitle="Hear from the employers and professionals who have partnered with Talent Bridge."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <FadeIn>
          <div className="mb-10 flex justify-center gap-2">
            {filters.map(({ value, label }) => (
              <button
                key={value}
                type="button"
                onClick={() => setFilter(value)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  filter === value
                    ? 'bg-brand-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((testimonial, i) => (
            <FadeIn key={testimonial.id} delay={i * 60}>
              <TestimonialCard testimonial={testimonial} />
            </FadeIn>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  )
}
