"use client";

import BlurText from "@/components/rb/BlurText";
import Aurora from "@/components/rb/Aurora";
import { siteConfig } from "@/data/projects";
import { useI18n } from "@/i18n/LocaleProvider";
import { pick } from "@/i18n/types";

export default function HeroSection() {
  const { locale, t } = useI18n();

  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <Aurora colorStops={["#0ea5e9", "#22d3ee", "#6366f1"]} amplitude={0.8} blend={0.45} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_55%)]" />
      <div className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center px-6 py-24">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.35em] text-cyan-300/80">
          {pick(siteConfig.role, locale)}
        </p>
        <BlurText
          text={t.hero.headline}
          delay={120}
          animateBy="words"
          direction="top"
          className="max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl"
        />
        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-300">
          {pick(siteConfig.tagline, locale)}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-medium text-[#050816] transition hover:bg-cyan-300"
          >
            {t.hero.viewProjects}
          </a>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/15 px-6 py-3 text-sm text-zinc-200 transition hover:border-cyan-300/40 hover:text-cyan-200"
          >
            {t.hero.githubProfile}
          </a>
        </div>
      </div>
    </section>
  );
}
