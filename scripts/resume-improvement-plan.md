# Resume PDF — Analysis & Improvement Plan

**Baseline preserved in:** `ResumeDocument.tsx` (current source of truth)
**Working file:** `ResumeDocument.tsx`  
**Generated output:** `public/resume/yatharth-sharma-resume.pdf`

---

## Current state (after color, font, and cert fixes)

| Area | Status |
|------|--------|
| Color theme | Teal palette aligned with portfolio |
| Font sizes | Bumped for readability (10pt base) |
| Certifications | All 9 listed in 2-column bullets |
| Page count | 2 pages |
| Content source | `lib/content.ts` (single source of truth) |

---

## Analysis — what can still improve

### 1. Page 2 has no identity header (High)
When printed, page 2 starts with "Featured Projects" with no name or contact. Recruiters reviewing printed stacks may lose context.

**Fix:** Slim continuation bar on page 2 — name + role + email.

### 2. Experience dates buried under role (Medium)
Org, role, then period on separate lines. Standard resume pattern puts **dates right-aligned** beside company name for faster scanning.

**Fix:** Row layout — org left, period right; role + location on second line.

### 3. Contact block uses 3 lines (Low)
Header contact is split across three rows. Consolidating to two rows saves vertical space on page 1.

**Fix:** Line 1: location · phone · email. Line 2: Portfolio · LinkedIn · GitHub.

### 4. Skills are a single tall column (Medium)
Seven skill categories stack vertically, pushing experience lower on page 1.

**Fix:** Two-column skills grid (4 left / 3 right).

### 5. Project bullets are verbose (Medium)
`projectBullets()` renders **problem + result** (2 bullets each) plus separate demo/GitHub link lines — 4 lines per project. Content already defines `resumeBullets` with compact link text but the PDF ignores it.

**Fix:** Use `result` only + `resumeBullets` when present; drop problem statement from PDF.

### 6. Education layout (Low — optional)
Degrees could mirror experience with dates right-aligned. Deferred unless page balance needs it.

### 7. Cert issuer grouping (Low — optional)
Microsoft Azure trio could get a "Microsoft Azure" sub-label. Current 2-column list is acceptable.

---

## Implementation plan (separate changes)

| Step | Change | File(s) | Risk |
|------|--------|---------|------|
| 1 | Page 2 continuation header | `ResumeDocument.tsx` | None |
| 2 | Experience entry header row | `ResumeDocument.tsx` | None |
| 3 | Consolidate contact lines | `ResumeDocument.tsx` | None |
| 4 | Skills two-column layout | `ResumeDocument.tsx` | Watch page-1 overflow |
| 5 | Leaner project bullets | `ResumeDocument.tsx` | Reduces page-2 height |

After each step: run `npm run generate:resume` and verify 2-page fit.

---

## Implementation status

| Step | Change | Status |
|------|--------|--------|
| 1 | Page 2 continuation header | Done |
| 2 | Experience entry header row (org + period) | Done |
| 3 | Consolidate contact lines (2 rows) | Done |
| 4 | Skills two-column layout | Done |
| 5 | Leaner project bullets (`resumeBullets`) | Done |

Verified: PDF remains **2 pages** after all changes.

---

## Out of scope (content, not layout)

- Adding cert issue dates / credential IDs (need data from user)
- Including Honeywell or Arctic Innovage roles (`resume: false` in content — intentional)
- DOCX resume sync (`Yatharth_Sharma_Premium_Resume_V2.docx` is separate asset)

---

## Phase 2 — Web research (2026 ATS + AI engineer guides)

Sources: [DevelopersMatrix ATS 2026](https://developersmatrix.com/blog/ats-resume-guide-2026), [InterviewQuery AI Engineer Resume](https://www.interviewquery.com/p/ai-engineer-resume), [Turquoise AI Engineer Resume](https://turquoisetailoring.com/how-to-write-an-ai-engineer-resume), [cvmark.io SE Resume 2026](https://www.cvmark.io/blog/software-engineer-resume-examples)

### What recruiters / ATS expect in 2026

| Signal | Your resume before | Recommendation |
|--------|-------------------|----------------|
| Single-column body text | Skills + certs were 2-column | Revert to single-column for ATS parsing |
| Standard section headings | "Experience", "Featured Projects" | Use "Work Experience", "Projects", separate "Education" / "Certifications" |
| Keyword density | Skills only in categories | Add flat `resumeSkillKeywords` line for ATS |
| Quantified bullets | Some ("8+ features") | Strong — add more metrics when you have real numbers |
| Summary redundancy | "Open to full-time" in header + summary | Remove from summary; keep in header only |
| Named AI stack | Good (RAG, OpenRouter, FastAPI) | Keep naming tools explicitly in bullets |
| Page length | 2 pages (~3 yrs experience) | Acceptable with 2 live projects + 9 certs; 1 page is ideal under 5 yrs but not required |
| Fancy layout risk | Colored header, entry cards | OK for human PDF; text is selectable. Avoid tables/text-boxes (none used) |
| File format | Text-based PDF | Passes highlight test ✓ |

### Phase 2 changes applied

| Step | Change | Status |
|------|--------|--------|
| 6 | ATS keyword strip under Technical Skills | Done |
| 7 | Standard section headings (Work Experience, Projects, etc.) | Done |
| 8 | Single-column skills + certifications | Done |
| 9 | Split Education / Certifications sections | Done |
| 10 | Tighter summary (no duplicate availability, stronger stack) | Done |
| 11 | Education dates right-aligned | Done |

### Still recommended (needs your input or per-application tailoring)

- **Per-job tailoring** — mirror exact JD keywords in summary + top bullets
- **More metrics** — latency, cost, accuracy, user count where you have real numbers
- **Eval methodology** — e.g. "Ragas eval suite", "recall@k" if you built eval tooling
- **DOCX version** for legacy ATS (Taleo) when job posting requests Word
- **Test with Jobscan / Resume Worded** against a target job description
