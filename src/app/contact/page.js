import Image from "next/image";
import ContactForm from "@/components/sections/contact/ContactForm";
import { IconInstagram, IconFacebook } from "@/components/ui/Icons";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Iriseagle. Call, email, or visit us to enquire about any vehicle, request a quote, book a test drive, or get after-sales support.",
  alternates: { canonical: "https://iriseagle.com/contact" },
  openGraph: {
    title: "Contact Iriseagle | Luxury Car Dealership Nigeria",
    description:
      "Reach out to Iriseagle for enquiries, test drives, financing, and after-sales support across Nigeria.",
    url: "https://iriseagle.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-0 px-0 flex flex-col items-center justify-start">
      {/* Contact Hero Image */}
      <div className="w-full h-105 md:h-150 relative mb-8">
        <Image
          src="/Others/Contact.jpg"
          alt="Contact Iriseagle"
          fill
          className="object-cover object-center w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 gap-3">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">Contact Us</h1>
          <p className="text-gray-200 text-base md:text-lg max-w-xl drop-shadow">
            We&apos;re here to help — reach out and we&apos;ll respond within 24 hours.
          </p>
        </div>
      </div>

      {/* Functional contact form (client component) */}
      <ContactForm />

      {/* Social Media Section */}
      <div className="w-full flex flex-col items-center justify-center mt-12 mb-4 gap-3">
        <p className="text-gray-700 text-lg font-semibold">Follow us</p>
        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/irisautomobile1?igsh=MTAwcHF0ZG5yNGUxeA=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="p-3 bg-pink-600 hover:bg-pink-700 text-white rounded-full transition-colors"
          >
            <IconInstagram className="w-5 h-5" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61559248825684&_rdc=1&_rdr#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="p-3 bg-blue-700 hover:bg-blue-800 text-white rounded-full transition-colors"
          >
            <IconFacebook className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="w-full mt-10 overflow-hidden shadow-lg">
        <iframe
          title="Iriseagle Location"
          src="https://www.google.com/maps?q=flat+2+jibia+street,+Area+2,+Abuja&output=embed"
          width="100%"
          height="800"
          style={{ border: 0, minHeight: "400px", width: "100%" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full border-0"
        />
      </div>
    </main>
  );
}
