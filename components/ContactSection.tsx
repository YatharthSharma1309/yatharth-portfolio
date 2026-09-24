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
      <div className="page-gutter relative mx-auto max-w-6xl">
        <SectionIntro
          eyebrow="Contact"
          title={contact.title}
          description={contact.description}
        />
        <p className="text-text-muted mx-auto mt-3 max-w-2xl text-center text-sm">
          {contact.responseTime}
        </p>

        <div className="mx-auto mt-10 grid max-w-2xl gap-10 sm:mt-12 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-8">
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
