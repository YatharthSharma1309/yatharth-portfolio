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



function SectionLabel({ children }: { children: React.ReactNode }) {

  return (

    <div className="mb-4 flex items-center gap-3">

      <span

        className="from-accent h-px w-8 shrink-0 bg-gradient-to-r to-transparent"

        aria-hidden

      />

      <p className="text-accent font-mono text-[11px] font-semibold tracking-[0.22em] uppercase">

        {children}

      </p>

    </div>

  );

}



function SkillPill({

  children,

  variant = "core",

}: {

  children: React.ReactNode;

  variant?: "core" | "building";

}) {

  const styles = {

    core: "inline-flex rounded-md border border-accent/20 bg-accent/[0.12] px-2.5 py-1 text-[11px] font-semibold tracking-wide text-accent",

    building:

      "inline-flex rounded-md border border-dashed border-accent-warm/30 bg-accent-warm/[0.06] px-2.5 py-1 text-[11px] font-medium tracking-wide text-accent-warm/95",

  };



  return <li className={styles[variant]}>{children}</li>;

}



export function AboutSection() {

  const { about } = sectionCopy;



  return (

    <section

      id="about"

      className="border-border-subtle scroll-mt-[4.25rem] border-t py-28 sm:py-36"

    >

      <div className="mx-auto max-w-6xl px-5 sm:px-8">

        <SectionIntro

          eyebrow="About"

          title={about.title}

          description={site.tagline}

        />

        <Reveal delay={0.04}>

          <ul className="surface-card border-border-subtle mt-10 flex flex-col gap-3 rounded-2xl border p-6 sm:p-7">

            {about.recruiterBullets.map((bullet) => (

              <li

                key={bullet}

                className="text-text-muted flex items-start gap-3 text-sm leading-relaxed sm:text-[0.9375rem]"

              >

                <span

                  className="bg-accent mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"

                  aria-hidden

                />

                {bullet}

              </li>

            ))}

          </ul>

        </Reveal>

        <div className="mt-14 grid gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">

          <div className="space-y-7">

            {aboutParagraphs.map((p, i) => (

              <Reveal key={i} delay={i * 0.06}>

                <p className="text-text-muted text-[1.05rem] leading-[1.75]">

                  {p}

                </p>

              </Reveal>

            ))}

          </div>

          <Reveal delay={0.12}>

            <div className="surface-card border-border-subtle hover:border-border-highlight relative overflow-hidden rounded-2xl border p-8 transition-[border-color,box-shadow] duration-300 sm:p-9">

              <div

                className="pointer-events-none absolute inset-0 opacity-50"

                style={{

                  background:

                    "radial-gradient(ellipse 90% 70% at 100% 0%, rgba(62,232,200,0.14), transparent 55%)",

                }}

                aria-hidden

              />

              <div className="relative space-y-8">

                <div>

                  <SectionLabel>Stack</SectionLabel>

                  <p className="text-text-muted mb-5 text-xs leading-relaxed">

                    {about.stackHelper}

                  </p>

                  <div className="grid gap-6 sm:grid-cols-2">

                    {skillCategories.map((category) => (

                      <div key={category.label}>

                        <div className="mb-3 flex items-center justify-between gap-2">

                          <p className="font-display text-text-primary text-sm font-semibold">

                            {category.label}

                          </p>

                          <span className="text-text-muted font-mono text-[10px] tracking-wide">

                            {category.skills.length}

                          </span>

                        </div>

                        <ul className="flex flex-wrap gap-2">

                          {category.skills.map((skill) => (

                            <SkillPill key={skill}>{skill}</SkillPill>

                          ))}

                        </ul>

                      </div>

                    ))}

                  </div>

                </div>



                <div className="border-accent-warm/20 bg-accent-warm/[0.04] rounded-xl border p-5">

                  <SectionLabel>{about.buildingTitle}</SectionLabel>

                  <p className="text-text-muted mb-5 text-xs leading-relaxed">

                    {about.buildingHelper}

                  </p>

                  <div className="space-y-5">

                    {skillBuildingGroups.map((group) => (

                      <div key={group.label}>

                        <div className="mb-2.5 flex items-center justify-between gap-2">

                          <p className="font-display text-text-primary/90 text-[13px] font-semibold">

                            {group.label}

                          </p>

                          <span className="text-text-muted font-mono text-[10px] tracking-wide">

                            {group.skills.length}

                          </span>

                        </div>

                        <ul className="flex flex-wrap gap-2">

                          {group.skills.map((skill) => (

                            <SkillPill key={skill} variant="building">

                              {skill}

                            </SkillPill>

                          ))}

                        </ul>

                      </div>

                    ))}

                  </div>

                </div>



                <div className="border-border-subtle border-t pt-6">

                  <SectionLabel>Languages</SectionLabel>

                  <ul className="divide-border-subtle divide-y">

                    {languages.map((lang) => (

                      <li

                        key={lang.name}

                        className="flex items-center justify-between gap-4 py-2.5 first:pt-0 last:pb-0"

                      >

                        <span className="text-text-primary text-sm">{lang.name}</span>

                        <span className="text-text-muted font-mono text-[11px] tracking-wide">

                          {lang.level}

                        </span>

                      </li>

                    ))}

                  </ul>

                </div>

              </div>

            </div>

          </Reveal>

        </div>

        <p className="text-text-muted mt-10 text-center text-sm">

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


