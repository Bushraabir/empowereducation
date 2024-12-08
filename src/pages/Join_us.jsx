import React from 'react';
import { FiUser } from 'react-icons/fi';
import { IoMailOutline } from 'react-icons/io5';
import { FaLock } from 'react-icons/fa';

// Importing the CSS
import './Join_us.css';

const Join_us = () => {
  return (
    <div className="relative h-screen flex items-center justify-center">
      {/* Video Background with Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full">
        <video
          src="src/assets/joinus.mp4" // Replace with your actual path
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        ></video>
        
        {/* Gradient Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent opacity-70 z-10"></div>
      </div>

      {/* Glass Effect Container */}
      <div className="relative z-20 p-6 w-96 bg-white bg-opacity-20 rounded-xl backdrop-blur-lg shadow-2xl">
        <h2 className="text-4xl text-center text-yellow-400 mb-6 glowing-text">Register</h2>
        <form action="" className="space-y-6">
          {/* Username Input */}
          <div className="flex items-center border-b-4 border-yellow-400 py-2 glowing-border">
            <input
              type="text"
              placeholder="Username"
              className="bg-transparent outline-none text-white w-full text-xl placeholder-yellow-200 focus:ring-0 focus:border-yellow-500 transition-all"
            />
            <FiUser className="text-yellow-400 text-2xl ml-2 transition-transform transform hover:scale-125 glowing-icon" />
          </div>

          {/* Email Input */}
          <div className="flex items-center border-b-4 border-yellow-400 py-2 glowing-border">
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent outline-none text-white w-full text-xl placeholder-yellow-200 focus:ring-0 focus:border-yellow-500 transition-all"
            />
            <IoMailOutline className="text-yellow-400 text-2xl ml-2 transition-transform transform hover:scale-125 glowing-icon" />
          </div>

          {/* Password Input */}
          <div className="flex items-center border-b-4 border-yellow-400 py-2 glowing-border">
            <input
              type="password"
              placeholder="Password"
              className="bg-transparent outline-none text-white w-full text-xl placeholder-yellow-200 focus:ring-0 focus:border-yellow-500 transition-all"
            />
            <FaLock className="text-yellow-400 text-2xl ml-2 transition-transform transform hover:scale-125 glowing-icon" />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-3 mt-6 bg-yellow-500 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-yellow-600 transition-all transform hover:scale-105 glowing-btn"
          >
            Register
          </button>

          {/* Login Link */}
          <div className="mt-4 text-center">
            <span className="text-yellow-100">
              Already a member of our team?{' '}
              <span className="text-yellow-300 cursor-pointer hover:underline glowing-text">Login</span>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Join_us;
