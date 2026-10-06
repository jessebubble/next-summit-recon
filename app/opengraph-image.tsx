import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { MOUNTAIN_VIEWBOX, PEAKS_PATH, SNOW_PATH } from "@/lib/mountain";
import { site } from "@/lib/site";

export const alt = `${site.name}: roof repair in ${site.region}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const GREEN = "#03430f";

export default async function OpengraphImage() {
  const [semibold, medium, mark] = await Promise.all([
    readFile(join(process.cwd(), "assets/Geist-600.ttf")),
    readFile(join(process.cwd(), "assets/Geist-500.ttf")),
    readFile(join(process.cwd(), "public/summit-recon-mark.png"), "base64"),
  ]);

  const mountain = `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${MOUNTAIN_VIEWBOX}" preserveAspectRatio="xMaxYMax meet"><path d="${SNOW_PATH}" fill="#fff"/><path d="${PEAKS_PATH}" fill="${GREEN}"/></svg>`,
  )}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "linear-gradient(135deg, #606060 0%, #444444 55%, #3b3b3b 100%)",
          fontFamily: "Geist",
          color: "#fff",
        }}
      >
        {/* 4000×380 viewBox at 200px tall is ~2105px wide; anchor it right. */}
        <img src={mountain} alt="" width={2105} height={200} style={{ position: "absolute", right: 40, bottom: 0 }} />

        <div style={{ display: "flex", flexDirection: "column", padding: "64px 72px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
            <div
              style={{
                display: "flex",
                width: 92,
                height: 92,
                borderRadius: 18,
                background: "#fff",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={`data:image/png;base64,${mark}`} alt="" width={64} height={68} />
            </div>
            <div style={{ fontSize: 40, fontWeight: 600, letterSpacing: 6 }}>SUMMIT RECON</div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", marginTop: 52, fontSize: 76, fontWeight: 600, lineHeight: 1.05, letterSpacing: -2 }}>
            <span>Small crew.</span>
            <span>Serious roof repair.</span>
          </div>
          <div style={{ marginTop: 24, fontSize: 30, fontWeight: 500, color: "rgba(255,255,255,0.8)" }}>
            {`Roof repair · Storm damage · Free inspections · ${site.region.split(" & ")[0]}, TX`}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Geist", data: semibold, weight: 600, style: "normal" },
        { name: "Geist", data: medium, weight: 500, style: "normal" },
      ],
    },
  );
}
