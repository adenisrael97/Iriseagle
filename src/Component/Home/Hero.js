"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const slides = [
  {
    image: "/background/background2.jpg",
    title: "Drive Excellence with IRIS EAGLE",
    description:
      "At Iris Group, we deliver premium vehicles, trusted expertise, and a customer-first experience from first visit to final key handover.",
  },
  {
    image: "/background/background11.jpg",
    title: "Why Iris Group Leads the Market",
    description:
      "We combine quality inventory, transparent pricing, and dependable support to give every customer confidence and long-term value.",
  },
  {
    image: "/background/background3.jpg",
    title: "More Than Cars, We Build Trust",
    description:
      "From pre-order to after-sales care, Iris Eagle stands out with professional service, reliability, and a commitment to your satisfaction.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative w-full h-72 sm:h-96 md:h-125 lg:h-150 xl:h-175 overflow-hidden shadow-lg">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={`Hero Slide ${idx + 1}`}
            fill
            className="object-cover"
            priority={idx === 0}
            loading={idx === 0 || idx === 1 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/20 to-black/10" />
          <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4 sm:px-8 md:px-14">
            <div className="max-w-4xl">
              <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                {slide.title}
              </h1>
              <p className="mt-3 sm:mt-4 text-gray-100 text-sm sm:text-base md:text-xl leading-relaxed">
                {slide.description}
              </p>
            </div>
          </div>
        </div>
      ))}
      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full border-2 border-white bg-white/70 transition-all duration-300 ${
              idx === current ? "bg-red-600 border-red-600 scale-110" : "bg-white/70 border-white"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
      </section>
      {/* Horizontal Action List */}
      <nav className="w-full grid grid-cols-3 lg:grid-cols-6 gap-0 bg-white py-0 px-0 shadow-sm">
        {[
          { label: "Contact us", icon: "📞" },
          { label: "Price list", icon: "💲" },
          { label: "Buy now", icon: "🛒" },
          { label: "Pre-order", icon: "📝" },
          { label: "Request Quote", icon: "🚗" },
          { label: "Find your car", icon: "🔍" },
        ].map((item, idx) => (
          <button
            key={idx}
            className="flex flex-col items-center justify-center gap-2 py-4 sm:py-5 md:py-6 px-2 sm:px-4 text-sm sm:text-base font-semibold text-red-600 hover:text-white hover:bg-red-600 border border-gray-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-inset"
          >
            <span className="text-xl sm:text-2xl md:text-3xl">{item.icon}</span>
            <span className="text-center leading-tight">{item.label}</span>
          </button>
        ))}
      </nav>
    </>
  );
}
