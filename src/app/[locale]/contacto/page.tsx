import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/modules/cores/i18n/src/config/routing";
import { buildMetadata } from "@/modules/cores/site/src/services/page-metadata";
import ContactWithGlobe from "@/components/ui/contact-with-globe";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Contact" });
  return buildMetadata({
    locale,
    route: "/contacto",
    title: t("metaTitle"),
    description: t("description"),
  });
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Contact" });

  return (
    <ContactWithGlobe
      title={t("title")}
      place={t("place")}
      hint={t("hint")}
      nameLabel={t("name")}
      emailLabel={t("email")}
      messageLabel={t("message")}
      submitLabel={t("submit")}
    />
  );
}
