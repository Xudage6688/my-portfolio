"use client";

import Link from "next/link";
import { siteConfig } from "@/data/projects";
import { useI18n } from "@/i18n/LocaleProvider";
import { pick } from "@/i18n/types";

export default function SiteFooter() {
  const { locale, t } = useI18n();

  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-start md:justify-between">
        <div className="space-y-1">
          <p className="text-sm text-zinc-300">
            © {new Date().getFullYear()} {siteConfig.shortName} ·{" "}
            {siteConfig.domain.replace("https://", "")}
          </p>
          <p className="text-xs text-zinc-500">{pick(siteConfig.role, locale)}</p>
        </div>
        <div className="flex flex-col gap-3 text-sm md:items-end">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
            {t.footer.contact}
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-zinc-300 transition hover:text-cyan-300"
          >
            {siteConfig.email}
          </a>
          <Link
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-300 transition hover:text-cyan-300"
          >
            {siteConfig.github.replace("https://", "")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
