import { SITE_URL, BLOG_SLUGS, SITEMAP_PRIORITIES, PAGE_ROUTES } from "@/lib/seo/config";

const SITE_LAUNCH_DATE = new Date("2025-01-01");
const NOW = new Date();

const STATIC_PAGES = [
  { route: PAGE_ROUTES.home,          changeFreq: "daily",   lastMod: NOW },
  { route: PAGE_ROUTES.showroom,      changeFreq: "daily",   lastMod: NOW },
  { route: PAGE_ROUTES.latestVehicles,changeFreq: "daily",   lastMod: NOW },
  { route: PAGE_ROUTES.contact,       changeFreq: "monthly", lastMod: SITE_LAUNCH_DATE },
  { route: PAGE_ROUTES.financing,     changeFreq: "monthly", lastMod: SITE_LAUNCH_DATE },
  { route: PAGE_ROUTES.preorder,      changeFreq: "weekly",  lastMod: NOW },
  { route: PAGE_ROUTES.about,         changeFreq: "monthly", lastMod: SITE_LAUNCH_DATE },
  { route: PAGE_ROUTES.blog,          changeFreq: "weekly",  lastMod: NOW },
  { route: PAGE_ROUTES.afterSales,    changeFreq: "monthly", lastMod: SITE_LAUNCH_DATE },
  { route: PAGE_ROUTES.history,       changeFreq: "yearly",  lastMod: SITE_LAUNCH_DATE },
];

const VEHICLE_ENTRIES = [
  { slug: "toyota-camry-2024",        image: "/Toyota/Toyota Camry 2024.jpeg",         label: "Toyota Camry 2024" },
  { slug: "toyota-camry-2025",        image: "/Toyota/Toyota Camry 2025.jpeg",         label: "Toyota Camry 2025" },
  { slug: "toyota-camry-2026",        image: "/Toyota/Toyota Camry 2026.jpeg",         label: "Toyota Camry 2026" },
  { slug: "toyota-highlander-2024",   image: "/Toyota/Toyota Highlander 2024.jpeg",    label: "Toyota Highlander 2024" },
  { slug: "lexus-es-2025",            image: "/Lexus/Lexus ES 2025.jpg",               label: "Lexus ES 2025" },
  { slug: "lexus-gx-2024",            image: "/Lexus/Lexus GX 2024.jpeg",              label: "Lexus GX 2024" },
  { slug: "mercedes-amg-c63-2025",    image: "/Mercedes/Mercedes AMG C63 2025.webp",   label: "Mercedes AMG C63 2025" },
  { slug: "mercedes-s-class-2025",    image: "/Mercedes/Mercedes S Class 2025.jpg",    label: "Mercedes S Class 2025" },
  { slug: "toyota-bz-2025",           image: "/Electric/Toyota bZ 2025.jpeg",          label: "Toyota bZ Electric 2025" },
  { slug: "bmw-i4-2025",              image: "/Electric/Bmw I4 2025.jpeg",             label: "BMW i4 Electric 2025" },
];

export default function sitemap() {
  const staticRoutes = STATIC_PAGES.map(({ route, changeFreq, lastMod }) => ({
    url: `${SITE_URL}${route}`,
    lastModified: lastMod,
    changeFrequency: changeFreq,
    priority: SITEMAP_PRIORITIES[route] ?? SITEMAP_PRIORITIES.default,
  }));

  const blogRoutes = BLOG_SLUGS.map((slug) => ({
    url: `${SITE_URL}/showroom/blog/${slug}`,
    lastModified: NOW,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  // images must be plain strings (not objects) for Next.js sitemap serialisation
  const vehicleRoutes = VEHICLE_ENTRIES.map(({ slug, image }) => ({
    url: `${SITE_URL}/showroom/our-vehicles/${slug}`,
    lastModified: NOW,
    changeFrequency: "weekly",
    priority: 0.9,
    images: [`${SITE_URL}${image}`],
  }));

  return [...staticRoutes, ...blogRoutes, ...vehicleRoutes];
}
