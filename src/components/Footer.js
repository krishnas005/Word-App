import React from 'react';
import { Github, Linkedin, User } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white fixed bottom-0 w-full">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-center space-x-4 mb-2">
          <a
            href="https://krishnas05.vercel.app/"
            className="p-2 border border-white rounded-full hover:bg-white hover:text-gray-900 transition-colors duration-200"
            aria-label="Profile"
          >
            <User size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/krishnas05/"
            className="p-2 border border-white rounded-full hover:bg-white hover:text-gray-900 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="https://github.com/krishnas005/"
            className="p-2 border border-white rounded-full hover:bg-white hover:text-gray-900 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;