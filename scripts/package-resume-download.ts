import { copyFileSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const RESUME_DIR = join(ROOT, "public", "resume");

const PDF_NAME = "yatharth-sharma-resume.pdf";
const DOCX_NAME = "Yatharth_Sharma_Premium_Resume_V2.docx";
const ZIP_NAME = "Yatharth-Sharma-Resume-Package.zip";

const DOCX_SOURCES = [
  join(RESUME_DIR, DOCX_NAME),
  join(homedir(), "Downloads", DOCX_NAME),
];

const DOWNLOADS = join(homedir(), "Downloads");

function ensureResumeAssets(): void {
  mkdirSync(RESUME_DIR, { recursive: true });

  console.log("Generating PDF from portfolio content...");
  execSync("npm run generate:resume", {
    cwd: ROOT,
    stdio: "inherit",
    env: {
      ...process.env,
      NEXT_PUBLIC_SITE_URL:
        process.env.NEXT_PUBLIC_SITE_URL ?? "https://yatharthsharma.vercel.app",
    },
  });

  if (!existsSync(join(RESUME_DIR, PDF_NAME))) {
    throw new Error(`PDF not found after generation: ${PDF_NAME}`);
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

function createZip(): void {
  const zipPath = join(RESUME_DIR, ZIP_NAME);
  const staging = join(RESUME_DIR, "_package-staging");
  if (existsSync(staging)) rmSync(staging, { recursive: true, force: true });
  mkdirSync(staging, { recursive: true });

  const stagedPdf = join(staging, PDF_NAME);
  const stagedDocx = join(staging, DOCX_NAME);
  writeFileSync(stagedPdf, readFileSync(join(RESUME_DIR, PDF_NAME)));
  writeFileSync(stagedDocx, readFileSync(join(RESUME_DIR, DOCX_NAME)));

  if (existsSync(zipPath)) rmSync(zipPath, { force: true });

  if (process.platform === "win32") {
    execSync(
      `powershell -NoProfile -Command "Compress-Archive -Path '${stagedPdf}','${stagedDocx}' -DestinationPath '${zipPath}' -Force"`,
      { stdio: "inherit" },
    );
  } else {
    execSync(`zip -j "${zipPath}" "${stagedPdf}" "${stagedDocx}"`, {
      stdio: "inherit",
    });
  }

  rmSync(staging, { recursive: true, force: true });
  console.log(`Created ${zipPath}`);
}

function copyToDownloads(): void {
  mkdirSync(DOWNLOADS, { recursive: true });

  const files = [PDF_NAME, DOCX_NAME, ZIP_NAME];
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
  createZip();
  if (!process.env.VERCEL) {
    copyToDownloads();
  }

  console.log("\nDownloadable resume files ready:");
  console.log(`  PDF:  ${join(RESUME_DIR, PDF_NAME)}`);
  console.log(`  DOCX: ${join(RESUME_DIR, DOCX_NAME)}`);
  console.log(`  ZIP:  ${join(RESUME_DIR, ZIP_NAME)}`);
  if (!process.env.VERCEL) {
    console.log(`\nSite paths (after deploy):`);
    console.log(`  /resume/${PDF_NAME}`);
    console.log(`  /resume/${DOCX_NAME}`);
    console.log(`  /resume/${ZIP_NAME}`);
  }
}

main();
