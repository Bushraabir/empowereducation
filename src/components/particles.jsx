import React from 'react';
import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';

const ParticleBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesOptions = {
    fullScreen: {
      enable: true,
      zIndex: -1,
    },
    particles: {
      number: {
        value: 400, 
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#86A788", // Soft muted green for a natural feel
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.7,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.4,
        },
      },
      size: {
        value: 4,
        random: true,
        anim: {
          enable: true,
          speed: 5,
          size_min: 2,
        },
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "bubble",
        },
      },
      modes: {
        repulse: {
          distance: 220, // More subtle repulsion
          duration: 0.8, // Slower and more natural motion
          easing: "ease-out", // Smooth ease-out effect
        },
        bubble: {
          distance: 220,
          size: 12, // Slightly larger bubble effect
          duration: 0.4,
          opacity: 0.8,
        },
      },
    },
    detectRetina: true,
  };

  return <Particles id="particles-js" init={particlesInit} options={particlesOptions} />;
};

export default ParticleBackground;
