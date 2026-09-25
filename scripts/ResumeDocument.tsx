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
import { resumeContactLinks, resumeContactPrimary, site } from "../lib/content";
import {
  defaultResumeVariant,
  getResumeProfile,
  type ResumeExperience,
  type ResumeProfile,
  type ResumeProject,
  type ResumeVariantId,
} from "../lib/resume-variants";

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
  brand: "#4F46E5",
  ink: "#0F172A",
  body: "#1E293B",
  muted: "#475569",
  line: "#E2E8F0",
};

/** One spacing scale so section, entry, and bullet rhythm stay even. */
const SPACE = {
  pageX: 42,
  section: 12,
  afterTitle: 7,
  entry: 9,
  afterMeta: 4,
  bullet: 2.5,
  tight: 2,
};

const LH = {
  title: 1.2,
  body: 1.38,
  meta: 1.3,
};

const styles = StyleSheet.create({
  page: {
    fontFamily: "DM Sans",
    fontSize: 9.25,
    color: C.body,
    lineHeight: LH.body,
    backgroundColor: "#ffffff",
    paddingBottom: 34,
  },
  header: {
    paddingHorizontal: SPACE.pageX,
    paddingTop: 26,
    paddingBottom: 12,
    borderBottomWidth: 1.25,
    borderBottomColor: C.brand,
    gap: 3,
  },
  name: {
    fontFamily: "Plus Jakarta",
    fontSize: 20,
    fontWeight: 700,
    color: C.ink,
    lineHeight: LH.title,
  },
  role: {
    fontFamily: "Plus Jakarta",
    fontSize: 10,
    fontWeight: 600,
    color: C.brand,
    lineHeight: LH.meta,
  },
  availability: {
    fontSize: 8.5,
    color: C.muted,
    lineHeight: LH.meta,
  },
  contactLine: {
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    marginTop: 1,
  },
  contactItem: { fontSize: 8.5, color: C.body, flexShrink: 0, lineHeight: LH.meta },
  contactLink: { fontSize: 8.5, color: C.brand, flexShrink: 0, lineHeight: LH.meta },
  contactDot: {
    fontSize: 8.5,
    color: C.muted,
    marginHorizontal: 6,
    flexShrink: 0,
  },
  body: {
    paddingHorizontal: SPACE.pageX,
    paddingTop: 14,
    gap: SPACE.section,
  },
  section: { gap: SPACE.afterTitle },
  sectionTitle: {
    fontFamily: "Plus Jakarta",
    fontSize: 8.75,
    fontWeight: 700,
    color: C.brand,
    letterSpacing: 0.7,
    textTransform: "uppercase",
    lineHeight: LH.title,
    paddingBottom: 4,
    borderBottomWidth: 0.75,
    borderBottomColor: C.line,
  },
  summary: { fontSize: 9.25, color: C.body, lineHeight: LH.body },
  list: { gap: SPACE.entry },
  entry: { gap: SPACE.tight },
  entryHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    gap: 10,
  },
  entryOrgWrap: {
    flex: 1,
    flexDirection: "row",
    alignItems: "baseline",
    flexWrap: "wrap",
    gap: 7,
  },
  entryOrg: {
    fontFamily: "Plus Jakarta",
    fontSize: 10,
    fontWeight: 700,
    color: C.ink,
    lineHeight: LH.title,
  },
  entryPeriod: {
    fontSize: 8.5,
    color: C.muted,
    fontWeight: 500,
    textAlign: "right",
    flexShrink: 0,
    lineHeight: LH.meta,
  },
  entryRole: { fontSize: 8.75, color: C.muted, lineHeight: LH.meta },
  bulletList: { marginTop: SPACE.afterMeta - SPACE.tight, gap: SPACE.bullet },
  bulletRow: { flexDirection: "row", gap: 6, paddingRight: 2 },
  bulletMark: { fontSize: 9.25, color: C.brand, width: 8, lineHeight: LH.body },
  bulletText: { flex: 1, fontSize: 9.25, lineHeight: LH.body, color: C.body },
  projectMeta: { fontSize: 8.25, color: C.muted, lineHeight: LH.meta },
  liveTag: {
    fontSize: 7.5,
    fontWeight: 700,
    color: C.brand,
    letterSpacing: 0.4,
    lineHeight: LH.meta,
  },
  skillLine: { fontSize: 9, lineHeight: LH.body, color: C.body },
  skillLabel: { fontSize: 9, fontWeight: 700, color: C.ink },
  skillsList: { gap: SPACE.tight },
  eduList: { gap: 6 },
  eduDegree: {
    fontFamily: "Plus Jakarta",
    fontSize: 9.25,
    fontWeight: 700,
    color: C.ink,
    lineHeight: LH.title,
  },
  eduMeta: { fontSize: 8.5, color: C.muted, lineHeight: LH.meta },
  certRow: { flexDirection: "row", gap: 6, alignItems: "flex-start" },
  footer: {
    position: "absolute",
    bottom: 16,
    left: 0,
    right: 0,
    textAlign: "center",
    fontSize: 7.5,
    color: C.muted,
  },
  continuationHeader: {
    paddingHorizontal: SPACE.pageX,
    paddingTop: 16,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    borderBottomWidth: 1.25,
    borderBottomColor: C.brand,
  },
  continuationName: {
    fontFamily: "Plus Jakarta",
    fontSize: 10.5,
    fontWeight: 700,
    color: C.ink,
    lineHeight: LH.title,
  },
  continuationMeta: { fontSize: 8.25, color: C.muted, lineHeight: LH.meta },
});

function PdfText(props: React.ComponentProps<typeof Text>) {
  return <Text hyphenationCallback={noHyphen} {...props} />;
}

