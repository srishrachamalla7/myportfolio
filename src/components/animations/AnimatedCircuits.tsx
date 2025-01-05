import React from 'react';
import { motion } from 'framer-motion';

const AnimatedCircuits = () => {
  const lines = [
    { length: '60%', rotation: 45, delay: 0 },
    { length: '40%', rotation: -30, delay: 0.3 },
    { length: '50%', rotation: 15, delay: 0.6 }
  ];

  return (
    <div className="absolute inset-0">
      {lines.map((line, index) => (
        <motion.div
          key={index}
          className="absolute h-[2px] origin-left"
          style={{
            width: line.length,
            left: '20%',
            top: `${30 + index * 20}%`,
            rotate: line.rotation,
            background: 'linear-gradient(90deg, rgba(139,92,246,0.5) 0%, rgba(236,72,153,0.5) 100%)'
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{
            scaleX: [0, 1, 1, 0],
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: 3,
            delay: line.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <motion.div
            className="absolute right-0 w-2 h-2 bg-purple-500 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 1,
              repeat: Infinity
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedCircuits;