import { ArrowLeft } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Link } from "@/modules/cores/i18n/src/config/routing";
import { buildMetadata } from "@/modules/cores/site/src/services/page-metadata";
import { getVertical, type VerticalId } from "../data/verticals";
import { VerticalBand } from "../sections/home/vertical-band";

export async function generateVerticalMetadata(
  locale: string,
  id: VerticalId,
): Promise<Metadata> {
  const item = getVertical(id);
  if (!item) return {};
  const t = await getTranslations({ locale, namespace: "Home" });
  const title = t(`verticals.${id}.title`);
  const body = t(`verticals.${id}.body`) || t("metaDescription");

  return buildMetadata({
    locale,
    route: item.slug,
    title,
    description: body,
  });
}

export async function VerticalPageView({
  locale,
  id,
}: {
  locale: string;
  id: VerticalId;
}) {
  setRequestLocale(locale);
  const item = getVertical(id);
  if (!item) notFound();
  const t = await getTranslations({ locale, namespace: "Home" });
  const nav = await getTranslations({ locale, namespace: "Nav" });

  return (
    <>
      <div className="container-site pt-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-ink-secondary transition-colors hover:text-ink"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          <span>{nav("home")}</span>
        </Link>
      </div>
      <VerticalBand
        id={item.id}
        kicker={t(`verticals.${item.id}.kicker`)}
        title={t(`verticals.${item.id}.title`)}
        body={t(`verticals.${item.id}.body`)}
        cta={item.cta ? t(`verticals.${item.id}.cta`) : ""}
        mark={item.mark}
        markLight={"markLight" in item ? item.markLight : undefined}
        accent={item.accent}
        asPage
      />
    </>
  );
}
