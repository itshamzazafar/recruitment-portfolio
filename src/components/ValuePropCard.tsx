import type { ValueProp } from '../data/valueProps'
import { getIcon } from '../utils/icons'

interface ValuePropCardProps {
  prop: ValueProp
}

export function ValuePropCard({ prop }: ValuePropCardProps) {
  const Icon = getIcon(prop.icon)

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="font-semibold text-slate-900">{prop.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{prop.description}</p>
    </div>
  )
}
