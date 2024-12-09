import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import "./Contact.css";

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

    // Sending email via EmailJS service
    emailjs
      .send(
        emailJsServerId,        // Service ID
        emailJsTemplateId,      // Template ID
        { email: formData.email, message: formData.message }, // Data to send
        emailJsPublicKey        // Public key
      )
      .then(() => {
        setStatus("Message sent successfully!");  // Success message
        setFormData({ email: "", message: "" });  // Reset form
      })
      .catch((error) => {
        console.error("Error sending email:", error); // Log error
        setStatus("Failed to send the message. Please try again later."); // Error message
      });
  };

  return (
    <div className="empowered-contact-container">
      <motion.div
        className="empowered-contact-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="empowered-contact-heading">
          Get in Touch with <span className="empowered-highlight">EmpowerEd</span>
        </h1>
        <p className="empowered-contact-description">
          Have a query, suggestion, or need help? Drop us a message, and we’ll get back to you.
        </p>

        <form className="empowered-contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="glass-input"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Suggestion or Query"
              className="glass-textarea"
              rows="6"
              required
            ></textarea>
          </div>
          <button type="submit" className="empowered-contact-button">
            Send Message
          </button>
          <p className="empowered-contact-status">{status}</p>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
