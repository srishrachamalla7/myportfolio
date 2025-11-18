import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TECH_STACK } from '../constants';
import { Code2, Brain, Database, Wrench, Cpu, CreditCard, Zap } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Code2, Brain, Database, Wrench, Cpu, CreditCard
};

export const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(TECH_STACK[0].name);
  const tabsRef = useRef<HTMLDivElement>(null);

  return (
    <section id="skills" className="py-24 bg-[#080808] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16">
           <h2 className="text-4xl md:text-6xl font-display font-black text-white uppercase">
             Tech <span className="text-primary">Arsenal</span>
           </h2>
           <div className="flex items-center gap-2 text-primary font-mono text-xs mt-4 md:mt-0 border border-primary/20 px-3 py-1 bg-primary/5">
              <Zap size={14} />
              <span>OPERATIONAL CAPACITY: 100%</span>
           </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Vertical Nav (Desktop) / Horizontal (Mobile) */}
          <div 
            ref={tabsRef}
            className="lg:w-1/4 flex lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide border-b lg:border-b-0 lg:border-r border-white/10 pr-4"
          >
            {TECH_STACK.map((cat) => {
              const Icon = iconMap[cat.icon] || Code2;
              const isActive = activeCategory === cat.name;
              return (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`group flex items-center gap-4 p-4 text-left transition-all duration-300 relative overflow-hidden flex-shrink-0 lg:w-full ${
                    isActive 
                      ? 'bg-primary text-black' 
                      : 'bg-transparent text-gray-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <div className={`relative z-10 ${isActive ? 'text-black' : 'text-gray-500 group-hover:text-white'}`}>
                      <Icon size={20} />
                  </div>
                  <span className={`relative z-10 font-mono font-bold uppercase text-sm whitespace-nowrap`}>
                      {cat.name}
                  </span>
                  {isActive && <div className="absolute inset-0 bg-primary z-0"></div>}
                </button>
              );
            })}
          </div>

          {/* Grid Display */}
          <div className="lg:w-3/4">
             <AnimatePresence mode='wait'>
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
                >
                  {TECH_STACK.find(c => c.name === activeCategory)?.skills.map((skill, idx) => (
                    <motion.div 
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.02 }}
                      className="group relative p-4 border border-white/10 bg-black hover:border-primary/50 transition-colors"
                    >
                       <div className="text-xs text-gray-500 mb-2 font-mono">0{idx + 1}</div>
                       <div className="font-display font-bold text-white group-hover:text-primary transition-colors">{skill}</div>
                       
                       {/* Corner Tick */}
                       <div className="absolute top-0 right-0 w-0 h-0 border-t-[6px] border-r-[6px] border-t-transparent border-r-transparent group-hover:border-r-primary transition-all"></div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};