import React from "react";
import { motion } from "framer-motion";

const Experience = () => (
  <motion.section
    id="experience"
    className="section"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5 }}
  >
    <h2 className="section-title">Experience</h2>

    <div className="timeline">
      <div className="timeline-item">
        <div className="timeline-marker" />
        <div className="timeline-content">
          <h3>Data Science Intern – Entri Elevate</h3>
          <p className="timeline-period">May 2024 – July 2024 • Ernakulam, India</p>
          <ul>
            <li>Designed predictive models for IPL match outcomes using regression and ensemble methods.</li>
            <li>Performed data preprocessing, feature engineering, and categorical encoding.</li>
            <li>Built visualizations to analyze match statistics and present insights.</li>
          </ul>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-marker" />
        <div className="timeline-content">
          <h3>Research & Development Intern – Dyocense</h3>
          <p className="timeline-period">Jan 2023 – June 2023 • Bangalore, India</p>
          <ul>
            <li>Cleaned and validated datasets to support a robust data management platform.</li>
            <li>Identified trends and correlations through advanced data analysis and visualization.</li>
            <li>Developed dashboards and deployed predictive analytics models for decision support.</li>
          </ul>
        </div>
      </div>
    </div>
  </motion.section>
);

export default Experience;
