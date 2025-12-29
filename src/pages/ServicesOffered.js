const services = [
  {
    title: "QA Automation & Testing",
    description:
      "End-to-end automation for API, Database, and Web UI using Python, Java, Selenium, UFT/QTP, and more. Robust frameworks and test strategies for quality delivery.",
    icon: "🧪",
  },
  {
    title: "Full Stack Development",
    description:
      "Modern web applications with ReactJS, Express.js, and scalable backend solutions. Expertise in both frontend and backend integration.",
    icon: "💻",
  },
  {
    title: "Automation Frameworks",
    description:
      "Custom automation frameworks for testing and workflow optimization. Experience with Selenium, Postman, Python Requests, RestAssured, and Excel Macros.",
    icon: "⚙️",
  },
  {
    title: "Agile Consulting & Delivery",
    description:
      "Agile-focused project management, sprint planning, and quality assurance for rapid, reliable software delivery.",
    icon: "🚀",
  },
  {
    title: "CI/CD & DevOps Integration",
    description:
      "Setup and optimization of Jenkins, GitLab CI/CD pipelines, and automated deployments for faster, safer releases.",
    icon: "🔄",
  },
  {
    title: "Database & API Solutions",
    description:
      "Database design, API development, and testing with MS SQL, Postgres, MongoDB, and RESTful services.",
    icon: "🗄️",
  },
]

export default function Services() {
  return (
    <section className="w-full bg-gradient-to-br from-[#181c2f] via-[#232526] to-[#1a2980] py-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-500 bg-clip-text text-transparent mb-2 tracking-wide drop-shadow-lg">
            Our Services
          </h2>
          <p className="mt-4 text-gray-200 max-w-2xl mx-auto text-base md:text-lg">
            We help businesses grow with reliable, scalable, and modern web solutions tailored to their goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shadow-xl hover:shadow-2xl transition p-8 flex flex-col items-center text-center group"
            >
              <div className="text-5xl mb-4 group-hover:text-fuchsia-400 transition-colors duration-300">{service.icon}</div>
              <h3 className="text-lg md:text-xl font-bold text-cyan-300 mb-2 group-hover:text-fuchsia-400 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-cyan-100 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
