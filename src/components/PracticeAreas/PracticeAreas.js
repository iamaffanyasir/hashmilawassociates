import React from 'react';
import { motion } from 'framer-motion';
import './PracticeAreas.css';

const PracticeAreas = () => {
  const practices = [
    {
      title: "NGO Registration",
      description: "Complete assistance in NGO registration under various acts including Societies Act, Trust Act, and Section 42 of Companies Act.",
      icon: "🏛️",
      features: [
        "Society Registration",
        "Trust Registration",
        "Section 42 Company",
        "International NGO Registration"
      ]
    },
    {
      title: "Legal Documentation",
      description: "Expert assistance in preparing and managing all legal documents required for NGO operations.",
      icon: "📄",
      features: [
        "Memorandum Preparation",
        "Articles of Association",
        "Bylaws Development",
        "Legal Agreements"
      ]
    },
    {
      title: "Tax & Compliance",
      description: "Comprehensive tax and compliance services for non-profit organizations.",
      icon: "⚖️",
      features: [
        "Tax Exemption",
        "Annual Compliance",
        "Regulatory Filings",
        "Audit Support"
      ]
    },
    {
      title: "Legal Advisory",
      description: "Strategic legal consultation and advisory services for NGOs and NPOs.",
      icon: "💼",
      features: [
        "Legal Consultation",
        "Compliance Advisory",
        "Governance Support",
        "Risk Management"
      ]
    }
  ];

  return (
    <section className="practice-areas" id="practice-areas">
      <div className="practice-container">
        <motion.div 
          className="practice-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Our Practice Areas</h2>
          <p>Specialized Legal Services for NGOs and Non-Profit Organizations</p>
        </motion.div>

        <div className="practices-grid">
          {practices.map((practice, index) => (
            <motion.div
              key={index}
              className={`practice-card ${
                index % 2 === 0 ? 'glass-effect-dark' : 'glass-effect-light'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="practice-icon">{practice.icon}</div>
              <h3>{practice.title}</h3>
              <p>{practice.description}</p>
              <ul className="features-list">
                {practice.features.map((feature, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index * 0.1) + (idx * 0.1) }}
                  >
                    <span className="feature-bullet">•</span>
                    {feature}
                  </motion.li>
                ))}
              </ul>
              <motion.button 
                className="learn-more-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
                <span className="arrow">→</span>
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="practice-cta glass-effect"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3>Need Legal Assistance?</h3>
          <p>Get expert guidance for your NGO/NPO legal requirements</p>
          <motion.button 
            className="consultation-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default PracticeAreas; 