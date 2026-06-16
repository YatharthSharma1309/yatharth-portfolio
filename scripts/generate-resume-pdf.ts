import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import React from "react";
import { renderToFile } from "@react-pdf/renderer";
import { ResumeDocument } from "./ResumeDocument";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT = join(__dirname, "../public/resume/yatharth-sharma-resume.pdf");

async function main(): Promise<void> {
  mkdirSync(dirname(OUTPUT), { recursive: true });
  await renderToFile(React.createElement(ResumeDocument), OUTPUT);
  console.log(`Wrote ${OUTPUT}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
