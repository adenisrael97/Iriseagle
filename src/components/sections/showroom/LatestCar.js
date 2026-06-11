"use client";

import Image from "next/image";
import { useState, useMemo, useEffect } from "react";
import Button from "@/components/ui/Button";
import PageHero from "@/components/layout/PageHero";

const brandImages = {
  Toyota: [
    "Toyota Camry 2026.jpeg",
    "Toyota Corrolla 2026.jpeg",
    "Toyota Highlander 2026.jpeg",
    "Toyota Hilux 2026.jpeg",
    "Toyota Landcruiser 2026.jpeg",
    "Toyota Sienna 2026.jpeg",
    "Toyota prado 2026.jpg",
  ],
  Mercedes: [
    "Mercedes AMG C63 2026.avif",
    "Mercedes G wagon 2026.jpeg",
    "Mercedes GLE 450 2026.jpeg",
    "Mercedes GLE AMG 63 S 2026.jpeg",
    "Mercedes S Class 2026.webp",
  ],
  Lexus: ["Lexus ES 2026.jpg", "Lexus GX 2026.jpeg", "Lexus RX 350 2026.jpeg"],
  Bus: ["Toyota Coaster 2026.webp"],
  Electric: ["Toyota bZ 2026.avif", "Toyota bZ3 2026.jpeg"],
  Bmw: ["Bmw 7 series 2026.jpg", "Bmw X6 2026.jpeg", "Bmw X7 2026.avif"],
};

const BRANDS = ["Toyota", "Bus", "Bmw", "Mercedes", "Lexus", "Electric"];

function BrandFilter({ brands, selected, onSelect }) {
  return (
    <div className="flex flex-wrap gap-4 justify-center mb-8">
      {brands.map((brand) => (
        <button
          key={brand}
          onClick={() => onSelect(brand)}
          className={`px-5 py-2 rounded-full border font-semibold transition ${
            selected === brand
              ? "bg-red-600 text-white border-red-600 hover:bg-red-700"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-200"
          }`}
        >
          {brand}
        </button>
      ))}
    </div>
  );
}

function CarTile({ img, onOpen }) {
  return (
    <button
      type="button"
      className="cursor-pointer group text-left w-full"
      onClick={() => onOpen(img)}
    >
      <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden rounded-xl shadow-md group-hover:shadow-xl transition-shadow duration-300">
        <Image
          src={img.src}
          alt={img.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
        <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-white text-sm font-semibold text-center">{img.name}</p>
        </div>
      </div>
      <p className="text-center mt-3 text-gray-700 group-hover:text-red-600 font-medium text-sm md:text-base transition-colors duration-200">
        {img.name}
      </p>
    </button>
  );
}

function CarModal({ car, onClose }) {
  if (!car) return null;
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-5 relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-2xl text-gray-400 hover:text-red-600 transition-colors"
          aria-label="Close modal"
        >
          ✕
        </button>
        <div className="relative w-full h-72 sm:h-96 mb-5 rounded-xl overflow-hidden">
          <Image
            src={car.src}
            alt={car.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 90vw, 672px"
          />
        </div>
        <h2 className="text-2xl font-bold mb-2 text-gray-900">{car.name}</h2>
        <p className="text-gray-500 mb-5 text-sm">
          Premium 2026 model with advanced features, luxury interior and
          top-tier performance.
        </p>
        <Button href="/contact" variant="ghost" size="md" fullWidth className="bg-black text-white hover:bg-gray-800">
          Contact for Purchase
        </Button>
      </div>
    </div>
  );
}

export default function LatestCarPage() {
  const [selectedBrand, setSelectedBrand] = useState("Toyota");
  const [loading, setLoading] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => setLoading(false), 600);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  const images = useMemo(() => {
    const files = brandImages[selectedBrand] || [];
    return files.map((filename) => ({
      src: `/${selectedBrand}/${filename}`,
      name: filename.replace(/\.(jpe?g|png|webp|avif)$/i, ""),
    }));
  }, [selectedBrand]);

  const handleBrandSelect = (brand) => {
    setLoading(true);
    setSelectedBrand(brand);
  };

  return (
    <>
      <PageHero
        image="/background/background16.jpg"
        imageAlt="Our Latest Vehicles"
        title="Our Latest Vehicles"
        subtitle="Discover modern, luxury and performance vehicles tailored for you."
        height="xl"
        overlay="dark"
      />

      <div className="max-w-7xl mx-auto mt-8 px-4 pb-16">
        <BrandFilter brands={BRANDS} selected={selectedBrand} onSelect={handleBrandSelect} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="w-full h-56 sm:h-64 md:h-72 lg:h-80 bg-gray-300 animate-pulse rounded-xl" />
              ))
            : images.map((img) => (
                <CarTile key={img.src} img={img} onOpen={setSelectedCar} />
              ))}
        </div>
      </div>

      <CarModal car={selectedCar} onClose={() => setSelectedCar(null)} />
    </>
  );
}
