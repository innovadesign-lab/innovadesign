"use client";

import { routing, usePathname, useRouter } from "@/modules/cores/i18n/src/config/routing";
import { useLocale, useTranslations } from "next-intl";
import { Languages } from "lucide-react";

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("LocaleSwitcher");

  function switchTo(next: string) {
    router.replace(pathname, { locale: next as "es" | "en" });
  }

  return (
    <div
      className="flex items-center gap-1 rounded-full border border-line px-1 py-0.5 text-micro"
      role="group"
      aria-label={t("label")}
    >
      <Languages size={14} className="text-ink-muted" aria-hidden="true" />
      {routing.locales.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => switchTo(code)}
          aria-current={code === locale ? "true" : undefined}
          aria-label={t(code)}
          className={`inline-flex min-h-6 min-w-6 shrink-0 items-center justify-center rounded-full px-2 uppercase transition ${
            code === locale ? "bg-accent font-semibold text-on-accent" : "text-ink-secondary hover:text-ink"
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  );
}
