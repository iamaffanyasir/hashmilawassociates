import React from 'react';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Services from '../../components/Services/Services';
import PracticeAreas from '../../components/PracticeAreas/PracticeAreas';
import Contact from '../../components/Contact/Contact';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <About />
      <Services />
      <PracticeAreas />
      <Contact />
    </div>
  );
};

export default Home; 