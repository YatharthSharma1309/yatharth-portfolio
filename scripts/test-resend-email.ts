/**
 * Verify Resend is configured. Loads .env.local automatically (Node 20+).
 *
 * Usage: npm run test:resend
 *
 * Replace re_xxxxxxxxx in .env.local with your real key from https://resend.com/api-keys
 */
import { readFileSync, existsSync } from "node:fs";
import path from "node:path";
import { Resend } from "resend";

function loadEnvLocal() {
  const envPath = path.join(process.cwd(), ".env.local");
  if (!existsSync(envPath)) return;

  const lines = readFileSync(envPath, "utf8").split("\n");
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const value = trimmed.slice(eq + 1).trim();
    if (!(key in process.env)) process.env[key] = value;
  }
}

loadEnvLocal();

const apiKey = process.env.RESEND_API_KEY?.trim();

if (!apiKey || apiKey === "re_xxxxxxxxx") {
  console.error(
    "Missing RESEND_API_KEY. Add your real key to .env.local (replace re_xxxxxxxxx).",
  );
  console.error("Get one at https://resend.com/api-keys");
  process.exit(1);
}

const toEmail = process.env.CONTACT_TO_EMAIL?.trim() || "yatharthsharma1309@gmail.com";
const fromEmail = process.env.CONTACT_FROM_EMAIL?.trim() || "onboarding@resend.dev";

const resend = new Resend(apiKey);

async function main() {
  const { data, error } = await resend.emails.send({
    from: fromEmail.includes("<") ? fromEmail : `Portfolio <${fromEmail}>`,
    to: toEmail,
    subject: "Hello World",
    html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
    text: "Congrats on sending your first email!",
  });

  if (error) {
    console.error("Resend error:", error);
    process.exit(1);
  }

  console.log("Email sent successfully. ID:", data?.id);
  console.log("To:", toEmail);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
