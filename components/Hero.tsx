import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Code, Check } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { PROFILE, SOCIALS } from '../constants';

export const Hero: React.FC = () => {
  const showDownloadToast = () => {
    toast.custom((t) => (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3"
      >
        <Check className="w-5 h-5" />
        <span>Thanks for downloading!</span>
      </motion.div>
    ));
  };
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=16WLM7gbXKKttnOKoyY6aKI6C_jt5Gqg6';
    link.download = 'Srish_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showDownloadToast();
  };
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-24 pb-12 md:pt-20 md:pb-0 bg-dark">
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20 bg-[length:40px_40px] perspective-1000 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-transparent to-dark pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="w-full lg:w-7/12 flex flex-col items-start"
          >
            {/* Glitch Terminal Header */}
            <div className="flex items-center gap-3 mb-4 md:mb-8 border border-primary/30 bg-primary/5 px-4 py-2 w-max">
               <div className="w-2 h-2 bg-primary animate-pulse rounded-full"></div>
               <span className="font-mono text-primary text-xs md:text-sm tracking-widest uppercase">
                 &gt; EXECUTE_PROTOCOL: AI_ENGINEER
               </span>
            </div>

            {/* Massive Typography - Responsive Fixed */}
            <div className="relative mb-8 w-full">
               <h1 className="text-6xl sm:text-8xl md:text-9xl font-black font-display leading-[0.85] tracking-tighter text-white mix-blend-difference">
                SRISH
              </h1>
               <h1 className="text-[13vw] md:text-8xl lg:text-9xl font-black font-display leading-[0.85] tracking-tighter text-stroke hover:text-primary transition-colors duration-500 cursor-default select-none whitespace-nowrap">
                RACHAMALLA
              </h1>
            </div>
            
            {/* Holographic Data Plate */}
            <div className="relative w-full max-w-2xl mb-10 group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-surface border border-white/10 p-6 md:p-8 backdrop-blur-xl">
                {/* Tech Decor */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary"></div>
                
                <div className="flex items-start gap-4">
                   <div className="p-3 bg-primary/10 border border-primary/20 rounded-none hidden sm:block">
                      <Code className="text-primary" size={24} />
                   </div>
                   <div>
                      <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2 flex items-center gap-3">
                        AI Engineer <span className="text-gray-600 text-lg font-mono font-normal hidden sm:inline-block">&</span> Developer
                      </h2>
                      <p className="text-gray-400 font-mono text-sm leading-relaxed max-w-lg border-l-2 border-white/10 pl-4">
                        {PROFILE.tagline}
                      </p>
                   </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#projects" 
                className="w-full sm:w-auto px-8 py-4 bg-primary text-black font-bold font-mono uppercase tracking-wider hover:bg-white transition-colors flex items-center justify-center gap-2 group skew-x-[-10deg]"
              >
                <span className="skew-x-[10deg] flex items-center gap-2">
                   Initialize <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.a>
              
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleDownload}
                className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-bold font-mono uppercase tracking-wider hover:bg-white/10 transition-colors flex items-center justify-center gap-2 group skew-x-[-10deg]"
              >
                <span className="skew-x-[10deg] flex items-center gap-2">
                   Resume.pdf <Download size={18} />
                </span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};