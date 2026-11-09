"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { siteConfig } from "@/data/projects";
import { useI18n } from "@/i18n/LocaleProvider";

export default function SiteHeader() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  const navItems = [
    { href: "/#projects", id: "projects", label: t.nav.projects },
    { href: "/#about", id: "about", label: t.nav.about },
    { href: "/dict/", id: "", label: t.nav.dict },
  ];

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const sections = ["projects", "about"]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

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
              className={`transition-colors hover:text-cyan-300 ${
                active && active === item.id ? "text-cyan-300" : ""
              }`}
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
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={t.nav.menuOpen}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-200 transition hover:border-cyan-300/40 md:hidden"
          >
            {open ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open ? (
        <div className="md:hidden">
          <button
            type="button"
            aria-label={t.nav.menuOpen}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          />
          <nav className="relative z-50 flex flex-col gap-1 border-t border-white/10 bg-[#050816] px-6 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base text-zinc-200 transition hover:bg-white/5 hover:text-cyan-300"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base text-cyan-200 transition hover:bg-cyan-400/10"
            >
              {t.nav.github}
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
