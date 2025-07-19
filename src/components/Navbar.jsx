import React from 'react';

const Navbar = () => {
  return (
<>
  <header className="sticky top-0 z-50 bg-black/70 backdrop-blur-md border-b border-gray-800 shadow-md">
    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      
      {/* Logo */}
      <a
        href="#home"
        className="flex items-center text-white text-2xl sm:text-3xl font-extrabold tracking-wide"
        aria-label="Swaraj Logo"
      >
        <span className="text-lime-400">Swaraj</span>
      </a>

      {/* Navigation */}
      <nav
        className="hidden md:flex items-center space-x-6 text-lg font-medium text-gray-200"
        role="navigation"
      >
        {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="relative hover:text-lime-400 transition duration-200"
          >
            {item}
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-lime-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </nav>

      {/* Mobile Menu Placeholder */}
      {/* Add hamburger menu here if needed */}
    </div>
  </header>
</>

  );
};

export default Navbar;
