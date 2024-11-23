import React from 'react';
import { motion } from 'framer-motion';
import './ServiceFAQ.css';

const ServiceFAQ = () => {
  const faqs = [
    {
      question: "What types of NGOs can be registered?",
      answer: "We assist in registering various types of NGOs including those under the Societies Act, Trust Act, and Section 42 of Companies Act."
    },
    {
      question: "How long does the registration process take?",
      answer: "The registration timeline varies depending on the type of registration and documentation completeness, typically ranging from 30-90 days."
    },
    {
      question: "What documents are required for NGO registration?",
      answer: "Required documents include identity proofs, address proofs, memorandum of association, and other specific documents based on registration type."
    },
    {
      question: "Do you provide post-registration support?",
      answer: "Yes, we provide comprehensive post-registration support including compliance management, annual filings, and ongoing legal advisory."
    }
  ];

  return (
    <section className="service-faq">
      <div className="faq-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="faq-card glass-effect"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFAQ; 