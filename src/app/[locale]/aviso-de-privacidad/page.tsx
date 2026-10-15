import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/modules/cores/i18n/src/config/routing";
import { buildMetadata } from "@/modules/cores/site/src/services/page-metadata";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Privacy" });
  return buildMetadata({
    locale,
    route: "/aviso-de-privacidad",
    title: t("metaTitle"),
    description: t("description"),
  });
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Privacy" });
  const paragraphs = t.raw("paragraphs") as string[];

  return (
    <div className="container-site py-16 lg:py-24">
      <article className="mx-auto max-w-3xl">
        <h1 className="text-h1 font-display">{t("title")}</h1>
        <div className="mt-8 grid gap-6">
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-body text-ink-secondary">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </div>
  );
}
