import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Practice Areas", path: "/practice" },
    { name: "Our Team", path: "/team" },
    { name: "Contact", path: "/contact" }
  ];

  const services = [
    { name: "NGO Registration", path: "/services/ngo-registration" },
    { name: "Legal Documentation", path: "/services/documentation" },
    { name: "Tax Services", path: "/services/tax" },
    { name: "Compliance Management", path: "/services/compliance" },
    { name: "Legal Advisory", path: "/services/advisory" }
  ];

  const mainOffices = [
    {
      title: "Supreme Court",
      address: "Old Lawyers Chamber Supreme Court of India",
      city: "New Delhi-110001"
    },
    {
      title: "Delhi High Court",
      address: "Delhi High Court Bar Association, Sher Shah Road",
      city: "New Delhi-110053"
    }
  ];

  const branchOffices = [
    {
      title: "Patiala House",
      address: "Patiala House Court Bar Association",
      city: "New Delhi-110001"
    },
    {
      title: "Saket Court",
      address: "Chamber No. 685 Lawyers Chamber, Saket Court",
      city: "New Delhi"
    },
    {
      title: "Head Office",
      address: "229-A Pocket-12, Jasola",
      city: "New Delhi-110025"
    }
  ];

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-content">
          <motion.div 
            className="footer-main-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="footer-brand">
              <h2>HASHMI LAW ASSOCIATES</h2>
              <p className="brand-subtitle">ADVOCATES & LEGAL CONSULTANTS</p>
              <p className="footer-description">
                Specialized in NGO/NPO Registration & Legal Services. 
                Providing comprehensive legal solutions with integrity and professionalism.
              </p>
              <div className="contact-info">
                <div className="contact-item">
                  <i className="fas fa-phone"></i>
                  <a href="tel:+918588895750">+91 8588895750</a>
                </div>
                <div className="contact-item">
                  <i className="fab fa-whatsapp"></i>
                  <a href="https://wa.me/919891224152">+91 9891224152</a>
                </div>
              </div>
            </div>

            <div className="footer-links-grid">
              <div className="footer-section">
                <h3>Quick Links</h3>
                <ul>
                  {quickLinks.map((link, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link to={link.path}>{link.name}</Link>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="footer-section">
                <h3>Our Services</h3>
                <ul>
                  {services.map((service, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link to={service.path}>{service.name}</Link>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="footer-section">
                <h3>Contact Us</h3>
                <div className="email-list">
                  {[
                    "Info@adalegal.co.in",
                    "hashmi.adil@adalegal.co.in",
                    "adv.adil.hashmi@gmail.com",
                    "hashmi.law.associats07@gmail.com"
                  ].map((email, index) => (
                    <motion.a 
                      key={index}
                      href={`mailto:${email}`}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <i className="fas fa-envelope"></i>
                      {email}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="footer-offices">
        <div className="offices-content">
          <h3>Our Offices</h3>
          <div className="offices-grid">
            <div className="main-offices">
              {mainOffices.map((office, index) => (
                <motion.div 
                  key={index}
                  className="office-card glass-effect"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h4>{office.title}</h4>
                  <p>{office.address}</p>
                  <p className="city">{office.city}</p>
                </motion.div>
              ))}
            </div>
            <div className="branch-offices">
              {branchOffices.map((office, index) => (
                <motion.div 
                  key={index}
                  className="office-card glass-effect"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h4>{office.title}</h4>
                  <p>{office.address}</p>
                  <p className="city">{office.city}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {new Date().getFullYear()} Hashmi Law Associates. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <span className="separator">|</span>
            <Link to="/terms">Terms of Service</Link>
            <span className="separator">|</span>
            <Link to="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 