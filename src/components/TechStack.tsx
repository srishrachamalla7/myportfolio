import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CategoryHeading from './CategoryHeading';
import { categories } from '../data/techStackData';

const TechStack = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-12 gradient-text text-center">
        Tech Stack
      </h2>
      <div className="space-y-12">
        {categories.map((category, categoryIndex) => (
          <div key={category.title} className="mb-8">
            <CategoryHeading title={category.title} />
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {category.items.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + categoryIndex * 0.2 }}
                  className="relative flex flex-col items-center p-4 card hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] border border-transparent hover:border-purple-500/50"
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className={`tech-icon mb-2 ${item.invertColors ? 'invert' : ''}`}
                  />
                  <span className="text-sm text-gray-400">{item.name}</span>

                  <AnimatePresence>
                    {hoveredItem === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute inset-0 flex items-center justify-center p-4 bg-gray-900/95 rounded-lg"
                      >
                        <p className="text-sm text-center text-gray-200">
                          {item.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;