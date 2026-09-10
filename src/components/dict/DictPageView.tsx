"use client";

import DictDemoShowcase from "@/components/dict/DictDemoShowcase";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { useI18n } from "@/i18n/LocaleProvider";

export default function DictPageView() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <SiteHeader />
      <main className="border-b border-white/10">
        <div className="mx-auto max-w-4xl px-6 pt-12">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-cyan-300/80">
            {t.dictPage.kicker}
          </p>
          <h1 className="mt-3 text-3xl font-semibold md:text-4xl">{t.dictPage.title}</h1>
          <p className="mt-4 text-base leading-8 text-zinc-400">{t.dictPage.intro}</p>
        </div>
        <DictDemoShowcase />
      </main>
      <SiteFooter />
    </div>
  );
}
