import { cpSync, existsSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const apiDir = path.join(root, "app", "api");
const apiBackup = path.join(root, ".gh-pages-api-backup");

function run(command, args, env = {}) {
  const result = spawnSync(command, args, {
    cwd: root,
    stdio: "inherit",
    env: { ...process.env, ...env },
    shell: process.platform === "win32",
  });
  if (result.status !== 0) process.exit(result.status ?? 1);
}

try {
  if (existsSync(apiDir)) {
    rmSync(apiBackup, { recursive: true, force: true });
    cpSync(apiDir, apiBackup, { recursive: true });
    rmSync(apiDir, { recursive: true, force: true });
  }

  run("npm", ["run", "generate:resume"]);
  run("npx", ["next", "build"], {
    GITHUB_PAGES: "true",
    NEXT_PUBLIC_SITE_URL: "https://yatharthsharma1309.github.io",
    NEXT_PUBLIC_STATIC_EXPORT: "true",
  });

  const outDir = path.join(root, "out");
  writeFileSync(path.join(outDir, ".nojekyll"), "");
  mkdirSync(path.join(outDir, ".github"), { recursive: true });
} finally {
  if (existsSync(apiBackup)) {
    rmSync(apiDir, { recursive: true, force: true });
    cpSync(apiBackup, apiDir, { recursive: true });
    rmSync(apiBackup, { recursive: true, force: true });
  }
}

console.log("GitHub Pages build ready in ./out");
