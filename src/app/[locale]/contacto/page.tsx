import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/modules/cores/i18n/src/config/routing";
import { STUDIO } from "@/modules/cores/site/src/config/site";
import { buildMetadata } from "@/modules/cores/site/src/services/page-metadata";
import { ContactForm } from "@/modules/features/pages/src/sections/contact/contact-form";

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
    <div className="container-site grid gap-16 py-16 lg:grid-cols-2 lg:py-24">
      <header className="max-w-xl">
        <h1 className="text-h1 font-display">{t("title")}</h1>
        <p className="text-body-lg mt-4 text-ink-secondary">{t("description")}</p>
        <p className="mt-8 text-small text-ink-muted">{t("place")}</p>
        <a href={`mailto:${STUDIO.email}`} className="mt-2 inline-block text-body text-link">
          {STUDIO.email}
        </a>
      </header>
      <ContactForm
        labels={{
          name: t("name"),
          email: t("email"),
          message: t("message"),
          submit: t("submit"),
          hint: t("hint"),
        }}
      />
    </div>
  );
}
