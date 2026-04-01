"use client";
import Link from 'next/link';

export default function About() {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center px-4 py-10 md:py-16">
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
              With decades of experience and a commitment to excellence, we have established ourselves as the most trusted 
              name in luxury vehicle sales and service across the nation.
            </p>
            
            <p>
              At Iris Eagle, we understand that purchasing a vehicle is more than just a transaction—it&apos;s an investment 
              in your lifestyle, comfort, and status. That&apos;s why we offer an exclusive collection of the world&apos;s 
              finest automobiles, including premium brands like Toyota, Mercedes-Benz, BMW, Lexus, and cutting-edge electric vehicles.
            </p>
            
            <p>
              Our state-of-the-art showrooms across Nigeria showcase the latest models, from elegant sedans and powerful SUVs 
              to spacious luxury buses perfect for corporate and personal use. Each vehicle in our inventory is meticulously 
              inspected, certified, and backed by comprehensive warranty coverage to ensure your complete satisfaction.
            </p>
            
            <p>
              What sets Iris Eagle apart is our unwavering dedication to customer service. Our team of automotive experts 
              provides personalized consultation to help you find the perfect vehicle that matches your needs, preferences, 
              and budget. We offer flexible financing options, competitive pricing, and exclusive deals that make luxury 
              vehicle ownership more accessible than ever.
            </p>
            
            <p>
              Beyond sales, Iris Eagle is your partner for life. Our certified service centers employ factory-trained 
              technicians using genuine parts and advanced diagnostic equipment. From routine maintenance to complex repairs, 
              we ensure your vehicle performs at its peak for years to come.
            </p>
            
            <p className="font-semibold text-gray-900">
              Choose Iris Eagle and experience the pinnacle of luxury automotive excellence. Your dream car awaits.
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
