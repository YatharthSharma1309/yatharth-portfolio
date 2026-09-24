import { SectionIntro } from "@/components/SectionIntro";
import { languages, sectionCopy, skillBuildingGroups, skillCategories } from "@/lib/content";
import { cardHeading, skillChipBuilding, stackChip } from "@/lib/ui-classes";

const content = "mx-auto w-full max-w-3xl";
const card = "surface-card border-border-subtle rounded-2xl border bg-bg-card";

function SkillTags({
  skills,
  variant = "core",
}: {
  skills: readonly string[];
  variant?: "core" | "building";
}) {
  return (
    <ul className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <li key={skill} className={variant === "building" ? skillChipBuilding : stackChip}>
          {skill}
        </li>
      ))}
    </ul>
  );
}

function StackGroup({
  label,
  skills,
  variant = "core",
}: {
  label: string;
  skills: readonly string[];
  variant?: "core" | "building";
}) {
  return (
    <div
      className={`rounded-xl border p-4 ${
        variant === "building"
          ? "border-accent-warm/20 bg-accent-warm/[0.03]"
          : "border-border-subtle bg-white"
      }`}
    >
      <h4
        className={`mb-3 text-sm font-semibold tracking-[-0.01em] ${
          variant === "building" ? "text-accent-warm" : "text-text-primary"
        }`}
      >
        {label}
      </h4>
      <SkillTags skills={skills} variant={variant} />
    </div>
  );
}

export function AboutSection() {
  const { about } = sectionCopy;

  return (
    <section
      id="about"
      className="border-border-subtle scroll-mt-[4.25rem] border-t pt-8 pb-12 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-20"
    >
      <div className="page-gutter mx-auto max-w-6xl">
        <SectionIntro eyebrow="About" title={about.title} description={about.description} />

        <div className={`${card} ${content} mt-6 p-5 sm:mt-8 sm:p-6`}>
          <h3 className={`${cardHeading} mb-5 text-center`}>Core stack</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {skillCategories.map((category) => (
              <StackGroup
                key={category.label}
                label={category.label}
                skills={category.skills}
              />
            ))}
          </div>
        </div>

        <ul className={`${card} ${content} mt-6 divide-border-subtle divide-y`}>
          {about.recruiterBullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3 p-3.5 sm:p-4">
              <span
                className="from-accent mt-1.5 h-px w-5 shrink-0 bg-gradient-to-r to-transparent"
                aria-hidden
              />
              <p className="text-text-primary text-sm leading-relaxed">{bullet}</p>
            </li>
          ))}
        </ul>

        <div className={`${card} ${content} mt-6 p-5 sm:p-6`}>
          <h3 className={`${cardHeading} mb-5 text-center`}>{about.buildingTitle}</h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {skillBuildingGroups.map((group) => (
              <StackGroup
                key={group.label}
                label={group.label}
                skills={group.skills}
                variant="building"
              />
            ))}
          </div>
        </div>

        <div className={`${card} ${content} mt-6 p-5 sm:p-6`}>
          <h3 className={`${cardHeading} mb-5 text-center`}>Languages</h3>
          <ul className="flex flex-col items-center gap-2">
            {languages.map((lang) => (
              <li
                key={lang.name}
                className="border-border-highlight flex w-full max-w-sm items-center justify-between gap-3 rounded-lg border bg-white px-4 py-2.5"
              >
                <span className="text-text-primary text-sm font-medium">{lang.name}</span>
                <span className="text-text-muted font-mono text-[11px] font-semibold tracking-[0.14em] uppercase">
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
