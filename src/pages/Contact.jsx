import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

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

  return (
    <div className="flex items-center justify-center min-h-screen contact-container bg-gradient-to-br from-[#86A788] to-[#FFFDEC]">
      <motion.div
        className="w-full max-w-lg p-8 rounded-lg shadow-xl contact-card bg-white/30 backdrop-blur-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="mb-4 text-3xl font-bold text-center text-[#FFE2E2]">
          Connect with <span className="text-[#FFE2E2]">EmpowerEd</span>
        </h1>
        <p className="mb-6 text-center text-[#FFE2E2]">
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
              className="w-full p-3 text-[#333] rounded-lg outline-none bg-[#FFFDEC]/70 focus:ring-2 focus:ring-[#FFE2E2]"
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
              className="w-full p-3 text-[#333] rounded-lg outline-none bg-[#FFFDEC]/70 focus:ring-2 focus:ring-[#FFE2E2]"
              rows="5"
              required
            ></textarea>
          </motion.div>
          <motion.button
            type="submit"
            className="w-full py-3 font-bold text-[#333] bg-[#FFE2E2] rounded-lg shadow-md hover:bg-[#FFCFCF] focus:outline-none focus:ring-2 focus:ring-[#FFCFCF]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>
        <p className="mt-4 text-center text-[#FFE2E2]">{status}</p>
      </motion.div>
    </div>
  );
};

export default Contact;
