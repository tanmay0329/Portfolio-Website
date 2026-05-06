import React, {
  useRef,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaArrowRight,
  FaCode,
  FaBrain,
  FaMicrochip,
  FaDatabase,
  FaAward,
  FaInstagram,
} from "react-icons/fa";
import { SiTensorflow, SiFastapi, SiMongodb, SiReact, SiLeetcode } from "react-icons/si";
import { socialLinks } from "../portfolio";

const Hero = () => {
  const targetRef = useRef(null);
  const [hoveredStat, setHoveredStat] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseRaf = useRef(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isMobile) return;
      if (mouseRaf.current) return;
      const { clientX, clientY } = e;
      mouseRaf.current = window.requestAnimationFrame(() => {
        setMousePosition({
          x: (clientX / window.innerWidth - 0.5) * 20,
          y: (clientY / window.innerHeight - 0.5) * 20,
        });
        mouseRaf.current = 0;
      });
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (mouseRaf.current) {
        window.cancelAnimationFrame(mouseRaf.current);
      }
    };
  }, [isMobile]);


  const floatingTech = useMemo(
    () => [
      { icon: <SiTensorflow />, name: "TensorFlow", x: -120, y: -180, color: "#FF6F00", delay: 0 },
      { icon: <FaCode />, name: "MERN", x: 220, y: -150, color: "#61DAFB", delay: 1 },
      { icon: <SiFastapi />, name: "FastAPI", x: -240, y: 150, color: "#009688", delay: 2 },
      { icon: <SiMongodb />, name: "MongoDB", x: 230, y: 180, color: "#47A248", delay: 1.5 },
      { icon: <FaBrain />, name: "Gemini AI", x: 0, y: -250, color: "#8b5cf6", delay: 2.5 },
      { icon: <FaMicrochip />, name: "Microservices", x: -180, y: 230, color: "#3b82f6", delay: 0.5 },
      { icon: <SiReact />, name: "React", x: 260, y: -40, color: "#61DAFB", delay: 1.8 },
      { icon: <FaDatabase />, name: "PostgreSQL", x: -260, y: -80, color: "#336791", delay: 3 },
    ],
    [],
  );

  return (
    <section
      ref={targetRef}
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#0a0a0f] flex items-center justify-center py-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse delay-1000" />
        </div>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(rgba(139, 92, 246, 0.15) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        style={{ opacity, y }}
        className="relative z-10 container mx-auto px-5 flex flex-col items-center text-center"
      >
        {/* 1. Header Section (Name + Portrait) */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-10"
        >
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative order-2 md:order-1"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-[2rem] opacity-20 blur-xl" />
              
              {/* Square Frame with rounded corners */}
              <div className="relative z-10 p-1 bg-gradient-to-br from-white/20 to-transparent rounded-3xl backdrop-blur-sm">
                <img
                  src="/tanmay_bora.jpeg"
                  alt="Tanmay Bora - AI Engineer & Full Stack Developer Portrait"
                  className="w-40 h-40 sm:w-56 sm:h-56 rounded-2xl object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
                  style={{ objectPosition: "top center" }}
                />
              </div>

              {/* Decorative Corner Accents */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-purple-500 rounded-tl-xl" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-blue-500 rounded-br-xl" />
            </div>
          </motion.div>

          {/* Name */}
          <div className="text-center md:text-left order-1 md:order-2">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-white via-purple-300 to-blue-300 bg-clip-text text-transparent">
                Tanmay Bora
              </span>
            </h1>
          </div>
        </motion.div>

        {/* 3. Typewriter Bio */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-12 h-12 sm:h-16"
        >
          <div className="text-xl sm:text-3xl md:text-4xl font-semibold">
            <TypeAnimation
              sequence={[
                "AI Engineer", 2000,
                "Robotics Enthusiast", 2000,
                "Full Stack Developer", 2000,
              ]}
              speed={50}
              repeat={Infinity}
              className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
            />
          </div>
        </motion.div>

        {/* 3. Platform Stats Cards (LeetCode, LinkedIn, GitHub) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl mb-12"
        >
          {/* LeetCode */}
          <a href={socialLinks.leetcode} target="_blank" rel="noreferrer" className="group h-full">
            <div className="glass-strong rounded-2xl p-4 border border-white/10 group-hover:border-yellow-500/30 transition-all h-full flex flex-col">
              <div className="flex items-center gap-2 mb-3 justify-center">
                <SiLeetcode className="text-yellow-500 text-lg" />
                <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">LeetCode Stats</span>
              </div>
              <img 
                src="https://leetcard.jacoblin.cool/tan_may29?theme=dark&font=Inter" 
                alt="Tanmay Bora LeetCode Stats - Problems Solved and Ranking" 
                className="w-full h-auto rounded-xl brightness-90 group-hover:brightness-110 transition-all mt-auto"
              />
            </div>
          </a>

          {/* LinkedIn */}
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="group h-full">
            <div className="glass-strong rounded-2xl p-4 border border-white/10 group-hover:border-blue-500/30 transition-all h-full flex flex-col">
              <div className="flex items-center gap-2 mb-3 justify-center">
                <FaLinkedin className="text-blue-400 text-lg" />
                <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">LinkedIn Profile</span>
              </div>
              <img 
                src="/Linkedin.jpeg" 
                alt="Tanmay Bora Professional LinkedIn Profile - AI Engineer and Full Stack Developer" 
                className="w-full aspect-video object-cover rounded-xl brightness-75 group-hover:brightness-100 transition-all mt-auto"
              />
            </div>
          </a>

          {/* GitHub - Spans both columns */}
          <a href={socialLinks.github} target="_blank" rel="noreferrer" className="group md:col-span-2">
            <div className="glass-strong rounded-2xl p-4 border border-white/10 group-hover:border-green-500/30 transition-all flex flex-col">
              <div className="flex items-center gap-2 mb-3 justify-center">
                <FaGithub className="text-white text-lg" />
                <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">GitHub Contribution Graph</span>
              </div>
              <img 
                src="https://ghchart.rshah.org/2794B3/tanmay0329" 
                alt="Tanmay Bora GitHub Contribution Graph - Coding Activity and Open Source History" 
                className="w-full h-auto rounded-xl brightness-90 group-hover:brightness-110 transition-all invert hue-rotate-180"
              />
            </div>
          </a>
        </motion.div>


        {/* 5. Actions */}
        <div className="flex flex-wrap justify-center gap-6 mb-24">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl font-bold text-lg flex items-center gap-3 shadow-2xl shadow-purple-500/25 transition-all"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            Explore Projects <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
          </motion.button>
 
          <motion.a
            href="https://drive.google.com/file/d/102rjfMxtAzbANc1jgJ-iAIV2WVK-CRp6/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-white/5 backdrop-blur-xl rounded-2xl font-bold text-lg flex items-center gap-3 border border-white/10 hover:border-purple-500/50 transition-all shadow-xl"
          >
            <FaDownload className="text-purple-400" /> View Resume
          </motion.a>
        </div>
      </motion.div>

      {/* Floating Tech Icons */}
      {!isMobile && floatingTech.map((tech, i) => (
        <motion.div
          key={i}
          className="absolute hidden lg:block"
          initial={{ x: tech.x, y: tech.y, opacity: 0 }}
          animate={{
            y: [tech.y, tech.y - 20, tech.y],
            opacity: [0, 0.4, 0.4, 0],
          }}
          transition={{
            duration: 8,
            delay: tech.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)`,
          }}
        >
          <div className="glass-dark rounded-xl p-3 border border-white/5" style={{ color: tech.color }}>
            <div className="text-3xl">{tech.icon}</div>
          </div>
        </motion.div>
      ))}

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-purple-500 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
