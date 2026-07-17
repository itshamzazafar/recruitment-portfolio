import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ArrowDown, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { agency, pillars } from '../data/agency'
import { services } from '../data/services'
import { industries } from '../data/industries'
import { milestones, aboutStory } from '../data/milestones'
import { testimonials } from '../data/testimonials'
import { ContactForm } from '../components/ContactForm'
import { Reveal } from '../components/Reveal'
import { getIcon } from '../utils/icons'

gsap.registerPlugin(useGSAP)

export function Home() {
  const heroRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (reduce) return

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from('.hero-badge', { opacity: 0, y: 16, duration: 0.6 })
        .from('.hero-title', { opacity: 0, y: 28, duration: 0.8 }, '-=0.25')
        .from('.hero-sub', { opacity: 0, y: 20, duration: 0.6 }, '-=0.4')
        .from('.hero-copy', { opacity: 0, y: 18, duration: 0.6 }, '-=0.35')
        .from('.hero-cta', { opacity: 0, y: 16, duration: 0.5, stagger: 0.08 }, '-=0.3')
        .from('.hero-scroll', { opacity: 0, duration: 0.6 }, '-=0.1')

      gsap.to('.hero-glow', {
        scale: 1.08,
        opacity: 0.85,
        duration: 4,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
      })
    },
    { scope: heroRef },
  )

  return (
    <>
      {/* Hero */}
      <section
        id="home"
        ref={heroRef}
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 pb-16 pt-28 text-center sm:px-8"
      >
        <div className="hero-glow pointer-events-none absolute left-1/2 top-[-10%] h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(232,188,185,0.28),transparent_68%)] blur-2xl" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <p className="hero-badge mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-cream/20 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-mist">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            Strategic sourcing · Outreach · Recruitment
          </p>

          <h1 className="hero-title font-display text-5xl leading-[1.05] tracking-tight text-cream sm:text-6xl md:text-7xl">
            Hi, I&apos;m{' '}
            <span className="italic text-accent">{agency.ownerName.split(' ')[0]}</span>
          </h1>
          <p className="hero-sub mt-4 font-display text-3xl text-accent sm:text-4xl">
            {agency.name}
          </p>
          <p className="mt-2 text-base font-medium tracking-wide text-cream/90 sm:text-lg">
            {agency.tagline}
          </p>
          <p className="hero-copy mx-auto mt-6 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
            {agency.description}
          </p>

          <div className="hero-cta mt-10 flex flex-wrap items-center justify-center gap-3">
            <a href="#services" className="btn-primary">
              View Services
            </a>
            <a href="#contact" className="btn-ghost">
              <Mail className="h-4 w-4" aria-hidden="true" />
              Contact Me
            </a>
          </div>
        </div>

        <a
          href="#about"
          className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 text-mist transition-colors hover:text-accent"
          aria-label="Scroll to about"
        >
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </a>
      </section>

      {/* Pillars */}
      <section className="border-t border-line bg-section px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-line bg-panel/60 p-6">
                <h3 className="font-display text-2xl text-cream">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">{pillar.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-glow px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="section-label">About</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-cream sm:text-5xl">
              Recruitment with intent
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-mist">{aboutStory.mission}</p>
            <div className="mt-6 space-y-4 text-mist">
              {aboutStory.story.split('\n\n').map((p) => (
                <p key={p.slice(0, 32)} className="leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="rounded-2xl border border-line bg-panel/70 p-8">
              <dl className="space-y-6">
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-accent">Focus</dt>
                  <dd className="mt-2 text-cream">Startups, agencies & growing businesses</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-accent">Approach</dt>
                  <dd className="mt-2 text-cream">Strategic sourcing, outreach, efficient hiring</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-accent">Based in</dt>
                  <dd className="mt-2 text-cream">{agency.location}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-accent">Founded</dt>
                  <dd className="mt-2 text-cream">{agency.foundedYear}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-accent">Lead</dt>
                  <dd className="mt-2 text-cream">{agency.ownerName}</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-t border-line bg-section px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="section-label">Services</p>
            <h2 className="mt-4 font-display text-4xl text-cream sm:text-5xl">
              How I help you hire
            </h2>
            <p className="mt-4 max-w-2xl text-mist">
              End-to-end recruitment support for employers — and career guidance for candidates.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {services.map((service, i) => {
              const Icon = getIcon(service.icon)
              return (
                <Reveal key={service.id} delay={(i % 4) * 0.06}>
                  <article className="h-full rounded-2xl border border-line bg-panel/50 p-6 transition-colors hover:border-accent/40">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-line text-accent">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <p className="text-xs uppercase tracking-[0.16em] text-mist">
                      {service.audience === 'employer' ? 'For employers' : 'For candidates'}
                    </p>
                    <h3 className="mt-2 font-display text-2xl text-cream">{service.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-mist">{service.description}</p>
                    <ul className="mt-4 space-y-1.5">
                      {service.benefits.slice(0, 3).map((b) => (
                        <li key={b} className="text-sm text-cream/80">
                          · {b}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="border-t border-line px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="section-label">Industries</p>
            <h2 className="mt-4 font-display text-4xl text-cream sm:text-5xl">
              Sectors I recruit in
            </h2>
          </Reveal>
          <div className="mt-10 flex flex-wrap gap-3">
            {industries.map((industry, i) => (
              <Reveal key={industry.id} delay={i * 0.04} y={20}>
                <span className="inline-flex items-center rounded-full border border-line bg-panel/40 px-4 py-2 text-sm text-cream transition-colors hover:border-accent/50 hover:text-accent">
                  {industry.name}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section id="journey" className="border-t border-line bg-section px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="section-label">Journey</p>
            <h2 className="mt-4 font-display text-4xl text-cream sm:text-5xl">
              Experience & milestones
            </h2>
          </Reveal>
          <div className="relative mt-12 space-y-8 border-l border-line pl-8">
            {milestones.map((m, i) => (
              <Reveal key={`${m.year}-${m.title}`} delay={i * 0.08}>
                <div className="relative">
                  <span className="absolute -left-[2.4rem] top-1.5 h-3 w-3 rounded-full bg-accent shadow-[0_0_12px_rgba(232,188,185,0.6)]" />
                  <p className="text-sm font-medium text-accent">{m.year}</p>
                  <h3 className="mt-1 font-display text-2xl text-cream">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">{m.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="border-t border-line px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="section-label">Testimonials</p>
            <h2 className="mt-4 font-display text-4xl text-cream sm:text-5xl">
              What partners say
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 6).map((t, i) => (
              <Reveal key={t.id} delay={i * 0.06}>
                <blockquote className="flex h-full flex-col rounded-2xl border border-line bg-panel/50 p-6">
                  <p className="flex-1 text-sm leading-relaxed text-mist">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <footer className="mt-6 border-t border-line pt-4">
                    <cite className="not-italic">
                      <p className="font-medium text-cream">{t.name}</p>
                      <p className="text-sm text-mist">
                        {t.role}, {t.company}
                      </p>
                    </cite>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-line bg-glow px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="section-label">Contact</p>
            <h2 className="mt-4 font-display text-4xl text-cream sm:text-5xl">
              Let&apos;s build your team
            </h2>
            <p className="mt-4 max-w-xl text-mist">
              Open to hiring partnerships and candidate conversations. Reach out and I&apos;ll get
              back to you promptly.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-5">
            <Reveal className="lg:col-span-3">
              <ContactForm />
            </Reveal>
            <Reveal delay={0.12} className="space-y-5 lg:col-span-2">
              <a
                href={`mailto:${agency.email}`}
                className="flex items-center gap-3 text-cream transition-colors hover:text-accent"
              >
                <Mail className="h-5 w-5 text-accent" />
                {agency.email}
              </a>
              <a
                href={`tel:${agency.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 text-cream transition-colors hover:text-accent"
              >
                <Phone className="h-5 w-5 text-accent" />
                {agency.phone}
              </a>
              <p className="flex items-start gap-3 text-mist">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                {agency.address}
              </p>
              <a
                href={agency.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-mist transition-colors hover:text-accent"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
              <p className="text-sm text-mist">Hours: {agency.businessHours}</p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
