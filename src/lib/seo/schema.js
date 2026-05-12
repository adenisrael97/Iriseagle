/**
 * Schema.org structured data generators for Iriseagle.
 *
 * WHY THIS FILE EXISTS:
 * Structured data (JSON-LD) tells Google exactly what your content means,
 * not just what it says. Correct schemas unlock Rich Results in search:
 *   - AutoDealer → business hours, map pin, phone in Knowledge Panel
 *   - BreadcrumbList → breadcrumb trail under search result URL
 *   - FAQPage → expandable Q&A blocks directly in SERP
 *   - Car/Product → price, condition, availability in vehicle snippets
 *   - Article → author, date, hero image in Discover and News
 *   - SearchAction → Sitelinks Search Box in brand SERP
 *   - AggregateRating → star rating shown under listing title
 *
 * HOW TO USE:
 *   import { organizationSchema, localBusinessSchema } from "@/lib/seo/schema";
 *   import StructuredData from "@/components/seo/StructuredData";
 *   <StructuredData schema={[organizationSchema(), localBusinessSchema()]} />
 *
 * SCALING:
 * - When you add new showrooms, create a separate localBusinessSchema entry per branch.
 * - When Supabase powers vehicle pages, pass the real DB row into vehicleSchema().
 * - When you collect reviews, pass real data into aggregateRatingSchema().
 */

import { SITE_CONFIG, SITE_URL } from "./config";

// ── Organization ──────────────────────────────────────────────────────────────

/**
 * Organization schema — represents the Iriseagle company entity.
 * Google uses this to build the Knowledge Panel for brand searches.
 */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.legalName,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      "@id": `${SITE_URL}/#logo`,
      url: `${SITE_URL}${SITE_CONFIG.logo}`,
      contentUrl: `${SITE_URL}${SITE_CONFIG.logo}`,
      caption: SITE_CONFIG.name,
      width: 512,
      height: 512,
    },
    image: `${SITE_URL}${SITE_CONFIG.ogImage}`,
    description: SITE_CONFIG.description,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    foundingDate: "2020",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.streetAddress,
      addressLocality: SITE_CONFIG.address.addressLocality,
      addressRegion: SITE_CONFIG.address.addressRegion,
      addressCountry: SITE_CONFIG.address.addressCountry,
      postalCode: SITE_CONFIG.address.postalCode,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SITE_CONFIG.phone,
        contactType: "sales",
        areaServed: "NG",
        availableLanguage: ["en", "yo", "ha", "ig"],
      },
      {
        "@type": "ContactPoint",
        telephone: SITE_CONFIG.whatsapp,
        contactType: "customer service",
        contactOption: "TollFree",
        areaServed: "NG",
        availableLanguage: "en",
      },
    ],
    sameAs: [
      SITE_CONFIG.social.instagram,
      SITE_CONFIG.social.facebook,
    ],
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: 10,
    },
  };
}

// ── Local Business / Auto Dealer ──────────────────────────────────────────────

/**
 * LocalBusiness + AutoDealer schema — the primary location entity.
 * Powers the Google Maps business pin and the local pack result.
 * Add additional branch objects (same shape) for future showrooms.
 */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["AutoDealer", "LocalBusiness"],
    "@id": `${SITE_URL}/#localbusiness`,
    name: SITE_CONFIG.name,
    url: SITE_URL,
    telephone: SITE_CONFIG.phone,
    priceRange: SITE_CONFIG.priceRange,
    currenciesAccepted: SITE_CONFIG.currency,
    paymentAccepted: "Cash, Bank Transfer, Financing, Mobile Money",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "16:00",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.streetAddress,
      addressLocality: SITE_CONFIG.address.addressLocality,
      addressRegion: SITE_CONFIG.address.addressRegion,
      addressCountry: SITE_CONFIG.address.addressCountry,
      postalCode: SITE_CONFIG.address.postalCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_CONFIG.geo.latitude,
      longitude: SITE_CONFIG.geo.longitude,
    },
    image: `${SITE_URL}${SITE_CONFIG.ogImage}`,
    description: SITE_CONFIG.description,
    areaServed: [
      { "@type": "City", name: "Abuja", "@id": "https://www.wikidata.org/wiki/Q3787" },
      { "@type": "City", name: "Lagos", "@id": "https://www.wikidata.org/wiki/Q8673" },
      { "@type": "City", name: "Port Harcourt" },
      { "@type": "Country", name: "Nigeria", "@id": "https://www.wikidata.org/wiki/Q1033" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Vehicle Inventory",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Car", brand: { "@type": "Brand", name: "Toyota" } } },
        { "@type": "Offer", itemOffered: { "@type": "Car", brand: { "@type": "Brand", name: "Lexus" } } },
        { "@type": "Offer", itemOffered: { "@type": "Car", brand: { "@type": "Brand", name: "Mercedes-Benz" } } },
        { "@type": "Offer", itemOffered: { "@type": "Car", brand: { "@type": "Brand", name: "BMW" } } },
      ],
    },
    sameAs: [
      SITE_CONFIG.social.instagram,
      SITE_CONFIG.social.facebook,
    ],
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
  };
}

