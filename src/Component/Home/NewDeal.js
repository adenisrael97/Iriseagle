"use client";
import Image from 'next/image';
import Link from 'next/link';

const deals = [
  // Toyota (3)
  { src: '/Toyota/Toyota Camry 2024.jpeg', name: 'Toyota Camry', year: 2024, transmission: 'Automatic' },
  { src: '/Toyota/Toyota Landcruiser 2023.jpeg', name: 'Toyota Landcruiser', year: 2023, transmission: 'Automatic' },
  { src: '/Toyota/Toyota Sienna 2024.jpg', name: 'Toyota Sienna', year: 2024, transmission: 'Automatic' },

  // Bus (3)
  { src: '/Bus/Toyota Coaster 2024.jpeg', name: 'Toyota Coaster', year: 2024, transmission: 'Automatic' },
  { src: '/Bus/Toyota hiace 2023.jpeg', name: 'Toyota Hiace', year: 2023, transmission: 'Automatic' },
  { src: '/Bus/Toyota hiace 2024.jpeg', name: 'Toyota Hiace', year: 2024, transmission: 'Automatic' },

  // Lexus (3)
  { src: '/Lexus/Lexus GX 2023.jpeg', name: 'Lexus GX', year: 2023, transmission: 'Automatic' },
  { src: '/Lexus/Lexus ES 2024.avif', name: 'Lexus ES', year: 2024, transmission: 'Automatic' },
  { src: '/Lexus/Lexus RX 2023.jpg', name: 'Lexus RX', year: 2023, transmission: 'Automatic' },
];

const dealContent =
  "Unlock unbeatable savings this week only! Enjoy a 5% discount on our top 2026 models. Whether you crave luxury, space, or adventure, these vehicles deliver style, comfort, and performance. Don't miss out—limited stock available!";

export default function NewDeal() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center px-2 xs:px-4 py-6 xs:py-8 md:py-10">
      <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 text-gray-900">Amazing Deal of the week</h1>
      <p className="text-center text-base xs:text-lg md:text-xl text-gray-700 mb-2">Get 5 % discount on any of this Vehicles</p>
      <p className="text-center text-sm xs:text-base md:text-lg text-gray-600 mb-6 max-w-2xl">{dealContent}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {deals.map((deal, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col transition-transform hover:scale-[1.02]">
            <Link href="/contact" className="relative w-full h-48 xs:h-56 sm:h-64 md:h-72 lg:h-80 block group focus:outline-none focus:ring-2 focus:ring-red-600">
              <Image
                src={deal.src}
                alt={deal.name}
                fill
                className="object-cover group-hover:opacity-90 transition-opacity duration-200"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={idx === 0}
              />
              <span className="sr-only">Contact us about {deal.name}</span>
            </Link>
            <div className="flex items-center justify-between bg-gray-100 px-3 xs:px-4 py-2 xs:py-3">
              <span className="text-gray-900 font-semibold text-base xs:text-lg lg:text-xl truncate">{deal.name}</span>
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-4 xs:px-5 py-1.5 xs:py-2 rounded-md text-xs xs:text-sm lg:text-base shadow transition-colors whitespace-nowrap">Call Us</button>
            </div>
            <hr className="border-gray-300 m-0 h-px" />
            <div className="flex flex-row items-center justify-between px-3 xs:px-4 py-2 gap-2">
              <span className="text-gray-700 text-sm xs:text-base lg:text-lg font-medium">{deal.year}</span>
              <span className="text-gray-500 text-xs xs:text-sm lg:text-base">{deal.transmission}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
