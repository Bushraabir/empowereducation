import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import Lottie from "react-lottie";  // Import Lottie component
import animationData from '../assets/contact.json'; // Import the Lottie animation JSON file

const Contact = () => {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [status, setStatus] = useState("");

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    // Fetch EmailJS credentials from environment variables
    const emailJsServerId = import.meta.env.VITE_APP_EMAILJS_SERVER_ID;
    const emailJsTemplateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
    const emailJsPublicKey = import.meta.env.VITE_APP_EMAIL_JS_PUBLIC_KEY;

    emailjs
      .send(
        emailJsServerId,
        emailJsTemplateId,
        { email: formData.email, message: formData.message },
        emailJsPublicKey
      )
      .then(() => {
        setStatus("Message sent successfully!");
        setFormData({ email: "", message: "" });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setStatus("Failed to send the message. Please try again later.");
      });
  };

  // Lottie animation options
  const lottieOptions = {
    loop: true,  // animation will loop
    autoplay: true,  // autoplay on load
    animationData: animationData,  // the animation data imported earlier
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className=" flex items-center justify-center min-h-screen contact-container bg-gradient-to-br from-[#F0E6EF] to-[#E2F3F5]">
      <motion.div
        className="flex flex-col items-center w-full max-w-5xl p-8 space-y-8 rounded-lg shadow-xl lg:flex-row lg:space-x-8 lg:space-y-0 contact-card bg-white/30 backdrop-blur-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Left section with form */}
        <div className="w-full max-w-md space-y-6">
          <h1 className="mt-26 text-3xl font-bold text-center text-[#5B5B7E]">
            Connect with <span className="text-[#5B5B7E]">EmpowerEd</span>
          </h1>
          <p className="text-center text-[#5B5B7E]">
            Have a question or idea? We'd love to hear from you! Drop us a message.
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <motion.div
              className="form-group"
              whileFocus={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-3 text-[#333] rounded-lg outline-none bg-[#E2F3F5]/70 focus:ring-2 focus:ring-[#A5C4C9]"
                required
              />
            </motion.div>
            <motion.div
              className="form-group"
              whileFocus={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full p-3 text-[#333] rounded-lg outline-none bg-[#E2F3F5]/70 focus:ring-2 focus:ring-[#A5C4C9]"
                rows="5"
                required
              ></textarea>
            </motion.div>
            <motion.button
              type="submit"
              className="w-full py-3 font-bold text-[#333] bg-[#A5C4C9] rounded-lg shadow-md hover:bg-[#89B3BA] focus:outline-none focus:ring-2 focus:ring-[#89B3BA]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
          <p className="text-center text-[#5B5B7E]">{status}</p>
        </div>

        {/* Right section with Lottie animation */}
        <div className="flex justify-center w-full max-w-md">
          <Lottie options={lottieOptions} height={250} width={250} />
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
