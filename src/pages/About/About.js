import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const milestones = [
    {
      year: "2008",
      title: "Firm Establishment",
      description: "Founded with a vision to provide specialized NGO legal services",
      icon: "🏛️"
    },
    {
      year: "2015",
      title: "NGO/NPO Specialization",
      description: "Developed comprehensive expertise in non-profit legal services",
      icon: "⚖️"
    },
    {
      year: "2020",
      title: "Pan-India Expansion",
      description: "Extended services across multiple jurisdictions in India",
      icon: "📈"
    }
  ];

  return (
    <div className="about-page">
      <section className="about-hero section-dark">
        <div className="hero-overlay"></div>
        <motion.div 
          className="about-hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            About Hashmi Law Associates
          </motion.div>
          <h1>Our Journey of Excellence</h1>
          <p>Leading NGO Legal Consultants with 15+ Years of Expertise</p>
        </motion.div>
      </section>

      <section className="about-intro section-light">
        <div className="about-container">
          <motion.div 
            className="intro-content glass-effect-light"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="intro-grid">
              <div className="intro-text">
                <h2>Your Trusted Partner in NGO Legal Solutions</h2>
                <p>
                  At Hashmi Law Associates, we specialize in providing comprehensive legal solutions 
                  for Non-Governmental Organizations (NGOs) and Non-Profit Organizations (NPOs). 
                  With over 15 years of dedicated experience, we have established ourselves as 
                  trusted legal advisors for non-profit organizations across India.
                </p>
                <p>
                  Our expertise spans across various aspects of NGO law, from registration to 
                  compliance management, ensuring organizations can focus on their social missions 
                  while we handle their legal requirements.
                </p>
              </div>
              <div className="intro-stats">
                <div className="stat-card">
                  <h3>500+</h3>
                  <p>NGOs Registered</p>
                </div>
                <div className="stat-card">
                  <h3>15+</h3>
                  <p>Years Experience</p>
                </div>
                <div className="stat-card">
                  <h3>98%</h3>
                  <p>Success Rate</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="milestones-section section-dark">
        <div className="about-container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-badge">Our Journey</span>
            <h2>Key Milestones</h2>
          </motion.div>

          <div className="milestones-grid">
            {milestones.map((milestone, index) => (
              <motion.div 
                key={index}
                className="milestone-card glass-effect-light"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <div className="milestone-icon">{milestone.icon}</div>
                <div className="milestone-year">{milestone.year}</div>
                <h3>{milestone.title}</h3>
                <p>{milestone.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add more sections as needed */}
    </div>
  );
};

export default About;