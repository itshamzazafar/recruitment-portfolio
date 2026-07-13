import { Star } from 'lucide-react'
import type { Testimonial } from '../data/testimonials'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <blockquote className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex gap-0.5" aria-label={`${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
        ))}
      </div>
      <p className="flex-1 text-sm leading-relaxed text-slate-700">&ldquo;{testimonial.quote}&rdquo;</p>
      <footer className="mt-6 border-t border-slate-100 pt-4">
        <cite className="not-italic">
          <p className="font-semibold text-slate-900">{testimonial.name}</p>
          <p className="text-sm text-slate-500">
            {testimonial.role}, {testimonial.company}
          </p>
        </cite>
      </footer>
    </blockquote>
  )
}
