import React from 'react';
import { motion } from 'framer-motion';
import ServiceHero from './components/ServiceHero';
import ServicesList from './components/ServicesList';
import ServiceProcess from './components/ServiceProcess';
import ServiceFAQ from './components/ServiceFAQ';
import './Services.css';

const Services = () => {
  return (
    <div className="services-page">
      <ServiceHero />
      <ServicesList />
      <ServiceProcess />
      <ServiceFAQ />
    </div>
  );
};

export default Services; 