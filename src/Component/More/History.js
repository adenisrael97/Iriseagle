"use client";
import Image from "next/image";
import { IconFlag, IconCar, IconAward, IconUsers } from "@/Component/Icons";

export default function ShowroomHistory() {
  const milestones = [
    {
      year: "2012",
      title: "Founded",
      desc: "Iris Eagle was established with a vision to redefine luxury car experiences in Nigeria, starting with a single showroom and a passionate team.",
      icon: <IconFlag className="w-8 h-8 text-red-700 mb-2" />,
    },
    {
      year: "2015",
      title: "Expansion",
      desc: "Opened two new branches, introduced more luxury brands, and began building a reputation for exceptional customer service.",
      icon: <IconCar className="w-8 h-8 text-red-700 mb-2" />,
    },
    {
      year: "2019",
      title: "Award-Winning Service",
      desc: "Recognized as a top luxury dealership, Iris Eagle received multiple awards for innovation and customer satisfaction.",
      icon: <IconAward className="w-8 h-8 text-red-700 mb-2" />,
    },
    {
      year: "2024",
      title: "Community & Growth",
      desc: "Expanded after-sales services, launched community initiatives, and grew our loyal customer base to thousands across the region.",
      icon: <IconUsers className="w-8 h-8 text-red-700 mb-2" />,
    },
  ];

  return (
    <>
      {/* Hero Section with Background Image */}
      <div className="relative min-h-[80vh] flex flex-col items-center justify-center py-16 px-4">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Ceo/CEO.jpg"
            alt="CEO Background"
            fill
            className="object-cover object-center w-full h-full opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center w-full max-w-2xl mx-auto py-28 px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">Iris Eagle History</h1>
        </div>
      </div>
      {/* Timeline Section - now outside the hero */}
      <div className="w-full max-w-4xl mx-auto mt-8 mb-16 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-red-700 text-center mb-10 flex items-center justify-center gap-3">
          <IconFlag className="w-6 h-6 text-red-700" /> Founded 2012
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {milestones.map((m, idx) => (
            <div
              key={m.year}
              className="bg-white/95 rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
            >
              {m.icon}
              <h2 className="text-xl font-bold text-red-700 mb-1">{m.title} <span className="text-gray-500 font-normal">({m.year})</span></h2>
              <p className="text-gray-700 text-base mt-2">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
