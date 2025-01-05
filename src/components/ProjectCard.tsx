import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  date?: string;
  tags?: string[];
  expanded?: boolean;
}

const ProjectCard = ({ title, description, icon, link, date, tags, expanded = false }: ProjectCardProps) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`card group block ${expanded ? 'p-8' : 'p-6'} relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] border border-transparent hover:border-purple-500/50`}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100"
        initial={{ rotate: 0 }}
        whileHover={{ 
          rotate: 360,
          scale: 1.5,
          transition: { duration: 20, repeat: Infinity, ease: "linear" }
        }}
      />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <motion.div
            className="p-2 rounded-lg bg-purple-500/10 text-purple-400"
            whileHover={{
              scale: 1.1,
              rotate: [0, -10, 10, -10, 0],
              transition: { duration: 0.5 }
            }}
          >
            {icon}
          </motion.div>
          <motion.div
            whileHover={{
              x: 5,
              y: -5,
              transition: { duration: 0.2 }
            }}
          >
            <ArrowUpRight className="text-gray-400 group-hover:text-purple-400 transition-colors" />
          </motion.div>
        </div>
        
        <motion.h3
          className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors"
          initial={{ x: 0 }}
          whileHover={{ x: 10, transition: { duration: 0.2 } }}
        >
          {title}
        </motion.h3>
        
        <motion.p
          className="text-gray-400 mb-4"
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
        >
          {description}
        </motion.p>

        {expanded && (
          <motion.div
            className="mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {date && (
              <div className="text-sm text-gray-500 mb-2">
                {date}
              </div>
            )}
            {tags && (
              <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                  <motion.span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(139, 92, 246, 0.2)",
                      transition: { duration: 0.2 }
                    }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </div>
    </motion.a>
  );
};

export default ProjectCard;