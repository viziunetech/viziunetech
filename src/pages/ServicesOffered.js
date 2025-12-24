const services = [
  {
    title: "Website Development",
    description:
      "High-performance, responsive websites built with modern technologies for speed, security, and scalability.",
    icon: "🌐",
  },
  {
    title: "E-commerce Solutions",
    description:
      "Custom e-commerce stores with secure payments, product management, and conversion-focused UX.",
    icon: "🛒",
  },
  {
    title: "UI / UX Design",
    description:
      "User-centric designs that improve engagement, usability, and brand trust across all devices.",
    icon: "🎨",
  },
  {
    title: "Web App Development",
    description:
      "Powerful web applications using React, APIs, and scalable architectures tailored to your business.",
    icon: "⚙️",
  },
  {
    title: "SEO & Performance",
    description:
      "Optimized websites with fast load times, clean code, and SEO best practices to rank better.",
    icon: "🚀",
  },
  {
    title: "Maintenance & Support",
    description:
      "Ongoing updates, security patches, and technical support to keep your website running smoothly.",
    icon: "🔧",
  },
]

export default function Services() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Services
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We help businesses grow with reliable, scalable, and modern web
            solutions tailored to their goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
