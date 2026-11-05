import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/lib/site";

export const alt = `${site.name}: ${site.summary} in ${site.region}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const GREEN = "#03430f";
const GREY = "#4a4a4a";

// White card with the full logo front and center. Social previews often crop
// to ~1.91:1 or a center square, so everything important sits in the middle.
export default async function OpengraphImage() {
  const [medium, logo] = await Promise.all([
    readFile(join(process.cwd(), "assets/Geist-500.ttf")),
    readFile(join(process.cwd(), "public/summit-recon-logo.png"), "base64"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#fff",
          fontFamily: "Geist",
          borderBottom: `16px solid ${GREEN}`,
        }}
      >
        {/* Logo is 1046×642. */}
        <img src={`data:image/png;base64,${logo}`} alt="" width={604} height={371} />
        <div style={{ marginTop: 40, fontSize: 32, fontWeight: 500, color: GREY, letterSpacing: 0.5 }}>
          General Contracting · Reconstruction · Remodeling
        </div>
        <div style={{ marginTop: 10, fontSize: 26, fontWeight: 500, color: GREEN }}>
          {`${site.cities}, TX · summit-recon.com`}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Geist", data: medium, weight: 500, style: "normal" }],
    },
  );
}
