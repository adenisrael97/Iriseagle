import FinancingPage from "@/components/sections/financing/Financing";
import BreadcrumbSEO from "@/components/seo/BreadcrumbSEO";
import StructuredData from "@/components/seo/StructuredData";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { financingServiceSchema, faqSchema } from "@/lib/seo/schema";

export const metadata = buildPageMetadata({
  title: "Car Financing Nigeria — Flexible Monthly Payment Plans",
  description:
    "Explore flexible car financing options at Iriseagle Nigeria. Competitive monthly payment plans, fast approval, and low interest rates for Toyota, Lexus, Mercedes-Benz, BMW & more. Apply today in Lagos or Abuja.",
  path: "/financing",
  image: "/Others/Financing.jpg",
  imageAlt: "Car Financing Options at Iriseagle Nigeria",
  keywordsPage: "financing",
  keywords: [
    "car financing Nigeria 2024",
    "vehicle installment plan Lagos",
    "auto loan Abuja",
    "low interest car finance Nigeria",
    "hire purchase vehicle Nigeria",
  ],
});

const FINANCING_FAQS = [
  {
    question: "Can I finance a car purchase in Nigeria?",
    answer:
      "Yes. Iriseagle offers vehicle financing options that allow you to spread the cost of your car over monthly instalments. We work with financial partners to offer competitive rates for qualified buyers across Nigeria.",
  },
  {
    question: "What documents do I need to apply for car financing at Iriseagle?",
    answer:
      "Typically you will need a valid government-issued ID, proof of income (last 3 months' bank statements or payslips), a recent utility bill, and a completed application form. Requirements may vary — contact us for a full checklist.",
  },
  {
    question: "How long does car financing approval take at Iriseagle?",
    answer:
      "We aim to give financing decisions within 24–48 hours of receiving a complete application. Once approved, your vehicle can be ready for collection or delivery within days.",
  },
  {
    question: "What is the minimum deposit for car financing in Nigeria?",
    answer:
      "Deposit requirements vary depending on the vehicle and financing plan. Contact Iriseagle for a personalised quote based on your preferred vehicle and budget.",
  },
];

const BREADCRUMBS = [
  { name: "Home", url: "/" },
  { name: "Financing" },
];

export default function Financing() {
  return (
    <>
      <StructuredData schema={[financingServiceSchema(), faqSchema(FINANCING_FAQS)]} />
      <div className="w-full max-w-6xl mx-auto px-4 pt-4">
        <BreadcrumbSEO items={BREADCRUMBS} />
      </div>
      <FinancingPage />
    </>
  );
}
