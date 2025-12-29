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
      <svg className="h-10 w-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <rect x="3" y="6" width="18" height="12" rx="3" strokeWidth={1.5} />
        <path d="M3 10h18" strokeWidth={1.5} />
        <circle cx="8" cy="16" r="1" fill="currentColor" />
        <circle cx="12" cy="16" r="1" fill="currentColor" />
        <circle cx="16" cy="16" r="1" fill="currentColor" />
      </svg>
    );
  }
  if (type === "education") {
    return (
      <svg className="h-10 w-10 text-fuchsia-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M12 14l9-5-9-5-9 5 9 5z" strokeWidth={1.5} />
        <path d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5a12.083 12.083 0 01-6.16-10.922L12 14z" strokeWidth={1.5} />
      </svg>
    );
  }
  return (
    <svg className="h-10 w-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeWidth={1.5} />
    </svg>
  );
}

export default function Projects() {
  return (
    <section className="w-full bg-gradient-to-br from-[#181c2f] via-[#232526] to-[#1a2980] py-16 min-h-screen">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-500 bg-clip-text text-transparent mb-2 tracking-wide drop-shadow-lg">
            Our Projects
          </h2>
          <p className="mt-2 text-gray-200 max-w-2xl mx-auto text-base md:text-lg">
            Real-world projects delivered with performance, scalability, and business impact in mind.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shadow-xl hover:shadow-2xl transition p-6 flex flex-col items-center text-center group"
            >
              <div className="mb-3">
                <ProjectIcon type={project.type} />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-cyan-300 mb-1 group-hover:text-fuchsia-400 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-sm text-gray-200 mb-3 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="text-xs bg-cyan-400/10 text-cyan-200 px-3 py-1 rounded-full border border-cyan-400/30 group-hover:bg-fuchsia-400/20 group-hover:text-fuchsia-200 transition-colors duration-300"
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
  );
}
