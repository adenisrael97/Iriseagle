import Button from "@/components/ui/Button";

export const metadata = {
  title: "404 — Page Not Found",
  description:
    "The page you're looking for doesn't exist. Return to Iriseagle and explore our luxury vehicle collection.",
};

const actions = [
  { href: "/", label: "Back to Home", variant: "primary" },
  { href: "/showroom/our-vehicles", label: "Browse Vehicles", variant: "ghost", className: "bg-gray-800 hover:bg-gray-700 text-white" },
  { href: "/contact", label: "Contact Us", variant: "ghost", className: "border border-gray-700 hover:border-red-500 text-gray-300 hover:text-white" },
];

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gray-950 flex flex-col items-center justify-center px-6 text-center">
      <div className="relative mb-6 select-none">
        <span className="text-[10rem] sm:text-[14rem] font-black text-gray-800 leading-none tracking-tight">
          404
        </span>
        <span className="absolute inset-0 flex items-center justify-center text-[10rem] sm:text-[14rem] font-black text-red-600/10 leading-none tracking-tight blur-sm">
          404
        </span>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl font-bold text-red-500 tracking-widest">IRISE</span>
        <span className="text-2xl font-semibold text-white">EAGLE</span>
      </div>

      <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3">
        Page Not Found
      </h1>
      <p className="text-gray-400 max-w-md mb-8 text-base leading-relaxed">
        The page you&apos;re looking for may have been moved, deleted, or never
        existed. Let&apos;s get you back on track.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 items-center">
        {actions.map((action) => (
          <Button
            key={action.href}
            href={action.href}
            variant={action.variant}
            size="lg"
            className={action.className}
          >
            {action.label}
          </Button>
        ))}
      </div>
    </main>
  );
}
