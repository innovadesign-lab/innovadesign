import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/modules/cores/i18n/src/config/routing";
import { buildMetadata } from "@/modules/cores/site/src/services/page-metadata";
import { About, type Person } from "@/modules/features/pages/src/sections/home/about";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Home" });
  return buildMetadata({
    locale,
    route: "/quienes-somos",
    title: t("about.title"),
    description: t("about.body"),
  });
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Home" });

  return (
    <>
      <About
        title={t("about.title")}
        body={t("about.body")}
        people={t.raw("about.people") as Person[]}
        asPage
      />
    </>
  );
}
