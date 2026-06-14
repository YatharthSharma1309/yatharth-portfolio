"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { submitContactForm } from "@/lib/contact-submit";

type FormState = "idle" | "submitting" | "success" | "error";

const inputClass =
  "border-border-highlight bg-bg-card text-text-primary placeholder:text-text-muted/70 focus:border-accent/50 focus:ring-accent/25 w-full rounded-xl border px-4 py-3 text-sm transition-[border-color,box-shadow] focus:ring-2 focus:outline-none";

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
        className="surface-card border-accent/25 rounded-2xl border p-8"
        role="status"
        aria-live="polite"
      >
        <p className="text-accent font-display text-lg font-bold">Message sent</p>
        <p className="text-text-muted mt-2 text-sm leading-relaxed">{successNote}</p>
        <button
          type="button"
          onClick={() => {
            setFormState("idle");
            setSuccessNote("");
          }}
          className="text-accent hover:text-text-primary mt-5 text-sm font-semibold underline-offset-2 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="text-text-primary mb-2 block text-sm font-medium">
            Name <span className="text-accent">*</span>
          </label>
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
        <div>
          <label htmlFor="contact-email" className="text-text-primary mb-2 block text-sm font-medium">
            Email <span className="text-accent">*</span>
          </label>
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
        <label
          htmlFor="contact-company"
          className="text-text-primary mb-2 block text-sm font-medium"
        >
          Company / Role <span className="text-text-muted text-xs font-normal">(optional)</span>
        </label>
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

      <div>
        <label htmlFor="contact-message" className="text-text-primary mb-2 block text-sm font-medium">
          Message <span className="text-accent">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          minLength={10}
          disabled={formState === "submitting"}
          className={`${inputClass} resize-y min-h-[140px]`}
          placeholder="Tell me about the role, team, or what you'd like to discuss..."
        />
      </div>

      {formState === "error" && errorMessage ? (
        <p className="text-accent-warm text-sm font-medium" role="alert" aria-live="assertive">
          {errorMessage}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={formState === "submitting"}
        className="bg-accent text-bg-deep focus-visible:ring-accent/50 inline-flex min-h-11 w-full items-center justify-center rounded-xl px-8 py-3.5 text-sm font-bold tracking-wide shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset] transition-[box-shadow,transform,opacity] hover:shadow-[0_0_32px_var(--glow)] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-deep)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {formState === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
