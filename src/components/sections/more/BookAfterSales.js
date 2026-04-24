import Image from "next/image";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input, { Field, Textarea } from "@/components/ui/Input";
import { IconWhatsApp } from "@/components/ui/Icons";

const services = [
  {
    title: "Scheduled Maintenance",
    desc: "Keep your vehicle running smoothly with regular checkups, oil changes, and system inspections by certified technicians.",
    icon: "🛠️",
  },
  {
    title: "Genuine Parts Replacement",
    desc: "We use only manufacturer-approved parts for repairs and replacements, ensuring quality and reliability.",
    icon: "🔩",
  },
  {
    title: "Diagnostics & Repairs",
    desc: "Advanced diagnostics and expert repairs for any issue, big or small, to get you back on the road quickly.",
    icon: "🔧",
  },
  {
    title: "Customer Support",
    desc: "Our team is always ready to assist with questions, warranty claims, and personalized after sales care.",
    icon: "🤝",
  },
];

export default function BookAfterSales() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center py-12 px-4">
      <div className="absolute inset-0 z-0">
        <Image
          src="/Others/CustomerCare.jpg"
          alt="Customer Care Background"
          fill
          className="object-cover object-center w-full h-full opacity-80"
          priority
          quality={55}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full max-w-2xl mx-auto py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
          Book After Sales
        </h1>
        <p className="text-lg md:text-xl text-gray-100 mb-8 drop-shadow">
          At Iris Eagle, our commitment to you extends far beyond the showroom.
          Our After Sales Service ensures your vehicle receives the expert care
          it deserves—whether it&apos;s routine maintenance, repairs, or
          personalized support. Enjoy peace of mind with genuine parts,
          certified technicians, and a customer-first approach that keeps you
          confidently on the road. Book your after sales service today and
          experience the difference of true automotive excellence.
        </p>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-12 px-2">
        {services.map((service) => (
          <Card
            key={service.title}
            align="center"
            rounded="md"
            shadow="md"
            padding="md"
            variant="glass"
            className="hover:-translate-y-1 hover:shadow-2xl transition-transform min-h-55"
            title={service.title}
            titleClassName="text-red-700"
            description={service.desc}
            descriptionClassName="text-gray-700"
            media={<span className="text-4xl">{service.icon}</span>}
          />
        ))}
      </div>

      <div className="relative z-10 w-full flex flex-col items-center justify-center py-12 px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-red-700 mb-6 text-center">
          Book After Sales
        </h2>
        <form className="bg-white/95 rounded-xl shadow p-6 flex flex-col gap-4 w-full max-w-md mx-auto mb-8">
          <Field htmlFor="bas-name">
            <Input id="bas-name" type="text" placeholder="Full Name" required />
          </Field>
          <Field htmlFor="bas-email">
            <Input id="bas-email" type="email" placeholder="Email Address" required />
          </Field>
          <Field htmlFor="bas-phone">
            <Input id="bas-phone" type="tel" placeholder="Phone Number" required />
          </Field>
          <Field htmlFor="bas-model">
            <Input id="bas-model" type="text" placeholder="Vehicle Model" required />
          </Field>
          <Field htmlFor="bas-service">
            <Input id="bas-service" type="text" placeholder="Service Needed" required />
          </Field>
          <Field htmlFor="bas-details">
            <Textarea id="bas-details" rows={3} placeholder="Additional Details" />
          </Field>
          <Button type="submit" variant="danger" size="md" fullWidth>
            Book Service
          </Button>
        </form>

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto justify-center">
          <Button
            href="https://wa.me/2348166576670"
            external
            variant="whatsapp"
            size="lg"
            fullWidth
          >
            <IconWhatsApp className="w-5 h-5" />
            Talk to Us
          </Button>
          <Button href="/contact" variant="danger" size="lg" fullWidth>
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}
