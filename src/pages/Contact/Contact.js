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
      title: "Supreme Court",
      address: "Old Lawyers Chamber Supreme Court of India",
      city: "New Delhi-110001",
      icon: "🏛️"
    },
    {
      title: "Delhi High Court",
      address: "Delhi High Court Bar Association, Sher Shah Road",
      city: "New Delhi-110053",
      icon: "⚖️"
    },
    {
      title: "Patiala House",
      address: "Patiala House Court Bar Association",
      city: "New Delhi-110001",
      icon: "🏢"
    },
    {
      title: "Saket Court",
      address: "Chamber No. 685 Lawyers Chamber, Saket Court",
      city: "New Delhi",
      icon: "🏛️"
    },
    {
      title: "Head Office",
      address: "229-A Pocket-12, Jasola",
      city: "New Delhi-110025",
      icon: "🏢"
    }
  ];

  const contactInfo = {
    phones: [
      { number: "+91 8588895750", type: "Primary" },
      { number: "+91 9891224152", type: "WhatsApp" }
    ],
    emails: [
      "Info@adalegal.co.in",
      "hashmi.adil@adalegal.co.in",
      "adv.adil.hashmi@gmail.com",
      "hashmi.law.associats07@gmail.com"
    ]
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-page">
      <motion.div 
        className="contact-hero section-dark"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="contact-hero-content">
          <h1>Contact Us</h1>
          <p>Get in touch with our legal experts for professional guidance</p>
        </div>
      </motion.div>

      <section className="contact-content section-light">
        <div className="contact-container">
          <div className="contact-grid">
            <motion.div 
              className="contact-info-section glass-effect-light"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2>Contact Information</h2>
              
              <div className="contact-methods">
                <div className="phones-section">
                  <h3>Phone Numbers</h3>
                  {contactInfo.phones.map((phone, index) => (
                    <motion.div 
                      key={index}
                      className="phone-item"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + (index * 0.1) }}
                    >
                      <i className={`fas ${phone.type === 'WhatsApp' ? 'fa-whatsapp' : 'fa-phone'}`}></i>
                      <a href={`tel:${phone.number}`}>{phone.number}</a>
                      <span className="phone-type">{phone.type}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="emails-section">
                  <h3>Email Addresses</h3>
                  {contactInfo.emails.map((email, index) => (
                    <motion.div 
                      key={index}
                      className="email-item"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + (index * 0.1) }}
                    >
                      <i className="fas fa-envelope"></i>
                      <a href={`mailto:${email}`}>{email}</a>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="contact-form-section glass-effect-light"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2>Send us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                  ></textarea>
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
        <div className="offices-container">
          <h2>Our Offices</h2>
          <div className="offices-grid">
            {offices.map((office, index) => (
              <motion.div 
                key={index}
                className="office-card glass-effect-dark"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="office-icon">{office.icon}</div>
                <h3>{office.title}</h3>
                <p>{office.address}</p>
                <p className="city">{office.city}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 