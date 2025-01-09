import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaBookOpen, FaMoneyBillWave, FaPlaneDeparture, FaUsers, FaHandshake, FaMapMarkedAlt, FaGamepad } from 'react-icons/fa';
import ParticleBackground from '../components/particles.jsx';
import './Features.css';

// Improved animation for timeline's milestones
const fadeIn = {
  initial: { opacity: 0, scale: 0.95, y: 40 },
  animate: { opacity: 1, scale: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  hover: { scale: 1.05, y: -8, transition: { duration: 0.3, ease: "easeInOut" } },
};

const Features = () => {
  return (
    <div className="empowered-features-container">
      {/* Particles Background */}
      <ParticleBackground />

      {/* Features Heading Section */}
      <motion.div
        className="empowered-features-heading"
        initial={{ opacity: 0, y: -120 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1>Global Collaboration</h1>
        <p>Bringing students worldwide together to share knowledge, innovate, and solve real-world problems through events and collaboration.</p>
      </motion.div>

      {/* Timeline for Features */}
      <div className="timeline">
        <motion.div
          className="timeline-step"
          variants={fadeIn}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <div className="timeline-badge">
            <FaBookOpen />
          </div>
          <div className="timeline-content">
            <h2>Student Hub</h2>
            <p>A safe space for students to connect, share resources, and access mentorship opportunities to foster personal and academic growth.</p>
          </div>
        </motion.div>

        <motion.div
          className="timeline-step"
          variants={fadeIn}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <div className="timeline-badge">
            <FaTrophy />
          </div>
          <div className="timeline-content">
            <h2>Mental Health Support</h2>
            <p>AI-driven tools to guide students through mental health challenges, offering coping strategies and emotional support to promote well-being.</p>
          </div>
        </motion.div>

        <motion.div
          className="timeline-step"
          variants={fadeIn}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <div className="timeline-badge">
            <FaMoneyBillWave />
          </div>
          <div className="timeline-content">
            <h2>Funding for Research</h2>
            <p>Financial support for innovative research projects, empowering students to explore, experiment, and contribute to academic advancements.</p>
          </div>
        </motion.div>

        <motion.div
          className="timeline-step"
          variants={fadeIn}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <div className="timeline-badge">
            <FaPlaneDeparture />
          </div>
          <div className="timeline-content">
            <h2>Visa and Passport Assistance</h2>
            <p>Comprehensive support to help students navigate visa and passport applications, ensuring a smooth journey to studying abroad.</p>
          </div>
        </motion.div>

        <motion.div
          className="timeline-step"
          variants={fadeIn}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <div className="timeline-badge">
            <FaGamepad />
          </div>
          <div className="timeline-content">
            <h2>Competition Organization</h2>
            <p>We organize creative competitions to help students showcase their skills, innovate, and win recognition in various fields.</p>
          </div>
        </motion.div>

        <motion.div
          className="timeline-step"
          variants={fadeIn}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <div className="timeline-badge">
            <FaHandshake />
          </div>
          <div className="timeline-content">
            <h2>Scholarships</h2>
            <p>Offering full and partial scholarships to both national and international students, helping ease the financial burden of education.</p>
          </div>
        </motion.div>

        <motion.div
          className="timeline-step"
          variants={fadeIn}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <div className="timeline-badge">
            <FaUsers />
          </div>
          <div className="timeline-content">
            <h2>Global Network</h2>
            <p>Connecting students from across the world to foster collaboration, mentorship, and community growth.</p>
          </div>
        </motion.div>

        <motion.div
          className="timeline-step"
          variants={fadeIn}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <div className="timeline-badge">
            <FaMapMarkedAlt />
          </div>
          <div className="timeline-content">
            <h2>Success Stories</h2>
            <p>Highlighting inspiring stories of students who have overcome obstacles and achieved success through our platform’s support.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
