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
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            EmpowerEd
          </motion.h1>
          <p className="hero-subheading">Empowering Dreams, Fueling Innovation</p>
          <motion.button
            className="cta-btn"
            whileHover={{ scale: 1.2, backgroundColor: "#ff4500" }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate("/features")}
          >
            Explore More
          </motion.button>
        </div>
        <div className="parallax-background">
          <video autoPlay loop muted className="background-video">
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="section mission-section" ref={sectionRef}>
        <div className="mission-container">
          <motion.div
            className="text-content"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="subheading">Our Mission</h2>
            <p>
              We are EmpowerEd, a nonprofit Organization committed to making education accessible for everyone. Our mission is to eliminate financial barriers by providing free resources, scholarships, project funding, and assistance with visa and passport processes. We strive to empower students to reach their full potential, regardless of their background.
            </p>
          </motion.div>
          <motion.img
            src={teamImage}
            alt="Our Mission"
            className="mission-image"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />
        </div>
      </section>

      {/* Lottie Animation Section */}
      <section className="animation-section">
        <Lottie animationData={educationAnimation} className="lottie-animation" />
        <p className="animation-text">
          EmpowerEd is all about fostering creativity and innovation. Join us in creating a brighter future for students worldwide.
        </p>
      </section>

      {/* Timeline Section */}
      <section className="section timeline-section">
        <h2 className="subheading">Our Journey</h2>
        <img src={educationAnimation} alt="Timeline" className="timeline-banner" />
        <VerticalTimeline lineColor="#1a0037">
          <VerticalTimelineElement
            date="November, 2024"
            iconStyle={{ background: '#ff6347', color: '#fff' }}
            icon={<FaGamepad />}
          >
            <h3 className="vertical-timeline-title">Founded EmpowerEd</h3>
            <p>
              EmpowerEd was founded in November 2024 by Bushra Khandoker and Muzahidul Islam Abir, driven by a vision to empower underserved communities through accessible education and innovative opportunities.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date="November, 2024"
            iconStyle={{ background: '#1abc9c', color: '#fff' }}
            icon={<FaGraduationCap />}
          >
            <h3 className="vertical-timeline-title">Campaign for Growth</h3>
            <p>
              We launched our campaign to recruit new members and potential leaders. By early December, we established an administration panel and member panel to strengthen our organizational structure.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date="18th - 24th December, 2024"
            iconStyle={{ background: '#3498db', color: '#fff' }}
            icon={<FaRocket />}
          >
            <h3 className="vertical-timeline-title">Idea Hub Contest</h3>
            <p>
              Our first contest, the Idea Hub Contest, began on December 18 and ended on December 24. This contest encouraged participants to tackle a wide range of topics:
              <ul>
                <li>STEM-related innovations</li>
                <li>Social issues and human rights</li>
                <li>Climate change and sustainability</li>
                <li>Additional interdisciplinary themes</li>
              </ul>
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date="19th December, 2024"
            iconStyle={{ background: '#e74c3c', color: '#fff' }}
            icon={<FaTrophy />}
          >
            <h3 className="vertical-timeline-title">Exclusive Membership Benefits</h3>
            <p>
              On December 19, we introduced an exclusive membership program featuring:
              <ul>
                <li>Microsoft Environment Premium</li>
                <li>Turnitin Premium</li>
                <li>Certificates & Membership Cards</li>
              </ul>
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date="24th December, 2024 - 23rd January, 2025"
            iconStyle={{ background: '#9b59b6', color: '#fff' }}
            icon={<FaTree />}
          >
            <h3 className="vertical-timeline-title">Collaboration: Life in Extreme Environments</h3>
            <p>
              A 1-Month Research Program focused on life in extreme environments. Topics included:
              <ul>
                <li>Extremophiles in extreme terrains</li>
                <li>Biosignatures and planetary habitability</li>
              </ul>
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date="27th December, 2024 - 5th January, 2025"
            iconStyle={{ background: '#2ecc71', color: '#fff' }}
            icon={<FaTree />}
          >
            <h3 className="vertical-timeline-title">Tree Planting Campaign</h3>
            <p>
              Hosted a Tree Planting Campaign promoting sustainability with exclusive rewards.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date="Late December, 2024"
            iconStyle={{ background: '#f39c12', color: '#fff' }}
            icon={<FaGlobe />}
          >
            <h3 className="vertical-timeline-title">First International Member</h3>
            <p>
              Welcomed Roua Souissi, our first international member and Cross-Cultural Ambassador.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date="Ongoing"
            iconStyle={{ background: '#9b59b6', color: '#fff' }}
            icon={<FaRocket />}
          >
            <h3 className="vertical-timeline-title">Upcoming Contests</h3>
            <p>
              Planned contests include:
              <ul>
                <li>Anti-Smoking Awareness Contest</li>
                <li>STEM Competitions</li>
              </ul>
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </section>
    </div>
  );
};

export default About_us;
