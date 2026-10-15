import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/modules/cores/i18n/src/config/routing";
import { HomePageJsonLd } from "@/modules/cores/site/src/components/site-json-ld";
import { buildMetadata } from "@/modules/cores/site/src/services/page-metadata";
import { listPosts } from "@/modules/features/blog/src/services/markdown";
import { ClosingCta } from "@/modules/features/pages/src/sections/home/closing-cta";
import { Hero } from "@/modules/features/pages/src/sections/home/hero";
import { Process } from "@/modules/features/pages/src/sections/home/process";
import { Services } from "@/modules/features/pages/src/sections/home/services";
import { Stories } from "@/modules/features/pages/src/sections/home/stories";

interface NamedCopy {
  title: string;
  description: string;
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

  const posts = listPosts(locale)
    .slice(0, 3)
    .map(({ contentHtml, ...meta }) => {
      void contentHtml;
      return meta;
    });

  return (
    <>
      <HomePageJsonLd locale={locale} title={t("metaTitle")} description={t("metaDescription")} />
      <Hero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        description={t("hero.description")}
        primaryCta={t("hero.primaryCta")}
        secondaryCta={t("hero.secondaryCta")}
        sheetLabel={t("hero.sheetLabel")}
        lines={t.raw("hero.lines") as string[]}
      />
      <Services
        eyebrow={t("services.eyebrow")}
        title={t("services.title")}
        items={t.raw("services.items") as NamedCopy[]}
      />
      <Stories
        eyebrow={t("stories.eyebrow")}
        title={t("stories.title")}
        readLabel={t("stories.readLabel")}
        allLabel={t("stories.allLabel")}
        locale={locale}
        posts={posts}
      />
      <Process
        eyebrow={t("process.eyebrow")}
        title={t("process.title")}
        steps={t.raw("process.steps") as NamedCopy[]}
      />
      <ClosingCta title={t("closing.title")} description={t("closing.description")} cta={t("closing.cta")} />
    </>
  );
}
