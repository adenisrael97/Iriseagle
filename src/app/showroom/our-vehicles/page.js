import OurVehicles from "@/components/sections/showroom/OurVehicles";
import BreadcrumbSEO from "@/components/seo/BreadcrumbSEO";
import StructuredData from "@/components/seo/StructuredData";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { itemListSchema } from "@/lib/seo/schema";
import { SITE_URL } from "@/lib/seo/config";

export const metadata = buildPageMetadata({
  title: "Our Vehicles — Buy Cars in Nigeria | Toyota, Lexus, Mercedes, BMW",
  description:
    "Browse Iriseagle's full vehicle inventory — Toyota, Lexus, Mercedes-Benz, BMW, Electric Vehicles, and luxury buses. New and tokunbo (foreign used) cars for sale in Lagos, Abuja, and across Nigeria. Flexible financing available.",
  path: "/showroom/our-vehicles",
  image: "/background/background16.jpg",
  imageAlt: "Iriseagle Vehicle Inventory — Cars for Sale in Nigeria",
  keywordsPage: "vehicles",
  keywords: [
    "all cars for sale Nigeria",
    "tokunbo cars inventory Nigeria",
    "Toyota for sale Nigeria",
    "Lexus for sale Nigeria",
    "luxury cars inventory Lagos",
    "browse cars Nigeria online",
  ],
});

// ItemList schema — signals to Google this is a structured vehicle catalogue
const FEATURED_VEHICLES = [
  { name: "Toyota Camry 2024 — for Sale in Nigeria",   url: `${SITE_URL}/showroom/our-vehicles/toyota-camry-2024`,   image: "/Toyota/Toyota Camry 2024.jpeg" },
  { name: "Toyota Camry 2025 — for Sale in Nigeria",   url: `${SITE_URL}/showroom/our-vehicles/toyota-camry-2025`,   image: "/Toyota/Toyota Camry 2025.jpeg" },
  { name: "Lexus ES 2025 — for Sale in Nigeria",       url: `${SITE_URL}/showroom/our-vehicles/lexus-es-2025`,       image: "/Lexus/Lexus ES 2025.jpg" },
  { name: "Lexus GX 2024 — for Sale in Nigeria",       url: `${SITE_URL}/showroom/our-vehicles/lexus-gx-2024`,       image: "/Lexus/Lexus GX 2024.jpeg" },
  { name: "Mercedes S Class 2025 — for Sale Nigeria",  url: `${SITE_URL}/showroom/our-vehicles/mercedes-s-class-2025`, image: "/Mercedes/Mercedes S Class 2025.jpg" },
  { name: "BMW i4 Electric 2025 — Nigeria",            url: `${SITE_URL}/showroom/our-vehicles/bmw-i4-2025`,         image: "/Electric/Bmw I4 2025.jpeg" },
];

const BREADCRUMBS = [
  { name: "Home", url: "/" },
  { name: "Showroom", url: "/showroom/our-vehicles" },
  { name: "Our Vehicles" },
];

export default function OurVehiclesPage() {
  return (
    <>
      <StructuredData schema={itemListSchema(FEATURED_VEHICLES, "Iriseagle Vehicle Inventory Nigeria")} />
      <div className="w-full max-w-7xl mx-auto px-4 pt-4">
        <BreadcrumbSEO items={BREADCRUMBS} />
      </div>
      <OurVehicles />
    </>
  );
}
