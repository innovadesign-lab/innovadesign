interface HeroProps {
  kicker: string;
  title: string;
  lede: string;
  body: string;
  primaryCta: string;
  secondaryCta: string;
}

export function Hero({ kicker, title, lede, body, primaryCta, secondaryCta }: HeroProps) {
  return (
    <section className="flex min-h-[100svh] items-center">
      <div className="container-site py-24">
        <p className="text-sm font-medium text-ink-muted">{kicker}</p>
        <h1 className="mt-4 max-w-[18ch] text-[28px] font-medium leading-[1.2] text-balance sm:text-[40px]">
          {title}
        </h1>
        <p className="mt-4 max-w-[40ch] text-[22px] font-medium leading-[1.2]">{lede}</p>
        <p className="mt-4 max-w-[65ch] text-sm leading-[1.43] text-ink-secondary">{body}</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a href="#quienes" className="btn btn-primary">
            {primaryCta}
          </a>
          <a href="#contacto" className="btn border border-line bg-elevated text-ink">
            {secondaryCta}
          </a>
        </div>
      </div>
    </section>
  );
}
