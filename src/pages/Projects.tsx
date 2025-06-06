import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Brain,
  Code,
  Cpu,
  LinkedinIcon,
  BrainCircuitIcon,
  MessageSquare,
  FileSearch,
  Film,
  Pencil,
  X,
  ScaleIcon,
  AccessibilityIcon,
  Apple,
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
    title: 'EVA Platform',
    description: 'All-encompassing suite of AI-powered tools for streamlining business processes including recruitment, compliance auditing, and market analysis. Features include AI-driven recruitment assistant (EVA People) for candidate scoring and automated compliance auditing (EVA Process) using fine-tuned LLMs.',
    icon: <Brain className="w-6 h-6" />,
    link: 'https://www.spearsoftech.com/Home',
    date: '2024',
    tags: ['Python', 'OpenAI', 'LangChain', 'OCR', 'SQL', 'HuggingFace'],
  },
  {
    title: 'Healthmate',
    description: 'AI-driven healthcare diagnostics tool that analyzes patient information with 95% accuracy. Predicts diseases, recommends medication, and suggests lifestyle changes using advanced LLMs and medical research integration.',
    // Doctor icon
    icon: <AccessibilityIcon className="w-6 h-6" />,
    link: 'https://www.spearsoft.ai/',
    date: '2024',
    tags: ['CrewAI', 'Flask', 'LLama', 'GPT-4', 'PubMed', 'ASR', 'n8n'],
  },
  {
    title: 'Mailmagnet',
    description: 'AI-powered email automation tool that creates personalized email campaigns by analyzing sender services and recipient company data through advanced webscraping.',
    icon: <MessageSquare className="w-6 h-6" />,
    link: 'https://www.spearsoft.ai/',
    date: '2024',
    tags: ['OpenAI', 'LangChain', 'Flask', 'MongoDB', 'Pandas'],
  },
  {
    title: 'MarketMind',
    description:
      'AI tool that analyzes products, competitors, and market position, generating insightful reports',
    icon: <Brain className="w-6 h-6" />,
    link: 'https://github.com/srishrachamalla7/MarketMind',
    date: '2024',
    tags: ['Python', 'LangChain', 'GPT-4', 'Streamlit', 'Spaces', 'Web Scraping'],
  },
  {
    title: 'Legal Agent',
    description:
      'Automated legal research, content creation, and document editing using cutting-edge AI tools. Enhanced research accuracy, streamlined legal workflows, and reduced document preparation time by 50%.',
    icon: <ScaleIcon className="w-6 h-6" />,
    link: 'https://github.com/srishrachamalla7/LegalAI-Crew',
    date: '2023',
    tags: ['Python', 'CrewAI', 'Langchain', 'Crewtools', 'Tavily', 'Ollama'],
  },
  {
    title: 'ConsumeNice',
    description:
      'A web application leveraging OpenFoodFacts API and Google Gemini AI to provide consumers with detailed insights about food products, including nutritional value, environmental impact, and packaging details.',
    icon: <Apple className="w-6 h-6" />,
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
    icon: <LinkedinIcon className="w-6 h-6" />,
    link: 'https://github.com/srishrachamalla7/Linkedin_Scraper',
    date: '2023',
    tags: ['Python', 'Web Scraping', 'GPT-4', 'OCR', 'Selenium'],
  },
  {
    title: 'Second Brain Telegarm Bot',
    description:
      'A Telegram bot that allows users to save and retrieve notes, images, and links. It uses a vector database for efficient storage and retrieval.',
    icon: <BrainCircuitIcon className="w-6 h-6" />,
    link: 'https://t.me/thooooootbot',
    date: '2025',
    tags: ['Python', 'Telegram API', 'Vector Database', 'CrewAI', 'Flask', 'Railway', 'Llama 3.1'],
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
      'Multi-agent Systems',
      'Content Generation',
      'Ollama',
      'CrewAI',
    ],
  },
  {
    title: 'Interactive Chat with Ollama LLM',
    description:
      'A Streamlit-based chat interface for Ollama LLM featuring real-time responses, styled chat bubbles, and chat history management. Provides smooth conversational experience with streamed responses.',
    icon: <MessageSquare className="w-6 h-6" />,
    link: 'https://github.com/srishrachamalla7/ollama_chatbot',
    date: '2024',
    tags: ['Python', 'Streamlit', 'Ollama', 'Chat Interface'],
    },
    {
      title: 'Gold Rates Tracker',
      description: 'Python-based application that tracks and visualizes gold rates (24K, 22K, 18K) across various Indian cities. Features interactive graphs and real-time data visualization.',
      icon: <Code className="w-6 h-6" />,
      link: 'https://huggingface.co/spaces/Srish117/GoldRates',
      date: '2024',
      tags: ['Python', 'Data Visualization', 'Web Scraping', 'Spaces', 'Plotly'],
    },
    {
      title: 'Yours Second Brain App',
      description: 'A web application that allows users to save and retrieve notes, financial records, password management,bookmarks and todo lists. It uses supabase for efficient storage and retrieval.',
      icon: <Brain className="w-6 h-6" />,
      link: 'https://yourssecondbrain.netlify.app/',
      date: '2025',
      tags: ['lovable', 'Supabase', 'Web App', 'Netlify'],
    }
];

export default Projects;
