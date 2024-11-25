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

  const emails = [
    "Info@adalegal.co.in",
    "hashmi.adil@adalegal.co.in",
    "adv.adil.hashmi@gmail.com",
    "hashmi.law.associats07@gmail.com"
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
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
                {emails.map((email, index) => (
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
      </div>
    </footer>
  );
};

export default Footer; 