// ── WebSite + SearchAction (Sitelinks Search Box) ─────────────────────────────

/**
 * WebSite schema with a SearchAction.
 * When Google sees this, it may show a search box below your brand result
 * (the "Sitelinks Search Box") — extremely valuable for automotive sites.
 */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_CONFIG.name,
    url: SITE_URL,
    description: SITE_CONFIG.description,
    inLanguage: "en-NG",
    publisher: { "@id": `${SITE_URL}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/showroom/our-vehicles?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

// ── Breadcrumbs ───────────────────────────────────────────────────────────────

/**
 * BreadcrumbList schema.
 * Displayed as a breadcrumb trail under the URL in search results.
 *
 * @param {Array<{name: string, url: string}>} items
 * @returns {object}
 */
export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

// ── Vehicle / Car ─────────────────────────────────────────────────────────────

/**
 * Car schema.
 * When Supabase vehicle records are available, pipe the DB row through here.
 * Google can render price, condition, and availability directly in search results.
 *
 * @param {{
 *   make: string,
 *   model: string,
 *   year?: number | string,
 *   price?: string | number,
 *   priceCurrency?: string,
 *   condition?: "NewCondition" | "UsedCondition" | "RefurbishedCondition",
 *   image?: string,
 *   description?: string,
 *   vin?: string,
 *   mileage?: number,
 *   color?: string,
 *   fuelType?: string,
 *   transmission?: string,
 *   bodyType?: string,
 *   url: string,
 * }} vehicle
 * @returns {object}
 */
export function vehicleSchema(vehicle) {
  const conditionIri = `https://schema.org/${vehicle.condition ?? "UsedCondition"}`;
  const priceNum =
    typeof vehicle.price === "string"
      ? vehicle.price.replace(/[^0-9.]/g, "")
      : vehicle.price;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Car",
    name: [vehicle.year, vehicle.make, vehicle.model].filter(Boolean).join(" "),
    description:
      vehicle.description ??
      `${vehicle.make} ${vehicle.model} for sale in Nigeria. Available at Iriseagle — trusted luxury car dealer in Lagos and Abuja.`,
    brand: { "@type": "Brand", name: vehicle.make },
    model: vehicle.model,
    vehicleModelDate: vehicle.year?.toString(),
    manufacturer: { "@type": "Organization", name: vehicle.make },
    itemCondition: conditionIri,
    url: vehicle.url.startsWith("http") ? vehicle.url : `${SITE_URL}${vehicle.url}`,
    seller: {
      "@type": "AutoDealer",
      name: SITE_CONFIG.name,
      url: SITE_URL,
      telephone: SITE_CONFIG.phone,
    },
  };

  if (vehicle.image) {
    schema.image = vehicle.image.startsWith("http")
      ? vehicle.image
      : `${SITE_URL}${vehicle.image}`;
  }

  if (priceNum) {
    schema.offers = {
      "@type": "Offer",
      price: priceNum,
      priceCurrency: vehicle.priceCurrency ?? "NGN",
      itemCondition: conditionIri,
      availability: "https://schema.org/InStock",
      seller: { "@type": "AutoDealer", name: SITE_CONFIG.name },
    };
  }

  if (vehicle.vin) schema.vehicleIdentificationNumber = vehicle.vin;
  if (vehicle.mileage != null) {
    schema.mileageFromOdometer = {
      "@type": "QuantitativeValue",
      value: vehicle.mileage,
      unitCode: "KMT",
    };
  }
  if (vehicle.color) schema.color = vehicle.color;
  if (vehicle.fuelType) schema.fuelType = vehicle.fuelType;
  if (vehicle.transmission) schema.vehicleTransmission = vehicle.transmission;
  if (vehicle.bodyType) schema.bodyType = vehicle.bodyType;

  return schema;
}

