import Image from "next/image";
import { heroEyebrow, site } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      className="font-display relative flex flex-col justify-center pb-16 pt-24 sm:pb-20 sm:pt-28 md:pb-24 lg:min-h-[100svh] lg:pb-24 lg:pt-36"
    >
      <div
        className="gradient-ring pointer-events-none absolute top-[8%] -left-1/3 h-[min(420px,85vw)] w-[min(420px,85vw)] rounded-full md:top-[12%] md:-left-1/4 md:h-[min(520px,90vw)] md:w-[min(520px,90vw)] lg:h-[560px] lg:w-[560px]"
        aria-hidden
      />
      <div
        className="gradient-ring pointer-events-none absolute -right-1/3 bottom-[4%] hidden h-[min(320px,50vw)] w-[min(320px,50vw)] rounded-full opacity-30 md:block lg:-right-1/4 lg:bottom-[8%] lg:h-[min(400px,55vw)] lg:w-[min(400px,55vw)] lg:opacity-35"
        aria-hidden
      />

      <div className="relative z-[1] mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-8 sm:gap-10 md:grid-cols-[minmax(0,1fr)_min(220px,30%)] md:gap-8 lg:grid-cols-[1.05fr_min(360px,38%)] lg:gap-14 xl:gap-16">
          <div className="min-w-0">
            <p className="text-accent mb-4 text-[10px] font-semibold tracking-[0.22em] uppercase sm:mb-5 sm:text-[11px] sm:tracking-[0.28em]">
              {heroEyebrow}
            </p>

            <h1 className="text-text-primary text-[clamp(2rem,7vw,4.5rem)] leading-[1.08] font-extrabold tracking-[-0.02em] sm:leading-[1.06]">
              {site.name.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="text-gradient">
                {site.name.split(" ").slice(-1)[0]}
              </span>
            </h1>

            <p className="text-text-primary/90 mt-5 text-base leading-relaxed font-medium sm:mt-7 sm:text-lg lg:text-xl">
              {site.role}
            </p>

            <p className="text-text-muted mt-3 max-w-2xl text-[0.9375rem] leading-[1.7] sm:mt-4 sm:text-base lg:text-[1.0625rem]">
              {site.tagline}
            </p>

            <div className="mt-6 flex flex-col gap-2 sm:mt-8 sm:flex-row sm:flex-wrap">
              <span className="border-border-highlight text-text-muted w-fit rounded-full border bg-[var(--bg-card)] px-3.5 py-2 text-[10px] font-medium tracking-wide backdrop-blur-sm sm:px-4 sm:text-[11px]">
                {site.location}
              </span>
              <span className="border-accent/25 text-text-primary/90 w-fit max-w-full rounded-full border border-dashed bg-accent/[0.05] px-3.5 py-2 text-[10px] leading-snug font-medium tracking-wide sm:px-4 sm:text-[11px]">
                {site.availability}
              </span>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 lg:mt-12 lg:gap-5">
              <a
                href="#featured-work"
                className="bg-accent text-bg-deep focus-visible:ring-accent/50 inline-flex min-h-11 w-full items-center justify-center rounded-xl px-6 py-3.5 text-sm font-bold tracking-wide shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset] transition-[box-shadow,transform] hover:shadow-[0_0_32px_var(--glow)] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-deep)] active:scale-[0.98] sm:w-auto sm:px-7"
              >
                Featured projects
              </a>
              <a
                href={site.resumePdf}
                download="Yatharth-Sharma-Resume.pdf"
                className="border-border-highlight text-text-primary hover:border-accent/45 hover:text-accent inline-flex min-h-11 w-full items-center justify-center rounded-xl border bg-[var(--bg-card)] px-6 py-3.5 text-sm font-semibold tracking-wide backdrop-blur-sm transition-colors sm:w-auto"
              >
                Download resume
              </a>
            </div>

            <p className="text-text-muted mt-4 text-sm sm:mt-5">
              <a href="#contact" className="text-accent font-semibold hover:underline">
                Get in touch
              </a>
              {" · "}
              <a href="#digital-twin" className="text-accent font-semibold hover:underline">
                Ask career twin →
              </a>
            </p>
          </div>

          <div className="mx-auto w-full max-w-[200px] sm:max-w-[240px] md:mx-0 md:max-w-none md:justify-self-end">
            <div className="from-accent via-accent-warm to-accent relative aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br p-[2px] shadow-[0_0_48px_-14px_var(--glow)] lg:shadow-[0_0_60px_-12px_var(--glow)]">
              <div className="bg-bg-deep relative h-full w-full overflow-hidden rounded-[calc(1rem-2px)]">
                <Image
                  src={site.profileImage}
                  alt={`${site.name} — professional portrait`}
                  fill
                  sizes="(max-width: 640px) 200px, (max-width: 768px) 240px, (max-width: 1024px) 220px, 360px"
                  className="object-cover object-[center_15%]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
