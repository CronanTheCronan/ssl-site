import { navLinks, site } from '../content/site'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-12 sm:px-8 lg:flex-row lg:justify-between">
        <div className="max-w-sm">
          <a href="#hero" className="inline-flex items-center gap-2.5">
            <img
              src="/logo-mark.png"
              alt=""
              width={32}
              height={32}
              className="h-8 w-8 object-contain"
            />
            <span className="text-sm font-semibold tracking-wide text-white">
              {site.name}
            </span>
          </a>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Built with care by an independent studio. Human-governed AI for the
            people who create worlds.
          </p>
        </div>

        <div className="flex flex-wrap gap-12">
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-muted uppercase">
              Navigate
            </p>
            <ul className="mt-3 space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-sm text-ink-soft transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-muted uppercase">
              Contact
            </p>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href={site.emailHref}
                  className="text-sm text-ink-soft transition hover:text-white"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {site.copyrightYear} {site.name}
          </p>
          <p className="text-muted/80">
            Future work may include Juris-AI when the studio is ready to support it.
          </p>
        </div>
      </div>
    </footer>
  )
}
