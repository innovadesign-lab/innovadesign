import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/modules/cores/i18n/src/config/routing";
import { routing } from "@/modules/cores/i18n/src/config/routing";
import { getPost, getPostSlugs, listPosts, CATEGORIES } from "@/modules/features/blog/src/services/markdown";
import { RelatedNotes } from "@/modules/features/blog/src/components/related-notes";
import { ORGANIZATION_ID, SITE_NAME, SITE_URL, WEBSITE_ID } from "@/modules/cores/site/src/config/site";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getPostSlugs(locale).map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPost(slug, locale);
  if (!post) return {};

  const url = `${SITE_URL}/${locale}/blog/${slug}/`;
  const languages = Object.fromEntries(
    routing.locales.map((item) => [item, `${SITE_URL}/${item}/blog/${slug}/`]),
  );

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author }],
    keywords: post.tags,
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      siteName: SITE_NAME,
    },
    twitter: {
      card: "summary",
      title: post.title,
      description: post.description,
    },
    alternates: {
      canonical: url,
      languages: { ...languages, "x-default": `${SITE_URL}/es/blog/${slug}/` },
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const post = getPost(slug, locale);
  if (!post) notFound();
  const t = await getTranslations({ locale, namespace: "Blog" });
  const relatedPosts = listPosts(locale).map(({ contentHtml, ...meta }) => {
    void contentHtml;
    return meta;
  });

  const isStudio = post.category === CATEGORIES.studio;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: SITE_NAME, url: `${SITE_URL}/es/` },
    publisher: { "@id": ORGANIZATION_ID },
    mainEntityOfPage: `${SITE_URL}/${locale}/blog/${slug}/`,
    isPartOf: { "@id": WEBSITE_ID },
    articleSection: post.category,
    url: `${SITE_URL}/${locale}/blog/${slug}/`,
    keywords: post.tags.join(", "),
    inLanguage: locale === "en" ? "en" : "es-MX",
  };

  return (
    <>
      <div className="container-site py-16 lg:py-24">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <article className="mx-auto max-w-3xl">
          <nav>
            <Link href="/blog" className="text-small text-link">
              {t("backToBlog")}
            </Link>
          </nav>
          <header className="mt-8">
            <div className="flex items-center gap-3">
              <time dateTime={post.date} className="text-micro text-ink-muted">
                {new Date(post.date).toLocaleDateString(locale, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  timeZone: "UTC",
                })}
              </time>
              {isStudio && <span className="badge-brand">{t("categoryStudio")}</span>}
            </div>
            <h1 className="text-h1 mt-2 font-display">{post.title}</h1>
            <p className="text-body-lg mt-4 text-ink-secondary">{post.excerpt}</p>
            <p className="mt-6 flex flex-col items-start gap-1 text-small text-ink-muted md:flex-row md:items-center md:gap-3">
              <span>{post.author}</span>
              <span aria-hidden="true" className="hidden md:inline">
                ·
              </span>
              <span>{t("readingTime", { minutes: post.readingMinutes })}</span>
            </p>
          </header>
          {post.image && (
            <div className="mt-10 overflow-hidden rounded-lg bg-elevated">
              <Image
                src={post.image.src}
                alt={post.image.alt}
                width={1600}
                height={900}
                className="h-auto w-full"
                priority
              />
            </div>
          )}
          <div className="article-body mt-12" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        </article>
        <RelatedNotes posts={relatedPosts} currentSlug={slug} />
      </div>
    </>
  );
}
