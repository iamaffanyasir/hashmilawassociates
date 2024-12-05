import React from 'react';
import { motion } from 'framer-motion';
import './Team.css';

const Team = () => {
  const teamMembers = [
    {
      name: "Adil Hashmi",
      position: "Senior Legal Consultant",
      specialization: "NGO/NPO Registration Expert",
      experience: "15+ Years Experience",
      education: "LLB, Masters in Corporate Law",
      expertise: ["NGO Registration", "Legal Documentation", "Compliance Management"],
      image: "../../assets/images/team/member1.jpg"
    },
    {
      name: "Sarah Khan",
      position: "Legal Associate",
      specialization: "Tax & Compliance Specialist",
      experience: "8+ Years Experience",
      education: "LLB, Chartered Accountant",
      expertise: ["Tax Advisory", "Regulatory Compliance", "Financial Documentation"],
      image: "../../assets/images/team/member2.jpg"
    },
    {
      name: "Rahul Verma",
      position: "Documentation Expert",
      specialization: "Legal Documentation Specialist",
      experience: "10+ Years Experience",
      education: "LLB, Masters in Legal Studies",
      expertise: ["Legal Documentation", "Contract Review", "Regulatory Filings"],
      image: "../../assets/images/team/member3.jpg"
    }
  ];

  return (
    <div className="team-page">
      <section className="team-hero section-dark">
        <div className="hero-overlay"></div>
        <motion.div 
          className="team-hero-content"
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
            Our Team
          </motion.div>
          <h1>Meet Our Legal Experts</h1>
          <p>Dedicated professionals committed to your success</p>
        </motion.div>
      </section>

      <section className="team-members section-light">
        <div className="team-container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-badge">Our Professionals</span>
            <h2>Expert Legal Team</h2>
            <p>Specialized in NGO/NPO legal matters</p>
          </motion.div>

          <div className="members-grid">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="member-card glass-effect-light"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <div className="member-image">
                  <div className="image-placeholder">
                    {member.name.charAt(0)}
                  </div>
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <h4>{member.position}</h4>
                  <p className="specialization">{member.specialization}</p>
                  <p className="experience">{member.experience}</p>
                  <p className="education">{member.education}</p>
                  <div className="expertise-tags">
                    {member.expertise.map((skill, idx) => (
                      <span key={idx} className="expertise-tag">{skill}</span>
                    ))}
                  </div>
                  <motion.button
                    className="contact-member-btn"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 102, 204, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact {member.name.split(' ')[0]}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="team-values section-dark">
        <div className="team-container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-badge">Our Values</span>
            <h2>What Drives Us</h2>
            <p>Core principles that guide our practice</p>
          </motion.div>

          <div className="values-grid">
            <motion.div 
              className="value-card glass-effect-dark"
              whileHover={{ y: -10 }}
            >
              <div className="value-icon">⚖️</div>
              <h3>Integrity</h3>
              <p>Maintaining highest ethical standards in legal practice</p>
            </motion.div>
            <motion.div 
              className="value-card glass-effect-dark"
              whileHover={{ y: -10 }}
            >
              <div className="value-icon">🎯</div>
              <h3>Excellence</h3>
              <p>Delivering exceptional legal services and solutions</p>
            </motion.div>
            <motion.div 
              className="value-card glass-effect-dark"
              whileHover={{ y: -10 }}
            >
              <div className="value-icon">🤝</div>
              <h3>Commitment</h3>
              <p>Dedicated to client success and satisfaction</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="join-team section-light">
        <div className="team-container">
          <motion.div 
            className="cta-content glass-effect-light"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Join Our Team</h2>
            <p>We're always looking for talented professionals to join our team</p>
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