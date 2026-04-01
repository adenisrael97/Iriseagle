import Image from "next/image";
import Link from "next/link";

const plans = [
	{
		title: "Standard Auto Loan",
		detail: "Flexible monthly payments with competitive interest rates for new and certified pre-owned vehicles.",
	},
	{
		title: "Luxury Lease Plan",
		detail: "Drive premium models with lower monthly costs and easy upgrade options at the end of term.",
	},
	{
		title: "Business Fleet Financing",
		detail: "Tailored financing solutions for companies building or expanding executive and operational fleets.",
	},
];

export default function FinancingPage() {
	return (
		<main className="min-h-screen bg-gray-50 pb-14">
			{/* Financing Hero Image - Full Width, Large Height */}
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

			<section className="max-w-6xl mx-auto text-center mb-12">
				<h1 className="text-4xl md:text-5xl font-extrabold text-red-700 mb-4">
					Financing
				</h1>
				<p className="text-gray-700 text-lg max-w-3xl mx-auto">
					Iris Eagle makes vehicle ownership simple with transparent, customer-first
					financing options. Choose a plan that fits your budget and drive your
					dream car with confidence.
				</p>
			</section>

			<section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
				{plans.map((plan) => (
					<article
						key={plan.title}
						className="bg-white rounded-xl shadow p-6 text-center hover:shadow-lg transition-shadow duration-200"
					>
						<h2 className="text-xl font-bold text-gray-900 mb-3">
							{plan.title}
						</h2>
						<p className="text-gray-600">{plan.detail}</p>
					</article>
				))}
			</section>

			<section className="max-w-3xl mx-auto bg-white rounded-xl shadow p-8 text-center">
				<h3 className="text-2xl font-bold text-red-700 mb-3">
					Need a custom plan?
				</h3>
				<p className="text-gray-600 mb-6">
					Speak with our financing advisors for a personalized package based on
					your income, vehicle choice, and timeline.
				</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<Link
						href="/contact"
						className="px-6 py-3 bg-red-700 text-white rounded-lg font-semibold hover:bg-red-800 transition-colors duration-200"
					>
						Contact Financing Team
					</Link>
					   <Link
						   href="/more/preorder"
						   className="px-6 py-3 bg-white border border-red-700 text-red-700 rounded-lg font-semibold hover:bg-red-50 transition-colors duration-200"
					   >
						   Explore Pre-Order
					   </Link>
				</div>
			</section>
		</main>
	);
}
