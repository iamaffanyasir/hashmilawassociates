import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Services.css';

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const services = [
    {
      title: "NGO Registration",
      description: "Complete assistance in NGO registration under Societies Act, Trust Act, and Section 42 of Companies Act with all legal documentation.",
      icon: "⚖️"
    },
    {
      title: "Legal Documentation",
      description: "Professional preparation of memorandum, articles, bylaws, and all required legal documents for NGO establishment.",
      icon: "📝"
    },
    {
      title: "Tax Exemption",
      description: "Expert guidance in obtaining tax exemption certificates and maintaining compliance with tax regulations.",
      icon: "💰"
    },
    {
      title: "Compliance Management",
      description: "Ongoing support in maintaining legal compliance, annual filings, and regulatory requirements.",
      icon: "✓"
    },
    {
      title: "Foreign Funding",
      description: "Assistance in obtaining FCRA registration and managing international funding compliance.",
      icon: "🌐"
    },
    {
      title: "Governance Advisory",
      description: "Strategic consultation on organizational structure, policies, and best practices for NGO governance.",
      icon: "👥"
    }
  ];

  return (
    <section className="services" id="services">
      <h2 data-aos="fade-up">Our Specialized Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="service-card"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services; 