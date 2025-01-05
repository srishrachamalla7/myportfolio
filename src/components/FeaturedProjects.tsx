import React from 'react';
import { Brain, Code, Cpu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProjectCard from './ProjectCard';

const FeaturedProjects = () => {
  const navigate = useNavigate();
  
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold mb-12 gradient-text">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div onClick={() => navigate('/projects')} className="cursor-pointer">
          <ProjectCard
            title="MarketMind"
            description="AI tool that analyzes products, competitors, and market position, generating insightful reports"
            icon={<Brain className="w-6 h-6" />}
            link="#"
          />
        </div>
        <div onClick={() => navigate('/projects')} className="cursor-pointer">
          <ProjectCard
            title="Legal Agent"
            description="Automated legal research, content creation, and document editing using cutting-edge AI tools"
            icon={<Cpu className="w-6 h-6" />}
            link="#"
          />
        </div>
        <div onClick={() => navigate('/projects')} className="cursor-pointer">
          <ProjectCard
            title="Multimodal AI"
            description="Advanced conversational AI combining text, voice, and visual analysis"
            icon={<Code className="w-6 h-6" />}
            link="#"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;