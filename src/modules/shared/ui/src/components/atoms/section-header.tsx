interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  as: Tag = "h2",
}: SectionHeaderProps) {
  return (
    <header className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && <p className="text-micro uppercase tracking-wider text-ink-muted">{eyebrow}</p>}
      <Tag className={`font-display text-ink ${Tag === "h1" ? "text-h1" : "text-h2"} ${eyebrow ? "mt-3" : ""}`}>
        {title}
      </Tag>
      {description && <p className="text-body-lg mt-4 text-ink-secondary">{description}</p>}
    </header>
  );
}
