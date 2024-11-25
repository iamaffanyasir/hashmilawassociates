import React from 'react';
import { motion } from 'framer-motion';
import './TeamValues.css';

const TeamValues = () => {
  const values = [
    {
      title: "Expertise",
      description: "Deep knowledge and experience in NGO/NPO legal matters",
      icon: "🎯"
    },
    {
      title: "Integrity",
      description: "Maintaining highest ethical standards in legal practice",
      icon: "⚖️"
    },
    {
      title: "Dedication",
      description: "Committed to client success and satisfaction",
      icon: "💪"
    },
    {
      title: "Innovation",
      description: "Modern solutions for complex legal challenges",
      icon: "💡"
    }
  ];

  return (
    <section className="team-values-section section-dark">
      <div className="team-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Values
        </motion.h2>
        <div className="values-grid">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="value-card glass-effect-dark"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamValues; 