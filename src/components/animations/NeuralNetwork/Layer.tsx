import React from 'react';
import { motion } from 'framer-motion';

interface LayerProps {
  nodes: number;
  x: number;
  isInput?: boolean;
  isOutput?: boolean;
  activeNode?: number;
  layerIndex: number;
}

const Layer = ({ nodes, x, isInput, isOutput, activeNode, layerIndex }: LayerProps) => {
  return (
    <div 
      className="absolute flex flex-col items-center justify-center gap-4"
      style={{ left: `${x}%`, height: '100%' }}
    >
      {[...Array(nodes)].map((_, i) => {
        const isActive = isInput ? i === 3 : // Input layer, node 3 is active
                        isOutput ? i === 3 : // Output layer, node 3 should be highlighted
                        Math.random() < 0.3; // Random activation for hidden layers

        return (
          <motion.div
            key={i}
            className={`w-4 h-4 rounded-full ${
              isActive ? 'bg-pink-500' : 'bg-gray-600'
            }`}
            initial={{ scale: 0.8, opacity: 0.5 }}
            animate={{
              scale: isActive ? [0.8, 1.2, 0.8] : 0.8,
              opacity: isActive ? [0.5, 1, 0.5] : 0.5,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: layerIndex * 0.2 + i * 0.1
            }}
          />
        );
      })}
    </div>
  );
};

export default Layer;