import LatestCar from "@/Component/Showroom/LatestCar";

export const metadata = {
  title: "Latest 2026 Vehicles",
  description:
    "Browse our latest 2026 luxury vehicle collection at Iriseagle. Toyota, Lexus, Mercedes-Benz, BMW, Electric vehicles and more — all available in Nigeria.",
  alternates: { canonical: "https://iriseagle.com/showroom/latest-vehicles" },
  openGraph: {
    title: "Latest 2026 Luxury Vehicles | Iriseagle Nigeria",
    description:
      "Shop the newest 2026 models from Toyota, Lexus, Mercedes-Benz, BMW and Electric brands at Iriseagle.",
    url: "https://iriseagle.com/showroom/latest-vehicles",
    images: [{ url: "/background/background16.jpg", width: 1200, height: 630, alt: "Latest Vehicles at Iriseagle" }],
  },
};

export default function LatestCarPage() {
  return (
    <div>
 <LatestCar />
    </div>
  );
}