"use client";

import ProjectCard from "@/components/ProjectCard";
import { footerProjects, projects } from "@/data/projects";
import { useI18n } from "@/i18n/LocaleProvider";
import { pick } from "@/i18n/types";

export default function ProjectsSection() {
  const { locale, t } = useI18n();
  const heroProjects = projects.filter((project) => project.tier === "hero");
  const moreProjects = projects.filter((project) => project.tier === "more");

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-cyan-300/80">
          {t.projects.kicker}
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">{t.projects.title}</h2>
        <p className="mt-4 text-base leading-8 text-zinc-400">{t.projects.intro}</p>
      </div>

      <div className="mb-16">
        <h3 className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
          {t.projects.heroTier}
        </h3>
        <div className="grid gap-6 lg:grid-cols-3">
          {heroProjects.map((project) => (
            <ProjectCard key={project.id} project={project} featured />
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
          {t.projects.moreTier}
        </h3>
        <div className="grid gap-6 lg:grid-cols-3">
          {moreProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      <div className="mt-16 rounded-2xl border border-dashed border-white/10 px-6 py-5">
        <p className="text-sm text-zinc-500">{t.projects.moreRepos}</p>
        <div className="mt-3 flex flex-wrap gap-4">
          {footerProjects.map((project) => (
            <a
              key={project.id}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-300 transition hover:text-cyan-300"
            >
              {pick(project.title, locale)} →
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
