import BookAfterSales from "@/Component/More/BookAfterSales";

export const metadata = {
  title: "Book After-Sales Service",
  description:
    "Schedule your vehicle maintenance, repair, or after-sales service with Iriseagle's certified technicians. Fast, reliable, and professional service across Nigeria.",
  alternates: { canonical: "https://iriseagle.com/more/book-after-sales" },
  openGraph: {
    title: "Book After-Sales Service | Iriseagle Nigeria",
    description:
      "Expert maintenance and repair services for your luxury vehicle. Book online with Iriseagle today.",
    url: "https://iriseagle.com/more/book-after-sales",
  },
};

export default function BookafterSales() {
    return (
      
        <div>
            <BookAfterSales />
        </div>
    );
  }