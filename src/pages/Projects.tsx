import React from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  Code,
  Cpu,
  MessageSquare,
  FileSearch,
  Film,
  Pencil,
} from 'lucide-react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (
    <div className="container mx-auto px-4 pt-24 pb-20">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold mb-12 gradient-text"
      >
        Recent Projects
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              icon={project.icon}
              link={project.link}
              date={project.date}
              tags={project.tags}
              expanded
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const projects = [
  {
    title: 'MarketMind',
    description:
      'AI tool that analyzes products, competitors, and market position, generating insightful reports',
    icon: <Brain className="w-6 h-6" />,
    link: 'https://github.com/srishrachamalla7/MarketMind',
    date: '2024',
    tags: ['Python', 'LangChain', 'GPT-4o', 'Streamlit', 'Spaces', 'Scraping'],
  },
  {
    title: 'EVA Process',
    description:
      'Automated compliance checks and operational efficiency analysis using advanced AI algorithms. Improved compliance transparency and reduced manual audit time by 60%.',
    icon: <Cpu className="w-6 h-6" />,
    link: 'https://github.com/yourusername/eva-process',
    date: '2023',
    tags: ['Python', 'LLaMA', 'Flask', 'OpenAI', 'MongoDB'],
  },
  {
    title: 'Multimodal AI Assistant',
    description:
      'Built a system combining text, voice, and visual analysis for comprehensive user queries. Integrated multiple AI models for enhanced interaction capabilities.',
    icon: <MessageSquare className="w-6 h-6" />,
    link: 'https://github.com/yourusername/multimodal-ai',
    date: '2023',
    tags: ['Python', 'LLaVA', 'Whisper', 'React'],
  },
  {
    title: 'PDF Information Retrieval',
    description:
      'Developed an intelligent system for extracting and indexing data from PDF documents using RAG and LlamaIndex, enabling efficient search and retrieval.',
    icon: <FileSearch className="w-6 h-6" />,
    link: 'https://github.com/yourusername/pdf-retrieval',
    date: '2023',
    tags: ['Python', 'LlamaIndex', 'FastAPI', 'Redis'],
  },
  {
    title: 'Web Scraping AI',
    description:
      'Created an AI-powered web scraping system using LLMs for intelligent data extraction and processing from various website structures.',
    icon: <Code className="w-6 h-6" />,
    link: 'https://github.com/yourusername/web-scraping-ai',
    date: '2023',
    tags: ['Python', 'Scrapy', 'GPT-4o', 'MongoDB'],
  },
  {
    title: 'Movie Recommendation System',
    description:
      'A Python-based movie recommendation system that suggests movies based on genres and ratings using Pandas.',
    icon: <Film className="w-6 h-6" />,
    link: 'https://github.com/srishrachamalla7/Movie_Recommend.git',
    date: '2022',
    tags: ['Python', 'Pandas', 'Movie Recommendations', 'Data Analysis'],
  },
  {
    title: 'BlogWriter_Agent',
    description:
      'A multi-agent system for collaborative blog content generation, using CrewAI and Ollama for autonomous content creation and editing.',
    icon: <Pencil className="w-6 h-6" />,
    link: 'https://github.com/srishrachamalla7/BlogWriter_Agent.git',
    date: '2024',
    tags: [
      'Python',
      'AI',
      'Multi-agent Systems',
      'Content Generation',
      'Ollama',
      'CrewAI',
    ],
  },
];

export default Projects;
