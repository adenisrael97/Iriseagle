/**
 * Web App Manifest — registered automatically by Next.js App Router.
 * Enables "Add to Home Screen" on mobile, PWA install prompts,
 * and provides app identity metadata to browsers and search engines.
 *
 * The manifest also feeds Chrome's Lighthouse PWA audit, which Google
 * considers a positive signal in page quality scoring.
 */

export default function manifest() {
  return {
    name: "Iriseagle — Luxury Car Dealership Nigeria",
    short_name: "Iriseagle",
    description:
      "Nigeria's Premier Luxury Car Dealership. Buy Toyota, Lexus, Mercedes-Benz, BMW & Electric Vehicles with flexible financing.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait-primary",
    background_color: "#080808",
    theme_color: "#dc2626",
    lang: "en-NG",
    dir: "ltr",
    categories: ["automotive", "shopping", "business"],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
        purpose: "any",
      },
      {
        src: "/Logo/logo.jpeg",
        sizes: "512x512",
        type: "image/jpeg",
        purpose: "any maskable",
      },
    ],
    screenshots: [
      {
        src: "/background/background2.jpg",
        sizes: "1200x630",
        type: "image/jpeg",
        form_factor: "wide",
        label: "Iriseagle Showroom",
      },
    ],
    shortcuts: [
      {
        name: "Our Vehicles",
        short_name: "Vehicles",
        url: "/showroom/our-vehicles",
        description: "Browse our full vehicle inventory",
        icons: [{ src: "/favicon.ico", sizes: "any" }],
      },
      {
        name: "Latest Arrivals",
        short_name: "Latest",
        url: "/showroom/latest-vehicles",
        description: "See the newest 2026 models",
        icons: [{ src: "/favicon.ico", sizes: "any" }],
      },
      {
        name: "Contact Us",
        short_name: "Contact",
        url: "/contact",
        description: "Get in touch with Iriseagle",
        icons: [{ src: "/favicon.ico", sizes: "any" }],
      },
      {
        name: "Financing",
        short_name: "Finance",
        url: "/financing",
        description: "Explore car financing options",
        icons: [{ src: "/favicon.ico", sizes: "any" }],
      },
    ],
    related_applications: [],
    prefer_related_applications: false,
  };
}
