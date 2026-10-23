import { ImageResponse } from "next/og";

import { portfolioData } from "@/data/portfolio";

export const alt = "Vilberto — Desarrollo de aplicaciones web y móviles";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: 72,
          background: "#141018",
          color: "#f3eef9",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 32, color: "#c6adff" }}>Vilberto_</div>
        <div style={{ display: "flex", fontSize: 96, letterSpacing: -3, lineHeight: 1.05, maxWidth: 950 }}>
          {portfolioData.profile.heroHeadline.replace("\n", " ")}
        </div>
        <div style={{ display: "flex", fontSize: 30 }}>
          Diseño y desarrollo web y móvil
        </div>
      </div>
    ),
    size,
  );
}
