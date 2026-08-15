import { site } from '../content/site'

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="signal-grid relative flex min-h-[100svh] items-center pt-20 pb-16 sm:pt-24"
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute top-1/3 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue/10 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <img
            src="/logo-mark.png"
            alt=""
            width={160}
            height={160}
            className="mx-auto mb-8 h-28 w-28 object-contain sm:mb-10 sm:h-36 sm:w-36"
            fetchPriority="high"
          />

          <p className="mb-4 text-xs font-semibold tracking-[0.22em] text-accent uppercase">
            Independent technology studio
          </p>

          <h1
            id="hero-heading"
            className="text-4xl font-semibold tracking-[0.02em] text-white sm:text-5xl lg:text-[3.35rem]"
          >
            Solace Signal Labs
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-ink-soft sm:text-xl">
            {site.northStar}
          </p>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {site.mission}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href="#products"
              className="inline-flex w-full items-center justify-center rounded-full bg-signal-gradient px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/40 transition hover:brightness-110 sm:w-auto"
            >
              Explore our products
            </a>
            <a
              href="#about"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-ink-soft transition hover:border-white/25 hover:bg-white/10 sm:w-auto"
            >
              About the studio
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
