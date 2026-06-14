import { Reveal } from "@/components/Reveal";
import { SectionIntro } from "@/components/SectionIntro";
import {
  aboutParagraphs,
  languages,
  sectionCopy,
  site,
  skillBuildingGroups,
  skillCategories,
} from "@/lib/content";

const panelClass = "panel-card relative overflow-hidden rounded-2xl";

function InlineLabel({
  children,
  tone = "accent",
}: {
  children: React.ReactNode;
  tone?: "accent" | "warm";
}) {
  const color = tone === "warm" ? "text-accent-warm" : "text-accent";
  return (
    <p
      className={`font-mono ${color} mb-3 text-[10px] font-semibold tracking-[0.18em] uppercase sm:mb-4`}
    >
      {children}
    </p>
  );
}

function SkillTag({
  children,
  variant = "core",
}: {
  children: React.ReactNode;
  variant?: "core" | "building";
}) {
  if (variant === "building") {
    return (
      <li className="border-accent-warm/25 text-accent-warm/90 rounded-md border border-dashed bg-accent-warm/[0.06] px-2.5 py-1 text-[11px] font-medium sm:text-xs">
        {children}
      </li>
    );
  }

  return (
    <li className="border-border-highlight text-text-primary/90 rounded-md border bg-[var(--bg-card)] px-2.5 py-1 text-[11px] font-medium sm:text-xs">
      {children}
    </li>
  );
}

export function AboutSection() {
  const { about } = sectionCopy;
  const buildingSkills = skillBuildingGroups.flatMap((group) => group.skills);

  return (
    <section id="about" className="section-shell">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionIntro eyebrow="About" title={about.title} description={site.tagline} />

        <Reveal delay={0.04}>
          <ul className="mt-8 grid gap-3 sm:mt-10 md:grid-cols-2 xl:grid-cols-3">
            {about.recruiterBullets.map((bullet, index) => (
              <li
                key={bullet}
                className={`${panelClass} flex items-start gap-3 p-5 sm:p-6 ${index === 2 ? "md:col-span-2 xl:col-span-1" : ""}`}
              >
                <span
                  className="from-accent mt-1.5 h-px w-5 shrink-0 bg-gradient-to-r to-transparent"
                  aria-hidden
                />
                <p className="text-text-muted text-sm leading-relaxed">{bullet}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-10 grid gap-6 sm:mt-14 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
            {aboutParagraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`text-text-muted text-[0.9875rem] leading-[1.75] sm:text-[1.02rem] ${index === 2 ? "md:col-span-2 xl:col-span-1" : ""}`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className={`${panelClass} mt-10 p-5 sm:mt-14 sm:p-7 lg:p-9`}>
            <div
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                background:
                  "radial-gradient(ellipse 70% 55% at 0% 0%, rgba(62,232,200,0.12), transparent 60%)",
              }}
              aria-hidden
            />

            <div className="relative">
              <InlineLabel>Core stack</InlineLabel>
              <p className="text-text-muted mb-6 max-w-2xl text-sm leading-relaxed sm:mb-8">
                {about.stackHelper}
              </p>

              <div className="grid gap-3 sm:gap-4 md:grid-cols-2 xl:grid-cols-3">
                {skillCategories.map((category, index) => (
                  <div
                    key={category.label}
                    className={`border-border-subtle rounded-xl border bg-[rgba(0,0,0,0.2)] p-4 sm:p-5 ${index === 2 ? "md:col-span-2 xl:col-span-1" : ""}`}
                  >
                    <p className="font-display text-text-primary mb-3 text-sm font-semibold">
                      {category.label}
                    </p>
                    <ul className="flex flex-wrap gap-1.5">
                      {category.skills.map((skill) => (
                        <SkillTag key={skill}>{skill}</SkillTag>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="border-border-subtle mt-8 border-t pt-6 sm:mt-10 sm:pt-8">
                <InlineLabel tone="warm">{about.buildingTitle}</InlineLabel>
                <p className="text-text-muted mb-4 max-w-2xl text-sm leading-relaxed sm:mb-5">
                  {about.buildingHelper}
                </p>
                <ul className="flex flex-wrap gap-1.5">
                  {buildingSkills.map((skill) => (
                    <SkillTag key={skill} variant="building">
                      {skill}
                    </SkillTag>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div className={`${panelClass} mt-4 p-5 sm:mt-6 sm:p-6 lg:p-7`}>
            <InlineLabel>Languages</InlineLabel>
            <ul className="grid grid-cols-1 gap-2 min-[480px]:grid-cols-2 sm:flex sm:flex-wrap sm:gap-3">
              {languages.map((lang) => (
                <li
                  key={lang.name}
                  className="border-border-highlight flex items-center justify-between gap-3 rounded-lg border bg-[var(--bg-card)] px-4 py-2.5 sm:w-auto sm:justify-start"
                >
                  <span className="text-text-primary text-sm font-medium">{lang.name}</span>
                  <span className="text-text-muted font-mono text-[10px] tracking-wide uppercase">
                    {lang.level}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <p className="text-text-muted mt-8 text-left text-sm leading-relaxed sm:mt-10 sm:text-center">
          {about.hirePrompt}{" "}
          <a href="#contact" className="text-accent font-semibold hover:underline">
            {about.hireAction}
          </a>{" "}
          or{" "}
          <a
            href={site.resumePdf}
            download="Yatharth-Sharma-Resume.pdf"
            className="text-accent font-semibold hover:underline"
          >
            download my resume
          </a>
          .
        </p>
      </div>
    </section>
  );
}
