import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import videoSrc from '../assets/home.mp4';
import logoSrc from '../assets/logo.jpg'; 

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Background Video */}
        <div className="parallax-background">
          <video autoPlay loop muted className="background-video">
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

      {/* Overlay Content */}
      <div className="overlay">
        {/* Logo Section */}
        <div className="logo-container">
          <motion.img
            src={logoSrc}
            alt="EmpowerEd Logo"
            className="logo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
        </div>

        {/* Hero Section */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h1 className="hero-title">EmpowerEd</h1>
          <p className="hero-subtitle">Empowering Dreams, Fueling Innovation</p>
          <motion.button
            className="cta-button"
            whileHover={{
              scale: 1.1,
              backgroundColor: "#ff4500",
              boxShadow: "0px 4px 15px rgba(255, 69, 0, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/features')}
          >
            Discover More
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
