import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ExternalLink, Github, Search, Layers, ArrowUpRight } from 'lucide-react';

const PROJECT_LINKS: Record<string, string> = {
  "SST-Thinking - Edge AI LLM": "https://huggingface.co/Srish117/SST-thinking",
  "Custom Domain-Specific LLM": "https://huggingface.co/Srish117",
  "Autohire - Unified Hiring Platform": "https://autohire.cv/",
  "Leadspear": "https://leadspear.ai/",
  "AI Marketplace": "https://www.spearsoft.ai/",
  "Fauxtalks": "https://fauxtalks.com/",
  "Digitxpro": "https://digitxpro.com/",
  "Storyboard GEN (Hackathon)": "https://ai.studio/apps/drive/14ImKkMdaJDRwFIlQnXRuYVeTgX1T1vCp",
  "Marketmind (Hackathon)": "https://app.ashna.ai/chat?agent=marketmind-3_GFQ",
  "Mentalwellbeing Mobile App": "#",
  "Ideal Trendz Interiors": "https://idealtrendz.org/",
  "Hironika Travels": "https://hironikatravels.online/",
  "EchelonX AI": "https://echelonxai.com/",
  "Ishta Club": "https://ishta.club/",
  "Finance Tracker": "https://track.srish.site/",
  "Calorie Tracker": "https://cal.srish.site/",
  "Binge And Party": "https://www.bingeandparty.com/",
  "AI WhatsApp Agent": "#",
  "EVA Platform": "https://www.spearsoftech.com/Home",
  "Healthmate": "https://www.spearsoft.ai/",
  "Mailmagnet": "https://www.spearsoft.ai/",
  "MarketMind": "https://github.com/srishrachamalla7/MarketMind",
  "Legal Agent": "https://github.com/srishrachamalla7/LegalAI-Crew",
  "ConsumeNice": "https://github.com/Saiteja1244/ConsumeNice",
  "Multimodal AI Assistant": "https://github.com/srishrachamalla7",
  "PDF Information Retrieval": "https://github.com/srishrachamalla7",
  "Linkedin Scraper": "https://github.com/srishrachamalla7/Linkedin_Scraper",
  "Second Brain Telegram Bot": "https://t.me/thooooootbot",
  "Movie Recommendation System": "https://github.com/srishrachamalla7/Movie_Recommend.git",
  "BlogWriter_Agent": "https://github.com/srishrachamalla7/BlogWriter_Agent.git",
  "Interactive Chat with Ollama": "https://github.com/srishrachamalla7/ollama_chatbot",
  "Gold Rates Tracker": "https://huggingface.co/spaces/Srish117/GoldRates",
  "Yours Second Brain App": "https://yourssecondbrain.netlify.app/",
};

const ProjectCard: React.FC<{ project: typeof PROJECTS[0], index: number }> = ({ project, index }) => {
  const resolvedLink = project.link ?? PROJECT_LINKS[project.title];
  const isGithubLink = resolvedLink?.includes('github.com');

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative h-full"
    >
      <div className="h-full bg-[#0a0a0a] border border-white/10 p-6 flex flex-col hover:border-primary/50 transition-colors duration-300 relative overflow-hidden">
        {/* Hover Glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col h-full">
          <div className="flex justify-between items-start mb-6">
            <span className="font-mono text-xs text-primary border border-primary/30 px-2 py-1">
               {project.year}
            </span>
            <div className="flex gap-3">
               {/* Only show link if it exists (mocked logic for visual) */}
               {resolvedLink && isGithubLink && (
                 <a
                   href={resolvedLink}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-gray-400 hover:text-white transition-colors"
                 >
                   <Github size={18} />
                 </a>
               )}
               {resolvedLink && !isGithubLink && (
                 <a
                   href={resolvedLink}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-gray-400 hover:text-primary transition-colors"
                 >
                   <ExternalLink size={18} />
                 </a>
               )}
            </div>
          </div>

        <h3 className="text-2xl font-display font-bold text-white mb-4 leading-tight group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-400 font-mono text-sm leading-relaxed mb-8 flex-grow line-clamp-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.slice(0, 4).map((tag, i) => (
            <span key={i} className="text-[10px] font-mono uppercase text-gray-500 bg-white/5 px-2 py-1 border border-white/5 group-hover:border-white/20 transition-colors">
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      {/* Animated Bottom Bar */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-500 ease-out"></div>
    </div>
  </motion.div>
  );
};

