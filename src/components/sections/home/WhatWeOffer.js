import Image from "next/image";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  IconCar,
  IconTools,
  IconShield,
  IconMoney,
  IconTruck,
  IconHeadset,
} from "@/components/ui/Icons";

const services = [
  {
    icon: IconCar,
    title: "Premium Vehicle Sales",
    description:
      "Access an exclusive collection of luxury vehicles from world-renowned brands. Each car is carefully selected to meet the highest standards of quality and performance.",
  },
  {
    icon: IconTools,
    title: "Expert Maintenance & Repair",
    description:
      "Our certified technicians provide comprehensive maintenance and repair services using genuine parts and state-of-the-art equipment to keep your vehicle in perfect condition.",
  },
  {
    icon: IconShield,
    title: "Extended Warranty Coverage",
    description:
      "Drive with confidence knowing your investment is protected. We offer comprehensive warranty packages that cover major components and provide peace of mind.",
  },
  {
    icon: IconMoney,
    title: "Flexible Financing Options",
    description:
      "Make your dream car affordable with our flexible financing solutions. We work with leading financial institutions to offer competitive rates and personalized payment plans.",
  },
  {
    icon: IconTruck,
    title: "Nationwide Delivery",
    description:
      "Wherever you are in Nigeria, we deliver. Our professional logistics team ensures your vehicle arrives safely and on time, right to your doorstep.",
  },
  {
    icon: IconHeadset,
    title: "24/7 Customer Support",
    description:
      "Our dedicated support team is always available to assist you. From pre-purchase consultation to after-sales service, we're here for you every step of the way.",
  },
];

export default function WhatWeOffer() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/background/background3.jpg"
          alt="Background"
          fill
          className="object-cover"
          loading="lazy"
          quality={85}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 flex flex-col items-center px-4 py-10 md:py-16">
        <SectionHeading
          title="WHAT WE OFFER"
          eyebrow="Our Services"
          subtitle="At Iris Eagle, we go beyond just selling cars. We provide a complete automotive experience designed to exceed your expectations. From premium vehicle selection to lifetime support, our comprehensive services ensure you enjoy every moment of vehicle ownership."
          size="lg"
          tone="light"
          className="mb-10"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                variant="glass"
                rounded="lg"
                shadow="xl"
                padding="md"
                align="center"
                hover={false}
                className="hover:scale-105 transition-transform duration-300"
                title={service.title}
                titleClassName="text-gray-900"
                description={service.description}
                descriptionClassName="text-gray-700"
                media={
                  <div className="bg-red-600 rounded-full p-6">
                    <Icon className="text-white w-10 h-10 xs:w-12 xs:h-12" />
                  </div>
                }
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
