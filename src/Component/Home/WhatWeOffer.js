"use client";
import Image from 'next/image';
import { FaCar, FaTools, FaShieldAlt, FaMoneyBillWave, FaShippingFast, FaHeadset } from 'react-icons/fa';

const services = [
  {
    icon: FaCar,
    title: 'Premium Vehicle Sales',
    description: 'Access an exclusive collection of luxury vehicles from world-renowned brands. Each car is carefully selected to meet the highest standards of quality and performance.',
  },
  {
    icon: FaTools,
    title: 'Expert Maintenance & Repair',
    description: 'Our certified technicians provide comprehensive maintenance and repair services using genuine parts and state-of-the-art equipment to keep your vehicle in perfect condition.',
  },
  {
    icon: FaShieldAlt,
    title: 'Extended Warranty Coverage',
    description: 'Drive with confidence knowing your investment is protected. We offer comprehensive warranty packages that cover major components and provide peace of mind.',
  },
  {
    icon: FaMoneyBillWave,
    title: 'Flexible Financing Options',
    description: 'Make your dream car affordable with our flexible financing solutions. We work with leading financial institutions to offer competitive rates and personalized payment plans.',
  },
  {
    icon: FaShippingFast,
    title: 'Nationwide Delivery',
    description: 'Wherever you are in Nigeria, we deliver. Our professional logistics team ensures your vehicle arrives safely and on time, right to your doorstep.',
  },
  {
    icon: FaHeadset,
    title: '24/7 Customer Support',
    description: 'Our dedicated support team is always available to assist you. From pre-purchase consultation to after-sales service, we&apos;re here for you every step of the way.',
  },
];

export default function WhatWeOffer() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background/background3.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
          quality={60}
          placeholder="blur"
          blurDataURL="/background/background3-blur.jpg"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-4 py-10 md:py-16">
        <h1 className="text-3xl xs:text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          WHAT WE OFFER
        </h1>
        <p className="text-xl xs:text-2xl md:text-3xl text-red-500 font-semibold mb-4 text-center">
          Our Services
        </p>
        <p className="text-white text-sm xs:text-base md:text-lg mb-10 max-w-3xl text-center leading-relaxed">
          At Iris Eagle, we go beyond just selling cars. We provide a complete automotive experience designed 
          to exceed your expectations. From premium vehicle selection to lifetime support, our comprehensive 
          services ensure you enjoy every moment of vehicle ownership.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-red-600 rounded-full p-6 mb-4">
                <service.icon className="text-white w-10 h-10 xs:w-12 xs:h-12" />
              </div>
              <h1 className="text-xl xs:text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h1>
              <p className="text-gray-700 text-sm xs:text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
