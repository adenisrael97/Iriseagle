/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  experimental: {
    optimizeCss: true,
  },

  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [50, 55, 60, 72, 75, 85, 90, 100],
    minimumCacheTTL: 2592000,
  },

  async headers() {
    const cspDirectives = [
      "default-src 'self'",
      // Scripts: self + inline (Next.js hydration & JSON-LD require unsafe-inline).
      // unsafe-eval is added in dev only — React uses eval() for stack reconstruction.
      // React explicitly never uses eval() in production builds.
      `script-src 'self' 'unsafe-inline'${process.env.NODE_ENV !== "production" ? " 'unsafe-eval'" : ""} https://www.googletagmanager.com https://www.google-analytics.com`,
      // Styles: self + inline (Tailwind inlines critical CSS)
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      // Fonts
      "font-src 'self' https://fonts.gstatic.com data:",
      // Images: self + data URIs + external CDNs you actually use
      "img-src 'self' data: blob: https:",
      // Frames: only Google Maps embed
      "frame-src https://www.google.com https://maps.google.com",
      // Connections: analytics, WhatsApp, maps APIs
      "connect-src 'self' https://www.google-analytics.com https://vitals.vercel-insights.com https://maps.googleapis.com",
      // Media
      "media-src 'self'",
      // Workers (Next.js Service Worker)
      "worker-src 'self' blob:",
      // Object embeds: none
      "object-src 'none'",
      // Base URI: restrict to self (prevents base-tag hijacking)
      "base-uri 'self'",
      // Form actions
      "form-action 'self'",
      // Upgrade insecure requests in production
      ...(process.env.NODE_ENV === "production" ? ["upgrade-insecure-requests"] : []),
    ].join("; ");

    const securityHeaders = [
      // ── SEO-relevant headers ────────────────────────────────────────────────
      // X-Robots-Tag applies to all responses (belt + braces alongside <meta robots>)
      { key: "X-Robots-Tag", value: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },

      // ── Security headers (Google Chrome Lighthouse audit) ──────────────────
      // Prevents MIME-type sniffing — indirect SEO benefit via trust scores
      { key: "X-Content-Type-Options", value: "nosniff" },

      // Prevents clickjacking — security + trust signal
      { key: "X-Frame-Options", value: "SAMEORIGIN" },

      // Forces HTTPS for 1 year (prevents mixed-content warnings)
      { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },

      // XSS protection (legacy browsers)
      { key: "X-XSS-Protection", value: "1; mode=block" },

      // Referrer policy — send origin on cross-site requests (for analytics accuracy)
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },

      // Permissions policy — disable unused browser features
      {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=(self), payment=(self), usb=()",
      },

      // Content Security Policy
      { key: "Content-Security-Policy", value: cspDirectives },
    ];

    return [
      // ── Next.js hashed chunks — immutable forever ──────────────────────────
      ...(process.env.NODE_ENV === "production"
        ? [
            {
              source: "/_next/static/:path*",
              headers: [
                { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
              ],
            },
          ]
        : []),

      // ── Public image/font assets ───────────────────────────────────────────
      {
        source: "/:path*\\.(jpg|jpeg|png|webp|avif|gif|svg|ico|woff|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },

      // ── SEO files — short cache so changes propagate quickly ───────────────
      {
        source: "/(sitemap.xml|robots.txt|manifest.webmanifest)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=3600, stale-while-revalidate=86400" },
        ],
      },

      // ── All routes: security headers ──────────────────────────────────────
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
