import Image from "next/image";
import ContactForm from "@/components/sections/contact/ContactForm";
import { IconInstagram, IconFacebook } from "@/components/ui/Icons";
import BreadcrumbSEO from "@/components/seo/BreadcrumbSEO";
import StructuredData from "@/components/seo/StructuredData";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { localBusinessSchema, faqSchema } from "@/lib/seo/schema";

export const metadata = buildPageMetadata({
  title: "Contact Us — Car Dealer Abuja & Lagos, Nigeria",
  description:
    "Contact Iriseagle — Nigeria's luxury car dealership. Call, WhatsApp, or visit our Abuja showroom for vehicle enquiries, test drives, financing, and after-sales support. Serving Lagos, Abuja, and Port Harcourt.",
  path: "/contact",
  image: "/Others/Contact.jpg",
  imageAlt: "Contact Iriseagle Car Dealership Nigeria",
  keywordsPage: "contact",
  keywords: [
    "contact Iriseagle Nigeria",
    "car dealer phone number Abuja",
    "book test drive Lagos",
    "Iriseagle WhatsApp",
    "car dealer location Abuja",
    "Area 2 Abuja car dealer",
  ],
});

// Contact page FAQ — drives rich snippets for "how to contact" searches
const CONTACT_FAQS = [
  {
    question: "What is Iriseagle's phone number?",
    answer:
      "You can reach Iriseagle at +234 816 657 6670. We are also available on WhatsApp at the same number for faster response.",
  },
  {
    question: "Where is the Iriseagle showroom located?",
    answer:
      "Our primary showroom is at Flat 2, Jibia Street, Area 2, Abuja, Nigeria. We are open Monday to Friday 8am–6pm and Saturday 9am–4pm.",
  },
  {
    question: "How quickly does Iriseagle respond to enquiries?",
    answer:
      "We typically respond to WhatsApp and phone calls within 30 minutes during business hours. Email enquiries are answered within 24 hours.",
  },
];

const BREADCRUMBS = [
  { name: "Home", url: "/" },
  { name: "Contact Us" },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-0 px-0 flex flex-col items-center justify-start">
      {/* Contact-page structured data — LocalBusiness + FAQ */}
      <StructuredData schema={[localBusinessSchema(), faqSchema(CONTACT_FAQS)]} />

      {/* Contact Hero Image */}
      <div className="w-full h-105 md:h-150 relative mb-8">
        <Image
          src="/Others/Contact.jpg"
          alt="Contact Iriseagle — Nigeria Luxury Car Dealership"
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

      {/* Breadcrumb */}
      <div className="w-full max-w-5xl px-4 mb-4">
        <BreadcrumbSEO items={BREADCRUMBS} />
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
            aria-label="Iriseagle on Instagram"
            className="p-3 bg-pink-600 hover:bg-pink-700 text-white rounded-full transition-colors"
          >
            <IconInstagram className="w-5 h-5" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61559248825684&_rdc=1&_rdr#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Iriseagle on Facebook"
            className="p-3 bg-blue-700 hover:bg-blue-800 text-white rounded-full transition-colors"
          >
            <IconFacebook className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Google Map */}
      <div className="w-full mt-10 overflow-hidden shadow-lg">
        <iframe
          title="Iriseagle Showroom Location — Area 2 Abuja Nigeria"
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
