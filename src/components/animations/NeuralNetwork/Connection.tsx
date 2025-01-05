import React from 'react';
import { motion } from 'framer-motion';

interface ConnectionProps {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  isActive?: boolean;
  delay?: number;
}

const Connection = ({ startX, startY, endX, endY, isActive = false, delay = 0 }: ConnectionProps) => {
  return (
    <svg className="absolute top-0 left-0 w-full h-full" style={{ zIndex: -1 }}>
      {/* Static connection line */}
      <line
        x1={startX}
        y1={startY}
        x2={endX}
        y2={endY}
        stroke={isActive ? "#8B5CF6" : "#4B5563"}
        strokeWidth={isActive ? 2 : 1}
        strokeOpacity={isActive ? 0.6 : 0.3}
      />

      {/* Animated data flow */}
      {isActive && (
        <motion.circle
          r={3}
          fill="#EC4899"
          initial={{ cx: startX, cy: startY }}
          animate={{
            cx: [startX, endX],
            cy: [startY, endY],
          }}
          transition={{
            duration: 1,
            delay,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      )}
    </svg>
  );
};

export default Connection;