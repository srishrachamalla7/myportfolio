import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Brain,
  Code,
  Cpu,
  MessageSquare,
  FileSearch,
  Film,
  Pencil,
  X,
} from 'lucide-react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = Array.from(
    new Set(projects.flatMap((project) => project.tags || []))
  );

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filteredProjects = projects.filter(
    (project) =>
      selectedTags.length === 0 ||
      selectedTags.every((tag) => project.tags?.includes(tag))
  );

  return (
    <div className="container mx-auto px-4 pt-24 pb-20">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold mb-8 gradient-text"
      >
        Recent Projects
      </motion.h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-300">
          Filter by Tags
        </h2>
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-4 py-2 rounded-full transition-all ${
                selectedTags.includes(tag)
                  ? 'bg-purple-500 text-white'
                  : 'bg-purple-500/10 text-purple-400'
              }`}
            >
              {tag}
            </button>
          ))}
          {selectedTags.length > 0 && (
            <button
              onClick={() => setSelectedTags([])}
              className="px-4 py-2 rounded-full bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white transition-all"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
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
        </AnimatePresence>
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
    tags: ['Python', 'LangChain', 'GPT-4', 'Streamlit', 'Spaces', 'Scraping'],
  },
  {
    title: 'Legal Agent',
    description:
      'Automated legal research, content creation, and document editing using cutting-edge AI tools. Enhanced research accuracy, streamlined legal workflows, and reduced document preparation time by 50%.',
    icon: <Cpu className="w-6 h-6" />,
    link: 'https://github.com/srishrachamalla7/LegalAI-Crew',
    date: '2023',
    tags: ['Python', 'CrewAI', 'Langchain', 'Crewtools', 'Tavily', 'Ollama'],
  },
  {
    title: 'ConsumeNice',
    description:
      'A web application leveraging OpenFoodFacts API and Google Gemini AI to provide consumers with detailed insights about food products, including nutritional value, environmental impact, and packaging details.',
    icon: <Code className="w-6 h-6" />,
    link: 'https://github.com/Saiteja1244/ConsumeNice',
    date: '2024',
    tags: ['Python', 'Streamlit', 'Google Gemini', 'OpenFoodFacts API', 'Spaces'],
  },
  {
    title: 'Multimodal AI Assistant',
    description:
      'Built a system combining text, voice, and visual analysis for comprehensive user queries. Integrated multiple AI models for enhanced interaction capabilities.',
    icon: <MessageSquare className="w-6 h-6" />,
    link: 'https://github.com/srishrachamalla7',
    date: '2023',
    tags: ['Python', 'LLaVA', 'Whisper', 'React'],
  },
  {
    title: 'PDF Information Retrieval',
    description:
      'Developed an intelligent system for extracting and indexing data from PDF documents using RAG and LlamaIndex, enabling efficient search and retrieval.',
    icon: <FileSearch className="w-6 h-6" />,
    link: 'https://github.com/srishrachamalla7',
    date: '2023',
    tags: ['Python', 'LlamaIndex', 'FastAPI', 'Redis', 'Llama2'],
  },
  {
    title: 'Linkedin Scraper',
    description:
      'Automated LinkedIn profile summarization using AI-driven OCR and language models. Streamlined profile data extraction, enhanced summarization accuracy, and reduced manual effort in profile analysis by 70%.',
    icon: <Code className="w-6 h-6" />,
    link: 'https://github.com/srishrachamalla7/Linkedin_Scraper',
    date: '2023',
    tags: ['Python', 'Scrapy', 'GPT-4', 'OCR', 'Selenium'],
  },
  {
    title: 'Movie Recommendation System',
    description:
      'A Python-based movie recommendation system that suggests movies based on genres and ratings using Pandas.',
    icon: <Film className="w-6 h-6" />,
    link: 'https://github.com/srishrachamalla7/Movie_Recommend.git',
    date: '2022',
    tags: [
      'Python',
      'Pandas',
      'Movie Recommendations',
      'Data Analysis',
      'Machine Learning',
    ],
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
