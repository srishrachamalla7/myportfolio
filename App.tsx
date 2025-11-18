import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Contact } from './components/Contact';

const App: React.FC = () => {
  // Custom cursor logic
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
      
      // Check if hovering over clickable elements
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.closest('button') !== null || 
        target.closest('a') !== null;
        
      setIsHovering(isClickable);
    };

    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-dark text-white selection:bg-primary selection:text-black overflow-x-hidden relative">
      
      {/* Custom Cursor (Desktop Only) */}
      <div 
        className={`hidden lg:flex fixed top-0 left-0 pointer-events-none z-[9999] transition-all duration-100 ease-out items-center justify-center mix-blend-difference`}
        style={{ 
          transform: `translate(${mousePosition.x - 20}px, ${mousePosition.y - 20}px)`,
          width: '40px',
          height: '40px'
        }}
      >
        <div className={`absolute inset-0 border border-primary rounded-full transition-all duration-200 ${isHovering ? 'scale-150 border-2 bg-primary/10' : 'scale-100'}`}></div>
        <div className={`w-1 h-1 bg-primary rounded-full`}></div>
      </div>

      <Navbar />
      
      <main>
        <Hero />
        <Stats />
        <Projects />
        <TechStack />
        <About />
      </main>

      <Contact />
    </div>
  );
};

export default App;