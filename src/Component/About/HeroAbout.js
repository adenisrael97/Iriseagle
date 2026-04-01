"use client";

import Image from "next/image";

const services = [
  "Luxury Car Sales",
  "Certified Pre-Owned Vehicles",
  "Financing & Leasing",
  "Trade-In Services",
  "After-Sales Support",
  "Personalized Consultation",
  "Worldwide Delivery"
];

export default function HeroAbout() {
  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center py-8 px-2 md:px-8">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Background/background9.jpg"
          alt="Iris Eagle Background"
          fill
          className="object-cover object-center w-full h-full opacity-80"
          priority
        />
        <div className="absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row gap-8 md:gap-16 items-center md:items-stretch">
        {/* Vertical List */}
        <div className="w-full md:w-1/3 flex flex-row md:flex-col items-center md:items-start justify-center md:justify-start gap-4 md:gap-6 bg-white/90 rounded-xl shadow-lg p-4 md:p-6 backdrop-blur-sm">
          <ul className="w-full">
            {services.map((service, idx) => (
              <li
                key={service}
                className="text-red-700 font-semibold text-base md:text-lg py-2 px-3 mb-2 rounded-lg hover:bg-red-50 transition-colors duration-150 flex items-center gap-2"
              >
                <span className="inline-block w-2 h-2 bg-red-700 rounded-full mr-2" />
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-2/3 flex flex-col justify-center items-start bg-white/95 rounded-xl shadow-lg p-6 md:p-10 backdrop-blur-sm">
          <h2 className="text-2xl md:text-4xl font-bold text-red-700 mb-4">Why Iris Eagle?</h2>
          <p className="text-md md:text-lg text-gray-700 mb-4">
            <span className="font-semibold text-red-700">Iris Eagle</span> stands as the benchmark for luxury automotive excellence. Our curated collection, expert team, and unwavering commitment to customer satisfaction set us apart as the best in the industry.
          </p>
          <p className="text-sm md:text-base text-gray-600 mb-4">
            From the moment you connect with us, you experience a seamless journey—whether you’re acquiring your dream car, trading in, or seeking expert advice. We blend trust, transparency, and passion to deliver a truly elevated car buying experience.
          </p>
          <a
            href="/contact"
            className="inline-block mt-2 px-8 py-3 bg-red-700 text-white rounded-full font-semibold shadow hover:bg-red-800 transition-colors duration-200"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
