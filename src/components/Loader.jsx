import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import './Loader.css';

const Loader = () => {
  useEffect(() => {
    // GSAP title animation with a more complex effect
    gsap.from('.title', {
      opacity: 0,
      y: -100,
      scale: 0.5,
      duration: 2,
      ease: 'back.out(1.7)',
    });

    // GSAP loader pulse effect
    gsap.fromTo(
      '.pulse',
      { scale: 0.8 },
      {
        scale: 1.2,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: 'power1.inOut',
      }
    );
  }, []);

  return (
    <div className="loader-container">
      <motion.div
        className="loader"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="circle"
          animate={{
            rotate: ['0deg', '360deg', '0deg'],
            scale: [1, 1.2, 1],
            transition: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 2,
              ease: 'easeInOut',
            },
          }}
        />
        <motion.div
          className="circle"
          animate={{
            rotate: ['0deg', '-360deg', '0deg'],
            scale: [1, 1.2, 1],
            transition: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 2,
              ease: 'easeInOut',
              delay: 0.3,
            },
          }}
        />
        <motion.div
          className="circle pulse"
          animate={{
            scale: [1, 1.2, 1],
            transition: {
              scale: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 1.5,
                ease: 'easeInOut',
              },
            },
          }}
        />
      </motion.div>
      <h1 className="title">Loading...</h1>
    </div>
  );
};

export default Loader;
