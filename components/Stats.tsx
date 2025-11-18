import React from 'react';
import { motion } from 'framer-motion';
import { STATS } from '../constants';

export const Stats: React.FC = () => {
  return (
    <section className="border-y border-white/10 bg-black relative overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {STATS.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative px-6 py-12 md:py-16 flex flex-col items-center justify-center bg-black hover:bg-[#0a0a0a] transition-colors"
            >
              <div className="text-5xl md:text-6xl font-black font-display text-white mb-2 group-hover:text-primary transition-colors duration-300 flex items-baseline">
                 {stat.value}<span className="text-3xl text-white/50 ml-1">{stat.suffix}</span>
              </div>
              <div className="text-xs font-mono text-gray-500 uppercase tracking-[0.2em] group-hover:text-white transition-colors">
                {stat.label}
              </div>
              
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-primary transition-colors"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-primary transition-colors"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};