import React from 'react';
import { motion } from 'framer-motion';
import './TeamMembers.css';

const TeamMembers = () => {
  const teamMembers = [
    {
      name: "Adil Hashmi",
      position: "Senior Legal Consultant",
      specialization: "NGO/NPO Registration Expert",
      experience: "15+ Years Experience",
      education: "LLB, Masters in Corporate Law",
      expertise: ["NGO Registration", "Legal Documentation", "Compliance Management"],
      image: "../../assets/images/team/member1.jpg" // Add actual image path
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
    <section className="team-members-section section-light">
      <div className="team-container">
        <div className="team-members-grid">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="member-card glass-effect-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
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
                  whileHover={{ scale: 1.05 }}
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
  );
};

export default TeamMembers; 