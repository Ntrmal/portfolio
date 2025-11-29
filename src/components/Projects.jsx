import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projectsData = [
  {
    title: "CarioNet: Automated Dental Caries Segmentation",
    tag: "Deep Learning • U-Net • Medical Imaging",
    description:
      "Developed a U-Net model to segment dental caries in panoramic radiographs with automated preprocessing and post-processing.",
    bullets: [
      "Tools: Python, TensorFlow, OpenCV, scikit-image",
      "Binary Crossentropy loss, Accuracy metric",
      "Optimized training & inference pipeline",
    ],
  },
  {
    title: "IPL Score Prediction using Machine Learning",
    tag: "Machine Learning • Regression • Sports Analytics",
    description:
      "Built a score prediction model using match features such as team composition, venue, and historical performance.",
   bullets: [
  "Applied ML algorithms and feature encoding",
  "Evaluated with MAE, MSE, RMSE",
  <a
    href="https://github.com/Ntrmal/Machine_learning_and_Deep_learning.git"
    target="_blank"
    rel="noreferrer"
    className="github-button"
  >
    🔗 View on GitHub
  </a>,
],

  },
  {
    title: "Battery Voltage & Engine Efficiency Prediction",
    tag: "Predictive Analytics • OBD Data",
    description:
      "Analyzed OBD data to understand relationships between engine parameters, fuel consumption, and battery health.",
    bullets: [
      "Identified key factors influencing engine efficiency",
      "Predicted battery life from voltage & environmental factors",
    ],
  },
];

const sliderIntervalMs = 4000; // auto-slide every 4 seconds

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-scroll logic
  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projectsData.length);
    }, sliderIntervalMs);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>

      {/* Slider only */}
      <div className="slider">
        <div className="slider-header">
          <span>Project Showcase</span>
          <div className="slider-dots">
            {projectsData.map((_, idx) => (
              <button
                key={idx}
                className={
                  "slider-dot" + (idx === activeIndex ? " slider-dot-active" : "")
                }
                onClick={() => setActiveIndex(idx)}
              />
            ))}
          </div>
        </div>

        <div className="slider-window">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className="slider-slide"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
            >
              <h3>{projectsData[activeIndex].title}</h3>
              <p className="card-tag">{projectsData[activeIndex].tag}</p>
              <p>{projectsData[activeIndex].description}</p>
              <ul className="card-list">
                {projectsData[activeIndex].bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
