import type { ReactNode } from "react";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { SectionIntro } from "@/components/SectionIntro";
import {
  aboutParagraphs,
  languages,
  sectionCopy,
  site,
  skillBuildingGroups,
  skillCategories,
} from "@/lib/content";

const content = "mx-auto w-full max-w-3xl";
const card = "surface-card border-border-subtle rounded-2xl border";

function SkillTag({
  children,
  variant = "core",
}: {
  children: ReactNode;
  variant?: "core" | "building";
}) {
  if (variant === "building") {
    return (
      <li className="border-accent-warm/30 text-accent-warm/95 rounded-lg border border-dashed bg-accent-warm/[0.07] px-2.5 py-1 text-[11px] font-medium sm:px-3 sm:py-1.5 sm:text-xs">
        {children}
      </li>
    );
  }

  return (
    <li className="border-border-highlight text-text-primary/90 rounded-lg border bg-[var(--bg-card)] px-2.5 py-1 text-[11px] font-medium sm:px-3 sm:py-1.5 sm:text-xs">
      {children}
    </li>
  );
}

function SkillGroupRow({
  label,
  skills,
  variant = "core",
}: {
  label: string;
  skills: readonly string[];
  variant?: "core" | "building";
}) {
  return (
    <li className="grid gap-3 py-4 first:pt-0 last:pb-0 sm:grid-cols-[minmax(6rem,7.25rem)_1fr] sm:items-start sm:gap-4 md:grid-cols-[7.25rem_1fr] md:gap-5 lg:grid-cols-[7.75rem_1fr]">
      <p
        className={`text-sm font-semibold tracking-tight sm:pt-1 ${
          variant === "building" ? "text-accent-warm/95" : "text-text-primary"
        }`}
      >
        {label}
      </p>
      <ul className="flex flex-wrap gap-1.5 sm:gap-2">
        {skills.map((skill) => (
          <SkillTag key={skill} variant={variant}>
            {skill}
          </SkillTag>
        ))}
      </ul>
    </li>
  );
}

export function AboutSection() {
  const { about } = sectionCopy;

  return (
    <section
      id="about"
      className="border-border-subtle scroll-mt-[4.25rem] border-t py-16 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionIntro eyebrow="About" title={about.title} description={site.tagline} />

        <ul className={`${content} mt-8 space-y-3 sm:mt-10`}>
          {about.recruiterBullets.map((bullet) => (
            <li key={bullet} className={`${card} flex items-start gap-3 p-5 sm:p-6`}>
              <span
                className="from-accent mt-1.5 h-px w-5 shrink-0 bg-gradient-to-r to-transparent"
                aria-hidden
              />
              <p className="text-text-muted text-sm leading-relaxed">{bullet}</p>
            </li>
          ))}
        </ul>

        <div className={`${content} mt-10 space-y-6 sm:mt-14`}>
          {aboutParagraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-text-muted text-[0.9875rem] leading-[1.75] sm:text-[1.02rem]"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Core stack — row-based layout for better scanability across breakpoints */}
        <div className={`${card} mt-10 p-5 sm:mt-14 sm:p-7 lg:p-9`}>
          <div className="mx-auto max-w-[56rem]">
            <SectionEyebrow className="mb-3 sm:mb-4">Core stack</SectionEyebrow>
            <p className="text-text-muted mx-auto mb-6 max-w-2xl text-center text-sm leading-relaxed sm:mb-8">
              {about.stackHelper}
            </p>

            <ul className="divide-border-subtle divide-y rounded-xl border border-[var(--border-subtle)] bg-[rgba(0,0,0,0.18)] px-4 sm:px-5 md:px-6">
              {skillCategories.map((category) => (
                <SkillGroupRow
                  key={category.label}
                  label={category.label}
                  skills={category.skills}
                />
              ))}
            </ul>
          </div>

          <div className="border-border-subtle mx-auto mt-8 max-w-[56rem] border-t pt-6 sm:mt-10 sm:pt-8">
            <SectionEyebrow className="mb-3 sm:mb-4">{about.buildingTitle}</SectionEyebrow>
            <p className="text-text-muted mx-auto mb-5 max-w-2xl text-center text-sm leading-relaxed sm:mb-6">
              {about.buildingHelper}
            </p>
            <ul className="divide-border-subtle divide-y rounded-xl border border-accent-warm/15 bg-accent-warm/[0.03] px-4 sm:px-5 md:px-6">
              {skillBuildingGroups.map((group) => (
                <SkillGroupRow
                  key={group.label}
                  label={group.label}
                  skills={group.skills}
                  variant="building"
                />
              ))}
            </ul>
          </div>
        </div>

        <div className={`${card} ${content} mt-4 p-5 sm:mt-6 sm:p-6 lg:p-7`}>
          <SectionEyebrow className="mb-3 sm:mb-4">Languages</SectionEyebrow>
          <ul className="flex flex-col items-center gap-2 sm:gap-3">
            {languages.map((lang) => (
              <li
                key={lang.name}
                className="border-border-highlight flex w-full max-w-sm items-center justify-between gap-3 rounded-lg border bg-[var(--bg-card)] px-4 py-2.5"
              >
                <span className="text-text-primary text-sm font-medium">{lang.name}</span>
                <span className="text-text-muted font-mono text-[10px] tracking-wide uppercase">
                  {lang.level}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