function Bullets({ items }: { items: string[] }) {
  return (
    <View style={styles.bulletList}>
      {items.map((item) => (
        <View key={item.slice(0, 48)} style={styles.bulletRow}>
          <PdfText style={styles.bulletMark}>•</PdfText>
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
          {index > 0 ? <PdfText style={styles.contactDot}>·</PdfText> : null}
          {item.href ? (
            <Link src={item.href} style={styles.contactLink}>
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

function Header({ profile }: { profile: ResumeProfile }) {
  return (
    <View style={styles.header}>
      <PdfText style={styles.name}>{site.name}</PdfText>
      <PdfText style={styles.role}>{profile.role}</PdfText>
      <PdfText style={styles.availability}>{site.availability}</PdfText>
      <ContactLine items={resumeContactPrimary} />
      <ContactLine items={resumeContactLinks} />
    </View>
  );
}

function SkillsSection({ profile }: { profile: ResumeProfile }) {
  return (
    <View style={styles.section}>
      <SectionTitle>Technical Skills</SectionTitle>
      <View style={styles.skillsList}>
        {profile.skillCategories.map((category) => (
          <PdfText key={category.label} style={styles.skillLine}>
            <PdfText style={styles.skillLabel}>{category.label}: </PdfText>
            {category.skills.join(", ")}
          </PdfText>
        ))}
      </View>
    </View>
  );
}

function ExperienceEntry({ item }: { item: ResumeExperience }) {
  const location =
    item.location && item.location !== "-" && item.location !== "—"
      ? ` · ${item.location}`
      : "";

  return (
    <View style={styles.entry} wrap={false}>
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
      {item.bullets.length > 0 ? <Bullets items={item.bullets} /> : null}
    </View>
  );
}

function ExperienceBlock({ profile }: { profile: ResumeProfile }) {
  return (
    <View style={styles.section}>
      <SectionTitle>Experience</SectionTitle>
      <View style={styles.list}>
        {profile.experience.map((item) => (
          <ExperienceEntry key={`${item.org}-${item.period}`} item={item} />
        ))}
      </View>
    </View>
  );
}

function ProjectEntry({ project }: { project: ResumeProject }) {
  return (
    <View style={styles.entry} wrap={false}>
      <View style={styles.entryHeaderRow}>
        <View style={styles.entryOrgWrap}>
          <PdfText style={styles.entryOrg}>{project.title}</PdfText>
          {project.live ? <PdfText style={styles.liveTag}>LIVE</PdfText> : null}
        </View>
        {project.badge ? (
          <PdfText style={styles.entryPeriod}>{project.badge}</PdfText>
        ) : null}
      </View>
      {project.stack.length ? (
        <PdfText style={styles.projectMeta}>{project.stack.join(" · ")}</PdfText>
      ) : null}
      <Bullets items={project.bullets} />
    </View>
  );
}

function ProjectsBlock({ profile }: { profile: ResumeProfile }) {
  return (
    <View style={styles.section}>
      <SectionTitle>{profile.projectTitle}</SectionTitle>
      <View style={styles.list}>
        {profile.projects.map((project) => (
          <ProjectEntry key={project.title} project={project} />
        ))}
      </View>
    </View>
  );
}

function EducationSection({ profile }: { profile: ResumeProfile }) {
  return (
    <View style={styles.section}>
      <SectionTitle>Education</SectionTitle>
      <View style={styles.eduList}>
        {profile.education.map((item) => (
          <View key={item.degree} style={styles.entry} wrap={false}>
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
    </View>
  );
}

function CertificationsSection({ profile }: { profile: ResumeProfile }) {
  return (
    <View style={styles.section}>
      <SectionTitle>Certifications & Achievements</SectionTitle>
      <View style={styles.skillsList}>
        {profile.certifications.map((cert) => (
          <View key={cert} style={styles.certRow}>
            <PdfText style={styles.bulletMark}>•</PdfText>
            <PdfText style={styles.bulletText}>{cert}</PdfText>
          </View>
        ))}
        <PdfText style={styles.skillLine}>
          <PdfText style={styles.skillLabel}>Languages: </PdfText>
          {profile.languages}
        </PdfText>
      </View>
    </View>
  );
}

function ContinuationHeader({ profile }: { profile: ResumeProfile }) {
  return (
    <View style={styles.continuationHeader} fixed>
      <PdfText style={styles.continuationName}>{site.name}</PdfText>
      <PdfText style={styles.continuationMeta}>{profile.role}</PdfText>
    </View>
  );
}

function PageFooter() {
  return (
    <PdfText
      style={styles.footer}
      fixed
      render={({ pageNumber, totalPages }) =>
        `${site.name}  ·  Page ${pageNumber} of ${totalPages}`
      }
    />
  );
}

export function ResumeDocument({
  variant = defaultResumeVariant,
}: {
  variant?: ResumeVariantId;
}) {
  const profile = getResumeProfile(variant);

  return (
    <Document
      title={`${site.name} — ${profile.label} Resume`}
      author={site.name}
      subject={`Resume — ${profile.role}`}
      creator={site.url}
    >
      <Page size="LETTER" style={styles.page}>
        <Header profile={profile} />
        <View style={styles.body}>
          <View style={styles.section}>
            <SectionTitle>Professional Summary</SectionTitle>
            <PdfText style={styles.summary}>{profile.summary}</PdfText>
          </View>
          <ExperienceBlock profile={profile} />
          <SkillsSection profile={profile} />
        </View>
        <PageFooter />
      </Page>

      <Page size="LETTER" style={styles.page}>
        <ContinuationHeader profile={profile} />
        <View style={styles.body}>
          <ProjectsBlock profile={profile} />
          <EducationSection profile={profile} />
          <CertificationsSection profile={profile} />
        </View>
        <PageFooter />
      </Page>
    </Document>
  );
}
