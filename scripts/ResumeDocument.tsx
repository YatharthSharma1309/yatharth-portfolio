import React from "react";
import {
  Document,
  Font,
  Link,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import {
  certifications,
  education,
  resumeSkillKeywords,
  resumeContactLinks,
  resumeContactPrimary,
  resumeJourney,
  resumeProjectLinks,
  resumeConfidentialProjects,
  resumeSummary,
  site,
  skillCategories,
  type PortfolioLink,
} from "../lib/content";
import { formatDemoHost, formatRepoPath } from "../lib/demo-urls";

Font.register({
  family: "DM Sans",
  fonts: [
    {
      src: "https://cdn.jsdelivr.net/fontsource/fonts/dm-sans@5.2.5/latin-400-normal.ttf",
      fontWeight: 400,
    },
    {
      src: "https://cdn.jsdelivr.net/fontsource/fonts/dm-sans@5.2.5/latin-500-normal.ttf",
      fontWeight: 500,
    },
    {
      src: "https://cdn.jsdelivr.net/fontsource/fonts/dm-sans@5.2.5/latin-700-normal.ttf",
      fontWeight: 700,
    },
  ],
});

Font.register({
  family: "Plus Jakarta",
  fonts: [
    {
      src: "https://cdn.jsdelivr.net/fontsource/fonts/plus-jakarta-sans@5.2.5/latin-600-normal.ttf",
      fontWeight: 600,
    },
    {
      src: "https://cdn.jsdelivr.net/fontsource/fonts/plus-jakarta-sans@5.2.5/latin-700-normal.ttf",
      fontWeight: 700,
    },
  ],
});

const noHyphen = (word: string) => [word];

const C = {
  brand: "#0f766e",
  brandDark: "#0c4a42",
  brandLight: "#14b8a6",
  brandSoft: "#ccfbf1",
  ink: "#0f172a",
  body: "#1e293b",
  muted: "#475569",
  line: "#e2e8f0",
  surface: "#f8fafc",
};

const styles = StyleSheet.create({
  page: {
    fontFamily: "DM Sans",
    fontSize: 10,
    color: C.body,
    lineHeight: 1.45,
    paddingBottom: 44,
  },
  header: {
    backgroundColor: C.brandDark,
    paddingHorizontal: 40,
    paddingTop: 24,
    paddingBottom: 16,
  },
  headerAccent: {
    height: 3,
    backgroundColor: C.brandLight,
    marginBottom: 10,
  },
  headerContent: { gap: 4 },
  name: {
    fontFamily: "Plus Jakarta",
    fontSize: 22,
    fontWeight: 700,
    color: "#ffffff",
    lineHeight: 1.2,
  },
  role: {
    fontFamily: "Plus Jakarta",
    fontSize: 11.5,
    fontWeight: 600,
    color: C.brandSoft,
    lineHeight: 1.35,
  },
  availability: { fontSize: 8.5, color: "#a7f3d0", lineHeight: 1.35 },
  contactLine: {
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    marginTop: 3,
  },
  contactItem: { fontSize: 8.25, color: "#e6fffa", flexShrink: 0 },
  contactDot: { fontSize: 8.25, color: "#5eead4", marginHorizontal: 5, flexShrink: 0 },
  body: { paddingHorizontal: 40, paddingTop: 16, gap: 11 },
  section: { gap: 6 },
  sectionTitle: {
    fontFamily: "Plus Jakarta",
    fontSize: 10,
    fontWeight: 700,
    color: C.brand,
    textTransform: "uppercase",
    letterSpacing: 0.7,
    paddingBottom: 3,
    borderBottomWidth: 2,
    borderBottomColor: C.brandLight,
  },
  summary: { fontSize: 9.5, color: C.body, lineHeight: 1.5 },
  skillsGrid: { gap: 3 },
  skillLine: { fontSize: 8.5, lineHeight: 1.42, color: C.body },
  skillKeywords: {
    fontSize: 8.25,
    color: C.muted,
    lineHeight: 1.4,
    marginBottom: 4,
  },
  skillLabel: { fontSize: 8.5, fontWeight: 700, color: C.ink },
  eduEntry: { gap: 1, marginBottom: 4 },
  eduDegree: { fontSize: 8.5, fontWeight: 700, color: C.ink, lineHeight: 1.35 },
  eduMeta: { fontSize: 8, color: C.muted, lineHeight: 1.35 },
  certColumn: { gap: 2 },
  certRow: { flexDirection: "row", gap: 5, alignItems: "flex-start" },
  certDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: C.brand,
    marginTop: 4,
    flexShrink: 0,
  },
  certText: { flex: 1, fontSize: 8.25, color: C.body, lineHeight: 1.4 },
  entryCard: {
    backgroundColor: C.surface,
    borderWidth: 0.5,
    borderColor: C.line,
    borderLeftWidth: 2.5,
    borderLeftColor: C.brandLight,
    borderRadius: 4,
    padding: 8,
    gap: 2,
    marginBottom: 4,
  },
  entryOrg: {
    fontFamily: "Plus Jakarta",
    fontSize: 10,
    fontWeight: 700,
    color: C.ink,
    lineHeight: 1.3,
  },
  entryHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 10,
  },
  entryOrgWrap: { flex: 1 },
  entryPeriod: {
    fontSize: 8,
    color: C.brand,
    fontWeight: 500,
    textAlign: "right",
    flexShrink: 0,
  },
  entryRole: { fontSize: 8.75, color: C.muted, marginTop: 1, lineHeight: 1.35 },
  bulletList: { marginTop: 3, gap: 2 },
  bulletRow: { flexDirection: "row", gap: 5, paddingRight: 2 },
  bulletDot: {
    width: 4.5,
    height: 4.5,
    borderRadius: 2.25,
    backgroundColor: C.brand,
    marginTop: 4,
    flexShrink: 0,
  },
  bulletText: { flex: 1, fontSize: 9, lineHeight: 1.45 },
  projectMeta: { fontSize: 8, color: C.muted, marginTop: 2, lineHeight: 1.38 },
  projectLink: { fontSize: 8, color: C.brand, marginTop: 2 },
  subsectionTitle: {
    fontFamily: "Plus Jakarta",
    fontSize: 9,
    fontWeight: 700,
    color: C.ink,
    marginTop: 4,
    marginBottom: 2,
  },
  footer: {
    position: "absolute",
    bottom: 18,
    left: 0,
    right: 0,
    textAlign: "center",
    fontSize: 7.5,
    color: C.muted,
  },
  divider: { height: 0.5, backgroundColor: C.line, marginVertical: 3 },
  continuationHeader: {
    backgroundColor: C.brandDark,
    paddingHorizontal: 40,
    paddingVertical: 9,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  continuationName: {
    fontFamily: "Plus Jakarta",
    fontSize: 10.5,
    fontWeight: 700,
    color: "#ffffff",
  },
  continuationMeta: { fontSize: 8.25, color: "#a7f3d0" },
});

