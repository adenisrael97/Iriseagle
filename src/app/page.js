import Hero from "@/Component/Home/Hero";
import FeaturedCar from "@/Component/Home/FeaturedCar";
import NewVehicle from "@/Component/Home/NewVehicle";
import NewDeal from "@/Component/Home/NewDeal";
import Order from "@/Component/Home/Order";
import About from "@/Component/Home/About";
import WhatWeOffer from "@/Component/Home/WhatWeOffer";

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
      {/* Sticky WhatsApp Button */}
      <a
        href="https://wa.me/2348054029416"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-50 bottom-6 right-6 md:bottom-8 md:right-8 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center p-4 text-base font-semibold transition-colors"
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-7 h-7"><path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.607 1.938 6.563L4 29l7.688-1.938A12.93 12.93 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22.5c-1.98 0-3.914-.523-5.594-1.516l-.398-.234-4.563 1.156 1.188-4.438-.25-.406C5.523 18.414 5 16.48 5 15c0-6.065 4.935-11 11-11s11 4.935 11 11-4.935 11-11 11zm6.188-7.406c-.34-.17-2.016-.996-2.328-1.11-.312-.113-.54-.17-.77.17-.227.34-.88 1.11-1.08 1.34-.197.227-.397.255-.736.085-.34-.17-1.436-.53-2.736-1.69-1.012-.902-1.697-2.012-1.898-2.352-.198-.34-.021-.523.149-.693.153-.152.34-.397.51-.595.17-.198.227-.34.34-.567.113-.227.057-.425-.028-.595-.085-.17-.77-1.857-1.055-2.547-.278-.668-.56-.577-.77-.588l-.655-.012c-.198 0-.52.074-.792.34-.272.266-1.04 1.016-1.04 2.48 0 1.463 1.065 2.877 1.213 3.075.149.198 2.1 3.21 5.09 4.377.712.307 1.267.49 1.7.627.714.227 1.364.195 1.877.118.573-.085 1.755-.718 2.003-1.413.248-.695.248-1.29.174-1.413-.073-.123-.31-.198-.65-.368z"/></svg>
      </a>
    </div>
  );
}