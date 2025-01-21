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
      className="fixed top-0 left-0 z-50 flex items-center justify-between w-full p-5 navbar"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Hamburger Menu Icon */}
      <motion.div
        className="block cursor-pointer md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div
          className={`w-6 h-1 bg-[#59749d] rounded transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "rotate-45 translate-y-2 bg-teal-500" : ""
          }`}
        ></div>
        <div
          className={`w-6 h-1 bg-[#59749d] rounded my-1 transition-opacity duration-300 ease-in-out ${
            isMenuOpen ? "opacity-0" : "opacity-100"
          }`}
        ></div>
        <div
          className={`w-6 h-1 bg-[#59749d] rounded transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "-rotate-45 -translate-y-2 bg-teal-500" : ""
          }`}
        ></div>
      </motion.div>

      {/* Mobile Dropdown Menu */}
      <motion.div
        className={`absolute top-0 left-0 right-0 md:hidden flex flex-col items-center gap-5 w-full bg-white shadow-lg ${
          isMenuOpen ? "block" : "hidden"
        }`}
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
            className="w-6 h-6 text-[#334e4c]"
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
                `nav-item ${isActive ? "text-teal-500" : "text-[#334e4c]"} hover:text-teal-500 transition-all duration-300 ${
                  isMenuOpen ? "text-[#334e4c]" : ""
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
                `nav-item ${isActive ? "text-teal-500" : "text-[#59749d]"} hover:text-teal-500 transition-all duration-300`
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
