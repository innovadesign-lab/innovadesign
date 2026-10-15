import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/modules/cores/i18n/src/config/routing";
import { buildMetadata } from "@/modules/cores/site/src/services/page-metadata";

interface StudioBlock {
  title: string;
  body: string;
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
  const t = await getTranslations({ locale, namespace: "Studio" });
  return buildMetadata({
    locale,
    route: "/estudio",
    title: t("metaTitle"),
    description: t("description"),
  });
}

export default async function StudioPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Studio" });
  const blocks = t.raw("blocks") as StudioBlock[];

  return (
    <div className="container-site py-16 lg:py-24">
      <header className="max-w-3xl">
        <h1 className="text-h1 font-display">{t("title")}</h1>
        <p className="text-body-lg mt-4 text-ink-secondary">{t("description")}</p>
      </header>
      <div className="mt-16 grid max-w-3xl gap-12">
        {blocks.map((block) => (
          <section key={block.title}>
            <h2 className="text-h3 font-display">{block.title}</h2>
            <p className="text-body mt-4 text-ink-secondary">{block.body}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
