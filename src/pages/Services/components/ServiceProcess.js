import React from 'react';
import { motion } from 'framer-motion';
import './ServiceProcess.css';

const ServiceProcess = () => {
  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "Free consultation to understand your requirements and objectives"
    },
    {
      number: "02",
      title: "Documentation",
      description: "Preparation and review of all necessary legal documents"
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
    <section className="service-process">
      <div className="process-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Process
        </motion.h2>
        <div className="process-steps">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="process-step glass-effect"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess; 