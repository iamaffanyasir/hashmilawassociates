import React from 'react';
import { motion } from 'framer-motion';
import TeamHero from './components/TeamHero';
import TeamMembers from './components/TeamMembers';
import TeamValues from './components/TeamValues';
import './Team.css';

const Team = () => {
  return (
    <div className="team-page">
      <TeamHero />
      <TeamMembers />
      <TeamValues />
      
      <section className="join-team-section section-light">
        <div className="team-container">
          <motion.div 
            className="join-team-content glass-effect-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Join Our Team</h2>
            <p>
              We're always looking for talented professionals to join our team. 
              If you're passionate about law and want to make a difference, 
              we'd love to hear from you.
            </p>
            <motion.button 
              className="join-team-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Opportunities
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team; 