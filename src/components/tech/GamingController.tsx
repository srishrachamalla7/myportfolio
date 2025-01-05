import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2 } from 'lucide-react';

const GamingController = () => {
  return (
    <motion.div
      className="absolute left-[20%] top-[70%]"
      animate={{
        y: [0, -5, 0],
        rotate: [-5, 5, -5],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
      }}
    >
      <div className="relative">
        <Gamepad2 className="w-12 h-12 text-purple-400" />
        <motion.div
          className="absolute inset-0 bg-purple-500/30 blur-xl"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      </div>
    </motion.div>
  );
};

export default GamingController;