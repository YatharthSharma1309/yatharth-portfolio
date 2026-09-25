import { ContactForm } from "@/components/ContactForm";
import { DirectContact } from "@/components/DirectContact";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { SectionIntro } from "@/components/SectionIntro";
import { freelanceOffer, site } from "@/lib/content";
import { getDemoUrl } from "@/lib/demo-urls";
import { hirePageNav } from "@/lib/navigation";
import { btnPrimary, btnSecondary, cardHeading, labelMono, sectionHeading } from "@/lib/ui-classes";

function whatsappHref(text: string) {
  return `https://wa.me/${site.phone.replace(/\D/g, "")}?text=${encodeURIComponent(text)}`;
}

export function HirePageContent() {
  const demoBase = getDemoUrl("opsConcierge") ?? "https://support-ai-nine-mu.vercel.app";
  const hiringDemo = `${demoBase}${freelanceOffer.demoHiringPath}`;
  const widgetDemo = `${demoBase}${freelanceOffer.demoWidgetPath}`;
  const whatsapp = whatsappHref(freelanceOffer.whatsappText);

  return (
    <>
      <section id="top" className="border-border-subtle relative border-b py-16 sm:py-20">
        <div className="section-glow-top pointer-events-none absolute inset-0 opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
          <SectionEyebrow className="mb-4">{freelanceOffer.eyebrow}</SectionEyebrow>
          <p className="text-text-primary/90 text-sm font-semibold tracking-tight sm:text-base">
            {freelanceOffer.kicker}
          </p>
          <h1 className={`${sectionHeading} mt-3`}>
            {freelanceOffer.title}
          </h1>
          <p className="text-text-muted mx-auto mt-5 max-w-2xl text-base leading-[1.65]">
            {freelanceOffer.lede}
          </p>
          <p className="text-text-primary/90 mx-auto mt-4 max-w-2xl text-sm leading-relaxed sm:text-base">
            {freelanceOffer.pitch}
          </p>
          <p className="text-text-muted mx-auto mt-4 max-w-xl text-xs leading-relaxed sm:text-sm">
            {freelanceOffer.identityNote}
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
            <a
              href={hiringDemo}
              target="_blank"
              rel="noopener noreferrer"
              className={`${btnPrimary} w-full max-w-xs sm:w-auto`}
            >
              {freelanceOffer.demoLabel}
            </a>
            <a href="#contact" className={`${btnSecondary} w-full max-w-xs sm:w-auto`}>
              {freelanceOffer.walkthroughLabel}
            </a>
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={`${btnSecondary} w-full max-w-xs sm:w-auto`}
            >
              {freelanceOffer.whatsappLabel}
            </a>
          </div>
          <ul className="text-text-muted mx-auto mt-8 flex max-w-2xl flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs">
            {freelanceOffer.proof.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-text-muted mt-4 text-xs">
            Hiring lane ·{" "}
            <a
              href={widgetDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              support widget
            </a>
            {" · "}
            <a href="/#portfolio" className="text-accent hover:underline">
              full portfolio
            </a>
          </p>
        </div>
      </section>

      <nav
        className="border-border-subtle bg-bg-deep/85 sticky top-[4.25rem] z-30 hidden border-b shadow-[0_6px_20px_rgba(15,23,42,0.05)] backdrop-blur-xl md:block"
        aria-label="On this page"
      >
        <ul className="mx-auto flex max-w-6xl items-center justify-center gap-1 px-5 py-2 sm:px-8">
          {hirePageNav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-text-muted hover:text-text-primary block rounded-lg px-3 py-2 text-xs font-medium tracking-normal transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <section id="problems" className="border-border-subtle scroll-mt-32 border-b py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionIntro
            eyebrow="Problems"
            title="Why enquiries and CVs stall"
            description="Most firms do not need another portal. They need fewer repeated answers and a shortlist they can defend."
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {freelanceOffer.problems.map((item) => (
              <li
                key={item.title}
                className="surface-card border-border-subtle rounded-2xl border p-5 sm:p-6"
              >
                <h2 className={cardHeading}>{item.title}</h2>
                <p className="text-text-muted mt-2 text-sm leading-relaxed">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="desk" className="border-border-subtle scroll-mt-32 border-b py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionIntro
            eyebrow="What you get"
            title="Four things the desk does"
            description="This is the live OpsConcierge demo, customized for your FAQs and jobs — not a new product I would spend months building first."
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {freelanceOffer.howItWorks.map((item) => (
              <li
                key={item.step}
                className="surface-card border-border-subtle rounded-2xl border p-5 sm:p-6"
              >
                <p className={labelMono}>{item.step}</p>
                <h2 className={`${cardHeading} mt-2`}>{item.title}</h2>
                <p className="text-text-muted mt-2 text-sm leading-relaxed">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="fit" className="border-border-subtle scroll-mt-32 border-b py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionIntro
            eyebrow="Fit"
            title="Who this is for"
            description="Owner-led firms who can say yes on a call. Not TCS, banks, or government tenders."
          />
          <ul className="mx-auto mt-10 max-w-2xl space-y-3">
            {freelanceOffer.who.map((line) => (
              <li
                key={line}
                className="text-text-primary border-border-subtle rounded-xl border px-4 py-3 text-sm leading-relaxed"
              >
                {line}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="outcomes" className="border-border-subtle scroll-mt-32 border-b py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionIntro
            eyebrow="Outcomes"
            title="What you should expect"
            description="Practical gains from a working desk. I do not invent view counts, ATS scores, or placement rates."
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {freelanceOffer.outcomes.map((item) => (
              <li
                key={item.title}
                className="surface-card border-border-subtle rounded-2xl border p-5 sm:p-6"
              >
                <h2 className={cardHeading}>{item.title}</h2>
                <p className="text-text-muted mt-2 text-sm leading-relaxed">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="pricing" className="border-border-subtle scroll-mt-32 border-b py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionIntro
            eyebrow="Starting prices"
            title="What it costs to start"
            description="Bands to test, not a promise the market will pay. Final quote after discovery. GST if a CA says it applies."
          />
          <ul className="mt-10 grid gap-4 lg:grid-cols-3">
            {freelanceOffer.menu.map((item) => (
              <li
                key={item.name}
                className="surface-card border-border-subtle flex flex-col rounded-2xl border p-5 sm:p-6"
              >
                <h2 className={cardHeading}>{item.name}</h2>
                <p className="text-text-muted mt-2 text-sm leading-relaxed">{item.when}</p>
                <p className="text-text-primary mt-4 text-sm font-semibold">{item.band}</p>
                <p className="text-text-muted mt-1 text-sm leading-relaxed">{item.retain}</p>
                <a href="#contact" className={`${btnSecondary} mt-6 w-full`}>
                  {freelanceOffer.walkthroughLabel}
                </a>
              </li>
            ))}
          </ul>
          <div className="mx-auto mt-10 grid max-w-4xl gap-8 sm:grid-cols-2">
            <div>
              <h3 className={`${cardHeading} text-base sm:text-base`}>How we work</h3>
              <ol className="text-text-muted mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed">
                {freelanceOffer.process.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </div>
            <div>
              <h3 className={`${cardHeading} text-base sm:text-base`}>Not included</h3>
              <ul className="text-text-muted mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed">
                {freelanceOffer.notIncluded.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="border-border-subtle scroll-mt-32 border-b py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <SectionIntro
            eyebrow="FAQ"
            title="Before you book a walkthrough"
            description="Short answers so you know what I will and will not do."
          />
          <ul className="mt-10 space-y-3">
            {freelanceOffer.faq.map((item) => (
              <li
                key={item.q}
                className="border-border-subtle overflow-hidden rounded-xl border"
              >
                <details className="group">
                  <summary className="text-text-primary cursor-pointer list-none px-4 py-4 text-sm font-semibold sm:px-5">
                    <span className="flex items-center justify-between gap-4">
                      {item.q}
                      <span className="text-accent text-lg leading-none group-open:hidden" aria-hidden>
                        +
                      </span>
                      <span className="text-accent hidden text-lg leading-none group-open:inline" aria-hidden>
                        −
                      </span>
                    </span>
                  </summary>
                  <p className="text-text-muted border-border-subtle border-t px-4 py-4 text-sm leading-relaxed sm:px-5">
                    {item.a}
                  </p>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact" className="relative scroll-mt-32 overflow-hidden py-16 sm:py-24">
        <div className="section-glow-bottom pointer-events-none absolute inset-0 opacity-35" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <SectionIntro
            eyebrow="Next step"
            title={freelanceOffer.contactTitle}
            description={freelanceOffer.contactDescription}
          />
          <div className="mx-auto mt-10 max-w-2xl space-y-12">
            <ContactForm variant="client" />
            <div>
              <SectionEyebrow className="mb-5">Or reach me directly</SectionEyebrow>
              <DirectContact variant="hire" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-border-subtle border-t py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <h2 className={sectionHeading}>{freelanceOffer.closingTitle}</h2>
          <p className="text-text-muted mx-auto mt-4 max-w-xl text-base leading-[1.65]">
            {freelanceOffer.closingBody}
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href={hiringDemo}
              target="_blank"
              rel="noopener noreferrer"
              className={`${btnPrimary} w-full max-w-xs sm:w-auto`}
            >
              {freelanceOffer.demoLabel}
            </a>
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={`${btnSecondary} w-full max-w-xs sm:w-auto`}
            >
              {freelanceOffer.whatsappLabel}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
