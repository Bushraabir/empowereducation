import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/empowereducation" },
    { name: "About Us", path: "/about_us" },
    { name: "Features", path: "/features" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 z-50 flex items-center justify-between w-full p-5 navbar glass-effect"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Logo */}
      <motion.div
        className="flex items-center justify-center w-40 h-12 font-extrabold rounded-lg logo-glass"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <p className="text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text">
          EmpowerEd
        </p>
      </motion.div>

      {/* Hamburger Menu */}
      <motion.div
        className="block cursor-pointer md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div
          className={`w-6 h-1 bg-[#5B5B7E] rounded transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "rotate-45 translate-y-2 bg-teal-400" : ""
          }`}
        ></div>
        <div
          className={`w-6 h-1 bg-[#5B5B7E] rounded my-1 transition-opacity duration-300 ease-in-out ${
            isMenuOpen ? "opacity-0" : "opacity-100"
          }`}
        ></div>
        <div
          className={`w-6 h-1 bg-[#5B5B7E] rounded transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "-rotate-45 -translate-y-2 bg-teal-400" : ""
          }`}
        ></div>
      </motion.div>

      {/* Mobile Dropdown Menu with Glassmorphism */}
      <motion.div
        className={`absolute top-0 left-0 right-0 md:hidden flex flex-col items-center gap-5 w-full bg-white shadow-lg ${
          isMenuOpen ? "block" : "hidden"
        } glass-dropdown`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -50 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{
          opacity: { duration: 0.5 },
          y: { type: "spring", stiffness: 200, damping: 20 },
          ease: "easeInOut",
        }}
      >
        {/* Close Icon */}
        <motion.div
          className="absolute cursor-pointer top-2 right-2"
          onClick={() => setIsMenuOpen(false)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-gray-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </motion.div>

        {/* Navigation Links */}
        {navLinks.map((link, index) => (
          <motion.div
            key={index}
            className="relative hover-effect"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              opacity: { duration: 0.3 },
              x: { type: "spring", stiffness: 200, damping: 25 },
              ease: "easeInOut",
            }}
          >
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `nav-item ${isActive ? "text-[#5B5B7E]" : "text-[#5B5B7E]"} hover:text-[#5B5B7E] transition-all duration-300 ${
                  isMenuOpen ? "text-[#5B5B7E]" : ""
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </NavLink>
            <motion.div
              className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-500"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Navigation Links for larger screens */}
      <motion.nav
        className="flex-row items-center hidden gap-8 md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ opacity: { duration: 0.3 } }}
      >
        {navLinks.map((link, index) => (
          <motion.div
            key={index}
            className="relative hover-effect"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              opacity: { duration: 0.3 },
              x: { type: "spring", stiffness: 200, damping: 25 },
              ease: "easeInOut",
            }}
          >
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `nav-item ${isActive ? "text-teal-500" : "text-[#5B5B7E]"} hover:text-teal-500 transition-all duration-300`
              }
            >
              {link.name}
            </NavLink>
            <motion.div
              className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-500"
              initial={{ width: 0 }}
              animate={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </motion.nav>
    </motion.header>
  );
};

export default Navbar;

