
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://iriseagle.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Iriseagle | Nigeria's Premier Luxury Car Dealership",
    template: "%s | Iriseagle",
  },
  description:
    "Iriseagle is Nigeria's #1 luxury car dealership. Shop Toyota, Lexus, Mercedes-Benz, BMW & Electric vehicles. Flexible financing, nationwide delivery, and after-sales support.",
  keywords: [
    "luxury cars Nigeria",
    "car dealership Nigeria",
    "Toyota Nigeria",
    "Lexus Nigeria",
    "Mercedes Nigeria",
    "BMW Nigeria",
    "electric vehicles Nigeria",
    "Iriseagle",
    "buy car Lagos",
    "pre-order car Nigeria",
  ],
  authors: [{ name: "Iriseagle", url: siteUrl }],
  creator: "Iriseagle",
  publisher: "Iriseagle",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: siteUrl,
    siteName: "Iriseagle",
    title: "Iriseagle | Nigeria's Premier Luxury Car Dealership",
    description:
      "Shop Toyota, Lexus, Mercedes-Benz, BMW & Electric vehicles with flexible financing and nationwide delivery across Nigeria.",
    images: [
      {
        url: "/background/background2.jpg",
        width: 1200,
        height: 630,
        alt: "Iriseagle Luxury Car Dealership",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Iriseagle | Nigeria's Premier Luxury Car Dealership",
    description:
      "Shop Toyota, Lexus, Mercedes-Benz, BMW & Electric vehicles in Nigeria.",
    images: ["/background/background2.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoDealer",
  name: "Iriseagle",
  url: siteUrl,
  description:
    "Nigeria's premier luxury car dealership offering Toyota, Lexus, Mercedes-Benz, BMW and Electric vehicles.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "NG",
  },
  telephone: "+2348166576670",
  openingHours: "Mo-Sa 08:00-18:00",
  priceRange: "₦₦₦",
  sameAs: [],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
