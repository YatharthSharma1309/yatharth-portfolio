import { SectionIntro } from "@/components/SectionIntro";
import { engineeringHighlights, heroMetrics, sectionCopy } from "@/lib/content";

export function HighlightsSection() {
  const { highlights } = sectionCopy;

  return (
    <section
      id="highlights"
      className="border-border-subtle scroll-mt-[4.25rem] border-t py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionIntro
          eyebrow="At a glance"
          title={highlights.title}
          description={highlights.description}
        />

        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-4 sm:gap-4">
          {heroMetrics.map((metric) => (
            <div
              key={metric.label}
              className="surface-card border-border-subtle rounded-2xl border px-4 py-5 text-center sm:px-5 sm:py-6"
            >
              <p className="font-display text-accent text-2xl font-extrabold tracking-tight sm:text-3xl">
                {metric.value}
              </p>
              <p className="text-text-muted mt-1.5 text-[11px] leading-snug font-medium sm:text-xs">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        <ul className="mx-auto mt-8 grid max-w-4xl gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4">
          {engineeringHighlights.map((item) => (
            <li
              key={item}
              className="surface-card border-border-subtle flex items-start gap-3 rounded-xl border px-4 py-3.5 sm:px-5 sm:py-4"
            >
              <span
                className="bg-accent/15 text-accent mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold"
                aria-hidden
              >
                ✓
              </span>
              <span className="text-text-muted text-sm leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
