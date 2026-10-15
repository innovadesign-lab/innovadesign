import { ORGANIZATION_ID, SITE_NAME, SITE_URL, STUDIO, WEBSITE_ID, localeUrl } from "@/modules/cores/site/src/config/site";

const organization = {
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: SITE_NAME,
  url: `${SITE_URL}/es/`,
  email: STUDIO.email,
  description:
    "Estudio de diseño en Puebla. Identidad, producto digital y sistemas visuales.",
  address: {
    "@type": "PostalAddress",
    addressLocality: STUDIO.locality,
    addressRegion: STUDIO.region,
    addressCountry: STUDIO.countryCode,
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: STUDIO.email,
    contactType: "customer support",
    availableLanguage: ["Spanish", "English"],
    areaServed: "MX",
  },
};

const website = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: `${SITE_URL}/es/`,
  name: SITE_NAME,
  inLanguage: ["es-MX", "en"],
  publisher: { "@id": ORGANIZATION_ID },
};

export function SiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [organization, website],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function HomePageJsonLd({
  locale,
  title,
  description,
}: {
  locale: string;
  title: string;
  description: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: localeUrl(locale, "/"),
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORGANIZATION_ID },
    inLanguage: locale === "en" ? "en" : "es-MX",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