function PdfText(props: React.ComponentProps<typeof Text>) {
  return <Text hyphenationCallback={noHyphen} {...props} />;
}

function resumeBulletsForJob(org: string, bullets: string[] | undefined): string[] {
  if (!bullets?.length) return [];
  if (org === "Whilter.AI") return bullets;
  if (org === "Ernst & Young Global Consulting Services") return bullets.slice(0, 2);
  return bullets.slice(0, 1);
}

function projectLinkBullets(project: PortfolioLink): string[] {
  const lines: string[] = [];
  if (project.demoUrl?.trim()) {
    lines.push(`Live: ${formatDemoHost(project.demoUrl)}`);
  }
  const repo = project.href?.trim();
  if (repo) {
    lines.push(`GitHub: ${formatRepoPath(repo)}`);
  }
  return lines;
}

function projectBullets(project: PortfolioLink): string[] {
  const bullets: string[] = [];
  if (project.result) bullets.push(project.result);
  else if (project.description) bullets.push(project.description);
  bullets.push(...projectLinkBullets(project));
  return bullets;
}

function Bullets({ items }: { items: string[] }) {
  return (
    <View style={styles.bulletList}>
      {items.map((item) => (
        <View key={item.slice(0, 48)} style={styles.bulletRow}>
          <View style={styles.bulletDot} />
          <PdfText style={styles.bulletText}>{item}</PdfText>
        </View>
      ))}
    </View>
  );
}

function SectionTitle({ children }: { children: string }) {
  return <PdfText style={styles.sectionTitle}>{children}</PdfText>;
}

function ContactLine({
  items,
}: {
  items: readonly { label: string; href?: string }[];
}) {
  return (
    <View style={styles.contactLine} wrap={false}>
      {items.map((item, index) => (
        <React.Fragment key={item.label}>
          {index > 0 ? <PdfText style={styles.contactDot}>|</PdfText> : null}
          {item.href ? (
            <Link src={item.href} style={styles.contactItem}>
              {item.label}
            </Link>
          ) : (
            <PdfText style={styles.contactItem}>{item.label}</PdfText>
          )}
        </React.Fragment>
      ))}
    </View>
  );
}

function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.headerAccent} />
      <View style={styles.headerContent}>
        <PdfText style={styles.name}>{site.name}</PdfText>
        <PdfText style={styles.role}>{site.role}</PdfText>
        <PdfText style={styles.availability}>{site.availability}</PdfText>
      </View>
      <ContactLine items={resumeContactPrimary} />
      <ContactLine items={resumeContactLinks} />
    </View>
  );
}

function SkillsSection() {
  return (
    <View style={styles.section}>
      <SectionTitle>Technical Skills</SectionTitle>
      <PdfText style={styles.skillKeywords}>{resumeSkillKeywords}</PdfText>
      <View style={styles.skillsGrid}>
        {skillCategories.map((category) => (
          <PdfText key={category.label} style={styles.skillLine}>
            <PdfText style={styles.skillLabel}>{category.label}: </PdfText>
            {category.skills.join(", ")}
          </PdfText>
        ))}
      </View>
    </View>
  );
}

