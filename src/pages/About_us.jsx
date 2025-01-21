import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import educationAnimation from '../assets/education.json'; 
import videoSrc from '../assets/home.mp4';
import teamImage from '../assets/team.png';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FaGamepad, FaRocket, FaTrophy, FaGraduationCap, FaTree, FaGlobe, FaUsers, FaUsersCog, FaAward, FaSmokingBan, FaGift } from 'react-icons/fa';
import 'react-vertical-timeline-component/style.min.css';
import './About_us.css';

gsap.registerPlugin(ScrollTrigger);

const About_us = () => {
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // ScrollTrigger for Subheading Animation
    gsap.fromTo(
      '.hero-subheading',
      { opacity: 0, y: 100, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        scrollTrigger: {
          trigger: '.hero',
          start: 'top 60%',
          end: 'bottom top',
          scrub: true,
          onEnter: () => gsap.to('.hero-subheading', { color: '#1e1e1e' }),
          onLeaveBack: () => gsap.to('.hero-subheading', { color: '#fff' }),
        },
      }
    );

    // ScrollTrigger for Button Animation
    gsap.fromTo(
      '.cta-btn',
      { opacity: 0, scale: 0.7 },
      {
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: '.hero',
          start: 'top 50%',
          end: 'bottom top',
          scrub: true,
        },
      }
    );

    // Interactive Timeline Animation
    gsap.utils.toArray('.vertical-timeline-element').forEach((elem, index) => {
      gsap.fromTo(
        elem,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: elem,
            start: 'top 80%',
            end: 'bottom top',
            scrub: true,
          },
        }
      );

      elem.addEventListener('mouseenter', () => {
        gsap.to(elem, {
          scale: 1.05,
          backgroundColor: '#59749d',
          color: '#334e4c',
          duration: 0.3,
        });
      });

      elem.addEventListener('mouseleave', () => {
        gsap.to(elem, {
          scale: 1,
          backgroundColor: '#fff',
          color: '#334e4c',
          duration: 0.3,
        });
      });
    });

    // Lottie Animation with Scroll-triggered Scaling and Movement
    gsap.fromTo(
      '.lottie-animation',
      { opacity: 0, y: 100, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1.2,
        scrollTrigger: {
          trigger: '.animation-section',
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: true,
        },
      }
    );

    // Interactive Mouse Move Effect with Particles
    const heroHeading = document.querySelector('.hero-heading');
    const particleContainer = document.createElement('div');
    particleContainer.classList.add('particle-container');
    document.body.appendChild(particleContainer);

    let isHovering = false;

    function createParticles(e) {
      const centerX = e.clientX;  // X-coordinate of the mouse
      const centerY = e.clientY;  // Y-coordinate of the mouse
    
      for (let i = 0; i < 1; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = `${centerX}px`;
        particle.style.top = `${centerY}px`;
        
        // Randomize the shape and size
        const randomWidth = gsap.utils.random(15, 30);
        const randomHeight = gsap.utils.random(15, 30);
        const randomBorderRadius = gsap.utils.random(20, 60);  // Randomize border radius for organic shapes
    
        particle.style.width = `${randomWidth}px`;
        particle.style.height = `${randomHeight}px`;
        particle.style.borderRadius = `${randomBorderRadius}%`;  // More variation
    
        particleContainer.appendChild(particle);
    
        gsap.to(particle, {
          x: gsap.utils.random(-100, 100),
          y: gsap.utils.random(-100, 100),
          scale: gsap.utils.random(0.5, 1.5),
          opacity: 0,
          rotation: gsap.utils.random(-90, 90),  // Adding rotation for more randomness
          duration: 2,
          ease: 'power2.out',
          onComplete: () => {
            particle.remove();
          },
        });
      }
    }
    
    // Mousemove event to emit particles from mouse position
    heroHeading.addEventListener('mousemove', (e) => {
      if (isHovering) {
        createParticles(e);  // Pass mouse event to create particles
      }
    });


// Helper function to generate random values for initial position and angle
function getRandomPosition() {
  return {
    x: Math.random() * 100 - 50, // Random X position between -50px and 50px
    y: Math.random() * 100 - 50, // Random Y position between -50px and 50px
    rotation: Math.random() * 30 - 15 // Random rotation between -15 and 15 degrees
  };
}

