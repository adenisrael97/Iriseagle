import Image from "next/image";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";

const leaders = [
  {
    image: "/Ceo/CEO.jpg",
    imageAlt: "Mr Jeremiah Oluwaseun, CEO of Iris Eagle",
    name: "Mr Jeremiah Oluwaseun",
    role: "Chief Executive Officer",
    highlight: true,
    title: "About Us",
    body: [
      {
        leadHighlight: "Iris Eagle",
        text: " is where your dream car journey truly begins. We are more than just an auto sales company—we are a brand built on excellence, trust, and a deep understanding of what our customers truly want. From luxury vehicles to reliable everyday cars, we carefully curate every option to ensure it meets the highest standards of quality and performance.",
      },
      {
        text: "Our goal is to remove the stress and uncertainty that often comes with buying a car. We achieve this by offering a transparent process, honest pricing, and expert guidance at every step. Whether you are buying your first car or upgrading to something more premium, we make the experience smooth, enjoyable, and rewarding.",
      },
      {
        text: "At Iris Eagle, innovation is at the heart of everything we do. We leverage modern technology to simplify car selection, streamline bookings, and enhance customer interaction. This allows you to browse, compare, and make informed decisions with ease—right from the comfort of your home.",
      },
      {
        text: "Join a growing community of satisfied customers who value integrity, premium service, and attention to detail. At Iris Eagle, every interaction is designed around you—because you deserve not just a car, but an exceptional experience that matches your lifestyle and ambition.",
        muted: true,
      },
    ],
  },
  {
    image: "/Ceo/CoFounder.jpg",
    imageAlt: "Cofounder of Iris Eagle",
    name: "Mrs Adeniran Adebola",
    role: "Co-Founder",
    highlight: false,
    reverse: true,
    title: "Our Mission",
    body: [
      {
        text: "At Iris Eagle, our mission is to redefine luxury car ownership by making it more accessible, transparent, and rewarding for everyone. We aim to eliminate barriers and create opportunities for individuals and businesses to own vehicles that match their goals and lifestyle.",
      },
      {
        text: "We are committed to delivering a seamless experience—from the moment you discover a car to long after you've driven it. Our team works tirelessly to ensure every customer receives personalized attention, expert advice, and unmatched service.",
      },
      {
        text: "Beyond sales, we focus on building lasting relationships. We believe that trust is earned through consistency, honesty, and delivering on our promises. That's why we prioritize customer satisfaction above everything else.",
      },
      {
        text: "Every day, we strive to raise the standard in the automotive industry by combining innovation, professionalism, and passion. Our mission is simple: to give you confidence, comfort, and pride in every drive.",
        muted: true,
      },
    ],
  },
];

const values = [
  { icon: "🤝", title: "Integrity", desc: "We are honest, transparent, and ethical in all our dealings—earning your trust every step of the way." },
  { icon: "🌟", title: "Excellence", desc: "We strive for the highest standards in service, selection, and customer care—delivering only the best." },
  { icon: "👥", title: "Customer Focus", desc: "Your needs come first. We listen, adapt, and personalize every experience to ensure your satisfaction." },
  { icon: "🚗", title: "Passion", desc: "We love what we do and it shows—in our service, our selection, and our commitment to your journey." },
];

function LeaderSection({ leader }) {
  const accent = leader.highlight ? "border-red-700" : "border-gray-300";
  const titleColor = leader.highlight ? "text-red-700" : "text-gray-700";
  const nameColor = leader.highlight ? "text-red-700" : "text-gray-700";

  return (
    <div
      className={`flex flex-col ${leader.reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center md:items-start gap-10 md:gap-16`}
    >
      <div className="flex flex-col items-center w-full md:w-1/3">
        <div className="w-72 h-72 md:w-80 md:h-80 overflow-hidden shadow-xl mb-4 rounded-xl">
          <Image
            src={leader.image}
            alt={leader.imageAlt}
            width={320}
            height={320}
            className="object-cover w-full h-full"
            priority={leader.highlight}
          />
        </div>
        <span className={`block text-xl md:text-2xl font-bold ${nameColor} mt-2`}>
          {leader.name}
        </span>
        <span className="block text-gray-500 text-base md:text-lg">{leader.role}</span>
      </div>

      <div className={`flex-1 bg-white/95 rounded-xl shadow p-8 md:p-12 border-t-4 ${accent} flex flex-col justify-center`}>
        <h2 className={`text-3xl md:text-5xl font-extrabold ${titleColor} mb-6`}>
          {leader.title}
        </h2>
        {leader.body.map((para, idx) => (
          <p
            key={idx}
            className={`${para.muted ? "text-gray-600 text-base md:text-lg" : "text-gray-700 text-lg md:text-xl"} leading-relaxed mb-4`}
          >
            {para.leadHighlight && (
              <span className={`font-semibold ${titleColor}`}>
                {para.leadHighlight}
              </span>
            )}
            {para.text}
          </p>
        ))}
      </div>
    </div>
  );
}

export default function AboutUs() {
  return (
    <section className="w-full max-w-6xl mx-auto py-14 px-4 md:px-10 flex flex-col gap-16">
      <LeaderSection leader={leaders[0]} />

      <div className="my-8 flex justify-center">
        <Button href="/showroom/our-vehicles" variant="danger" size="lg" shape="pill">
          View Inventory
        </Button>
      </div>

      <LeaderSection leader={leaders[1]} />

      <div className="mt-16">
        <SectionHeading
          title="Our Values"
          subtitle="At Iris Eagle, our values guide every decision and interaction. We believe in building trust, delivering excellence, and always putting our customers first."
          tone="accent"
          size="lg"
          className="mb-8"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {values.map((value) => (
            <Card
              key={value.title}
              align="center"
              rounded="md"
              shadow="sm"
              padding="md"
              title={value.title}
              titleClassName="text-red-700"
              description={value.desc}
              descriptionClassName="text-gray-600 text-sm"
              media={<span className="text-4xl text-red-700">{value.icon}</span>}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
