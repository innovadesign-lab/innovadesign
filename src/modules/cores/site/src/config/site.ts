export const SITE_NAME = "Innovadesign";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://innovadesign.mx";

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const STUDIO = {
  email: "info@innovadesign.com.mx",
  phone: "(221) 5334922",
  phoneHref: "tel:+522215334922",
  instagram: "https://instagram.com/innova_.design",
  instagramHandle: "@innova_.design",
  facebook: "Innovadeisgn",
  facebookUrl: "https://facebook.com/Innovadeisgn",
  locality: "Puebla",
  region: "Puebla",
  country: "México",
  countryCode: "MX",
} as const;

/** Absolute localized URL with the trailing slash `trailingSlash: true` expects. */
export function localeUrl(locale: string, route = "/") {
  const bare = route === "/" || route === "" ? "" : route.replace(/\/$/, "");
  const path = bare.startsWith("/") || bare === "" ? bare : `/${bare}`;
  return `${SITE_URL}/${locale}${path}/`;
}
