"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useMemo, useEffect } from "react";

const brandFolders = {
  Toyota: [
    "Toyota Camry 2023.jpeg","Toyota Camry 2024.jpeg","Toyota Camry 2025.jpeg","Toyota Camry 2026.jpeg",
    "Toyota Corrolla 2023.jpeg","Toyota Corrolla 2024.jpeg","Toyota Corrolla 2025.jpeg","Toyota Corrolla 2026.jpeg",
    "Toyota Highlander 2024.jpeg","Toyota Highlander 2025.jpeg","Toyota Highlander 2026.jpeg",
    "Toyota Hilux 2024.jpeg","Toyota Hilux 2025.jpeg","Toyota Hilux 2026.jpeg",
    "Toyota Landcruiser 2023.jpeg","Toyota Landcruiser 2024.jpeg","Toyota Landcruiser 2025.jpeg","Toyota Landcruiser 2026.jpeg",
    "Toyota Sienna 2024.jpg","Toyota Sienna 2025.jpg","Toyota Sienna 2026.jpeg","Toyota Sienna 2026.jpg",
    "Toyota prado 2023.jpg","Toyota prado 2024.jpeg","Toyota prado 2025.jpg","Toyota prado 2026.jpg"
  ],
  Lexus: [
    "Lexus ES 2024.avif","Lexus ES 2025.jpg","Lexus ES 2026.jpg",
    "Lexus GX 2023.jpeg","Lexus GX 2024.jpeg","Lexus GX 2025.jpeg","Lexus GX 2026.jpeg",
    "Lexus RX 2023.jpg","Lexus RX 2024.avif","Lexus RX 2025.jpeg","Lexus RX 350 2026.jpeg"
  ],
  Bus: [
    "Toyota Coaster 2023.jpeg","Toyota Coaster 2024.jpeg","Toyota Coaster 2025.webp","Toyota Coaster 2026.webp",
    "Toyota hiace 2023.jpeg","Toyota hiace 2024.jpeg","Toyota hiace 2025.jpeg"
  ],
  Mercedes: [
    "Mercedes AMG C63 2024.webp","Mercedes AMG C63 2025.webp","Mercedes AMG C63 2026.avif",
    "Mercedes G wagon 2024.avif","Mercedes G wagon 2025.jpeg","Mercedes G wagon 2026.jpeg",
    "Mercedes GLE 450 2024.jpeg","Mercedes GLE 450 2025.jpeg","Mercedes GLE 450 2026.jpeg",
    "Mercedes GLE AMG 63 S 2025.jpeg","Mercedes GLE AMG 63 S 2026.jpeg","Mercedes GLE AMG S 2024.jpeg",
    "Mercedes GLE Coupe 2024.jpeg","Mercedes S Class 2023.jpeg","Mercedes S Class 2024.webp","Mercedes S Class 2025.jpg","Mercedes S Class 2026.webp"
  ],
  // Benz: [],
  Bmw: [
    "Bmw 7 series 2024.png",
    "Bmw 7 series 2025.jpeg",
    "Bmw 7 series 2026.jpg",
    "Bmw X6 2024.jpeg",
    "Bmw X6 2025.jpeg",
    "Bmw X6 2026.jpeg",
    "Bmw X7 2024.webp",
    "Bmw X7 2025.webp",
    "Bmw X7 2026.avif"
  ],
  Electric: [
    "Toyota bZ 2025.jpeg","Toyota bZ 2026.avif","Toyota bZ3 2026.jpeg","Toyota bz3 2025.jpeg"
  ]
};

const folderMap = {
  Toyota: "Toyota",
  Lexus: "Lexus",
  Bus: "Bus",
  Mercedes: "Mercedes",
  Bmw: "Bmw",
  Electric: "Electric"
};

