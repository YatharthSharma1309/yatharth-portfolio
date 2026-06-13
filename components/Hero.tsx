"use client";

import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/lib/content";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const motionProps = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
      };

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
        <motion.p
          {...motionProps}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-accent mb-5 text-[11px] font-semibold tracking-[0.28em] uppercase"
        >
          Full-stack · Software engineering
        </motion.p>
        <motion.h1
          {...(reduceMotion ? {} : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } })}
          transition={{ duration: 0.55, delay: 0.18 }}
          className="text-text-primary max-w-4xl text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.06] font-extrabold tracking-[-0.02em]"
        >
          {site.name.split(" ").slice(0, -1).join(" ")}{" "}
          <span className="text-gradient">
            {site.name.split(" ").slice(-1)[0]}
          </span>
        </motion.h1>
        <motion.p
          {...(reduceMotion ? {} : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } })}
          transition={{ duration: 0.55, delay: 0.28 }}
          className="text-text-primary/90 mt-7 max-w-2xl text-lg leading-relaxed font-medium sm:text-xl"
        >
          {site.role}
        </motion.p>
        <motion.p
          {...(reduceMotion ? {} : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } })}
          transition={{ duration: 0.55, delay: 0.36 }}
          className="text-text-muted mt-4 max-w-2xl text-base leading-[1.7] sm:text-[1.0625rem]"
        >
          {site.tagline}
        </motion.p>
        <motion.div
          {...(reduceMotion ? {} : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } })}
          transition={{ duration: 0.55, delay: 0.44 }}
          className="mt-8 flex flex-wrap gap-2"
        >
          <span className="border-border-highlight text-text-muted rounded-full border bg-[var(--bg-card)] px-4 py-2 text-[11px] font-medium tracking-wide backdrop-blur-sm">
            {site.location}
          </span>
          <span className="border-accent/25 text-text-primary/90 rounded-full border border-dashed bg-accent/[0.05] px-4 py-2 text-[11px] font-medium tracking-wide">
            {site.availability}
          </span>
        </motion.div>
        <motion.div
          {...(reduceMotion ? {} : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } })}
          transition={{ duration: 0.55, delay: 0.52 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="bg-accent text-bg-deep focus-visible:ring-accent/50 inline-flex min-h-11 items-center rounded-xl px-7 py-3.5 text-sm font-bold tracking-wide shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset] transition-[box-shadow,transform] hover:shadow-[0_0_32px_var(--glow)] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-deep)] active:scale-[0.98]"
          >
            Get in touch
          </a>
          <a
            href="#journey"
            className="text-text-muted hover:text-accent inline-flex min-h-11 items-center text-sm font-semibold tracking-wide underline-offset-[6px] transition-colors hover:underline"
          >
            View journey →
          </a>
        </motion.div>
      </div>
      <motion.div
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={reduceMotion ? false : { opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-[1] -translate-x-1/2"
        aria-hidden
      >
        <p className="text-text-muted mb-2 text-center text-[10px] tracking-[0.2em] uppercase sm:sr-only">
          Scroll
        </p>
        <div className="border-border-highlight mx-auto flex h-8 w-5 justify-center rounded-full border pt-1.5 sm:h-10 sm:w-6 sm:pt-2">
          {reduceMotion ? (
            <div className="bg-accent h-2 w-1 rounded-full" />
          ) : (
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="bg-accent h-2 w-1 rounded-full"
            />
          )}
        </div>
      </motion.div>
    </section>
  );
}
