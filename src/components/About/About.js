import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const HomeAbout = () => {
  const features = [
    {
      title: "Expert Legal Team",
      description: "Specialized team with over 15 years of experience in NGO/NPO law",
      icon: "👨‍⚖️",
      color: "#0066cc"
    },
    {
      title: "Comprehensive Service",
      description: "End-to-end support from registration to compliance management",
      icon: "🔄",
      color: "#10B981"
    },
    {
      title: "Proven Track Record",
      description: "Successfully registered 500+ NGOs with 98% success rate",
      icon: "📈",
      color: "#F59E0B"
    }
  ];

  return (
    <section className="home-about" id="about">
      <div className="about-container">
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="section-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            About Us
          </motion.span>
          <h2>Leading NGO Legal Consultants in India</h2>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-text glass-effect-light"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-content">
              <h3>Your Trusted Partner in NGO Legal Solutions</h3>
              <p>
                At Hashmi Law Associates, we specialize in providing comprehensive legal solutions 
                for Non-Governmental Organizations (NGOs) and Non-Profit Organizations (NPOs). 
                Our expertise spans across various aspects of NGO law, from registration to 
                compliance management.
              </p>
              <p>
                With a deep understanding of the legal landscape and regulatory requirements, 
                we ensure smooth establishment and operation of your organization while maintaining 
                full compliance with all legal mandates.
              </p>
              
              <div className="about-highlights">
                <div className="highlight-item">
                  <span className="highlight-icon">✓</span>
                  <span>Expert Legal Guidance</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">✓</span>
                  <span>Quick Registration Process</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">✓</span>
                  <span>Complete Documentation Support</span>
                </div>
              </div>

              <motion.button 
                className="learn-more-btn"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 102, 204, 0.3)" }}
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
                className="feature-card glass-effect-light"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ 
                  y: -5, 
                  boxShadow: `0 10px 30px rgba(0, 102, 204, 0.2)`,
                  transition: { duration: 0.2 } 
                }}
              >
                <div className="feature-icon" style={{ color: feature.color }}>
                  {feature.icon}
                </div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          className="stats-container glass-effect-light"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div 
            className="stat-item"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <h3>500+</h3>
            <p>NGOs Registered</p>
          </motion.div>
          <motion.div 
            className="stat-item"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <h3>15+</h3>
            <p>Years Experience</p>
          </motion.div>
          <motion.div 
            className="stat-item"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <h3>98%</h3>
            <p>Success Rate</p>
          </motion.div>
          <motion.div 
            className="stat-item"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <h3>1000+</h3>
            <p>Happy Clients</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeAbout; 