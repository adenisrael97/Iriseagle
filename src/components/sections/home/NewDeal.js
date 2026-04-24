"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";

const deals = [
  { src: "/Toyota/Toyota Camry 2024.jpeg", name: "Toyota Camry", year: 2024, transmission: "Automatic" },
  { src: "/Toyota/Toyota Landcruiser 2023.jpeg", name: "Toyota Landcruiser", year: 2023, transmission: "Automatic" },
  { src: "/Toyota/Toyota Sienna 2024.jpg", name: "Toyota Sienna", year: 2024, transmission: "Automatic" },
  { src: "/Bus/Toyota Coaster 2024.jpeg", name: "Toyota Coaster", year: 2024, transmission: "Automatic" },
  { src: "/Bus/Toyota hiace 2023.jpeg", name: "Toyota Hiace", year: 2023, transmission: "Automatic" },
  { src: "/Bus/Toyota hiace 2024.jpeg", name: "Toyota Hiace", year: 2024, transmission: "Automatic" },
  { src: "/Lexus/Lexus GX 2023.jpeg", name: "Lexus GX", year: 2023, transmission: "Automatic" },
  { src: "/Lexus/Lexus ES 2024.avif", name: "Lexus ES", year: 2024, transmission: "Automatic" },
  { src: "/Lexus/Lexus RX 2023.jpg", name: "Lexus RX", year: 2023, transmission: "Automatic" },
];

const dealContent =
  "Unlock unbeatable savings this week only! Enjoy a 5% discount on our top 2026 models. Whether you crave luxury, space, or adventure, these vehicles deliver style, comfort, and performance. Don't miss out—limited stock available!";

function DealCard({ deal, idx }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <article className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col transition-transform hover:scale-[1.02]">
      <Link
        href="/contact"
        className="relative w-full h-48 xs:h-56 sm:h-64 md:h-72 lg:h-80 block group focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
      >
        {!loaded && (
          <div className="absolute inset-0 z-10 bg-gray-200 animate-pulse rounded-t-2xl" />
        )}
        <Image
          src={deal.src}
          alt={deal.name}
          fill
          className="object-cover group-hover:opacity-90 transition-opacity duration-200"
          sizes="(max-width: 768px) 100vw, 33vw"
          quality={85}
          priority={idx === 0}
          onLoad={() => setLoaded(true)}
        />
        <span className="sr-only">Contact us about {deal.name}</span>
      </Link>
      <div className="flex items-center justify-between bg-gray-100 px-3 xs:px-4 py-2 xs:py-3">
        <span className="text-gray-900 font-semibold text-base xs:text-lg lg:text-xl truncate">
          {deal.name}
        </span>
        <Button href="/contact" variant="primary" size="sm">
          Call Us
        </Button>
      </div>
      <hr className="border-gray-300 m-0 h-px" />
      <div className="flex flex-row items-center justify-between px-3 xs:px-4 py-2 gap-2">
        <span className="text-gray-700 text-sm xs:text-base lg:text-lg font-medium">{deal.year}</span>
        <span className="text-gray-500 text-xs xs:text-sm lg:text-base">{deal.transmission}</span>
      </div>
    </article>
  );
}

export default function NewDeal() {
  return (
    <section className="bg-white py-10 md:py-14 flex flex-col items-center px-4">
      <SectionHeading
        title="Amazing Deal of the week"
        subtitle="Get 5% discount on any of these Vehicles"
        className="mb-4"
      />
      <p className="text-center text-sm xs:text-base md:text-lg text-gray-600 mb-6 max-w-2xl">
        {dealContent}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {deals.map((deal, idx) => (
          <DealCard key={`${deal.name}-${idx}`} deal={deal} idx={idx} />
        ))}
      </div>
    </section>
  );
}
