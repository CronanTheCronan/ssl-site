import { whatWeBelieve } from '../content/about'
import { site } from '../content/site'
import { valuesShort } from '../content/values'

export function MissionStrip() {
  return (
    <section
      id="mission"
      aria-labelledby="mission-heading"
      className="relative border-y border-white/10 bg-canvas py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            North Star
          </p>
          <h2
            id="mission-heading"
            className="text-2xl font-semibold tracking-tight text-white sm:text-3xl"
          >
            {site.northStar}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            {whatWeBelieve.intro}
          </p>
        </div>

        <ul className="mx-auto mt-10 grid max-w-4xl gap-2 sm:grid-cols-2">
          {valuesShort.map((line) => (
            <li
              key={line}
              className="flex items-start gap-2.5 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 text-left text-sm text-ink-soft"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" aria-hidden="true" />
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
