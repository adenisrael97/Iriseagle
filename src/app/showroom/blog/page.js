import Blog from "@/components/sections/blog/Blog";

export const metadata = {
  title: "Blog",
  description:
    "Read the Iriseagle blog for the latest news, buying guides, and insights on Toyota, Lexus, Mercedes-Benz, BMW, Electric vehicles and the Nigerian automotive market.",
  alternates: { canonical: "https://iriseagle.com/showroom/blog" },
  openGraph: {
    title: "Iriseagle Blog | Automotive News & Insights Nigeria",
    description:
      "Stay informed with the latest luxury car news, tips, and dealership updates from Iriseagle Nigeria.",
    url: "https://iriseagle.com/showroom/blog",
    images: [{ url: "/Others/Blog.jpg", width: 1200, height: 630, alt: "Iriseagle Blog" }],
  },
};

export default function BlogPage() {
  return <Blog />;
}
