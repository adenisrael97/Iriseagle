"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useMemo, useEffect } from "react";

// Map of brands to their 2026 images
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
  Lexus: [
    "Lexus ES 2026.jpg",
    "Lexus GX 2026.jpeg",
    "Lexus RX 350 2026.jpeg",
  ],
  Bus: ["Toyota Coaster 2026.webp"],
  Electric: ["Toyota bZ 2026.avif", "Toyota bZ3 2026.jpeg"],
  Bmw: ["Bmw 7 series 2026.jpg", "Bmw X6 2026.jpeg", "Bmw X7 2026.avif"],
};

export default function LatestCarPage() {
  const [selectedBrand, setSelectedBrand] = useState("Toyota");
  const [loading, setLoading] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  // simulate loading when switching brand
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

  return (
    <>
      {/* HERO */}
      <main className="relative min-h-screen flex flex-col items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/background/background16.jpg"
            alt="bg"
            fill
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 text-center max-w-2xl px-4 py-32">
          <h1 className="text-4xl font-extrabold text-white mb-4">
            Our Latest Vehicles
          </h1>
          <p className="text-gray-200">
            Discover modern, luxury and performance vehicles tailored for you.
          </p>
        </div>
      </main>

      {/* BUTTONS */}
      <div className="max-w-5xl mx-auto mt-6 px-4">
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {["Toyota", "Bus", "Bmw", "Mercedes", "Lexus", "Electric"].map(
            (brand) => (
              <button
                key={brand}
                onClick={() => {
                  setLoading(true);
                  setSelectedBrand(brand);
                }}
                className={`px-5 py-2 rounded-full border font-semibold transition
                  ${selectedBrand === brand
                    ? "bg-red-600 text-white border-red-600 hover:bg-red-700"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-200"}
                `}
              >
                {brand}
              </button>
            )
          )}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {loading
            ? // 🔥 SKELETON UI
              Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="w-full h-55 bg-gray-300 animate-pulse rounded-lg"
                />
              ))
            : images.map((img) => (
                <div
                  key={img.src}
                  className="cursor-pointer group"
                  onClick={() => setSelectedCar(img)}
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
                </div>
              ))}
        </div>
      </div>

      {/* 🔥 MODAL */}
      {selectedCar && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl max-w-lg w-full p-4 relative">
            {/* Close */}
            <button
              onClick={() => setSelectedCar(null)}
              className="absolute top-2 right-3 text-xl"
            >
              ✕
            </button>

            {/* Image */}
            <div className="w-full h-75 mb-4">
              <Image
                src={selectedCar.src}
                alt={selectedCar.name}
                width={500}
                height={300}
                className="object-cover w-full h-full rounded-lg"
              />
            </div>

            {/* Details */}
            <h2 className="text-xl font-bold mb-2">
              {selectedCar.name}
            </h2>

            <p className="text-gray-600 mb-4">
              Premium 2026 model with advanced features, luxury interior and
              top-tier performance.
            </p>

            <Link href="/contact" className="w-full block bg-black text-white py-2 rounded-lg hover:bg-gray-800 text-center">
              Contact for Purchase
            </Link>
          </div>
        </div>
      )}
    </>
  );
}