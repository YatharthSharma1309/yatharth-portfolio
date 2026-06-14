import { SectionEyebrow } from "@/components/SectionEyebrow";
import { SectionIntro } from "@/components/SectionIntro";
import { ConnectIcon } from "@/components/ConnectIcons";
import { ContactForm } from "@/components/ContactForm";
import { btnSecondary } from "@/lib/ui-classes";
import { sectionCopy } from "@/lib/content";
import { connectLinks } from "@/lib/connect";

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
        className="section-glow-bottom pointer-events-none absolute inset-0 opacity-35"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionIntro
          eyebrow="Contact"
          title={contact.title}
          description={`${contact.description} ${contact.responseTime}`}
        />

        <div className="mx-auto mt-10 max-w-2xl space-y-12 sm:mt-12">
          <ContactForm />

          <div>
            <SectionEyebrow className="mb-5">Or reach me directly</SectionEyebrow>
            <div className="flex flex-col items-center gap-4">
              {email ? (
                <a href={email.href} className={`${btnSecondary} w-full max-w-md gap-2.5 px-6 py-4 text-center break-words`}>
                  <ConnectIcon channel="email" size={17} />
                  {contact.emailLabel}
                </a>
              ) : null}

              {resume ? (
                <a
                  href={resume.href}
                  download={resume.download}
                  className={`${btnSecondary} w-full max-w-md gap-2.5 px-6 py-4 text-center break-words`}
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
                  className={`${btnSecondary} w-full max-w-md gap-2.5 px-6 py-4 text-center break-words`}
                >
                  <ConnectIcon channel={item.channel} size={17} />
                  <span className="min-w-0">{item.label}</span>
                </a>
              ))}
            </div>

            <p className="text-text-muted mt-6 text-center text-sm leading-relaxed">
              Prefer email? Use the button above — it opens your mail client with a pre-filled
              subject line.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
