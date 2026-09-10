"use client";

import { useI18n } from "@/i18n/LocaleProvider";
import type { Locale } from "@/i18n/types";

export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n();

  const btn = (code: Locale, label: string) => (
    <button
      type="button"
      onClick={() => setLocale(code)}
      className={`rounded-full px-2.5 py-1 text-xs transition ${
        locale === code
          ? "bg-cyan-400/20 text-cyan-200 ring-1 ring-cyan-400/30"
          : "text-zinc-400 hover:text-zinc-200"
      }`}
      aria-pressed={locale === code}
    >
      {label}
    </button>
  );

  return (
    <div
      className="flex items-center gap-0.5 rounded-full border border-white/10 bg-black/20 p-0.5"
      role="group"
      aria-label={t.lang.switchTo}
    >
      {btn("en", t.lang.en)}
      {btn("zh", t.lang.zh)}
    </div>
  );
}
