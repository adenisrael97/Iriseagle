import PreOrder from "@/components/sections/more/PreOrder";

export const metadata = {
  title: "Pre-Order a Vehicle",
  description:
    "Be the first to own the latest 2026 luxury vehicles. Pre-order your Toyota, Lexus, Mercedes-Benz, BMW or Electric vehicle at Iriseagle Nigeria today.",
  alternates: { canonical: "https://iriseagle.com/more/preorder" },
  openGraph: {
    title: "Pre-Order 2026 Luxury Vehicles | Iriseagle Nigeria",
    description:
      "Secure your 2026 model before it hits the showroom. Priority delivery and exclusive configurations available.",
    url: "https://iriseagle.com/more/preorder",
  },
};

export default function Preorder() {
  return (
    <div>
        <PreOrder />
    </div>
  );
}