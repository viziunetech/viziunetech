const plans = [
  {
    name: "Starter",
    price: "₹4,999",
    description: "Quick online presence for individuals and local businesses.",
    features: [
      "Up to 3 Pages",
      "Template-Based Design",
      "Mobile Responsive",
      "Basic SEO Setup",
      "Contact Form",
      "1 Revision",
      "1 Month Support",
    ],
    estimatedDuration: "5–7 days",
    popular: false,
  },
  {
    name: "Basic",
    price: "₹9,999",
    description: "Professional website for small businesses.",
    features: [
      "Up to 5 Pages",
      "Semi-Custom UI",
      "Mobile & Tablet Optimized",
      "Basic SEO + Sitemap",
      "Contact + WhatsApp Integration",
      "2–3 Revisions",
      "1 Month Support",
    ],
    estimatedDuration: "1–2 weeks",
    popular: false,
  },
  {
    name: "Standard",
    price: "₹14,999",
    description: "Best for growing businesses focused on leads.",
    features: [
      "Up to 8 Pages",
      "Custom UI Design",
      "Advanced SEO Structure",
      "Performance Optimization",
      "Google Analytics Setup",
      "3–4 Revisions",
      "2 Months Support",
    ],
    estimatedDuration: "2–3 weeks",
    popular: true,
  },
  {
    name: "Professional",
    price: "₹24,999",
    description: "Advanced solution for startups and scaling businesses.",
    features: [
      "Up to 12 Pages",
      "Custom UI/UX",
      "Advanced SEO & Speed Optimization",
      "API Integrations",
      "CMS / Admin Panel",
      "Security Best Practices",
      "3 Months Support",
    ],
    estimatedDuration: "3–4 weeks",
    popular: false,
  },
  {
    name: "Enterprise",
    price: "Starting at ₹49,999",
    description: "Enterprise-grade websites and web applications.",
    features: [
      "Unlimited Pages",
      "Web App Development",
      "Custom Architecture",
      "API & Third-Party Integrations",
      "Security & Scalability",
      "Dedicated Project Support",
      "6 Months Support",
    ],
    estimatedDuration: "4+ weeks",
    popular: false,
  },
  {
    name: "Custom",
    price: "Custom Quote",
    description: "Tailored solutions for complex or long-term projects.",
    features: [
      "Fully Custom Features",
      "SaaS / Automation Solutions",
      "Enterprise Architecture",
      "High Security & Performance",
      "Dedicated Technical Support",
      "Ongoing Maintenance Options",
    ],
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
          <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-500 bg-clip-text text-transparent mb-2">
            Pricing Plans
          </h2>
          <p className="text-gray-200 max-w-xl mx-auto">
            Transparent, scalable pricing designed for businesses at every stage.
          </p>
        </div>

        {/* Website Development Pricing */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shadow-xl p-6 flex flex-col items-center text-center ${
                plan.popular ? "scale-105 border-cyan-400/60" : ""
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-2 right-2 bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-[#181c2f] text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <h3 className="text-lg font-bold text-cyan-300 mb-1">
                {plan.name}
              </h3>

              <p className="text-gray-200 text-xs mb-3">
                {plan.description}
              </p>

              <div className="text-2xl font-extrabold text-cyan-200 mb-1">
                {plan.price}
              </div>

              <div className="text-xs text-fuchsia-300 mb-3">
                ⏱ {plan.estimatedDuration}
              </div>

              <ul className="space-y-1 mb-4 text-xs text-cyan-100">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex justify-center items-center">
                    <span className="text-cyan-400 mr-1">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full py-2 rounded-full text-sm font-bold bg-[#181c2f] text-cyan-300 hover:bg-cyan-400 hover:text-[#181c2f] transition">
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Other Services Pricing */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-500 bg-clip-text text-transparent mb-2">
              Other Services Pricing
            </h3>
            <p className="text-gray-200 max-w-2xl mx-auto">
              Flexible pricing for automation, DevOps, and backend solutions.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

            {/* QA Automation */}
            <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shadow-xl p-6 text-center">
              <h4 className="text-lg font-bold text-cyan-300 mb-1">QA Automation</h4>
              <div className="text-2xl font-extrabold text-cyan-200 mb-1">Starting at ₹14,999</div>
              <ul className="text-xs text-cyan-100 space-y-1">
                <li>Web, API & Database Automation</li>
                <li>Framework Setup & Test Scripts</li>
                <li>Reporting & Test Strategy</li>
                <li>Up to 50 Test Cases</li>
              </ul>
            </div>

            {/* Automation Frameworks */}
            <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shadow-xl p-6 text-center">
              <h4 className="text-lg font-bold text-cyan-300 mb-1">Automation Frameworks</h4>
              <div className="text-2xl font-extrabold text-cyan-200 mb-1">Starting at ₹19,999</div>
              <ul className="text-xs text-cyan-100 space-y-1">
                <li>Custom Framework Architecture</li>
                <li>CI/CD Ready Integration</li>
                <li>Code Ownership & Documentation</li>
                <li>Developer Training</li>
              </ul>
            </div>

            {/* CI/CD & DevOps */}
            <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shadow-xl p-6 text-center">
              <h4 className="text-lg font-bold text-cyan-300 mb-1">CI/CD & DevOps</h4>
              <div className="text-2xl font-extrabold text-cyan-200 mb-1">Starting at ₹14,999</div>
              <ul className="text-xs text-cyan-100 space-y-1">
                <li>CI/CD Pipeline Setup</li>
                <li>Automated Build & Deploy</li>
                <li>Environment Configuration</li>
                <li>Monitoring & Alerts</li>
              </ul>
            </div>

            {/* Maintenance & Support (NEW – IMPORTANT) */}
            <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shadow-xl p-6 text-center">
              <h4 className="text-lg font-bold text-cyan-300 mb-1">Maintenance & Support</h4>
              <div className="text-2xl font-extrabold text-cyan-200 mb-1">Starting at ₹1,999 / month</div>
              <ul className="text-xs text-cyan-100 space-y-1">
                <li>Bug Fixes & Updates</li>
                <li>Security & Backup Monitoring</li>
                <li>Priority Technical Support</li>
                <li>Monthly Health Reports</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
