import { Reveal } from "@/components/Reveal";
import { SectionIntro } from "@/components/SectionIntro";
import { certifications, sectionCopy } from "@/lib/content";

export function CertificationsSection() {
  const { certifications: copy } = sectionCopy;

  return (
    <section className="border-border-subtle border-t py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionIntro
          eyebrow="Certifications"
          title={copy.title}
          description={copy.description}
        />
        <ul className="mx-auto mt-10 flex max-w-3xl flex-col gap-3 sm:mt-14 sm:gap-4">
          {certifications.map((c, i) => (
            <Reveal key={c} delay={i * 0.04}>
              <li className="surface-card border-border-subtle hover:border-border-highlight group flex items-start gap-3.5 rounded-xl border p-5 transition-[border-color,transform] duration-300 hover:-translate-y-0.5">
                <span className="bg-accent/15 text-accent mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-xs font-bold">
                  ✓
                </span>
                <span className="text-text-muted group-hover:text-text-primary text-sm leading-snug transition-colors">
                  {c}
                </span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
