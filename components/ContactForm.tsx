"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { submitContactForm } from "@/lib/contact-submit";
import { alertError, btnPrimary } from "@/lib/ui-classes";

type FormState = "idle" | "submitting" | "success" | "error";

const fieldWrap =
  "border-border-highlight focus-within:border-accent/45 focus-within:shadow-[0_0_0_1px_rgba(62,232,200,0.12)] rounded-xl border bg-[rgba(0,0,0,0.22)] transition-[border-color,box-shadow]";

const inputClass =
  "text-text-primary placeholder:text-text-muted/70 w-full bg-transparent px-4 py-3 text-sm outline-none disabled:cursor-not-allowed disabled:opacity-60";

function FieldLabel({
  htmlFor,
  children,
  optional,
}: {
  htmlFor: string;
  children: React.ReactNode;
  optional?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="text-text-primary mb-2 block text-xs font-semibold tracking-wide"
    >
      {children}
      {optional ? (
        <span className="text-text-muted ml-1.5 font-normal">(optional)</span>
      ) : (
        <span className="text-accent ml-0.5" aria-hidden>
          *
        </span>
      )}
    </label>
  );
}

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [successNote, setSuccessNote] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (formState === "submitting") return;

    setFormState("submitting");
    setErrorMessage("");
    setSuccessNote("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      companyRole: String(data.get("companyRole") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    try {
      const result = await submitContactForm(payload);

      if (!result.ok) {
        setFormState("error");
        setErrorMessage(
          result.error ?? "Something went wrong. Please try again.",
        );
        return;
      }

      setFormState("success");
      form.reset();
      setSuccessNote(
        result.delivery === "local"
          ? "Saved locally for development. Add RESEND_API_KEY to .env.local to receive emails."
          : "Thanks for reaching out. I typically respond within 2 business days.",
      );
      trackEvent("contact_form_submit", {
        status: "success",
        delivery: result.delivery ?? "email",
      });
    } catch {
      setFormState("error");
      setErrorMessage("Network error. Please try again or use the email link.");
    }
  }

  if (formState === "success") {
    return (
      <div
        className="surface-card border-accent/25 rounded-2xl border p-8 text-center sm:p-10"
        role="status"
        aria-live="polite"
      >
        <span
          className="bg-accent/15 text-accent mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full"
          aria-hidden
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 12.5l4.5 4.5L19 7.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <p className="text-accent font-display text-xl font-bold">Message sent</p>
        <p className="text-text-muted mx-auto mt-2 max-w-sm text-sm leading-relaxed">
          {successNote}
        </p>
        <button
          type="button"
          onClick={() => {
            setFormState("idle");
            setSuccessNote("");
          }}
          className="text-accent hover:text-text-primary mt-6 text-sm font-semibold underline-offset-2 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="surface-card border-border-subtle overflow-hidden rounded-2xl border">
      <div className="border-border-subtle border-b px-6 py-5 text-center sm:px-8 sm:py-6">
        <p className="text-accent font-mono text-[10px] font-semibold tracking-[0.18em] uppercase">
          Send a message
        </p>
        <p className="text-text-muted mt-2 text-sm leading-relaxed">
          Share a role, team, or question — I&apos;ll get back to you by email.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 px-6 py-6 sm:px-8 sm:py-7" noValidate>
        <div className="space-y-5">
          <div>
            <FieldLabel htmlFor="contact-name">Name</FieldLabel>
            <div className={fieldWrap}>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                disabled={formState === "submitting"}
                className={inputClass}
                placeholder="Your name"
              />
            </div>
          </div>

          <div>
            <FieldLabel htmlFor="contact-email">Email</FieldLabel>
            <div className={fieldWrap}>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                disabled={formState === "submitting"}
                className={inputClass}
                placeholder="you@company.com"
              />
            </div>
          </div>

          <div>
            <FieldLabel htmlFor="contact-company" optional>
              Company / Role
            </FieldLabel>
            <div className={fieldWrap}>
              <input
                id="contact-company"
                name="companyRole"
                type="text"
                autoComplete="organization"
                disabled={formState === "submitting"}
                className={inputClass}
                placeholder="Acme Corp · Hiring manager"
              />
            </div>
          </div>

          <div>
            <FieldLabel htmlFor="contact-message">Message</FieldLabel>
            <div className={fieldWrap}>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                minLength={10}
                disabled={formState === "submitting"}
                className={`${inputClass} resize-y min-h-[148px] leading-relaxed`}
                placeholder="Tell me about the role, team, or what you'd like to discuss..."
              />
            </div>
          </div>
        </div>

        {formState === "error" && errorMessage ? (
          <p className={alertError} role="alert" aria-live="assertive">
            {errorMessage}
          </p>
        ) : null}

        <div className="border-border-subtle border-t pt-5">
          <button
            type="submit"
            disabled={formState === "submitting"}
            className={`${btnPrimary} w-full`}
          >
            {formState === "submitting" ? "Sending…" : "Send message"}
          </button>
          <p className="text-text-muted/75 mt-3 text-center text-[11px] leading-relaxed">
            Required fields are marked with <span className="text-accent">*</span>. Typically
            reply within 2 business days.
          </p>
        </div>
      </form>
    </div>
  );
}
