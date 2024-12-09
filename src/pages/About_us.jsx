import React from 'react';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FaGamepad, FaRocket, FaTrophy, FaGraduationCap } from 'react-icons/fa';
import './about_us.css'; // Importing the separate CSS file for styling

const About_us = () => {
  return (
    <div className="about-us-container">

      {/* Hero Section with Enhanced Animations */}
      <section className="hero">
        <div className="hero-content">
          <motion.h1
            className="hero-heading"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            EmpowerEd - Unlock Your Potential
          </motion.h1>
          <motion.button
            className="cta-btn"
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => alert("Join Us!")}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Join Us Now
          </motion.button>
        </div>
        
        {/* Video Background */}
        <div className="parallax-background">
          <video autoPlay loop muted>
            <source src="./src/assets/aboutus.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div> 
      </section>

      {/* Our Goal Section with Animations */}
      <section className="section goal-section">
        <div className="section-content">
          <motion.h2
            className="subheading"
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 120, delay: 0.2 }}
          >
            Our Goal
          </motion.h2>
          <motion.p
            className="section-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Our goal is to help you unlock your full potential. Whether you’re looking for free study resources, applying for scholarships, or navigating visa applications, we’re here to guide you every step of the way.
          </motion.p>
          <div className="badge-container">
            <motion.div className="badge" whileHover={{ scale: 1.1, rotate: 10 }} whileTap={{ scale: 0.95 }}>
              <FaGraduationCap /> Scholarship Master
            </motion.div>
            <motion.div className="badge" whileHover={{ scale: 1.1, rotate: 10 }} whileTap={{ scale: 0.95 }}>
              <FaRocket /> Research Hero
            </motion.div>
            <motion.div className="badge" whileHover={{ scale: 1.1, rotate: 10 }} whileTap={{ scale: 0.95 }}>
              <FaGamepad /> Visa Navigator
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section timeline-section">
        <motion.h2
          className="subheading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Our Journey
        </motion.h2>
        <VerticalTimeline>
          <VerticalTimelineElement
            date="2019"
            iconStyle={{ background: '#ff6347', color: '#fff' }}
            icon={<FaGamepad />}
          >
            <h3 className="vertical-timeline-title">EmpowerEd Founded</h3>
            <p>EmpowerEd was created with the vision of providing accessible education for all.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date="2020"
            iconStyle={{ background: '#f1c40f', color: '#fff' }}
            icon={<FaGraduationCap />}
          >
            <h3 className="vertical-timeline-title">Scholarship Program Launched</h3>
            <p>The first set of scholarships were awarded to underprivileged students worldwide.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date="2021"
            iconStyle={{ background: '#1abc9c', color: '#fff' }}
            icon={<FaRocket />}
          >
            <h3 className="vertical-timeline-title">Gamified Learning Introduced</h3>
            <p>We introduced gamification, offering badges and points for achievements.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date="2023"
            iconStyle={{ background: '#e74c3c', color: '#fff' }}
            icon={<FaTrophy />}
          >
            <h3 className="vertical-timeline-title">Global Expansion</h3>
            <p>EmpowerEd expanded globally, helping students from over 20 countries achieve their educational dreams.</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </section>

      {/* CTA Section with Enhanced Animation */}
      <section className="cta-section">
        <motion.h2
          className="cta-heading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Join Us and Start Your Journey
        </motion.h2>
        <motion.button
          className="cta-btn"
          whileHover={{ scale: 1.1, rotate: 10 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => alert("Get Started")}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          Get Started
        </motion.button>
      </section>
    </div>
  );
};

export default About_us;
