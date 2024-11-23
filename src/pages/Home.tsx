import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Cpu } from 'lucide-react';
import Stats from '../components/Stats';
import ProjectCard from '../components/ProjectCard';
import TechStack from '../components/TechStack';
import ContactForm from '../components/ContactForm';
import Publications from '../components/Publications';

const Home = () => {
  return (
    <div className="container mx-auto px-4 pt-20">
      <Hero />
      <Stats />
      <FeaturedProjects />
      <TechStack />
      <Publications />
      <ContactForm />
    </div>
  );
};

const Hero = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="min-h-[80vh] flex flex-col justify-center"
  >
    <h1 className="text-5xl md:text-7xl font-bold mb-6">
      <span className="gradient-text">AI Engineer</span>
      <br />& Developer
    </h1>
    <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-8">
      Passionate about creating intuitive and engaging AI experiences.
      Specializing in transforming ideas into beautifully crafted solutions.
    </p>
    <div className="flex flex-wrap gap-4">
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="#projects"
        className="gradient-border inline-block px-8 py-3 rounded-lg bg-gray-900 text-white"
      >
        View Projects
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="https://github.com/srishrachamalla7"
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-3 rounded-lg border border-purple-500 text-purple-400 hover:bg-purple-500/10 transition-colors"
      >
        GitHub Profile
      </motion.a>
    </div>
  </motion.div>
);

const FeaturedProjects = () => (
  <section id="projects" className="py-20">
    <h2 className="text-3xl font-bold mb-12 gradient-text">
      Featured Projects
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProjectCard
        title="MarketMind"
        description=" AI tool that analyzes products, competitors, and market position, generating insightful reports"
        icon={<Brain className="w-6 h-6" />}
        link="/projects"
      />
      <ProjectCard
        title="EVA Process"
        description="Automated compliance checks and operational efficiency analysis"
        icon={<Cpu className="w-6 h-6" />}
        link="/projects"
      />
      <ProjectCard
        title="Multimodal AI"
        description="Advanced conversational AI combining text, voice, and visual analysis"
        icon={<Code className="w-6 h-6" />}
        link="/projects"
      />
    </div>
  </section>
);

export default Home;
