import { heroFocus, site } from "@/lib/content";

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
          <a
            href="#featured-work"
            className="bg-accent text-bg-deep focus-visible:ring-accent/50 inline-flex min-h-11 w-full max-w-sm items-center justify-center rounded-xl px-6 py-3.5 text-sm font-bold tracking-wide shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset] transition-[box-shadow,transform] hover:shadow-[0_0_32px_var(--glow)] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-deep)] active:scale-[0.98] sm:w-auto sm:px-7"
          >
            Featured projects
          </a>
          <a
            href={site.resumePdf}
            download="Yatharth-Sharma-Resume.pdf"
            className="border-border-highlight text-text-primary hover:border-accent/45 hover:text-accent inline-flex min-h-11 w-full max-w-sm items-center justify-center rounded-xl border bg-[var(--bg-card)] px-6 py-3.5 text-sm font-semibold tracking-wide backdrop-blur-sm transition-colors sm:w-auto"
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
    </section>
  );
}
