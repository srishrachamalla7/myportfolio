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
          image: 'https://groq.com/wp-content/uploads/2024/03/GroqLogo_White.svg',
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
          image: 'data:image/png;base64,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',
          description: 'Tool to inference on LLMs locally'
        },
        {
          name: 'OpenRouter',
          image: 'https://openrouter.ai/favicon.ico',
          description: 'Unified API gateway for multiple LLM providers'
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
          name: 'Twilio',
          image: 'data:image/png;base64,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',
          description: 'Cloud communications platform for SMS and voice'
        },
        {
          name: 'Vercel',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg',
          description: 'Platform for frontend deployment'
        },
        {
          name: 'Railway',
          image: 'https://railway.app/favicon.ico',
          description: 'Cloud platform for deploying applications'
        },
        {
          name: 'Netlify',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-plain.svg',
          description: 'Platform for frontend deployment'
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
          name: 'Vapi',
          image: 'data:image/jpeg;base64,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',
          description: 'Platform for building AI-powered Voice Agents'
        },
        {
          name: 'VectorShift',
          image: 'https://vectorshift-public.s3.amazonaws.com/android-chrome-512x512.png',
          description: 'Platform for building AI-powered chatbots'
        },
        {
          name : 'N8N',
          image : 'data:image/png;base64,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',
          description : 'Workflow automation platform'
        }
      ]
    },
    {
      title: 'AI Dev Tools',
      items: [
      {
        name: 'Bolt.new',
        image: 'data:image/jpeg;base64,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',
        description: 'Modern development environment in the browser'
      },
      {
        name: 'Lovable',
        image: 'https://www.lovable.dev/favicon.ico',
        description: 'Developer experience platform'
      },
      {
        name: 'Cursor',
        image: 'https://cursor.sh/favicon.ico',
        description: 'AI-first code editor'
      },
      {
        name: 'WindSurf',
        image: 'https://windsurf.com/logo/navbar_windsurf_logo.svg', // Fixed path format
        description: 'Modern web development framework'
      },
      {
        name: 'Firebase Studio',
        image: 'https://firebase.google.com/favicon.ico',
        description: 'Visual development environment for Firebase'
      },
      {
        name: 'GitHub Copilot',
        image: 'data:image/png;base64,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',
        description: 'AI pair programmer powered by OpenAI'
      }
      ]
    }
  ];