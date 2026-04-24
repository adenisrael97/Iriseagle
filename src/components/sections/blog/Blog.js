import Image from "next/image";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import PageHero from "@/components/layout/PageHero";

const blogPosts = [
  {
    slug: "toyota",
    title: "Toyota: The Future of Reliable Mobility",
    description:
      "Discover how Toyota continues to set the standard for reliability and innovation in the automotive world. From the Camry to the Highlander, see why drivers trust Toyota for every journey.",
    images: [
      { src: "/Toyota/Toyota Camry 2024.jpeg", alt: "Toyota Camry" },
      { src: "/Toyota/Toyota Highlander 2024.jpeg", alt: "Toyota Highlander" },
    ],
  },
  {
    slug: "lexus",
    title: "Lexus: Redefining Luxury and Comfort",
    description:
      "Explore the world of Lexus, where luxury meets performance. Learn how the ES and GX models deliver a refined driving experience for discerning car lovers.",
    images: [
      { src: "/Lexus/Lexus ES 2025.jpg", alt: "Lexus ES" },
      { src: "/Lexus/Lexus GX 2024.jpeg", alt: "Lexus GX" },
    ],
  },
  {
    slug: "mercedes",
    title: "Mercedes: Innovation in Motion",
    description:
      "Mercedes-Benz leads the way in automotive technology and luxury. Dive into the AMG C63 and S Class to see how Mercedes blends power, prestige, and comfort.",
    images: [
      { src: "/Mercedes/Mercedes AMG C63 2025.webp", alt: "Mercedes AMG C63" },
      { src: "/Mercedes/Mercedes S Class 2025.jpg", alt: "Mercedes S Class" },
    ],
  },
  {
    slug: "bus",
    title: "Buses: Comfort and Capacity for Every Journey",
    description:
      "From the Toyota Coaster to the Hiace, discover how modern buses offer unmatched comfort, safety, and space for group travel and business needs.",
    images: [
      { src: "/Bus/Toyota Coaster 2024.jpeg", alt: "Toyota Coaster" },
      { src: "/Bus/Toyota hiace 2024.jpeg", alt: "Toyota Hiace" },
    ],
  },
  {
    slug: "electric",
    title: "Electric Vehicles: Driving the Future",
    description:
      "Electric vehicles are transforming the road ahead. Learn how the Toyota bZ and BMW i4 are leading the charge toward a cleaner, more efficient future.",
    images: [
      { src: "/Electric/Toyota bZ 2025.jpeg", alt: "Toyota bZ" },
      { src: "/Electric/Bmw I4 2025.jpeg", alt: "BMW i4" },
    ],
  },
];

function BlogImagePair({ images }) {
  return (
    <div className="flex gap-3 mb-4">
      {images.map((img) => (
        <Image
          key={img.src}
          src={img.src}
          alt={img.alt}
          width={120}
          height={80}
          className="rounded-lg object-cover"
        />
      ))}
    </div>
  );
}

export default function Blog() {
  return (
    <>
      <PageHero
        image="/Others/Blog.jpg"
        imageAlt="Iris Eagle Blog"
        title="Iris Eagle Blog"
        subtitle="Welcome to the Iris Eagle Blog! Here you'll find the latest news, tips, and insights on luxury vehicles, automotive trends, and dealership updates."
        height="lg"
        overlay="medium"
        className="mb-12"
      />

      <section className="max-w-5xl mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Card
              key={post.slug}
              align="center"
              rounded="md"
              shadow="sm"
              padding="sm"
              title={post.title}
              titleClassName="text-red-700"
              description={post.description}
              descriptionClassName="text-gray-700"
              media={<BlogImagePair images={post.images} />}
              footer={
                <Button href={`/showroom/blog/${post.slug}`} variant="primary" size="sm">
                  Read More
                </Button>
              }
            />
          ))}
        </div>
      </section>
    </>
  );
}