function ExperienceBlock() {
  return (
    <View style={styles.section}>
      <SectionTitle>Work Experience</SectionTitle>
      {resumeJourney.map((item, index) => {
        const location =
          item.location && item.location !== "-" && item.location !== "—"
            ? ` | ${item.location}`
            : "";
        const bullets = resumeBulletsForJob(item.org, item.description);

        return (
          <View key={`${item.org}-${item.period}`} wrap={false}>
            {index > 0 ? <View style={styles.divider} /> : null}
            <View style={styles.entryCard}>
              <View style={styles.entryHeaderRow}>
                <View style={styles.entryOrgWrap}>
                  <PdfText style={styles.entryOrg}>{item.org}</PdfText>
                </View>
                <PdfText style={styles.entryPeriod}>{item.period}</PdfText>
              </View>
              <PdfText style={styles.entryRole}>
                {item.title}
                {location}
              </PdfText>
              {bullets.length > 0 ? <Bullets items={bullets} /> : null}
            </View>
          </View>
        );
      })}
    </View>
  );
}

function ProjectsBlock() {
  return (
    <View style={styles.section}>
      <SectionTitle>Projects</SectionTitle>
      {resumeProjectLinks.map((project, index) => {
        return (
          <View key={project.title} wrap={false}>
            {index > 0 ? <View style={styles.divider} /> : null}
            <View style={styles.entryCard}>
              <PdfText style={styles.entryOrg}>{project.title}</PdfText>
              {project.stack?.length ? (
                <PdfText style={styles.projectMeta}>
                  {project.stack.join(" · ")}
                </PdfText>
              ) : null}
              <Bullets items={projectBullets(project)} />
            </View>
          </View>
        );
      })}

      <PdfText style={styles.subsectionTitle}>Confidential / Private Work</PdfText>
      {resumeConfidentialProjects.map((project) => (
        <View key={project.title} style={styles.entryCard} wrap={false}>
          <View style={styles.entryHeaderRow}>
            <View style={styles.entryOrgWrap}>
              <PdfText style={styles.entryOrg}>{project.title}</PdfText>
            </View>
            {project.resumeTag ? (
              <PdfText style={styles.entryPeriod}>{project.resumeTag}</PdfText>
            ) : null}
          </View>
          {project.stack?.length ? (
            <PdfText style={styles.projectMeta}>{project.stack.join(" · ")}</PdfText>
          ) : null}
          <Bullets items={projectBullets(project)} />
        </View>
      ))}
    </View>
  );
}

function CertificationColumn({ items }: { items: readonly string[] }) {
  return (
    <View style={styles.certColumn}>
      {items.map((cert) => (
        <View key={cert} style={styles.certRow}>
          <View style={styles.certDot} />
          <PdfText style={styles.certText}>{cert}</PdfText>
        </View>
      ))}
    </View>
  );
}

function EducationSection() {
  return (
    <View style={styles.section}>
      <SectionTitle>Education</SectionTitle>
      {education.map((item) => (
        <View key={item.degree} style={styles.eduEntry}>
          <View style={styles.entryHeaderRow}>
            <View style={styles.entryOrgWrap}>
              <PdfText style={styles.eduDegree}>{item.degree}</PdfText>
            </View>
            <PdfText style={styles.entryPeriod}>{item.period}</PdfText>
          </View>
          <PdfText style={styles.eduMeta}>{item.school}</PdfText>
        </View>
      ))}
    </View>
  );
}

function CertificationsSection() {
  return (
    <View style={styles.section}>
      <SectionTitle>Certifications</SectionTitle>
      <CertificationColumn items={certifications} />
    </View>
  );
}

function ContinuationHeader() {
  return (
    <View style={styles.continuationHeader} fixed>
      <PdfText style={styles.continuationName}>{site.name}</PdfText>
      <PdfText style={styles.continuationMeta}>
        {site.role} · {site.email}
      </PdfText>
    </View>
  );
}

function PageFooter() {
  return (
    <PdfText
      style={styles.footer}
      fixed
      render={({ pageNumber, totalPages }) =>
        `${site.name} | Page ${pageNumber} of ${totalPages}`
      }
    />
  );
}

export function ResumeDocument() {
  return (
    <Document
      title={`${site.name} — Resume`}
      author={site.name}
      subject={`Resume — ${site.role}`}
      creator={site.url}
    >
      <Page size="LETTER" style={styles.page}>
        <Header />
        <View style={styles.body}>
          <View style={styles.section}>
            <SectionTitle>Professional Summary</SectionTitle>
            <PdfText style={styles.summary}>{resumeSummary}</PdfText>
          </View>
          <SkillsSection />
          <ExperienceBlock />
        </View>
        <PageFooter />
      </Page>

      <Page size="LETTER" style={styles.page}>
        <ContinuationHeader />
        <View style={styles.body}>
          <ProjectsBlock />
          <EducationSection />
          <CertificationsSection />
        </View>
        <PageFooter />
      </Page>
    </Document>
  );
}
