import Link from "next/link";

export const metadata = {
  title: "404 — Page Not Found",
  description: "The page you're looking for doesn't exist. Return to Iriseagle and explore our luxury vehicle collection.",
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gray-950 flex flex-col items-center justify-center px-6 text-center">
      {/* Large 404 */}
      <div className="relative mb-6 select-none">
        <span className="text-[10rem] sm:text-[14rem] font-black text-gray-800 leading-none tracking-tight">
          404
        </span>
        <span className="absolute inset-0 flex items-center justify-center text-[10rem] sm:text-[14rem] font-black text-red-600/10 leading-none tracking-tight blur-sm">
          404
        </span>
      </div>

      {/* Brand */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl font-bold text-red-500 tracking-widest">IRISE</span>
        <span className="text-2xl font-semibold text-white">EAGLE</span>
      </div>

      <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3">
        Page Not Found
      </h1>
      <p className="text-gray-400 max-w-md mb-8 text-base leading-relaxed">
        The page you&apos;re looking for may have been moved, deleted, or never existed.
        Let&apos;s get you back on track.
      </p>

      {/* CTA buttons */}
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <Link
          href="/"
          className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors shadow-lg"
        >
          Back to Home
        </Link>
        <Link
          href="/showroom/our-vehicles"
          className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors"
        >
          Browse Vehicles
        </Link>
        <Link
          href="/contact"
          className="px-8 py-3 border border-gray-700 hover:border-red-500 text-gray-300 hover:text-white font-semibold rounded-lg transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </main>
  );
}
