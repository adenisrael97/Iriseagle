import PageHero from "@/components/layout/PageHero";
import Card from "@/components/ui/Card";
import { IconFlag, IconCar, IconAward, IconUsers } from "@/components/ui/Icons";

const milestones = [
  {
    year: "2012",
    title: "Founded",
    desc: "Iris Eagle was established with a vision to redefine luxury car experiences in Nigeria, starting with a single showroom and a passionate team.",
    Icon: IconFlag,
  },
  {
    year: "2015",
    title: "Expansion",
    desc: "Opened two new branches, introduced more luxury brands, and began building a reputation for exceptional customer service.",
    Icon: IconCar,
  },
  {
    year: "2019",
    title: "Award-Winning Service",
    desc: "Recognized as a top luxury dealership, Iris Eagle received multiple awards for innovation and customer satisfaction.",
    Icon: IconAward,
  },
  {
    year: "2024",
    title: "Community & Growth",
    desc: "Expanded after-sales services, launched community initiatives, and grew our loyal customer base to thousands across the region.",
    Icon: IconUsers,
  },
];

export default function ShowroomHistory() {
  return (
    <>
      <PageHero
        image="/Ceo/CEO.jpg"
        imageAlt="Iris Eagle History"
        title="Iris Eagle History"
        height="xl"
        overlay="medium"
      />

      <section className="w-full max-w-4xl mx-auto mt-8 mb-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-red-700 text-center mb-10 flex items-center justify-center gap-3">
          <IconFlag className="w-6 h-6 text-red-700" /> Founded 2012
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {milestones.map(({ year, title, desc, Icon }) => (
            <Card
              key={year}
              align="center"
              rounded="md"
              shadow="md"
              padding="lg"
              variant="glass"
              className="hover:shadow-2xl transition-shadow duration-300"
              titleClassName="text-red-700"
              descriptionClassName="text-gray-700"
              media={<Icon className="w-8 h-8 text-red-700" />}
              title={
                <>
                  {title}{" "}
                  <span className="text-gray-500 font-normal">({year})</span>
                </>
              }
              description={desc}
            />
          ))}
        </div>
      </section>
    </>
  );
}
