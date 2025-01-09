import React from 'react';
import { loadFull } from 'tsparticles'; // Required for advanced configuration
import Particles from 'react-tsparticles';

const ParticleBackground = () => {
  const particlesInit = async (main) => {
    // Load tsparticles full package
    await loadFull(main);
  };

  const particlesOptions = {
    fullScreen: {
      enable: true, // Ensures particles cover the full viewport
      zIndex: -1, // Keeps particles behind all elements
    },
    particles: {
      number: {
        value: 120, // Slightly fewer particles for better performance
        density: {
          enable: true,
          value_area: 800, // Particles' area density
        },
      },
      color: {
        value: "#7afcff", // Soft neon blue for the particles
      },
      shape: {
        type: "circle", // Simple circular particles
      },
      opacity: {
        value: 0.6, // Base opacity of particles
        anim: {
          enable: true,
          speed: 2,
          opacity_min: 0.1, // Minimum opacity during animation
        },
      },
      size: {
        value: 3, // Base size of particles
        random: true, // Randomize sizes
        anim: {
          enable: true,
          speed: 4,
          size_min: 0.5, // Minimum size during animation
        },
      },
      move: {
        enable: true,
        speed: 2, // Particle movement speed
        direction: "none", // No specific direction
        random: true, // Enable random movement
        straight: false, // Disable straight-line motion
        out_mode: "out", // Particles move out of bounds
        bounce: false, // Disable bouncing
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "repulse", // Particles repel when hovered
        },
        onclick: {
          enable: true,
          mode: "bubble", // Create a "bubble" effect on click
        },
      },
      modes: {
        repulse: {
          distance: 150, // Distance for repulsion effect
          duration: 0.4,
        },
        bubble: {
          distance: 200,
          size: 6,
          duration: 0.3,
          opacity: 0.8,
        },
      },
    },
    detectRetina: true, // Enable retina detection
  };

  return <Particles id="particles-js" init={particlesInit} options={particlesOptions} />;
};

export default ParticleBackground;
