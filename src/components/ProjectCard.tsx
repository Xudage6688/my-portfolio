"use client";

import Image from "next/image";
import Link from "next/link";
import GlareCard from "@/components/rb/GlareCard";
import type { Project } from "@/data/projects";
import { useI18n } from "@/i18n/LocaleProvider";
import { pick } from "@/i18n/types";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const { locale, t } = useI18n();
  const isGif = project.placeholder.endsWith(".gif");

  return (
    <GlareCard
      background="transparent"
      borderColor="transparent"
      className="h-full w-full"
      glareColor="#22d3ee"
      glareOpacity={0.1}
    >
      <article
        className={`group flex h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:border-cyan-400/30 hover:bg-white/[0.05] ${
          featured ? "flex-col md:flex-row" : "flex-col"
        }`}
      >
        <div
          className={`relative shrink-0 overflow-hidden border-b border-white/10 bg-[#0b1020] md:border-b-0 ${
            featured ? "aspect-[16/10] md:aspect-auto md:h-full md:w-2/5 md:border-r" : "aspect-[16/10]"
          }`}
        >
          <Image
            src={project.placeholder}
            alt={`${pick(project.title, locale)} preview`}
            fill
            unoptimized={isGif}
            sizes={featured ? "(min-width: 768px) 40vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
            className="object-cover transition duration-500 group-hover:scale-[1.02]"
          />
          {featured ? (
            <span className="absolute left-4 top-4 z-10 rounded-full bg-cyan-400/15 px-3 py-1 text-xs font-medium text-cyan-200 ring-1 ring-cyan-400/20">
              {t.projects.heroBadge}
            </span>
          ) : null}
        </div>

        <div className={`flex flex-1 flex-col p-6 ${featured ? "md:p-8" : ""}`}>
          <div className="mb-3 flex items-start justify-between gap-3">
            <div>
              <h3
                className={`font-semibold text-white ${featured ? "text-2xl" : "text-xl"}`}
              >
                {pick(project.title, locale)}
              </h3>
              <p className="mt-1 font-mono text-xs text-cyan-300/80">{pick(project.subtitle, locale)}</p>
            </div>
          </div>

          <p className="text-sm leading-7 text-zinc-300">{pick(project.summary, locale)}</p>

          {featured ? (
            <div className="mt-4 rounded-xl border border-white/8 bg-black/20 p-4">
              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-zinc-500">
                {t.projects.problemLabel}
              </p>
              <p className="text-sm leading-7 text-zinc-300">{pick(project.problem, locale)}</p>
            </div>
          ) : (
            <p className="mt-4 text-sm leading-7 text-zinc-400">{pick(project.problem, locale)}</p>
          )}

          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-zinc-400"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-200 transition hover:border-cyan-300/40 hover:text-cyan-200"
            >
              {t.nav.github}
            </Link>
            {project.liveUrl && project.liveLabel ? (
              <Link
                href={project.liveUrl}
                className="rounded-full bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200 ring-1 ring-cyan-400/20 transition hover:bg-cyan-400/15"
              >
                {pick(project.liveLabel, locale)}
              </Link>
            ) : null}
          </div>
        </div>
      </article>
    </GlareCard>
  );
}
