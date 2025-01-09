import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FaGamepad, FaRocket, FaTrophy, FaGraduationCap, FaTree, FaGlobe } from 'react-icons/fa';
import './About_us.css';

const About_us = () => {
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // GSAP animation on scroll for sections
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
          <video autoPlay loop muted>
            <source src="src/assets/aboutus.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="section mission-section" ref={sectionRef}>
        <motion.h2
          className="subheading"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Our Mission
        </motion.h2>
        <motion.p
          className="align-middle section-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1.5 }}
        >
          We are EmpowerEd, a nonprofit Organization committed to making education accessible for everyone. Our mission is to eliminate financial barriers by providing free resources, scholarships, project funding, and assistance with visa and passport processes. We strive to empower students to reach their full potential, regardless of their background.
        </motion.p>
      </section>

      {/* Timeline Section */}
      <section className="section timeline-section">
        <motion.h2
          className="subheading"
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          Our Journey
        </motion.h2>
        <VerticalTimeline lineColor="#1a0037">
          {/* Timeline Event 1 */}
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

          {/* Timeline Event 2 */}
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

          {/* Timeline Event 3 */}
          <VerticalTimelineElement
            date="18th - 24th December, 2024"
            iconStyle={{ background: '#3498db', color: '#fff' }}
            icon={<FaRocket />}
          >
            <h3 className="vertical-timeline-title">Idea Hub Contest</h3>
            <p>
              Our first contest, the Idea Hub Contest, began on December 18 and ended on December 24. This contest encouraged participants to tackle a wide range of topics, including:
              <ul>
                <li>STEM-related innovations</li>
                <li>Social issues and human rights</li>
                <li>Climate change and sustainability</li>
                <li>Additional interdisciplinary themes</li>
              </ul>
            </p>
          </VerticalTimelineElement>

          {/* Timeline Event 4 */}
          <VerticalTimelineElement
            date="19th December, 2024"
            iconStyle={{ background: '#e74c3c', color: '#fff' }}
            icon={<FaTrophy />}
          >
            <h3 className="vertical-timeline-title">Exclusive Membership Benefits</h3>
            <p>
              On December 19, we introduced an exclusive membership program featuring:
              <ul>
                <li>Microsoft Environment Premium: Access to advanced productivity tools.</li>
                <li>Turnitin Premium: Advanced plagiarism detection for academic and professional writing.</li>
                <li>Certificates & Membership Cards: Recognition of premium membership.</li>
              </ul>
            </p>
          </VerticalTimelineElement>

          {/* Timeline Event 5 */}
          <VerticalTimelineElement
            date="24th December, 2024 - 23rd January, 2025"
            iconStyle={{ background: '#9b59b6', color: '#fff' }}
            icon={<FaTree />}
          >
            <h3 className="vertical-timeline-title">Collaboration: Life in Extreme Environments</h3>
            <p>
              We introduced a 1-Month Research Program focused on exploring life in extreme environments. The program, from December 24 to January 23, delved into:
              <ul>
                <li>Extremophiles in acidic springs, deep-sea vents, and icy terrains</li>
                <li>Implications for finding life on planets like Mars, Europa, and Titan</li>
                <li>Biosignatures, planetary habitability, and life adaptability</li>
              </ul>
            </p>
          </VerticalTimelineElement>

          {/* Timeline Event 6 */}
          <VerticalTimelineElement
            date="27th December, 2024 - 5th January, 2025"
            iconStyle={{ background: '#2ecc71', color: '#fff' }}
            icon={<FaTree />}
          >
            <h3 className="vertical-timeline-title">Tree Planting Campaign</h3>
            <p>
              From December 27 to January 5, we hosted a Tree Planting Campaign to promote sustainability. Participants had the chance to:
              <ul>
                <li>Win verified certificates</li>
                <li>Gain exclusive membership opportunities</li>
                <li>Contribute to a greener planet</li>
              </ul>
            </p>
          </VerticalTimelineElement>

          {/* Timeline Event 7 */}
          <VerticalTimelineElement
            date="Late December, 2024"
            iconStyle={{ background: '#f39c12', color: '#fff' }}
            icon={<FaGlobe />}
          >
            <h3 className="vertical-timeline-title">Welcoming Our First International Member</h3>
            <p>
              In late December, we proudly welcomed Roua Souissi, our first foreign member and Cross-Cultural Ambassador. Her diverse insights and global perspective bring new dimensions to EmpowerEd’s mission.
            </p>
          </VerticalTimelineElement>

          {/* Timeline Event 8 */}
          <VerticalTimelineElement
            date="Ongoing"
            iconStyle={{ background: '#9b59b6', color: '#fff' }}
            icon={<FaRocket />}
          >
            <h3 className="vertical-timeline-title">Upcoming Contests</h3>
            <p>
              Our upcoming contests include:
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
