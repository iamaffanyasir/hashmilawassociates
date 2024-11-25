import React from 'react';
import { motion } from 'framer-motion';
import './TeamHero.css';

const TeamHero = () => {
  return (
    <section className="team-hero section-dark">
      <div className="team-hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Team
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Meet our experienced legal professionals dedicated to your success
        </motion.p>
      </div>
    </section>
  );
};

export default TeamHero; 