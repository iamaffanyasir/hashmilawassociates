import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const features = [
    {
      title: "Expert Legal Team",
      description: "Specialized team of legal professionals dedicated to NGO/NPO law",
      icon: "👥"
    },
    {
      title: "Comprehensive Service",
      description: "End-to-end support from registration to compliance management",
      icon: "⚖️"
    },
    {
      title: "Years of Experience",
      description: "Proven track record in handling complex legal matters",
      icon: "🏛️"
    }
  ];

  return (
    <section className="about" id="about">
      <div className="about-container">
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="gradient-text">About Us</h2>
          <div className="header-line"></div>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-text glass-effect"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-content">
              <h3>Leading NGO/NPO Legal Consultants</h3>
              <p>
                At Hashmi Law Associates, we specialize in providing comprehensive legal solutions 
                for Non-Governmental Organizations (NGOs) and Non-Profit Organizations (NPOs). 
                Our expertise spans across various aspects of NGO law, from registration to 
                compliance management.
              </p>
              <p>
                We understand the unique challenges faced by non-profit organizations and offer 
                tailored legal solutions to help you navigate the complex regulatory landscape 
                while maintaining full compliance with all legal requirements.
              </p>
              
              <motion.button 
                className="learn-more-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More About Us
              </motion.button>
            </div>
          </motion.div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="feature-card glass-effect"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          className="stats-container glass-effect"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="stat-item">
            <h3>500+</h3>
            <p>NGOs Registered</p>
          </div>
          <div className="stat-item">
            <h3>15+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat-item">
            <h3>98%</h3>
            <p>Success Rate</p>
          </div>
          <div className="stat-item">
            <h3>1000+</h3>
            <p>Happy Clients</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 