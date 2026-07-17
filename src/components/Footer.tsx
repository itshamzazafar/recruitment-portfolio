import { Linkedin, Mail } from 'lucide-react'
import { agency } from '../data/agency'

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-8">
        <p className="font-display text-xl text-cream">{agency.name}</p>
        <div className="flex items-center gap-4">
          <a
            href={agency.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="text-mist transition-colors hover:text-accent"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${agency.email}`}
            className="text-mist transition-colors hover:text-accent"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
        <p className="text-sm text-mist">
          © {new Date().getFullYear()} {agency.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
