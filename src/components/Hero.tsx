import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { agency } from '../data/agency'
import { FadeIn } from './FadeIn'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-slate-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.08),transparent_50%)]" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:py-32">
        <FadeIn>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-600">
            {agency.name}
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            {agency.tagline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            {agency.description}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact?type=employer"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition-all hover:bg-brand-700 hover:shadow-brand-600/30"
            >
              Find Talent
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact?type=candidate"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition-all hover:border-brand-300 hover:bg-brand-50"
            >
              Find a Job
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
            >
              Our Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
