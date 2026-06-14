import { Reveal } from "@/components/Reveal";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionIntro({
  eyebrow,
  title,
  description,
  className = "",
}: Props) {
  return (
    <Reveal className={className}>
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-4 flex items-center justify-center gap-3">
          <span
            className="from-accent h-px w-10 shrink-0 bg-gradient-to-r to-transparent"
            aria-hidden
          />
          <p className="font-mono text-accent text-[11px] font-semibold tracking-[0.22em] uppercase">
            {eyebrow}
          </p>
        </div>
        <h2 className="font-display text-text-primary text-[1.75rem] leading-[1.15] font-bold tracking-tight text-balance sm:text-3xl lg:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="text-text-muted mx-auto mt-4 max-w-2xl text-sm leading-relaxed sm:mt-5 sm:text-base lg:text-[1.0625rem]">
            {description}
          </p>
        ) : null}
      </div>
    </Reveal>
  );
}
