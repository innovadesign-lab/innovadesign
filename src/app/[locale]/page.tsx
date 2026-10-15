import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/modules/cores/i18n/src/config/routing";
import { HomePageJsonLd } from "@/modules/cores/site/src/components/site-json-ld";
import { buildMetadata } from "@/modules/cores/site/src/services/page-metadata";
import { listPosts } from "@/modules/features/blog/src/services/markdown";
import { VERTICALS } from "@/modules/features/pages/src/data/verticals";
import { Hero } from "@/modules/features/pages/src/sections/home/hero";
import { News } from "@/modules/features/pages/src/sections/home/news";
import { ProductsBento } from "@/modules/features/pages/src/sections/home/products-bento";

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
  const posts = listPosts(locale).map(({ contentHtml, ...meta }) => {
    void contentHtml;
    return meta;
  });

  const bentoItems = VERTICALS.map((item) => ({
    id: item.id,
    slug: item.slug,
    kicker: t(`verticals.${item.id}.kicker`),
    title: t(`verticals.${item.id}.title`),
    body: t(`verticals.${item.id}.body`),
    mark: item.mark,
    markLight: "markLight" in item ? item.markLight : undefined,
    accent: item.accent,
    featured: item.featured,
  }));

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
        products={bentoItems.map((item) => ({
          id: item.id,
          name: item.title,
          mark: item.mark,
          markLight: item.markLight,
        }))}
      />
      <ProductsBento title={t("solutions.title")} cta={t("solutions.cta")} items={bentoItems} />
      <News
        title={t("news.title")}
        empty={t("news.empty")}
        viewAllLabel={t("news.viewAll")}
        locale={locale}
        posts={posts}
      />
    </>
  );
}
