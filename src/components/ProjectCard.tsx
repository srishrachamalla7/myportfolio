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
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
          {icon}
        </div>
        <ArrowUpRight className="text-gray-400 group-hover:text-purple-400 transition-colors" />
      </div>
      
      <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors">
        {title}
      </h3>
      
      <p className="text-gray-400 mb-4">
        {description}
      </p>

      {expanded && (
        <div className="mt-4">
          {date && (
            <div className="text-sm text-gray-500 mb-2">
              {date}
            </div>
          )}
          {tags && (
            <div className="flex flex-wrap gap-2">
              {tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </motion.a>
  );
};

export default ProjectCard;