"use client";

import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="w-full max-w-6xl mx-auto py-14 px-4 md:px-10 flex flex-col gap-16">
      
      {/* About Us & CEO */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
        
        {/* CEO Image & Name */}
        <div className="flex flex-col items-center w-full md:w-1/3">
          <div className="w-72 h-72 md:w-80 md:h-80 overflow-hidden shadow-xl mb-4 rounded-xl">
            <Image
              src="/Ceo/CEO.jpg"
              alt="Mr Jeremiah Oluwaseun, CEO of Iris Eagle"
              width={300}
              height={300}
              className="object-cover w-full h-full"
              priority
            />
          </div>
          <span className="block text-xl md:text-2xl font-bold text-red-700 mt-2">
            Mr Jeremiah Oluwaseun
          </span>
          <span className="block text-gray-500 text-base md:text-lg">
            Chief Executive Officer
          </span>
        </div>

        {/* Expanded About Content */}
        <div className="flex-1 bg-white/95 rounded-xl shadow p-8 md:p-12 border-t-4 border-red-700 flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-red-700 mb-6">
            About Us
          </h1>

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4">
            <span className="font-semibold text-red-700">Iris Eagle</span> is where your dream car journey truly begins. We are more than just an auto sales company—we are a brand built on excellence, trust, and a deep understanding of what our customers truly want. From luxury vehicles to reliable everyday cars, we carefully curate every option to ensure it meets the highest standards of quality and performance.
          </p>

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4">
            Our goal is to remove the stress and uncertainty that often comes with buying a car. We achieve this by offering a transparent process, honest pricing, and expert guidance at every step. Whether you are buying your first car or upgrading to something more premium, we make the experience smooth, enjoyable, and rewarding.
          </p>

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4">
            At Iris Eagle, innovation is at the heart of everything we do. We leverage modern technology to simplify car selection, streamline bookings, and enhance customer interaction. This allows you to browse, compare, and make informed decisions with ease—right from the comfort of your home.
          </p>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Join a growing community of satisfied customers who value integrity, premium service, and attention to detail. At Iris Eagle, every interaction is designed around you—because you deserve not just a car, but an exceptional experience that matches your lifestyle and ambition.
          </p>
        </div>
      </div>

      {/* Button */}
      <div className="my-8 flex justify-center">
        <button className="px-10 py-4 bg-red-700 text-white rounded-full font-semibold shadow-lg hover:bg-red-800 transition-colors duration-200 text-lg">
          Learn More
        </button>
      </div>

      {/* Mission & Cofounder */}
      <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-10 md:gap-16">
        
        {/* Cofounder Image */}
        <div className="flex flex-col items-center w-full md:w-1/3">
          <div className="w-72 h-72 md:w-80 md:h-80 rounded-xl overflow-hidden border-4 border-gray-300 shadow-xl mb-4">
            <Image
              src="/Ceo/Cofounder.jpg"
              alt="Cofounder of Iris Eagle"
              width={300}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
          <span className="block text-xl md:text-2xl font-bold text-gray-700 mt-2">
            Mrs Adeniran Adebola 
          </span>
          <span className="block text-gray-500 text-base md:text-lg">
            Co-Founder
          </span>
        </div>

        {/* Mission Content */}
        <div className="flex-1 bg-white/95 rounded-xl shadow p-8 md:p-12 border-t-4 border-gray-300 flex flex-col justify-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-700 mb-6">
            Our Mission
          </h1>

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4">
            At Iris Eagle, our mission is to redefine luxury car ownership by making it more accessible, transparent, and rewarding for everyone. We aim to eliminate barriers and create opportunities for individuals and businesses to own vehicles that match their goals and lifestyle.
          </p>

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4">
            We are committed to delivering a seamless experience—from the moment you discover a car to long after you’ve driven it. Our team works tirelessly to ensure every customer receives personalized attention, expert advice, and unmatched service.
          </p>

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4">
            Beyond sales, we focus on building lasting relationships. We believe that trust is earned through consistency, honesty, and delivering on our promises. That’s why we prioritize customer satisfaction above everything else.
          </p>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Every day, we strive to raise the standard in the automotive industry by combining innovation, professionalism, and passion. Our mission is simple: to give you confidence, comfort, and pride in every drive.
          </p>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="mt-16">
        <h1 className="text-3xl md:text-5xl font-extrabold text-red-700 mb-4 text-center">Our Values</h1>
        <p className="text-gray-700 text-md md:text-lg mb-8 text-center max-w-2xl mx-auto">
          At Iris Eagle, our values guide every decision and interaction. We believe in building trust, delivering excellence, and always putting our customers first.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Value Card 1 */}
          <div className="flex flex-col items-center bg-white rounded-xl p-6 shadow hover:shadow-lg transition-shadow duration-200">
            <span className="text-4xl text-red-700 mb-3">🤝</span>
            <h2 className="text-lg font-bold text-red-700 mb-2">Integrity</h2>
            <p className="text-gray-600 text-center text-sm">We are honest, transparent, and ethical in all our dealings—earning your trust every step of the way.</p>
          </div>
          {/* Value Card 2 */}
          <div className="flex flex-col items-center bg-white rounded-xl p-6 shadow hover:shadow-lg transition-shadow duration-200">
            <span className="text-4xl text-red-700 mb-3">🌟</span>
            <h2 className="text-lg font-bold text-red-700 mb-2">Excellence</h2>
            <p className="text-gray-600 text-center text-sm">We strive for the highest standards in service, selection, and customer care—delivering only the best.</p>
          </div>
          {/* Value Card 3 */}
          <div className="flex flex-col items-center bg-white rounded-xl p-6 shadow hover:shadow-lg transition-shadow duration-200">
            <span className="text-4xl text-red-700 mb-3">👥</span>
            <h2 className="text-lg font-bold text-red-700 mb-2">Customer Focus</h2>
            <p className="text-gray-600 text-center text-sm">Your needs come first. We listen, adapt, and personalize every experience to ensure your satisfaction.</p>
          </div>
          {/* Value Card 4 */}
          <div className="flex flex-col items-center bg-white rounded-xl p-6 shadow hover:shadow-lg transition-shadow duration-200">
            <span className="text-4xl text-red-700 mb-3">🚗</span>
            <h2 className="text-lg font-bold text-red-700 mb-2">Passion</h2>
            <p className="text-gray-600 text-center text-sm">We love what we do and it shows—in our service, our selection, and our commitment to your journey.</p>
          </div>
        </div>
      </div>
    </section>
  );
}