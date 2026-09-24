import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default async function AppleIcon() {
  let logoSrc = null;
  try {
    const logoData = await readFile(join(process.cwd(), "public", "omj-logo.png"));
    logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;
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
          alignItems: "center",
          justifyContent: "center",
          background: "radial-gradient(circle, #081d45 0%, #030b1e 100%)",
          borderRadius: "36px",
          border: "4px solid #ffdb15",
        }}
      >
        {logoSrc ? (
          <img
            src={logoSrc}
            width="135"
            height="135"
            style={{ objectFit: "contain" }}
            alt="OMJ Apple Icon"
          />
        ) : (
          <div
            style={{
              color: "#ffdb15",
              fontWeight: 900,
              fontSize: "48px",
            }}
          >
            OMJ
          </div>
        )}
      </div>
    ),
    {
      ...size,
    }
  );
}
