import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/modules/cores/i18n/src/config/routing";
import { isHiddenSection } from "@/modules/cores/site/src/config/hidden-sections";
import { STUDIO } from "@/modules/cores/site/src/config/site";
import { Logo } from "@/modules/shared/ui/src/components";

const FOOTER_LINKS = [
  { key: "about", href: "/quienes-somos" },
  { key: "news", href: "/blog" },
  { key: "contact", href: "/contacto" },
].filter((item) => !isHiddenSection(item.href));

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

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
          <ul className="mt-3 space-y-2.5 text-small">
            <li>
              <a
                href={`mailto:${STUDIO.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-link transition-colors hover:text-ink"
              >
                <Mail size={15} aria-hidden="true" />
                <span>{STUDIO.email}</span>
              </a>
            </li>
            <li>
              <a
                href={STUDIO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-link transition-colors hover:text-ink"
              >
                <InstagramIcon size={15} />
                <span>{STUDIO.instagramHandle}</span>
                <ArrowUpRight size={13} className="text-ink-muted" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href={STUDIO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-link transition-colors hover:text-ink"
              >
                <FacebookIcon size={15} />
                <span>{STUDIO.facebook}</span>
                <ArrowUpRight size={13} className="text-ink-muted" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href={STUDIO.phoneHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-link transition-colors hover:text-ink"
              >
                <Phone size={15} aria-hidden="true" />
                <span>{STUDIO.phone}</span>
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
