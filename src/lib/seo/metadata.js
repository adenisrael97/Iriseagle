/**
 * Metadata generation helpers for Iriseagle.
 *
 * WHY THIS FILE EXISTS:
 * Instead of manually constructing the same openGraph/twitter/alternates
 * shape in every page file, every page calls one of these builders and
 * gets a consistent, fully-populated metadata object back.
 *
 * HOW NEXT.JS USES THIS:
 * Each page exports `metadata` (static) or `generateMetadata()` (dynamic).
 * Next.js reads those exports at build/request time, serialises them into
 * <meta> tags in the document <head>, and merges them with the root layout
 * metadata (layout.js) using a "deep merge, page wins" strategy.
 *
 * SCALING:
 * - Add `buildCollectionMetadata()` when you have paginated /vehicles?page=2 routes.
 * - Add `buildCategoryMetadata()` when you add brand filter pages (/vehicles/toyota).
 * - Add hreflang alternate entries here once you add French/Hausa language variants.
 */

import { SITE_CONFIG, SITE_URL } from "./config";
import { buildKeywords, buildVehicleKeywords } from "./keywords";

// ── Primitive helpers ──────────────────────────────────────────────────────────

/**
 * Converts a relative path to its full canonical URL.
 *
 * @param {string} [path="/"]
 * @returns {string}
 */
export function canonicalUrl(path = "/") {
  const clean = path.startsWith("/") ? path : `/${path}`;
  // Strip trailing slash except on root
  const normalized = clean.length > 1 ? clean.replace(/\/$/, "") : clean;
  return `${SITE_URL}${normalized}`;
}

/**
 * Formats a page title for <title> and og:title.
 * Keeps root page title unchanged; appends brand name to sub-pages.
 *
 * @param {string} [pageTitle]
 * @returns {string}
 */
export function buildTitle(pageTitle) {
  if (!pageTitle) return `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`;
  return `${pageTitle} | ${SITE_CONFIG.name}`;
}

/**
 * Appends a geo-targeting phrase to a description string if not already present.
 *
 * @param {string} base
 * @param {string} [location="Nigeria"]
 * @returns {string}
 */
export function buildDescription(base, location = "Nigeria") {
  if (base.toLowerCase().includes(location.toLowerCase())) return base;
  return `${base} Serving buyers across ${location}.`;
}

// ── Open Graph & Twitter builders ─────────────────────────────────────────────

/**
 * Constructs a Next.js-compatible openGraph metadata object.
 *
 * @param {{
 *   title: string,
 *   description: string,
 *   url: string,
 *   image?: string,
 *   imageAlt?: string,
 *   type?: string,
 * }} opts
 * @returns {import('next').Metadata['openGraph']}
 */
export function buildOpenGraph({ title, description, url, image, imageAlt, type = "website" }) {
  const imageUrl = image ?? SITE_CONFIG.ogImage;
  return {
    type,
    locale: SITE_CONFIG.locale,
    url,
    siteName: SITE_CONFIG.name,
    title,
    description,
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: imageAlt ?? title,
      },
    ],
  };
}

/**
 * Constructs a Next.js-compatible twitter metadata object.
 *
 * @param {{
 *   title: string,
 *   description: string,
 *   image?: string,
 * }} opts
 * @returns {import('next').Metadata['twitter']}
 */
export function buildTwitterCard({ title, description, image }) {
  return {
    card: "summary_large_image",
    site: SITE_CONFIG.twitterHandle,
    creator: SITE_CONFIG.twitterHandle,
    title,
    description,
    images: [image ?? SITE_CONFIG.ogImage],
  };
}

// ── Primary page metadata builder ─────────────────────────────────────────────

/**
 * Builds a complete, production-ready Next.js Metadata object for any page.
 *
 * @param {{
 *   title: string,
 *   description: string,
 *   path: string,
 *   image?: string,
 *   imageAlt?: string,
 *   keywords?: string[],
 *   noIndex?: boolean,
 *   type?: string,
 *   keywordsPage?: string,
 * }} opts
 * @returns {import('next').Metadata}
 */
