import { getTranslations } from "next-intl/server";
import { Link } from "@/modules/cores/i18n/src/config/routing";
import { isHiddenSection } from "@/modules/cores/site/src/config/hidden-sections";
import { STUDIO } from "@/modules/cores/site/src/config/site";
import { Logo } from "@/modules/shared/ui/src/components";

const FOOTER_LINKS = [
  { key: "about", href: "/#quienes" },
  { key: "news", href: "/#noticias" },
  { key: "contact", href: "/#contacto" },
].filter((item) => !isHiddenSection(item.href));

export async function Footer() {
  const t = await getTranslations("Footer");

  return (
    <footer className="mt-24 border-t border-line bg-surface-subtle py-16">
      <div className="container-site grid gap-12 md:grid-cols-3">
        <div>
          <Link href="/" className="inline-block h-10" aria-label={t("home")}>
            <Logo className="h-full w-auto" />
          </Link>
          <p className="mt-4 max-w-xs text-small text-ink-secondary">{t("name")}</p>
        </div>

        <div>
          <p className="text-sm font-medium text-ink">{t("contact")}</p>
          <ul className="mt-3 space-y-2 text-small">
            <li>
              <a href={`mailto:${STUDIO.email}`} className="text-link">
                {STUDIO.email}
              </a>
            </li>
            <li>
              <a href={STUDIO.instagram} className="text-link">
                {STUDIO.instagramHandle}
              </a>
            </li>
            <li className="text-ink-secondary">{STUDIO.facebook}</li>
            <li>
              <a href={STUDIO.phoneHref} className="text-link">
                {STUDIO.phone}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-micro uppercase tracking-wide text-ink-muted">{t("links")}</p>
          <ul className="mt-3 space-y-2 text-small">
            {FOOTER_LINKS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-link">
                  {t(item.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-site mt-12 border-t border-line pt-6">
        <p className="text-micro text-ink-muted">
          © {new Date().getFullYear()} Innovadesign · {t("madeIn")}
          {" · "}
          <Link href="/aviso-de-privacidad" className="text-link">
            {t("privacy")}
          </Link>
          {" · "}
          <Link href="/aviso-de-cookies" className="text-link">
            {t("cookies")}
          </Link>
        </p>
      </div>
    </footer>
  );
}
