import { Link } from "@/modules/cores/i18n/src/config/routing";

interface VerticalBandProps {
  id: string;
  kicker: string;
  title: string;
  body: string;
  cta: string;
  mark: string;
  markLight?: string;
  accent: string;
  asPage?: boolean;
}

export function VerticalBand({
  id,
  kicker,
  title,
  body,
  cta,
  mark,
  markLight,
  accent,
  asPage = false,
}: VerticalBandProps) {
  const mono = accent === "var(--sector-mono)";
  const Heading = asPage ? "h1" : "h2";

  return (
    <section id={id} className={`${asPage ? "" : "border-t border-line"} py-24`}>
      <div className="container-site grid items-center gap-10 md:grid-cols-[160px_1fr]">
        <div>
          {markLight ? (
            <>
              <img src={mark} alt="" width={320} height={320} className="hidden h-28 w-auto dark:block" />
              <img src={markLight} alt="" width={320} height={320} className="h-28 w-auto dark:hidden" />
            </>
          ) : (
            <img src={mark} alt="" width={320} height={320} className="h-28 w-auto" />
          )}
        </div>
        <div className="max-w-[65ch] border-l-2 pl-6" style={{ borderColor: accent }}>
          <p className="text-sm font-medium text-ink-muted">{kicker}</p>
          <Heading
            className={`mt-2 font-medium leading-[1.2] ${
              asPage ? "text-[28px] sm:text-[40px]" : "text-[22px]"
            }`}
          >
            {title}
          </Heading>
          {body ? <p className="mt-3 text-sm leading-[1.43] text-ink-secondary">{body}</p> : null}
          {cta ? (
            <Link
              href="/contacto"
              className="btn mt-6"
              style={{
                background: accent,
                color: mono ? "var(--sector-on-mono)" : "#ffffff",
              }}
            >
              {cta}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
