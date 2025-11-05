import { TechCategory } from '../types/techStack';

export const categories: TechCategory[] = [
    {
      title: 'Languages & Frameworks',
      items: [
        { name: 'Python', image: '/images/tech/python.svg', description: 'Primary language for AI/ML development and backend services' },
        { name: 'Flask', image: '/images/tech/flask.svg', description: 'Web framework for building scalable backend services' },
        { name: 'Langchain', image: '/images/tech/langchain.png', description: 'Framework for developing LLM-powered applications' },
        { name: 'LlamaIndex', image: '/images/tech/llamaindex.svg', description: 'Data framework for LLM applications' },
        { name: 'Langflow', image: '/images/tech/langflow.png', description: 'UI for LangChain, making it easy to experiment and prototype' },
        { name: 'Gradio', image: '/images/tech/gradio.svg', description: 'Framework for creating ML web interfaces' },
        { name: 'Streamlit', image: '/images/tech/streamlit.png', description: 'Framework for creating data applications' },
        { name: 'FastAPI', image: '/images/tech/fastapi.svg', description: 'Modern web framework for building APIs' },
        { name: 'BeautifulSoup', image: '/images/tech/beautifulsoup.jpg', description: 'Library for web scraping and HTML parsing' },
        { name: 'Scrapy', image: '/images/tech/scrapy.png', description: 'Framework for extracting data from websites' },
        { name: 'Selenium', image: '/images/tech/selenium.svg', description: 'Tool for web browser automation' },
        { name: 'TypeScript', image: '/images/tech/typescript.svg', description: 'A typed superset of JavaScript that compiles to plain JavaScript.' },
        { name: 'React', image: '/images/tech/react.svg', description: 'A JavaScript library for building user interfaces.' },
        { name: 'React Native', image: '/images/tech/react.svg', description: 'A framework for building native apps with React.' }
      ]
    },
    {
      title: 'AI & ML',
      items: [
        { name: 'Hugging Face', image: '/images/tech/huggingface.svg', description: 'Platform for sharing and deploying ML models' },
        { name: 'scikit-learn', image: '/images/tech/scikit-learn.svg', description: 'Machine learning library for classical ML algorithms' },
        { name: 'OpenCV', image: '/images/tech/opencv.svg', description: 'Library for computer vision tasks' },
        { name: 'PyTorch', image: '/images/tech/pytorch.png', description: 'Deep learning framework' },
        { name: 'CrewAI', image: '/images/tech/crewai.svg', description: 'Framework for orchestrating role-playing AI agents' },
        { name: 'Autogen', image: '/images/tech/autogen.svg', description: 'Framework for building multi-agent systems' },
        { name: 'OpenAI', image: '/images/tech/openai.svg', description: 'Leading AI research company and API provider' },
        { name: 'Groq', image: '/images/tech/groq.png', description: 'High-performance AI inference platform' },
        { name: 'Pandas', image: '/images/tech/pandas.svg', description: 'Data manipulation and analysis library' },
        { name: 'NumPy', image: '/images/tech/numpy.svg', description: 'Fundamental package for scientific computing' },
        { name: 'Ollama', image: '/images/tech/ollama.png', description: 'Tool to inference on LLMs locally' },
        { name: 'OpenRouter', image: '/images/tech/openrouter.png', description: 'Unified API gateway for multiple LLM providers' }
      ]
    },
    {
      title: 'Databases',
      items: [
        { name: 'MySQL', image: '/images/tech/mysql.svg', description: 'Relational database management system' },
        { name: 'MongoDB', image: '/images/tech/mongodb.svg', description: 'NoSQL database for modern applications' },
        { name: 'Firebase', image: '/images/tech/firebase.svg', description: 'Platform for building web and mobile applications' },
        { name: 'Redis', image: '/images/tech/redis.svg', description: 'In-memory data structure store' },
        { name: 'Supabase', image: '/images/tech/supabase.svg', description: 'Open source Firebase alternative' }
      ]
    },
    {
      title: 'Tools & Platforms',
      items: [
        { name: 'GitHub', image: '/images/tech/github.svg', description: 'Platform for version control and collaboration' },
        { name: 'DVC', image: '/images/tech/dvc.svg', description: 'Data Version control system for ML projects' },
        { name: 'Docker', image: '/images/tech/docker.svg', description: 'Platform for developing and shipping applications' },
        { name: 'Twilio', image: '/images/tech/twilio.svg', description: 'Cloud communications platform for SMS and voice' },
        { name: 'Vercel', image: '/images/tech/vercel.svg', description: 'Platform for frontend deployment' },
        { name: 'Railway', image: '/images/tech/railway.ico', description: 'Cloud platform for deploying applications' },
        { name: 'Netlify', image: '/images/tech/netlify.svg', description: 'Platform for frontend deployment' },
        { name: 'Raspberry Pi', image: '/images/tech/raspberrypi.svg', description: 'Single-board computer for IoT projects' },
        { name: 'Render', image: '/images/tech/render.png', description: 'Cloud platform for hosting applications' },
        { name: 'Spaces', image: '/images/tech/spaces.svg', description: 'Platform for deploying ML models' },
        { name: 'NGINX', image: '/images/tech/nginx.svg', description: 'Web server and reverse proxy' },
        { name: 'Postman', image: '/images/tech/postman.svg', description: 'Platform for API development' },
        { name: 'Jellyfin', image: '/images/tech/jellyfin.svg', description: 'Media server software' },
        { name: 'Make', image: '/images/tech/make.png', description: 'Platform for workflow automation' },
        { name: 'Retell AI', image: '/images/tech/retellai.png', description: 'Platform for creating AI-powered Voice Agents' },
        { name: 'Vapi', image: '/images/tech/vapi.png', description: 'Platform for building AI-powered Voice Agents' },
        { name: 'VectorShift', image: '/images/tech/vectorshift.png', description: 'Platform for building AI-powered chatbots' },
        { name: 'N8N', image: '/images/tech/n8n.png', description: 'Workflow automation platform' }
      ]
    },
    {
      title: 'AI Dev Tools',
      items: [
        { name: 'Bolt.new', image: '/images/tech/boltnew.png', description: 'Modern development environment in the browser' },
        { name: 'Lovable', image: '/images/tech/lovable.png', description: 'Developer experience platform' },
        { name: 'Cursor', image: '/images/tech/cursor.svg', description: 'AI-first code editor' },
        { name: 'WindSurf', image: '/images/tech/windsurf.svg', description: 'Modern web development framework' },
        { name: 'Firebase Studio', image: '/images/tech/firebasestudio.png', description: 'Visual development environment for Firebase' },
        { name: 'GitHub Copilot', image: '/images/tech/githubcopilot.png', description: 'AI pair programmer powered by OpenAI' },
        { name: 'Claude Code', image: '/images/tech/claudecode.png', description: 'AI pair programmer powered by Anthropic' },
        { name: 'Gemini CLI', image: '/images/tech/gemini.png', description: 'AI pair programmer powered by Anthropic' }
      ]
    },
    {
      title: 'Payment & Communication',
      items: [
        { name: 'Stripe', image: '/images/tech/stripe.png', description: 'Online payment processing for internet businesses.' },
        { name: 'Razorpay', image: '/images/tech/razorpay.svg', description: 'Online payment gateway for India.' },
        { name: 'Sendgrid', image: '/images/tech/sendgrid.png', description: 'Email marketing and delivery service.' },
        { name: 'Gupshup', image: '/images/tech/gupshup.png', description: 'Conversational messaging platform.' }
      ]
    }
  ];