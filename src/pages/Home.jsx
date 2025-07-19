import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

const Home = () => {
  const go = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-gray-100 flex items-center justify-center px-6 py-24"
    >
      <div className="max-w-7xl w-full flex flex-col-reverse md:flex-row items-center gap-16">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <p className="text-xl text-gray-300">👋 Hello, I'm</p>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-lime-400">Dasari Swaraj</h1>
          <p className="text-xl text-gray-300 max-w-xl leading-relaxed">
            Full-stack web developer crafting intuitive, scalable applications with elegant UI and powerful backend solutions.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-6 text-3xl mt-4">
            <a
              href="https://in.linkedin.com/in/swaraj-dasari-60a647295"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-blue-500 hover:text-blue-400 transition duration-300" />
            </a>
            <a
              href="https://github.com/swarajdasari"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-white hover:text-gray-400 transition duration-300" />
            </a>
            <a href="mailto:kuttyswaraj@gmail.com">
              <FaEnvelope className="text-red-400 hover:text-red-300 transition duration-300" />
            </a>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
            <a
              href="/resume.pdf"
              target="_blank"
              className="bg-lime-500 hover:bg-lime-400 text-black font-semibold py-3 px-6 rounded-lg transition-all shadow-md"
            >
              📄 View Resume
            </a>
            <button
              onClick={go}
              className="border-2 border-lime-500 text-lime-400 hover:bg-lime-500 hover:text-black py-3 px-6 rounded-lg transition-all shadow-md"
            >
              👋 Let's Connect
            </button>
          </div>
        </div>

        {/* Image with effect */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-xl border-4 border-lime-400">
            <img
              src="me.jpg"
              alt="Swaraj"
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-1000 ease-in-out"
            />
            <div className="absolute inset-0 rounded-full border-4 border-lime-300 animate-pulse opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
