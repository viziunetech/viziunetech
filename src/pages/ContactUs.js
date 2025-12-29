export default function ContactUs() {
  return (
    <section id="contact" className="w-full bg-gradient-to-br from-[#181c2f] via-[#232526] to-[#1a2980] py-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-500 bg-clip-text text-transparent mb-2 tracking-wide drop-shadow-lg">
            Contact Us
          </h2>
          <p className="mt-4 text-gray-200 max-w-2xl mx-auto text-base md:text-lg">
            Have a project in mind or want to collaborate? Send us a message and we'll get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <form
            className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl p-8 space-y-5 flex flex-col"
            onSubmit={(e) => {
              e.preventDefault()
              alert("Form submitted!")
            }}
          >
            <div>
              <label className="block text-sm font-semibold text-cyan-300 mb-1">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="mt-1 block w-full bg-[#181c2f]/60 border border-cyan-400/30 rounded-lg p-3 text-cyan-100 focus:ring-cyan-400 focus:border-cyan-400 outline-none transition"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-cyan-300 mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-1 block w-full bg-[#181c2f]/60 border border-cyan-400/30 rounded-lg p-3 text-cyan-100 focus:ring-cyan-400 focus:border-cyan-400 outline-none transition"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-cyan-300 mb-1">Message</label>
              <textarea
                placeholder="Your message..."
                rows={4}
                className="mt-1 block w-full bg-[#181c2f]/60 border border-cyan-400/30 rounded-lg p-3 text-cyan-100 focus:ring-cyan-400 focus:border-cyan-400 outline-none transition"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 rounded-full font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-[#181c2f] shadow-md hover:from-fuchsia-500 hover:to-cyan-400 transition-all text-lg mt-2"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-6 flex flex-col justify-center">
            <div>
              <h3 className="text-lg font-bold text-cyan-300 mb-2">Our Office</h3>
              <p className="text-cyan-100 text-sm">
                ViziuneTech<br />
                123 Tech Street<br />
                Bangalore, India
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-cyan-300 mb-2">Email</h3>
              <p className="text-cyan-100 text-sm">
                <a href="mailto:contact@viziunetech.com" className="hover:text-fuchsia-400 transition">
                  contact@viziunetech.com
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-cyan-300 mb-2">Phone</h3>
              <p className="text-cyan-100 text-sm">
                <a href="tel:+919876543210" className="hover:text-fuchsia-400 transition">
                  +91 98765 43210
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-cyan-300 mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-fuchsia-400 transition"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20c7.547 0 11.675-6.155 11.675-11.49 0-.175 0-.349-.012-.522A8.18 8.18 0 0022 5.92a8.273 8.273 0 01-2.357.637 4.077 4.077 0 001.804-2.241 8.16 8.16 0 01-2.605.982 4.104 4.104 0 00-6.993 3.743 11.635 11.635 0 01-8.457-4.287 4.093 4.093 0 001.27 5.473A4.073 4.073 0 012 9.713v.052a4.105 4.105 0 003.292 4.02 4.1 4.1 0 01-1.852.07 4.107 4.107 0 003.834 2.847 8.233 8.233 0 01-5.096 1.76A8.32 8.32 0 012 18.407 11.616 11.616 0 008.29 20" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-fuchsia-400 transition"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zm-8 0h4v12H8V8zm2-6a2 2 0 11-.001 3.999A2 2 0 0110 2z" />
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-fuchsia-400 transition"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.99H7.898v-2.889h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.462h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.889h-2.33v6.99C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
