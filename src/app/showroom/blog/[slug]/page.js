import Image from "next/image";
import Button from "@/components/ui/Button";

const blogData = {
  toyota: {
    title: "Toyota: The Future of Reliable Mobility",
    images: [
      "/Toyota/Toyota Camry 2024.jpeg",
      "/Toyota/Toyota Highlander 2024.jpeg"
    ],
    content: `Toyota has long been synonymous with reliability, innovation, and value. In today's rapidly evolving automotive landscape, Toyota continues to lead the way with cutting-edge technology, hybrid advancements, and a commitment to sustainability.\n\nFrom the ever-popular Camry to the versatile Highlander, Toyota vehicles are engineered for longevity and peace of mind. Their hybrid lineup is expanding, offering drivers more eco-friendly options without sacrificing performance.\n\nWhether you're seeking a family sedan, a rugged SUV, or a fuel-efficient hybrid, Toyota's 2024 lineup delivers. Experience the future of mobility—where reliability meets innovation, and every journey is a pleasure.\n\nToyota's global reputation is built on decades of engineering excellence. The brand's focus on safety, comfort, and advanced driver-assist features ensures that every Toyota is ready for the demands of modern life. The Camry, with its refined ride and efficient powertrains, remains a favorite among families and commuters alike. The Highlander, meanwhile, offers versatility and space for growing families and adventure seekers.\n\nIn addition to traditional gasoline models, Toyota's hybrid and plug-in hybrid vehicles are setting new standards for efficiency and environmental responsibility. The company's investment in hydrogen fuel cell technology and electric vehicles signals a bold vision for the future.\n\nToyota's customer service and ownership experience are second to none, with a vast network of dealerships and service centers worldwide. Join the Toyota family and experience the difference for yourself.\n\n**Key Highlights:**\n- Industry-leading hybrid technology\n- Award-winning safety features\n- Exceptional resale value\n- Comfort and connectivity for modern drivers\n- Expanding lineup of electrified vehicles\n- Commitment to sustainability and innovation\n\nDiscover why millions trust Toyota for their daily drive and future adventures. Whether you're navigating city streets or exploring the open road, Toyota delivers peace of mind and driving enjoyment at every turn.`,
  },
  lexus: {
    title: "Lexus: Redefining Luxury and Comfort",
    images: [
      "/Lexus/Lexus ES 2025.jpg",
      "/Lexus/Lexus GX 2024.jpeg"
    ],
    content: `Lexus stands at the pinnacle of luxury, blending sophisticated design with exhilarating performance. The ES and GX models exemplify Lexus's dedication to craftsmanship, comfort, and advanced technology.\n\nStep inside a Lexus and experience a sanctuary of quiet refinement, intuitive controls, and premium materials. The brand's commitment to innovation is evident in its hybrid offerings and driver-assist features.\n\nWhether you crave the smooth ride of a sedan or the versatility of an SUV, Lexus delivers a driving experience that is both inspiring and relaxing.\n\nLexus vehicles are renowned for their attention to detail, from the hand-stitched leather seats to the precision-tuned suspension systems. The ES sedan offers a perfect balance of comfort and agility, while the GX SUV provides rugged capability without sacrificing luxury.\n\nThe Lexus ownership experience is enhanced by world-class customer service and a reputation for reliability. Advanced infotainment systems, premium sound, and cutting-edge safety features make every journey enjoyable and secure.\n\n**Key Highlights:**\n- Handcrafted interiors\n- Advanced hybrid powertrains\n- Leading-edge safety systems\n- Legendary reliability\n- Award-winning customer satisfaction\n- Seamless connectivity and entertainment\n\nElevate your journey with Lexus—where every detail is designed for your delight. Discover the art of luxury driving and see why Lexus is the choice of discerning drivers worldwide.`,
  },
  mercedes: {
    title: "Mercedes: Innovation in Motion",
    images: [
      "/Mercedes/Mercedes AMG C63 2025.webp",
      "/Mercedes/Mercedes S Class 2025.jpg"
    ],
    content: `Mercedes-Benz is a symbol of prestige, performance, and technological leadership. The AMG C63 and S Class showcase the brand's relentless pursuit of excellence, from powerful engines to luxurious cabins.\n\nMercedes is at the forefront of automotive innovation, introducing features like MBUX infotainment, advanced driver assistance, and electrified powertrains.\n\nDriving a Mercedes is more than transportation—it's an experience of comfort, control, and confidence.\n\nThe S Class is the flagship of the Mercedes lineup, offering unparalleled luxury, advanced technology, and a smooth, quiet ride. The AMG C63, on the other hand, delivers thrilling performance and dynamic handling for enthusiasts who demand the best.\n\nMercedes-Benz is committed to sustainability, with a growing range of plug-in hybrid and electric vehicles. The brand's dedication to safety, comfort, and innovation ensures that every Mercedes is a masterpiece of engineering.\n\n**Key Highlights:**\n- AMG performance engineering\n- Opulent interior design\n- Intelligent safety and connectivity\n- Electrification for the future\n- MBUX voice assistant and infotainment\n- Iconic design and craftsmanship\n\nDiscover the world of Mercedes, where every drive is a statement. Experience the legacy of a brand that has shaped the automotive industry for over a century, and see why Mercedes-Benz remains the benchmark for luxury and innovation.`,
  },
  bus: {
    title: "Buses: Comfort and Capacity for Every Journey",
    images: [
      "/Bus/Toyota Coaster 2024.jpeg",
      "/Bus/Toyota hiace 2024.jpeg"
    ],
    content: `Modern buses like the Toyota Coaster and Hiace are engineered for group travel, business, and adventure. They offer spacious interiors, advanced safety, and reliable performance for every road.\n\nWhether you're transporting a team, a family, or clients, today's buses provide comfort, convenience, and peace of mind.\n\nBuses are designed with flexible seating arrangements, ample storage, and robust safety features to ensure a pleasant journey for all passengers. The Toyota Coaster is ideal for larger groups, while the Hiace offers versatility for both commercial and personal use.\n\nAdvanced climate control, entertainment systems, and ergonomic seating make long trips enjoyable and relaxing. Modern engines deliver efficiency and reliability, reducing operating costs and environmental impact.\n\n**Key Highlights:**\n- Flexible seating arrangements\n- Robust safety features\n- Efficient engines\n- Designed for comfort on long journeys\n- Advanced entertainment and connectivity\n- Low maintenance and high durability\n\nChoose a bus that meets your needs and enjoy the freedom of the open road. Discover how today's buses are transforming group travel and making every journey memorable.`,
  },
  electric: {
    title: "Electric Vehicles: Driving the Future",
    images: [
      "/Electric/Toyota bZ 2025.jpeg",
      "/Electric/Bmw I4 2025.jpeg"
    ],
    content: `Electric vehicles (EVs) are revolutionizing transportation. The Toyota bZ and BMW i4 represent the cutting edge of clean, efficient, and exhilarating driving.\n\nWith instant torque, zero emissions, and advanced connectivity, EVs are the smart choice for the future.\n\nThe latest electric vehicles offer fast charging, long range, and a quiet, smooth ride. Innovations in battery technology and charging infrastructure are making EVs more accessible and practical than ever before.\n\nDrivers can enjoy lower running costs, reduced maintenance, and the satisfaction of contributing to a cleaner environment. Features like regenerative braking, smart navigation, and over-the-air updates enhance the ownership experience.\n\n**Key Highlights:**\n- Fast charging and long range\n- Quiet, smooth performance\n- Lower running costs\n- Eco-friendly innovation\n- Advanced driver assistance and connectivity\n- Expanding network of charging stations\n\nJoin the electric revolution and experience the thrill of tomorrow's mobility today. Discover how EVs are shaping the future of transportation and why more drivers are making the switch every year.`,
  },
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = blogData[slug];
  if (!blog) return { title: "Blog Not Found" };
  return {
    title: blog.title,
    description: blog.content.slice(0, 155).replace(/\n/g, " "),
    alternates: { canonical: `https://iriseagle.com/showroom/blog/${slug}` },
    openGraph: {
      title: `${blog.title} | Iriseagle Blog`,
      description: blog.content.slice(0, 155).replace(/\n/g, " "),
      url: `https://iriseagle.com/showroom/blog/${slug}`,
      images: blog.images.map((img) => ({ url: img, width: 800, height: 600, alt: blog.title })),
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.content.slice(0, 155).replace(/\n/g, " "),
      images: [blog.images[0]],
    },
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const blog = blogData[slug] || null;

  if (!blog) {
    return (
      <div className="max-w-2xl mx-auto py-24 text-center text-gray-500">
        <h1 className="text-3xl font-bold mb-4 text-red-700">Blog Not Found</h1>
        <p>The blog post you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <section className="relative w-full min-h-[60vh] flex flex-col items-center justify-center px-4 py-0 md:py-8">
      {/* Hero Banner with Images */}
      <div className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg mb-10 relative">
        <div className="flex flex-col md:flex-row w-full h-full">
          {blog.images.map((img, i) => (
            <div key={i} className="relative w-full aspect-video md:aspect-auto md:flex-1 h-48 md:h-80">
              <Image 
                src={img} 
                alt={blog.title + ' image ' + (i+1)} 
                fill 
                className="object-cover w-full h-full rounded-none md:rounded-l-2xl" 
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={i === 0}
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent px-4 py-4 md:px-6 md:py-10 flex flex-col items-center">
          <h1 className="text-2xl md:text-5xl font-extrabold text-white mb-2 drop-shadow-lg text-center">{blog.title}</h1>
        </div>
      </div>

      {/* Blog Content Section */}
      <article className="prose prose-lg max-w-3xl w-full text-gray-800 bg-white/95 rounded-2xl p-8 shadow-xl mb-12 border border-gray-100">
        {blog.content.split("\n").map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </article>

      {/* Call to Action Section */}
      <div className="w-full max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 bg-linear-to-r from-red-600/90 to-red-800/90 rounded-2xl shadow-lg p-8 mt-4">
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-white mb-2">Ready to Experience {blog.title.split(":")[0]}?</h2>
          <p className="text-white/90 mb-2">Contact our team for a test drive, personalized consultation, or to learn more about the latest models and offers. Your journey to excellence starts here.</p>
        </div>
        <Button href="/contact" variant="secondary" size="lg">
          Contact Us
        </Button>
      </div>
    </section>
  );
}
