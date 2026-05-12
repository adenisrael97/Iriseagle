import Hero from "@/components/sections/home/Hero";
import FeaturedCar from "@/components/sections/home/FeaturedCar";
import NewVehicle from "@/components/sections/home/NewVehicle";
import NewDeal from "@/components/sections/home/NewDeal";
import Order from "@/components/sections/home/Order";
import About from "@/components/sections/home/About";
import WhatWeOffer from "@/components/sections/home/WhatWeOffer";
import StructuredData from "@/components/seo/StructuredData";
import { faqSchema } from "@/lib/seo/schema";
import { buildPageMetadata } from "@/lib/seo/metadata";

// ── Homepage metadata ──────────────────────────────────────────────────────────
// This is the highest-traffic page. Title, description, and OG image are
// the three most impactful SEO levers on the entire site. Keep them sharp.
export const metadata = buildPageMetadata({
  title: "Cars for Sale in Nigeria | Luxury Auto Dealer — Lagos & Abuja",
  description:
    "Buy Toyota, Lexus, Mercedes-Benz, BMW & Electric vehicles in Nigeria. Iriseagle is Nigeria's #1 luxury car dealership with showrooms in Lagos and Abuja. Tokunbo and brand new cars. Flexible financing. Nationwide delivery.",
  path: "/",
  image: "/background/background2.jpg",
  imageAlt: "Iriseagle Luxury Car Showroom Nigeria",
  keywordsPage: "home",
  keywords: [
    "cars for sale Nigeria",
    "tokunbo cars Nigeria",
    "buy car Lagos",
    "luxury car dealer Abuja",
    "foreign used cars Nigeria",
  ],
});

// ── Homepage FAQ structured data ───────────────────────────────────────────────
// FAQ schema renders expandable Q&A blocks directly in Google Search results
// (SERP feature), increasing click-through rate by 20-30% on average.
const HOME_FAQS = [
  {
    question: "Where can I buy a car in Nigeria?",
    answer:
      "Iriseagle is Nigeria's premier luxury car dealership, with a showroom in Area 2, Abuja. We offer Toyota, Lexus, Mercedes-Benz, BMW, Electric Vehicles, and commercial buses. You can browse our inventory online and contact us via WhatsApp or phone to arrange a viewing or purchase.",
  },
  {
    question: "What is a tokunbo car?",
    answer:
      "A 'tokunbo' car is a foreign-used vehicle imported into Nigeria. These vehicles were previously owned and used abroad (typically in the USA, Europe, or Japan) before being shipped to Nigeria. Tokunbo cars are popular because they offer excellent quality at lower prices than brand-new vehicles.",
  },
  {
    question: "Do you offer car financing in Nigeria?",
    answer:
      "Yes. Iriseagle offers flexible vehicle financing options with competitive monthly payment plans for all our vehicles — Toyota, Lexus, Mercedes-Benz, BMW, and more. Contact us to discuss your budget and we will find a plan that works for you.",
  },
  {
    question: "Do you sell cars in Lagos?",
    answer:
      "Yes. While our primary showroom is in Abuja (Area 2), Iriseagle serves buyers across Lagos, Port Harcourt, and all major Nigerian cities. We can arrange vehicle delivery nationwide. Call or WhatsApp us to discuss delivery to your location.",
  },
  {
    question: "Can I pre-order a new vehicle from Iriseagle?",
    answer:
      "Yes. Iriseagle offers a pre-order service for the latest 2026 model year vehicles. You can secure your preferred configuration — make, model, colour, and trim — before it arrives at the showroom. Visit our Pre-Order page or contact us to get started.",
  },
  {
    question: "What brands does Iriseagle sell?",
    answer:
      "Iriseagle stocks Toyota, Lexus, Mercedes-Benz, BMW, Electric Vehicles (Toyota bZ, BMW i4), and commercial buses (Toyota Hiace, Toyota Coaster). We carry both brand-new and foreign-used (tokunbo) vehicles at competitive prices.",
  },
];

export default function Home() {
  return (
    <>
      {/* FAQ schema — rendered in <head> via StructuredData server component */}
      <StructuredData schema={faqSchema(HOME_FAQS)} />

      <div className="relative">
        <Hero />
        <FeaturedCar />
        <NewVehicle />
        <NewDeal />
        <Order />
        <About />
        <WhatWeOffer />
      </div>
    </>
  );
}
