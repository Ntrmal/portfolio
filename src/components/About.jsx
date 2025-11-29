import React from "react";
import { motion } from "framer-motion";

const About = () => (
  <motion.section
    id="about"
    className="section"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.5 }}
  >
    <h2 className="section-title">About</h2>
    <p className="section-text">
      I’m a Data Scientist with a PG Diploma in Big Data and an M.Sc. in Data Science.
      I enjoy exploring datasets, discovering patterns, and transforming them into
      actionable insights. My work spans predictive modeling, deep learning, and dashboard
      development, with a focus on scalable, production-ready solutions.
    </p>
  </motion.section>
);

export default About;
