import FinancingPage from "@/components/sections/financing/Financing";

export const metadata = {
  title: "Financing",
  description:
    "Explore flexible car financing options at Iriseagle. Get competitive rates, easy monthly payment plans, and fast approval for your dream luxury vehicle in Nigeria.",
  alternates: { canonical: "https://iriseagle.com/financing" },
  openGraph: {
    title: "Car Financing | Iriseagle Nigeria",
    description:
      "Flexible financing plans for Toyota, Lexus, Mercedes-Benz, BMW and more. Apply today at Iriseagle.",
    url: "https://iriseagle.com/financing",
  },
};

export default function Financing () {
	  return <FinancingPage />;
}