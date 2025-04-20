import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Github, Linkedin, Mail, BookOpen, Check, DownloadIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';

const Navbar = () => {
  const navigate = useNavigate();

  const showDownloadToast = () => {
    toast.custom((t) => (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3"
      >
        <Check className="w-5 h-5" />
        <span>Thanks for downloading!</span>
      </motion.div>
    ));
  };
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=16WLM7gbXKKttnOKoyY6aKI6C_jt5Gqg6';
    link.download = 'Srish_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showDownloadToast();
  };

  const socialLinks = [
    {
      icon: <Github size={20} />,
      label: 'GitHub',
      href: 'https://github.com/srishrachamalla7'
    },
    {
      icon: <Linkedin size={20} />,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/srishrachamalla'
    },
    {
      icon: <BookOpen size={20} />,
      label: 'Medium',
      href: 'https://medium.com/@srishrachamalla77'
    },
    {
      icon: <Mail size={20} />,
      label: 'Email',
      href: 'mailto:srishrachamalla2002@gmail.com'
    },
    {
      icon: <DownloadIcon size={20} />,
      label: 'Resume',
      onClick: handleDownload
    }
  ];
  return (
    <nav className="fixed w-full backdrop-blur-md bg-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="flex items-center space-x-2"
          >
            <motion.div
              whileHover={{ 
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.3 }
              }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
              <img 
                src="https://i.imgur.com/q0FBWUr.jpeg"
                alt="Logo"
                className="w-10 h-10 rounded-full relative z-10 object-cover"
              />
            </motion.div>
            {/* <span className="gradient-text text-2xl font-bold">AI Innovator</span> */}
          </Link>

          <div className="flex items-center space-x-6">
            <Link
              to="/projects"
              onClick={() => window.scrollTo(0, 0)}
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Projects
            </Link>

            <div className="flex items-center space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={link.onClick}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative text-gray-300 hover:text-purple-400 transition-colors cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                >
                  {link.icon}
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;