export function buildPageMetadata({
  title,
  description,
  path,
  image,
  imageAlt,
  keywords = [],
  noIndex = false,
  type = "website",
  keywordsPage = "home",
}) {
  const url = canonicalUrl(path);
  const fullTitle = buildTitle(title);

  return {
    title,
    description,
    keywords: buildKeywords(keywordsPage, keywords),
    authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
    creator: SITE_CONFIG.name,
    publisher: SITE_CONFIG.name,

    robots: noIndex
      ? {
          index: false,
          follow: false,
          googleBot: { index: false, follow: false },
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },

    alternates: {
      canonical: url,
    },

    openGraph: buildOpenGraph({
      title: fullTitle,
      description,
      url,
      image,
      imageAlt,
      type,
    }),

    twitter: buildTwitterCard({
      title: fullTitle,
      description,
      image,
    }),
  };
}

// ── Vehicle-specific metadata builder ─────────────────────────────────────────

/**
 * Builds metadata optimised for a vehicle detail or listing page.
 * Automatically crafts title, description, and keywords from vehicle data.
 *
 * @param {{
 *   make: string,
 *   model: string,
 *   year?: number | string,
 *   price?: string,
 *   condition?: "new" | "used" | "tokunbo",
 *   image?: string,
 *   slug: string,
 *   description?: string,
 * }} vehicle
 * @returns {import('next').Metadata}
 */
export function buildVehicleMetadata({ make, model, year, price, condition, image, slug, description }) {
  const conditionLabel =
    condition === "tokunbo"
      ? "Foreign Used (Tokunbo)"
      : condition === "used"
      ? "Nigerian Used"
      : "Brand New";

  const title = `${year ? `${year} ` : ""}${make} ${model} for Sale in Nigeria`;
  const desc =
    description ??
    `Buy ${conditionLabel} ${year ?? ""} ${make} ${model} in Nigeria. ${
      price ? `Starting from ${price}. ` : ""
    }Flexible financing available. Trusted luxury car dealer in Lagos, Abuja & Port Harcourt.`;

  return buildPageMetadata({
    title,
    description: desc.trim(),
    path: `/showroom/our-vehicles/${slug}`,
    image,
    imageAlt: `${year ?? ""} ${make} ${model} for sale in Nigeria`.trim(),
    keywords: buildVehicleKeywords({ make, model, year, condition }),
    type: "website",
    keywordsPage: "vehicles",
  });
}

// ── Blog / Article metadata builder ───────────────────────────────────────────

/**
 * Builds metadata for a blog/article page.
 *
 * @param {{
 *   title: string,
 *   description: string,
 *   slug: string,
 *   image?: string,
 *   publishedAt?: string,
 * }} article
 * @returns {import('next').Metadata}
 */
export function buildArticleMetadata({ title, description, slug, image, publishedAt }) {
  return {
    ...buildPageMetadata({
      title,
      description,
      path: `/showroom/blog/${slug}`,
      image,
      imageAlt: title,
      keywordsPage: "blog",
      type: "article",
    }),
    ...(publishedAt && {
      openGraph: buildOpenGraph({
        title: buildTitle(title),
        description,
        url: canonicalUrl(`/showroom/blog/${slug}`),
        image,
        imageAlt: title,
        type: "article",
      }),
    }),
  };
}

// ── Root layout metadata (used once in app/layout.js) ─────────────────────────

/**
 * Returns the base metadata exported from the root layout.
 * Individual pages inherit and override this via Next.js metadata merge.
 *
 * @returns {import('next').Metadata}
 */
export function buildRootMetadata() {
  return {
    metadataBase: new URL(SITE_URL),

    title: {
      default: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
      template: `%s | ${SITE_CONFIG.name}`,
    },

    description: SITE_CONFIG.description,

    keywords: buildKeywords("home"),

    authors: [{ name: SITE_CONFIG.name, url: SITE_URL }],
    creator: SITE_CONFIG.name,
    publisher: SITE_CONFIG.name,

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    alternates: {
      canonical: SITE_URL,
    },

    openGraph: {
      type: "website",
      locale: SITE_CONFIG.locale,
      url: SITE_URL,
      siteName: SITE_CONFIG.name,
      title: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
      description: SITE_CONFIG.description,
      images: [
        {
          url: SITE_CONFIG.ogImage,
          width: 1200,
          height: 630,
          alt: `${SITE_CONFIG.name} — Nigeria's Premier Luxury Car Dealership`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      site: SITE_CONFIG.twitterHandle,
      creator: SITE_CONFIG.twitterHandle,
      title: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
      description: SITE_CONFIG.description,
      images: [SITE_CONFIG.ogImage],
    },

    // Verified ownership meta — fill in values from Google / Bing Webmaster Tools
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "",
      other: {
        "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ?? "",
      },
    },

    category: "automotive",
  };
}
