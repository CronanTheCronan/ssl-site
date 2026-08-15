import { products, productsIntro } from '../content/products'
import { Section, SectionHeading } from './Section'

export function Products() {
  return (
    <Section id="products" ariaLabelledBy="products-heading" className="bg-surface/40">
      <SectionHeading
        id="products-heading"
        eyebrow="Products"
        title="Tools for creators who keep the keys"
        description={productsIntro}
      />

      <div className="grid gap-6 lg:gap-8">
        {products.map((product) => (
          <article
            key={product.id}
            className={`card-surface relative overflow-hidden p-6 sm:p-8 ${
              product.featured ? 'ring-1 ring-blue/30' : ''
            }`}
          >
            {product.featured ? (
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent"
                aria-hidden="true"
              />
            ) : null}

            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-2xl font-semibold tracking-tight text-white">
                {product.name}
              </h3>
              <span
                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold tracking-wide ${
                  product.featured
                    ? 'bg-blue/20 text-accent'
                    : 'bg-white/5 text-muted'
                }`}
              >
                {product.badge}
              </span>
            </div>

            <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
              {product.oneLiner}
            </p>

            {product.description ? (
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                {product.description}
              </p>
            ) : null}

            {product.points && product.points.length > 0 ? (
              <ul className="mt-6 space-y-3">
                {product.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted sm:text-[0.95rem]">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/80"
                      aria-hidden="true"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </div>
    </Section>
  )
}
