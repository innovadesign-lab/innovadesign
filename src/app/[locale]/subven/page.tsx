import type { Metadata } from "next";
import { routing } from "@/modules/cores/i18n/src/config/routing";
import {
  VerticalPageView,
  generateVerticalMetadata,
} from "@/modules/features/pages/src/components/vertical-page";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateVerticalMetadata(locale, "subven");
}

export default async function SubvenPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <VerticalPageView locale={locale} id="subven" />;
}
