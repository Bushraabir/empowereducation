import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useEffect } from 'react';

const Navbar = () => {
  useEffect(() => {
    // GSAP animation for the navbar
    gsap.from('.nav-item', {
      y: -20,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: 'power3.out',
    });
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 z-50 flex flex-col items-center justify-between w-full p-5 text-white border shadow-lg header md:flex-row bg-white/30 backdrop-blur-lg border-white/20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="flex items-center justify-center w-40 h-12 mb-4 font-extrabold rounded-lg shadow-md logo-container bg-white/70 shadow-indigo-950 md:mb-0 backdrop-blur-md"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <p className="text-transparent blue-gradient_text bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
          EmpowerEd
        </p>
      </motion.div>
      <nav className="flex flex-col gap-5 text-lg font-medium md:flex-row md:gap-7">
      <NavLink
          to="/"
          className={({ isActive }) =>
            `nav-item ${isActive ? 'text-yellow-300' : 'text-white'} hover:text-yellow-300`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about_us"
          className={({ isActive }) =>
            `nav-item ${isActive ? 'text-yellow-300' : 'text-white'} hover:text-yellow-300`
          }
        >
          About Us
        </NavLink>
        <NavLink
          to="/features"
          className={({ isActive }) =>
            `nav-item ${isActive ? 'text-yellow-300' : 'text-white'} hover:text-yellow-300`
          }
        >
          Features
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `nav-item ${isActive ? 'text-yellow-300' : 'text-white'} hover:text-yellow-300`
          }
        >
          Contact
        </NavLink>
      </nav>
    </motion.header>
  );
};

export default Navbar;
