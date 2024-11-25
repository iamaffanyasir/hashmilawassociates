import React from 'react';
import { motion } from 'framer-motion';
import './PracticeAreas.css';

const PracticeAreas = () => {
  const processSteps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "Free consultation to understand your requirements and objectives"
    },
    {
      number: "02",
      title: "Documentation",
      description: "Preparation and verification of all necessary documents"
    },
    {
      number: "03",
      title: "Registration",
      description: "Filing and processing of registration applications"
    },
    {
      number: "04",
      title: "Compliance Setup",
      description: "Establishing compliance frameworks and governance structures"
    }
  ];

  return (
    <div className="practice-areas-page">
      <motion.section 
        className="practice-hero section-dark"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="practice-hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Practice Areas
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Specialized Legal Services for NGOs and Non-Profit Organizations
          </motion.p>
          <motion.button
            className="hero-cta-btn"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </div>
      </motion.section>

      <section className="expertise-section section-light">
        <div className="practice-container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Expertise
          </motion.h2>
          <div className="expertise-grid">
            <motion.div
              className="expertise-card glass-effect-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="expertise-icon">🏛️</div>
              <h3>NGO Registration</h3>
              <p>Complete assistance in NGO registration under various acts including Societies Act, Trust Act, and Section 8 Company registration.</p>
              <div className="expertise-features">
                <span>Society Registration</span>
                <span>Trust Registration</span>
                <span>Section 8 Company</span>
              </div>
            </motion.div>

            <motion.div
              className="expertise-card glass-effect-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="expertise-icon">📄</div>
              <h3>Legal Documentation</h3>
              <p>Expert assistance in preparing and managing all legal documents required for NGO operations and compliance.</p>
              <div className="expertise-features">
                <span>Memorandum</span>
                <span>Articles</span>
                <span>Bylaws</span>
              </div>
            </motion.div>

            <motion.div
              className="expertise-card glass-effect-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="expertise-icon">⚖️</div>
              <h3>Tax & Compliance</h3>
              <p>Comprehensive tax and compliance services including 12A, 80G registration, and annual compliance management.</p>
              <div className="expertise-features">
                <span>12A Registration</span>
                <span>80G Registration</span>
                <span>Annual Returns</span>
              </div>
            </motion.div>

            <motion.div
              className="expertise-card glass-effect-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="expertise-icon">🌐</div>
              <h3>FCRA Services</h3>
              <p>Specialized assistance in FCRA registration and compliance for organizations receiving foreign contributions.</p>
              <div className="expertise-features">
                <span>FCRA Registration</span>
                <span>Compliance</span>
                <span>Renewals</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="process-section section-dark">
        <div className="practice-container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Process
          </motion.h2>
          <div className="process-grid">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="process-card glass-effect-dark"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="step-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="consultation-section section-light">
        <div className="practice-container">
          <motion.div
            className="consultation-content glass-effect-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Need Legal Assistance?</h2>
            <p>Get expert guidance for your NGO/NPO legal requirements</p>
            <div className="cta-buttons">
              <motion.button 
                className="consultation-btn primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a Consultation
              </motion.button>
              <motion.button 
                className="consultation-btn secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Brochure
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PracticeAreas; 