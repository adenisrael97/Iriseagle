import Image from "next/image";
import Button from "@/components/ui/Button";
import BreadcrumbSEO from "@/components/seo/BreadcrumbSEO";
import StructuredData from "@/components/seo/StructuredData";
import { articleSchema } from "@/lib/seo/schema";
import { buildArticleMetadata } from "@/lib/seo/metadata";
import { SITE_URL } from "@/lib/seo/config";

// ── Static blog content ────────────────────────────────────────────────────────
// When Supabase is wired up, replace this object with a DB fetch.
// The shape here matches what articleSchema() and buildArticleMetadata() expect.
const blogData = {
  toyota: {
    title: "Toyota Vehicles in Nigeria: Reliability Meets Innovation",
    excerpt:
      "Toyota has long been synonymous with reliability, innovation, and value. From the Camry to the Highlander, discover why Toyota leads Nigeria's automotive market.",
    publishedAt: "2025-01-15T08:00:00Z",
    images: [
      "/Toyota/Toyota Camry 2024.jpeg",
      "/Toyota/Toyota Highlander 2024.jpeg",
    ],
    content: `Toyota has long been synonymous with reliability, innovation, and value. In today's rapidly evolving automotive landscape, Toyota continues to lead the way with cutting-edge technology, hybrid advancements, and a commitment to sustainability.\n\nFrom the ever-popular Camry to the versatile Highlander, Toyota vehicles are engineered for longevity and peace of mind. Their hybrid lineup is expanding, offering drivers more eco-friendly options without sacrificing performance.\n\nWhether you're seeking a family sedan, a rugged SUV, or a fuel-efficient hybrid, Toyota's 2024/2025 lineup delivers. Experience the future of mobility — where reliability meets innovation, and every journey is a pleasure.\n\nToyota's global reputation is built on decades of engineering excellence. The brand's focus on safety, comfort, and advanced driver-assist features ensures that every Toyota is ready for the demands of modern life. The Camry, with its refined ride and efficient powertrains, remains a favourite among families and commuters alike. The Highlander, meanwhile, offers versatility and space for growing families and adventure seekers.\n\nIn addition to traditional gasoline models, Toyota's hybrid and plug-in hybrid vehicles are setting new standards for efficiency and environmental responsibility. The company's investment in hydrogen fuel cell technology and electric vehicles signals a bold vision for the future.\n\n**Key Highlights:**\n- Industry-leading hybrid technology\n- Award-winning safety features\n- Exceptional resale value\n- Comfort and connectivity for modern drivers\n- Expanding lineup of electrified vehicles\n- Commitment to sustainability and innovation`,
  },
  lexus: {
    title: "Lexus in Nigeria: Redefining Luxury and Comfort",
    excerpt:
      "Lexus stands at the pinnacle of luxury, blending sophisticated design with exhilarating performance. The ES and GX models exemplify Lexus's dedication to craftsmanship.",
    publishedAt: "2025-02-01T08:00:00Z",
    images: [
      "/Lexus/Lexus ES 2025.jpg",
      "/Lexus/Lexus GX 2024.jpeg",
    ],
    content: `Lexus stands at the pinnacle of luxury, blending sophisticated design with exhilarating performance. The ES and GX models exemplify Lexus's dedication to craftsmanship, comfort, and advanced technology.\n\nStep inside a Lexus and experience a sanctuary of quiet refinement, intuitive controls, and premium materials. The brand's commitment to innovation is evident in its hybrid offerings and driver-assist features.\n\nWhether you crave the smooth ride of a sedan or the versatility of an SUV, Lexus delivers a driving experience that is both inspiring and relaxing.\n\nLexus vehicles are renowned for their attention to detail, from the hand-stitched leather seats to the precision-tuned suspension systems. The ES sedan offers a perfect balance of comfort and agility, while the GX SUV provides rugged capability without sacrificing luxury.\n\n**Key Highlights:**\n- Handcrafted interiors\n- Advanced hybrid powertrains\n- Leading-edge safety systems\n- Legendary reliability\n- Award-winning customer satisfaction\n- Seamless connectivity and entertainment`,
  },
  mercedes: {
    title: "Mercedes-Benz in Nigeria: Innovation in Motion",
    excerpt:
      "Mercedes-Benz is a symbol of prestige, performance, and technological leadership. The AMG C63 and S Class showcase the brand's relentless pursuit of excellence.",
    publishedAt: "2025-02-15T08:00:00Z",
    images: [
      "/Mercedes/Mercedes AMG C63 2025.webp",
      "/Mercedes/Mercedes S Class 2025.jpg",
    ],
    content: `Mercedes-Benz is a symbol of prestige, performance, and technological leadership. The AMG C63 and S Class showcase the brand's relentless pursuit of excellence, from powerful engines to luxurious cabins.\n\nMercedes is at the forefront of automotive innovation, introducing features like MBUX infotainment, advanced driver assistance, and electrified powertrains.\n\nDriving a Mercedes is more than transportation — it's an experience of comfort, control, and confidence.\n\nThe S Class is the flagship of the Mercedes lineup, offering unparalleled luxury, advanced technology, and a smooth, quiet ride. The AMG C63 delivers thrilling performance and dynamic handling for enthusiasts who demand the best.\n\n**Key Highlights:**\n- AMG performance engineering\n- Opulent interior design\n- Intelligent safety and connectivity\n- Electrification for the future\n- MBUX voice assistant and infotainment\n- Iconic design and craftsmanship`,
  },
  bus: {
    title: "Commercial Buses in Nigeria: Toyota Hiace & Coaster Guide",
    excerpt:
      "Modern buses like the Toyota Coaster and Hiace are engineered for group travel, business, and adventure. Spacious, safe, and reliable for Nigerian roads.",
    publishedAt: "2025-03-01T08:00:00Z",
    images: [
      "/Bus/Toyota Coaster 2024.jpeg",
      "/Bus/Toyota hiace 2024.jpeg",
    ],
    content: `Modern buses like the Toyota Coaster and Hiace are engineered for group travel, business, and adventure. They offer spacious interiors, advanced safety, and reliable performance for every road in Nigeria.\n\nWhether you're transporting a team, a family, or clients, today's buses provide comfort, convenience, and peace of mind.\n\nBuses are designed with flexible seating arrangements, ample storage, and robust safety features to ensure a pleasant journey for all passengers. The Toyota Coaster is ideal for larger groups (up to 30 passengers), while the Hiace offers versatility for both commercial and personal use.\n\n**Key Highlights:**\n- Flexible seating arrangements\n- Robust safety features\n- Efficient engines suited to Nigerian roads\n- Designed for comfort on long journeys\n- Low maintenance and high durability\n- Perfect for corporate and school transport`,
  },
  electric: {
    title: "Electric Vehicles in Nigeria: The Future Is Now",
    excerpt:
      "Electric vehicles are revolutionising transportation in Nigeria. The Toyota bZ and BMW i4 represent the cutting edge of clean, efficient, and exhilarating driving.",
    publishedAt: "2025-03-15T08:00:00Z",
    images: [
      "/Electric/Toyota bZ 2025.jpeg",
      "/Electric/Bmw I4 2025.jpeg",
    ],
    content: `Electric vehicles (EVs) are revolutionising transportation in Nigeria. The Toyota bZ and BMW i4 represent the cutting edge of clean, efficient, and exhilarating driving.\n\nWith instant torque, zero emissions, and advanced connectivity, EVs are the smart choice for forward-thinking Nigerian drivers.\n\nThe latest electric vehicles offer fast charging, long range, and a quiet, smooth ride. Innovations in battery technology are making EVs more accessible and practical than ever before.\n\nDrivers can enjoy lower running costs, reduced maintenance, and the satisfaction of contributing to a cleaner environment. Features like regenerative braking, smart navigation, and over-the-air updates enhance the ownership experience.\n\n**Key Highlights:**\n- Fast charging and long range capability\n- Quiet, smooth, instant-torque performance\n- Lower running costs vs petrol vehicles\n- Eco-friendly — zero direct emissions\n- Advanced driver assistance and connectivity\n- Growing charging network across Nigeria`,
  },
};

