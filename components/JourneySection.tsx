import { SectionEyebrow } from "@/components/SectionEyebrow";
import { SectionIntro } from "@/components/SectionIntro";
import { education, resumeJourney, sectionCopy } from "@/lib/content";
import { cardHeading, labelMono } from "@/lib/ui-classes";

const content = "mx-auto w-full max-w-3xl";
const card = "surface-card border-border-subtle rounded-2xl border p-5 sm:p-6 lg:p-7";

export function JourneySection() {
  return (
    <section
      id="journey"
      className="border-border-subtle scroll-mt-[4.25rem] relative border-t py-16 sm:py-24 lg:py-28"
    >
      <div className="page-gutter mx-auto max-w-6xl">
        <SectionIntro
          eyebrow="Career journey"
          title={sectionCopy.journey.title}
          description={sectionCopy.journey.description}
        />

        <div className={`${content} relative mt-10 sm:mt-12`}>
          <div
            className="from-accent/45 via-border-highlight absolute top-3 bottom-3 left-[9px] w-px bg-gradient-to-b to-transparent"
            aria-hidden
          />
          <ol className="space-y-6 sm:space-y-7">
            {resumeJourney.map((item, index) => {
              const latest = index === 0 || item.current;
              return (
              <li key={`${item.org}-${item.period}`} className="relative pl-11 sm:pl-12">
                <div
                  className={`absolute top-2.5 left-0 flex h-[15px] w-[15px] items-center justify-center rounded-full border-2 border-[var(--border-highlight)] bg-[var(--bg-deep)] ${latest ? "shadow-[0_0_0_3px_rgba(79,70,229,0.18)]" : ""}`}
                >
                  <span
                    className={`h-2 w-2 rounded-full ${latest ? "bg-accent" : "bg-text-muted/80"}`}
                  />
                </div>
                <div className={`${card} ${latest ? "ring-accent/20 ring-1" : ""}`}>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className={labelMono}>{item.period}</p>
                    {latest ? (
                      <span className="bg-accent/10 text-accent rounded-md px-2 py-0.5 text-[11px] font-semibold tracking-[0.14em] uppercase">
                        Latest
                      </span>
                    ) : null}
                  </div>
                  <h3 className={`${cardHeading} mt-2 sm:mt-2.5`}>
                    {item.title}
                  </h3>
                  <p className="text-text-primary/95 mt-1 font-medium">{item.org}</p>
                  {item.location && item.location !== "—" ? (
                    <p className="text-text-muted mt-0.5 text-sm">{item.location}</p>
                  ) : null}
                  {item.description ? (
                    <ul className="text-text-muted mt-4 space-y-2.5 text-sm leading-relaxed">
                      {item.description.map((line) => (
                        <li key={line} className="flex gap-3">
                          <span
                            className="from-accent mt-2 h-px w-5 shrink-0 bg-gradient-to-r to-transparent"
                            aria-hidden
                          />
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </li>
              );
            })}
          </ol>
        </div>

        <div className={`surface-card border-border-subtle ${content} mt-12 rounded-2xl border p-5 sm:mt-14 sm:p-7 lg:p-8`}>
          <SectionEyebrow className="mb-6 sm:mb-8">Education</SectionEyebrow>
          <ul className="space-y-6 sm:space-y-8">
            {education.map((entry) => (
              <li
                key={entry.school + entry.period}
                className="border-border-subtle border-b pb-6 text-center last:border-b-0 last:pb-0 sm:pb-8"
              >
                <p className="text-text-primary font-semibold leading-snug">{entry.degree}</p>
                <p className="text-text-muted mt-1 text-sm">{entry.school}</p>
                <p className="text-text-muted mt-2 font-mono text-[11px] font-semibold tracking-[0.14em]">
                  {entry.period}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
