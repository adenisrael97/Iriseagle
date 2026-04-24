import Image from "next/image";
import Button from "@/components/ui/Button";

const stories = [
  {
    image: "/Others/CustomerCare.jpg",
    imageAlt: "Iris Eagle Customer Service",
    title: "Customer Service",
    body: "At Iris Eagle, our customer care team is dedicated to making your experience seamless, personal, and memorable. We listen, respond promptly, and go the extra mile to ensure your needs are met—before, during, and after your purchase. Our friendly experts are always ready to assist, answer questions, and provide guidance, so you feel valued every step of the way.",
    titleColor: "text-red-700",
    imageQuality: 72,
  },
  {
    image: "/Others/Warranty.jpg",
    imageAlt: "Iris Eagle Warranty",
    title: "Our Warranty",
    body: "Every vehicle from Iris Eagle comes with a comprehensive warranty, giving you peace of mind and confidence in your investment. We stand behind the quality of our cars and our commitment to your satisfaction. Our warranty covers essential components and services, ensuring you enjoy worry-free driving and support whenever you need it.",
    titleColor: "text-gray-700",
    reverse: true,
  },
];

function Story({ story }) {
  return (
    <div
      className={`flex flex-col ${story.reverse ? "md:flex-row-reverse" : "md:flex-row"} items-end gap-6 md:gap-16 mt-8 mb-12`}
    >
      <div className="flex items-end w-full justify-center md:justify-end md:w-92.5 mb-4 md:mb-0">
        <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-xl overflow-hidden shadow-lg">
          <Image
            src={story.image}
            alt={story.imageAlt}
            width={320}
            height={320}
            sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, 320px"
            quality={story.imageQuality ?? 75}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="flex-1 rounded-xl p-2 sm:p-4 md:p-10 flex flex-col justify-end items-center md:items-start text-center md:text-left">
        <h2 className={`text-2xl md:text-4xl font-extrabold ${story.titleColor} mb-4`}>
          {story.title}
        </h2>
        <p className="text-gray-700 text-md md:text-lg leading-relaxed mb-2">
          {story.body}
        </p>
      </div>
    </div>
  );
}

export default function OurMission() {
  return (
    <section className="w-full max-w-5xl mx-auto py-10 px-4 md:px-8 flex flex-col gap-10">
      {stories.map((story) => (
        <Story key={story.title} story={story} />
      ))}

      <div className="relative w-full min-h-85 md:min-h-105 flex items-center justify-end mt-12 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Toyota/Toyota Hilux 2026.jpeg"
            alt="Toyota Hilux 2026 Background"
            fill
            className="object-cover object-center w-full h-full opacity-85"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/30 to-transparent" />
        </div>
        <div className="relative z-10 w-full sm:w-3/4 md:w-2/3 flex flex-col items-center sm:items-end justify-center text-center sm:text-right p-4 sm:p-8 md:p-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 drop-shadow-lg">
            Ready to Experience Agape Autos?
          </h2>
          <p className="text-white text-base sm:text-lg md:text-xl mb-6 max-w-xl drop-shadow">
            Discover the future of driving with the all-new Toyota Hilux 2026.
            At Agape Autos, we bring you the latest models, unbeatable service,
            and a seamless buying experience. Step into our showroom or
            pre-order your dream vehicle today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto justify-center sm:justify-end">
            <Button href="/showroom" variant="danger" size="lg">
              View Our Showroom
            </Button>
            <Button href="/preorder" variant="secondary" size="lg">
              Pre-Order
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
