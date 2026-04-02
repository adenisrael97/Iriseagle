import AboutUs from "@/Component/About/AboutUs";
import HeroAbout from "@/Component/About/HeroAbout";
import OurMission from "@/Component/About/OurMission";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Iriseagle — Nigeria's most trusted luxury car dealership with decades of experience, certified technicians, and a passion for automotive excellence.",
  alternates: { canonical: "https://iriseagle.com/about" },
  openGraph: {
    title: "About Iriseagle | Nigeria's Premier Luxury Car Dealership",
    description:
      "Discover our story, mission, and commitment to delivering the best luxury vehicle experience in Nigeria.",
    url: "https://iriseagle.com/about",
  },
};

export default function About() {
  return (
    <main className="min-h-screen bg-white md:bg-blue-50 flex flex-col items-center justify-start pt-4 md:pt-10 pb-8 px-2 md:px-0">
      <HeroAbout />
      <AboutUs />
      <OurMission />
    </main>
  );
}