import { ImageResponse } from "next/og";
import { site } from "@/lib/content";

export const alt = `${site.name} · ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export const dynamic = "force-static";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px 80px",
          background: "#F4F7F9",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-120px",
            left: "-80px",
            width: "480px",
            height: "480px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(79,70,229,0.16) 0%, rgba(79,70,229,0.04) 45%, transparent 70%)",
          }}
        />
        <p
          style={{
            margin: 0,
            fontSize: 18,
            fontWeight: 600,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#4F46E5",
          }}
        >
          {site.role}
        </p>
        <h1
          style={{
            margin: "20px 0 0",
            fontSize: 64,
            fontWeight: 800,
            lineHeight: 1.05,
            color: "#0F172A",
            maxWidth: 900,
          }}
        >
          {site.name}
        </h1>
        <p
          style={{
            margin: "24px 0 0",
            fontSize: 28,
            fontWeight: 600,
            color: "#334155",
            maxWidth: 820,
          }}
        >
          {site.role}
        </p>
        <p
          style={{
            margin: "20px 0 0",
            fontSize: 22,
            lineHeight: 1.45,
            color: "#475569",
            maxWidth: 900,
          }}
        >
          Full-stack software engineer shipping React/TypeScript UIs, APIs, and PostgreSQL-backed
          products. Open to full-time roles.
        </p>
        <div
          style={{
            marginTop: 40,
            display: "flex",
            gap: 12,
          }}
        >
          <span
            style={{
              padding: "10px 18px",
              borderRadius: 999,
              border: "1px solid rgba(79,70,229,0.35)",
              color: "#4F46E5",
              fontSize: 16,
              fontWeight: 600,
            }}
          >
            {site.location}
          </span>
          <span
            style={{
              padding: "10px 18px",
              borderRadius: 999,
              border: "1px dashed rgba(15,23,42,0.18)",
              color: "#0F172A",
              fontSize: 16,
              fontWeight: 600,
            }}
          >
            {site.availability}
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
