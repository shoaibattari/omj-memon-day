import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Karachi Youth Talk 2026 | The Okhai Memon Jamat";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OpenGraphImage() {
  let logoSrc = null;
  let speakerSrc = null;

  try {
    const logoData = await readFile(join(process.cwd(), "public", "omj-logo.png"));
    logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;
  } catch (e) {
    // fallback
  }

  try {
    const speakerData = await readFile(join(process.cwd(), "public", "speaker-soban.jpeg"));
    speakerSrc = `data:image/jpeg;base64,${speakerData.toString("base64")}`;
  } catch (e) {
    // fallback
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #030b1e 0%, #071e4a 55%, #020712 100%)",
          padding: "46px 54px",
          fontFamily: "sans-serif",
          position: "relative",
          border: "8px solid #2563eb",
        }}
      >
        {/* Top Header Row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            {logoSrc && (
              <img
                src={logoSrc}
                width="68"
                height="68"
                style={{ objectFit: "contain" }}
                alt="OMJ Logo"
              />
            )}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontSize: "24px",
                  fontWeight: 800,
                  color: "#ffffff",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                The Okhai Memon Jamat
              </span>
              <span
                style={{
                  fontSize: "13px",
                  color: "#38bdf8",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                }}
              >
                Youth Affairs & Development Presents
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "rgba(255, 219, 21, 0.15)",
              border: "2px solid #ffdb15",
              borderRadius: "50px",
              padding: "10px 22px",
            }}
          >
            <span
              style={{
                fontSize: "15px",
                fontWeight: 800,
                color: "#ffdb15",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Free Entry • Open For All
            </span>
          </div>
        </div>

        {/* Center Section: Main Title & Keynote Speaker */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "12px",
            marginBottom: "12px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: speakerSrc ? "760px" : "100%",
            }}
          >
            <div
              style={{
                fontSize: "66px",
                fontWeight: 900,
                color: "#ffffff",
                lineHeight: 1.02,
                letterSpacing: "-0.01em",
                textTransform: "uppercase",
              }}
            >
              KARACHI <span style={{ color: "#ffdb15" }}>YOUTH TALK</span> 2026
            </div>

            <div
              style={{
                marginTop: "14px",
                fontSize: "23px",
                fontWeight: 700,
                color: "#60a5fa",
                letterSpacing: "0.03em",
                textTransform: "uppercase",
              }}
            >
              The Future of Youth: From Threats to Opportunities
            </div>

            <div
              style={{
                marginTop: "12px",
                fontSize: "17px",
                color: "rgba(224, 242, 254, 0.8)",
                lineHeight: 1.45,
              }}
            >
              Gain clear career direction, leadership mindset, and interactive guidance directly from Soban Attari.
            </div>
          </div>

          {speakerSrc && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "rgba(15, 23, 42, 0.85)",
                border: "2px solid rgba(255, 219, 21, 0.8)",
                borderRadius: "20px",
                padding: "14px 18px",
                boxShadow: "0 15px 35px rgba(0,0,0,0.6)",
              }}
            >
              <img
                src={speakerSrc}
                width="155"
                height="185"
                style={{
                  objectFit: "cover",
                  borderRadius: "14px",
                  border: "2px solid rgba(255, 255, 255, 0.2)",
                }}
                alt="Soban Attari"
              />
              <div
                style={{
                  marginTop: "10px",
                  fontSize: "16px",
                  fontWeight: 800,
                  color: "#ffffff",
                  textAlign: "center",
                }}
              >
                Soban Attari
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "#ffdb15",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                Keynote Speaker
              </div>
            </div>
          )}
        </div>

        {/* Bottom Logistics Row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "rgba(30, 58, 138, 0.4)",
            border: "1px solid rgba(56, 189, 248, 0.35)",
            borderRadius: "14px",
            padding: "14px 24px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "20px" }}>📅</span>
            <span style={{ fontSize: "16px", color: "#ffffff", fontWeight: 700 }}>
              Sunday, 27 September 2026
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "20px" }}>🕖</span>
            <span style={{ fontSize: "16px", color: "#ffffff", fontWeight: 700 }}>
              7:00 PM – 9:00 PM
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "20px" }}>📍</span>
            <span style={{ fontSize: "16px", color: "#ffffff", fontWeight: 700 }}>
              Husein Ebrahim Sports Complex, Karachi
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
