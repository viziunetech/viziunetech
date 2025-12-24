const projects = [
  {
    title: "TennisIndiaLive.com",
    description:
      "A live tennis scores and updates platform with real-time match data and optimized performance.",
    tech: ["React", "API", "Live Data"],
    type: "web",
  },
  {
    title: "CodingAcademyIndia.com",
    description:
      "An educational platform offering structured coding courses with a modern UI and scalable architecture.",
    tech: ["React", "Tailwind", "LMS"],
    type: "education",
  },
  {
    title: "Twitter Notification System",
    description:
      "An automated system that monitors Twitter activity and sends real-time notifications based on triggers.",
    tech: ["Node.js", "Twitter API", "Automation"],
    type: "system",
  },
]

function ProjectIcon({ type }) {
  if (type === "web") {
    return (
      <svg
        className="h-10 w-10 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 4h18M3 10h18M3 16h18M3 20h18"
        />
      </svg>
    )
  }

  if (type === "education") {
    return (
      <svg
        className="h-10 w-10 text-green-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 14l9-5-9-5-9 5 9 5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5a12.083 12.083 0 01-6.16-10.922L12 14z"
        />
      </svg>
    )
  }

  return (
    <svg
      className="h-10 w-10 text-purple-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Projects
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Real-world projects delivered with performance, scalability, and
            business impact in mind.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-xl bg-white p-6 border border-gray-100 shadow-sm hover:shadow-md transition"
            >
              <div className="mb-4">
                <ProjectIcon type={project.type} />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {project.title}
              </h3>

              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
