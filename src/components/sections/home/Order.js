import Image from "next/image";
import Button from "@/components/ui/Button";
import { IconSearch, IconCar } from "@/components/ui/Icons";

const panels = [
  {
    variant: "light",
    icon: IconSearch,
    title: "Can't find Your Dream Car?",
    description:
      "Looking for something special? We understand that finding the perfect vehicle can be challenging. Let us help you discover your dream car! Our expert team will search our extensive network to find exactly what you're looking for—whether it's a specific model, year, or unique features.",
    ctaLabel: "Make a Request",
    ctaHref: "/contact",
    ctaVariant: "primary",
  },
  {
    variant: "tinted",
    icon: IconCar,
    title: "Pre-order a Car",
    description:
      "Be the first to own the latest luxury vehicles! Secure your spot today and get exclusive access to upcoming 2026 models before they hit the showroom. Enjoy priority delivery, special financing options, and personalized configuration for your dream vehicle.",
    ctaLabel: "Pre-order Now",
    ctaHref: "/more/preorder",
    ctaVariant: "secondary",
  },
];

const panelStyles = {
  light: "bg-white text-gray-900",
  tinted: "bg-red-500/80 backdrop-blur-sm text-white",
};

const iconStyles = {
  light: "text-red-600",
  tinted: "text-white",
};

const descriptionStyles = {
  light: "text-gray-600",
  tinted: "text-white",
};

export default function Order() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/background/background16.jpg"
          alt="Background"
          fill
          className="object-cover"
          loading="eager"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-6 w-full max-w-6xl">
          {panels.map((panel) => {
            const Icon = panel.icon;
            return (
              <article
                key={panel.title}
                className={`flex-1 rounded-2xl shadow-2xl p-6 xs:p-8 md:p-10 flex flex-col items-center text-center ${panelStyles[panel.variant]}`}
              >
                <h2 className="text-2xl xs:text-3xl md:text-4xl font-bold mb-6">
                  {panel.title}
                </h2>
                <div className="mb-6">
                  <Icon className={`w-16 h-16 xs:w-20 xs:h-20 md:w-24 md:h-24 ${iconStyles[panel.variant]}`} />
                </div>
                <p className={`text-sm xs:text-base md:text-lg mb-6 max-w-md ${descriptionStyles[panel.variant]}`}>
                  {panel.description}
                </p>
                <Button href={panel.ctaHref} variant={panel.ctaVariant} size="lg">
                  {panel.ctaLabel}
                </Button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
