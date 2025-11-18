import React, { useState, useEffect, useMemo } from 'react';
import { Menu, X, Github, Linkedin, Twitter, PenSquare, Terminal, Sparkles, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SOCIALS, PROJECTS } from '../constants';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [commandQuery, setCommandQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();

      if ((e.metaKey || e.ctrlKey) && key === 'k') {
        const target = e.target as HTMLElement;
        if (
          target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.isContentEditable
        ) {
          return;
        }

        e.preventDefault();
        setIsCommandOpen(prev => !prev);
        setCommandQuery('');
      }

      if (e.key === 'Escape') {
        setIsCommandOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { name: 'PROJECTS', href: '#projects' },
    { name: 'STACK', href: '#skills' },
    { name: 'ABOUT', href: '#about' },
  ];

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

  const commandResults = useMemo(() => {
    const q = commandQuery.trim().toLowerCase();

    const projectsWithLinks = PROJECTS.map(project => ({
      ...project,
      link: project.link ?? PROJECT_LINKS[project.title],
    }));

    if (!q) {
      return projectsWithLinks.slice(0, 7);
    }

    return projectsWithLinks
      .filter(project => {
        const haystack = `${project.title} ${project.description} ${project.tags.join(' ')}`.toLowerCase();
        return haystack.includes(q);
      })
      .slice(0, 7);
  }, [commandQuery]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-2' : 'py-6'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className={`relative flex items-center justify-between px-6 py-3 transition-all duration-300 rounded-none border-b border-transparent ${
            isScrolled 
              ? 'bg-dark/90 backdrop-blur-md border-white/10' 
              : ''
          }`}>
            
            {/* Logo */}
            <a href="#" className="relative z-50 group">
              <div className="flex items-center gap-2">
                <Terminal className="text-primary" size={24} />
                <div className="flex flex-col leading-none">
                  <span className="font-display font-black text-xl tracking-tighter text-white group-hover:text-primary transition-colors">
                    SRISH<span className="text-primary">.SITE</span>
                  </span>
                </div>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-mono font-bold text-gray-400 hover:text-primary transition-colors tracking-wider relative group"
                >
                  <span className="relative z-10">{link.name}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-4">
                {SOCIALS.github && (
                  <a
                    href={SOCIALS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Github size={20} />
                  </a>
                )}
                {SOCIALS.huggingface && (
                  <a
                    href={SOCIALS.huggingface}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <img src="/hf-logo-pirate.svg" alt="Hugging Face" className="w-5 h-5" />
                  </a>
                )}
                {SOCIALS.twitter && (
                  <a
                    href={SOCIALS.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Twitter size={20} />
                  </a>
                )}
                {SOCIALS.linkedin && (
                  <a
                    href={SOCIALS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                )}
                {SOCIALS.medium && (
                  <a
                    href={SOCIALS.medium}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <PenSquare size={20} />
                  </a>
                )}
              </div>

              <button
                type="button"
                onClick={() => setIsCommandOpen(true)}
                className="flex items-center gap-2 px-4 py-2 border border-white/10 bg-white/5 text-[11px] font-mono uppercase tracking-wider text-gray-300 hover:bg-white hover:text-black hover:border-white transition-colors"
              >
                <Search size={14} className="opacity-70" />
                <span className="opacity-90">CMD + K</span>
              </button>

              <a href="#contact" className="bg-primary text-black px-6 py-2 font-bold font-mono text-sm hover:bg-white hover:text-black transition-colors skew-x-[-10deg] border border-primary hover:border-white">
                <span className="inline-block skew-x-[10deg]">LET'S TALK</span>
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden relative z-50 text-white p-2 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black flex flex-col justify-center items-center"
          >
            {/* Background Noise */}
            <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none"></div>
            
            <div className="flex flex-col gap-8 text-center z-10">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-5xl font-display font-black text-transparent text-stroke hover:text-primary hover:text-stroke-primary transition-all duration-300"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-12 flex gap-8"
            >
               {SOCIALS.github && (
                 <a
                   href={SOCIALS.github}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="p-4 border border-white/10 rounded-full text-gray-400 hover:text-primary hover:border-primary transition-colors"
                 >
                    <Github size={24} />
                 </a>
               )}
               {SOCIALS.huggingface && (
                 <a
                   href={SOCIALS.huggingface}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="p-4 border border-white/10 rounded-full text-gray-400 hover:text-primary hover:border-primary transition-colors"
                 >
                    <img src="/hf-logo-pirate.svg" alt="Hugging Face" className="w-6 h-6" />
                 </a>
               )}
               {SOCIALS.twitter && (
                 <a
                   href={SOCIALS.twitter}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="p-4 border border-white/10 rounded-full text-gray-400 hover:text-primary hover:border-primary transition-colors"
                 >
                    <Twitter size={24} />
                 </a>
               )}
               {SOCIALS.linkedin && (
                 <a
                   href={SOCIALS.linkedin}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="p-4 border border-white/10 rounded-full text-gray-400 hover:text-primary hover:border-primary transition-colors"
                 >
                    <Linkedin size={24} />
                 </a>
               )}
               {SOCIALS.medium && (
                 <a
                   href={SOCIALS.medium}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="p-4 border border-white/10 rounded-full text-gray-400 hover:text-primary hover:border-primary transition-colors"
                 >
                    <PenSquare size={24} />
                 </a>
               )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isCommandOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4"
            onClick={() => setIsCommandOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="w-full max-w-xl bg-[#050505] border border-white/10 shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <div className="border-b border-white/10 flex items-center gap-3 px-4 py-3">
                <Search size={16} className="text-gray-500" />
                <input
                  autoFocus
                  value={commandQuery}
                  onChange={e => setCommandQuery(e.target.value)}
                  placeholder="Search projects (e.g. whatsapp, hiring, health)..."
                  className="w-full bg-transparent border-none outline-none text-sm font-mono text-white placeholder-gray-600"
                />
                <span className="hidden md:inline-flex items-center gap-1 text-[10px] font-mono text-gray-500 border border-white/10 px-2 py-1 uppercase">
                  <span className="opacity-70">cmd</span>+
                  <span className="opacity-70">k</span>
                </span>
              </div>

              <div className="max-h-80 overflow-y-auto py-2">
                {commandResults.length === 0 ? (
                  <div className="px-4 py-3 text-xs font-mono text-gray-500">
                    No matching projects. Try another keyword.
                  </div>
                ) : (
                  commandResults.map(project => {
                    const link = project.link;
                    if (!link) return null;

                    return (
                      <button
                        key={project.title}
                        onClick={() => {
                          window.open(link, '_blank', 'noopener,noreferrer');
                          setIsCommandOpen(false);
                        }}
                        className="w-full text-left px-4 py-3 hover:bg-white/5 transition-colors flex flex-col gap-1"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-sm font-display text-white">{project.title}</span>
                          <span className="text-[10px] font-mono text-primary border border-primary/40 px-2 py-0.5">
                            {project.year}
                          </span>
                        </div>
                        <p className="text-[11px] font-mono text-gray-500 line-clamp-2">
                          {project.description}
                        </p>
                      </button>
                    );
                  })
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};