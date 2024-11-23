import React from 'react';
import { motion } from 'framer-motion';
import './ServicesList.css';

const ServicesList = () => {
  const services = [
    {
      title: "NGO Registration",
      description: "Complete assistance in NGO registration under various acts including Societies Act, Trust Act, and Section 42 of Companies Act.",
      icon: "🏛️"
    },
    {
      title: "Legal Documentation",
      description: "Professional preparation of all required legal documents, including memorandum, articles, and bylaws.",
      icon: "📄"
    },
    {
      title: "Tax Exemption",
      description: "Expert guidance in obtaining tax exemption certificates and maintaining compliance with tax regulations.",
      icon: "💰"
    },
    {
      title: "Compliance Management",
      description: "Ongoing support in maintaining legal compliance, annual filings, and regulatory requirements.",
      icon: "✓"
    },
    {
      title: "Legal Advisory",
      description: "Strategic legal consultation for organizational growth and compliance management.",
      icon: "⚖️"
    },
    {
      title: "Governance Support",
      description: "Assistance in establishing and maintaining proper governance structures and policies.",
      icon: "👥"
    }
  ];

  return (
    <section className="services-list">
      <div className="services-list-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Expertise
        </motion.h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card glass-effect"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList; 