import {
  aboutCompany,
  founder,
  personalSection,
  whatWeBelieve,
  whereWeAreGoing,
} from '../content/about'
import { Section, SectionHeading } from './Section'

export function About() {
  return (
    <Section id="about" ariaLabelledBy="about-heading" className="bg-surface/40">
      <SectionHeading
        id="about-heading"
        eyebrow="Studio"
        title={aboutCompany.title}
      />

      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
        <div className="space-y-4 text-base leading-relaxed text-muted">
          {aboutCompany.paragraphs.map((p) =>
            p === 'The human keeps the keys.' ? (
              <p
                key={p}
                className="text-lg font-medium tracking-tight text-ink-soft sm:text-xl"
              >
                {p}
              </p>
            ) : (
              <p key={p}>{p}</p>
            ),
          )}
        </div>

        <aside className="card-surface overflow-hidden self-start">
          <img
            src={founder.image}
            alt={founder.imageAlt}
            width={800}
            height={1000}
            loading="lazy"
            className="aspect-[4/5] w-full object-cover object-top grayscale"
          />
          <div className="border-t border-white/10 p-5">
            <p className="text-lg font-semibold text-white">{founder.name}</p>
            <p className="mt-0.5 text-sm text-accent">{founder.role}</p>
          </div>
        </aside>
      </div>

      <div className="mt-16 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight text-white">
            {founder.name}
          </h3>
          <p className="mt-1 text-sm font-medium text-accent">{founder.role}</p>
        </div>
        <div className="space-y-4 text-sm leading-relaxed text-muted sm:text-base">
          {founder.paragraphs.map((p) => (
            <p key={p.slice(0, 64)}>{p}</p>
          ))}
        </div>
      </div>

      <div className="mt-16 card-surface p-6 sm:p-8">
        <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
          {personalSection.title}
        </h3>
        <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted sm:text-base">
          {personalSection.paragraphs.map((p) => (
            <p key={p.slice(0, 64)}>{p}</p>
          ))}
        </div>
        <p className="mt-6 text-base text-ink-soft">{personalSection.closingLead}</p>
        <p className="mt-3 text-xl font-medium tracking-tight text-white sm:text-2xl">
          {personalSection.closingFrom}
        </p>
        <p className="mt-1 text-sm text-muted">and</p>
        <p className="mt-1 text-xl font-medium tracking-tight text-gradient sm:text-2xl">
          {personalSection.closingTo}
        </p>
      </div>

      <div className="mt-16 grid gap-10 lg:grid-cols-2">
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-white">
            {whatWeBelieve.title}
          </h3>
          <p className="mt-3 text-sm text-muted">{whatWeBelieve.intro}</p>
          <ul className="mt-6 space-y-4">
            {whatWeBelieve.items.map((item) => (
              <li key={item.title}>
                <p className="font-medium text-ink-soft">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold tracking-tight text-white">
            {whereWeAreGoing.title}
          </h3>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted sm:text-base">
            {whereWeAreGoing.paragraphs.map((p) => (
              <p key={p.slice(0, 64)}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
