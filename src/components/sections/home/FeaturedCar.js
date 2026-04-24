import VehicleCard from "@/components/ui/VehicleCard";
import SectionHeading from "@/components/ui/SectionHeading";

const carCategories = [
  {
    name: "Toyota",
    images: ["/Toyota/Toyota Camry 2023.jpeg", "/Toyota/Toyota Sienna 2024.jpg"],
  },
  {
    name: "Mercedes",
    images: ["/Mercedes/Mercedes AMG C63 2024.webp", "/Mercedes/Mercedes G wagon 2024.avif"],
  },
  {
    name: "Lexus",
    images: ["/Lexus/Lexus ES 2024.avif", "/Lexus/Lexus RX 2023.jpg"],
  },
  {
    name: "Electric",
    images: ["/Electric/Bmw I4 2025.jpeg", "/Electric/Toyota bZ 2025.jpeg"],
  },
  {
    name: "Bus",
    images: ["/Bus/Toyota Coaster 2023.jpeg", "/Bus/Toyota Hiace 2025.jpeg"],
  },
  {
    name: "Bmw",
    images: ["/Bmw/Bmw 7 series 2024.png", "/Bmw/Bmw X6 2024.jpeg"],
  },
];

const prettifyName = (img) =>
  img
    .split("/")
    .pop()
    .replace(/\.[^.]+$/, "")
    .replace(/\d+$/, "")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[_-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

export default function FeaturedCar() {
  return (
    <section className="px-4 py-8 max-w-7xl mx-auto">
      <SectionHeading
        title="Luxury Car Dealers in Nigeria"
        subtitle="Experience Full Range Of Luxury On Wheels"
        className="mb-8"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {carCategories.flatMap((category) =>
          category.images.map((img, idx) => {
            const name = prettifyName(img) || category.name;
            return (
              <VehicleCard
                key={`${category.name}-${idx}`}
                src={img}
                name={name}
                priority={idx === 0 && category.name === "Toyota"}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            );
          })
        )}
      </div>
    </section>
  );
}
