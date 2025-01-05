import React, { useEffect, useRef, useState } from 'react';
import Layer from './Layer';
import Connection from './Connection';
import ProbabilityOutput from './ProbabilityOutput';

const NeuralNetwork = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [activeConnections, setActiveConnections] = useState<boolean[][]>([]);

  useEffect(() => {
    if (containerRef.current) {
      setDimensions({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight
      });
    }

    // Initialize active connections
    const connections: boolean[][] = [];
    for (let i = 0; i < 4; i++) { // 4 sets of connections between 5 layers
      connections.push(Array(8).fill(false).map(() => Math.random() < 0.3));
    }
    setActiveConnections(connections);

    // Animate connections periodically
    const interval = setInterval(() => {
      setActiveConnections(prev => prev.map(layer => 
        layer.map(() => Math.random() < 0.3)
      ));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const layers = [
    { nodes: 6, x: 10, type: 'input' },
    { nodes: 8, x: 30, type: 'hidden' },
    { nodes: 8, x: 50, type: 'hidden' },
    { nodes: 8, x: 70, type: 'hidden' },
    { nodes: 10, x: 90, type: 'output' }
  ];

  return (
    <div ref={containerRef} className="relative w-full h-[400px] bg-gray-900/50 rounded-lg p-4">
      {/* Input number display */}
      <div className="absolute left-4 top-4 bg-gray-800/50 p-2 rounded">
        <span className="text-2xl font-bold text-purple-400">Input: 3</span>
      </div>

      {/* Render layers */}
      {layers.map((layer, i) => (
        <Layer
          key={i}
          nodes={layer.nodes}
          x={layer.x}
          isInput={layer.type === 'input'}
          isOutput={layer.type === 'output'}
          layerIndex={i}
        />
      ))}

      {/* Render connections */}
      {dimensions.width > 0 && layers.slice(0, -1).map((layer, layerIndex) => {
        const startX = (layer.x / 100) * dimensions.width;
        const endX = (layers[layerIndex + 1].x / 100) * dimensions.width;
        
        return [...Array(8)].map((_, connectionIndex) => {
          const startY = dimensions.height * (0.3 + Math.random() * 0.4);
          const endY = dimensions.height * (0.3 + Math.random() * 0.4);
          
          return (
            <Connection
              key={`${layerIndex}-${connectionIndex}`}
              startX={startX}
              startY={startY}
              endX={endX}
              endY={endY}
              isActive={activeConnections[layerIndex]?.[connectionIndex]}
              delay={layerIndex * 0.2 + connectionIndex * 0.1}
            />
          );
        });
      })}

      {/* Probability output */}
      <ProbabilityOutput />
    </div>
  );
};

export default NeuralNetwork;