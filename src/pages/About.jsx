import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const About = () => {
  return (
    <motion.section
  id="about"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  variants={containerVariants}
  className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-28 flex items-center justify-center"
>
  <div className="max-w-5xl mx-auto text-center bg-gray-800/40 border border-lime-400/20 backdrop-blur-md rounded-3xl p-10 sm:p-14 shadow-xl">
    {/* Header */}
    <motion.h2
      variants={itemVariants}
      className="text-4xl sm:text-5xl font-extrabold text-lime-400 mb-10 tracking-wide"
    >
      Who Am I?
    </motion.h2>

    {/* Description */}
    <motion.p
      variants={itemVariants}
      className="text-lg sm:text-xl text-gray-300 leading-loose"
    >
      I'm <span className="text-lime-300 font-semibold">Swaraj</span>, a full-stack web developer with a passion for building clean, powerful, and engaging user experiences. I specialize in crafting scalable apps using the <span className="text-gray-100 font-semibold">MERN Stack</span> and love bringing dynamic features to life with real-time interactions and pixel-perfect design.
    </motion.p>

    <motion.p
      variants={itemVariants}
      className="text-lg sm:text-xl text-gray-300 mt-6 leading-loose"
    >
      I create with tools like <span className="text-white font-medium">Tailwind CSS</span>, <span className="text-white font-medium">Framer Motion</span>, and <span className="text-white font-medium">Socket.IO</span>, while powering the backend with <span className="text-white font-medium">Java</span> and <span className="text-white font-medium">Python</span>. Whether it’s animations or APIs — I thrive on building seamless, full-stack solutions.
    </motion.p>

    <motion.p
      variants={itemVariants}
      className="text-lg sm:text-xl text-gray-300 mt-6 leading-loose"
    >
      Always learning. Always building. Let’s connect if you’re looking for a developer who codes with clarity, collaborates with energy, and builds with impact.
    </motion.p>
  </div>
</motion.section>

  );
};

export default About;
