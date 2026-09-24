"use client";

import { SectionEyebrow } from "@/components/SectionEyebrow";
import { SectionIntro } from "@/components/SectionIntro";
import { ConnectIcon } from "@/components/ConnectIcons";
import { ContactForm } from "@/components/ContactForm";
import { ResumeDownloads } from "@/components/ResumeDownloads";
import { btnPrimary, btnSecondary } from "@/lib/ui-classes";
import { sectionCopy } from "@/lib/content";
import { connectLinks } from "@/lib/connect";

export function ContactSection() {
  const { contact } = sectionCopy;

  const email = connectLinks.find((item) => item.channel === "email");
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
          description={contact.description}
        />
        <p className="text-text-muted mx-auto mt-3 max-w-2xl text-center text-sm">
          {contact.responseTime}
        </p>

        <div className="mx-auto mt-10 max-w-2xl space-y-12 sm:mt-12">
          <ContactForm />

          <div>
            <SectionEyebrow className="mb-5">Or reach me directly</SectionEyebrow>
            <div className="surface-card border-border-subtle mx-auto flex w-full max-w-md flex-col gap-3 rounded-2xl border p-5 sm:p-6">
              {email ? (
                <a
                  href={email.href}
                  className={`${btnPrimary} w-full gap-2.5 px-6 py-3.5 text-center break-words`}
                >
                  <ConnectIcon channel="email" size={17} />
                  {contact.emailLabel}
                </a>
              ) : null}

              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {social.map((item) => (
                  <a
                    key={item.channel}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${btnSecondary} w-full gap-2.5 px-4 py-3 text-center break-words`}
                  >
                    <ConnectIcon channel={item.channel} size={17} />
                    <span className="min-w-0">{item.label}</span>
                  </a>
                ))}
              </div>
              <ResumeDownloads />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
