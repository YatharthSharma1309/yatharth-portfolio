import { mkdir, appendFile } from "node:fs/promises";
import path from "node:path";
import type { ContactPayload } from "@/lib/contact-config";

const LOG_DIR = path.join(process.cwd(), "data");
const LOG_FILE = path.join(LOG_DIR, "contact-submissions.jsonl");

export async function logContactSubmission(payload: ContactPayload) {
  await mkdir(LOG_DIR, { recursive: true });
  const entry = {
    receivedAt: new Date().toISOString(),
    ...payload,
  };
  await appendFile(LOG_FILE, `${JSON.stringify(entry)}\n`, "utf8");
}

export function getContactLogPath() {
  return LOG_FILE;
}
