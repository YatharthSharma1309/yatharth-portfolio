import { Resend } from "resend";
import {
  formatContactEmail,
  formatContactEmailHtml,
  getContactConfig,
  type ContactPayload,
} from "@/lib/contact-config";
import { logContactSubmission } from "@/lib/contact-submissions-log";
import { createRateLimiter, getClientIp } from "@/lib/rate-limit";

const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const isRateLimited = createRateLimiter(RATE_LIMIT_MAX, RATE_LIMIT_WINDOW_MS);

type ContactBody = {
  name?: string;
  email?: string;
  companyRole?: string;
  message?: string;
};

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function sanitizeField(value: string, maxLength: number): string {
  return value.trim().slice(0, maxLength);
}

function parsePayload(body: ContactBody): ContactPayload | { error: string } {
  const name = sanitizeField(body.name ?? "", 100);
  const email = sanitizeField(body.email ?? "", 254);
  const companyRole = sanitizeField(body.companyRole ?? "", 200);
  const message = sanitizeField(body.message ?? "", 5000);

  if (!name) return { error: "Name is required." };
  if (!email || !isValidEmail(email)) return { error: "A valid email is required." };
  if (message.length < 10) return { error: "Message must be at least 10 characters." };

  return { name, email, companyRole, message };
}

async function sendViaResend(payload: ContactPayload) {
  const { resendApiKey, toEmail, fromEmail } = getContactConfig();
  const { subject, text } = formatContactEmail(payload);
  const html = formatContactEmailHtml(payload);
  const resend = new Resend(resendApiKey);
  return resend.emails.send({
    from: fromEmail,
    to: toEmail,
    replyTo: payload.email,
    subject,
    text,
    html,
  });
}

export async function POST(request: Request) {
  try {
    const clientIp = getClientIp(request);
    if (isRateLimited(clientIp)) {
      return Response.json(
        { error: "Too many messages. Please try again in an hour or email directly." },
        { status: 429 },
      );
    }

    const body = (await request.json()) as ContactBody;
    const parsed = parsePayload(body);
    if ("error" in parsed) {
      return Response.json({ error: parsed.error }, { status: 400 });
    }

    const { resendApiKey, isDev } = getContactConfig();

    if (resendApiKey) {
      const { error } = await sendViaResend(parsed);
      if (error) {
        return Response.json(
          { error: "Could not send your message. Please try the email link below." },
          { status: 502 },
        );
      }
      return Response.json({ ok: true, delivery: "email" });
    }

    if (isDev) {
      await logContactSubmission(parsed);
      return Response.json({
        ok: true,
        delivery: "local",
        message:
          "Saved locally (no RESEND_API_KEY). Add your key to .env.local to receive emails.",
      });
    }

    return Response.json(
      {
        error:
          "Contact form is not configured yet. Please use the email link below, or add RESEND_API_KEY in Vercel.",
      },
      { status: 503 },
    );
  } catch {
    return Response.json({ error: "Unexpected server error." }, { status: 500 });
  }
}
