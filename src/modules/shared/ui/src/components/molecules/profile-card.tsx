const FALLBACK_PORTRAIT = "/equipo/milo.svg";
const FALLBACK_PORTRAIT_DARK = "/equipo/milo-dark.svg";

interface ProfileCardProps {
  name: string;
  role: string;
  description?: string;
  badge?: string;
  image?: { src: string; alt: string };
}

export function ProfileCard({ name, role, description, badge, image }: ProfileCardProps) {
  const portrait = image?.src ? image : { src: FALLBACK_PORTRAIT, alt: "" };
  const isFallback = portrait.src === FALLBACK_PORTRAIT;

  return (
    <article className="card flex flex-col overflow-hidden">
      <div
        className={`relative flex aspect-[4/5] items-center justify-center overflow-hidden border-b border-line ${isFallback ? "bg-white dark:bg-black" : "bg-white"}`}
      >
        {isFallback ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={FALLBACK_PORTRAIT}
              alt=""
              loading="lazy"
              className="h-full w-full object-contain object-bottom dark:hidden"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={FALLBACK_PORTRAIT_DARK}
              alt=""
              loading="lazy"
              className="hidden h-full w-full object-contain object-bottom dark:block"
            />
          </>
        ) : (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={portrait.src}
            alt={portrait.alt}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-contain object-bottom"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-6">
        {badge && <span className="badge-brand self-start">{badge}</span>}
        <h3 className="text-[17px] font-medium leading-[1.18] text-ink">{name}</h3>
        <p className="text-sm font-medium text-ink-secondary">{role}</p>
        {description && <p className="mt-1 text-sm leading-[1.43] text-ink-muted">{description}</p>}
      </div>
    </article>
  );
}
