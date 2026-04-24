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
      className="cursor-pointer group text-left"
      onClick={() => onOpen(img)}
    >
      <div className="w-full h-55 overflow-hidden rounded-lg">
        <Image
          src={img.src}
          alt={img.name}
          width={320}
          height={220}
          className="object-cover w-full h-full group-hover:scale-105 transition"
        />
      </div>
      <p className="text-center mt-2 text-gray-700 group-hover:text-blue-600">
        {img.name}
      </p>
    </button>
  );
}

function CarModal({ car, onClose }) {
  if (!car) return null;
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-xl max-w-lg w-full p-4 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-xl"
          aria-label="Close modal"
        >
          ✕
        </button>
        <div className="w-full h-75 mb-4">
          <Image
            src={car.src}
            alt={car.name}
            width={500}
            height={300}
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <h2 className="text-xl font-bold mb-2">{car.name}</h2>
        <p className="text-gray-600 mb-4">
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

      <div className="max-w-5xl mx-auto mt-6 px-4">
        <BrandFilter brands={BRANDS} selected={selectedBrand} onSelect={handleBrandSelect} />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="w-full h-55 bg-gray-300 animate-pulse rounded-lg" />
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
