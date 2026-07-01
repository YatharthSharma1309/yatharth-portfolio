import { heroFocus, site } from "@/lib/content";
import { btnPrimary, btnSecondary } from "@/lib/ui-classes";

const focusPill =
  "border-border-highlight text-text-muted inline-flex items-center rounded-full border bg-[var(--bg-card)] px-3 py-1.5 text-xs font-medium backdrop-blur-sm sm:px-3.5 sm:py-2 sm:text-[13px]";

export function Hero() {
  return (
    <section
      id="top"
      className="font-display relative flex flex-col justify-center pb-16 pt-24 sm:pb-20 sm:pt-28 md:pb-24 lg:min-h-[100svh] lg:pb-24 lg:pt-36"
    >
      <div
        className="gradient-ring pointer-events-none absolute top-[8%] left-1/2 h-[min(420px,85vw)] w-[min(420px,85vw)] -translate-x-1/2 rounded-full opacity-90 sm:h-[min(520px,90vw)] sm:w-[min(520px,90vw)] lg:h-[560px] lg:w-[560px]"
        aria-hidden
      />

      <div className="relative z-[1] mx-auto w-full max-w-3xl px-5 text-center sm:px-8">
        <h1 className="text-text-primary text-[clamp(2rem,7vw,4.5rem)] leading-[1.08] font-extrabold tracking-[-0.02em] sm:leading-[1.06]">
          {site.name.split(" ").slice(0, -1).join(" ")}{" "}
          <span className="text-gradient">{site.name.split(" ").slice(-1)[0]}</span>
        </h1>

        <p className="text-text-primary/90 mt-5 text-base leading-relaxed font-medium sm:mt-7 sm:text-lg lg:text-xl">
          {site.role}
        </p>

        <p className="text-text-muted mx-auto mt-3 max-w-2xl text-[0.9375rem] leading-[1.7] sm:mt-4 sm:text-base lg:text-[1.0625rem]">
          {site.tagline}
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:mt-8">
          {heroFocus.map((item) => (
            <span key={item} className={focusPill}>
              {item}
            </span>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:mt-5">
          <span className="border-accent/30 bg-accent/[0.08] text-accent inline-flex w-fit items-center gap-2 rounded-full border px-3.5 py-2 text-[11px] font-semibold tracking-wide">
            <span className="bg-accent h-2 w-2 shrink-0 rounded-full" aria-hidden />
            {site.availability}
          </span>
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 sm:mt-10 sm:flex-row sm:justify-center sm:gap-4 lg:mt-12">
          <a href="#featured-work" className={`${btnPrimary} w-full max-w-sm sm:w-auto sm:px-7`}>
            View flagship projects
          </a>
          <a
            href={site.resumePdf}
            download="Yatharth-Sharma-Resume.pdf"
            className={`${btnSecondary} w-full max-w-sm sm:w-auto`}
          >
            Download resume
          </a>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:mt-7 sm:gap-x-8">
          <a href="#contact" className="text-accent text-sm font-semibold hover:underline">
            Get in touch
          </a>
          <span className="text-text-muted/35 hidden text-xs select-none sm:inline" aria-hidden>
            ·
          </span>
          <a href="#digital-twin" className="text-accent text-sm font-semibold hover:underline">
            Ask career twin →
          </a>
        </div>
      </div>
    </section>
  );
}
