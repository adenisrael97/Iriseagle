import AboutUs from "@/components/sections/about/AboutUs";
import HeroAbout from "@/components/sections/about/HeroAbout";
import OurMission from "@/components/sections/about/OurMission";
import StructuredData from "@/components/seo/StructuredData";
import BreadcrumbSEO from "@/components/seo/BreadcrumbSEO";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";

export const metadata = buildPageMetadata({
  title: "About Us — Trusted Luxury Car Dealer in Nigeria",
  description:
    "Learn about Iriseagle — Nigeria's most trusted luxury car dealership in Abuja and Lagos. Years of automotive excellence, certified vehicles, and a commitment to delivering the best car-buying experience in Nigeria.",
  path: "/about",
  image: "/Others/Contact.jpg",
  imageAlt: "Iriseagle Car Dealership Team Nigeria",
  keywordsPage: "about",
  keywords: [
    "about Iriseagle",
    "trusted car dealer Nigeria",
    "reputable auto dealer Abuja",
    "luxury car company Nigeria history",
  ],
});

const BREADCRUMBS = [
  { name: "Home", url: "/" },
  { name: "About Us" },
];

export default function About() {
  return (
    <main className="min-h-screen bg-white md:bg-blue-50 flex flex-col items-center justify-start pt-4 md:pt-10 pb-8 px-2 md:px-0">
      <div className="w-full max-w-6xl px-4 mb-4">
        <BreadcrumbSEO items={BREADCRUMBS} />
      </div>
      <HeroAbout />
      <AboutUs />
      <OurMission />
    </main>
  );
}
