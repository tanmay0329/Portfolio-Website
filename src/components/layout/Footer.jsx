import React, { memo } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaHeart, FaFacebook, FaInstagram } from "react-icons/fa";
import { socialLinks } from "../portfolio";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink/50 border-t border-gray-800 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Tanmay Bora. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="https://github.com/tanmay0329"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/tanmay-bora"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <FaInstagram size={20} />
            </a>
          </div>

          <p className="text-gray-400 text-sm flex items-center gap-1">
            Made with <FaHeart className="text-red-500" size={12} /> in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
