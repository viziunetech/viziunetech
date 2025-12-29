const plans = [
  {
    name: "Starter",
    price: "₹4,999",
    description: "Basic website for small businesses.",
    features: ["Up to 3 Pages", "Responsive Design", "Basic SEO", "Contact Form", "1 Month Support"],
    estimatedDuration: "1 week",
    popular: false,
  },
  {
    name: "Basic",
    price: "₹9,999",
    description: "Small website with essential features.",
    features: ["Up to 5 Pages", "Responsive Design", "Basic SEO", "Contact Form", "1 Month Support"],
    estimatedDuration: "1-2 weeks",
    popular: false,
  },
  {
    name: "Standard",
    price: "₹14,999",
    description: "Ideal for growing businesses.",
    features: ["Up to 8 Pages", "Custom UI", "Advanced SEO", "Performance Optimized", "2 Months Support"],
    estimatedDuration: "2-3 weeks",
    popular: true,
  },
  {
    name: "Professional",
    price: "₹24,999",
    description: "Advanced features for scaling businesses.",
    features: ["Up to 12 Pages", "Custom UI/UX", "Advanced SEO", "API Integrations", "3 Months Support"],
    estimatedDuration: "3-4 weeks",
    popular: false,
  },
  {
    name: "Enterprise",
    price: "₹49,999",
    description: "Large-scale website or web app solutions.",
    features: ["Unlimited Pages", "Web App Development", "API Integrations", "Security & Scalability", "6 Months Support"],
    estimatedDuration: "4+ weeks",
    popular: false,
  },
  {
    name: "Custom",
    price: "Custom",
    description: "Tailored solutions for complex projects.",
    features: ["Fully Custom Features", "Dedicated Support", "Enterprise Architecture", "Security & Performance", "Ongoing Support"],
    estimatedDuration: "As per scope",
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section className="w-full bg-gradient-to-br from-[#181c2f] via-[#232526] to-[#1a2980] py-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-500 bg-clip-text text-transparent mb-2 tracking-wide drop-shadow-lg">
            Pricing Plans
          </h2>
          <p className="mt-2 text-gray-200 max-w-xl mx-auto text-base md:text-lg">
            Transparent, flexible pricing plans for businesses of all sizes.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shadow-xl hover:shadow-2xl transition p-6 flex flex-col items-center text-center group ${plan.popular ? "scale-105 border-cyan-400/60" : ""}`}
            >
              {plan.popular && (
                <span className="absolute -top-2 right-2 bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-[#181c2f] text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  Popular
                </span>
              )}

              <h3 className="text-lg md:text-xl font-bold text-cyan-300 mb-1 group-hover:text-fuchsia-400 transition-colors duration-300">{plan.name}</h3>
              <p className="text-gray-200 text-xs mb-2">{plan.description}</p>


              <div className="text-2xl font-extrabold text-cyan-200 mb-1 group-hover:text-fuchsia-300 transition-colors duration-300">{plan.price}</div>
              <div className="text-xs font-semibold text-fuchsia-300 mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                ⏱️ {plan.estimatedDuration}
              </div>

              <ul className="space-y-1 mb-3 text-xs text-cyan-100">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center justify-center">
                    <span className="text-cyan-400 mr-1">✔</span> {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-2 rounded-full text-sm font-bold shadow-md transition-all duration-300 mt-2 ${
                  plan.popular
                    ? "bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-[#181c2f] hover:from-fuchsia-500 hover:to-cyan-400"
                    : "bg-[#181c2f] text-cyan-300 hover:bg-cyan-400 hover:text-[#181c2f]"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Workflow Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-500 bg-clip-text text-transparent mb-2 tracking-wide drop-shadow-lg">
              How We Work
            </h3>
            <p className="text-gray-200 max-w-2xl mx-auto text-base md:text-lg">
              Our proven workflow ensures your project is delivered with quality, transparency, and efficiency.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex flex-col md:flex-row gap-8 w-full md:w-auto">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-cyan-400 to-fuchsia-500 flex items-center justify-center text-[#181c2f] font-extrabold text-xl shadow-lg mb-2">1</div>
                <div className="text-cyan-200 font-bold mb-1">Discovery & Planning</div>
                <div className="text-cyan-100 text-xs">We understand your goals and requirements.</div>
              </div>
              {/* Step 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-cyan-400 to-fuchsia-500 flex items-center justify-center text-[#181c2f] font-extrabold text-xl shadow-lg mb-2">2</div>
                <div className="text-cyan-200 font-bold mb-1">Design & Prototyping</div>
                <div className="text-cyan-100 text-xs">We craft user-friendly UI/UX and get your feedback.</div>
              </div>
              {/* Step 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-cyan-400 to-fuchsia-500 flex items-center justify-center text-[#181c2f] font-extrabold text-xl shadow-lg mb-2">3</div>
                <div className="text-cyan-200 font-bold mb-1">Development</div>
                <div className="text-cyan-100 text-xs">We build, integrate, and review your solution.</div>
              </div>
              {/* Step 4 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-cyan-400 to-fuchsia-500 flex items-center justify-center text-[#181c2f] font-extrabold text-xl shadow-lg mb-2">4</div>
                <div className="text-cyan-200 font-bold mb-1">Testing & QA</div>
                <div className="text-cyan-100 text-xs">We test, polish, and ensure quality.</div>
              </div>
              {/* Step 5 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-cyan-400 to-fuchsia-500 flex items-center justify-center text-[#181c2f] font-extrabold text-xl shadow-lg mb-2">5</div>
                <div className="text-cyan-200 font-bold mb-1">Launch & Support</div>
                <div className="text-cyan-100 text-xs">We deploy, monitor, and support your project.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
