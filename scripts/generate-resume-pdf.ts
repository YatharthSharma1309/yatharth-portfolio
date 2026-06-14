import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { PDFDocument, StandardFonts, rgb, type PDFPage, type PDFFont } from "pdf-lib";
import {
  certifications,
  education,
  journey,
  languages,
  portfolioLinks,
  site,
  skillBuilding,
  skillCategories,
} from "../lib/content";
import { formatExternalLabel } from "../lib/format";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT = join(__dirname, "../public/resume/yatharth-sharma-resume.pdf");

const PAGE_WIDTH = 612;
const PAGE_HEIGHT = 792;
const MARGIN = 48;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2;
const BODY_SIZE = 9.5;
const SMALL_SIZE = 8.5;
const LINE_HEIGHT = 12;
const SECTION_GAP = 10;

function sanitize(text: string): string {
  return text
    .replace(/\u2014/g, "-")
    .replace(/\u2013/g, "-")
    .replace(/\u00b7/g, "|")
    .replace(/\u2019/g, "'")
    .replace(/\u201c|\u201d/g, '"');
}

function wrapText(text: string, font: PDFFont, size: number, maxWidth: number): string[] {
  const words = sanitize(text).split(/\s+/);
  const lines: string[] = [];
  let current = "";

  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (font.widthOfTextAtSize(next, size) <= maxWidth) {
      current = next;
    } else {
      if (current) lines.push(current);
      current = word;
    }
  }
  if (current) lines.push(current);
  return lines;
}

type PdfContext = {
  pdf: PDFDocument;
  page: PDFPage;
  y: number;
  regular: PDFFont;
  bold: PDFFont;
};

function ensureSpace(ctx: PdfContext, needed: number): void {
  if (ctx.y - needed >= MARGIN) return;
  ctx.page = ctx.pdf.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
  ctx.y = PAGE_HEIGHT - MARGIN;
}

function drawLines(
  ctx: PdfContext,
  lines: string[],
  size: number,
  font: PDFFont,
  color = rgb(0.12, 0.12, 0.12),
  indent = 0
): void {
  for (const line of lines) {
    ensureSpace(ctx, LINE_HEIGHT);
    ctx.page.drawText(line, {
      x: MARGIN + indent,
      y: ctx.y,
      size,
      font,
      color,
    });
    ctx.y -= LINE_HEIGHT;
  }
}

function drawSectionTitle(ctx: PdfContext, title: string): void {
  ctx.y -= SECTION_GAP;
  ensureSpace(ctx, LINE_HEIGHT + 4);
  ctx.page.drawText(sanitize(title), {
    x: MARGIN,
    y: ctx.y,
    size: 11,
    font: ctx.bold,
    color: rgb(0.05, 0.05, 0.05),
  });
  ctx.y -= LINE_HEIGHT;
  ctx.page.drawLine({
    start: { x: MARGIN, y: ctx.y + 4 },
    end: { x: PAGE_WIDTH - MARGIN, y: ctx.y + 4 },
    thickness: 0.75,
    color: rgb(0.75, 0.75, 0.75),
  });
  ctx.y -= 6;
}

function drawParagraph(ctx: PdfContext, text: string, size = BODY_SIZE, indent = 0): void {
  drawLines(ctx, wrapText(text, ctx.regular, size, CONTENT_WIDTH - indent), size, ctx.regular, undefined, indent);
}

function drawBullets(ctx: PdfContext, items: string[], indent = 12): void {
  for (const item of items) {
    const lines = wrapText(item, ctx.regular, BODY_SIZE, CONTENT_WIDTH - indent - 8);
    lines.forEach((line, index) => {
      ensureSpace(ctx, LINE_HEIGHT);
      if (index === 0) {
        ctx.page.drawText("-", {
          x: MARGIN + 2,
          y: ctx.y,
          size: BODY_SIZE,
          font: ctx.regular,
          color: rgb(0.12, 0.12, 0.12),
        });
      }
      ctx.page.drawText(line, {
        x: MARGIN + indent,
        y: ctx.y,
        size: BODY_SIZE,
        font: ctx.regular,
        color: rgb(0.12, 0.12, 0.12),
      });
      ctx.y -= LINE_HEIGHT;
    });
  }
}

function drawExperience(ctx: PdfContext): void {
  drawSectionTitle(ctx, "EXPERIENCE");
  for (const item of journey) {
    const location =
      item.location && item.location !== "-" && item.location !== "—" ? ` | ${item.location}` : "";
    ensureSpace(ctx, LINE_HEIGHT * 2);
    ctx.page.drawText(sanitize(`${item.title} | ${item.org}`), {
      x: MARGIN,
      y: ctx.y,
      size: BODY_SIZE,
      font: ctx.bold,
      color: rgb(0.05, 0.05, 0.05),
    });
    ctx.y -= LINE_HEIGHT;
    ctx.page.drawText(sanitize(`${item.period}${location}`), {
      x: MARGIN,
      y: ctx.y,
      size: SMALL_SIZE,
      font: ctx.regular,
      color: rgb(0.35, 0.35, 0.35),
    });
    ctx.y -= LINE_HEIGHT;
    if (item.description?.length) {
      drawBullets(ctx, item.description);
    }
    ctx.y -= 4;
  }
}

