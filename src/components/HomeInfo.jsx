import React from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const Home = () => {
  const heroAnimation = () => {
    gsap.fromTo(
      ".hero-heading",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, delay: 0.3 }
    );
    gsap.fromTo(
      ".hero-subtext",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 1.5 }
    );
  };

  React.useEffect(() => {
    heroAnimation();
  }, []);

  return (
    <div className="homepage">
      {/* Header Section */}
      <header className="header">
        <nav className="navbar">
          <div className="logo">Empower Ed</div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button className="cta-button">Join Us</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.h1 
            className="hero-heading"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            Welcome to <span className="highlight">Empower Ed!</span>
          </motion.h1>
          <motion.p
            className="hero-subtext"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Let’s turn your dreams into reality... <br />
            with the support and resources you need.
          </motion.p>
          <motion.button
            className="hero-cta"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Get Started
          </motion.button>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="about" className="intro-section">
        {[
          "Here we offer you with the boosts you need to succeed.",
          "Your future is full of possibilities! We’re here to help you thrive.... join us to start your game!",
          "Pursuing your dreams is tough, but you don’t have to do it alone. We have a large family of thrivers.",
          "Got questions or ready to take the next step? We’re here to guide you—reach out today!",
          "Your future is waiting! Let’s take that first step together and make your dreams a reality. Ready?"
        ].map((point, index) => (
          <motion.div
            key={index}
            className="intro-point"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {point}
          </motion.div>
        ))}
      </section>

      {/* Image Section */}
      <section className="image-section">
        <motion.div
          className="organization-image"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/path-to-your-organization-image.jpg"
            alt="Empower Ed Team"
          />
        </motion.div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Empower Ed. All rights reserved.
        </p>
        <div className="social-links">
          <a href="#!" className="social-icon">Facebook</a>
          <a href="#!" className="social-icon">Twitter</a>
          <a href="#!" className="social-icon">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
