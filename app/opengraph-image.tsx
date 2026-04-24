import { ImageResponse } from "next/og"

export const alt = "Edtools Labs — AI STEAM tutor for kinematics"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FBFAF9",
          padding: "72px 80px",
          color: "#37322F",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 26,
            fontWeight: 600,
            letterSpacing: -0.4,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 36,
              height: 36,
              borderRadius: 10,
              background: "#37322F",
            }}
          />
          <span style={{ display: "flex" }}>Edtools Labs</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              fontSize: 104,
              fontWeight: 500,
              lineHeight: 1.04,
              letterSpacing: -3,
              fontFamily: "serif",
            }}
          >
            The AI STEAM tutor.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 104,
              fontWeight: 500,
              lineHeight: 1.04,
              letterSpacing: -3,
              fontFamily: "serif",
              color: "rgba(55,50,47,0.55)",
            }}
          >
            Physics you can feel.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            color: "rgba(55,50,47,0.7)",
            fontWeight: 500,
          }}
        >
          <div style={{ display: "flex", gap: 22 }}>
            <span style={{ display: "flex" }}>Voice</span>
            <span style={{ display: "flex", opacity: 0.4 }}>·</span>
            <span style={{ display: "flex" }}>Ink</span>
            <span style={{ display: "flex", opacity: 0.4 }}>·</span>
            <span style={{ display: "flex" }}>Tilt sensors</span>
          </div>
          <div style={{ display: "flex" }}>Open source · EN/ES</div>
        </div>
      </div>
    ),
    size,
  )
}
