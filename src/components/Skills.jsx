import React from "react";
import { motion } from "framer-motion";

const Skills = () => (
  <motion.section
    id="skills"
    className="section"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5 }}
  >
    <h2 className="section-title">Skills</h2>
    <div className="skills-grid">
      <div>
        <h3>Programming</h3>
        <div className="badge-row">
          <span className="badge">Python</span>
          <span className="badge">R</span>
          <span className="badge">SQL</span>
          <span className="badge">Java</span>
          <span className="badge">MongoDB</span>
        </div>
      </div>
      <div>
        <h3>Data Science & ML</h3>
        <div className="badge-row">
          <span className="badge">Machine Learning</span>
          <span className="badge">Predictive Analytics</span>
          <span className="badge">Statistical Modeling</span>
          <span className="badge">Forecasting</span>
        </div>
      </div>
      <div>
        <h3>Deep Learning & Big Data</h3>
        <div className="badge-row">
          <span className="badge">TensorFlow</span>
          <span className="badge">PyTorch</span>
          <span className="badge">Hadoop</span>
          <span className="badge">Spark</span>
          <span className="badge">Kafka</span>
        </div>
      </div>
      <div>
        <h3>Visualization & Cloud</h3>
        <div className="badge-row">
          <span className="badge">Tableau</span>
          <span className="badge">Plotly Dash</span>
          <span className="badge">AWS</span>
          <span className="badge">Azure</span>
        </div>
      </div>
      <div>
        <h3>Soft Skills</h3>
        <div className="badge-row">
          <span className="badge">Communication</span>
          <span className="badge">Problem-Solving</span>
          <span className="badge">Adaptability</span>
          <span className="badge">Result-Oriented</span>
        </div>
      </div>
    </div>
  </motion.section>
);

export default Skills;
