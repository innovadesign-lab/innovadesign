interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <span className={`inline-flex h-full items-center gap-2.5 text-ink ${className}`}>
      <img
        src="/innovadesign/mark.webp"
        alt=""
        width={714}
        height={457}
        decoding="async"
        className="h-full w-auto"
      />
      <span className="font-display text-[0.72rem] leading-none font-medium tracking-[0.12em] sm:text-[0.95rem]">
        INNOVADESIGN
      </span>
    </span>
  );
}
