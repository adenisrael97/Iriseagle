"use client";

import Image from "next/image";
import { useState, useMemo, useEffect } from "react";
import Button from "@/components/ui/Button";
import PageHero from "@/components/layout/PageHero";

const brandFolders = {
  Toyota: [
    "Toyota Camry 2023.jpeg","Toyota Camry 2024.jpeg","Toyota Camry 2025.jpeg","Toyota Camry 2026.jpeg",
    "Toyota Corrolla 2023.jpeg","Toyota Corrolla 2024.jpeg","Toyota Corrolla 2025.jpeg","Toyota Corrolla 2026.jpeg",
    "Toyota Highlander 2024.jpeg","Toyota Highlander 2025.jpeg","Toyota Highlander 2026.jpeg",
    "Toyota Hilux 2024.jpeg","Toyota Hilux 2025.jpeg","Toyota Hilux 2026.jpeg",
    "Toyota Landcruiser 2023.jpeg","Toyota Landcruiser 2024.jpeg","Toyota Landcruiser 2025.jpeg","Toyota Landcruiser 2026.jpeg",
    "Toyota Sienna 2024.jpg","Toyota Sienna 2025.jpg","Toyota Sienna 2026.jpeg","Toyota Sienna 2026.jpg",
    "Toyota prado 2023.jpg","Toyota prado 2024.jpeg","Toyota prado 2025.jpg","Toyota prado 2026.jpg",
  ],
  Lexus: [
    "Lexus ES 2024.avif","Lexus ES 2025.jpg","Lexus ES 2026.jpg",
    "Lexus GX 2023.jpeg","Lexus GX 2024.jpeg","Lexus GX 2025.jpeg","Lexus GX 2026.jpeg",
    "Lexus RX 2023.jpg","Lexus RX 2024.avif","Lexus RX 2025.jpeg","Lexus RX 350 2026.jpeg",
  ],
  Bus: [
    "Toyota Coaster 2023.jpeg","Toyota Coaster 2024.jpeg","Toyota Coaster 2025.webp","Toyota Coaster 2026.webp",
    "Toyota hiace 2023.jpeg","Toyota hiace 2024.jpeg","Toyota hiace 2025.jpeg",
  ],
  Mercedes: [
    "Mercedes AMG C63 2024.webp","Mercedes AMG C63 2025.webp","Mercedes AMG C63 2026.avif",
    "Mercedes G wagon 2024.avif","Mercedes G wagon 2025.jpeg","Mercedes G wagon 2026.jpeg",
    "Mercedes GLE 450 2024.jpeg","Mercedes GLE 450 2025.jpeg","Mercedes GLE 450 2026.jpeg",
    "Mercedes GLE AMG 63 S 2025.jpeg","Mercedes GLE AMG 63 S 2026.jpeg","Mercedes GLE AMG S 2024.jpeg",
    "Mercedes GLE Coupe 2024.jpeg","Mercedes S Class 2023.jpeg","Mercedes S Class 2024.webp","Mercedes S Class 2025.jpg","Mercedes S Class 2026.webp",
  ],
  Bmw: [
    "Bmw 7 series 2024.png","Bmw 7 series 2025.jpeg","Bmw 7 series 2026.jpg",
    "Bmw X6 2024.jpeg","Bmw X6 2025.jpeg","Bmw X6 2026.jpeg",
    "Bmw X7 2024.webp","Bmw X7 2025.webp","Bmw X7 2026.avif",
  ],
  Electric: [
    "Toyota bZ 2025.jpeg","Toyota bZ 2026.avif","Toyota bZ3 2026.jpeg","Toyota bz3 2025.jpeg",
  ],
};

const BRANDS = ["Toyota", "Lexus", "Bus", "Mercedes", "Bmw", "Electric"];

function BrandFilter({ brands, selected, onSelect }) {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-8">
      {brands.map((brand) => (
        <button
          key={brand}
          onClick={() => onSelect(brand)}
          className={`px-5 py-2 rounded-full border-2 font-semibold transition-colors duration-200 ${
            selected === brand
              ? "bg-red-600 text-white border-red-600 shadow-lg"
              : "bg-white text-gray-700 border-gray-300 hover:bg-red-600 hover:text-white hover:border-red-600"
          }`}
        >
          {brand}
        </button>
      ))}
    </div>
  );
}

function Pagination({ currentPage, totalPages, onChange }) {
  if (totalPages <= 1) return null;
  return (
    <div className="flex justify-center items-center gap-3 mt-10 flex-wrap">
      <button
        onClick={() => onChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-red-600 text-white rounded disabled:opacity-40"
      >
        Prev
      </button>
      {Array.from({ length: totalPages }).map((_, i) => (
        <button
          key={i}
          onClick={() => onChange(i + 1)}
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
        onClick={() => onChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-red-600 text-white rounded disabled:opacity-40"
      >
        Next
      </button>
    </div>
  );
}

function CarTile({ img, onOpen }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(img)}
      className="cursor-pointer group text-left w-full"
    >
      <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden rounded-xl bg-gray-100 shadow-md group-hover:shadow-xl group-hover:border-red-600 border border-gray-200 transition-shadow duration-300">
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
  if (!car?.src) return null;
  return (
    <div className="fixed inset-0 bg-gray-900/90 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-5 relative border-2 border-red-600 shadow-2xl">
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
        <h2 className="text-2xl font-bold mb-2 text-red-600">{car.name}</h2>
        <p className="text-gray-500 mb-5 text-sm">
          Premium vehicle with excellent performance and comfort.
        </p>
        <Button href="/contact" variant="primary" size="md" fullWidth>
          Contact for Purchase
        </Button>
      </div>
    </div>
  );
}

export default function OurVehicles() {
  const [selectedBrand, setSelectedBrand] = useState("Toyota");
  const [loading, setLoading] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 6;

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, [selectedBrand]);

  const images = useMemo(() => {
    const files = brandFolders[selectedBrand] || [];
    return files.map((filename) => ({
      src: `/${selectedBrand}/${filename}`,
      name: filename.replace(/\.(jpe?g|png|webp|avif)$/i, ""),
    }));
  }, [selectedBrand]);

  const totalPages = Math.ceil(images.length / carsPerPage);
  const paginatedImages = useMemo(() => {
    const start = (currentPage - 1) * carsPerPage;
    return images.slice(start, start + carsPerPage);
  }, [images, currentPage]);

  const handleBrandSelect = (brand) => {
    setLoading(true);
    setSelectedBrand(brand);
    setCurrentPage(1);
  };

  return (
    <>
      <PageHero
        image="/background/background17.jpg"
        imageAlt="Our Vehicles"
        title="Our Vehicles"
        subtitle="Explore our curated selection of vehicles."
        height="md"
        overlay="dark"
      />

      <div className="max-w-7xl mx-auto mt-8 px-4 pb-16">
        <BrandFilter
          brands={BRANDS}
          selected={selectedBrand}
          onSelect={handleBrandSelect}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {loading ? (
            Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="w-full h-56 sm:h-64 md:h-72 lg:h-80 bg-gray-200 animate-pulse rounded-xl" />
            ))
          ) : paginatedImages.length === 0 ? (
            <div className="col-span-full text-center text-gray-400">
              No vehicles found.
            </div>
          ) : (
            paginatedImages.map((img) => (
              <CarTile key={img.src} img={img} onOpen={setSelectedCar} />
            ))
          )}
        </div>

        {!loading && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onChange={setCurrentPage}
          />
        )}
      </div>

      <CarModal car={selectedCar} onClose={() => setSelectedCar(null)} />
    </>
  );
}
