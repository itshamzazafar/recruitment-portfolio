import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { Service } from '../data/services'
import { getIcon } from '../utils/icons'

interface ServiceCardProps {
  service: Service
  showLink?: boolean
}

export function ServiceCard({ service, showLink = true }: ServiceCardProps) {
  const Icon = getIcon(service.icon)

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-brand-200 hover:shadow-md">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{service.description}</p>
      {showLink && (
        <Link
          to="/services"
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700"
        >
          Learn more
          <ArrowRight className="h-4 w-4" />
        </Link>
      )}
    </article>
  )
}
