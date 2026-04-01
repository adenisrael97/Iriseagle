import AboutUs from "@/Component/About/AboutUs";
import HeroAbout from "@/Component/About/HeroAbout";
import OurMission from "@/Component/About/OurMission";

export default function About() {
  return (
    <main className="min-h-screen bg-white md:bg-blue-50 flex flex-col items-center justify-start pt-4 md:pt-10 pb-8 px-2 md:px-0">
      <HeroAbout />
      <AboutUs />
      <OurMission />
    </main>
  );
}