import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Footer = () => {
  const siteName = "MyPortfolio";

  return (
   <motion.footer
  aria-label="Site Footer"
  className="bg-gradient-to-b from-black via-gray-900 to-black text-gray-300 border-t border-gray-700"
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>
  <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-8">
    {/* Left Section */}
    <motion.div variants={itemVariants} className="text-center md:text-left space-y-1">
      <h2 className="text-lg font-semibold text-lime-400">
        © {new Date().getFullYear()} {siteName}
      </h2>
      <p className="text-sm text-gray-400">
        Crafted with 💙 by <span className="text-white font-semibold">Dasari Swaraj</span>
      </p>
    </motion.div>

    {/* Social Icons */}
    <motion.div
      variants={itemVariants}
      className="flex justify-center md:justify-end items-center gap-6 text-2xl"
    >
      <motion.a
        href="https://github.com/swarajdasari"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2, rotate: 2 }}
        className="relative group text-gray-300 hover:text-white transition"
        aria-label="GitHub"
      >
        <FaGithub />
        <span className="absolute -bottom-1 left-0 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300"></span>
      </motion.a>

      <motion.a
        href="https://in.linkedin.com/in/swaraj-dasari-60a647295"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2, rotate: -2 }}
        className="relative group text-blue-400 hover:text-blue-300 transition"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
        <span className="absolute -bottom-1 left-0 h-0.5 bg-blue-400 w-0 group-hover:w-full transition-all duration-300"></span>
      </motion.a>

      <motion.a
        href="mailto:kuttyswaraj@gmail.com"
        whileHover={{ scale: 1.2 }}
        className="relative group text-red-400 hover:text-red-300 transition"
        aria-label="Email"
      >
        <FaEnvelope />
        <span className="absolute -bottom-1 left-0 h-0.5 bg-red-400 w-0 group-hover:w-full transition-all duration-300"></span>
      </motion.a>
    </motion.div>
  </div>
</motion.footer>
  )
}
export default Footer;
