import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import StructuredData from "@/components/seo/StructuredData";
import { buildRootMetadata } from "@/lib/seo/metadata";
import { rootSchemas } from "@/lib/seo/schema";
import { SITE_CONFIG, SITE_URL } from "@/lib/seo/config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  // Preload only the weights we actually use — avoids shipping unused bytes
  weight: ["400", "500", "600", "700", "800", "900"],
});

// ── Root metadata ──────────────────────────────────────────────────────────────
// Individual pages export their own `metadata` object which Next.js deep-merges
// with this one (page values win on conflict). Fields not overridden by a page
// (e.g. twitter.site, verification tokens) are inherited from here.
export const metadata = {
  ...buildRootMetadata(),

  // metadataBase makes all relative image paths in OG/Twitter absolute
  metadataBase: new URL(SITE_URL),

  // Geo-targeting: signals primary location to search engines that support
  // these extended meta tags (Bing, Yandex, some Google crawl hints)
  other: {
    // ICBM / geo coordinates for Abuja showroom
    "ICBM": `${SITE_CONFIG.geo.latitude}, ${SITE_CONFIG.geo.longitude}`,
    "geo.region": "NG-FC",          // Federal Capital Territory, Nigeria
    "geo.placename": "Abuja, Nigeria",
    "geo.position": `${SITE_CONFIG.geo.latitude};${SITE_CONFIG.geo.longitude}`,

    // Content language for Nigerian English audience
    "content-language": "en-NG",

    // Apple mobile web app meta
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": SITE_CONFIG.name,

    // Mobile theme colour (Android Chrome tab bar)
    "theme-color": "#dc2626",

    // Referrer policy — send full URL to same-origin, only origin to cross-origin
    referrer: "strict-origin-when-cross-origin",

    // Verification placeholders — set the env vars in Vercel dashboard
    ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && {
      "google-site-verification": process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    }),
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      // hreflang: currently English-Nigeria only. When you add Yoruba or Hausa
      // variants, create /yo and /ha sub-routes and add hreflang <link> tags.
      className={`${geistSans.variable} h-full antialiased`}
    >
      <head>
        {/*
          ── Preconnect hints ────────────────────────────────────────────────
          Tell the browser to open TCP connections early to external origins
          so fonts/scripts load faster (Core Web Vitals: LCP improvement).
        */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/*
          ── DNS prefetch for third-party embeds ─────────────────────────────
          The contact page embeds Google Maps; pre-resolving the DNS cuts
          frame load time by ~100-300ms on first visit.
        */}
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
        <link rel="dns-prefetch" href="https://wa.me" />

        {/*
          ── Canonical & alternate language tags ─────────────────────────────
          The canonical is set per-page via metadata.alternates.canonical.
          The hreflang x-default marks English as the universal fallback.
        */}
        <link rel="alternate" hrefLang="en" href={SITE_URL} />
        <link rel="alternate" hrefLang="x-default" href={SITE_URL} />

        {/*
          ── JSON-LD: root schemas ────────────────────────────────────────────
          These three schemas apply site-wide:
            1. Organization     → brand entity, Knowledge Panel, logo
            2. LocalBusiness    → map pin, opening hours, contact
            3. WebSite          → Sitelinks Search Box in SERP
          Page-specific schemas (FAQ, Article, Car, Breadcrumb) are added
          inside their respective page components via <StructuredData>.
        */}
        <StructuredData schema={rootSchemas()} />
      </head>

      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