// Get all letter spans
const letters = document.querySelectorAll('.letter');


// Apply random positions and rotations to each letter
letters.forEach(letter => {
  const position = getRandomPosition();
  gsap.set(letter, {
    x: position.x,
    y: position.y,
    rotation: position.rotation
  });
});

// Helper function to get the scale factor
function getScaleFactor() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const scaleFactor = Math.min(width, height) / 1000;
  return Math.min(scaleFactor, 2);
}

// Handle mouseenter and mouseleave for desktop
letters.forEach(letter => {
  letter.addEventListener('mouseenter', () => {
    if (isHovering) return;
    isHovering = true;
    
    // Enlarge and center the letters
    gsap.to(letters, {
      scale: 2,  // Enlarge letters
      x: 0,      // Reset X position
      y: 0,      // Reset Y position
      rotation: 0,  // Reset rotation
      duration: 1,
      ease: 'power2.out',
    });
  });

  letter.addEventListener('mouseleave', () => {
    isHovering = false;
    // Wait for 2 seconds before resetting position
    gsap.to(letters, {
      scale: 1,  // Return to original scale
      x: (i, target) => target._gsap.x,  // Use the original X position (from random set)
      y: (i, target) => target._gsap.y,  // Use the original Y position (from random set)
      rotation: (i, target) => target._gsap.rotation,  // Use the original rotation
      delay: 2,  // Wait for 2 seconds before resetting
      duration: 1.5,
      ease: 'power2.out',
    });
  });
});

