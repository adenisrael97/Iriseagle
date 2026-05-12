/**
 * BreadcrumbSEO — renders a visual breadcrumb trail AND injects
 * a BreadcrumbList JSON-LD block for Google Rich Results.
 *
 * WHY BOTH:
 * The visual trail serves users; the JSON-LD serves Google.
 * Google prefers co-located signals — having both in one component
 * ensures they never go out of sync.
 *
 * Usage:
 *   <BreadcrumbSEO
 *     items={[
 *       { name: "Home",     url: "/" },
 *       { name: "Showroom", url: "/showroom/our-vehicles" },
 *       { name: "Toyota Camry 2024" },          ← last item has no url (current page)
 *     ]}
 *   />
 *
 * @param {{
 *   items: Array<{name: string, url?: string}>,
 *   className?: string,
 * }} props
 */

import Link from "next/link";
import StructuredData from "./StructuredData";
import { breadcrumbSchema } from "@/lib/seo/schema";

export default function BreadcrumbSEO({ items, className = "" }) {
  // schema.org needs a URL on every item; fall back to site root for last item
  const schemaItems = items.map((item) => ({
    name: item.name,
    url: item.url ?? "/",
  }));

  return (
    <>
      <StructuredData schema={breadcrumbSchema(schemaItems)} />

      <nav
        aria-label="Breadcrumb"
        className={`flex flex-wrap items-center gap-1.5 text-sm text-gray-500 ${className}`}
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <span key={`${item.name}-${index}`} className="flex items-center gap-1.5">
              {isLast || !item.url ? (
                <span
                  className="text-gray-800 font-medium truncate max-w-[200px]"
                  aria-current="page"
                >
                  {item.name}
                </span>
              ) : (
                <>
                  <Link
                    href={item.url}
                    className="hover:text-red-600 transition-colors duration-150 truncate max-w-[160px]"
                  >
                    {item.name}
                  </Link>
                  <svg
                    aria-hidden="true"
                    className="w-3 h-3 text-gray-400 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </>
              )}
            </span>
          );
        })}
      </nav>
    </>
  );
}
