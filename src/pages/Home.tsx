import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import FeaturedProjects from '../components/FeaturedProjects';
import TechStack from '../components/TechStack';
import Publications from '../components/Publications';
import ContactForm from '../components/ContactForm';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-20">
      <Hero />
      <Stats />
      <FeaturedProjects />
      <TechStack />
      <Publications />
      <ContactForm />
    </div>
  );
};

export default Home;