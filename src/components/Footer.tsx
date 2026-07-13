import { Link } from 'react-router-dom'
import { Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { agency } from '../data/agency'
import { employerServices } from '../data/services'

const footerLinks = [
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/industries', label: 'Industries' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-sm font-bold text-white">
              TB
            </span>
            <span className="text-lg font-semibold text-white">{agency.shortName}</span>
          </div>
          <p className="text-sm leading-relaxed text-slate-400">{agency.tagline}</p>
          <div className="mt-4 flex gap-3">
            <a
              href={agency.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-slate-800 p-2 transition-colors hover:bg-brand-600"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${agency.email}`}
              className="rounded-lg bg-slate-800 p-2 transition-colors hover:bg-brand-600"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {footerLinks.map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className="text-sm hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Our Services
          </h3>
          <ul className="space-y-2">
            {employerServices.slice(0, 4).map((service) => (
              <li key={service.id}>
                <Link to="/services" className="text-sm hover:text-white">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Contact
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
              <span>{agency.address}</span>
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
              <a href={`tel:${agency.phone.replace(/\s/g, '')}`} className="hover:text-white">
                {agency.phone}
              </a>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
              <a href={`mailto:${agency.email}`} className="hover:text-white">
                {agency.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-slate-500 sm:flex-row sm:px-6">
          <p>&copy; {new Date().getFullYear()} {agency.name}. All rights reserved.</p>
          <p>{agency.businessHours}</p>
        </div>
      </div>
    </footer>
  )
}
