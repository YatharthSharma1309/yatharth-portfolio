import { SectionEyebrow } from "@/components/SectionEyebrow";
import { SectionIntro } from "@/components/SectionIntro";
import {
  aboutParagraphs,
  languages,
  sectionCopy,
  skillBuildingGroups,
  skillCategories,
} from "@/lib/content";

const content = "mx-auto w-full max-w-3xl";
const card = "surface-card border-border-subtle rounded-2xl border";

const skillTagClass =
  "border-border-highlight text-text-muted rounded-md border bg-bg-elevated px-2 py-0.5 text-[11px] font-medium";

const buildingTagClass =
  "border-accent-warm/35 text-accent-warm/90 rounded-md border border-dashed bg-accent-warm/[0.06] px-2 py-0.5 text-[11px] font-medium";

function SkillTags({
  skills,
  variant = "core",
}: {
  skills: readonly string[];
  variant?: "core" | "building";
}) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {skills.map((skill) => (
        <li key={skill} className={variant === "building" ? buildingTagClass : skillTagClass}>
          {skill}
        </li>
      ))}
    </ul>
  );
}

function StackRow({
  label,
  skills,
  variant = "core",
}: {
  label: string;
  skills: readonly string[];
  variant?: "core" | "building";
}) {
  return (
    <div className="grid gap-3 py-5 first:pt-0 last:pb-0 sm:grid-cols-[11rem_minmax(0,1fr)] sm:items-start sm:gap-6 sm:py-6">
      <p
        className={`font-mono text-[11px] font-semibold tracking-[0.16em] uppercase sm:pt-1 ${
          variant === "building" ? "text-accent-warm" : "text-accent"
        }`}
      >
        {label}
      </p>
      <SkillTags skills={skills} variant={variant} />
    </div>
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
        <SectionIntro eyebrow="About" title={about.title} description={about.description} />

        <ul className={`${card} ${content} mt-8 divide-border-subtle divide-y sm:mt-10`}>
          {about.recruiterBullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3 p-4 sm:p-5">
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

        <div className={`${card} ${content} mt-10 p-5 sm:mt-14 sm:p-7 lg:p-8`}>
          <SectionEyebrow className="mb-2 sm:mb-3">Core stack</SectionEyebrow>
          <p className="text-text-muted mx-auto mb-6 max-w-xl text-center text-sm leading-relaxed sm:mb-8">
            {about.stackHelper}
          </p>

          <div className="border-border-subtle divide-border-subtle divide-y border-t">
            {skillCategories.map((category) => (
              <StackRow
                key={category.label}
                label={category.label}
                skills={category.skills}
              />
            ))}
          </div>

          <div className="border-border-subtle mt-8 border-t pt-8 sm:mt-10 sm:pt-10">
            <SectionEyebrow className="mb-2 sm:mb-3">{about.buildingTitle}</SectionEyebrow>
            <p className="text-text-muted mx-auto mb-5 max-w-md text-center text-sm leading-relaxed sm:mb-6">
              {about.buildingHelper}
            </p>
            <div className="border-border-subtle divide-border-subtle divide-y border-t">
              {skillBuildingGroups.map((group) => (
                <StackRow
                  key={group.label}
                  label={group.label}
                  skills={group.skills}
                  variant="building"
                />
              ))}
            </div>
          </div>
        </div>

        <div className={`${card} ${content} mt-8 p-5 sm:mt-10 sm:p-6 lg:p-7`}>
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
