"use client";
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const vehicles2026 = [
  // Toyota (2)
  { src: '/Toyota/Toyota Camry 2026.jpeg', name: 'Toyota Camry 2026', desc: 'Experience the future of comfort and performance with the 2026 Camry.' },
  { src: '/Toyota/Toyota Landcruiser 2026.jpeg', name: 'Toyota Landcruiser 2026', desc: 'Unmatched power and luxury in the 2026 Landcruiser.' },

  // Mercedes (2)
  { src: '/Mercedes/Mercedes AMG C63 2026.avif', name: 'Mercedes AMG C63 2026', desc: 'Unleash the thrill of the 2026 AMG C63.' },
  { src: '/Mercedes/Mercedes G wagon 2026.jpeg', name: 'Mercedes G Wagon 2026', desc: 'Iconic design meets modern luxury in the 2026 G Wagon.' },

  // Lexus (2)
  { src: '/Lexus/Lexus ES 2026.jpg', name: 'Lexus ES 2026', desc: 'Elegance and innovation in the 2026 Lexus ES.' },
  { src: '/Lexus/Lexus GX 2026.jpeg', name: 'Lexus GX 2026', desc: 'Versatility and luxury: the 2026 Lexus GX.' },

  // Electric (2)
  { src: '/Electric/Toyota bZ 2026.avif', name: 'Toyota bZ 2026', desc: 'Go green with the all-electric 2026 Toyota bZ.' },
  { src: '/Electric/Toyota bZ3 2026.jpeg', name: 'Toyota bZ3 2026', desc: 'Electric innovation: the 2026 Toyota bZ3.' },

  // Bus (2)
  { src: '/Bus/Toyota Coaster 2026.webp', name: 'Toyota Coaster 2026', desc: 'Travel together in comfort: the 2026 Coaster.' },
  { src: '/Electric/Toyota Hiace 2026.jpeg', name: 'Toyota Hiace 2026', desc: 'Efficient and modern: the 2026 Hiace.' },

  // BMW (2)
  { src: '/Bmw/Bmw 7 series 2026.jpg', name: 'BMW 7 Series 2026', desc: 'The pinnacle of luxury: the 2026 BMW 7 Series.' },
  { src: '/Bmw/Bmw X6 2026.jpeg', name: 'BMW X6 2026', desc: 'Sporty and bold: the 2026 BMW X6.' },
];


export default function NewVehicle() {
  const [current, setCurrent] = useState(0);
  const total = vehicles2026.length;

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [total]);

  // Swipe gesture support
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const prevSlide = () => setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current;
      if (diff > 50) nextSlide();
      else if (diff < -50) prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const safeIndex = current >= total ? 0 : current;
  const { src, name, desc } = vehicles2026[safeIndex];

  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center px-2 xs:px-4 py-6 xs:py-8 md:py-10">
      <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-1 xs:mb-2 md:mb-3 text-gray-900">Stay ahead of the curve</h1>
      <p className="text-center text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 mb-6 xs:mb-8 md:mb-10 max-w-2xl">Introducing the all new 2026 luxury vehicles and buses</p>
      <div className="relative w-full max-w-7xl flex items-center justify-center py-2 xs:py-3 sm:py-4 md:py-6">
        {/* Left Arrow: show on sm and md only */}
        <button
          aria-label="Previous vehicle"
          onClick={prevSlide}
          className="hidden sm:flex absolute left-0 sm:-translate-x-12 md:-translate-x-16 lg:-translate-x-24 z-10 bg-gray-100 hover:bg-gray-200 rounded-full sm:p-2 md:p-3 lg:p-4 shadow-md transition-colors"
        >
          <FaChevronLeft size={20} className="sm:w-5 md:w-7" />
        </button>
        <div
          className="flex flex-col md:flex-row items-center w-full gap-4 md:gap-0"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <Link href="/contact" className="relative w-full h-60 xs:h-72 sm:h-80 md:w-[60%] md:h-128 block group focus:outline-none focus:ring-2 focus:ring-red-600">
            <Image
              src={src}
              alt={name}
              fill
              className="object-contain group-hover:opacity-90 transition-opacity duration-200"
              sizes="(max-width: 768px) 100vw, 60vw"
              priority
            />
            <span className="sr-only">Contact us about {name}</span>
          </Link>
          <div className="flex-1 flex flex-col items-center md:items-start justify-center md:pl-16 pl-0 pt-4 md:pt-0">
            <div className="font-semibold text-xl xs:text-2xl md:text-3xl text-gray-800 mb-2 xs:mb-3 w-full text-center md:text-left">{name}</div>
            <div className="text-gray-600 mb-4 xs:mb-6 text-sm xs:text-base md:text-lg max-w-xs xs:max-w-sm sm:max-w-md md:max-w-xl w-full text-center md:text-left">{desc}</div>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 xs:px-8 py-2 xs:py-3 rounded-full text-sm xs:text-base font-medium transition-colors mx-auto md:mx-0">Request Quote</button>
          </div>
        </div>
        {/* Right Arrow: show on sm and md only */}
        <button
          aria-label="Next vehicle"
          onClick={nextSlide}
          className="hidden sm:flex absolute right-0 sm:translate-x-12 md:translate-x-16 lg:translate-x-24 z-10 bg-gray-100 hover:bg-gray-200 rounded-full sm:p-2 md:p-3 lg:p-4 shadow-md transition-colors"
        >
          <FaChevronRight size={20} className="sm:w-5 md:w-7" />
        </button>
      </div>
      <div className="flex gap-1.5 sm:gap-2 mt-4 xs:mt-6 sm:mt-8">
        {vehicles2026.map((_, idx) => (
          <span
            key={idx}
            className={`w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 rounded-full ${idx === safeIndex ? 'bg-red-600' : 'bg-gray-300'} transition-colors`}
          />
        ))}
      </div>
    </div>
  );
}
