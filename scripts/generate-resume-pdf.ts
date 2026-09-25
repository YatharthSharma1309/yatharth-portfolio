import { existsSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import React from "react";
import { renderToFile, type DocumentProps } from "@react-pdf/renderer";
import {
  defaultResumeVariant,
  parseResumeVariant,
  resumeProfiles,
  type ResumeVariantId,
} from "../lib/resume-variants";

function loadEnvLocal(): void {
  const envPath = join(process.cwd(), ".env.local");
  if (!existsSync(envPath)) return;

  for (const line of readFileSync(envPath, "utf8").split("\n")) {
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

const __dirname = dirname(fileURLToPath(import.meta.url));
const RESUME_DIR = join(__dirname, "../public/resume");

function outputPath(variant: ResumeVariantId): string {
  return join(RESUME_DIR, resumeProfiles[variant].filename);
}

async function renderVariant(variant: ResumeVariantId): Promise<void> {
  const { ResumeDocument } = await import("./ResumeDocument");
  const destination = outputPath(variant);
  mkdirSync(dirname(destination), { recursive: true });
  await renderToFile(
    React.createElement(ResumeDocument, { variant }) as unknown as React.ReactElement<DocumentProps>,
    destination,
  );
  console.log(`Wrote ${destination}`);
}

async function main(): Promise<void> {
  const requested = parseResumeVariant(process.argv[2]);
  const variants: ResumeVariantId[] =
    requested === "all" ? ["fullstack", "ai"] : [requested ?? defaultResumeVariant];

  for (const variant of variants) {
    await renderVariant(variant);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
