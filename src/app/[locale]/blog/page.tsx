import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { listPosts } from "@/modules/features/blog/src/services/markdown";
import { buildMetadata } from "@/modules/cores/site/src/services/page-metadata";
import { routing } from "@/modules/cores/i18n/src/config/routing";
import { BlogList } from "@/modules/features/blog/src/components/blog-list";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Blog" });

  return buildMetadata({
    locale,
    route: "/blog",
    title: t("metaTitle"),
    description: t("description"),
  });
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Blog" });
  const posts = listPosts(locale).map(({ contentHtml, ...meta }) => {
    void contentHtml;
    return meta;
  });

  return (
    <div className="container-site py-16 lg:py-24">
      <header className="mb-12 max-w-2xl">
        <h1 className="text-h1 font-display">{t("title")}</h1>
        <p className="text-body-lg mt-4 text-ink-secondary">{t("description")}</p>
      </header>
      <BlogList
        posts={posts}
        locale={locale}
        emptyLabel={t("empty")}
        labels={{
          all: t("allPosts"),
          studio: t("categoryStudio"),
          notes: t("categoryNotes"),
          readMore: t("readMore"),
        }}
      />
    </div>
  );
}
