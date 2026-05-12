/**
 * Central SEO configuration for Iriseagle.
 *
 * WHY THIS FILE EXISTS:
 * All brand/location/contact constants are defined once here. Every metadata
 * helper, schema builder, and page imports from this file — change the domain
 * or phone number once and it propagates everywhere automatically.
 *
 * SCALING:
 * When you add new showrooms (e.g. Lagos branch), extend `SHOWROOMS` and
 * update `localBusinessSchema()` in schema.js to emit multiple branch entries.
 */

/** @type {string} Canonical domain — update here when switching to iriseaglelimited.com */
export const SITE_URL = "https://iriseaglelimited.com";

export const SITE_CONFIG = {
  name: "Iriseagle",
  legalName: "Iriseagle Limited",
  domain: "iriseaglelimited.com",
  url: SITE_URL,
  tagline: "Nigeria's Premier Luxury Car Dealership",
  description:
    "Iriseagle is Nigeria's #1 luxury car dealership. Shop Toyota, Lexus, Mercedes-Benz, BMW & Electric vehicles. Flexible financing, nationwide delivery, and after-sales support across Lagos, Abuja, and Port Harcourt.",

  // ── Contact ────────────────────────────────────────────────────────────────
  phone: "+2348166576670",
  whatsapp: "+2348166576670",
  email: "info@iriseaglelimited.com",

  // ── Physical address ───────────────────────────────────────────────────────
  // Primary showroom: Abuja
  address: {
    streetAddress: "Flat 2, Jibia Street",
    addressLocality: "Garki",
    addressRegion: "Area 2, Abuja",
    addressCountry: "NG",
    postalCode: "900211",
  },

  // Approximate geo-coordinates for Area 2, Abuja (used in LocalBusiness schema)
  geo: {
    latitude: "9.0400",
    longitude: "7.4800",
  },

  // ── Hours ──────────────────────────────────────────────────────────────────
  openingHours: ["Mo-Fr 08:00-18:00", "Sa 09:00-16:00"],

  // ── Social ─────────────────────────────────────────────────────────────────
  social: {
    instagram: "https://www.instagram.com/irisautomobile1",
    facebook: "https://www.facebook.com/profile.php?id=61559248825684",
    whatsapp: "https://wa.me/2348166576670",
    twitter: "https://twitter.com/iriseagle",
  },

  // ── Brand assets ───────────────────────────────────────────────────────────
  logo: "/Logo/logo.jpeg",
  ogImage: "/background/background2.jpg",
  favicon: "/favicon.ico",

  // ── Locale / currency ─────────────────────────────────────────────────────
  locale: "en_NG",
  language: "en",
  country: "NG",
  currency: "NGN",
  priceRange: "₦₦₦",

  // ── Markets served ─────────────────────────────────────────────────────────
  markets: ["Lagos", "Abuja", "Port Harcourt", "Ibadan", "Kano", "Nigeria"],

  // ── Twitter handle (for twitter:site meta) ─────────────────────────────────
  twitterHandle: "@iriseagle",
};

/**
 * Vehicle categories — drives sitemap, breadcrumbs, and vehicle-page metadata.
 * Add a new entry here when you stock a new brand (e.g. "rivian").
 *
 * @type {Record<string, {label: string, description: string, keywords: string[]}>}
 */
export const VEHICLE_CATEGORIES = {
  toyota: {
    label: "Toyota",
    description:
      "Toyota vehicles — Camry, Highlander, Land Cruiser, RAV4, Corolla and more. New and tokunbo available.",
    keywords: [
      "Toyota Nigeria",
      "buy Toyota Lagos",
      "Toyota Camry Nigeria",
      "Toyota Highlander Nigeria",
      "tokunbo Toyota Nigeria",
      "Toyota Land Cruiser Nigeria",
    ],
  },
  lexus: {
    label: "Lexus",
    description: "Lexus luxury vehicles — ES, GX, RX, LX, NX series. Foreign used and brand new.",
    keywords: [
      "Lexus Nigeria",
      "buy Lexus Lagos",
      "Lexus ES Nigeria",
      "Lexus GX Nigeria",
      "Lexus RX Nigeria",
      "tokunbo Lexus Nigeria",
    ],
  },
  mercedes: {
    label: "Mercedes-Benz",
    description:
      "Mercedes-Benz vehicles — S-Class, C-Class, E-Class, AMG, GLE, GLS. Premium selection.",
    keywords: [
      "Mercedes Nigeria",
      "Mercedes Lagos",
      "buy Mercedes Nigeria",
      "Mercedes AMG Nigeria",
      "Mercedes S Class Nigeria",
      "tokunbo Mercedes Nigeria",
    ],
  },
  bmw: {
    label: "BMW",
    description: "BMW vehicles — 3 Series, 5 Series, 7 Series, X5, X7, M Series.",
    keywords: [
      "BMW Nigeria",
      "buy BMW Lagos",
      "BMW X5 Nigeria",
      "BMW 5 Series Nigeria",
      "tokunbo BMW Nigeria",
    ],
  },
  electric: {
    label: "Electric Vehicles",
    description:
      "Electric vehicles available in Nigeria — Toyota bZ, BMW i4, and other zero-emission models.",
    keywords: [
      "electric cars Nigeria",
      "EVs Nigeria",
      "electric vehicle Lagos",
      "BMW i4 Nigeria",
      "Toyota bZ Nigeria",
      "zero emission cars Nigeria",
    ],
  },
  bus: {
    label: "Buses & Vans",
    description: "Commercial buses and vans — Toyota Hiace, Toyota Coaster, and more.",
    keywords: [
      "Toyota Hiace Nigeria",
      "buses for sale Nigeria",
      "Toyota Coaster Nigeria",
      "commercial vehicle Nigeria",
      "15 seater bus Nigeria",
    ],
  },
};

/**
 * Blog slugs — kept in sync with the actual blog route handlers.
 * Extend this array when you publish new brand blog posts.
 */
export const BLOG_SLUGS = ["toyota", "lexus", "mercedes", "bus", "electric"];

/**
 * Canonical page routes — used in sitemap and canonical URL helpers.
 */
export const PAGE_ROUTES = {
  home: "/",
  about: "/about",
  contact: "/contact",
  financing: "/financing",
  showroom: "/showroom/our-vehicles",
  latestVehicles: "/showroom/latest-vehicles",
  blog: "/showroom/blog",
  preorder: "/more/preorder",
  afterSales: "/more/book-after-sales",
  history: "/more/history",
};

/**
 * Route priority weights for the XML sitemap.
 * 1.0 = highest crawl priority; 0.5 = lowest.
 */
export const SITEMAP_PRIORITIES = {
  "/": 1.0,
  "/showroom/our-vehicles": 0.95,
  "/showroom/latest-vehicles": 0.95,
  "/contact": 0.9,
  "/financing": 0.88,
  "/more/preorder": 0.85,
  "/about": 0.82,
  "/showroom/blog": 0.8,
  "/more/book-after-sales": 0.75,
  "/more/history": 0.6,
  default: 0.7,
};
