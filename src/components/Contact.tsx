import { site } from '../content/site'
import { Section } from './Section'

export function Contact() {
  return (
    <Section id="contact" ariaLabelledBy="contact-heading">
      <div className="card-surface relative overflow-hidden px-6 py-12 text-center sm:px-12 sm:py-16">
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-navy-deep/20 via-transparent to-accent/5"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            Contact
          </p>
          <h2
            id="contact-heading"
            className="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            Let’s talk
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Whether you’re curious about GlyphKeeper, following Solace Forge, or
            exploring a collaboration — a short note is welcome.
          </p>

          <a
            href={site.emailHref}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-signal-gradient px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-900/40 transition hover:brightness-110"
          >
            {site.email}
          </a>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted">
            GlyphKeeper is the nearer-term product. Solace Forge is under active
            development. We answer thoughtfully — and honestly about what is ready.
          </p>
        </div>
      </div>
    </Section>
  )
}
