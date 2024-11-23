import React from 'react';
import { motion } from 'framer-motion';
import './ServiceHero.css';

const ServiceHero = () => {
  return (
    <section className="service-hero">
      <div className="service-hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Legal Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Comprehensive NGO/NPO Legal Solutions & Registration Services
        </motion.p>
      </div>
    </section>
  );
};

export default ServiceHero; 