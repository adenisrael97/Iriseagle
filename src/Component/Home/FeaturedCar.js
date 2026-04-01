import Image from 'next/image';
import Link from 'next/link';

const carCategories = [
  {
    name: 'Toyota',
    images: [
      '/Toyota/Toyota Camry 2023.jpeg',
      '/Toyota/Toyota Sienna 2024.jpg',
    ],
  },
  {
    name: 'Mercedes',
    images: [
      '/Mercedes/Mercedes AMG C63 2024.webp',
      '/Mercedes/Mercedes G wagon 2024.avif',
    ],
  },
  {
    name: 'Lexus',
    images: [
      '/Lexus/Lexus ES 2024.avif',
      '/Lexus/Lexus RX 2023.jpg',
    ],
  },
  {
    name: 'Electric',
    images: [
      '/Electric/Bmw I4 2025.jpeg',
      '/Electric/Toyota bZ 2025.jpeg',
    ],
  },
  {
    name: 'Bus',
    images: [
      '/Bus/Toyota Coaster 2023.jpeg',
      '/Bus/Toyota Hiace 2024.webp',
    ],
  },
  {
    name: 'Bmw',
    images: [
      '/Bmw/Bmw 7 series 2024.png',
      '/Bmw/Bmw X6 2024.jpeg',
    ],
  },
];

export default function FeaturedCar() {
  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-2 text-gray-900">Luxury Car Dealers in Nigeria</h1>
      <p className="text-center text-lg md:text-xl text-gray-600 mb-8">Experience Full Range Of Luxury On Wheels</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {carCategories.map((category) =>
          category.images.map((img, idx) => {
            // Extract car name from image path
            const carName = img.split('/').pop().replace(/\.[^.]+$/, '').replace(/\d+$/, '').replace(/([a-z])([A-Z])/g, '$1 $2').replace(/_/g, ' ').replace(/-/g, ' ').replace(/\s+/g, ' ').trim();
            return (
              <div
                key={`${category.name}-${idx}`}
                className="bg-white rounded-xl shadow-md flex flex-col items-center p-4 hover:shadow-lg transition-shadow duration-200"
              >
                <Link href="/contact" className="w-full h-48 relative mb-4 block group focus:outline-none focus:ring-2 focus:ring-red-600">
                  <Image
                    src={img}
                    alt={carName || category.name}
                    fill
                    className="object-cover rounded-lg group-hover:opacity-90 transition-opacity duration-200"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={idx === 0 && category.name === 'Toyota'}
                  />
                  <span className="sr-only">Contact us about {carName || category.name}</span>
                </Link>
                <div className="text-center w-full">
                  <div className="font-semibold text-lg text-gray-800 mb-2 capitalize">{carName || category.name}</div>
                  <div className="flex justify-center gap-3 mb-2">
                    <a href="/contact" className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded-full text-sm font-medium transition-colors block text-center">Request Quote</a>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
