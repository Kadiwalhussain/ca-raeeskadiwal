import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

/**
 * Shared Open Graph / Twitter card image, generated at request time with
 * `next/og`. Used by both app/opengraph-image.tsx and app/twitter-image.tsx
 * so social previews always resolve to a real image on any host.
 */
export function renderOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #2C1408 0%, #4D2F0E 100%)",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 16,
              background: "#D4AF37",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#2C1408",
              fontSize: 40,
              fontWeight: 800,
            }}
          >
            CA
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ color: "#D4AF37", fontSize: 30, fontWeight: 700 }}>
              Raees Kadiwal &amp; Co.
            </div>
            <div style={{ color: "rgba(245,239,214,0.6)", fontSize: 20 }}>
              Chartered Accountants
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#F5EFD6",
              fontSize: 60,
              fontWeight: 800,
              lineHeight: 1.1,
            }}
          >
            Trusted CA Firm in
          </div>
          <div style={{ color: "#D4AF37", fontSize: 60, fontWeight: 800, lineHeight: 1.1 }}>
            Malad East, Mumbai
          </div>
          <div style={{ color: "rgba(245,239,214,0.75)", fontSize: 26, marginTop: 20 }}>
            ITR · GST · Audit · Company Registration · NRI Taxation
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              height: 4,
              width: 64,
              background: "#D4AF37",
              borderRadius: 2,
            }}
          />
          <div style={{ color: "rgba(245,239,214,0.6)", fontSize: 22 }}>
            17+ Years of Trusted Excellence · Mumbai – 400097
          </div>
        </div>
      </div>
    ),
    { ...OG_SIZE }
  );
}
