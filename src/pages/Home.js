
import React from 'react';

const services = [
  {
    icon: <span role="img" aria-label="QA Automation" className="text-cyan-400 text-3xl">🧪</span>,
    title: "QA Automation & Testing",
    desc: "End-to-end automation for API, Database, and Web UI. Robust frameworks and test strategies for quality delivery."
  },
  {
    icon: <span role="img" aria-label="Full Stack" className="text-fuchsia-400 text-3xl">💻</span>,
    title: "Full Stack Development",
    desc: "Modern web applications with ReactJS, Express.js, and scalable backend solutions."
  },
  {
    icon: <span role="img" aria-label="Frameworks" className="text-blue-400 text-3xl">⚙️</span>,
    title: "Automation Frameworks",
    desc: "Custom automation frameworks for testing and workflow optimization. Selenium, Postman, Python, and more."
  },
  {
    icon: <span role="img" aria-label="Agile" className="text-yellow-400 text-3xl">🚀</span>,
    title: "Agile Consulting & Delivery",
    desc: "Agile-focused project management, sprint planning, and quality assurance for rapid, reliable software delivery."
  },
  {
    icon: <span role="img" aria-label="CI/CD" className="text-green-400 text-3xl">🔄</span>,
    title: "CI/CD & DevOps Integration",
    desc: "Setup and optimization of Jenkins, GitLab CI/CD pipelines, and automated deployments."
  },
  {
    icon: <span role="img" aria-label="Database" className="text-pink-400 text-3xl">🗄️</span>,
    title: "Database & API Solutions",
    desc: "Database design, API development, and testing with MS SQL, Postgres, MongoDB, and RESTful services."
  },
];
// Testimonials data
const testimonials = [
    {
        name: "Rohit S.",
        role: "Product Manager, FinTech",
        feedback: "The automation frameworks delivered by this team have saved us countless hours and improved our release quality. Highly recommended!"
    },
    {
        name: "Priya M.",
        role: "QA Lead, Healthcare",
        feedback: "Professional, reliable, and always ahead of deadlines. Their CI/CD and QA solutions are top-notch."
    },
    {
        name: "Alex T.",
        role: "CTO, E-Commerce Startup",
        feedback: "Our web platform was transformed with modern tech and robust automation. Great communication and results!"
    },
];

export default function Home() {
    return (
        <div className="mt-16 min-h-screen w-full bg-gradient-to-br from-[#0f2027] via-[#232526] to-[#1a2980] text-white pb-6">
            {/* Hero Section */}
            <section
                className="w-full relative flex items-center justify-center p-5 overflow-hidden"
                style={{
                    background: `linear-gradient(120deg, #181c2f 60%, #232526 100%)`,
                }}
            >
                {/* Blurred/animated background image */}
                <div
                    className="absolute inset-0 w-full h-full z-0"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'blur(6px) brightness(0.5)',
                        opacity: 0.7,
                        transition: 'opacity 0.5s',
                    }}
                />
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 w-full h-full z-10 animate-gradient-move bg-gradient-to-tr from-cyan-700/60 via-fuchsia-700/40 to-blue-900/60" style={{mixBlendMode:'overlay'}} />
                {/* Glassmorphism card */}
                <div className="relative z-20 flex flex-col items-center justify-center px-4 py-8 md:px-12 md:py-12 rounded-3xl bg-white/10 backdrop-blur-md shadow-2xl border border-white/20 max-w-2xl mx-auto text-center">
                    <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-500 bg-clip-text text-transparent mb-3 tracking-wide drop-shadow-lg animate-fade-in">
                        Empowering Your Digital Future
                    </h1>
                    <p className="text-base md:text-xl text-gray-100 mb-6 animate-fade-in delay-200">
                        Next-Gen IT Services for Ambitious Businesses
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center items-center animate-fade-in delay-300">
                        <a href="/contact" className="px-7 py-2.5 rounded-lg font-bold text-base bg-gradient-to-r from-cyan-400 to-blue-500 shadow-md hover:from-blue-500 hover:to-cyan-400 transition-all duration-300">
                            Get Started
                        </a>
                        <a href="/services" className="px-7 py-2.5 rounded-lg font-bold text-base border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-[#181c2f] transition-all duration-300">
                            Explore Services
                        </a>
                    </div>
                </div>
                <style>{`
                  @keyframes gradient-move {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                  }
                  .animate-gradient-move {
                    background-size: 200% 200%;
                    animation: gradient-move 8s ease-in-out infinite;
                  }
                `}</style>
            </section>

            {/* Services Section */}
            <div className="w-full mt-10 px-0">
                <h2 className="w-full text-2xl md:text-3xl font-bold text-cyan-400 text-center mb-6 tracking-wider animate-fade-in">Our IT Services</h2>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-0">
                    {services.map((service, idx) => (
                        <div
                            key={service.title}
                            className="bg-gradient-to-br from-[#232526]/80 to-[#1a2980]/80 rounded-xl shadow-lg p-4 text-center transform hover:scale-105 transition-transform duration-300 group animate-fade-in"
                            style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
                        >
                            <div className="flex justify-center mb-2">
                                <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#181c2f] shadow-md group-hover:bg-cyan-400 transition-colors duration-300">
                                    {service.icon}
                                </span>
                            </div>
                            <h3 className="text-lg font-bold mb-1 group-hover:text-cyan-400 transition-colors duration-300">{service.title}</h3>
                            <p className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

                        {/* Testimonials Section */}
                        <div className="w-full mt-14 px-0 animate-fade-in delay-500">
                                <h2 className="w-full text-2xl md:text-3xl font-bold text-fuchsia-400 text-center mb-6 tracking-wider">What Clients Say</h2>
                                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 px-0">
                                    {testimonials.map((t, idx) => (
                                        <div key={t.name} className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shadow-xl p-6 flex flex-col items-center text-center">
                                            <div className="text-xl font-bold text-cyan-300 mb-1">{t.name}</div>
                                            <div className="text-xs text-cyan-100 mb-2">{t.role}</div>
                                            <div className="text-gray-100 text-sm italic">“{t.feedback}”</div>
                                        </div>
                                    ))}
                                </div>
                        </div>

                        {/* Call to Action Section */}
            <div className="w-full mt-10 text-center px-0 animate-fade-in delay-700">
                <div className="w-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 rounded-2xl p-6 shadow-lg text-[#181c2f] flex flex-col items-center justify-center">
                    <h2 className="w-full text-2xl md:text-3xl font-bold mb-2">Ready to Transform Your Business?</h2>
                    <p className="w-full text-base md:text-lg mb-4">Let’s build something extraordinary together. Contact us for a free consultation!</p>
                    <a
                        href="/contact"
                        className="inline-block px-8 py-3 rounded-lg font-bold text-lg bg-[#181c2f] text-cyan-400 hover:bg-cyan-400 hover:text-[#181c2f] transition-all duration-300 shadow-md"
                        style={{ width: '100%', maxWidth: 320 }}
                    >
                        Contact Us
                    </a>
                </div>
            </div>

            {/* Animations */}
            <style>{`
                .animate-fade-in {
                    opacity: 0;
                    animation: fadeIn 1s forwards;
                }
                .animate-fade-in.delay-200 { animation-delay: 0.2s; }
                .animate-fade-in.delay-300 { animation-delay: 0.3s; }
                .animate-fade-in.delay-500 { animation-delay: 0.5s; }
                .animate-fade-in.delay-700 { animation-delay: 0.7s; }
                @keyframes fadeIn {
                    to { opacity: 1; }
                }
            `}</style>
        </div>
    );
}
