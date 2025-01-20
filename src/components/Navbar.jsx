import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // GSAP animation for navbar items
    gsap.from('.nav-item', {
      y: -20,
      
      stagger: 0.15,
      duration: 1.2,
      ease: 'power3.out',
    });
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 z-50 flex flex-wrap items-center justify-between w-full p-5 border shadow-lg bg-white/30 backdrop-blur-lg border-white/20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Logo */}
      <motion.div
        className="flex items-center justify-center w-40 h-12 font-extrabold rounded-lg shadow-md bg-white/70 shadow-indigo-950 backdrop-blur-md"
        whileHover={{ scale: 1.1, rotate: 3 }}
        whileTap={{ scale: 0.95 }}
      >
        <p className="text-transparent blue-gradient_text bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
          EmpowerEd
        </p>
      </motion.div>

      {/* Hamburger Menu */}
      <motion.div
        className="block cursor-pointer md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        whileTap={{ scale: 0.9 }}
      >
        <div
          className={`w-6 h-1 bg-white rounded transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        ></div>
        <div
          className={`w-6 h-1 bg-white rounded my-1 transition-opacity duration-300 ease-in-out ${
            isMenuOpen ? 'opacity-0' : 'opacity-100'
          }`}
        ></div>
        <div
          className={`w-6 h-1 bg-white rounded transition-transform duration-300 ease-in-out ${
            isMenuOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        ></div>
      </motion.div>

      {/* Navigation Links */}
      <nav
  className={`flex flex-col items-center gap-5 w-full text-lg font-medium md:flex-row md:gap-8 md:w-auto ${
    isMenuOpen ? 'mt-5' : 'hidden'
  } md:flex`}
>
  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="relative">
    <NavLink
      to="/empowereducation"
      className={({ isActive }) =>
        `nav-item ${
          isActive ? 'text-yellow-300' : 'text-white'
        } hover:text-yellow-300 transition-all duration-300`
      }
      onClick={() => setIsMenuOpen(false)}
    >
      Home
    </NavLink>
    <motion.div
      className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-300"
      initial={{ width: 0 }}
      animate={{ width: 0 }}
      whileHover={{ width: '100%' }}
      transition={{ duration: 0.3 }}
    />
  </motion.div>
  {['About Us', 'Features', 'Contact'].map((item, index) => (
    <motion.div key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="relative">
      <NavLink
        to={`/${item.toLowerCase().replace(' ', '_')}`}
        className={({ isActive }) =>
          `nav-item ${
            isActive ? 'text-yellow-300' : 'text-white'
          } hover:text-yellow-300 transition-all duration-300`
        }
        onClick={() => setIsMenuOpen(false)}
      >
        {item}
      </NavLink>
      <motion.div
        className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-300"
        initial={{ width: 0 }}
        animate={{ width: 0 }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  ))}
</nav>

    </motion.header>
  );
};

export default Navbar;
