import { getTranslations } from "next-intl/server";
import { Link } from "@/modules/cores/i18n/src/config/routing";

export default async function NotFound() {
  const t = await getTranslations("NotFound");

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 py-24 text-center">
      <h1 className="text-h1 font-display text-ink">404</h1>
      <p className="text-body-lg text-ink-secondary">{t("description")}</p>
      <Link href="/" className="text-link">
        {t("home")}
      </Link>
    </div>
  );
}
