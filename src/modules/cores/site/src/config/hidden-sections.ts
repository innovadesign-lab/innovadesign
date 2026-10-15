export const HIDDEN_SECTIONS = [] as const;

export type HiddenSection = (typeof HIDDEN_SECTIONS)[number];

export function isHiddenSection(href: string): boolean {
  return HIDDEN_SECTIONS.some(
    (route) => href === route || href.startsWith(`${route}/`),
  );
}