export const Projects: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');
  const [showAllTags, setShowAllTags] = useState(false);
  
  const allTags = useMemo(() => {
    const tags: Record<string, number> = {};
    PROJECTS.forEach(p => p.tags.forEach(t => {
        tags[t] = (tags[t] || 0) + 1;
    }));
    return Object.entries(tags)
        .sort((a, b) => b[1] - a[1])
        .map(([tag]) => tag);
  }, []);

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(p => {
      const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) || 
                            p.description.toLowerCase().includes(search.toLowerCase());
      const matchesTag = selectedTag === 'All' || p.tags.includes(selectedTag);
      return matchesSearch && matchesTag;
    });
  }, [search, selectedTag]);

  const visibleTags = showAllTags ? allTags : allTags.slice(0, 8);

  return (
    <section id="projects" className="py-24 relative bg-dark">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 border-b border-white/10 pb-8">
           <div>
              <div className="flex items-center gap-2 text-primary font-mono text-xs mb-2 uppercase tracking-widest">
                 <Layers size={14} />
                 <span>Project Database</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-display font-black text-white">
                 WORK <span className="text-stroke">INDEX</span>
              </h2>
           </div>
           
           <div className="w-full md:w-auto">
               <div className="relative group">
                  <input 
                      type="text" 
                      placeholder="SEARCH_DATABASE..." 
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="w-full md:w-80 bg-black border-b border-white/30 px-0 py-3 text-white focus:outline-none focus:border-primary transition-all placeholder-gray-600 font-mono uppercase rounded-none"
                  />
                  <Search className="absolute right-0 top-3 text-gray-600 group-focus-within:text-primary" size={20} />
               </div>
           </div>
        </div>

         {/* Tag Filter */}
         <div className="mb-12 overflow-x-auto scrollbar-hide">
            <div className="flex gap-3 pb-2 min-w-max">
               <button
                  onClick={() => setSelectedTag('All')}
                  className={`px-4 py-2 font-mono text-xs uppercase tracking-wider border transition-all ${
                      selectedTag === 'All' 
                      ? 'bg-primary text-black border-primary font-bold' 
                      : 'bg-transparent text-gray-400 border-white/10 hover:border-white hover:text-white'
                  }`}
              >
                  ALL //
              </button>
              {visibleTags.map(tag => (
                  <button
                      key={tag}
                      onClick={() => setSelectedTag(tag)}
                      className={`px-4 py-2 font-mono text-xs uppercase tracking-wider border transition-all ${
                          selectedTag === tag 
                          ? 'bg-primary text-black border-primary font-bold' 
                          : 'bg-transparent text-gray-400 border-white/10 hover:border-white hover:text-white'
                      }`}
                  >
                      {tag}
                  </button>
              ))}
              {!showAllTags && allTags.length > 8 && (
                  <button 
                      onClick={() => setShowAllTags(true)}
                      className="px-4 py-2 font-mono text-xs uppercase tracking-wider text-primary hover:text-white border border-transparent transition-colors"
                  >
                      + EXPAND
                  </button>
              )}
            </div>
         </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project, idx) => (
              <ProjectCard key={project.title + idx} project={project} index={idx} />
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-24 text-center border border-dashed border-white/10 bg-white/5">
            <h4 className="text-white font-bold font-mono mb-2">ERROR: NO_MATCHES_FOUND</h4>
            <button 
               onClick={() => { setSearch(''); setSelectedTag('All'); }}
               className="text-primary hover:text-white text-sm font-mono underline decoration-primary underline-offset-4"
            >
               RESET_FILTERS()
            </button>
          </div>
        )}
      </div>
    </section>
  );
};