// Handle touchstart and touchend for mobile and tablet
letters.forEach(letter => {
  letter.addEventListener('touchstart', () => {
    if (isHovering) return;
    isHovering = true;
    
    // Enlarge and center the letters
    gsap.to(letters, {
      scale: 2,  // Enlarge letters
      x: 0,      // Reset X position
      y: 0,      // Reset Y position
      rotation: 0,  // Reset rotation
      duration: 1,
      ease: 'power2.out',
    });
  });

  letter.addEventListener('touchend', () => {
    isHovering = false;
    // Wait for 2 seconds before resetting position
    gsap.to(letters, {
      scale: 1,  // Return to original scale
      x: (i, target) => target._gsap.x,  // Use the original X position
      y: (i, target) => target._gsap.y,  // Use the original Y position
      rotation: (i, target) => target._gsap.rotation,  // Use the original rotation
      delay: 2,  // Wait for 2 seconds before resetting
      duration: 1.5,
      ease: 'power2.out',
    });
  });


  letter.addEventListener('touchend', () => {
    isHovering = false;
    
  
    setTimeout(() => {
      gsap.to(letters, {
        scale: 1,  // Return to original scale

        duration: 1.5,
        ease: 'power2.out',
      });
    }, 500); 
  });


  
});



  }, []);  // Empty dependency array, ensures useEffect runs once on component mount
  
  return (
    <div className="about-us-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content ">
        <h1 class="hero-heading h-full w-full">
            <span class="letter">E</span>
            <span class="letter">M</span>
            <span class="letter">P</span>
            <span class="letter">O</span>
            <span class="letter">W</span>
            <span class="letter">E</span>
            <span class="letter">R</span>
            <span class="letter">E</span>
            <span class="letter">D</span>
          </h1>
          <p className="hero-subheading">Empowering Dreams, Transforming Lives</p>
          <button 
            className="cta-btn" 
            onClick={() => navigate('/empowereducation/features')}
          >
            Explore More
          </button>
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
          <div className="text-content">
            <h2 className="subheading">Our Mission</h2>
            <p>
              EmpowerEd is a non-profit organization with a mission to make education accessible to everyone, everywhere. We believe that every student deserves the same starting line, and we’re here to make that happen—at no cost to you!
            </p>
          </div>
          <img src={teamImage} alt="EmpowerEd Team" className="mission-image" />
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
            iconStyle={{ background: '#334e4c', color: '#fff' }}
            icon={<FaGamepad />}
          >
            <h3 className="vertical-timeline-title">Founded EmpowerEd</h3>
            <p>
            EmpowerEd was founded by Bushra Khandoker and Muzahidul Islam Abir with a mission to ensure education is accessible to everyone.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date="December 2024"
            iconStyle={{ background: '#334e4c', color: '#fff' }}
            icon={<FaGraduationCap />}
          >
            <h3 className="vertical-timeline-title">Campaign for Growth</h3>
            <p>
            Initiated impactful campaigns aimed at recruiting new members and enhancing the organization’s foundation for long-term success.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date="18-24 December 2024"
            iconStyle={{ background: '#334e4c', color: '#fff' }}
            icon={<FaRocket />}
          >
            <h3 className="vertical-timeline-title">Idea Hub Contest</h3>
            <p>
            Participants showcased innovative ideas in STEM, human rights, and sustainability.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date="January 2025"
            iconStyle={{ background: '#334e4c', color: '#fff' }}
            icon={<FaTree />}
          >
            <h3 className="vertical-timeline-title">Green Future Campaign</h3>
            <p>
            Encouraged environmental sustainability through community tree-planting initiatives.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date="January 2025"
            iconStyle={{ background: '#334e4c', color: '#fff' }}
            icon={<FaUsers />}
          >
            <h3 className="vertical-timeline-title">Team Formation</h3>
            <p>
            Established a dedicated team in December to drive our mission forward and strengthen collaboration.
            </p>
          </VerticalTimelineElement>
          
          <VerticalTimelineElement
            date="January 2025"
            iconStyle={{ background: '#334e4c', color: '#fff' }}
            icon={<FaUsersCog />}
          >
            <h3 className="vertical-timeline-title">Admin Team Formation</h3>
            <p>
            Created our core admin team to lead and manage operations effectively.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="January 2025"
            iconStyle={{ background: '#334e4c', color: '#fff' }}
            icon={<FaAward  />}
          >
            <h3 className="vertical-timeline-title">Exclusive Membership</h3>
            <p>
            We introduced an exclusive membership program offering Microsoft Office, Windows OS, Turnitin Premium, and a Certificate & Membership Card to recognize your premium status. These benefits are designed to support your productivity, enhance your skills, and provide valuable tools for personal and professional growth.
            </p>
            <p>
            We encourage all members to take full advantage of these opportunities and strive for excellence in their endeavors.
            </p>
          </VerticalTimelineElement>


          <VerticalTimelineElement
            date="January 2025"
            iconStyle={{ background: '#334e4c', color: '#fff' }}
            icon={<FaGlobe  />}
          >
            <h3 className="vertical-timeline-title">First International Member</h3>
            <p>
            We proudly welcomed Roua Souissi as our first international member and Cross-Cultural Ambassador. Her global insights and diverse perspective mark a significant milestone in EmpowerEd's journey toward fostering innovation and inclusivity.
            </p>
          </VerticalTimelineElement>



          <VerticalTimelineElement
            date="January 2025"
            iconStyle={{ background: '#334e4c', color: '#fff' }}
            icon={<FaSmokingBan />}
          >
            <h3 className="vertical-timeline-title">Anti-Smoking Campaign</h3>
            <p>
            Launched a campaign to help individuals quit smoking using scientific and logical approaches. The initiative focused on evidence-based strategies and practical methods, offering alternatives to relying solely on willpower for lasting change.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date="January 2025"
            iconStyle={{ background: '#334e4c', color: '#fff' }}
            icon={<FaGift  />}
          >
            <h3 className="vertical-timeline-title">Free Subscription Services</h3>
            <p>
            We started providing free subscriptions, including Google Drive with 2TB storage, YouTube Premium, Gemini, and other educational tools, for those who truly need them but cannot afford to pay. This initiative is aimed at supporting individuals in need and further strengthening the impact of our exclusive membership program.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="January 2025"
            iconStyle={{ background: '#334e4c', color: '#fff' }}
            icon={<FaUsers  />}
          >
            <h3 className="vertical-timeline-title">Community Growth and Support</h3>
            <p>
            We have successfully reached over 28,000 members through social media, building a strong and engaged community. Additionally, we have raised small funds to support our initiatives and continue making a positive impact.
            </p>
          </VerticalTimelineElement>


          
          <VerticalTimelineElement
            date="Ongoing"
            iconStyle={{ background: '#334e4c', color: '#fff' }}
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
