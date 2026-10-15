export const VERTICALS = [
  { id: "subven", mark: "/subven/mark.webp", accent: "var(--sector-subven)", cta: true },
  { id: "sila", mark: "/sila/mark.webp", accent: "var(--sector-sila)", cta: true },
  { id: "participacion", mark: "/participacion/mark.webp", accent: "var(--sector-participacion)", cta: true },
  { id: "voluntariado", mark: "/voluntariado/mark.webp", accent: "#ffffff", cta: false },
  { id: "consultoria", mark: "/consultoria/mark.webp", accent: "#ffffff", cta: true },
] as const;

export type VerticalId = (typeof VERTICALS)[number]["id"];
