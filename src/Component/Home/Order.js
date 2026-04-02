"use client";
import Image from 'next/image';
import Link from 'next/link';
import { IconSearch, IconCar } from '@/Component/Icons';

export default function Order() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background/background16.jpg"
          alt="Background"
          fill
          className="object-cover"
          loading="lazy"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-6 w-full max-w-6xl">
          {/* White Container - Can't Find Your Dream */}
          <div className="flex-1 bg-white rounded-2xl shadow-2xl p-6 xs:p-8 md:p-10 flex flex-col items-center text-center">
            <h1 className="text-2xl xs:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Can&apos;t find Your Dream Car?
            </h1>
            <div className="mb-6">
              <IconSearch className="text-red-600 w-16 h-16 xs:w-20 xs:h-20 md:w-24 md:h-24" />
            </div>
            <p className="text-gray-600 text-sm xs:text-base md:text-lg mb-6 max-w-md">
              Looking for something special? We understand that finding the perfect vehicle can be challenging. 
              Let us help you discover your dream car! Our expert team will search our extensive network to 
              find exactly what you&apos;re looking for—whether it&apos;s a specific model, year, or unique features.
            </p>
            <Link href="/contact" className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded-md text-base md:text-lg transition-colors shadow-lg inline-block">
              Make a Request
            </Link>
          </div>

          {/* Transparent Red Container - Pre-order */}
          <div className="flex-1 bg-red-500/80 backdrop-blur-sm rounded-2xl shadow-2xl p-6 xs:p-8 md:p-10 flex flex-col items-center text-center">
            <h1 className="text-2xl xs:text-3xl md:text-4xl font-bold text-white mb-6">
              Pre-order a Car
            </h1>
            <div className="mb-6">
              <IconCar className="text-white w-16 h-16 xs:w-20 xs:h-20 md:w-24 md:h-24" />
            </div>
            <p className="text-white text-sm xs:text-base md:text-lg mb-6 max-w-md">
              Be the first to own the latest luxury vehicles! Secure your spot today and get exclusive access 
              to upcoming 2026 models before they hit the showroom. Enjoy priority delivery, special financing 
              options, and personalized configuration for your dream vehicle.
            </p>
            <Link href="/more/preorder" className="bg-white hover:bg-gray-100 text-red-600 font-bold px-8 py-3 rounded-md text-base md:text-lg transition-colors shadow-lg inline-block">
              Pre-order Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
