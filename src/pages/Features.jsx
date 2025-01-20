import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'react-lottie'; // Import Lottie
import ParticleBackground from '../components/particles.jsx';
import './Features.css';

// Import Lottie JSON animations
import studentHubAnimation from '../assets/studenthub.json';
import mentalHealthAnimation from '../assets/mentalHealth.json'; // You can replace with your own
import fundingAnimation from '../assets/funding.json'; // Replace with your own
import visaAnimation from '../assets/visa.json'; // Replace with your own
import competitionAnimation from '../assets/competition.json'; // Replace with your own
import scholarshipsAnimation from '../assets/scholarships.json'; // Replace with your own
import globalNetworkAnimation from '../assets/globalNetwork.json'; // Replace with your own
import successStoriesAnimation from '../assets/successStories.json'; // Replace with your own

// Enhanced animation for timeline's milestones
const fadeIn = {
  initial: { opacity: 0, scale: 0.9, y: 40 },
  animate: { opacity: 1, scale: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  hover: { scale: 1.1, y: -10, transition: { duration: 0.4, ease: "easeInOut" } },
};

const Features = () => {
  // Lottie options
  const lottieOptions = (animationData) => ({
    loop: true,
    autoplay: true, // Animation will play automatically
    animationData: animationData, 
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  });

  return (
    <div className="mt-20 empowered-features-container">
      {/* Particles Background */}
      <ParticleBackground />

      {/* Features Heading Section */}
      <motion.div
        className="empowered-features-heading"
        initial={{ opacity: 0, y: -120 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1>Fueling Creativity, Sparking Change</h1>
        <p>Welcome to Empowered Ed, where ideas ignite innovation and possibilities know no bounds. Our features are more than just tools—they're pathways to creativity, growth, and transformation. Whether you're here to explore, learn, or create, every resource and collaboration is designed to empower you to dream bigger and achieve more. Dive in and discover how we're shaping a future driven by passion and purpose.</p>
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
            <Lottie options={lottieOptions(studentHubAnimation)} height={100} width={100} />
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
            <Lottie options={lottieOptions(mentalHealthAnimation)} height={100} width={100} />
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
            <Lottie options={lottieOptions(fundingAnimation)} height={100} width={100} />
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
            <Lottie options={lottieOptions(visaAnimation)} height={100} width={100} />
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
            <Lottie options={lottieOptions(competitionAnimation)} height={100} width={100} />
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
            <Lottie options={lottieOptions(scholarshipsAnimation)} height={100} width={100} />
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
            <Lottie options={lottieOptions(globalNetworkAnimation)} height={100} width={100} />
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
            <Lottie options={lottieOptions(successStoriesAnimation)} height={100} width={100} />
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
