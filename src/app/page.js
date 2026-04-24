import Hero from "@/components/sections/home/Hero";
import FeaturedCar from "@/components/sections/home/FeaturedCar";
import NewVehicle from "@/components/sections/home/NewVehicle";
import NewDeal from "@/components/sections/home/NewDeal";
import Order from "@/components/sections/home/Order";
import About from "@/components/sections/home/About";
import WhatWeOffer from "@/components/sections/home/WhatWeOffer";

export const metadata = {
  title: "Iriseagle | Nigeria's Premier Luxury Car Dealership",
  description:
    "Welcome to Iriseagle — Nigeria's #1 destination for Toyota, Lexus, Mercedes-Benz, BMW and Electric vehicles. Flexible financing, nationwide delivery, and 24/7 support.",
  alternates: { canonical: "https://iriseagle.com" },
};

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <FeaturedCar /> 
      <NewVehicle />
      <NewDeal />
      <Order />
      <About />
      <WhatWeOffer />

    </div>
  );
}