function drawProjects(ctx: PdfContext): void {
  const projects = portfolioLinks.filter(
    (p) => p.status === "Live" || p.status === "Private"
  );
  drawSectionTitle(ctx, "SELECTED PROJECTS");
  for (const project of projects) {
    ensureSpace(ctx, LINE_HEIGHT * 2);
    ctx.page.drawText(sanitize(project.title), {
      x: MARGIN,
      y: ctx.y,
      size: BODY_SIZE,
      font: ctx.bold,
      color: rgb(0.05, 0.05, 0.05),
    });
    ctx.y -= LINE_HEIGHT;
    const summary = project.description.split(".")[0] + ".";
    drawParagraph(ctx, summary);
    ctx.y -= 2;
  }
}

async function main(): Promise<void> {
  const pdf = await PDFDocument.create();
  const regular = await pdf.embedFont(StandardFonts.Helvetica);
  const bold = await pdf.embedFont(StandardFonts.HelveticaBold);

  const ctx: PdfContext = {
    pdf,
    page: pdf.addPage([PAGE_WIDTH, PAGE_HEIGHT]),
    y: PAGE_HEIGHT - MARGIN,
    regular,
    bold,
  };

  ctx.page.drawText(sanitize(site.name), {
    x: MARGIN,
    y: ctx.y,
    size: 20,
    font: bold,
    color: rgb(0.05, 0.05, 0.05),
  });
  ctx.y -= 24;

  ctx.page.drawText(sanitize(site.role), {
    x: MARGIN,
    y: ctx.y,
    size: 11,
    font: regular,
    color: rgb(0.2, 0.2, 0.2),
  });
  ctx.y -= LINE_HEIGHT + 2;

  const contact = [
    site.location,
    site.email,
    formatExternalLabel(site.linkedin),
    formatExternalLabel(site.github),
  ].join(" | ");
  drawLines(ctx, wrapText(contact, regular, SMALL_SIZE, CONTENT_WIDTH), SMALL_SIZE, regular, rgb(0.35, 0.35, 0.35));

  drawSectionTitle(ctx, "PROFESSIONAL SUMMARY");
  drawParagraph(
    ctx,
    `${site.tagline} ${site.availability}.`
  );

  drawSectionTitle(ctx, "TECHNICAL SKILLS");
  for (const category of skillCategories) {
    ensureSpace(ctx, LINE_HEIGHT * 2);
    ctx.page.drawText(sanitize(`${category.label}:`), {
      x: MARGIN,
      y: ctx.y,
      size: BODY_SIZE,
      font: ctx.bold,
      color: rgb(0.05, 0.05, 0.05),
    });
    ctx.y -= LINE_HEIGHT;
    drawBullets(ctx, [...category.skills]);
  }
  ensureSpace(ctx, LINE_HEIGHT * 2);
  drawParagraph(ctx, "Building depth in:");
  drawBullets(ctx, [...skillBuilding]);

  drawExperience(ctx);
  drawProjects(ctx);

  drawSectionTitle(ctx, "EDUCATION");
  for (const item of education) {
    ensureSpace(ctx, LINE_HEIGHT * 2);
    ctx.page.drawText(sanitize(item.degree), {
      x: MARGIN,
      y: ctx.y,
      size: BODY_SIZE,
      font: bold,
      color: rgb(0.05, 0.05, 0.05),
    });
    ctx.y -= LINE_HEIGHT;
    ctx.page.drawText(sanitize(`${item.school} | ${item.period}`), {
      x: MARGIN,
      y: ctx.y,
      size: SMALL_SIZE,
      font: regular,
      color: rgb(0.35, 0.35, 0.35),
    });
    ctx.y -= LINE_HEIGHT + 2;
  }

  drawSectionTitle(ctx, "CERTIFICATIONS & ACHIEVEMENTS");
  drawBullets(ctx, [...certifications]);

  drawSectionTitle(ctx, "LANGUAGES");
  drawParagraph(ctx, languages.map((l) => `${l.name} (${l.level})`).join(", "));

  mkdirSync(dirname(OUTPUT), { recursive: true });
  const bytes = await pdf.save();
  writeFileSync(OUTPUT, bytes);
  console.log(`Wrote ${OUTPUT} (${bytes.length} bytes)`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
