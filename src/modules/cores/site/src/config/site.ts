export const SITE_NAME = "Innova Design";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://innovadesign.mx";

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const STUDIO = {
  email: "hola@innovadesign.mx",
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
