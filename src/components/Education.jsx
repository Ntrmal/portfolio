import React from "react";
import { motion } from "framer-motion";

const Education = () => (
  <motion.section
    id="education"
    className="section"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5 }}
  >
    <h2 className="section-title">Education</h2>
    <div className="cards-grid">
      <div className="card">
        <h3>PG Diploma in Big Data Analytics</h3>
        <p className="card-tag">CDAC • 2025 – Present</p>
      </div>
      <div className="card">
        <h3>M.Sc. Data Science</h3>
        <p className="card-tag">Christ University, Bangalore • 2021 – 2023</p>
        <p>CGPA: 3.17 / 5</p>
      </div>
      <div className="card">
        <h3>BCA</h3>
        <p className="card-tag">St Joseph’s College, Devagiri • 2017 – 2020</p>
        <p>CGPA: 4.13 / 6</p>
      </div>
    </div>
  </motion.section>
);

export default Education;
