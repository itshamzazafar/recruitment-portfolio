import { PageHero } from '../components/PageHero'
import { ValuePropCard } from '../components/ValuePropCard'
import { TeamCard } from '../components/TeamCard'
import { CTABanner } from '../components/CTABanner'
import { FadeIn } from '../components/FadeIn'
import { aboutStory, milestones } from '../data/milestones'
import { valueProps } from '../data/valueProps'
import { team } from '../data/team'

export function About() {
  return (
    <>
      <PageHero
        title="About TalentBridge"
        subtitle="We believe great recruitment is built on trust, expertise, and genuine human connection."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <FadeIn>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900">Our Mission</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">{aboutStory.mission}</p>
            <div className="mt-8 space-y-4 text-slate-600">
              {aboutStory.story.split('\n\n').map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <h2 className="mb-10 text-center text-2xl font-bold text-slate-900 sm:text-3xl">
              Why Choose Us
            </h2>
          </FadeIn>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {valueProps.map((prop, i) => (
              <FadeIn key={prop.title} delay={i * 80}>
                <ValuePropCard prop={prop} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <FadeIn>
          <h2 className="mb-10 text-center text-2xl font-bold text-slate-900 sm:text-3xl">
            Our Journey
          </h2>
        </FadeIn>
        <div className="relative mx-auto max-w-2xl">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-brand-200 sm:left-1/2 sm:-translate-x-px" />
          {milestones.map((milestone, i) => (
            <FadeIn key={milestone.year} delay={i * 100}>
              <div
                className={`relative mb-10 flex items-start gap-6 sm:gap-0 ${
                  i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? 'sm:pr-10 sm:text-right' : 'sm:pl-10'}`}>
                  <span className="text-sm font-bold text-brand-600">{milestone.year}</span>
                  <h3 className="mt-1 font-semibold text-slate-900">{milestone.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{milestone.description}</p>
                </div>
                <div className="absolute left-4 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center rounded-full bg-brand-600 ring-4 ring-white sm:left-1/2" />
                <div className="hidden flex-1 sm:block" />
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <h2 className="mb-10 text-center text-2xl font-bold text-slate-900 sm:text-3xl">
              Meet the Team
            </h2>
          </FadeIn>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <FadeIn key={member.id} delay={i * 80}>
                <TeamCard member={member} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
