import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/modules/cores/i18n/src/config/routing";
import { HomePageJsonLd } from "@/modules/cores/site/src/components/site-json-ld";
import { buildMetadata } from "@/modules/cores/site/src/services/page-metadata";
import { VERTICALS } from "@/modules/features/pages/src/data/verticals";
import { About } from "@/modules/features/pages/src/sections/home/about";
import { ContactBand } from "@/modules/features/pages/src/sections/home/contact-band";
import { Hero } from "@/modules/features/pages/src/sections/home/hero";
import { News } from "@/modules/features/pages/src/sections/home/news";
import { VerticalBand } from "@/modules/features/pages/src/sections/home/vertical-band";

interface Person {
  name: string;
  role: string;
}

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
    route: "/",
    title: t("metaTitle"),
    description: t("metaDescription"),
  });
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Home" });

  return (
    <>
      <HomePageJsonLd locale={locale} title={t("metaTitle")} description={t("metaDescription")} />
      <Hero
        kicker={t("hero.kicker")}
        title={t("hero.title")}
        lede={t("hero.lede")}
        body={t("hero.body")}
        primaryCta={t("hero.primaryCta")}
        secondaryCta={t("hero.secondaryCta")}
      />
      <About title={t("about.title")} body={t("about.body")} people={t.raw("about.people") as Person[]} />
      {VERTICALS.map((item) => (
        <VerticalBand
          key={item.id}
          id={item.id}
          kicker={t(`verticals.${item.id}.kicker`)}
          title={t(`verticals.${item.id}.title`)}
          body={t(`verticals.${item.id}.body`)}
          cta={item.cta ? t(`verticals.${item.id}.cta`) : ""}
          mark={item.mark}
          accent={item.accent}
        />
      ))}
      <News title={t("news.title")} empty={t("news.empty")} />
      <ContactBand title={t("contact.title")} />
    </>
  );
}
