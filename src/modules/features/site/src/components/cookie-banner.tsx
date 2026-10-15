"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/modules/cores/i18n/src/config/routing";

const CONSENT_KEY = "innova-consent";

type Consent = "granted" | "denied";

function updateConsent(value: Consent) {
  localStorage.setItem(CONSENT_KEY, value);
  document.documentElement.dataset.cookies = "set";
}

export function CookieBanner() {
  const t = useTranslations("CookieBanner");

  return (
    <div className="cookie-banner fixed inset-x-0 bottom-0 z-50 border-t border-line bg-elevated p-4 shadow-lg">
      <div className="container-site flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="max-w-3xl text-small text-ink-secondary">
          {t("text")}{" "}
          <Link href="/aviso-de-privacidad" className="text-link">
            {t("privacy")}
          </Link>
          {" · "}
          <Link href="/aviso-de-cookies" className="text-link">
            {t("cookies")}
          </Link>
        </p>
        <div className="flex shrink-0 gap-2">
          <button type="button" className="btn btn-ghost" onClick={() => updateConsent("denied")}>
            {t("reject")}
          </button>
          <button type="button" className="btn btn-primary" onClick={() => updateConsent("granted")}>
            {t("accept")}
          </button>
        </div>
      </div>
    </div>
  );
}
