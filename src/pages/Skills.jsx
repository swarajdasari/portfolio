import React from 'react'
import {
  FaReact,  FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaJava,
  FaPython, FaGitAlt, FaGithub,
} from 'react-icons/fa'

import {
  SiMongodb, SiTailwindcss, SiVite, SiMysql, SiDjango, SiVercel
} from 'react-icons/si'

const Skills = () => {
  const skills = [
    { icon: <FaReact className="text-blue-400 text-6xl" />, name: 'React' },
    { icon: <SiDjango className="text-gray-200 text-6xl" />, name: 'Django' },
    { icon: <SiMongodb className="text-green-500 text-6xl" />, name: 'MongoDB' },
    { icon: <SiTailwindcss className="text-cyan-400 text-6xl" />, name: 'Tailwind CSS' },
    { icon: <FaJava className="text-red-500 text-6xl" />, name: 'Java' },
    { icon: <FaPython className="text-blue-300 text-6xl" />, name: 'Python' },
    { icon: <SiMysql className="text-blue-500 text-6xl" />, name: 'SQL' },
    { icon: <FaHtml5 className="text-orange-500 text-6xl" />, name: 'HTML' },
    { icon: <FaCss3Alt className="text-blue-500 text-6xl" />, name: 'CSS' },
    { icon: <FaJs className="text-yellow-400 text-6xl" />, name: 'JavaScript' },
    { icon: <FaBootstrap className="text-purple-500 text-6xl" />, name: 'Bootstrap' },
    { icon: <SiVite className="text-purple-400 text-6xl" />, name: 'Vite' },
    { icon: <FaGitAlt className="text-orange-400 text-6xl" />, name: 'Git' },
    { icon: <FaGithub className="text-white text-6xl" />, name: 'GitHub' },
    { icon: <SiVercel className="text-white text-6xl" />, name: 'vercel' },
  ]

  return (
  <section id="skills" className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-16">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-4xl font-extrabold text-center mb-12 text-lime-400 tracking-wide">
      My Skills
    </h2>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="bg-gray-800/40 backdrop-blur-md border border-lime-500/20 rounded-2xl p-6 flex flex-col items-center shadow-lg hover:shadow-lime-400/30 transition duration-300 hover:scale-105"
        >
          <div className="text-4xl mb-3 text-lime-300">{skill.icon}</div>
          <span className="text-md font-semibold text-gray-200">{skill.name}</span>
        </div>
      ))}
    </div>
  </div>
</section>

  )
}

export default Skills
