import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = useMemo(
    () => [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Projects", href: "#projects" },
      { name: "Skills", href: "#skills" },
      { name: "Achievements", href: "#achievements" },
      { name: "Contact", href: "#contact" },
    ],
    [],
  );

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);

    const sections = navItems.map((item) => item.href.substring(1));
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section);
          break;
        }
      }
    }
  }, [navItems]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToSection = useCallback((href) => {
    const id = href.replace("#", "");
    setIsOpen(false);
    window.location.hash = href;

    window.setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 50);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-ink/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="/logo.jpeg"
              alt="Tanmay Bora Official Logo - AI Engineer & Full Stack Developer"
              className="h-10 w-10 rounded-full object-cover border border-purple-500/50"
            />
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={`relative text-gray-300 hover:text-white transition-colors ${
                  activeSection === item.href.substring(1) ? "text-white" : ""
                }`}
                whileHover={{ y: -2 }}
              >
                {item.name}
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
            
            {/* Resume Button */}
            <motion.a
              href="https://drive.google.com/file/d/102rjfMxtAzbANc1jgJ-iAIV2WVK-CRp6/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-sm font-bold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all ml-2"
            >
              Resume
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="flex flex-col gap-4 pt-4 pb-3 rounded-2xl bg-ink/95 backdrop-blur-md border border-gray-800 shadow-xl">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={`text-gray-300 hover:text-white px-4 py-2 ${
                  activeSection === item.href.substring(1) ? "text-white" : ""
                }`}
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://drive.google.com/file/d/102rjfMxtAzbANc1jgJ-iAIV2WVK-CRp6/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 mx-4 px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-center font-bold"
            >
              Resume
            </a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default memo(Navbar);
