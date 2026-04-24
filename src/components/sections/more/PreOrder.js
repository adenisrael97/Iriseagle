"use client";

import Image from "next/image";
import PageHero from "@/components/layout/PageHero";
import Button from "@/components/ui/Button";
import Input, { Field, Textarea } from "@/components/ui/Input";

const featuredVehicles = [
  { brand: "Toyota",   src: "/Toyota/Toyota Hilux 2026.jpeg",        caption: "Toyota Hilux 2026" },
  { brand: "Electric", src: "/Electric/Toyota bZ 2026.avif",         caption: "Toyota bZ 2026" },
  { brand: "Lexus",    src: "/Lexus/Lexus GX 2026.jpeg",             caption: "Lexus GX 2026" },
  { brand: "Mercedes", src: "/Mercedes/Mercedes S Class 2026.webp",  caption: "Mercedes S Class 2026" },
  { brand: "Bus",      src: "/Bus/Toyota Coaster 2026.webp",         caption: "Toyota Coaster 2026" },
  { brand: "BMW",      src: "/Bmw/Bmw 7 series 2026.jpg",            caption: "Bmw 7 series 2026" },
];

function PreOrderActions() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
      <Button href="/contact" variant="danger" size="lg">
        Contact Us
      </Button>
      <Button href="/showroom" variant="secondary" size="lg">
        Show Room
      </Button>
    </div>
  );
}

function VehicleTile({ vehicle }) {
  return (
    <div className="flex flex-col items-center bg-white/90 rounded-xl p-4 shadow hover:shadow-lg transition-shadow duration-200">
      <Image
        src={vehicle.src}
        alt={vehicle.brand}
        width={220}
        height={120}
        className="rounded-lg object-cover mb-2 w-full h-32 sm:h-36 md:h-40"
      />
      <span className="font-semibold text-gray-800 text-lg">{vehicle.brand}</span>
      <span className="text-xs text-gray-500 mt-1">{vehicle.caption}</span>
    </div>
  );
}

export default function PreOrder() {
  return (
    <>
      <PageHero
        image="/background/background16.jpg"
        imageAlt="Pre-Order"
        title="Pre Order"
        subtitle="Secure your next luxury vehicle before it arrives! With Iris Eagle's Pre-Order service, you get priority access to the latest models, exclusive offers, and a seamless reservation process. Don't miss your chance to drive the car of your dreams—reserve it today and experience the Iris Eagle difference."
        height="md"
        overlay="gradient"
        className="mb-16"
      >
        <div className="mt-6">
          <PreOrderActions />
        </div>
      </PageHero>

      <section className="w-full flex flex-col items-center justify-center px-4 mb-16">
        <form className="bg-white/95 rounded-xl shadow p-6 flex flex-col gap-4 w-full max-w-md mx-auto mb-12">
          <Field htmlFor="po-name">
            <Input id="po-name" type="text" placeholder="Full Name" required />
          </Field>
          <Field htmlFor="po-email">
            <Input id="po-email" type="email" placeholder="Email Address" required />
          </Field>
          <Field htmlFor="po-phone">
            <Input id="po-phone" type="tel" placeholder="Phone Number" required />
          </Field>
          <Field htmlFor="po-brand">
            <Input id="po-brand" type="text" placeholder="Brand" required />
          </Field>
          <Field htmlFor="po-year">
            <Input id="po-year" type="number" placeholder="Year" required />
          </Field>
          <Field htmlFor="po-message">
            <Textarea id="po-message" rows={3} placeholder="Message" />
          </Field>
          <Button type="submit" variant="danger" size="md" fullWidth>
            Submit Pre-Order
          </Button>
        </form>

        <h2 className="text-3xl md:text-4xl font-extrabold text-red-700 mb-3 mt-8 text-center">
          Our Latest Vehicles
        </h2>
        <p className="text-gray-700 text-md md:text-lg mb-8 max-w-xl mx-auto text-center">
          Explore the newest arrivals at Iris Eagle—featuring the latest in
          luxury, technology, and performance. Find your perfect match among
          our top brands and models.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl mx-auto">
          {featuredVehicles.map((vehicle) => (
            <VehicleTile key={vehicle.caption} vehicle={vehicle} />
          ))}
        </div>

        <div className="mt-15 mb-10">
          <PreOrderActions />
        </div>
      </section>
    </>
  );
}
