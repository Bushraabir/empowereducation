import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';

import educationAnimation from '../assets/education.json'; // Example Lottie animation
import videoSrc from '../assets/home.mp4';
import teamImage from '../assets/logo.jpg';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FaGamepad, FaRocket, FaTrophy, FaGraduationCap, FaTree, FaGlobe } from 'react-icons/fa';
import 'react-vertical-timeline-component/style.min.css';
import './About_us.css';

gsap.registerPlugin(ScrollTrigger);

const About_us = () => {
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <div className="about-us-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <motion.h1
            className="hero-heading"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          
          >
            EmpowerEd
          </motion.h1>
          <p className="hero-subheading">Empowering Dreams, Transforming Lives</p>
          <motion.button
            className="cta-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/features')}
          >
            Explore More
          </motion.button>
        </div>
        <div className="background-overlay">
          <video autoPlay loop muted className="background-video">
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section" ref={sectionRef}>
        <div className="mission-container">
          <motion.div
            className="text-content"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <h2 className="subheading">Our Mission</h2>
            <p>
              At EmpowerEd, we believe in breaking barriers to education. Our mission is to make learning accessible to everyone, regardless of their financial or social status. Join us in building a brighter future for students worldwide.
            </p>
          </motion.div>
          <motion.img
            src={teamImage}
            alt="EmpowerEd Team"
            className="mission-image"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />
        </div>
      </section>

      {/* Animation Section */}
      <section className="animation-section">
        <Lottie animationData={educationAnimation} className="lottie-animation" />
        <p className="animation-text">
          EmpowerEd fosters creativity and innovation, transforming challenges into opportunities.
        </p>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <h2 className="subheading-journey">Our Journey</h2>
        <VerticalTimeline>
          <VerticalTimelineElement
            date="November 2024"
            iconStyle={{ background: '#0078D7', color: '#fff' }}
            icon={<FaGamepad />}
          >
            <h3 className="vertical-timeline-title">Founded EmpowerEd</h3>
            <p>
              Bushra Khandoker and Muzahidul Islam Abir founded EmpowerEd, setting a vision to make education accessible for all.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date="December 2024"
            iconStyle={{ background: '#32CD32', color: '#fff' }}
            icon={<FaGraduationCap />}
          >
            <h3 className="vertical-timeline-title">Campaign for Growth</h3>
            <p>
              Launched campaigns to recruit new members and strengthen the organization.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date="18-24 December 2024"
            iconStyle={{ background: '#FF6347', color: '#fff' }}
            icon={<FaRocket />}
          >
            <h3 className="vertical-timeline-title">Idea Hub Contest</h3>
            <p>
              Participants explored innovations in STEM, human rights, and sustainability.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date="January 2025"
            iconStyle={{ background: '#8A2BE2', color: '#fff' }}
            icon={<FaTree />}
          >
            <h3 className="vertical-timeline-title">Tree Planting Campaign</h3>
            <p>
              Promoted environmental sustainability through community initiatives.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date="Ongoing"
            iconStyle={{ background: '#FFD700', color: '#fff' }}
            icon={<FaGlobe />}
          >
            <h3 className="vertical-timeline-title">Upcoming Events</h3>
            <p>
              Planning new contests and collaborations to empower the global student community.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </section>
    </div>
  );
};

export default About_us;
