import LatestCar from "@/components/sections/showroom/LatestCar";
import BreadcrumbSEO from "@/components/seo/BreadcrumbSEO";
import StructuredData from "@/components/seo/StructuredData";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { itemListSchema } from "@/lib/seo/schema";
import { SITE_URL } from "@/lib/seo/config";

export const metadata = buildPageMetadata({
  title: "Latest 2026 Vehicles in Nigeria — New Arrivals at Iriseagle",
  description:
    "Browse the newest 2026 model year vehicles at Iriseagle. New arrivals: Toyota, Lexus, Mercedes-Benz, BMW & Electric vehicles — the freshest stock in Nigeria. Lagos, Abuja, Port Harcourt delivery available.",
  path: "/showroom/latest-vehicles",
  image: "/background/background16.jpg",
  imageAlt: "Latest 2026 Luxury Vehicles at Iriseagle Nigeria",
  keywordsPage: "latestVehicles",
  keywords: [
    "2026 cars Nigeria",
    "new car arrivals Nigeria",
    "latest Toyota 2026 Nigeria",
    "new Lexus 2026 Nigeria",
    "2026 Mercedes Nigeria",
    "brand new luxury cars Nigeria 2026",
  ],
});

const LATEST_VEHICLES = [
  { name: "Toyota Camry 2026 — New Arrival Nigeria", url: `${SITE_URL}/showroom/our-vehicles/toyota-camry-2026`, image: "/Toyota/Toyota Camry 2026.jpeg" },
  { name: "Toyota Camry 2025 — New Arrival Nigeria", url: `${SITE_URL}/showroom/our-vehicles/toyota-camry-2025`, image: "/Toyota/Toyota Camry 2025.jpeg" },
  { name: "Lexus ES 2025 — New Arrival Nigeria",     url: `${SITE_URL}/showroom/our-vehicles/lexus-es-2025`,     image: "/Lexus/Lexus ES 2025.jpg" },
  { name: "Mercedes S Class 2025 — New Nigeria",     url: `${SITE_URL}/showroom/our-vehicles/mercedes-s-class-2025`, image: "/Mercedes/Mercedes S Class 2025.jpg" },
  { name: "BMW i4 Electric 2025 — New Nigeria",      url: `${SITE_URL}/showroom/our-vehicles/bmw-i4-2025`,      image: "/Electric/Bmw I4 2025.jpeg" },
];

const BREADCRUMBS = [
  { name: "Home", url: "/" },
  { name: "Showroom", url: "/showroom/our-vehicles" },
  { name: "Latest Vehicles" },
];

export default function LatestCarPage() {
  return (
    <>
      <StructuredData schema={itemListSchema(LATEST_VEHICLES, "Latest 2026 Vehicles at Iriseagle Nigeria")} />
      <div className="w-full max-w-7xl mx-auto px-4 pt-4">
        <BreadcrumbSEO items={BREADCRUMBS} />
      </div>
      <LatestCar />
    </>
  );
}
