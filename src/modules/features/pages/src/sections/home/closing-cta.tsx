import { Link } from "@/modules/cores/i18n/src/config/routing";

interface ClosingCtaProps {
  title: string;
  description: string;
  cta: string;
}

export function ClosingCta({ title, description, cta }: ClosingCtaProps) {
  return (
    <section className="band-ink">
      <div className="container-site flex flex-col items-start gap-8 py-20 lg:flex-row lg:items-end lg:justify-between lg:py-28">
        <div className="max-w-2xl">
          <h2 className="text-h1 font-display text-balance">{title}</h2>
          <p className="text-body-lg band-ink-muted mt-4">{description}</p>
        </div>
        <Link href="/contacto" className="btn btn-on-dark">
          {cta}
        </Link>
      </div>
    </section>
  );
}
