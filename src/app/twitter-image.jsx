/**
 * Root Twitter card image — registered automatically for all pages
 * that don't override it with their own twitter-image file.
 *
 * Twitter renders this at 1200×630 (summary_large_image card).
 * Keeping it visually distinct from the OG image is optional but good
 * for A/B purposes. Here we use a slightly different accent colour split.
 */

import { ImageResponse } from "next/og";

export const alt = "Iriseagle — Buy Cars in Nigeria | Toyota, Lexus, Mercedes, BMW";
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
          alignItems: "flex-start",
          justifyContent: "flex-end",
          background: "linear-gradient(160deg, #0c0c0c 0%, #1a1a2e 60%, #0f172a 100%)",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
          overflow: "hidden",
          padding: "0 64px 56px",
        }}
      >
        {/* Background dot grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(rgba(220,38,38,0.15) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />

        {/* Large ghost text — decorative */}
        <div
          style={{
            position: "absolute",
            top: -20,
            right: -40,
            fontSize: 260,
            fontWeight: 900,
            color: "rgba(220,38,38,0.04)",
            lineHeight: 1,
            letterSpacing: "-8px",
            userSelect: "none",
          }}
        >
          EAGLE
        </div>

        {/* Top accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "4px",
            background: "linear-gradient(90deg, #dc2626, #f97316, #dc2626)",
          }}
        />

        {/* Red vertical accent */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "6px",
            height: "100%",
            background: "linear-gradient(180deg, #dc2626, #991b1b)",
          }}
        />

        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {/* Label */}
          <div
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: "#dc2626",
              letterSpacing: "4px",
              textTransform: "uppercase",
            }}
          >
            Nigeria&apos;s #1 Luxury Auto Dealer
          </div>

          {/* Brand name */}
          <div
            style={{
              fontSize: 80,
              fontWeight: 900,
              color: "#ffffff",
              letterSpacing: "-2px",
              lineHeight: 1,
            }}
          >
            IRISEAGLE
          </div>

          {/* Sub-tagline */}
          <div
            style={{
              fontSize: 22,
              color: "#94a3b8",
              fontWeight: 400,
              marginTop: "4px",
            }}
          >
            Toyota · Lexus · Mercedes-Benz · BMW · Electric Vehicles
          </div>

          {/* CTA pill */}
          <div
            style={{
              marginTop: "8px",
              display: "flex",
              alignItems: "center",
              padding: "10px 24px",
              background: "#dc2626",
              borderRadius: "6px",
              color: "#ffffff",
              fontSize: 16,
              fontWeight: 700,
              letterSpacing: "0.5px",
              maxWidth: "340px",
            }}
          >
            Shop Now → iriseaglelimited.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
