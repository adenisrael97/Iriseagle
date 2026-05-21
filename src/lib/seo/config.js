/**
 * Central SEO configuration for Iriseagle.
 * Single source of truth — change a value here, it propagates everywhere.
 */

export const SITE_URL = "https://iriseaglelimited.com";

export const SITE_CONFIG = {
  name: "Iriseagle",
  legalName: "Iriseagle Limited",
  domain: "iriseaglelimited.com",
  url: SITE_URL,
  tagline: "Nigeria's Premier Luxury Car Dealership",
  description:
    "Iriseagle is Nigeria's #1 luxury car dealership. Shop Toyota, Lexus, Mercedes-Benz, BMW & Electric vehicles. Flexible financing, nationwide delivery, and after-sales support across Lagos, Abuja, and Port Harcourt.",

  phone: "+2348166576670",
  whatsapp: "+2348166576670",
  email: "info@iriseaglelimited.com",

  address: {
    streetAddress: "Flat 2, Jibia Street",
    addressLocality: "Garki",
    addressRegion: "Area 2, Abuja",
    addressCountry: "NG",
    postalCode: "900211",
  },

  geo: {
    latitude: "9.0400",
    longitude: "7.4800",
  },

  openingHours: ["Mo-Fr 08:00-18:00", "Sa 09:00-16:00"],

  social: {
    instagram: "https://www.instagram.com/irisautomobile1",
    facebook: "https://www.facebook.com/profile.php?id=61559248825684",
    whatsapp: "https://wa.me/2348166576670",
    twitter: "https://twitter.com/iriseagle",
  },

  logo: "/Logo/logo.jpeg",
  ogImage: "/background/background2.jpg",
  favicon: "/favicon.ico",

  locale: "en_NG",
  language: "en",
  country: "NG",
  currency: "NGN",
  priceRange: "₦₦₦",

  markets: ["Lagos", "Abuja", "Port Harcourt", "Ibadan", "Kano", "Nigeria"],

  twitterHandle: "@iriseagle",
};

export const VEHICLE_CATEGORIES = {
  toyota: {
    label: "Toyota",
    description: "Toyota vehicles — Camry, Highlander, Land Cruiser, RAV4, Corolla and more.",
    keywords: ["Toyota Nigeria", "buy Toyota Lagos", "Toyota Camry Nigeria", "Toyota Highlander Nigeria", "tokunbo Toyota Nigeria"],
  },
  lexus: {
    label: "Lexus",
    description: "Lexus luxury vehicles — ES, GX, RX, LX, NX series.",
    keywords: ["Lexus Nigeria", "buy Lexus Lagos", "Lexus ES Nigeria", "Lexus GX Nigeria", "tokunbo Lexus Nigeria"],
  },
  mercedes: {
    label: "Mercedes-Benz",
    description: "Mercedes-Benz vehicles — S-Class, C-Class, AMG, GLE, GLS.",
    keywords: ["Mercedes Nigeria", "Mercedes Lagos", "buy Mercedes Nigeria", "Mercedes AMG Nigeria"],
  },
  bmw: {
    label: "BMW",
    description: "BMW vehicles — 3 Series, 5 Series, 7 Series, X5, X7, M Series.",
    keywords: ["BMW Nigeria", "buy BMW Lagos", "BMW X5 Nigeria", "tokunbo BMW Nigeria"],
  },
  electric: {
    label: "Electric Vehicles",
    description: "Electric vehicles available in Nigeria — Toyota bZ, BMW i4.",
    keywords: ["electric cars Nigeria", "EVs Nigeria", "BMW i4 Nigeria", "Toyota bZ Nigeria"],
  },
  bus: {
    label: "Buses & Vans",
    description: "Commercial buses — Toyota Hiace, Toyota Coaster.",
    keywords: ["Toyota Hiace Nigeria", "buses for sale Nigeria", "Toyota Coaster Nigeria"],
  },
};

export const BLOG_SLUGS = ["toyota", "lexus", "mercedes", "bus", "electric"];

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
