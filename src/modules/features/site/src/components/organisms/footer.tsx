import { getTranslations } from "next-intl/server";
import { Link } from "@/modules/cores/i18n/src/config/routing";
import { isHiddenSection } from "@/modules/cores/site/src/config/hidden-sections";
import { STUDIO } from "@/modules/cores/site/src/config/site";
import { Logo } from "@/modules/shared/ui/src/components";

const FOOTER_LINKS = [
  { key: "home", href: "/" },
  { key: "studio", href: "/estudio" },
  { key: "blog", href: "/blog" },
  { key: "contact", href: "/contacto" },
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
          <p className="text-micro uppercase tracking-wide text-ink-muted">{t("studio")}</p>
          <p className="mt-3 text-small text-ink-secondary">{t("place")}</p>
          <a href={`mailto:${STUDIO.email}`} className="mt-3 inline-block text-small text-link">
            {STUDIO.email}
          </a>
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
          © {new Date().getFullYear()} Innova Design · {t("madeIn")}
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
