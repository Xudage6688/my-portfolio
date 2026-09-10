"use client";

import Link from "next/link";
import {
  aboutEducation,
  aboutExperience,
  aboutHighlights,
  aboutSkillGroups,
  siteConfig,
} from "@/data/projects";
import { useI18n } from "@/i18n/LocaleProvider";
import { pick } from "@/i18n/types";

export default function AboutSection() {
  const { locale, t } = useI18n();

  return (
    <section id="about" className="border-t border-white/10 bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-cyan-300/80">
              {t.about.kicker}
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white">{siteConfig.name}</h2>
            <p className="mt-2 text-base text-cyan-200/90">{pick(siteConfig.role, locale)}</p>
            <p className="mt-6 text-lg leading-8 text-zinc-300">{pick(siteConfig.tagline, locale)}</p>
            <p className="mt-6 text-sm leading-7 text-zinc-400">{pick(siteConfig.bio, locale)}</p>

            <ul className="mt-8 space-y-3">
              {aboutHighlights.map((item) => (
                <li
                  key={item.en}
                  className="flex gap-3 text-sm leading-7 text-zinc-300 before:mt-2 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-cyan-400/80 before:content-['']"
                >
                  {pick(item, locale)}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
              <h3 className="text-sm font-medium uppercase tracking-wider text-zinc-500">
                {t.about.experience}
              </h3>
              <ul className="mt-4 space-y-4">
                {aboutExperience.map((item) => (
                  <li key={item.company} className="border-b border-white/5 pb-4 last:border-0 last:pb-0">
                    <p className="font-medium text-white">{item.company}</p>
                    <p className="text-sm text-zinc-300">{pick(item.role, locale)}</p>
                    <p className="mt-1 text-xs text-zinc-500">
                      {pick(item.period, locale)} · {pick(item.location, locale)}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
              <h3 className="text-sm font-medium uppercase tracking-wider text-zinc-500">
                {t.about.skills}
              </h3>
              <div className="mt-4 space-y-4">
                {aboutSkillGroups.map((group) => (
                  <div key={group.label}>
                    <p className="text-xs text-zinc-500">{group.label}</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {group.items.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-zinc-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
              <h3 className="text-sm font-medium uppercase tracking-wider text-zinc-500">
                {t.about.contact}
              </h3>
              <div className="mt-4 flex flex-col gap-3 text-sm">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-zinc-300 transition hover:text-cyan-300"
                >
                  {siteConfig.email}
                </a>
                <p className="text-zinc-500">{siteConfig.phone}</p>
                <Link
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 transition hover:text-cyan-300"
                >
                  github.com/Xudage6688
                </Link>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={siteConfig.resumes.cn}
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-200 transition hover:border-cyan-300/40"
                >
                  {t.about.resumeCn}
                </a>
                <a
                  href={siteConfig.resumes.en}
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-200 transition hover:border-cyan-300/40"
                >
                  {t.about.resumeEn}
                </a>
              </div>
              <p className="mt-5 text-xs leading-6 text-zinc-500">{pick(aboutEducation, locale)}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
