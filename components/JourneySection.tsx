import { Reveal } from "@/components/Reveal";
import { SectionIntro } from "@/components/SectionIntro";
import { education, journey, sectionCopy } from "@/lib/content";

const content = "mx-auto w-full max-w-3xl";
const card = "surface-card border-border-subtle rounded-xl border p-5 sm:p-6 lg:p-7";

export function JourneySection() {
  return (
    <section
      id="journey"
      className="border-border-subtle scroll-mt-[4.25rem] relative border-t py-16 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionIntro
          eyebrow="Career journey"
          title={sectionCopy.journey.title}
          description={sectionCopy.journey.description}
        />

        <div className={`${content} relative mt-10 sm:mt-14 lg:mt-16`}>
          <div
            className="from-accent/45 via-border-highlight absolute top-3 bottom-3 left-[9px] w-px bg-gradient-to-b to-transparent"
            aria-hidden
          />
          <ol className="space-y-5 sm:space-y-6">
            {journey.map((item, i) => (
              <li key={`${item.org}-${item.period}`} className="relative pl-11 sm:pl-12">
                <div
                  className={`absolute top-2 left-0 flex h-[15px] w-[15px] items-center justify-center rounded-full border-2 border-[var(--border-highlight)] bg-[var(--bg-deep)] ${item.current ? "shadow-[0_0_14px_var(--glow)]" : ""}`}
                >
                  <span
                    className={`h-2 w-2 rounded-full ${item.current ? "bg-accent" : "bg-text-muted/80"}`}
                  />
                </div>
                <Reveal delay={Math.min(i * 0.06, 0.24)}>
                  <div className={card}>
                    <p className="text-accent text-[11px] font-semibold tracking-[0.14em] uppercase">
                      {item.period}
                    </p>
                    <h3 className="font-display text-text-primary mt-2 text-lg font-bold tracking-tight sm:mt-2.5 sm:text-xl">
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
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        <Reveal delay={0.08}>
          <div className={`surface-card border-border-subtle ${content} mt-10 rounded-2xl border p-5 sm:mt-14 sm:p-7 lg:p-8`}>
            <div className="mb-6 flex items-center justify-center gap-3 sm:mb-8">
              <span
                className="from-accent h-px w-10 shrink-0 bg-gradient-to-r to-transparent"
                aria-hidden
              />
              <p className="text-accent text-[11px] font-semibold tracking-[0.22em] uppercase">
                Education
              </p>
            </div>
            <ul className="space-y-6 sm:space-y-8">
              {education.map((entry) => (
                <li
                  key={entry.school + entry.period}
                  className="border-border-subtle border-b pb-6 text-center last:border-b-0 last:pb-0 sm:pb-8"
                >
                  <p className="text-text-primary font-semibold leading-snug">{entry.degree}</p>
                  <p className="text-text-muted mt-1 text-sm">{entry.school}</p>
                  <p className="text-text-muted mt-2 font-mono text-xs tracking-wide">
                    {entry.period}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
