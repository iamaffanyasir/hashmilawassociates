import React from 'react';
import { motion } from 'framer-motion';
import ServiceHero from './components/ServiceHero';
import './Services.css';

const Services = () => {
  const services = [
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

  const benefits = [
    {
      title: "Expert Guidance",
      description: "Professional legal support from experienced consultants",
      icon: "👥"
    },
    {
      title: "Timely Service",
      description: "Quick and efficient processing of all registrations",
      icon: "⏱️"
    },
    {
      title: "Complete Support",
      description: "End-to-end assistance in documentation and compliance",
      icon: "✅"
    },
    {
      title: "Cost Effective",
      description: "Transparent pricing and value for money services",
      icon: "💎"
    }
  ];

  return (
    <div className="services-page">
      <ServiceHero />

      <section className="services-section section-light">
        <div className="services-container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card glass-effect-light"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="features-list">
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
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="benefits-section section-dark">
        <div className="services-container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why Choose Us
          </motion.h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="benefit-card glass-effect-dark"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="consultation-section section-light">
        <div className="services-container">
          <motion.div
            className="consultation-content glass-effect-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Get Started?</h2>
            <p>Let us help you navigate the legal landscape of non-profit organizations</p>
            <div className="cta-buttons">
              <motion.button 
                className="consultation-btn primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Consultation
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

export default Services; 