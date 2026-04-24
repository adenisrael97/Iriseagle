import History from "@/components/sections/more/History";

export const metadata = {
  title: "Our History",
  description:
    "Discover the story of Iriseagle — from our founding to becoming Nigeria's most trusted luxury car dealership. A legacy built on excellence, trust, and innovation.",
  alternates: { canonical: "https://iriseagle.com/more/history" },
  openGraph: {
    title: "Our History | Iriseagle Nigeria",
    description:
      "The journey of Iriseagle — Nigeria's premier luxury car dealership, built on decades of trust and excellence.",
    url: "https://iriseagle.com/more/history",
  },
};

export default function ShowroomHistory() {
  return (
    <div>
        <History />
    </div>
  );
}
