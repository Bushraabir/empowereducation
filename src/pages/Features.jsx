import React from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaHandshake, FaLightbulb, FaRocket, FaGamepad, FaGlobe, FaUser, FaTrophy } from 'react-icons/fa';
import './features.css'; // Importing the CSS for styling

const Features = () => {
  return (
    <div className="features-container">
      {/* Hero Section */}
      <section className="hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.h1
            className="hero-heading"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            Features of EmpowerEd
          </motion.h1>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="section features-section">
        <div className="section-content">
          <motion.h2
            className="subheading"
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 120, delay: 0.2 }}
          >
            What Makes Us Different?
          </motion.h2>
          
          <div className="features-list">
            <motion.div
              className="feature-item"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <FaBook className="feature-icon" />
              <motion.h3
                className="feature-title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                Free Study Resources
              </motion.h3>
              <motion.p
                className="feature-description"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.7 }}
              >
                Access high-quality study materials and tutorials for various subjects to excel in exams or research.
              </motion.p>
            </motion.div>

            <motion.div
              className="feature-item"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <FaHandshake className="feature-icon" />
              <motion.h3
                className="feature-title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                Scholarships (Full & Partial)
              </motion.h3>
              <motion.p
                className="feature-description"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.7 }}
              >
                Offering full and partial scholarships to students worldwide, helping you focus on your studies without financial worries.
              </motion.p>
            </motion.div>

            <motion.div
              className="feature-item"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <FaLightbulb className="feature-icon" />
              <motion.h3
                className="feature-title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                Funding for Research & Projects
              </motion.h3>
              <motion.p
                className="feature-description"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.7 }}
              >
                Receive financial support for innovative research and community projects that can make a real-world impact.
              </motion.p>
            </motion.div>

            <motion.div
              className="feature-item"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <FaRocket className="feature-icon" />
              <motion.h3
                className="feature-title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                Visa & Passport Assistance
              </motion.h3>
              <motion.p
                className="feature-description"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.7 }}
              >
                Our team assists with visa applications and travel logistics so you can focus on your studies abroad.
              </motion.p>
            </motion.div>

            <motion.div
              className="feature-item"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <FaGamepad className="feature-icon" />
              <motion.h3
                className="feature-title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                Gamified Success Journey
              </motion.h3>
              <motion.p
                className="feature-description"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.7 }}
              >
                Earn badges, points, and achievements as you progress on your educational journey – it’s fun and rewarding!
              </motion.p>
            </motion.div>

            <motion.div
              className="feature-item"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <FaUser className="feature-icon" />
              <motion.h3
                className="feature-title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                Personalized Support
              </motion.h3>
              <motion.p
                className="feature-description"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.7 }}
              >
                Receive one-on-one mentorship and guidance tailored to your specific educational and personal needs.
              </motion.p>
            </motion.div>

            <motion.div
              className="feature-item"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <FaGlobe className="feature-icon" />
              <motion.h3
                className="feature-title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                Global Network & Community
              </motion.h3>
              <motion.p
                className="feature-description"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.7 }}
              >
                Be part of a global community of passionate learners, educators, and professionals from around the world.
              </motion.p>
            </motion.div>

            <motion.div
              className="feature-item"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <FaTrophy className="feature-icon" />
              <motion.h3
                className="feature-title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                Success Stories & Mentorship
              </motion.h3>
              <motion.p
                className="feature-description"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.7 }}
              >
                Learn from others’ journeys through success stories and find inspiration from mentors who have walked the path before you.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
