import Image from "next/image";

export default function BookAfterSales() {
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

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center py-12 px-4">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Others/CustomerCare.jpg"
          alt="Customer Care Background"
          fill
          className="object-cover object-center w-full h-full opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full max-w-2xl mx-auto py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">Book After Sales</h1>
        <p className="text-lg md:text-xl text-gray-100 mb-8 drop-shadow">
          At Iris Eagle, our commitment to you extends far beyond the showroom. Our After Sales Service ensures your vehicle receives the expert care it deserves—whether it’s routine maintenance, repairs, or personalized support. Enjoy peace of mind with genuine parts, certified technicians, and a customer-first approach that keeps you confidently on the road. Book your after sales service today and experience the difference of true automotive excellence.
        </p>
      </div>
      {/* After Sales Service Cards */}
      <div className="relative z-10 w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-12 px-2">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white/95 rounded-xl shadow-lg flex flex-col items-center text-center p-6 transition-transform hover:-translate-y-1 hover:shadow-2xl min-h-55"
          >
            <div className="text-4xl mb-3">{service.icon}</div>
            <h2 className="text-xl font-bold text-red-700 mb-2">{service.title}</h2>
            <p className="text-gray-700 text-base">{service.desc}</p>
          </div>
        ))}
      </div>
      {/* Book After Sales Form Section */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center py-12 px-4">
        <h1 className="text-3xl md:text-4xl font-extrabold text-red-700 mb-6 text-center">Book After Sales</h1>
        <form className="bg-white/95 rounded-xl shadow p-6 flex flex-col gap-4 w-full max-w-md mx-auto mb-8">
          <input type="text" placeholder="Full Name" className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400" required />
          <input type="email" placeholder="Email Address" className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400" required />
          <input type="tel" placeholder="Phone Number" className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400" required />
          <input type="text" placeholder="Vehicle Model" className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400" required />
          <input type="text" placeholder="Service Needed" className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400" required />
          <textarea placeholder="Additional Details" className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400 min-h-20" />
          <button type="submit" className="mt-2 bg-red-700 text-white font-semibold py-3 rounded-lg shadow hover:bg-red-800 transition-colors duration-200">Book Service</button>
        </form>
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto justify-center">
          <a
            href="https://wa.me/2348054029416"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition-colors duration-200 text-lg mb-2 sm:mb-0"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A11.87 11.87 0 0012 0C5.37 0 0 5.37 0 12a11.9 11.9 0 001.64 6.06L0 24l6.18-1.62A11.87 11.87 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22a9.93 9.93 0 01-5.09-1.39l-.36-.21-3.67.96.98-3.58-.23-.37A9.94 9.94 0 1122 12c0 5.52-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3.01.15.2 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.56-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/></svg>
            Talk to Us
          </a>
          <a
            href="/contact"
            className="flex-1 flex items-center justify-center px-6 py-3 bg-red-700 text-white font-semibold rounded-lg shadow hover:bg-red-800 transition-colors duration-200 text-lg"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
