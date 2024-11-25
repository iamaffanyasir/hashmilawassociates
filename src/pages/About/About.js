import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const milestones = [
    {
      year: "2008",
      title: "Firm Establishment",
      description: "Founded with a vision to provide comprehensive legal services"
    },
    {
      year: "2015",
      title: "NGO/NPO Specialization",
      description: "Developed expertise in non-profit organization legal services"
    },
    {
      year: "2020",
      title: "Expansion",
      description: "Extended services across multiple courts and jurisdictions"
    }
  ];

  const values = [
    {
      title: "Integrity",
      description: "Maintaining highest ethical standards in legal practice",
      icon: "⚖️"
    },
    {
      title: "Excellence",
      description: "Delivering exceptional legal services and solutions",
      icon: "🎯"
    },
    {
      title: "Commitment",
      description: "Dedicated to client success and satisfaction",
      icon: "🤝"
    }
  ];

  const expertise = [
    {
      title: "NGO Registration",
      points: [
        "Society Registration Act",
        "Trust Registration",
        "Section 8 Company Registration",
        "FCRA Registration"
      ]
    },
    {
      title: "Legal Compliance",
      points: [
        "Annual Compliance Management",
        "Legal Documentation",
        "Regulatory Filings",
        "Tax Exemption"
      ]
    },
    {
      title: "Advisory Services",
      points: [
        "Legal Consultation",
        "Governance Structure",
        "Policy Development",
        "Strategic Planning"
      ]
    }
  ];

  const achievements = [
    {
      number: "500+",
      title: "NGOs Registered",
      description: "Successfully registered organizations across India"
    },
    {
      number: "15+",
      title: "Years Experience",
      description: "Dedicated service in legal consultancy"
    },
    {
      number: "1000+",
      title: "Happy Clients",
      description: "Satisfied clients across various sectors"
    },
    {
      number: "98%",
      title: "Success Rate",
      description: "Consistent track record of success"
    }
  ];

  const locations = [
    {
      title: "Supreme Court",
      address: "Old Lawyers Chamber Supreme Court of India, New Delhi-110001"
    },
    {
      title: "Delhi High Court",
      address: "Delhi High Court Bar Association, Sher Shah Road, New Delhi-110053"
    },
    {
      title: "Patiala House",
      address: "Patiala House Court Bar Association, New Delhi-110001"
    }
  ];

  return (
    <div className="about-page">
      <motion.section 
        className="about-hero section-dark"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="about-hero-content">
          <h1>About Us</h1>
          <p>Leading Legal Experts in NGO/NPO Services</p>
        </div>
      </motion.section>

      <section className="about-intro section-light">
        <div className="about-container">
          <motion.div 
            className="intro-content glass-effect-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Our Journey</h2>
            <p>
              Hashmi Law Associates is a premier legal consultancy firm specializing in NGO/NPO 
              registration and compliance services. With years of dedicated experience, we have 
              established ourselves as trusted legal advisors for non-profit organizations across India.
            </p>
            <p>
              Our expertise spans across various aspects of NGO law, from registration to compliance 
              management, ensuring organizations can focus on their social missions while we handle 
              their legal requirements.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="milestones-section section-dark">
        <div className="about-container">
          <h2>Our Milestones</h2>
          <div className="milestones-grid">
            {milestones.map((milestone, index) => (
              <motion.div 
                key={index}
                className="milestone-card glass-effect-dark"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="year">{milestone.year}</div>
                <h3>{milestone.title}</h3>
                <p>{milestone.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="values-section section-light">
        <div className="about-container">
          <h2>Our Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="value-card glass-effect-light"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="expertise-section section-dark">
        <div className="about-container">
          <h2>Our Expertise</h2>
          <div className="expertise-grid">
            {expertise.map((area, index) => (
              <motion.div 
                key={index}
                className="expertise-card glass-effect-dark"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3>{area.title}</h3>
                <ul>
                  {area.points.map((point, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index * 0.1) + (idx * 0.1) }}
                    >
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="achievements-section section-light">
        <div className="about-container">
          <h2>Our Achievements</h2>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="achievement-card glass-effect-light"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="achievement-number">{achievement.number}</h3>
                <h4>{achievement.title}</h4>
                <p>{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="why-choose-section section-dark">
        <div className="about-container">
          <div className="why-choose-content glass-effect-dark">
            <motion.div
              className="why-choose-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>Why Choose Us</h2>
              <ul className="why-choose-list">
                <li>Specialized expertise in NGO/NPO legal services</li>
                <li>Comprehensive end-to-end solutions</li>
                <li>Experienced team of legal professionals</li>
                <li>Proven track record of success</li>
                <li>Personalized attention to each client</li>
                <li>Cost-effective and efficient services</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="locations-section section-light">
        <div className="about-container">
          <h2>Our Presence</h2>
          <div className="locations-grid">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                className="location-card glass-effect-light"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="location-icon">📍</div>
                <h3>{location.title}</h3>
                <p>{location.address}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="team-overview-section section-dark">
        <div className="about-container">
          <div className="team-overview-content glass-effect-dark">
            <motion.div
              className="team-overview-text"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2>Our Team</h2>
              <p>
                Our team consists of experienced legal professionals dedicated to providing
                exceptional services to our clients. With expertise in various aspects of
                NGO/NPO law, we ensure comprehensive legal solutions for your organization.
              </p>
              <motion.button
                className="team-cta-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Meet Our Team
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="cta-section section-light">
        <div className="about-container">
          <motion.div
            className="cta-content glass-effect-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Get Started?</h2>
            <p>Let us help you navigate the legal landscape of non-profit organizations</p>
            <div className="cta-buttons">
              <motion.button
                className="cta-button primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us Today
              </motion.button>
              <motion.button
                className="cta-button secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Brochure
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About; 