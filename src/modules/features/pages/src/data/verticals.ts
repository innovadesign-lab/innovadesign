export const VERTICALS = [
  {
    id: "subven",
    slug: "/subven",
    mark: "/subven/mark.webp",
    accent: "var(--sector-subven)",
    cta: true,
    featured: true,
  },
  {
    id: "sila",
    slug: "/sila",
    mark: "/sila/mark.webp",
    accent: "var(--sector-sila)",
    cta: true,
    featured: false,
  },
  {
    id: "participacion",
    slug: "/participacion",
    mark: "/participacion/mark.webp",
    accent: "var(--sector-participacion)",
    cta: true,
    featured: false,
  },
  {
    id: "voluntariado",
    slug: "/voluntariado",
    mark: "/voluntariado/mark.webp",
    markLight: "/voluntariado/mark-light.webp",
    accent: "var(--sector-mono)",
    cta: false,
    featured: false,
  },
  {
    id: "consultoria",
    slug: "/consultoria",
    mark: "/consultoria/mark.webp",
    markLight: "/consultoria/mark-on-light.webp",
    accent: "var(--sector-mono)",
    cta: true,
    featured: true,
  },
] as const;

export type VerticalId = (typeof VERTICALS)[number]["id"];
export type VerticalItem = (typeof VERTICALS)[number];

export function getVertical(id: string): VerticalItem | undefined {
  return VERTICALS.find((item) => item.id === id);
}
