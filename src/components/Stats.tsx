import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
  const stats = [
    { label: 'Years of Experience', value: '2+' },
    { label: 'Projects Completed', value: '15' },
  ];

  return (
    <div className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card text-center hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] border border-transparent hover:border-purple-500/50"
          >
            <h3 className="text-4xl font-bold mb-2 gradient-text">
              {stat.value}
            </h3>
            <p className="text-gray-400 dark:text-gray-600">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Stats;