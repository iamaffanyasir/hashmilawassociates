import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const offices = [
    {
      title: "Head Office",
      address: "123 Legal Avenue, Sector 15",
      city: "New Delhi-110001",
      phone: "+91 98765 43210",
      email: "info@hashmilaw.com",
      icon: "🏢"
    },
    {
      title: "Supreme Court",
      address: "Chamber No. 456, Supreme Court",
      city: "New Delhi-110001",
      phone: "+91 98765 43211",
      email: "sc@hashmilaw.com",
      icon: "⚖️"
    },
    {
      title: "High Court",
      address: "Chamber No. 789, High Court",
      city: "New Delhi-110003",
      phone: "+91 98765 43212",
      email: "hc@hashmilaw.com",
      icon: "🏛️"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="contact-page">
      <section className="contact-hero section-dark">
        <div className="hero-overlay"></div>
        <motion.div 
          className="contact-hero-content"
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
            Contact Us
          </motion.div>
          <h1>Get In Touch</h1>
          <p>We're here to help with your legal needs</p>
        </motion.div>
      </section>

      <section className="contact-main section-light">
        <div className="contact-container">
          <div className="contact-grid">
            <motion.div 
              className="contact-info glass-effect-light"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>Contact Information</h2>
              <p>Get in touch with us for expert legal assistance</p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <span className="icon">📞</span>
                  <div>
                    <h3>Phone</h3>
                    <p>+91 98765 43210</p>
                    <p>+91 98765 43211</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <span className="icon">✉️</span>
                  <div>
                    <h3>Email</h3>
                    <p>info@hashmilaw.com</p>
                    <p>support@hashmilaw.com</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <span className="icon">⏰</span>
                  <div>
                    <h3>Working Hours</h3>
                    <p>Monday - Saturday</p>
                    <p>9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="contact-form glass-effect-light"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>Send us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="form-group">
                    <input 
                      type="text" 
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input 
                      type="email" 
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input 
                      type="tel" 
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input 
                      type="text" 
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      required
                    />
                  </div>
                  <div className="form-group full-width">
                    <textarea 
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                    ></textarea>
                  </div>
                </div>
                <motion.button 
                  type="submit"
                  className="submit-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="offices-section section-dark">
        <div className="contact-container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-badge">Our Offices</span>
            <h2>Visit Our Locations</h2>
            <p>Find us at our convenient office locations</p>
          </motion.div>

          <div className="offices-grid">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                className="office-card glass-effect-dark"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <div className="office-icon">{office.icon}</div>
                <h3>{office.title}</h3>
                <p className="address">{office.address}</p>
                <p className="city">{office.city}</p>
                <p className="phone">{office.phone}</p>
                <p className="email">{office.email}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 