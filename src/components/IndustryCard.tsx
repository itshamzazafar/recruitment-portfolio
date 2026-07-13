import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { Industry } from '../data/industries'
import { getIcon } from '../utils/icons'

interface IndustryCardProps {
  industry: Industry
  compact?: boolean
}

export function IndustryCard({ industry, compact = false }: IndustryCardProps) {
  const Icon = getIcon(industry.icon)

  if (compact) {
    return (
      <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <span className="text-sm font-semibold text-slate-800">{industry.name}</span>
      </div>
    )
  }

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md">
      <div className="relative h-40 overflow-hidden">
        <img
          src={industry.image}
          alt=""
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
        <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/90 text-brand-600">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-slate-900">{industry.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{industry.description}</p>
        <Link
          to="/contact"
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700"
        >
          Get in touch
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  )
}
