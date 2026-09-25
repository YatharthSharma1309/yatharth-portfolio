import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { homedir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const RESUME_DIR = join(ROOT, "public", "resume");

const PDF_NAME = "yatharth-sharma-resume.pdf";
const PDF_AI_NAME = "yatharth-sharma-resume-ai.pdf";
const DOCX_NAME = "Yatharth_Sharma_Premium_Resume_V2.docx";

const DOCX_SOURCES = [
  join(RESUME_DIR, DOCX_NAME),
  join(homedir(), "Downloads", DOCX_NAME),
];

const DOWNLOADS = join(homedir(), "Downloads");

function ensureResumeAssets(): void {
  mkdirSync(RESUME_DIR, { recursive: true });

  console.log("Generating Software Engineer and AI/GenAI resume PDFs...");
  execSync("npx tsx scripts/generate-resume-pdf.ts all", {
    cwd: ROOT,
    stdio: "inherit",
    env: {
      ...process.env,
      NEXT_PUBLIC_SITE_URL:
        process.env.NEXT_PUBLIC_SITE_URL ?? "https://yatharthsharma.vercel.app",
    },
  });

  for (const name of [PDF_NAME, PDF_AI_NAME]) {
    if (!existsSync(join(RESUME_DIR, name))) {
      throw new Error(`PDF not found after generation: ${name}`);
    }
  }

  if (!existsSync(join(RESUME_DIR, DOCX_NAME))) {
    const source = DOCX_SOURCES.find((path) => existsSync(path));
    if (!source) {
      throw new Error(
        `DOCX not found. Place ${DOCX_NAME} in public/resume or Downloads.`,
      );
    }
    copyFileSync(source, join(RESUME_DIR, DOCX_NAME));
    console.log(`Copied DOCX from ${source}`);
  }
}

function copyToDownloads(): void {
  mkdirSync(DOWNLOADS, { recursive: true });

  const files = [PDF_NAME, PDF_AI_NAME];
  for (const file of files) {
    const from = join(RESUME_DIR, file);
    const to = join(DOWNLOADS, file);
    try {
      copyFileSync(from, to);
      console.log(`Copied to ${to}`);
    } catch (error) {
      const code = (error as NodeJS.ErrnoException).code;
      if (code === "EBUSY" || code === "EPERM") {
        const alt = join(
          DOWNLOADS,
          file.replace(/(\.[^.]+)$/, "_portfolio$1"),
        );
        copyFileSync(from, alt);
        console.warn(`Target locked (${file}). Copied to ${alt}`);
        continue;
      }
      throw error;
    }
  }
}

function main(): void {
  ensureResumeAssets();
  const shouldCopyToDownloads = process.env.COPY_RESUME_TO_DOWNLOADS === "true";
  if (shouldCopyToDownloads) {
    copyToDownloads();
  }

  console.log("\nDownloadable resume files ready:");
  console.log(`  PDF (SWE): ${join(RESUME_DIR, PDF_NAME)}`);
  console.log(`  PDF (AI):  ${join(RESUME_DIR, PDF_AI_NAME)}`);
  console.log(`\nSite paths (after deploy):`);
  console.log(`  /resume/${PDF_NAME}`);
  console.log(`  /resume/${PDF_AI_NAME}`);
}

main();
