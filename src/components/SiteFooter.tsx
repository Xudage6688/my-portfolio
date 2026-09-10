"use client";

import { siteConfig } from "@/data/projects";
import { useI18n } from "@/i18n/LocaleProvider";

export default function SiteFooter() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {siteConfig.shortName} ·{" "}
          {siteConfig.domain.replace("https://", "")}
        </p>
        <p className="font-mono text-xs">{t.footer.phase}</p>
      </div>
    </footer>
  );
}
