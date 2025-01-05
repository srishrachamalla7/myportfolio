import React from 'react';
import { motion } from 'framer-motion';

interface CategoryHeadingProps {
  title: string;
}

const CategoryHeading = ({ title }: CategoryHeadingProps) => {
  return (
    <motion.h3 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ 
        scale: 1.05,
        rotate: [0, 2, -2, 0],
        transition: {
          rotate: {
            repeat: Infinity,
            duration: 0.5
          }
        }
      }}
      className="relative text-2xl font-bold mb-8 inline-block cursor-pointer group"
    >
      <span className="relative z-10 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text group-hover:from-purple-500 group-hover:to-pink-700">
        {title}
      </span>
      <motion.div 
        className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full group-hover:shadow-lg group-hover:shadow-purple-500/50"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ delay: 0.2 }}
      />
      <motion.div
        className="absolute -inset-4 bg-purple-500/20 rounded-lg -z-10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />
    </motion.h3>
  );
};

export default CategoryHeading;