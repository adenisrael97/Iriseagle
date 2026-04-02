"use client";

import Image from "next/image";

export default function OurMission() {
  return (
    <section className="w-full max-w-5xl mx-auto py-10 px-4 md:px-8 flex flex-col gap-10">
      {/* Mission Section removed as requested */}

      {/* Customer Service Section */}
      <div className="flex flex-col md:flex-row items-end gap-6 md:gap-16 mt-8 mb-12">
        {/* Customer Service Image */}
        <div className="flex items-end w-full justify-center md:justify-end md:w-92.5 mb-4 md:mb-0">
          <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/Others/CustomerCare.jpg"
              alt="Iris Eagle Customer Service"
              width={320}
              height={320}
              sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, 320px"
              quality={72}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        {/* Customer Service Content */}
        <div className="flex-1 rounded-xl p-2 sm:p-4 md:p-10 flex flex-col justify-end items-center md:items-start text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-extrabold text-red-700 mb-4">Customer Service</h1>
          <p className="text-gray-700 text-md md:text-lg leading-relaxed mb-2">
            At Iris Eagle, our customer care team is dedicated to making your experience seamless, personal, and memorable. We listen, respond promptly, and go the extra mile to ensure your needs are met—before, during, and after your purchase. Our friendly experts are always ready to assist, answer questions, and provide guidance, so you feel valued every step of the way.
          </p>
        </div>
      </div>

      {/* Warranty Section */}
      <div className="flex flex-col md:flex-row-reverse items-end gap-6 md:gap-16 mb-10">
        {/* Warranty Image */}
        <div className="flex items-end w-full justify-center md:justify-end md:w-92.5 mb-4 md:mb-0">
          <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/Others/Warranty.jpg"
              alt="Iris Eagle Warranty"
              width={320}
              height={320}
              className="object-cover w-full h-full"
              loading="eager"
            />
          </div>
        </div>
        {/* Warranty Content */}
        <div className="flex-1 rounded-xl p-2 sm:p-4 md:p-10 flex flex-col justify-end items-center md:items-start text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-extrabold text-gray-700 mb-4">Our Warranty</h1>
          <p className="text-gray-700 text-md md:text-lg leading-relaxed mb-2">
            Every vehicle from Iris Eagle comes with a comprehensive warranty, giving you peace of mind and confidence in your investment. We stand behind the quality of our cars and our commitment to your satisfaction. Our warranty covers essential components and services, ensuring you enjoy worry-free driving and support whenever you need it.
          </p>
        </div>
      </div>
      {/* Toyota Hilux 2026 Background Section */}
      <div className="relative w-full min-h-85 md:min-h-105 flex items-center justify-end mt-12 rounded-2xl overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
            <Image
              src="/Toyota/Toyota Hilux 2026.jpeg"
              alt="Toyota Hilux 2026 Background"
              fill
              className="object-cover object-center w-full h-full opacity-85"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/30 to-transparent" />
          </div>
          {/* Content Flexed to Right or Bottom */}
          <div className="relative z-10 w-full sm:w-3/4 md:w-2/3 flex flex-col items-center sm:items-end justify-center text-center sm:text-right p-4 sm:p-8 md:p-14">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 drop-shadow-lg">Ready to Experience Agape Autos?</h1>
            <p className="text-white text-base sm:text-lg md:text-xl mb-6 max-w-xl drop-shadow">
              Discover the future of driving with the all-new Toyota Hilux 2026. At Agape Autos, we bring you the latest models, unbeatable service, and a seamless buying experience. Step into our showroom or pre-order your dream vehicle today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto justify-center sm:justify-end">
              <a href="/showroom" className="px-8 py-3 bg-red-700 text-white rounded-md font-semibold shadow hover:bg-red-800 transition-colors duration-200 text-base sm:text-lg w-full sm:w-auto text-center">View Our Showroom</a>
              <a href="/preorder" className="px-8 py-3 bg-white text-red-700 rounded-md font-semibold shadow hover:bg-red-100 transition-colors duration-200 text-base sm:text-lg w-full sm:w-auto text-center">Pre-Order</a>
            </div>
          </div>
      </div>
    </section>
  );
}