// ── FAQ Page ──────────────────────────────────────────────────────────────────

/**
 * FAQPage schema.
 * Renders expandable Q&A blocks directly in the SERP — massive CTR boost.
 *
 * @param {Array<{question: string, answer: string}>} faqs
 * @returns {object}
 */
export function faqSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}

// ── Article / Blog Post ───────────────────────────────────────────────────────

/**
 * Article schema for blog posts.
 * Required for eligibility in Google Discover and News carousels.
 *
 * @param {{
 *   title: string,
 *   description: string,
 *   image: string,
 *   url: string,
 *   datePublished?: string,
 *   dateModified?: string,
 *   authorName?: string,
 * }} article
 * @returns {object}
 */
export function articleSchema(article) {
  const imageUrl = article.image.startsWith("http")
    ? article.image
    : `${SITE_URL}${article.image}`;
  const articleUrl = article.url.startsWith("http")
    ? article.url
    : `${SITE_URL}${article.url}`;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: imageUrl,
    datePublished: article.datePublished ?? new Date().toISOString(),
    dateModified: article.dateModified ?? new Date().toISOString(),
    author: {
      "@type": "Organization",
      name: article.authorName ?? SITE_CONFIG.name,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}${SITE_CONFIG.logo}`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    about: {
      "@type": "Thing",
      name: "Automotive",
    },
    inLanguage: "en-NG",
  };
}

// ── ItemList (vehicle inventory listing) ──────────────────────────────────────

/**
 * ItemList schema for vehicle listing / showroom pages.
 * Tells Google this is a structured list of products.
 *
 * @param {Array<{name: string, url: string, image?: string}>} items
 * @param {string} [listName="Vehicle Inventory"]
 * @returns {object}
 */
export function itemListSchema(items, listName = "Vehicle Inventory") {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: listName,
    url: `${SITE_URL}/showroom/our-vehicles`,
    numberOfItems: items.length,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
      ...(item.image && {
        image: item.image.startsWith("http") ? item.image : `${SITE_URL}${item.image}`,
      }),
    })),
  };
}

// ── Aggregate Rating ──────────────────────────────────────────────────────────

/**
 * AggregateRating schema.
 * Renders stars under the business name in search results.
 * Only use once you have real user reviews; Google penalises fake ratings.
 *
 * @param {{
 *   itemName?: string,
 *   ratingValue: number,
 *   reviewCount: number,
 *   bestRating?: number,
 * }} rating
 * @returns {object}
 */
export function aggregateRatingSchema({ itemName, ratingValue, reviewCount, bestRating = 5 }) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: itemName ?? SITE_CONFIG.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue,
      reviewCount,
      bestRating,
      worstRating: 1,
    },
  };
}

// ── Financing / FinancialService ──────────────────────────────────────────────

/**
 * FinancialService schema for the financing page.
 * Signals to Google that this page offers loan/installment products.
 *
 * @returns {object}
 */
export function financingServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: `${SITE_CONFIG.name} — Vehicle Financing`,
    url: `${SITE_URL}/financing`,
    description:
      "Flexible vehicle financing options in Nigeria. Competitive monthly payment plans for Toyota, Lexus, Mercedes-Benz, BMW and more.",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "Nigeria" },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${SITE_URL}/contact`,
      servicePhone: SITE_CONFIG.phone,
    },
  };
}

// ── Convenience: root layout bundle ───────────────────────────────────────────

/**
 * Returns the array of schemas to inject in the root layout.
 * These apply to every page on the site.
 *
 * @returns {object[]}
 */
export function rootSchemas() {
  return [organizationSchema(), localBusinessSchema(), websiteSchema()];
}
