import React from 'react';
import { motion } from 'framer-motion';

const CircuitLines = () => {
  return (
    <>
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`circuit-${i}`}
          className="absolute h-[2px] bg-gradient-to-r from-purple-500 to-pink-500"
          style={{
            width: `${50 + i * 20}px`,
            left: `${10 + i * 25}%`,
            top: `${40 + i * 15}%`,
            transform: `rotate(${45 * i}deg)`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scaleX: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            delay: i * 0.3,
            repeat: Infinity,
          }}
        >
          <motion.div
            className="absolute right-0 w-2 h-2 bg-purple-500 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
            }}
          />
        </motion.div>
      ))}
    </>
  );
};

export default CircuitLines;