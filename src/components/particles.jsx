import React from 'react';
import { loadFull } from 'tsparticles'; // Import required for advanced configuration
import Particles from 'react-tsparticles';

const ParticleBackground = () => {
  const particlesInit = async (main) => {
    // Load tsparticles full package
    await loadFull(main);
  };

  const particlesOptions = {
    fullScreen: {
      enable: true, // Ensures particles cover the full viewport
      zIndex: -1, // Keeps particles behind other elements
    },
    particles: {
      number: {
        value: 150, // Number of particles
        density: {
          enable: true,
          value_area: 700, // Density area for particles
        },
      },
      color: {
        value: "#ff6b3f", // Neon orange particles
      },
      shape: {
        type: "circle", // Shape of particles
      },
      opacity: {
        value: 0.7, // Base opacity of particles
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.2, // Minimum opacity during animation
        },
      },
      size: {
        value: 4, // Size of particles
        random: true, // Randomize sizes
        anim: {
          enable: true,
          speed: 5,
          size_min: 1, // Minimum size during animation
        },
      },
      move: {
        enable: true,
        speed: 3, // Speed of particle motion
        direction: "none", // No specific direction
        random: true, // Random motion
        straight: false, // Disable straight-line motion
        out_mode: "out", // Particles move out of bounds
        bounce: false, // Disable bouncing
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "repulse", // Particles repel on hover
        },
        onclick: {
          enable: true,
          mode: "push", // Particles are added on click
        },
      },
      modes: {
        repulse: {
          distance: 100, // Distance for repulse effect
        },
        push: {
          quantity: 4, // Number of particles added on click
        },
      },
    },
    detectRetina: true, // Enable retina detection
  };

  return <Particles id="particles-js" init={particlesInit} options={particlesOptions} />;
};

export default ParticleBackground;
