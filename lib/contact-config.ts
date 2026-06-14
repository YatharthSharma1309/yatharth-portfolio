import { site } from "@/lib/content";

export type ContactPayload = {
  name: string;
  email: string;
  companyRole: string;
  message: string;
};

export function getContactConfig() {
  return {
    resendApiKey: process.env.RESEND_API_KEY?.trim() || "",
    toEmail: process.env.CONTACT_TO_EMAIL?.trim() || site.email,
    fromEmail:
      process.env.CONTACT_FROM_EMAIL?.trim() || "Portfolio Contact <onboarding@resend.dev>",
    isDev: process.env.NODE_ENV === "development",
  };
}

export function formatContactEmail(payload: ContactPayload) {
  const { name, email, companyRole, message } = payload;
  const subject = companyRole
    ? `Portfolio inquiry — ${name} (${companyRole})`
    : `Portfolio inquiry — ${name}`;

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    companyRole ? `Company / Role: ${companyRole}` : null,
    "",
    "Message:",
    message,
    "",
    `— Sent via ${site.name} portfolio contact form`,
  ]
    .filter(Boolean)
    .join("\n");

  return { subject, text };
}

export function formatContactEmailHtml(payload: ContactPayload) {
  const { name, email, companyRole, message } = payload;
  const escapedMessage = message
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br />");

  return `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
    ${companyRole ? `<p><strong>Company / Role:</strong> ${companyRole}</p>` : ""}
    <p><strong>Message:</strong></p>
    <p>${escapedMessage}</p>
    <hr />
    <p style="color:#666;font-size:12px;">Sent via portfolio contact form</p>
  `.trim();
}
