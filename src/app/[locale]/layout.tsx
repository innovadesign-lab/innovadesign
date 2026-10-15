import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/modules/cores/i18n/src/config/routing";
import { SITE_NAME, SITE_URL } from "@/modules/cores/site/src/config/site";
import { SiteJsonLd } from "@/modules/cores/site/src/components/site-json-ld";
import type { Locale } from "@/modules/cores/i18n/src/interfaces/i18n.interface";
import { Header } from "@/modules/features/site/src/components/organisms/header";
import { Footer } from "@/modules/features/site/src/components/organisms/footer";
import { CookieBanner } from "@/modules/features/site/src/components/cookie-banner";
import { DocumentScripts } from "./document-scripts";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

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
  const ogLocale = locale === "en" ? "en_US" : "es_MX";

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: t("metaTitle"),
      template: `%s · ${SITE_NAME}`,
    },
    description: t("metaDescription"),
    applicationName: SITE_NAME,
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: ogLocale,
    },
    twitter: { card: "summary" },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) notFound();
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      data-theme="dark"
      className={`${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-surface font-body text-ink">
        <DocumentScripts />
        <SiteJsonLd />
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main id="contenido" className="flex-1">
            {children}
          </main>
          <Footer />
          <CookieBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
