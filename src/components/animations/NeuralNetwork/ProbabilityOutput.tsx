import React from 'react';
import { motion } from 'framer-motion';

const ProbabilityOutput = () => {
  const probabilities = [
    { digit: 0, prob: 0.05 },
    { digit: 1, prob: 0.02 },
    { digit: 2, prob: 0.08 },
    { digit: 3, prob: 0.85 }, // Highest probability for 3
    { digit: 4, prob: 0.03 },
    { digit: 5, prob: 0.02 },
    { digit: 6, prob: 0.01 },
    { digit: 7, prob: 0.02 },
    { digit: 8, prob: 0.01 },
    { digit: 9, prob: 0.01 }
  ];

  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800/50 p-4 rounded-lg">
      {probabilities.map(({ digit, prob }) => (
        <motion.div
          key={digit}
          className="flex items-center gap-2 mb-1"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: digit * 0.1 }}
        >
          <span className="w-4 text-sm">{digit}</span>
          <motion.div
            className="h-4 bg-purple-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${prob * 100}px` }}
            transition={{ duration: 1, delay: digit * 0.1 }}
          />
          <span className="text-xs">{(prob * 100).toFixed(1)}%</span>
        </motion.div>
      ))}
    </div>
  );
};

export default ProbabilityOutput;