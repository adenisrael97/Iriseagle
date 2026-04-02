import Hero from "@/Component/Home/Hero";
import FeaturedCar from "@/Component/Home/FeaturedCar";
import NewVehicle from "@/Component/Home/NewVehicle";
import NewDeal from "@/Component/Home/NewDeal";
import Order from "@/Component/Home/Order";
import About from "@/Component/Home/About";
import WhatWeOffer from "@/Component/Home/WhatWeOffer";

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