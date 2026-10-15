interface VerticalBandProps {
  id: string;
  kicker: string;
  title: string;
  body: string;
  cta: string;
  mark: string;
  accent: string;
}

export function VerticalBand({ id, kicker, title, body, cta, mark, accent }: VerticalBandProps) {
  const onLightAccent = accent === "#ffffff";

  return (
    <section id={id} className="border-t border-line py-24">
      <div className="container-site grid items-center gap-10 md:grid-cols-[160px_1fr]">
        <img src={mark} alt="" width={320} height={320} className="h-28 w-auto" />
        <div className="max-w-[65ch] border-l-2 pl-6" style={{ borderColor: accent }}>
          <p className="text-sm font-medium text-ink-muted">{kicker}</p>
          <h2 className="mt-2 text-[22px] font-medium leading-[1.2]">{title}</h2>
          {body ? <p className="mt-3 text-sm leading-[1.43] text-ink-secondary">{body}</p> : null}
          {cta ? (
            <a
              href="#contacto"
              className="btn mt-6"
              style={{
                background: accent,
                color: onLightAccent ? "#171A20" : "#ffffff",
              }}
            >
              {cta}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
