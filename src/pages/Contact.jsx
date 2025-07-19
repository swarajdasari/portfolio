import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaFileAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { motion, useInView } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Contact() {
  const formRef = useRef();
  const sectionRef = useRef();
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_3du3hec",
        "template_8hzzewl",
        formRef.current,
        "zZJhy6aWQqrOWbjk4"
      )
      .then(() => {
        setMessageSent(true);
        formRef.current.reset();
        setTimeout(() => setMessageSent(false), 5000);
      })
      .catch((error) => console.error("EmailJS Error:", error));
  };

  return (
   <section
  id="contact"
  ref={sectionRef}
  className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-4 sm:px-8 md:px-14 lg:px-24 xl:px-36"
>
  <motion.div
    variants={containerVariants}
    initial="hidden"
    animate={isInView ? "visible" : "hidden"}
    className="max-w-7xl mx-auto"
  >
    {/* Header */}
    <motion.div variants={itemVariants} className="text-center mb-16">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-lime-400 tracking-wide mb-4">
        Let’s Connect
      </h1>
      <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
        I’m open to freelance work, exciting projects, or just chatting over ideas. Drop me a message — I’ll get back soon!
      </p>
    </motion.div>

    {/* Grid Layout */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* Contact Form */}
      <motion.div
        variants={itemVariants}
        className="bg-gray-800/40 border border-lime-500/20 backdrop-blur-xl rounded-3xl p-8 shadow-2xl"
      >
        <h2 className="text-2xl font-semibold mb-6 text-lime-300">Send a Message</h2>
        <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-5">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="bg-transparent border border-lime-400 text-white placeholder-lime-400 rounded-lg p-3 focus:ring-2 focus:ring-lime-500 outline-none"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="bg-transparent border border-lime-400 text-white placeholder-lime-400 rounded-lg p-3 focus:ring-2 focus:ring-lime-500 outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="bg-transparent border border-lime-400 text-white placeholder-lime-400 rounded-lg p-3 focus:ring-2 focus:ring-lime-500 outline-none"
          />
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-lime-500 hover:bg-lime-600 transition-all text-black font-semibold py-3 px-6 rounded-lg shadow-md"
          >
            <FaPaperPlane /> Send Message
          </button>
          {messageSent && (
            <p className="text-green-400 text-sm mt-2">✅ Message sent successfully!</p>
          )}
        </form>
      </motion.div>

      {/* Social + Call to Collaborate */}
      <motion.div variants={itemVariants} className="flex flex-col gap-8">
        {/* Social Links */}
        <div className="bg-gray-800/40 border border-lime-500/20 backdrop-blur-xl rounded-3xl p-8 shadow-2xl">
          <h2 className="text-2xl font-semibold mb-6 text-lime-300">Social Links</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <a
              href="mailto:youremail@example.com"
              className="flex flex-col items-center justify-center bg-lime-600 hover:bg-lime-500 text-black rounded-xl py-4 transition-all"
            >
              <FaEnvelope className="text-2xl mb-1" />
              <span className="text-sm font-medium">Email</span>
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center bg-gray-900 hover:bg-gray-700 text-white rounded-xl py-4 transition-all"
            >
              <FaGithub className="text-2xl mb-1" />
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center bg-blue-600 hover:bg-blue-500 text-white rounded-xl py-4 transition-all"
            >
              <FaLinkedin className="text-2xl mb-1" />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            <a
              href="/your-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center bg-purple-600 hover:bg-purple-500 text-white rounded-xl py-4 transition-all"
            >
              <FaFileAlt className="text-2xl mb-1" />
              <span className="text-sm font-medium">Resume</span>
            </a>
          </div>
        </div>

        {/* Collaborate Card */}
        <div className="bg-gradient-to-r from-lime-600 via-lime-500 to-lime-600 text-black rounded-3xl p-6 shadow-2xl">
          <h2 className="text-xl font-bold mb-3">Let’s Build Something</h2>
          <p className="text-sm leading-relaxed">
            I’m always excited about working on meaningful projects or sharing creative ideas. Whether it's a startup, website, or freelance work — let’s make it happen!
          </p>
        </div>
      </motion.div>
    </div>
  </motion.div>
</section>

  );
}
