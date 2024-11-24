import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full backdrop-blur-md bg-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"
          >
            Srish AI
          </Link>

          <div className="flex items-center space-x-6">
            <Link
              to="/projects"
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Projects
            </Link>

            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/srishrachamalla7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/srishrachamalla"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:srishrachamalla2002@gmail.com"
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;