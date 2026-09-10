"use client";

import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { siteConfig } from "@/data/projects";
import { useI18n } from "@/i18n/LocaleProvider";

export default function SiteHeader() {
  const { t } = useI18n();

  const navItems = [
    { href: "/#projects", label: t.nav.projects },
    { href: "/#about", label: t.nav.about },
    { href: "/wedding/", label: t.nav.wedding },
    { href: "/dict/", label: t.nav.dict },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
        <Link href="/" className="shrink-0 font-mono text-sm tracking-[0.2em] text-cyan-300">
          XUDAGE.FUN
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-cyan-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-3">
          <LanguageSwitcher />
          <Link
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-cyan-400/30 px-4 py-1.5 text-xs text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/10 sm:inline-block"
          >
            {t.nav.github}
          </Link>
        </div>
      </div>
    </header>
  );
}
