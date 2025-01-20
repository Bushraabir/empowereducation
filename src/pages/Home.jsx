import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Typical from "react-typical";
import "./Home.css";
import videoSrc from "../assets/home1.mp4";
import logoSrc from "../assets/logo.jpg";
import musicSrc from "../assets/sakura.mp3";
import { MdMusicNote, MdPauseCircleFilled } from "react-icons/md";  // Using Material-UI icons

const Home = () => {
  const navigate = useNavigate();
  const audioRef = useRef(new Audio(musicSrc)); // Audio reference
  const [isPlaying, setIsPlaying] = useState(true);

  const textContent = [
    "Welcome to EmpowerEd! 🚀",
    "Let’s turn your dreams into reality...",
    "With the support and resources you need.",
    "Here we offer the boosts you need to succeed.",
    "Your future is full of possibilities! 🌟",
    "We’re here to help you thrive. Join us to start your journey!",
    "Pursuing your dreams is tough, but you’re not alone.",
    "We have a large family of thrivers!",
    "Got questions or ready to take the next step?",
    "We’re here to guide you—reach out today!",
    "Your future is waiting! Let’s take that first step together.",
    "Ready to make your dreams a reality? Let’s go!",
  ];

  useEffect(() => {
    audioRef.current.play();
  }, []);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="home-container">
      {/* Video Background */}
      <div>
        <div className="h-fit background-overlay">
          <video autoPlay loop muted className="background-video">
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="gradient-overlay" />
      </div>

      {/* Background Music */}
      <audio ref={audioRef} autoPlay loop>
        <source src={musicSrc} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      {/* Main Overlay Content */}
      <div className="overlay">
        {/* Logo Section */}
        <div className="logo-container">
          <motion.img
            src={logoSrc}
            alt="EmpowerEd Logo"
            className="logo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
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
          <motion.div
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <span className="typing-animation">
              <Typical
                steps={textContent.flatMap((text) => [text, 3000])}
                loop={Infinity}
                wrapper="span"
              />
            </span>
          </motion.div>
          <motion.button
            className="cta-button"
            whileHover={{
              scale: 1.1,
              backgroundColor: "rgb(255, 207, 207)",
              boxShadow: "0px 4px 15px rgba(255, 207, 207, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/features")}
          >
            Discover More
          </motion.button>
        </motion.div>

        {/* Interactive Call-to-Action Section */}
        <motion.div
          className="cta-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 1 }}
        >
          <h2 className="cta-title">Start Your Journey Today!</h2>
          <p className="cta-description">
            Ready to take the next step? Join a vibrant community of learners
            and achievers. Let's make your goals a reality.
          </p>
          <motion.button
            className="mt-4 cta-secondary-button"
            whileHover={{
              scale: 1.1,
              backgroundColor: "rgb(134, 167, 136)",
              boxShadow: "0px 4px 15px rgba(134, 167, 136, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/contact")}
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>

      {/* Music Control Icon */}
      <div className="music-control-icon" onClick={toggleMusic}>
        {isPlaying ? (
          <MdPauseCircleFilled size={50} color="#FFF" />
        ) : (
          <MdMusicNote size={50} color="#FFF" />
        )}
      </div>
    </div>
  );
};

export default Home;
