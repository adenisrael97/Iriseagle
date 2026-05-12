import PreOrder from "@/components/sections/more/PreOrder";
import BreadcrumbSEO from "@/components/seo/BreadcrumbSEO";
import StructuredData from "@/components/seo/StructuredData";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { faqSchema } from "@/lib/seo/schema";

export const metadata = buildPageMetadata({
  title: "Pre-Order a Vehicle in Nigeria — 2026 Models | Iriseagle",
  description:
    "Be first to own the latest 2026 luxury vehicles in Nigeria. Pre-order your Toyota, Lexus, Mercedes-Benz or BMW at Iriseagle before it reaches the showroom. Priority delivery, exclusive configurations, and flexible financing.",
  path: "/more/preorder",
  image: "/background/background14.jpg",
  imageAlt: "Pre-Order 2026 Luxury Vehicles Nigeria — Iriseagle",
  keywordsPage: "preorder",
  keywords: [
    "pre-order car Nigeria 2026",
    "reserve new car Nigeria",
    "order Toyota 2026 Nigeria",
    "pre-order Mercedes Nigeria",
    "exclusive vehicle order Nigeria",
  ],
});

const PREORDER_FAQS = [
  {
    question: "How does the Iriseagle vehicle pre-order work?",
    answer:
      "Contact us with your preferred make, model, colour, and configuration. We secure your slot with the supplier and keep you updated on arrival timelines. A deposit is required to confirm your pre-order.",
  },
  {
    question: "Can I pre-order a specific colour or trim?",
    answer:
      "Yes. Pre-ordering allows you to specify your exact requirements — colour, interior trim, optional packages — ensuring you get exactly what you want rather than choosing from available stock.",
  },
  {
    question: "How long does a pre-ordered vehicle take to arrive?",
    answer:
      "Delivery timelines vary by brand and model, typically ranging from 4 to 16 weeks. We provide estimated timelines at the time of order and update you regularly on progress.",
  },
];

const BREADCRUMBS = [
  { name: "Home", url: "/" },
  { name: "More", url: "/more" },
  { name: "Pre-Order a Vehicle" },
];

export default function Preorder() {
  return (
    <>
      <StructuredData schema={faqSchema(PREORDER_FAQS)} />
      <div className="w-full max-w-6xl mx-auto px-4 pt-4">
        <BreadcrumbSEO items={BREADCRUMBS} />
      </div>
      <PreOrder />
    </>
  );
}
