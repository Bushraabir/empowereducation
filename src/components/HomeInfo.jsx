import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HomeInfo.css';

const HomeInfo = ({ currentStage }) => {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false); // Track hover state for text
  const [typedText, setTypedText] = useState(""); // State to hold typed text for the current line
  const [currentIndex, setCurrentIndex] = useState(0); // To track the index of current typing position for each line
  const [currentLineIndex, setCurrentLineIndex] = useState(0); // To track which line is being typed
  const [typing, setTyping] = useState(false); // Flag to control typing

  // Define text for each stage, using \n for line breaks
  const textContent = {
    1: "Welcome to Empower Ed! :3 \nLet’s turn your dreams into reality... \nwith the support and resources you need. ",
    2: "Here we offer you with the boosts you need to succeed.",
    3: "Your future is full of possibilities!\nWe’re here to help you thrive....\njoin us to start your game! ",
    4: "Pursuing your dreams is tough, but you don’t have to do it alone.\nWe have a large family of thrivers",
    5: "Got questions or ready to take the next step?\nWe’re here to guide you—reach out today! ",
    6: "Your future is waiting! Let’s take that first step together\nand make your dreams a reality.\nReady? "
  };

  // Fade-in effect for transitions
  useEffect(() => {
    setVisible(false);
    const timer = setTimeout(() => {
      setVisible(true);
    }, 100); // Delay for fade-in effect
    return () => clearTimeout(timer);
  }, [currentStage]);

  useEffect(() => {
    const text = textContent[currentStage] || '';
    const lines = text.split("\n");

    if (currentLineIndex < lines.length) {
      const currentLine = lines[currentLineIndex];

      const typingInterval = setInterval(() => {
        // Ensure we don't go beyond the length of the current line
        if (currentIndex < currentLine.length) {
          setTypedText((prevText) => prevText + currentLine[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        } else {
          // Once a line is fully typed, move to the next line
          clearInterval(typingInterval);
          setCurrentLineIndex((prevLineIndex) => prevLineIndex + 1); // Move to the next line
          setCurrentIndex(0); // Reset typing index for the next line
          setTypedText(""); // Reset typed text for the next line
        }
      }, 100); // Adjust typing speed (ms per character)

      return () => clearInterval(typingInterval); // Clear the interval on component unmount or update
    }
  }, [currentIndex, currentLineIndex, typing, currentStage]);

  useEffect(() => {
    // Reset all states when the stage changes
    setTypedText(""); // Reset typed text
    setCurrentIndex(0); // Reset typing index
    setCurrentLineIndex(0); // Reset line index
    setTyping(true); // Start typing on stage change
  }, [currentStage]);

  const handleTextHover = () => {
    setHovered(true);
  };

  const handleTextLeave = () => {
    setHovered(false);
  };

  const renderTextContent = () => {
    // Split the text content by newline (\n) and render each part as a separate line
    const text = textContent[currentStage] || '';
    const lines = text.split("\n");

    return (
      <>
        {lines.map((line, index) => (
          <div key={index}>
            <Link
              to={currentStage === 1 ? "/about_us" : currentStage === 2 ? "/features" : currentStage === 3 ? "/join_us" : currentStage === 4 ? "/contact" : currentStage === 5 ? "/contact" : "/join_us"}
              className={`animate-typing ${hovered ? 'hovered' : ''}`}
              onMouseEnter={handleTextHover}
              onMouseLeave={handleTextLeave}
            >
              {/* Show the text for lines that have already been typed */}
              {index < currentLineIndex ? line : 
                index === currentLineIndex ? typedText : 
                ''}
            </Link>
          </div>
        ))}
      </>
    );
  };

  return (
    <div className={`text-container ${visible ? 'fade-in' : ''}`}>
      {renderTextContent()}
    </div>
  );
};

export default HomeInfo;
