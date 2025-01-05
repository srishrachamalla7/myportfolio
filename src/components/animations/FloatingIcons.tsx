import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Cpu, Database, Cloud } from 'lucide-react';

const FloatingIcons = () => {
  const icons = [
    { Icon: Brain, color: "text-purple-400", delay: 0 },
    { Icon: Code, color: "text-pink-400", delay: 0.2 },
    { Icon: Cpu, color: "text-blue-400", delay: 0.4 },
    { Icon: Database, color: "text-green-400", delay: 0.6 },
    { Icon: Cloud, color: "text-yellow-400", delay: 0.8 }
  ];

  return (
    <div className="relative w-full h-full">
      {icons.map(({ Icon, color, delay }, index) => (
        <motion.div
          key={index}
          className={`absolute ${color}`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.4, 1, 0.4],
            scale: [0.8, 1, 0.8],
            y: [0, -20, 0],
            x: [0, 10, 0]
          }}
          transition={{
            duration: 3,
            delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            left: `${20 + index * 15}%`,
            top: `${30 + (index % 3) * 20}%`
          }}
        >
          <Icon size={24} />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingIcons;