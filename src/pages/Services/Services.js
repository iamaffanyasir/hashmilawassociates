import React from 'react';
import { motion } from 'framer-motion';
import './Services.css';

const Services = () => {
  const mainServices = [
    {
      title: "NGO Registration",
      description: "Complete assistance in NGO registration under various acts",
      icon: "🏛️",
      features: [
        "Society Registration Act",
        "Trust Registration",
        "Section 8 Company",
        "FCRA Registration",
        "State-wise Registration"
      ]
    },
    {
      title: "Legal Documentation",
      description: "Expert assistance in preparing and managing legal documents",
      icon: "📄",
      features: [
        "Memorandum of Association",
        "Articles of Association",
        "Trust Deed",
        "Bylaws Development",
        "Legal Agreements"
      ]
    },
    {
      title: "Tax & Compliance",
      description: "Comprehensive tax and compliance services",
      icon: "💰",
      features: [
        "12A Registration",
        "80G Registration",
        "FCRA Compliance",
        "Annual Returns Filing",
        "Tax Exemption"
      ]
    },
    {
      title: "Advisory Services",
      description: "Strategic legal consultation and advisory services",
      icon: "⚖️",
      features: [
        "Legal Consultation",
        "Compliance Advisory",
        "Governance Structure",
        "Policy Development",
        "Risk Management"
      ]
    }
  ];

  return (
    <div className="services-page">
      <section className="services-hero section-dark">
        <div className="hero-overlay"></div>
        <motion.div 
          className="services-hero-content"
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
            Our Services
          </motion.div>
          <h1>Comprehensive NGO Legal Solutions</h1>
          <p>Expert legal services tailored for non-profit organizations</p>
        </motion.div>
      </section>

      <section className="main-services section-light">
        <div className="services-container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-badge">What We Offer</span>
            <h2>Our Core Services</h2>
            <p>Specialized legal solutions for every stage of your NGO journey</p>
          </motion.div>

          <div className="services-grid">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                className="service-card glass-effect-light"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index * 0.1) + (idx * 0.1) }}
                    >
                      {feature}
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

      <section className="service-process section-dark">
        <div className="services-container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-badge">How We Work</span>
            <h2>Our Process</h2>
            <p>Simple and efficient process to get your NGO registered</p>
          </motion.div>

          <div className="process-steps">
            <div className="step">
              <div className="step-number">01</div>
              <h3>Initial Consultation</h3>
              <p>Free consultation to understand your requirements</p>
            </div>
            <div className="step">
              <div className="step-number">02</div>
              <h3>Documentation</h3>
              <p>Preparation of all necessary legal documents</p>
            </div>
            <div className="step">
              <div className="step-number">03</div>
              <h3>Registration</h3>
              <p>Filing and processing of registration</p>
            </div>
            <div className="step">
              <div className="step-number">04</div>
              <h3>Compliance Setup</h3>
              <p>Setting up compliance frameworks</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section section-light">
        <div className="services-container">
          <motion.div 
            className="cta-content glass-effect-light"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Get Started?</h2>
            <p>Let us help you navigate the legal landscape of non-profit organizations</p>
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
                View All Services
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;