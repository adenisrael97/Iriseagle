"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhone, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import { MdDirectionsCar } from "react-icons/md";

/* ============================================================
   NAVIGATION LINKS
   ============================================================
   Edit this array to add/remove/modify navigation links.
   Each link has: name (display text) and href (URL path)
   ============================================================ */
const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Show Room",
    href: "/showroom",
    dropdown: [
      { name: "Latest Vehicles", href: "/showroom/latest-vehicles" },
      { name: "Our Vehicles", href: "/showroom/our-vehicles" },
      { name: "Blog", href: "/showroom/blog" },
    ],
  },
  { name: "Financing", href: "/financing" },
  { name: "Contact Us", href: "/contact" },
  {
    name: "More",
    href: "/more",
    dropdown: [
      { name: "Pre-Order", href: "/more/preorder" },
      { name: "Book After Sales", href: "/more/book-after-sales" },
      { name: "History Page", href: "/more/history" },
    ],
  },
];

/* ============================================================
   CONTACT INFO (shown in top bar)
   ============================================================ */
const contactInfo = {
  phone: "+234 800 123 4567",
  email: "info@iriseagle.com",
};

/* ============================================================
   MAIN NAVBAR COMPONENT
   ============================================================ */
export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect - navbar becomes solid on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu handler
  const closeMenu = () => setIsOpen(false);

  // Check if link is active
  const isActive = (path) => pathname === path;

  return (
    <>
      {/* ==================== TOP BAR (Desktop Only) ==================== */}
      <div className="hidden lg:block bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between text-sm">
          {/* Left: Contact Info */}
          <div className="flex items-center gap-6">
            <a
              href={`tel:${contactInfo.phone}`}
              className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors duration-200"
            >
              <FaPhone className="text-red-600 text-xs" />
              <span className="font-medium">{contactInfo.phone}</span>
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors duration-200"
            >
              <FaEnvelope className="text-red-600 text-xs" />
              <span className="font-medium">{contactInfo.email}</span>
            </a>
          </div>

          {/* Right: Working Hours */}
          <p className="text-gray-600 font-medium">
            Mon - Fri: 8:00 AM - 6:00 PM
          </p>
        </div>
      </div>

      {/* ==================== MAIN NAVBAR ==================== */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-md"
            : "bg-white/98 backdrop-blur-md"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* ===== LOGO ===== */}
            <Link href="/" className="flex items-center gap-3 group">
              {/* Logo Icon */}
              <div className="w-11 h-11 bg-linear-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center group-hover:from-red-700 group-hover:to-red-800 transition-all duration-300 shadow-sm group-hover:shadow-md">
                <MdDirectionsCar className="text-white text-2xl" />
              </div>
              {/* Logo Text */}
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900 leading-tight tracking-tight">
                  IRIS EAGLE
                </span>
                <span className="text-xs font-semibold text-red-600 leading-tight tracking-wider">
                  AUTOMOTIVE
                </span>
              </div>
            </Link>

            {/* ===== DESKTOP NAVIGATION ===== */}
            <ul className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, idx) => (
                <li key={link.href} className="relative group">
                  {link.dropdown ? (
                    <>
                      <button
                        className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-1.5 ${
                          isActive(link.href)
                            ? "text-red-600 bg-red-50"
                            : "text-gray-700 hover:text-red-600 hover:bg-gray-50"
                        }`}
                        tabIndex={0}
                      >
                        {link.name}
                        <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                      </button>
                      {/* Dropdown menu */}
                      <div className="absolute left-0 top-full mt-1 min-w-48 bg-white border border-gray-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2 z-50">
                        <ul className="py-2">
                          {link.dropdown.map((item) => (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-150"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 block ${
                        isActive(link.href)
                          ? "text-red-600 bg-red-50"
                          : "text-gray-700 hover:text-red-600 hover:bg-gray-50"
                      }`}
                    >
                      {link.name}
                      {/* Active Indicator */}
                      {isActive(link.href) && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute bottom-0 left-4 right-4 h-0.5 bg-red-600 rounded-full"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* ===== CTA BUTTON (Desktop) ===== */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/contact"
                className="px-6 py-2.5 bg-linear-to-r from-red-600 to-red-700 text-white text-sm font-semibold rounded-lg hover:from-red-700 hover:to-red-800 active:scale-95 transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Get Quote
              </Link>
            </div>

            {/* ===== MOBILE MENU BUTTON ===== */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <FaTimes className="text-xl" />
              ) : (
                <FaBars className="text-xl" />
              )}
            </button>
          </div>
        </nav>

        {/* ==================== MOBILE MENU ==================== */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="lg:hidden bg-white border-t border-gray-200 shadow-lg overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-6 py-6">
                {/* Mobile Links */}
                <ul className="flex flex-col gap-1">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                    >
                      {link.dropdown ? (
                        <details className="group">
                          <summary className="flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors cursor-pointer text-gray-700 hover:text-red-600 hover:bg-gray-50 list-none">
                            {link.name}
                            <svg className="w-4 h-4 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                          </summary>
                          <ul className="mt-2 ml-4 flex flex-col gap-1">
                            {link.dropdown.map((item) => (
                              <li key={item.href}>
                                <Link
                                  href={item.href}
                                  onClick={closeMenu}
                                  className="block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors text-gray-600 hover:text-red-600 hover:bg-red-50"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </details>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={closeMenu}
                          className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                            isActive(link.href)
                              ? "bg-red-50 text-red-600"
                              : "text-gray-700 hover:text-red-600 hover:bg-gray-50"
                          }`}
                        >
                          {link.name}
                        </Link>
                      )}
                    </motion.li>
                  ))}
                </ul>

                {/* Mobile CTA */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Link
                    href="/contact"
                    onClick={closeMenu}
                    className="block w-full py-3 bg-linear-to-r from-red-600 to-red-700 text-white text-base text-center font-semibold rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-200 shadow-sm active:scale-95"
                  >
                    Get Quote
                  </Link>
                </div>

                {/* Mobile Contact Info */}
                <div className="mt-6 pt-6 border-t border-gray-200 flex flex-col gap-3">
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="flex items-center gap-3 text-gray-600 hover:text-red-600 transition-colors duration-200 font-medium"
                  >
                    <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
                      <FaPhone className="text-red-600 text-sm" />
                    </div>
                    <span className="text-sm">{contactInfo.phone}</span>
                  </a>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center gap-3 text-gray-600 hover:text-red-600 transition-colors duration-200 font-medium"
                  >
                    <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
                      <FaEnvelope className="text-red-600 text-sm" />
                    </div>
                    <span className="text-sm">{contactInfo.email}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}