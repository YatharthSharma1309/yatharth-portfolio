import { Reveal } from "@/components/Reveal";
import { SectionIntro } from "@/components/SectionIntro";
import { ConnectIcon } from "@/components/ConnectIcons";
import { ContactForm } from "@/components/ContactForm";
import { sectionCopy } from "@/lib/content";
import { connectLinks } from "@/lib/connect";

const contactButtonClass =
  "border-border-highlight text-text-primary hover:border-accent/45 hover:text-accent inline-flex min-h-11 w-full max-w-md items-center justify-center gap-2.5 rounded-xl border bg-[var(--bg-card)] px-6 py-4 text-sm font-semibold backdrop-blur-sm transition-colors";

export function ContactSection() {
  const { contact } = sectionCopy;

  const email = connectLinks.find((item) => item.channel === "email");
  const resume = connectLinks.find((item) => item.channel === "resume");
  const social = connectLinks.filter(
    (item) => item.channel !== "email" && item.channel !== "resume",
  );

  return (
    <section
      id="contact"
      className="border-border-subtle scroll-mt-[4.25rem] relative overflow-hidden border-t py-16 sm:py-24 lg:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-35"
        style={{
          background:
            "radial-gradient(ellipse 75% 55% at 50% 100%, rgba(62,232,200,0.12), transparent 62%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionIntro
          eyebrow="Contact"
          title={contact.title}
          description={`${contact.description} ${contact.responseTime}`}
        />

        <div className="mx-auto mt-10 max-w-2xl space-y-12 sm:mt-12">
          <Reveal delay={0.06}>
            <ContactForm />
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <p className="text-accent font-mono mb-5 text-center text-[10px] font-semibold tracking-[0.18em] uppercase">
                Or reach me directly
              </p>
              <div className="flex flex-col items-center gap-4">
                {email ? (
                  <a href={email.href} className={contactButtonClass}>
                    <ConnectIcon channel="email" size={17} />
                    {contact.emailLabel}
                  </a>
                ) : null}

                {resume ? (
                  <a
                    href={resume.href}
                    download={resume.download}
                    className={contactButtonClass}
                  >
                    <ConnectIcon channel="resume" size={17} />
                    {resume.label}
                  </a>
                ) : null}

                {social.map((item) => (
                  <a
                    key={item.channel}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={contactButtonClass}
                  >
                    <ConnectIcon channel={item.channel} size={17} />
                    {item.label}
                  </a>
                ))}
              </div>

              <p className="text-text-muted mt-6 text-center text-sm leading-relaxed">
                Prefer email? Use the button above — it opens your mail client with a pre-filled
                subject line.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
