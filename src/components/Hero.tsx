import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import TechIllustration from './TechIllustration';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-[80vh] flex items-center justify-between max-w-6xl mx-auto"
    >
      <div className="max-w-xl">
        <h2 className="text-2xl text-purple-400 mb-4">Hi, I'm</h2>
        <h1 className="text-5xl md:text-7xl font-bold mb-2">
          Srish Rachamalla
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="gradient-text">AI Engineer</span>
          <br />& Developer
        </h2>
        <p className="text-xl md:text-2xl text-gray-400 mb-8">
          Passionate about creating intuitive and engaging AI experiences.
          Specializing in transforming ideas into beautifully crafted solutions.
        </p>
        <div className="flex flex-wrap gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/projects')}
            className="gradient-border inline-block px-8 py-3 rounded-lg bg-gray-900 text-white"
          >
            View Projects
          </motion.button>
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
      </div>
      <div className="hidden lg:block w-1/2 max-w-lg">
        <TechIllustration />
      </div>
    </motion.div>
  );
};

export default Hero;