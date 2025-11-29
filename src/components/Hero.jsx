import React from "react";
import { motion } from "framer-motion";




const Hero = () => {
  return (
    <header className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        <p className="hero-tag">Data Scientist • ML • Big Data</p>
        <h1>
          Hi, I'm <span>Nirmal</span>.
        </h1>
        <p className="hero-subtitle">
          Postgraduate in Data Science with hands-on experience in machine learning,
          deep learning, and big data analytics. I build data-driven solutions that turn
          raw information into real-world impact.
        </p>
       <div className="hero-buttons">
  <a href="#projects" className="btn-primary">
    View Projects
  </a>
  <a href="#contact" className="btn-secondary">
    Contact Me
  </a>
<a
  href="/resume.pdf"
  download
  className="btn-secondary btn-resume"
>
  <span className="btn-icon">📄</span>
  <span>Download Resume</span>
</a>



</div>


        <div className="hero-meta">
          <span>Bangalore, India</span> • <span>Open to Opportunities</span>
        </div>
      </motion.div>

      <motion.div
        className="hero-card"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <h3>Current Focus</h3>
        <ul>
          <li>Deep Learning for Medical Imaging (U-Net)</li>
          <li>Predictive Modeling & Forecasting</li>
          <li>Big Data Analytics (Hadoop, Spark, Kafka)</li>
        </ul>
      </motion.div>
    </header>
  );
};

export default Hero;
