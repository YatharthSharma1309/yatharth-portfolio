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
  journey,
  languages,
  resumeProjectLinks,
  resumeSummary,
  site,
  skillBuilding,
  skillCategories,
  type PortfolioLink,
} from "../lib/content";
import { formatExternalLabel } from "../lib/format";

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

const C = {
  brand: "#0d5c4d",
  brandLight: "#1f856f",
  brandTint: "#e8f6f2",
  brandMuted: "#8ecdb9",
  ink: "#121218",
  body: "#2e2e34",
  muted: "#6b6b74",
  line: "#dcdce2",
  chipBg: "#edf5f3",
  chipBorder: "#c5ddd6",
  warm: "#c9921a",
};

const styles = StyleSheet.create({
  page: {
    fontFamily: "DM Sans",
    fontSize: 9,
    color: C.body,
    lineHeight: 1.45,
    paddingBottom: 36,
  },
  header: {
    backgroundColor: C.brand,
    paddingHorizontal: 40,
    paddingTop: 28,
    paddingBottom: 22,
  },
  headerAccent: {
    height: 3,
    backgroundColor: C.brandLight,
    marginBottom: 14,
  },
  name: {
    fontFamily: "Plus Jakarta",
    fontSize: 24,
    fontWeight: 700,
    color: "#ffffff",
    letterSpacing: -0.3,
  },
  role: {
    fontFamily: "Plus Jakarta",
    fontSize: 11,
    fontWeight: 600,
    color: C.brandMuted,
    marginTop: 4,
  },
  contactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    marginTop: 12,
  },
  contactItem: {
    fontSize: 7.75,
    color: "#d7ece6",
  },
  contactDot: {
    fontSize: 7.75,
    color: "#8fb8ad",
  },
  body: {
    paddingHorizontal: 40,
    paddingTop: 22,
    gap: 18,
  },
  topGrid: {
    flexDirection: "row",
    gap: 18,
  },
  sidebar: {
    width: "31%",
    gap: 14,
  },
  main: {
    flex: 1,
    gap: 16,
  },
  section: {
    gap: 8,
  },
  sectionTitle: {
    fontFamily: "Plus Jakarta",
    fontSize: 9.5,
    fontWeight: 700,
    color: C.brand,
    textTransform: "uppercase",
    letterSpacing: 0.8,
    paddingBottom: 4,
    borderBottomWidth: 1.5,
    borderBottomColor: C.brandLight,
  },
  summary: {
    fontSize: 9.25,
    color: C.body,
    lineHeight: 1.55,
  },
  skillGroup: {
    gap: 5,
  },
  skillLabel: {
    fontSize: 7.75,
    fontWeight: 700,
    color: C.ink,
  },
  chipRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
  },
  chip: {
    backgroundColor: C.chipBg,
    borderWidth: 0.5,
    borderColor: C.chipBorder,
    borderRadius: 3,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  chipText: {
    fontSize: 7.25,
    color: C.body,
  },
  eduBlock: {
    gap: 2,
    marginBottom: 6,
  },
  eduDegree: {
    fontSize: 7.75,
    fontWeight: 700,
    color: C.ink,
  },
  eduMeta: {
    fontSize: 7.25,
    color: C.muted,
  },
  certItem: {
    fontSize: 7.25,
    color: C.body,
    marginBottom: 3,
    paddingLeft: 8,
  },
  entryCard: {
    borderWidth: 0.5,
    borderColor: C.line,
    borderRadius: 4,
    padding: 10,
    gap: 4,
  },
  entryCardCurrent: {
    backgroundColor: C.brandTint,
    borderColor: C.brandLight,
  },
  entryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 8,
  },
  entryOrg: {
    fontFamily: "Plus Jakarta",
    fontSize: 9.75,
    fontWeight: 700,
    color: C.ink,
  },
  entryRole: {
    fontSize: 8.25,
    color: C.muted,
    marginTop: 1,
  },
  entryPeriod: {
    fontSize: 7.5,
    color: C.muted,
    marginTop: 2,
  },
  badge: {
    backgroundColor: C.brandLight,
    borderRadius: 3,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  badgeWarm: {
    backgroundColor: C.warm,
  },
  badgeText: {
    fontSize: 6.75,
    fontWeight: 700,
    color: "#ffffff",
    letterSpacing: 0.4,
  },
  bulletList: {
    marginTop: 4,
    gap: 3,
  },
  bulletRow: {
    flexDirection: "row",
    gap: 6,
    paddingRight: 4,
  },
  bulletDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: C.brandLight,
    marginTop: 3,
  },
  bulletText: {
    flex: 1,
    fontSize: 8.75,
    lineHeight: 1.45,
  },
  projectStack: {
    fontSize: 7.5,
    color: C.muted,
    marginTop: 1,
  },
  langText: {
    fontSize: 8,
    color: C.body,
  },
  footer: {
    position: "absolute",
    bottom: 16,
    left: 0,
    right: 0,
    textAlign: "center",
    fontSize: 7,
    color: C.muted,
  },
  divider: {
    height: 0.5,
    backgroundColor: C.line,
    marginVertical: 2,
  },
});

function projectBullets(project: PortfolioLink): string[] {
  const bullets: string[] = [];
  if (project.problem) bullets.push(project.problem);
  if (project.result) bullets.push(project.result);
  if (bullets.length) return bullets;

  return project.description
    .split(/\.\s+/)
    .map((part) => part.trim())
    .filter(Boolean)
    .map((part) => (part.endsWith(".") ? part : `${part}.`));
}

