import { Reveal } from "@/components/Reveal";
import { SectionIntro } from "@/components/SectionIntro";
import {
  aboutParagraphs,
  languages,
  sectionCopy,
  site,
  skillBuilding,
  skillCategories,
} from "@/lib/content";

const content = "mx-auto w-full max-w-3xl";
const card = "surface-card border-border-subtle rounded-2xl border";

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
      className={`font-mono ${color} mb-3 text-center text-[10px] font-semibold tracking-[0.18em] uppercase sm:mb-4`}
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

  return (
    <section
      id="about"
      className="border-border-subtle scroll-mt-[4.25rem] border-t py-16 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionIntro eyebrow="About" title={about.title} description={site.tagline} />

        <Reveal delay={0.04}>
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
        </Reveal>

        <Reveal delay={0.08}>
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
        </Reveal>

        <Reveal delay={0.12}>
          <div className={`${card} ${content} mt-10 p-5 sm:mt-14 sm:p-7 lg:p-9`}>
            <InlineLabel>Core stack</InlineLabel>
            <p className="text-text-muted mx-auto mb-6 max-w-2xl text-center text-sm leading-relaxed sm:mb-8">
              {about.stackHelper}
            </p>

            <div className="space-y-4">
              {skillCategories.map((category) => (
                <div
                  key={category.label}
                  className="border-border-subtle rounded-xl border bg-[rgba(0,0,0,0.2)] p-4 sm:p-5"
                >
                  <p className="font-display text-text-primary mb-3 text-center text-sm font-semibold">
                    {category.label}
                  </p>
                  <ul className="flex flex-wrap justify-center gap-1.5">
                    {category.skills.map((skill) => (
                      <SkillTag key={skill}>{skill}</SkillTag>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="border-border-subtle mt-8 border-t pt-6 sm:mt-10 sm:pt-8">
              <InlineLabel tone="warm">{about.buildingTitle}</InlineLabel>
              <p className="text-text-muted mx-auto mb-4 max-w-2xl text-center text-sm leading-relaxed sm:mb-5">
                {about.buildingHelper}
              </p>
              <ul className="flex flex-wrap justify-center gap-1.5">
                {skillBuilding.map((skill) => (
                  <SkillTag key={skill} variant="building">
                    {skill}
                  </SkillTag>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div className={`${card} ${content} mt-4 p-5 sm:mt-6 sm:p-6 lg:p-7`}>
            <InlineLabel>Languages</InlineLabel>
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
        </Reveal>

        <p className="text-text-muted mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed sm:mt-10">
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
