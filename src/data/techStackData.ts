import { TechCategory } from '../types/techStack';

export const categories: TechCategory[] = [
    {
      title: 'Languages & Frameworks',
      items: [
        {
          name: 'Python',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
          description: 'Primary language for AI/ML development and backend services'
        },
        {
          name: 'Flask',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
          description: 'Web framework for building scalable backend services'
        },
        {
          name: 'Langchain',
          image: 'https://avatars.githubusercontent.com/u/126733545?s=200&v=4',
          description: 'Framework for developing LLM-powered applications'
        },
        {
          name: 'LlamaIndex',
          image: 'https://docs.llamaindex.ai/en/stable/_static/assets/LlamaSquareBlack.svg',
          description: 'Data framework for LLM applications'
        },
        {
          name: 'Langflow',
          image: 'https://th.bing.com/th?id=OIP.NC6zNEeWIp32MeHbLRYYFgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
          description: 'UI for LangChain, making it easy to experiment and prototype'
        },
        {
          name: 'Gradio',
          image: 'https://raw.githubusercontent.com/gradio-app/gradio/main/readme_files/gradio.svg',
          description: 'Framework for creating ML web interfaces'
        },
        {
          name: 'Streamlit',
          image: 'https://streamlit.io/images/brand/streamlit-mark-color.png',
          description: 'Framework for creating data applications'
        },
        {
          name: 'FastAPI',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
          description: 'Modern web framework for building APIs'
        },
        {
          name: 'BeautifulSoup',
          image: 'https://www.crummy.com/software/BeautifulSoup/bs4/doc/_images/6.1.jpg',
          description: 'Library for web scraping and HTML parsing'
        },
        {
          name: 'Scrapy',
          image: 'https://scrapeops.io/img/sdk-icons/scrapy-logo.png',
          description: 'Framework for extracting data from websites'
        },
        {
          name: 'Selenium',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg',
          description: 'Tool for web browser automation'
        }
      ]
    },
    {
      title: 'AI & ML',
      items: [
        {
          name: 'Hugging Face',
          image: 'https://huggingface.co/front/assets/huggingface_logo.svg',
          description: 'Platform for sharing and deploying ML models'
        },
        {
          name: 'scikit-learn',
          image: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg',
          description: 'Machine learning library for classical ML algorithms'
        },
        {
          name: 'OpenCV',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg',
          description: 'Library for computer vision tasks'
        },
        {
          name: 'PyTorch',
          image: 'https://pytorch.org/assets/images/pytorch-logo.png',
          description: 'Deep learning framework'
        },
        {
          name: 'CrewAI',
          image: 'https://cdn.prod.website-files.com/66cf2bfc3ed15b02da0ca770/66d07240057721394308addd_Logo%20(1).svg',
          description: 'Framework for orchestrating role-playing AI agents'
        },
        {
          name: 'Autogen',
          image: 'https://camo.githubusercontent.com/ef7d1a44f4abc5699119b28077235bbda84152fa2d74a4ea5abc7d1bccffdcbd/68747470733a2f2f6d6963726f736f66742e6769746875622e696f2f6175746f67656e2f302e322f696d672f61672e737667',
          description: 'Framework for building multi-agent systems'
        },
        {
          name: 'OpenAI',
          image: 'https://openai.com/favicon.ico',
          description: 'Leading AI research company and API provider'
        },
        {
          name: 'Groq',
          image: 'https://www.hpcwire.com/wp-content/uploads/2022/10/GROQ-logo-no-line.png',
          description: 'High-performance AI inference platform'
        },
        {
          name: 'Pandas',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
          description: 'Data manipulation and analysis library'
        },
        {
          name: 'NumPy',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
          description: 'Fundamental package for scientific computing'
        },
        {
          name: 'Ollama',
          image: 'https://ollama.com/public/ollama.png',
          description: 'Tool to inference on LLMs locally'
        }
      ]
    },
    {
      title: 'Databases',
      items: [
        {
          name: 'MySQL',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
          description: 'Relational database management system'
        },
        {
          name: 'MongoDB',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
          description: 'NoSQL database for modern applications'
        },
        {
          name: 'Firebase',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
          description: 'Platform for building web and mobile applications'
        },
        {
          name: 'Redis',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
          description: 'In-memory data structure store'
        },
        {
          name: 'Supabase',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg',
          description: 'Open source Firebase alternative'
        }
      ]
    },
    {
      title: 'Tools & Platforms',
      items: [
        {
          name: 'GitHub',
          image: 'https://th.bing.com/th?id=OIP.NGIDdVP6vw9ue_D-mrEVFQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
          description: 'Platform for version control and collaboration'
        },
        {
          name: 'DVC',
          image: 'https://th.bing.com/th/id/OIP.dZo9DI2eg7Fq0ihf2ap3XAHaEK?rs=1&pid=ImgDetMain',
          description: 'Data Version control system for ML projects'
        },
        {
          name: 'Docker',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
          description: 'Platform for developing and shipping applications'
        },
        {
          name: 'Raspberry Pi',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg',
          description: 'Single-board computer for IoT projects'
        },
        {
          name: 'Render',
          image: 'https://avatars.githubusercontent.com/u/42682871?s=400&v=4',
          description: 'Cloud platform for hosting applications'
        },
        {
          name: 'Spaces',
          image: 'https://huggingface.co/front/assets/huggingface_logo.svg',
          description: 'Platform for deploying ML models'
        },
        {
          name: 'NGINX',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg',
          description: 'Web server and reverse proxy'
        },
        {
          name: 'Postman',
          image: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
          description: 'Platform for API development'
        },
        {
          name: 'Jellyfin',
          image: 'https://th.bing.com/th?id=OIP.NZXORN7niUPVIq6RyfQeQwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
          description: 'Media server software'
        },
        {
          name: 'Make',
          image: 'https://images.ctfassets.net/un655fb9wln6/1k5wBPhbu5kXiaYlFWgEJE/b590772959bd510e64cf230ef37bba3e/Make-Logo-RGB.svg',
          description: 'Platform for workflow automation'
        },
        {
          name: 'Retell AI',
          image: 'https://avatars.githubusercontent.com/u/142041352?s=200&v=4',
          description: 'Platform for creating AI-powered Voice Agents'
        },
        {
          name: 'VectorShift',
          image: 'https://vectorshift-public.s3.amazonaws.com/android-chrome-512x512.png',
          description: 'Platform for building AI-powered chatbots'
        },
        {
          name : 'N8N',
          image : 'https://n8n.io/n8n-logo.png',
          description : 'Workflow automation platform'
        }
      ]
    }
  ];