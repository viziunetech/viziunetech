const plans = [
  {
    name: "Starter",
    price: "₹4,999",
    description: "Basic website for small businesses.",
    features: ["Up to 3 Pages", "Responsive Design", "Basic SEO", "Contact Form", "1 Month Support"],
    popular: false,
  },
  {
    name: "Basic",
    price: "₹9,999",
    description: "Small website with essential features.",
    features: ["Up to 5 Pages", "Responsive Design", "Basic SEO", "Contact Form", "1 Month Support"],
    popular: false,
  },
  {
    name: "Standard",
    price: "₹14,999",
    description: "Ideal for growing businesses.",
    features: ["Up to 8 Pages", "Custom UI", "Advanced SEO", "Performance Optimized", "2 Months Support"],
    popular: true,
  },
  {
    name: "Professional",
    price: "₹24,999",
    description: "Advanced features for scaling businesses.",
    features: ["Up to 12 Pages", "Custom UI/UX", "Advanced SEO", "API Integrations", "3 Months Support"],
    popular: false,
  },
  {
    name: "Enterprise",
    price: "₹49,999",
    description: "Large-scale website or web app solutions.",
    features: ["Unlimited Pages", "Web App Development", "API Integrations", "Security & Scalability", "6 Months Support"],
    popular: false,
  },
  {
    name: "Custom",
    price: "Custom",
    description: "Tailored solutions for complex projects.",
    features: ["Fully Custom Features", "Dedicated Support", "Enterprise Architecture", "Security & Performance", "Ongoing Support"],
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Pricing Plans
          </h2>
          <p className="mt-2 text-gray-600 max-w-xl mx-auto text-sm">
            Transparent, flexible pricing plans for businesses of all sizes.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-lg p-4 border bg-white shadow-sm transition transform ${
                plan.popular ? "border-blue-600 shadow-md scale-105" : "border-gray-100"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-2 right-2 bg-blue-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                  Popular
                </span>
              )}

              <h3 className="text-lg font-semibold text-gray-900 mb-1">{plan.name}</h3>
              <p className="text-gray-600 text-xs mb-2">{plan.description}</p>

              <div className="text-2xl font-bold text-gray-900 mb-2">{plan.price}</div>

              <ul className="space-y-1 mb-3 text-xs text-gray-700">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-blue-600 mr-1">✔</span> {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-1.5 rounded text-sm font-medium transition ${
                  plan.popular ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-900 text-white hover:bg-gray-800"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