function Bullets({ items }: { items: string[] }) {
  return (
    <View style={styles.bulletList}>
      {items.map((item) => (
        <View key={item.slice(0, 40)} style={styles.bulletRow} wrap={false}>
          <View style={styles.bulletDot} />
          <Text style={styles.bulletText}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

function Badge({ label, warm = false }: { label: string; warm?: boolean }) {
  return (
    <View style={[styles.badge, ...(warm ? [styles.badgeWarm] : [])]}>
      <Text style={styles.badgeText}>{label}</Text>
    </View>
  );
}

function SectionTitle({ children }: { children: string }) {
  return <Text style={styles.sectionTitle}>{children}</Text>;
}

function SkillChips({ skills }: { skills: readonly string[] }) {
  return (
    <View style={styles.chipRow}>
      {skills.map((skill) => (
        <View key={skill} style={styles.chip}>
          <Text style={styles.chipText}>{skill}</Text>
        </View>
      ))}
    </View>
  );
}

function Sidebar() {
  return (
    <View style={styles.sidebar}>
      <View style={styles.section}>
        <SectionTitle>Technical Skills</SectionTitle>
        {skillCategories.map((category) => (
          <View key={category.label} style={styles.skillGroup}>
            <Text style={styles.skillLabel}>{category.label}</Text>
            <SkillChips skills={category.skills} />
          </View>
        ))}
        <View style={styles.skillGroup}>
          <Text style={styles.skillLabel}>Building depth in</Text>
          <SkillChips skills={skillBuilding} />
        </View>
      </View>

      <View style={styles.section}>
        <SectionTitle>Education</SectionTitle>
        {education.map((item) => (
          <View key={item.degree} style={styles.eduBlock}>
            <Text style={styles.eduDegree}>{item.degree}</Text>
            <Text style={styles.eduMeta}>{item.school}</Text>
            <Text style={styles.eduMeta}>{item.period}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <SectionTitle>Certifications</SectionTitle>
        {certifications.map((item) => (
          <Text key={item} style={styles.certItem}>
            • {item}
          </Text>
        ))}
      </View>

      <View style={styles.section}>
        <SectionTitle>Languages</SectionTitle>
        <Text style={styles.langText}>
          {languages.map((l) => `${l.name} (${l.level})`).join(" · ")}
        </Text>
      </View>
    </View>
  );
}

function ExperienceBlock() {
  return (
    <View style={styles.section}>
      <SectionTitle>Experience</SectionTitle>
      {journey.map((item, index) => {
        const location =
          item.location && item.location !== "-" && item.location !== "—" ? ` · ${item.location}` : "";
        return (
          <View key={`${item.org}-${item.period}`}>
            {index > 0 ? <View style={styles.divider} /> : null}
            <View
              style={[styles.entryCard, ...(item.current ? [styles.entryCardCurrent] : [])]}
              wrap={false}
            >
              <View style={styles.entryHeader}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.entryOrg}>{item.org}</Text>
                  <Text style={styles.entryRole}>
                    {item.title}
                    {location}
                  </Text>
                  <Text style={styles.entryPeriod}>{item.period}</Text>
                </View>
                {item.current ? <Badge label="CURRENT" /> : null}
              </View>
              {item.description?.length ? <Bullets items={item.description} /> : null}
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
      {resumeProjectLinks.map((project, index) => (
        <View key={project.title}>
          {index > 0 ? <View style={styles.divider} /> : null}
          <View style={styles.entryCard} wrap={false}>
            <View style={styles.entryHeader}>
              <View style={{ flex: 1 }}>
                <Text style={styles.entryOrg}>{project.title}</Text>
                {project.stack?.length ? (
                  <Text style={styles.projectStack}>{project.stack.join(" · ")}</Text>
                ) : null}
              </View>
              {project.status === "In progress" ? <Badge label="IN PROGRESS" warm /> : null}
            </View>
            <Bullets items={projectBullets(project)} />
          </View>
        </View>
      ))}
    </View>
  );
}

export function ResumeDocument() {
  const contact = [
    site.location.replace(", India", ""),
    site.phone,
    site.email,
    formatExternalLabel(site.linkedin),
    formatExternalLabel(site.github),
  ];

  return (
    <Document
      title={`${site.name} — Resume`}
      author={site.name}
      subject="Resume"
      creator="yatharth-portfolio"
    >
      <Page size="LETTER" style={styles.page}>
        <View style={styles.header} fixed>
          <View style={styles.headerAccent} />
          <Text style={styles.name}>{site.name}</Text>
          <Text style={styles.role}>{site.role}</Text>
          <View style={styles.contactRow}>
            {contact.map((item, index) => (
              <React.Fragment key={item}>
                {index > 0 ? <Text style={styles.contactDot}>·</Text> : null}
                {item.includes("@") ? (
                  <Link src={`mailto:${site.email}`} style={styles.contactItem}>
                    {item}
                  </Link>
                ) : item.includes("linkedin") || item.includes("github") ? (
                  <Link
                    src={item.includes("linkedin") ? site.linkedin : site.github}
                    style={styles.contactItem}
                  >
                    {item}
                  </Link>
                ) : (
                  <Text style={styles.contactItem}>{item}</Text>
                )}
              </React.Fragment>
            ))}
          </View>
        </View>

        <View style={styles.body}>
          <View style={styles.topGrid}>
            <Sidebar />
            <View style={styles.main}>
              <View style={styles.section}>
                <SectionTitle>Professional Summary</SectionTitle>
                <Text style={styles.summary}>{resumeSummary}</Text>
              </View>
              <ExperienceBlock />
            </View>
          </View>

          <ProjectsBlock />
        </View>

        <Text
          style={styles.footer}
          render={({ pageNumber, totalPages }) =>
            `${site.name} · Page ${pageNumber} of ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  );
}
