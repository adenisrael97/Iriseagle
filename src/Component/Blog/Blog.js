"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative w-full min-h-[65vh] md:min-h-[80vh] flex items-center justify-center px-4 mb-12">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Others/Blog.jpg"
            alt="Blog Background"
            fill
            className="object-cover object-center w-full h-full opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center justify-center text-center py-12 px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">Iris Eagle Blog</h1>
          <p className="text-lg md:text-xl text-gray-100 mb-2 drop-shadow">
            Welcome to the Iris Eagle Blog! Here you&apos;ll find the latest news, tips, and insights on luxury vehicles, automotive trends, and dealership updates.
          </p>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="max-w-5xl mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Toyota Blog */}
          <div className="bg-white rounded-xl shadow p-5 flex flex-col items-center">
            <div className="flex gap-3 mb-4">
              <Image src="/Toyota/Toyota Camry 2024.jpeg" alt="Toyota Camry" width={120} height={80} className="rounded-lg object-cover" />
              <Image src="/Toyota/Toyota Highlander 2024.jpeg" alt="Toyota Highlander" width={120} height={80} className="rounded-lg object-cover" />
            </div>
            <h2 className="text-xl font-bold text-red-700 mb-2">Toyota: The Future of Reliable Mobility</h2>
            <p className="text-gray-700 mb-4">Discover how Toyota continues to set the standard for reliability and innovation in the automotive world. From the Camry to the Highlander, see why drivers trust Toyota for every journey.</p>
            <Link href="/showroom/blog/toyota" className="px-5 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition text-center block">Read More</Link>
          </div>

          {/* Lexus Blog */}
          <div className="bg-white rounded-xl shadow p-5 flex flex-col items-center">
            <div className="flex gap-3 mb-4">
              <Image src="/Lexus/Lexus ES 2025.jpg" alt="Lexus ES" width={120} height={80} className="rounded-lg object-cover" />
              <Image src="/Lexus/Lexus GX 2024.jpeg" alt="Lexus GX" width={120} height={80} className="rounded-lg object-cover" />
            </div>
            <h2 className="text-xl font-bold text-red-700 mb-2">Lexus: Redefining Luxury and Comfort</h2>
            <p className="text-gray-700 mb-4">Explore the world of Lexus, where luxury meets performance. Learn how the ES and GX models deliver a refined driving experience for discerning car lovers.</p>
            <Link href="/showroom/blog/lexus" className="px-5 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition text-center block">Read More</Link>
          </div>

          {/* Mercedes Blog */}
          <div className="bg-white rounded-xl shadow p-5 flex flex-col items-center">
            <div className="flex gap-3 mb-4">
              <Image src="/Mercedes/Mercedes AMG C63 2025.webp" alt="Mercedes AMG C63" width={120} height={80} className="rounded-lg object-cover" />
              <Image src="/Mercedes/Mercedes S Class 2025.jpg" alt="Mercedes S Class" width={120} height={80} className="rounded-lg object-cover" />
            </div>
            <h2 className="text-xl font-bold text-red-700 mb-2">Mercedes: Innovation in Motion</h2>
            <p className="text-gray-700 mb-4">Mercedes-Benz leads the way in automotive technology and luxury. Dive into the AMG C63 and S Class to see how Mercedes blends power, prestige, and comfort.</p>
            <Link href="/showroom/blog/mercedes" className="px-5 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition text-center block">Read More</Link>
          </div>

          {/* Bus Blog */}
          <div className="bg-white rounded-xl shadow p-5 flex flex-col items-center">
            <div className="flex gap-3 mb-4">
              <Image src="/Bus/Toyota Coaster 2024.jpeg" alt="Toyota Coaster" width={120} height={80} className="rounded-lg object-cover" />
              <Image src="/Bus/Toyota hiace 2024.jpeg" alt="Toyota Hiace" width={120} height={80} className="rounded-lg object-cover" />
            </div>
            <h2 className="text-xl font-bold text-red-700 mb-2">Buses: Comfort and Capacity for Every Journey</h2>
            <p className="text-gray-700 mb-4">From the Toyota Coaster to the Hiace, discover how modern buses offer unmatched comfort, safety, and space for group travel and business needs.</p>
            <Link href="/showroom/blog/bus" className="px-5 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition text-center block">Read More</Link>
          </div>

          {/* Electric Blog */}
          <div className="bg-white rounded-xl shadow p-5 flex flex-col items-center">
            <div className="flex gap-3 mb-4">
              <Image src="/Electric/Toyota bZ 2025.jpeg" alt="Toyota bZ" width={120} height={80} className="rounded-lg object-cover" />
              <Image src="/Electric/Bmw I4 2025.jpeg" alt="BMW i4" width={120} height={80} className="rounded-lg object-cover" />
            </div>
            <h2 className="text-xl font-bold text-red-700 mb-2">Electric Vehicles: Driving the Future</h2>
            <p className="text-gray-700 mb-4">Electric vehicles are transforming the road ahead. Learn how the Toyota bZ and BMW i4 are leading the charge toward a cleaner, more efficient future.</p>
            <Link href="/showroom/blog/electric" className="px-5 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition text-center block">Read More</Link>
          </div>
        </div>
      </section>
    </>
  );
}
