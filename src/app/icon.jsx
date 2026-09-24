import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = {
  width: 48,
  height: 48,
};
export const contentType = "image/png";

export default async function Icon() {
  let logoSrc = null;
  try {
    const logoData = await readFile(join(process.cwd(), "public", "omj-logo.png"));
    logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;
  } catch (e) {
    // fallback if file not readable
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
          background: "transparent",
        }}
      >
        {logoSrc ? (
          <img
            src={logoSrc}
            width="48"
            height="48"
            style={{ objectFit: "contain" }}
            alt="OMJ Favicon"
          />
        ) : (
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              background: "#081d45",
              border: "2px solid #ffdb15",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffdb15",
              fontWeight: 800,
              fontSize: "18px",
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
