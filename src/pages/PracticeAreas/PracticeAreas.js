import React from 'react';
import { motion } from 'framer-motion';
import './PracticeAreas.css';

const PracticeAreas = () => {
  const practiceAreas = [
    {
      title: "NGO Registration",
      description: "Complete assistance in registering NGOs under various acts",
      icon: "🏛️",
      services: [
        "Society Registration",
        "Trust Registration",
        "Section 8 Company",
        "FCRA Registration"
      ]
    },
    {
      title: "Tax & Compliance",
      description: "Comprehensive tax and regulatory compliance services",
      icon: "📊",
      services: [
        "12A Registration",
        "80G Registration",
        "Annual Compliance",
        "Tax Returns Filing"
      ]
    },
    {
      title: "Legal Advisory",
      description: "Expert legal consultation for NGOs and NPOs",
      icon: "⚖️",
      services: [
        "Legal Consultation",
        "Governance Structure",
        "Policy Development",
        "Risk Assessment"
      ]
    }
  ];

  const expertise = [
    {
      title: "Specialized Knowledge",
      description: "Deep understanding of NGO/NPO legal framework",
      icon: "🎯"
    },
    {
      title: "Proven Track Record",
      description: "Successfully registered 500+ NGOs across India",
      icon: "📈"
    },
    {
      title: "End-to-End Support",
      description: "Complete assistance from registration to compliance",
      icon: "🤝"
    }
  ];

  return (
    <div className="practice-areas-page">
      <section className="practice-hero section-dark">
        <div className="hero-overlay"></div>
        <motion.div 
          className="practice-hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            Our Practice Areas
          </motion.div>
          <h1>Specialized Legal Services for NGOs</h1>
          <p>Expert legal solutions tailored for non-profit organizations</p>
        </motion.div>
      </section>

      <section className="areas-section section-light">
        <div className="practice-container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-badge">What We Do</span>
            <h2>Our Practice Areas</h2>
            <p>Comprehensive legal services for non-profit organizations</p>
          </motion.div>

          <div className="areas-grid">
            {practiceAreas.map((area, index) => (
              <motion.div
                key={index}
                className="area-card glass-effect-light"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <div className="area-icon">{area.icon}</div>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
                <ul className="services-list">
                  {area.services.map((service, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index * 0.1) + (idx * 0.1) }}
                    >
                      {service}
                    </motion.li>
                  ))}
                </ul>
                <motion.button
                  className="learn-more-btn"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 102, 204, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="expertise-section section-dark">
        <div className="practice-container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-badge">Why Choose Us</span>
            <h2>Our Expertise</h2>
            <p>What sets us apart in NGO legal services</p>
          </motion.div>

          <div className="expertise-grid">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                className="expertise-card glass-effect-dark"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="expertise-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section section-light">
        <div className="practice-container">
          <motion.div 
            className="cta-content glass-effect-light"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Get Started?</h2>
            <p>Let us help you establish and manage your NGO legally</p>
            <div className="cta-buttons">
              <motion.button 
                className="cta-btn primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Consultation
              </motion.button>
              <motion.button 
                className="cta-btn secondary"
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