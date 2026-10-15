import { Link } from "@/modules/cores/i18n/src/config/routing";

interface HeroProps {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  sheetLabel: string;
  lines: string[];
}

export function Hero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  sheetLabel,
  lines,
}: HeroProps) {
  return (
    <section className="border-b border-line">
      <div className="container-site grid items-end gap-12 py-20 lg:grid-cols-[minmax(0,1.4fr)_minmax(18rem,0.7fr)] lg:py-28">
        <div>
          <p className="text-micro uppercase tracking-wider text-ink-muted">{eyebrow}</p>
          <h1 className="text-display mt-4 max-w-4xl font-display text-balance text-ink">{title}</h1>
          <p className="text-body-lg mt-6 max-w-xl text-ink-secondary">{description}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contacto" className="btn btn-primary">
              {primaryCta}
            </Link>
            <Link href="/blog" className="btn btn-secondary">
              {secondaryCta}
            </Link>
          </div>
        </div>

        <aside className="border border-line bg-elevated p-6" aria-label={sheetLabel}>
          <p className="text-micro uppercase tracking-wider text-ink-muted">{sheetLabel}</p>
          <ol className="mt-6 divide-y divide-line">
            {lines.map((line, index) => (
              <li key={line} className="flex gap-4 py-4 text-body text-ink">
                <span className="text-micro w-6 pt-1 text-ink-muted">{String(index + 1).padStart(2, "0")}</span>
                <span>{line}</span>
              </li>
            ))}
          </ol>
        </aside>
      </div>
    </section>
  );
}
