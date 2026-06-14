import { heroEyebrow, site } from "@/lib/content";



export function Hero() {

  return (

    <section

      id="top"

      className="font-display relative flex min-h-[100svh] flex-col justify-end pb-24 pt-28 sm:pb-32 sm:pt-36"

    >

      <div

        className="gradient-ring pointer-events-none absolute top-[18%] -left-1/4 h-[min(520px,90vw)] w-[min(520px,90vw)] rounded-full sm:h-[560px] sm:w-[560px]"

        aria-hidden

      />

      <div className="relative z-[1] mx-auto w-full max-w-6xl px-5 sm:px-8">

        <p className="text-accent mb-5 text-[11px] font-semibold tracking-[0.28em] uppercase">

          {heroEyebrow}

        </p>

        <h1 className="text-text-primary max-w-4xl text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.06] font-extrabold tracking-[-0.02em]">

          {site.name.split(" ").slice(0, -1).join(" ")}{" "}

          <span className="text-gradient">

            {site.name.split(" ").slice(-1)[0]}

          </span>

        </h1>

        <p className="text-text-primary/90 mt-7 max-w-2xl text-lg leading-relaxed font-medium sm:text-xl">

          {site.role}

        </p>

        <p className="text-text-muted mt-4 max-w-2xl text-base leading-[1.7] sm:text-[1.0625rem]">

          {site.tagline}

        </p>

        <div className="mt-8 flex flex-wrap gap-2">

          <span className="border-border-highlight text-text-muted rounded-full border bg-[var(--bg-card)] px-4 py-2 text-[11px] font-medium tracking-wide backdrop-blur-sm">

            {site.location}

          </span>

          <span className="border-accent/25 text-text-primary/90 rounded-full border border-dashed bg-accent/[0.05] px-4 py-2 text-[11px] font-medium tracking-wide">

            {site.availability}

          </span>

        </div>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">

          <a

            href="#featured-work"

            className="bg-accent text-bg-deep focus-visible:ring-accent/50 inline-flex min-h-11 w-full items-center justify-center rounded-xl px-7 py-3.5 text-sm font-bold tracking-wide shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset] transition-[box-shadow,transform] hover:shadow-[0_0_32px_var(--glow)] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-deep)] active:scale-[0.98] sm:w-auto"

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

        <p className="text-text-muted mt-5 text-sm">

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


