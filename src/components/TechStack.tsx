import React from 'react';
import { motion } from 'framer-motion';

const TechStack = () => {
  const categories = [
    {
      title: 'Languages & Frameworks',
      items: [
        {
          name: 'Python',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        },
        {
          name: 'Flask',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
        },
        {
          name: 'FastAPI',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
        },
        {
          name: 'Langchain',
          image: 'https://avatars.githubusercontent.com/u/126733545?s=200&v=4',
        },
        {
          name: 'LlamaIndex',
          image: 'https://avatars.githubusercontent.com/u/118671542?s=200&v=4',
        },
        {
          name: 'Langflow',
          image: 'https://avatars.githubusercontent.com/u/123665820?s=200&v=4',
        },
        {
          name: 'Selenium',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg',
        },
        {
          name: 'Scrapy',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scrapy/scrapy-original.svg',
        },
      ],
    },
    {
      title: 'AI & ML',
      items: [
        {
          name: 'Hugging Face',
          image: 'https://huggingface.co/front/assets/huggingface_logo.svg',
        },
        {
          name: 'PyTorch',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
        },
        {
          name: 'OpenCV',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg',
        },
        {
          name: 'scikit-learn',
          image: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg',
        },
        {
          name: 'OpenAI',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openai/openai-original.svg',
        },
        {
          name: 'Pandas',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
        },
        {
          name: 'NumPy',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
        },
        {
          name: 'TensorFlow',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
        },
      ],
    },
    {
      title: 'Databases',
      items: [
        {
          name: 'MongoDB',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        },
        {
          name: 'MySQL',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        },
        {
          name: 'Redis',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
        },
        {
          name: 'PostgreSQL',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
        },
        {
          name: 'Supabase',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg',
        },
      ],
    },
    {
      title: 'Tools & Platforms',
      items: [
        {
          name: 'Docker',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
        },
        {
          name: 'GitHub',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
        },
        {
          name: 'VS Code',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
        },
        {
          name: 'NGINX',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg',
        },
        {
          name: 'Jupyter',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg',
        },
      ],
    },
  ];

  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-12 gradient-text text-center">
        Tech Stack
      </h2>
      <div className="space-y-12">
        {categories.map((category, categoryIndex) => (
          <div key={category.title} className="mb-8">
            <h3 className="text-xl font-semibold mb-6 text-gray-300 dark:text-gray-700">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {category.items.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + categoryIndex * 0.2 }}
                  className="flex flex-col items-center p-4 card hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] border border-transparent hover:border-purple-500/50"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="tech-icon mb-2"
                  />
                  <span className="text-sm text-gray-400 dark:text-gray-600">{item.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;