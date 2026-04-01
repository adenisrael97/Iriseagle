
"use client";
import Image from "next/image";
import Link from "next/link";

export default function PreOrder() {
  return (
    <>
      <section className="relative w-full min-h-[60vh] flex items-center justify-center py-12 px-4 mb-16">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/background/background16.jpg"
            alt="Pre-Order Background"
            fill
            className="object-cover object-center w-full h-full opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/30 to-transparent" />
        </div>
        {/* Centered Content */}
        <div className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center justify-center text-center py-12 px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">Pre Order</h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8 drop-shadow">
            Secure your next luxury vehicle before it arrives! With Iris Eagle’s Pre-Order service, you get priority access to the latest models, exclusive offers, and a seamless reservation process. Don’t miss your chance to drive the car of your dreams—reserve it today and experience the Iris Eagle difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto justify-center mb-10">
            <Link href="/contact" className="px-8 py-3 bg-red-700 text-white rounded-md font-semibold shadow hover:bg-red-800 transition-colors duration-200 text-base sm:text-lg w-full sm:w-auto text-center">Contact Us</Link>
            <Link href="/showroom" className="px-8 py-3 bg-white text-red-700 rounded-md font-semibold shadow hover:bg-red-100 transition-colors duration-200 text-base sm:text-lg w-full sm:w-auto text-center">Show Room</Link>
          </div>
        </div>
      </section>

      {/* Pre-Order Form Section (separate from background) */}
      <section className="w-full flex flex-col items-center justify-center px-4 mb-16">
        <form className="bg-white/95 rounded-xl shadow p-6 flex flex-col gap-4 w-full max-w-md mx-auto mb-12">
          <input type="text" placeholder="Full Name" className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400" required />
          <input type="email" placeholder="Email Address" className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400" required />
          <input type="tel" placeholder="Phone Number" className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400" required />
          <input type="text" placeholder="Brand" className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400" required />
          <input type="number" placeholder="Year" className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400" required />
          <textarea placeholder="Message" className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400 min-h-20" />
          <button type="submit" className="mt-2 bg-red-700 text-white font-semibold py-3 rounded-lg shadow hover:bg-red-800 transition-colors duration-200">Submit Pre-Order</button>
        </form>

        {/* Latest Vehicles Section */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-red-700 mb-3 mt-8">Our Latest Vehicles</h1>
        <p className="text-gray-700 text-md md:text-lg mb-8 max-w-xl mx-auto">
          Explore the newest arrivals at Iris Eagle—featuring the latest in luxury, technology, and performance. Find your perfect match among our top brands and models.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl mx-auto">
          {/* Toyota */}
          <div className="flex flex-col items-center bg-white/90 rounded-xl p-4 shadow hover:shadow-lg transition-shadow duration-200">
            <Image src="/Toyota/Toyota Hilux 2026.jpeg" alt="Toyota" width={220} height={120} className="rounded-lg object-cover mb-2 w-full h-32 sm:h-36 md:h-40" />
            <span className="font-semibold text-gray-800 text-lg">Toyota</span>
            <span className="text-xs text-gray-500 mt-1">Toyota Hilux 2026.jpeg</span>
          </div>
          {/* Electric */}
          <div className="flex flex-col items-center bg-white/90 rounded-xl p-4 shadow hover:shadow-lg transition-shadow duration-200">
            <Image src="/Electric/Toyota bZ 2026.avif" alt="Electric" width={220} height={120} className="rounded-lg object-cover mb-2 w-full h-32 sm:h-36 md:h-40" />
            <span className="font-semibold text-gray-800 text-lg">Electric</span>
            <span className="text-xs text-gray-500 mt-1">Toyota bZ 2026</span>
          </div>
          {/* Lexus */}
          <div className="flex flex-col items-center bg-white/90 rounded-xl p-4 shadow hover:shadow-lg transition-shadow duration-200">
            <Image src="/Lexus/Lexus GX 2026.jpeg" alt="Lexus" width={220} height={120} className="rounded-lg object-cover mb-2 w-full h-32 sm:h-36 md:h-40" />
            <span className="font-semibold text-gray-800 text-lg">Lexus</span>
            <span className="text-xs text-gray-500 mt-1">Lexus GX 2026</span>
          </div>
          {/* Mercedes */}
          <div className="flex flex-col items-center bg-white/90 rounded-xl p-4 shadow hover:shadow-lg transition-shadow duration-200">
            <Image src="/Mercedes/Mercedes S Class 2026.webp" alt="Mercedes" width={220} height={120} className="rounded-lg object-cover mb-2 w-full h-32 sm:h-36 md:h-40" />
            <span className="font-semibold text-gray-800 text-lg">Mercedes</span>
            <span className="text-xs text-gray-500 mt-1">Mercedes S Class 2026</span>
          </div>
          {/* Bus */}
          <div className="flex flex-col items-center bg-white/90 rounded-xl p-4 shadow hover:shadow-lg transition-shadow duration-200">
            <Image src="/Bus/Toyota Coaster 2026.webp" alt="Bus" width={220} height={120} className="rounded-lg object-cover mb-2 w-full h-32 sm:h-36 md:h-40" />
            <span className="font-semibold text-gray-800 text-lg">Bus</span>
            <span className="text-xs text-gray-500 mt-1">Toyota Coaster 2026</span>
          </div>
          {/* BMW */}
          <div className="flex flex-col items-center bg-white/90 rounded-xl p-4 shadow hover:shadow-lg transition-shadow duration-200">
            <Image src="/Bmw/Bmw 7 series 2026.jpg" alt="Bmw" width={220} height={120} className="rounded-lg object-cover mb-2 w-full h-32 sm:h-36 md:h-40" />
            <span className="font-semibold text-gray-800 text-lg">BMW</span>
            <span className="text-xs text-gray-500 mt-1">Bmw 7 series 2026</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-15 w-full sm:w-auto justify-center mb-10">
            <Link href="/contact" className="px-8 py-3 bg-red-700 text-white rounded-md font-semibold shadow hover:bg-red-800 transition-colors duration-200 text-base sm:text-lg w-full sm:w-auto text-center">Contact Us</Link>
            <Link href="/showroom" className="px-8 py-3 bg-white text-red-700 rounded-md font-semibold shadow hover:bg-red-100 transition-colors duration-200 text-base sm:text-lg w-full sm:w-auto text-center">Show Room</Link>
          </div>
      </section>
    </>
  );
}
