import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaBookOpen, FaMoneyBillWave, FaPlaneDeparture, FaUsers, FaHandshake, FaMapMarkedAlt, FaGamepad } from 'react-icons/fa';
import ParticleBackground from '../components/particles.jsx'; // Import the particle background component
import './Features.css';

// Animation for the timeline's milestones
const fadeIn = {
  initial: { opacity: 0, scale: 0.9, y: 50 },
  animate: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  hover: { scale: 1.1, y: -10, transition: { duration: 0.3, ease: "easeInOut" } },
};

const Features = () => {
  return (
    <div className="empowered-features-container">
      {/* Particles Background */}
      <ParticleBackground />

      <motion.div
        className="empowered-features-heading"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1>EmpowerEd: Milestones to Success</h1>
        <p>Take a step forward in your educational journey with us. Each feature is a milestone toward achieving your goals!</p>
      </motion.div>

      <div className="timeline">
        {/* Feature 1: Free Study Resources */}
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
            <h2>Free Study Resources</h2>
            <p>Unlock a treasure trove of study materials, guides, and tutorials – all free of charge!</p>
          </div>
        </motion.div>

        {/* Feature 2: Scholarships */}
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
            <h2>Scholarships (Full & Partial)</h2>
            <p>Get the support you need with full or partial scholarships designed to make your dreams come true.</p>
          </div>
        </motion.div>

        {/* Feature 3: Funding for Research */}
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
            <h2>Funding for Research & Projects</h2>
            <p>We fund innovative research and community projects to bring your creative ideas to life.</p>
          </div>
        </motion.div>

        {/* Feature 4: Visa and Passport Assistance */}
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
            <h2>Visa & Passport Assistance</h2>
            <p>Navigate the complexities of visa and passport applications with expert guidance from our team.</p>
          </div>
        </motion.div>

        {/* Feature 5: Gamified Success Journey */}
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
            <h2>Gamified Success Journey</h2>
            <p>Earn badges and rewards as you progress through milestones – learning made fun!</p>
          </div>
        </motion.div>

        {/* Feature 6: Personalized Support */}
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
            <h2>Personalized Support</h2>
            <p>Get personalized guidance from our mentors and experts, tailored just for you.</p>
          </div>
        </motion.div>

        {/* Feature 7: Global Network & Community */}
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
            <h2>Global Network & Community</h2>
            <p>Connect with a vibrant community of like-minded students and educators around the world.</p>
          </div>
        </motion.div>

        {/* Feature 8: Success Stories and Mentorship */}
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
            <h2>Success Stories & Mentorship</h2>
            <p>Learn from real success stories and get mentorship to guide you to your next victory!</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
