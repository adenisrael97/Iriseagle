import { IconWhatsApp } from "@/components/ui/Icons";

export default function FloatingWhatsApp({ phone = "2348166576670" }) {
  return (
    <a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 bottom-6 right-6 md:bottom-8 md:right-8 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-xl flex items-center justify-center p-4 transition-colors"
      aria-label="Chat on WhatsApp"
    >
      <IconWhatsApp className="w-7 h-7" />
    </a>
  );
}
