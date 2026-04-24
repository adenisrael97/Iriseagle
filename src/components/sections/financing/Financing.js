import Image from "next/image";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

const plans = [
  {
    title: "Standard Auto Loan",
    detail:
      "Flexible monthly payments with competitive interest rates for new and certified pre-owned vehicles.",
  },
  {
    title: "Luxury Lease Plan",
    detail:
      "Drive premium models with lower monthly costs and easy upgrade options at the end of term.",
  },
  {
    title: "Business Fleet Financing",
    detail:
      "Tailored financing solutions for companies building or expanding executive and operational fleets.",
  },
];

export default function FinancingPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-14">
      <div className="w-full h-85 md:h-120 lg:h-135 relative mb-10">
        <Image
          src="/Others/Financing.jpg"
          alt="Financing Hero"
          fill
          className="object-cover object-center w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <section className="max-w-6xl mx-auto text-center mb-12 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-red-700 mb-4">
          Financing
        </h1>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          Iris Eagle makes vehicle ownership simple with transparent,
          customer-first financing options. Choose a plan that fits your
          budget and drive your dream car with confidence.
        </p>
      </section>

      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 px-4">
        {plans.map((plan) => (
          <Card
            key={plan.title}
            align="center"
            rounded="md"
            shadow="sm"
            padding="md"
            title={plan.title}
            titleClassName="text-gray-900"
            description={plan.detail}
            descriptionClassName="text-gray-600"
          />
        ))}
      </section>

      <section className="max-w-3xl mx-4 sm:mx-auto bg-white rounded-xl shadow p-4 sm:p-8 text-center">
        <h2 className="text-2xl font-bold text-red-700 mb-3">
          Need a custom plan?
        </h2>
        <p className="text-gray-600 mb-6">
          Speak with our financing advisors for a personalized package based on
          your income, vehicle choice, and timeline.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/contact" variant="danger" size="md">
            Contact Financing Team
          </Button>
          <Button href="/more/preorder" variant="outline" size="md">
            Explore Pre-Order
          </Button>
        </div>
      </section>
    </main>
  );
}