export default function OurVehicles() {
  const [selectedBrand, setSelectedBrand] = useState("Toyota");
  const [loading, setLoading] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  // 🔥 Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 6;

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, [selectedBrand]);



  const images = useMemo(() => {
    const files = brandFolders[selectedBrand] || [];
    const folder = folderMap[selectedBrand];
    return files.map((filename) => {
      // Remove file extension for display name
      const name = filename.replace(/\.(jpe?g|png|webp|avif)$/i, "");
      return {
        src: `/${folder}/${filename}`,
        name
      };
    });
  }, [selectedBrand]);

  // 🔥 Pagination logic
  const totalPages = Math.ceil(images.length / carsPerPage);

  const paginatedImages = useMemo(() => {
    const start = (currentPage - 1) * carsPerPage;
    return images.slice(start, start + carsPerPage);
  }, [images, currentPage]);

  return (
    <>
      {/* HERO */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center px-4">
        <div className="absolute inset-0">
          <Image src="/background/background17.jpg" alt="bg" fill className="object-cover opacity-80" loading="eager" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gray-900/70" />
        </div>

        <div className="relative z-10 text-center max-w-2xl">
          <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">Our Vehicles</h2>
          <p className="text-gray-200">Explore our curated selection of vehicles.</p>
        </div>
      </section>

      {/* BUTTONS */}
      <div className="max-w-5xl mx-auto mt-8 px-4">
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {["Toyota", "Lexus", "Bus", "Mercedes", "Bmw", "Electric"].map((brand) => (
            <button
              key={brand}
              onClick={() => {
                setLoading(true);
                setSelectedBrand(brand);
                setCurrentPage(1); // reset page on brand change
              }}
              className={`px-5 py-2 rounded-full border-2 font-semibold transition-colors duration-200
                ${selectedBrand === brand
                  ? "bg-red-600 text-white border-red-600 shadow-lg"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-red-600 hover:text-white hover:border-red-600"}
              `}
            >
              {brand}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {loading ? (
            Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="w-full h-55 bg-gray-200 animate-pulse rounded-lg" />
            ))
          ) : paginatedImages.length === 0 ? (
            <div className="col-span-full text-center text-gray-400">
              No vehicles found.
            </div>
          ) : (
            paginatedImages.map((img) => (
              <div
                key={img.src}
                onClick={() => setSelectedCar(img)}
                className="cursor-pointer group"
              >
                <div className="relative w-full h-55 overflow-hidden rounded-lg bg-gray-100 border border-gray-300 group-hover:border-red-600 transition">
                  <Image
                    src={img.src}
                    alt={img.name}
                    fill
                    className="object-cover group-hover:scale-105 transition"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <p className="text-center mt-2 text-gray-700 group-hover:text-red-600 font-medium">
                  {img.name}
                </p>
              </div>
            ))
          )}
        </div>

        {/* 🔥 PAGINATION CONTROLS */}
        {!loading && totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 mt-10 flex-wrap">
            <button
              onClick={() => setCurrentPage((p) => p - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-red-600 text-white rounded disabled:opacity-40"
            >
              Prev
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 rounded border-2 font-semibold transition-colors duration-200 ${
                  currentPage === i + 1
                    ? "bg-red-600 text-white border-red-600 shadow"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-red-600 hover:text-white hover:border-red-600"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => p + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-red-600 text-white rounded disabled:opacity-40"
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* MODAL */}
      {selectedCar?.src && (
        <div className="fixed inset-0 bg-gray-900/90 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl max-w-lg w-full p-4 relative border-2 border-red-600">
            <button
              onClick={() => setSelectedCar(null)}
              className="absolute top-2 right-3 text-xl text-red-600 hover:text-red-800"
            >
              ✕
            </button>

            <div className="relative w-full h-75 mb-4">
              <Image
                src={selectedCar.src}
                alt={selectedCar.name}
                fill
                className="object-cover rounded-lg border border-gray-300"
                sizes="(max-width: 768px) 90vw, 512px"
              />
            </div>

            <h2 className="text-xl font-bold mb-2 text-red-600">
              {selectedCar.name}
            </h2>

            <p className="text-gray-600 mb-4">
              Premium vehicle with excellent performance and comfort.
            </p>

            <Link href="/contact" className="w-full block bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition text-center">
              Contact for Purchase
            </Link>
          </div>
        </div>
      )}
    </>
  );
}