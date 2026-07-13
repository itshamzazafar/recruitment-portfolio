import { stats } from '../data/stats'
import { FadeIn } from './FadeIn'

export function StatsBar() {
  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-12 sm:px-6 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <FadeIn key={stat.label} delay={i * 100}>
            <div className="text-center">
              <p className="text-3xl font-bold text-brand-600 sm:text-4xl">{stat.value}</p>
              <p className="mt-1 text-sm font-medium text-slate-600">{stat.label}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
