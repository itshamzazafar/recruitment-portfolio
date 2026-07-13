import { useSearchParams } from 'react-router-dom'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { ContactForm } from '../components/ContactForm'
import { FadeIn } from '../components/FadeIn'
import { agency } from '../data/agency'

export function Contact() {
  const [searchParams] = useSearchParams()
  const typeParam = searchParams.get('type')
  const defaultInquiryType =
    typeParam === 'employer' || typeParam === 'candidate' ? typeParam : 'general'

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Have a question or ready to get started? We would love to hear from you."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-5">
          <FadeIn className="lg:col-span-3">
            <h2 className="mb-6 text-xl font-semibold text-slate-900">Send us a message</h2>
            <ContactForm defaultInquiryType={defaultInquiryType} />
          </FadeIn>

          <FadeIn delay={150} className="lg:col-span-2">
            <div className="space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-slate-900">Get in touch</h3>
                <ul className="mt-4 space-y-4 text-sm text-slate-600">
                  <li className="flex gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" aria-hidden="true" />
                    <span>{agency.address}</span>
                  </li>
                  <li className="flex gap-3">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" aria-hidden="true" />
                    <a href={`tel:${agency.phone.replace(/\s/g, '')}`} className="hover:text-brand-600">
                      {agency.phone}
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" aria-hidden="true" />
                    <a href={`mailto:${agency.email}`} className="hover:text-brand-600">
                      {agency.email}
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" aria-hidden="true" />
                    <span>{agency.businessHours}</span>
                  </li>
                </ul>
              </div>

              <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                <iframe
                  title="Office location map"
                  src="https://maps.google.com/maps?q=Clifton+Karachi&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="h-64 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
