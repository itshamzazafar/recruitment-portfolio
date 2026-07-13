import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface CTABannerProps {
  title?: string
  description?: string
  primaryLabel?: string
  primaryTo?: string
  secondaryLabel?: string
  secondaryTo?: string
}

export function CTABanner({
  title = 'Ready to take the next step?',
  description = 'Whether you are hiring or looking for your next role, our team is here to help.',
  primaryLabel = 'Contact Us',
  primaryTo = '/contact',
  secondaryLabel = 'View Services',
  secondaryTo = '/services',
}: CTABannerProps) {
  return (
    <section className="bg-brand-600">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 lg:flex-row lg:text-left">
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
          <p className="mt-3 text-brand-100">{description}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to={primaryTo}
            className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-brand-600 transition-colors hover:bg-brand-50"
          >
            {primaryLabel}
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to={secondaryTo}
            className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  )
}
