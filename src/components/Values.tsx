import { values, valuesIntro } from '../content/values'
import { Section, SectionHeading } from './Section'

export function Values() {
  return (
    <Section id="values" ariaLabelledBy="values-heading">
      <SectionHeading
        id="values-heading"
        eyebrow="Core values"
        title="How we build"
        description={valuesIntro}
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
        {values.map((value, index) => (
          <article
            key={value.title}
            className="card-surface flex flex-col p-6 transition hover:border-white/15 sm:p-7"
          >
            <div className="mb-3 flex items-baseline gap-3">
              <span className="font-mono text-xs text-muted tabular-nums">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                {value.title}
              </h3>
            </div>
            <div className="space-y-3 text-sm leading-relaxed text-muted">
              {value.body.map((para) => (
                <p key={para.slice(0, 48)}>{para}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
