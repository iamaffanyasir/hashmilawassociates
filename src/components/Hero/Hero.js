import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            Leading NGO Legal Consultants
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            HASHMI LAW ASSOCIATES
          </motion.h1>
          
          <motion.h2
            className="gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            ADVOCATES & LEGAL CONSULTANTS
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Expert legal solutions for NGOs and NPOs with over 15 years of specialized experience. 
            From registration to compliance, we handle every aspect of your organization's legal needs.
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button 
              className="primary-btn glass-effect"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 102, 204, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Consultation
            </motion.button>
            
            <motion.button 
              className="secondary-btn glass-effect"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Services
            </motion.button>
          </motion.div>
        </motion.div>

        {!isMobile && (
          <motion.div 
            className="hero-stats glass-effect"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
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
        )}
      </div>
    </section>
  );
};

export default Hero; 