import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Team.css';

const Team = () => {
  const teamMembers = [
    {
      name: "Adil Hashmi",
      position: "Senior Legal Consultant",
      specialization: "NGO/NPO Registration Expert",
      experience: "15+ Years Experience",
      education: "LLB, Masters in Corporate Law",
      image: "../../assets/images/team/member1.jpg",
      areas: ["NGO Registration", "Legal Documentation", "Compliance Management"]
    },
    {
      name: "Sarah Khan",
      position: "Legal Associate",
      specialization: "Tax & Compliance Specialist",
      experience: "8+ Years Experience",
      education: "LLB, Chartered Accountant",
      image: "../../assets/images/team/member2.jpg",
      areas: ["Tax Advisory", "Regulatory Compliance", "Financial Documentation"]
    },
    {
      name: "Rahul Verma",
      position: "Documentation Expert",
      specialization: "Legal Documentation Specialist",
      experience: "10+ Years Experience",
      education: "LLB, Masters in Legal Studies",
      image: "../../assets/images/team/member3.jpg",
      areas: ["Legal Documentation", "Contract Review", "Regulatory Filings"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6
      }
    },
    hover: {
      y: -15,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.2
      }
    }
  };

  const tagVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section className="team-section" id="team">
      <div className="team-container">
        <motion.div 
          className="team-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2>Our Legal Team</h2>
          <p>Expert Legal Professionals at Your Service</p>
        </motion.div>

        <motion.div 
          className="team-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="team-card glass-effect"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="member-image-container">
                <motion.div 
                  className="member-image glass-effect"
                  variants={imageVariants}
                >
                  <div className="placeholder-image">
                    {member.name.charAt(0)}
                  </div>
                </motion.div>
                <motion.div 
                  className="experience-badge"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring",
                    stiffness: 200,
                    delay: 0.3 + (index * 0.1)
                  }}
                >
                  {member.experience}
                </motion.div>
              </div>

              <AnimatePresence>
                <motion.div 
                  className="member-info"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {member.name}
                  </motion.h3>
                  <motion.p 
                    className="position"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {member.position}
                  </motion.p>
                  <motion.p 
                    className="specialization"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    {member.specialization}
                  </motion.p>
                  <motion.p 
                    className="education"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    {member.education}
                  </motion.p>
                  
                  <div className="expertise-areas">
                    <motion.h4
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      Areas of Expertise
                    </motion.h4>
                    <div className="areas-grid">
                      {member.areas.map((area, idx) => (
                        <motion.span 
                          key={idx} 
                          className="expertise-tag"
                          variants={tagVariants}
                          custom={idx}
                        >
                          {area}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <motion.button 
                    className="contact-member-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    Contact {member.name.split(' ')[0]}
                  </motion.button>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="team-cta glass-effect"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            delay: 0.5 
          }}
        >
          <h3>Ready to Work With Our Team?</h3>
          <p>Get expert legal guidance for your NGO/NPO needs</p>
          <motion.button 
            className="schedule-btn"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 20px rgba(124, 58, 237, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Team; 