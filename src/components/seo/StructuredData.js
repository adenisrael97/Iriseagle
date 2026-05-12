/**
 * StructuredData — injects one or more JSON-LD blocks into the document <head>.
 *
 * Works as a React Server Component (no "use client" directive needed).
 * Next.js App Router renders <script> tags in server components directly
 * into the <head> at build/request time — no client JS bundle cost.
 *
 * Usage:
 *   // Single schema
 *   <StructuredData schema={vehicleSchema(car)} />
 *
 *   // Multiple schemas (emitted as separate <script> tags)
 *   <StructuredData schema={[organizationSchema(), faqSchema(faqs)]} />
 *
 * @param {{ schema: object | object[] }} props
 */
export default function StructuredData({ schema }) {
  const schemas = Array.isArray(schema) ? schema : [schema];

  return (
    <>
      {schemas.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item, null, 0) }}
        />
      ))}
    </>
  );
}
