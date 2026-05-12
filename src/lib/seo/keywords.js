/**
 * Centralized keyword library for Iriseagle SEO.
 *
 * WHY THIS FILE EXISTS:
 * Keeping all keyword sets in one place prevents keyword cannibalization
 * (two pages accidentally competing for the same term) and makes it easy
 * to audit and update the keyword strategy across the whole site.
 *
 * SCALING:
 * As inventory grows, add brand-specific keyword arrays and import them
 * directly into vehicle listing pages or dynamic route metadata builders.
 *
 * ORGANIZATION:
 * - Transactional  → user wants to buy now
 * - Local intent   → geo-specific searches
 * - Brand-specific → Toyota, Lexus, etc.
 * - Informational  → research/how-to queries
 * - Per-page sets  → curated combos for each page type
 */

// ── Transactional (buying intent) ─────────────────────────────────────────────
export const TRANSACTIONAL_KEYWORDS = [
  "cars for sale in Nigeria",
  "buy cars Nigeria",
  "used cars Lagos",
  "tokunbo cars Nigeria",
  "buy tokunbo car Lagos",
  "foreign used cars Nigeria",
  "Nigerian used cars for sale",
  "vehicle import Nigeria",
  "buy luxury car Nigeria",
  "affordable SUVs Nigeria",
  "cheap cars for sale Abuja",
  "buy car online Nigeria",
  "vehicles for sale Abuja",
  "pre-owned vehicles Nigeria",
];

// ── Local intent ───────────────────────────────────────────────────────────────
export const LOCAL_KEYWORDS = [
  "car dealer Lagos",
  "auto dealer in Lagos",
  "car dealership Abuja",
  "luxury cars Lagos",
  "used cars in Lagos",
  "cars for sale Abuja",
  "car dealer Port Harcourt",
  "automobile dealer Nigeria",
  "certified car dealer Nigeria",
  "trusted car dealer Lagos",
  "best car dealer Nigeria",
  "reputable auto dealer Abuja",
  "Nigeria car marketplace",
];

// ── Brand-specific ─────────────────────────────────────────────────────────────
export const BRAND_KEYWORDS = [
  "Toyota Nigeria",
  "Lexus Nigeria",
  "Mercedes-Benz Nigeria",
  "BMW Nigeria",
  "electric vehicles Nigeria",
  "Toyota Camry Nigeria",
  "Lexus ES Nigeria",
  "Mercedes S Class Nigeria",
  "Toyota Highlander Nigeria",
  "luxury SUVs Nigeria",
  "Lexus GX Nigeria",
  "BMW X5 Nigeria",
];

// ── Informational ──────────────────────────────────────────────────────────────
export const INFORMATIONAL_KEYWORDS = [
  "tokunbo car meaning Nigeria",
  "how to buy car Nigeria",
  "car financing Nigeria",
  "vehicle import duty Nigeria",
  "how to import car Nigeria",
  "car maintenance Lagos",
  "pre-order car Nigeria",
  "after sales service cars Nigeria",
  "best car brands Nigeria",
  "tokunbo vs Nigerian used car",
];

// ── Homepage keywords (curated high-priority set) ─────────────────────────────
export const HOME_KEYWORDS = [
  "Iriseagle",
  "Iriseagle Limited",
  "Iriseagle car dealership Nigeria",
  "cars for sale in Nigeria",
  "tokunbo cars Nigeria",
  "luxury cars Lagos",
  "buy car Nigeria",
  "trusted auto dealer Nigeria",
  "Toyota Nigeria",
  "Lexus Nigeria",
  "Mercedes Nigeria",
  "car dealer Abuja",
  "foreign used cars Nigeria",
  "vehicle sales Nigeria",
  "affordable luxury cars Nigeria",
];

/**
 * Per-page keyword sets.
 * Keys match page type identifiers used by `buildKeywords()`.
 *
 * @type {Record<string, string[]>}
 */
export const PAGE_KEYWORDS = {
  home: HOME_KEYWORDS,

  about: [
    "Iriseagle about us",
    "trusted car dealer Nigeria",
    "reputable auto dealer Lagos",
    "car company Nigeria",
    "who is Iriseagle",
    "certified luxury auto dealer Abuja",
    "our story car dealer Nigeria",
    "best auto company Nigeria",
  ],

  contact: [
    "contact car dealer Nigeria",
    "car dealership phone Lagos",
    "buy car Abuja contact",
    "vehicle enquiry Nigeria",
    "book test drive Lagos",
    "reach Iriseagle",
    "Iriseagle phone number",
    "Iriseagle location Abuja",
  ],

  financing: [
    "car financing Nigeria",
    "auto loan Nigeria",
    "car payment plan Lagos",
    "vehicle financing Abuja",
    "affordable car monthly payment Nigeria",
    "car installment plan Nigeria",
    "low interest car loan Nigeria",
    "hire purchase vehicle Nigeria",
    "car finance Lagos",
  ],

  vehicles: [
    ...TRANSACTIONAL_KEYWORDS,
    ...BRAND_KEYWORDS,
    "SUVs for sale Nigeria",
    "sedans Nigeria",
    "luxury SUVs Lagos",
    "tokunbo SUVs Nigeria",
    "brand new cars Nigeria",
    "all vehicles Iriseagle",
  ],

  latestVehicles: [
    "2026 cars Nigeria",
    "new arrivals car Nigeria",
    "latest models Nigeria",
    "new Toyota 2026 Nigeria",
    "2026 luxury cars Nigeria",
    "new Lexus 2026 Nigeria",
    "best new cars Nigeria 2026",
  ],

  blog: [
    "car news Nigeria",
    "automotive reviews Nigeria",
    "tokunbo car guide Nigeria",
    "luxury car reviews Lagos",
    "vehicle comparison Nigeria",
    "best cars to buy Nigeria",
    "Toyota vs Lexus Nigeria",
  ],

  preorder: [
    "pre-order car Nigeria",
    "order car before arrival Nigeria",
    "vehicle pre-order Lagos",
    "reserve 2026 car Nigeria",
    "exclusive car pre-order Nigeria",
    "order new car Nigeria",
  ],

  afterSales: [
    "car after sales service Nigeria",
    "vehicle maintenance Lagos",
    "car servicing Abuja",
    "book car service Nigeria",
    "auto after-sales support Nigeria",
  ],
};

/**
 * Merges a page keyword set with optional extra keywords, deduplicating.
 *
 * @param {keyof typeof PAGE_KEYWORDS} page
 * @param {string[]} [extra=[]]
 * @returns {string[]}
 */
export function buildKeywords(page, extra = []) {
  const base = PAGE_KEYWORDS[page] ?? HOME_KEYWORDS;
  return [...new Set([...base, ...extra])];
}

/**
 * Builds vehicle-specific keywords for a detail or listing page.
 *
 * @param {{make: string, model: string, year?: string|number, condition?: string}} vehicle
 * @returns {string[]}
 */
export function buildVehicleKeywords({ make, model, year, condition }) {
  const conditionLabel =
    condition === "tokunbo"
      ? "foreign used"
      : condition === "used"
      ? "Nigerian used"
      : "brand new";

  return [
    `${make} ${model} Nigeria`,
    `buy ${make} ${model} Nigeria`,
    `${make} ${model} for sale Lagos`,
    `${conditionLabel} ${make} Nigeria`,
    ...(year ? [`${year} ${make} ${model} Nigeria`, `${year} ${make} price Nigeria`] : []),
    `${make} dealer Nigeria`,
    `${make} ${model} price Nigeria`,
    `affordable ${make} Nigeria`,
  ];
}
