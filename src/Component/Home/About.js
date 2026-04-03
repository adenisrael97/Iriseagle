"use client";
import Link from 'next/link';

export default function About() {
  return (
    <div className="bg-white flex items-center justify-center px-4 py-10 md:py-16">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Left Side - ABOUT US */}
        <div className="flex flex-col items-center lg:items-start lg:w-1/3">
          <div className="flex flex-col items-center lg:items-start">
            <hr className="w-20 border-t-4 border-red-600 mb-4" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-wide">
              ABOUT US
            </h1>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="flex-1 lg:w-2/3">
          <h1 className="text-2xl xs:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Best Car Dealer in Nigeria
          </h1>
          
          <div className="text-gray-700 space-y-4 text-sm xs:text-base md:text-lg leading-relaxed">
            <p>
              Welcome to <span className="font-semibold text-red-600">Iris Eagle</span>, Nigeria&apos;s premier luxury automotive dealership. 
              With years of experience and a commitment to excellence, we offer an exclusive collection of the world&apos;s finest automobiles.
            </p>
            
            <p>
              We provide personalized consultation, flexible financing, and exceptional after-sales service. Our state-of-the-art 
              showrooms showcase the latest luxury models from Toyota, Mercedes-Benz, BMW, Lexus, and electric vehicles—all 
              meticulously inspected and backed by comprehensive warranty coverage.
            </p>
            
            <p className="font-semibold text-gray-900">
              At Iris Eagle, we are your partner for luxury automotive excellence. Discover your dream car today.
            </p>
          </div>

          <Link href="/about" className="inline-block mt-8">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded-md text-base md:text-lg transition-colors shadow-lg">
              More about us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