/**
 * Generate metadata dynamically for each blog slug.
 * Called by Next.js at build time (static generation) or request time.
 */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = blogData[slug];

  if (!blog) {
    return {
      title: "Article Not Found",
      robots: { index: false, follow: false },
    };
  }

  return buildArticleMetadata({
    title: blog.title,
    description: blog.excerpt,
    slug,
    image: blog.images[0],
    publishedAt: blog.publishedAt,
  });
}

/**
 * Pre-generate all known blog slugs at build time.
 * Avoids 404s on first crawl; removes the need for dynamic rendering.
 */
export function generateStaticParams() {
  return Object.keys(blogData).map((slug) => ({ slug }));
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const blog = blogData[slug] ?? null;

  if (!blog) {
    return (
      <div className="max-w-2xl mx-auto py-24 text-center text-gray-500">
        <h1 className="text-3xl font-bold mb-4 text-red-700">Article Not Found</h1>
        <p>The article you are looking for does not exist.</p>
      </div>
    );
  }

  const articleUrl = `${SITE_URL}/showroom/blog/${slug}`;
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/showroom/blog" },
    { name: blog.title },
  ];

  return (
    <section className="relative w-full min-h-[60vh] flex flex-col items-center justify-center px-4 py-0 md:py-8">
      {/* Article + Breadcrumb structured data */}
      <StructuredData
        schema={articleSchema({
          title: blog.title,
          description: blog.excerpt,
          image: blog.images[0],
          url: articleUrl,
          datePublished: blog.publishedAt,
          dateModified: blog.publishedAt,
        })}
      />

      {/* Breadcrumb — visual + JSON-LD */}
      <div className="w-full max-w-4xl mx-auto mb-4">
        <BreadcrumbSEO items={breadcrumbs} />
      </div>

      {/* Hero Banner */}
      <div className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg mb-10 relative">
        <div className="flex flex-col md:flex-row w-full h-full">
          {blog.images.map((img, i) => (
            <div key={i} className="relative w-full aspect-video md:aspect-auto md:flex-1 h-48 md:h-80">
              <Image
                src={img}
                alt={`${blog.title} — image ${i + 1}`}
                fill
                className="object-cover w-full h-full rounded-none md:rounded-l-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={i === 0}
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent px-4 py-4 md:px-6 md:py-10 flex flex-col items-center">
          <h1 className="text-2xl md:text-5xl font-extrabold text-white mb-2 drop-shadow-lg text-center">
            {blog.title}
          </h1>
        </div>
      </div>

      {/* Article content */}
      <article
        className="prose prose-lg max-w-3xl w-full text-gray-800 bg-white/95 rounded-2xl p-8 shadow-xl mb-12 border border-gray-100"
        itemScope
        itemType="https://schema.org/Article"
      >
        <meta itemProp="headline" content={blog.title} />
        <meta itemProp="datePublished" content={blog.publishedAt} />
        {blog.content.split("\n").map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </article>

      {/* CTA */}
      <div className="w-full max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 bg-linear-to-r from-red-600/90 to-red-800/90 rounded-2xl shadow-lg p-8 mt-4">
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-white mb-2">
            Ready to Experience {blog.title.split(":")[0]}?
          </h2>
          <p className="text-white/90 mb-2">
            Contact our team for a test drive, personalised consultation, or to learn more about the
            latest models and offers in Nigeria.
          </p>
        </div>
        <Button href="/contact" variant="secondary" size="lg">
          Contact Us
        </Button>
      </div>
    </section>
  );
}
