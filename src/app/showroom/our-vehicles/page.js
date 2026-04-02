import OurVehicles from "@/Component/Showroom/OurVehicles";

export const metadata = {
  title: "Our Vehicles",
  description:
    "Explore the full Iriseagle vehicle inventory — Toyota, Lexus, Mercedes-Benz, BMW, Electric vehicles and luxury buses. Find your perfect vehicle in Nigeria.",
  alternates: { canonical: "https://iriseagle.com/showroom/our-vehicles" },
  openGraph: {
    title: "Our Vehicles | Iriseagle Nigeria",
    description:
      "Browse our full inventory of luxury vehicles including Toyota, Lexus, Mercedes-Benz, BMW and Electric models.",
    url: "https://iriseagle.com/showroom/our-vehicles",
  },
};

export default function OurVehiclesPage() {
  return <OurVehicles />;
}
