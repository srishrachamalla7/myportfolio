import { Project, TechCategory, Statistic } from './types';
import { Code2, Brain, Database, Wrench, Cpu, CreditCard } from 'lucide-react';

export const PROFILE = {
  name: "Srish Rachamalla",
  role: "AI Engineer & Developer",
  tagline: "I turn raw ideas into razor-sharp AI experiences that look good, feel natural, and just work.",
  about: "As an AI Engineer & Developer in Hyderabad, India, I'm dedicated to building innovative AI solutions. Currently at Spearsoft, I focus on leveraging cutting-edge AI to create efficient and intelligent systems for businesses. I thrive on continuous learning and applying a versatile tech stack to tackle diverse problems. My passion lies in the end-to-end process of bringing AI concepts to life and contributing to a future powered by smart, user-friendly technology."
};

export const STATS: Statistic[] = [
  { label: "Years Experience", value: "3", suffix: "+" },
  { label: "Projects Completed", value: "75", suffix: "" },
  { label: "Hackathons", value: "50", suffix: "+" },
];

export const TECH_STACK: TechCategory[] = [
  {
    name: "Languages & Frameworks",
    icon: "Code2",
    skills: ["Python", "Flask", "Langchain", "LlamaIndex", "Langflow", "Gradio", "Streamlit", "FastAPI", "BeautifulSoup", "Scrapy", "Selenium", "TypeScript", "React", "React Native"]
  },
  {
    name: "AI & ML",
    icon: "Brain",
    skills: ["Unsloth", "Hugging Face", "scikit-learn", "OpenCV", "PyTorch", "CrewAI", "Autogen", "OpenAI", "Groq", "Pandas", "NumPy", "Ollama", "OpenRouter", "Google Gemma"]
  },
  {
    name: "Databases",
    icon: "Database",
    skills: ["MySQL", "MongoDB", "Firebase", "Redis", "Supabase"]
  },
  {
    name: "Tools & Platforms",
    icon: "Wrench",
    skills: ["GitHub", "DVC", "Docker", "Twilio", "Vercel", "Railway", "Netlify", "Raspberry Pi", "Render", "Spaces", "NGINX", "Postman", "Jellyfin", "Make", "Retell AI", "Vapi", "VectorShift", "N8N"]
  },
  {
    name: "AI Dev Tools",
    icon: "Cpu",
    skills: ["Bolt.new", "Lovable", "Cursor", "WindSurf", "Firebase Studio", "GitHub Copilot", "Claude Code", "Gemini CLI"]
  },
  {
    name: "Payment & Communication",
    icon: "CreditCard",
    skills: ["Stripe", "Razorpay", "Sendgrid", "Gupshup"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "MarketMind",
    description: "AI tool that analyzes products, competitors, and market position, generating insightful reports.",
    year: "2024",
    tags: ["Python", "LangChain", "GPT-4", "Streamlit", "Spaces", "Web Scraping"],
    link: "https://github.com/srishrachamalla7/MarketMind",
    featured: true
  },
  {
    title: "Legal Agent",
    description: "Automated legal research, content creation, and document editing using cutting-edge AI tools. Reduced document preparation time by 50%.",
    year: "2023",
    tags: ["Python", "CrewAI", "Langchain", "Crewtools", "Tavily", "Ollama"],
    link: "https://github.com/srishrachamalla7/LegalAI-Crew",
    featured: true
  },
  {
    title: "Multimodal AI Assistant",
    description: "Advanced conversational AI combining text, voice, and visual analysis for comprehensive user queries.",
    year: "2023",
    tags: ["Python", "LLaVA", "Whisper", "React"],
    link: "https://github.com/srishrachamalla7",
    featured: true
  },
  {
    title: "SST-Thinking - Edge AI LLM",
    description: "Fine-tuned Google Gemma-3-270M model optimized for edge devices. Uses Unsloth for 4x faster training.",
    year: "2025",
    tags: ["Python", "Unsloth", "Fine-tuning", "LLM", "Edge AI", "Google Gemma", "Mobile AI"],
    featured: false
  },
  {
    title: "Custom Domain-Specific LLM",
    description: "Fine-tuned large language model specialized for industry-specific applications using Unsloth framework.",
    year: "2025",
    tags: ["Python", "Unsloth", "Fine-tuning", "LLM", "PEFT", "LoRA", "Model Optimization"],
    featured: false
  },
  {
    title: "Autohire - Unified Hiring Platform",
    description: "A comprehensive hiring platform delivering business impact. Includes prep for students and placements for colleges.",
    year: "2024",
    tags: ["Python", "FastAPI", "MongoDB", "TTS", "WebRTC", "LLM", "Razorpay"],
    featured: false
  },
  {
    title: "Leadspear",
    description: "Find and connect with perfect leads through AI-powered matching.",
    year: "2024",
    tags: ["Python", "FastAPI", "MongoDB", "Sendgrid", "LLM", "Twilio", "Razorpay"],
    featured: false
  },
  {
    title: "AI Marketplace",
    description: "Access and scale trusted AI solutions through an enterprise marketplace.",
    year: "2024",
    tags: ["Python", "Flask", "n8n", "MongoDB", "LLM", "CrewAI", "Docker"],
    featured: false
  },
  {
    title: "Fauxtalks",
    description: "Generate one-on-one or group chat conversations for platforms like WhatsApp, Facebook Messenger, Instagram.",
    year: "2024",
    tags: ["React", "TypeScript", "Vibecoding", "Stripe", "Claudecode", "Docker"],
    featured: false
  },
  {
    title: "Digitxpro",
    description: "Purchase verified contacts for lead generation and deal closing.",
    year: "2024",
    tags: ["Python", "Pandas", "MongoDB", "Stripe", "Vercel", "GeminiCLI"],
    featured: false
  },
  {
    title: "Storyboard GEN (Hackathon)",
    description: "AI-powered storyboard generator in comic style. Placed 77th out of 3300 submissions.",
    year: "2024",
    tags: ["Python", "GeminiAPI", "Google AI Studio"],
    featured: false
  },
  {
    title: "Marketmind (Hackathon)",
    description: "AI agent for business owners to analyze competitors, market position, and growth strategies. Placed 11th out of 900+ submissions.",
    year: "2024",
    tags: ["Python", "CrewAI", "Serper", "Tavily", "LLM", "GROQ"],
    featured: false
  },
  {
    title: "Mentalwellbeing Mobile App",
    description: "Mobile app focused on mental wellness and wellbeing.",
    year: "2024",
    tags: ["React Native", "Expo", "Claudecode", "Android Studio"],
    featured: false
  },
  {
    title: "Ideal Trendz Interiors",
    description: "Corporate and residential interior design website showcasing services, portfolio, and contact.",
    year: "2024",
    tags: ["Vibecoding", "Web Development"],
    featured: false
  },
  {
    title: "Hironika Travels",
    description: "Premium cab services in Bengaluru with airport drops, outstation trips, and Karnataka tour packages.",
    year: "2024",
    tags: ["Vibecoding", "Web Development"],
    featured: false
  },
  {
    title: "EchelonX AI",
    description: "AI-powered business transformation site offering chatbots, voicebots, automation, and analytics.",
    year: "2024",
    tags: ["Vibecoding", "Web Development"],
    featured: false
  },
  {
    title: "Ishta Club",
    description: "Landing site for wellness-focused apps like Nature Bubbles, Guru Platform, and Ishta Life.",
    year: "2024",
    tags: ["Vibecoding", "Web Development"],
    featured: false
  },
  {
    title: "Finance Tracker",
    description: "Personal finance tracker web app for tracking expenses, budgets, and insights.",
    year: "2024",
    tags: ["Vibecoding", "Web Development"],
    featured: false
  },
  {
    title: "Calorie Tracker",
    description: "Calorie tracking app with food item descriptions and daily intake logging.",
    year: "2024",
    tags: ["Vibecoding", "Web Development"],
    featured: false
  },
  {
    title: "Binge And Party",
    description: "Modern private theater booking platform with online payments and scheduling.",
    year: "2024",
    tags: ["Vibecoding", "Web Development"],
    featured: false
  },
  {
    title: "AI WhatsApp Agent",
    description: "WhatsApp agent for customers to book services directly through WhatsApp.",
    year: "2024",
    tags: ["Python", "MongoDB", "Twilio", "Gupshup"],
    featured: false
  },
  {
    title: "EVA Platform",
    description: "Suite of AI-powered tools for streamlining business processes including recruitment and compliance auditing.",
    year: "2024",
    tags: ["Python", "OpenAI", "LangChain", "OCR", "SQL", "HuggingFace"],
    featured: false
  },
  {
    title: "Healthmate",
    description: "AI-driven healthcare diagnostics tool that analyzes patient information with 95% accuracy.",
    year: "2024",
    tags: ["CrewAI", "Flask", "LLama", "GPT-4", "PubMed", "ASR", "n8n"],
    featured: false
  },
  {
    title: "Mailmagnet",
    description: "AI-powered email automation tool that creates personalized email campaigns by analyzing sender services.",
    year: "2024",
    tags: ["OpenAI", "LangChain", "Flask", "MongoDB", "Pandas"],
    featured: false
  },
  {
    title: "ConsumeNice",
    description: "Web app leveraging OpenFoodFacts API and Google Gemini AI for food product insights.",
    year: "2024",
    tags: ["Python", "Streamlit", "Google Gemini", "OpenFoodFacts API", "Spaces"],
    featured: false
  },
  {
    title: "PDF Information Retrieval",
    description: "Intelligent system for extracting and indexing data from PDF documents using RAG and LlamaIndex.",
    year: "2023",
    tags: ["Python", "LlamaIndex", "FastAPI", "Redis", "Llama2"],
    featured: false
  },
  {
    title: "Linkedin Scraper",
    description: "Automated LinkedIn profile summarization using AI-driven OCR and language models.",
    year: "2023",
    tags: ["Python", "Web Scraping", "GPT-4", "OCR", "Selenium"],
    featured: false
  },
  {
    title: "Second Brain Telegram Bot",
    description: "Telegram bot that allows users to save and retrieve notes, images, and links using vector DBs.",
    year: "2025",
    tags: ["Python", "Telegram API", "Vector Database", "CrewAI", "Flask", "Railway", "Llama 3.1"],
    featured: false
  },
  {
    title: "Movie Recommendation System",
    description: "Python-based movie recommendation system that suggests movies based on genres and ratings using Pandas.",
    year: "2022",
    tags: ["Python", "Pandas", "Movie Recommendations", "Data Analysis", "Machine Learning"],
    featured: false
  },
  {
    title: "BlogWriter_Agent",
    description: "Multi-agent system for collaborative blog content generation, using CrewAI and Ollama.",
    year: "2024",
    tags: ["Python", "Multi-agent Systems", "Content Generation", "Ollama", "CrewAI"],
    featured: false
  },
  {
    title: "Interactive Chat with Ollama",
    description: "Streamlit-based chat interface for Ollama LLM featuring real-time responses and history.",
    year: "2024",
    tags: ["Python", "Streamlit", "Ollama", "Chat Interface"],
    featured: false
  },
  {
    title: "Gold Rates Tracker",
    description: "Tracks and visualizes gold rates (24K, 22K, 18K) across various Indian cities.",
    year: "2024",
    tags: ["Python", "Data Visualization", "Web Scraping", "Spaces", "Plotly"],
    featured: false
  },
  {
    title: "Yours Second Brain App",
    description: "Web application that allows users to save and retrieve notes, financial records, and bookmarks.",
    year: "2025",
    tags: ["lovable", "Supabase", "Web App", "Netlify"],
    featured: false
  }
];

export const SOCIALS = {
  github: "https://github.com/srishrachamalla7",
  huggingface: "https://huggingface.co/Srish117",
  linkedin: "https://linkedin.com/in/srishrachamalla",
  twitter: "https://x.com/Srishrachamalla",
  medium: "https://medium.com/@srishrachamalla77",
  resume: "https://drive.google.com/uc?export=download&id=16WLM7gbXKKttnOKoyY6aKI6C_jt5Gqg6",
};

export const CONTACT_WEBHOOK_URL = "https://hook.eu2.make.com/y7ob6b2idkkb0z3vhclc2e13j4353m14";
