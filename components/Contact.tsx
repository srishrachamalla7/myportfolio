import React from 'react';
import { Send, Mail, Github, Linkedin, Twitter, ArrowUpRight, Check, Sparkles, PenSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { PROFILE, SOCIALS, CONTACT_WEBHOOK_URL } from '../constants';

export const Contact: React.FC = () => {
  const socialLinks = [
    { Icon: Github, href: SOCIALS.github, label: 'Github' },
    { Icon: Sparkles, href: SOCIALS.huggingface, label: 'HuggingFace' },
    { Icon: Linkedin, href: SOCIALS.linkedin, label: 'LinkedIn' },
    { Icon: Twitter, href: SOCIALS.twitter, label: 'Twitter' },
    { Icon: PenSquare, href: SOCIALS.medium, label: 'Medium' },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formElement = e.currentTarget;
    const formData = new FormData(formElement);

    const payload = {
      name: (formData.get('name') as string) || '',
      email: (formData.get('email') as string) || '',
      message: (formData.get('message') as string) || '',
    };

    try {
      const response = await fetch(
        CONTACT_WEBHOOK_URL,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        toast.custom((t) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3"
          >
            <Check className="w-5 h-5" />
            <span>Message sent successfully!</span>
          </motion.div>
        ));
        formElement.reset();
      } else {
        toast.error('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to send message. Please try again.');
    }
  };

  const handleResumeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (!SOCIALS.resume) return;

    const link = document.createElement('a');
    link.href = SOCIALS.resume;
    link.download = 'Srish_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

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

  return (
    <footer id="contact" className="relative py-32 bg-dark overflow-hidden border-t border-white/10">
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left Side */}
          <div>
            <div className="inline-block bg-primary px-3 py-1 mb-6">
               <span className="font-mono text-xs font-bold text-black uppercase">Status: Open for Work</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-display font-black mb-8 text-white leading-[0.9]">
              LET'S <br /><span className="text-stroke hover:text-primary transition-colors">COLLAB</span>
            </h2>
            
            <div className="space-y-8 mb-12">
               <a href="mailto:contact@srish.site" className="block group">
                 <div className="text-sm font-mono text-gray-500 uppercase mb-1 group-hover:text-primary">Email Transmission</div>
                 <div className="text-2xl md:text-3xl text-white font-display font-bold flex items-center gap-2">
                    contact@srish.site
                    <ArrowUpRight className="opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all text-primary" />
                 </div>
               </a>
            </div>

            <div className="flex gap-4">
              {socialLinks.map(({ Icon, href, label }) => (
                href ? (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="h-14 w-14 border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:text-black hover:border-primary transition-all duration-300"
                  >
                    <Icon size={24} />
                  </a>
                ) : null
              ))}
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-[#0a0a0a] p-8 md:p-12 border border-white/10">
             <h3 className="text-2xl font-display font-bold text-white mb-8 uppercase">Send Transmission</h3>
             <form className="space-y-6" onSubmit={handleSubmit}>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-xs font-mono text-gray-500 uppercase">Identity</label>
                       <input name="name" type="text" className="w-full bg-black border border-white/20 px-4 py-4 text-white focus:outline-none focus:border-primary transition-all placeholder-gray-700 font-mono rounded-none" placeholder="NAME" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-mono text-gray-500 uppercase">Coordinates</label>
                       <input name="email" type="email" className="w-full bg-black border border-white/20 px-4 py-4 text-white focus:outline-none focus:border-primary transition-all placeholder-gray-700 font-mono rounded-none" placeholder="EMAIL" />
                    </div>
                 </div>
                 <div className="space-y-2">
                     <label className="text-xs font-mono text-gray-500 uppercase">Payload</label>
                     <textarea name="message" rows={4} className="w-full bg-black border border-white/20 px-4 py-4 text-white focus:outline-none focus:border-primary transition-all placeholder-gray-700 font-mono resize-none rounded-none" placeholder="MESSAGE..."></textarea>
                 </div>
                 <button className="w-full bg-primary text-black font-black uppercase tracking-wider py-5 hover:bg-white transition-colors flex items-center justify-center gap-2 group">
                    Transmit
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                 </button>
             </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-32 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-xs font-mono uppercase">
             © 2025 {PROFILE.name} // All Systems Operational
          </p>
          <div className="flex gap-8 text-xs font-mono text-gray-600 uppercase">
             {SOCIALS.github && (
               <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Github</a>
             )}
             {SOCIALS.linkedin && (
               <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
             )}
             {SOCIALS.huggingface && (
               <a href={SOCIALS.huggingface} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">HuggingFace</a>
             )}
             {SOCIALS.twitter && (
               <a href={SOCIALS.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Twitter</a>
             )}
             {SOCIALS.medium && (
               <a href={SOCIALS.medium} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Medium</a>
             )}
             {SOCIALS.resume && (
               <a
                 href={SOCIALS.resume}
                 onClick={handleResumeClick}
                 className="hover:text-primary transition-colors cursor-pointer"
               >
                 Resume
               </a>
             )}
          </div>
        </div>
      </div>
    </footer>
  );
};