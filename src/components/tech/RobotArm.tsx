import React from 'react';
import { motion } from 'framer-motion';

const RobotArm = () => {
  return (
    <motion.div
      className="absolute right-[25%] top-[60%]"
      animate={{
        rotate: [0, 15, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
      }}
    >
      <div className="relative w-16 h-24">
        {/* Arm base */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-20 bg-gray-700 rounded-t-lg" />
        
        {/* Joint */}
        <motion.div
          className="absolute bottom-[70px] left-1/2 -translate-x-1/2 w-8 h-8 bg-gray-600 rounded-full border-2 border-purple-500"
          animate={{
            scale: [1, 1.1, 1],
            borderColor: ['#8B5CF6', '#EC4899', '#8B5CF6'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <div className="absolute inset-2 bg-purple-500/50 rounded-full animate-pulse" />
        </motion.div>

        {/* Claw */}
        <motion.div
          className="absolute bottom-[90px] left-1/2 -translate-x-1/2"
          animate={{
            rotate: [-20, 20, -20],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <div className="w-2 h-8 bg-gray-600 rotate-45 rounded-full absolute left-0" />
          <div className="w-2 h-8 bg-gray-600 -rotate-45 rounded-full absolute right-0" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RobotArm;