"use client";

import { SectionEyebrow } from "@/components/SectionEyebrow";
import { SectionIntro } from "@/components/SectionIntro";
import { ContactForm } from "@/components/ContactForm";
import { DirectContact } from "@/components/DirectContact";
import { sectionCopy } from "@/lib/content";

export function ContactSection() {
  const { contact } = sectionCopy;

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
            <DirectContact />
          </div>
        </div>
      </div>
    </section>
  );
}
