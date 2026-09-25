import { existsSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import React from "react";
import { renderToFile } from "@react-pdf/renderer";

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
const OUTPUT = join(__dirname, "../public/resume/yatharth-sharma-resume.pdf");

async function main(): Promise<void> {
  const { ResumeDocument } = await import("./ResumeDocument");
  mkdirSync(dirname(OUTPUT), { recursive: true });
  await renderToFile(React.createElement(ResumeDocument), OUTPUT);
  console.log(`Wrote ${OUTPUT}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
