import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-0 px-0 flex flex-col items-center justify-start">
      {/* Contact Hero Image */}
      <div className="w-full h-105 md:h-150 relative mb-8">
        <Image
          src="/Others/Contact.jpg"
          alt="Contact Hero"
          fill
          className="object-cover object-center w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">Contact Us</h1>
        </div>
      </div>
      <div className="w-full max-w-2xl bg-white rounded-xl shadow p-8 mx-auto">
        <p className="text-gray-700 mb-8 text-center">
          Have questions or need assistance? Reach out to the Iris Eagle team and we’ll get back to you promptly.
        </p>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Full Name" className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400" required />
          <input type="email" placeholder="Email Address" className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400" required />
          <input type="tel" placeholder="Phone Number" className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400" required />
          <textarea placeholder="Your Message" className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400 min-h-24" required />
          <button type="submit" className="mt-2 bg-red-700 text-white font-semibold py-3 rounded-lg shadow hover:bg-red-800 transition-colors duration-200">Send Message</button>
        </form>
        <div className="mt-8 text-center text-gray-600">
          <p><strong>Email:</strong> info@iriseagle.com</p>
          <p><strong>Phone:</strong> +234 800 123 4567</p>
          <p><strong>Address:</strong> 123 Iris Eagle Avenue, Lagos, Nigeria</p>
        </div>
        {/* WhatsApp Contact */}
        <div className="mt-8 flex flex-col items-center justify-center">
          <a
            href="https://wa.me/2348054029416"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition-colors duration-200 text-lg mb-2"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A11.87 11.87 0 0012 0C5.37 0 0 5.37 0 12a11.9 11.9 0 001.64 6.06L0 24l6.18-1.62A11.87 11.87 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22a9.93 9.93 0 01-5.09-1.39l-.36-.21-3.67.96.98-3.58-.23-.37A9.94 9.94 0 1122 12c0 5.52-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3.01.15.2 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.56-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/></svg>
            Contact us directly on WhatsApp: <span className="underline">08054029416</span>
          </a>
        </div>
      </div>
      {/* Social Media Section */}
      <div className="w-full flex flex-col items-center justify-center mt-12 mb-4 gap-3">
        <div className="flex items-center gap-4">
          <a href="https://instagram.com/iriseagle" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 text-3xl" aria-label="Instagram">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 2.25a6.25 6.25 0 1 1 0 12.5 6.25 6.25 0 0 1 0-12.5zm0 1.5a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5zm6.25 1.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0z"/></svg>
          </a>
          <a href="https://facebook.com/iriseagle" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 text-3xl" aria-label="Facebook">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.325-.592 1.325-1.326V1.326C24 .592 23.405 0 22.675 0"/></svg>
          </a>
        </div>
        <span className="text-gray-700 text-lg font-semibold">Follow us on Instagram and Facebook</span>
      </div>
      {/* Google Map Section */}
      <div className="w-full flex-1 mt-10 rounded-xl overflow-hidden shadow-lg">
        <iframe
          title="Iris Eagle Location"
          src="https://www.google.com/maps?q=flat+2+jibia+street,+Area+2,+Abuja&output=embed"
          width="100%"
          height="800"
          style={{ border: 0, minHeight: '600px', width: '100%' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-150 sm:h-175 md:h-200 border-0"
        ></iframe>
      </div>
    </main>
  );
}
