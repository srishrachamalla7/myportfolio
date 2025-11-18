import React from 'react';
import { PROFILE } from '../constants';
import { FileText, MapPin, Briefcase, Cpu, User } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-black relative">
       {/* Decorative Big Text */}
       <div className="absolute top-20 right-0 text-[20vw] font-black font-display text-white/5 leading-none select-none pointer-events-none overflow-hidden whitespace-nowrap">
          ABOUT_ME
       </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left: Profile Card */}
            <div className="lg:col-span-4">
               <div className="sticky top-32 border border-white/10 bg-[#0a0a0a] p-8">
                  <div className="w-20 h-20 bg-primary mb-6 flex items-center justify-center">
                     <User size={32} className="text-black" />
                  </div>
                  
                  <div className="font-mono text-xs text-primary mb-2">/// SUBJECT_PROFILE</div>
                  <h3 className="text-3xl font-display font-bold text-white mb-1">Srish Rachamalla</h3>
                  <p className="text-gray-500 font-mono text-sm mb-8">AI Engineer & Developer</p>
                  
                  <div className="space-y-6 border-t border-white/10 pt-6">
                     <div className="flex items-start gap-4">
                        <MapPin className="text-gray-400 mt-1" size={16} />
                        <div>
                           <div className="text-[10px] text-gray-500 uppercase tracking-wider">Location</div>
                           <div className="text-white font-mono text-sm">Hyderabad, India</div>
                        </div>
                     </div>
                     <div className="flex items-start gap-4">
                        <Briefcase className="text-gray-400 mt-1" size={16} />
                        <div>
                           <div className="text-[10px] text-gray-500 uppercase tracking-wider">Current Role</div>
                           <div className="text-white font-mono text-sm">Spearsoft</div>
                        </div>
                     </div>
                     <div className="flex items-start gap-4">
                        <Cpu className="text-gray-400 mt-1" size={16} />
                        <div>
                           <div className="text-[10px] text-gray-500 uppercase tracking-wider">Specialization</div>
                           <div className="text-white font-mono text-sm">GenAI & LLMs</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Right: Content */}
            <div className="lg:col-span-8 flex flex-col justify-center">
               <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-8 leading-tight uppercase">
                  Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Mind</span> <br />
                  of the Machine.
               </h2>
               
               <div className="text-gray-400 text-lg md:text-xl leading-relaxed space-y-6 font-light max-w-3xl">
                  <p>{PROFILE.about}</p>
               </div>

               <div className="mt-12">
                  <a href="#" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold font-mono uppercase tracking-wider hover:bg-primary transition-colors">
                     <FileText size={18} />
                     Access Resume
                  </a>
               </div>
            </div>
         </div>
      </div>
    </section>
  );
}