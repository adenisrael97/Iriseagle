/**
 * Root Open Graph image — auto-registered by Next.js for the / route
 * and inherited by all pages that don't define their own opengraph-image.
 *
 * WHY DYNAMIC GENERATION:
 * A static JPG works, but Next.js ImageResponse lets Google, Twitter, Facebook,
 * LinkedIn, and WhatsApp receive a freshly-rendered 1200×630 PNG with consistent
 * branding — no Figma / Photoshop dependency. The Node.js runtime renders it
 * on first request then caches it at the CDN edge indefinitely.
 *
 * HOW TO CUSTOMISE PER-PAGE:
 * Drop an `opengraph-image.jsx` file into any `app/` sub-route
 * (e.g. `app/showroom/our-vehicles/opengraph-image.jsx`) and pass vehicle
 * data as props from a parent `generateImageMetadata()` export.
 */

import { ImageResponse } from "next/og";

export const alt = "Iriseagle | Nigeria's Premier Luxury Car Dealership";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
          background: "linear-gradient(135deg, #080808 0%, #141428 45%, #0f1f3d 100%)",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* ── Subtle grid overlay ── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(220,38,38,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(220,38,38,0.06) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        {/* ── Top accent bar ── */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "5px",
            background: "linear-gradient(90deg, #dc2626 0%, #f97316 50%, #dc2626 100%)",
          }}
        />

        {/* ── Corner decoration: top-left ── */}
        <div
          style={{
            position: "absolute",
            top: 32,
            left: 40,
            width: 60,
            height: 60,
            borderTop: "3px solid rgba(220,38,38,0.5)",
            borderLeft: "3px solid rgba(220,38,38,0.5)",
          }}
        />

        {/* ── Corner decoration: bottom-right ── */}
        <div
          style={{
            position: "absolute",
            bottom: 64,
            right: 40,
            width: 60,
            height: 60,
            borderBottom: "3px solid rgba(220,38,38,0.5)",
            borderRight: "3px solid rgba(220,38,38,0.5)",
          }}
        />

        {/* ── Main content block ── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            padding: "0 80px",
            textAlign: "center",
          }}
        >
          {/* Brand wordmark */}
          <div
            style={{
              fontSize: 88,
              fontWeight: 900,
              color: "#ffffff",
              letterSpacing: "-3px",
              lineHeight: 1,
              textTransform: "uppercase",
              textShadow: "0 4px 32px rgba(220,38,38,0.4)",
            }}
          >
            IRISEAGLE
          </div>

          {/* Divider */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <div style={{ height: "2px", width: "80px", background: "rgba(220,38,38,0.6)" }} />
            <div style={{ width: "8px", height: "8px", background: "#dc2626", borderRadius: "50%" }} />
            <div style={{ height: "2px", width: "80px", background: "rgba(220,38,38,0.6)" }} />
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 24,
              color: "#cbd5e1",
              fontWeight: 400,
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            Nigeria&apos;s Premier Luxury Car Dealership
          </div>

          {/* City pills */}
          <div style={{ display: "flex", gap: "14px", marginTop: "4px" }}>
            {["Lagos", "Abuja", "Port Harcourt"].map((city) => (
              <div
                key={city}
                style={{
                  padding: "7px 18px",
                  background: "rgba(220,38,38,0.12)",
                  border: "1px solid rgba(220,38,38,0.35)",
                  borderRadius: "100px",
                  color: "#fca5a5",
                  fontSize: 15,
                  fontWeight: 500,
                  letterSpacing: "0.5px",
                }}
              >
                {city}
              </div>
            ))}
          </div>
        </div>

        {/* ── Brand bar row ── */}
        <div
          style={{
            position: "absolute",
            bottom: 26,
            display: "flex",
            alignItems: "center",
            gap: "10px",
            color: "#64748b",
            fontSize: 15,
            letterSpacing: "0.5px",
          }}
        >
          <span>iriseaglelimited.com</span>
          <span style={{ color: "#dc2626" }}>·</span>
          <span>Toyota</span>
          <span style={{ color: "#dc2626" }}>·</span>
          <span>Lexus</span>
          <span style={{ color: "#dc2626" }}>·</span>
          <span>Mercedes</span>
          <span style={{ color: "#dc2626" }}>·</span>
          <span>BMW</span>
          <span style={{ color: "#dc2626" }}>·</span>
          <span>EVs</span>
        </div>

        {/* ── Bottom accent bar ── */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "4px",
            background: "linear-gradient(90deg, #991b1b 0%, #dc2626 50%, #991b1b 100%)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
