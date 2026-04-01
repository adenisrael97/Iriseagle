"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const footerImages = [
  '/background/background10.jpg',
  '/background/background6.jpg',
  '/background/background7.jpg',
  '/background/background8.jpg',
  '/background/background9.jpg',
  '/background/background10.jpg',
];

export default function Footer() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === footerImages.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full mt-16">
      {/* Sliding Image Banner */}
      <div className="relative w-full h-80 xs:h-48 sm:h-56 md:h-96 lg:h-128 overflow-hidden">
        {footerImages.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${idx === current ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image
              src={img}
              alt={`Iris Eagle showcase ${idx + 1}`}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide">
              IRIS <span className="text-red-500">EAGLE</span>
            </h2>
            <p className="text-gray-200 text-xs xs:text-sm sm:text-base mt-2">Nigeria&apos;s Premier Luxury Car Dealership</p>
          </div>
        </div>
        {/* Slide dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {footerImages.map((_, idx) => (
            <span
              key={idx}
              className={`w-2 h-2 rounded-full transition-colors ${idx === current ? 'bg-red-500' : 'bg-white/50'}`}
            />
          ))}
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-gray-900 text-gray-300 pt-8 sm:pt-10 pb-6 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10 border-b border-gray-700 pb-6 sm:pb-8 md:pb-10">
          {/* Brand & Social */}
          <div className="flex flex-col gap-3 sm:gap-4 col-span-2 lg:col-span-1 items-center sm:items-start text-center sm:text-left">
            <div className="flex items-center gap-2 mb-1 sm:mb-2">
              <span className="text-xl sm:text-2xl font-bold text-red-500 tracking-widest">IRIS</span>
              <span className="text-base sm:text-lg font-semibold text-white">EAGLE</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 max-w-xs mb-2">
              Premium luxury vehicles, exceptional service, and unmatched trust. Your journey to excellence starts with Iris Eagle.
            </p>
            <div className="flex gap-2 sm:gap-3 mt-1 sm:mt-2 flex-wrap justify-center sm:justify-start">
              <a href="#" aria-label="Facebook" className="bg-gray-800 hover:bg-red-600 p-1.5 sm:p-2 rounded-full transition-colors"><FaFacebookF size={14} /></a>
              <a href="#" aria-label="Instagram" className="bg-gray-800 hover:bg-red-600 p-1.5 sm:p-2 rounded-full transition-colors"><FaInstagram size={14} /></a>
              <a href="#" aria-label="Twitter" className="bg-gray-800 hover:bg-red-600 p-1.5 sm:p-2 rounded-full transition-colors"><FaTwitter size={14} /></a>
              <a href="#" aria-label="LinkedIn" className="bg-gray-800 hover:bg-red-600 p-1.5 sm:p-2 rounded-full transition-colors"><FaLinkedinIn size={14} /></a>
              <a href="#" aria-label="YouTube" className="bg-gray-800 hover:bg-red-600 p-1.5 sm:p-2 rounded-full transition-colors"><FaYoutube size={14} /></a>
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col col-span-1">
            <h4 className="text-lg font-semibold text-white mb-3 relative">
              Services
              <span className="block w-8 h-0.5 bg-red-500 mt-1" />
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/Inventory" className="hover:text-red-400 transition">Car Sales</Link></li>
              <li><Link href="/service" className="hover:text-red-400 transition">Maintenance &amp; Repairs</Link></li>
              <li><Link href="/financing" className="hover:text-red-400 transition">Financing</Link></li>
              <li><Link href="/sell-trade" className="hover:text-red-400 transition">Sell / Trade-In</Link></li>
              <li><Link href="/service" className="hover:text-red-400 transition">Vehicle Detailing</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="flex flex-col col-span-1">
            <h4 className="text-lg font-semibold text-white mb-3 relative">
              Support
              <span className="block w-8 h-0.5 bg-red-500 mt-1" />
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/contact" className="hover:text-red-400 transition">Contact Us</Link></li>
              <li><a href="#" className="hover:text-red-400 transition">FAQs</a></li>
              <li><a href="#" className="hover:text-red-400 transition">Warranty</a></li>
              <li><a href="#" className="hover:text-red-400 transition">Customer Support</a></li>
              <li><a href="#" className="hover:text-red-400 transition">After-Sales Service</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col col-span-1">
            <h4 className="text-lg font-semibold text-white mb-3 relative">
              Company
              <span className="block w-8 h-0.5 bg-red-500 mt-1" />
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-red-400 transition">About Us</Link></li>
              <li><a href="#" className="hover:text-red-400 transition">Our Team</a></li>
              <li><a href="#" className="hover:text-red-400 transition">Careers</a></li>
              <li><a href="#" className="hover:text-red-400 transition">Testimonials</a></li>
              <li><a href="#" className="hover:text-red-400 transition">Blog</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col col-span-2 sm:col-span-2 lg:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-3 relative">
              Contact
              <span className="block w-8 h-0.5 bg-red-500 mt-1" />
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-red-500 mt-0.5 shrink-0" />
                <span>123 Main Street, Lagos, Nigeria</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="text-red-500 shrink-0" />
                <span>+234 800 123 4567</span>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-red-500 shrink-0" />
                <span>info@iriseagle.com</span>
              </li>
              <li className="flex items-center gap-2">
                <FaClock className="text-red-500 shrink-0" />
                <span>Mon - Sat: 8am - 6pm</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between pt-4 sm:pt-6 text-[10px] sm:text-xs text-gray-500 gap-2 sm:gap-0">
          <span className="text-center">&copy; {new Date().getFullYear()} Iris Eagle. All rights reserved.</span>
          <div className="flex flex-wrap gap-3 sm:gap-4 mt-1 sm:mt-0 justify-center">
            <a href="#" className="hover:text-red-400 transition">Privacy Policy</a>
            <a href="#" className="hover:text-red-400 transition">Terms of Service</a>
            <a href="#" className="hover:text-red-400 transition">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}