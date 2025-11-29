import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("Portfolio Contact - " + form.name);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );

    // This opens your email app with the message pre-filled
    window.location.href = `mailto:nirmalthambi001@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <motion.section
      id="contact"
      className="section section-contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="section-title">Contact</h2>
      <p className="section-text">
        If you’d like to collaborate, discuss a role, or explore a project, feel free to reach out.
      </p>

      {/* Existing contact cards */}
      <div className="contact-grid">
        <div className="contact-item">
          <span className="contact-label">Email</span>
          <a href="mailto:nirmalthambi001@gmail.com">nirmalthambi001@gmail.com</a>
        </div>
        <div className="contact-item">
  <span className="contact-label">Phone</span>
  <div className="contact-multi">
    <a href="tel:+917994870550">+91 7994870550</a>
    <a href="tel:+393533782443">+39 3533782443</a>
  </div>
</div>


        <div className="contact-item">
          <span className="contact-label">LinkedIn</span>
          <a
            href="https://www.linkedin.com/in/nirmal-t-88782223a"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/nirmal-t-88782223a
          </a>
        </div>
        <div className="contact-item">
          <span className="contact-label">GitHub</span>
          <a href="https://github.com/Ntrmal" target="_blank" rel="noreferrer">
            github.com/Ntrmal
          </a>
        </div>
      </div>

      {/* Contact form */}
      <div className="contact-form-wrapper">
        <h3>Send me a message</h3>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              Name
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="form-row">
            <label>
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="form-row">
            <label>
              Message
              <textarea
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <button type="submit" className="btn-primary form-submit-btn">
            ✉ Send Message
          </button>
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
