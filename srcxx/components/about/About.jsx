import React, { useRef, useState, useEffect, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaMicrochip,
  FaCloud,
  FaRobot,
  FaDatabase,
  FaAward,
  FaCode,
  FaRocket,
  FaUserAstronaut,
  FaGlobe,
  FaArrowRight,
  FaBrain,
  FaAws,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaNodeJs,
  FaReact,
  FaGitAlt,
  FaTerminal,
  FaServer,
  FaFlask,
  FaEye,
  FaBolt,
  FaLeaf,
  FaJira,
  FaCalculator,
  FaExternalLinkAlt
} from "react-icons/fa";
import { 
  SiPytorch, 
  SiTensorflow, 
  SiYolo, 
  SiLangchain,
  SiOpencv,
  SiDocker,
  SiMysql,
  SiJira,
  SiSelenium,
  SiRos,
  SiFlask,
  SiMongodb,
  SiFastapi,
  SiGraphql,
  SiCplusplus,
  SiTypescript,
  SiGoogle
} from "react-icons/si";

import { education, projects, achievements, socialLinks, certifications } from "../portfolio";

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.02 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const mouseRaf = useRef(0);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [30, 0, 0, -30]);

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
      setIsMobile(window.innerWidth < 768);
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

  const stats = useMemo(
    () => [
      {
        icon: <img src="/achievements_stats.png" alt="Achievements" className="w-12 h-12 object-contain mx-auto rounded-lg" />,
        label: "Projects / Wins / Papers",
        value: "10+ / 4+ / 5+",
        color: "purple",
        link: "github.com/tanmay0329/"
      },
      {
        icon: <img src="https://aburobocon2025.mnb.mn/images/logo.png" alt="Robocon" className="w-12 h-12 object-contain mx-auto" />,
        label: "Robocon India Rank",
        value: "AIR 3",
        color: "blue",
        link: "https://www.youtube.com/watch?v=MGAykjLD3zk"
      },
      {
        icon: <img src="/matlab.jpg" alt="MATLAB" className="w-10 h-10 object-contain rounded-lg mx-auto" />,
        label: "MathWorks Modeling Award",
        value: "National",
        color: "pink",
        subtitle: "winner",
        link: "https://www.instagram.com/reel/DU7RheECrm-/?igsh=MTJ2ZzI2NGt4NHhqaQ=="
      },
      {
        icon: <img src="https://www.ihfc.co.in/wp-content/uploads/2025/08/Artboard-43-scaled.png" alt="IHFC" className="w-16 h-10 object-contain mx-auto brightness-125" />,
        label: "IHFC Robotics & AI Award",
        value: "National",
        color: "cyan",
        subtitle: "winner",
        link: "https://www.instagram.com/reel/DU5jnrSilMU/?igsh=MTFyYTc0d2t6MDhqcA=="
      },
    ],
    [],
  );

  const interests = useMemo(
    () => [
      {
        icon: <FaRobot className="text-purple-400" />,
        title: "Autonomous Robotics",
        description: "Specialized in ROS, SLAM, and motion planning for mobile robots.",
        gradient: "from-purple-500/20 to-purple-600/20",
        glow: "purple",
      },
      {
        icon: <FaCode className="text-blue-400" />,
        title: "Full Stack Development",
        description: "Scalable MERN ecosystems with high-performance architectures.",
        gradient: "from-blue-500/20 to-blue-600/20",
        glow: "blue",
      },
      {
        icon: <FaBrain className="text-cyan-400" />,
        title: "Computer Vision & AI",
        description: "Deep learning models using YOLO, PyTorch, and TensorFlow.",
        gradient: "from-cyan-500/20 to-cyan-600/20",
        glow: "cyan",
      },
      {
        icon: <FaRocket className="text-pink-400" />,
        title: "AEO & Strategic AI SEO",
        description: "Optimizing content for 2026 AI search engines and LLM crawlers.",
        gradient: "from-pink-500/20 to-pink-600/20",
        glow: "pink",
      },
    ],
    [],
  );

  const floatingIcons = useMemo(
    () => [
      {
        icon: <SiTensorflow />,
        name: "TensorFlow",
        x: -100,
        y: -60,
        color: "#FF6F00",
        delay: 0,
        size: 40,
      },
      {
        icon: <SiFastapi />,
        name: "FastAPI",
        x: 120,
        y: -80,
        color: "#009688",
        delay: 1.5,
        size: 36,
      },
      {
        icon: <SiMongodb />,
        name: "MongoDB",
        x: -130,
        y: 70,
        color: "#47A248",
        delay: 2,
        size: 38,
      },
      {
        icon: <SiDocker />,
        name: "Docker",
        x: 110,
        y: 60,
        color: "#2496ED",
        delay: 0.8,
        size: 42,
      },
      {
        icon: <FaGlobe />,
        name: "Cloud Native",
        x: 0,
        y: -100,
        color: "#8b5cf6",
        delay: 2.5,
        size: 35,
      },
      {
        icon: <FaUserAstronaut />,
        name: "Problem Solver",
        x: -80,
        y: 110,
        color: "#3b82f6",
        delay: 1.2,
        size: 38,
      },
    ],
    [],
  );

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-16 sm:py-24 relative overflow-hidden bg-[#1a1a2e]"
    >
      {/* Animated Background - Matching Hero */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-40 right-20 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-40 left-20 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-600/8 rounded-full blur-3xl animate-pulse delay-2000" />
        </div>

        {/* Grid Pattern - Same as Hero */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(rgba(139, 92, 246, 0.08) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute inset-0 noise-layer" />
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingIcons.map((icon, index) => (
          <motion.div
            key={index}
            className="absolute hidden lg:block"
            initial={{ x: icon.x, y: icon.y, opacity: 0, rotate: 0 }}
            animate={{
              y: [icon.y, icon.y - 15, icon.y],
              opacity: [0, 0.4, 0.4, 0],
            }}
            transition={{
              duration: 12,
              delay: icon.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
            }}
          >
            <div className="relative group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity" />
              <div className="relative glass-dark rounded-xl p-2 border border-gray-800 group-hover:border-purple-500/50 transition-all duration-300">
                <div className="text-3xl" style={{ color: icon.color }}>
                  {icon.icon}
                </div>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  <div className="bg-gray-900/90 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md font-mono">
                    {icon.name}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        style={{ opacity, y }}
        className="container mx-auto px-5 sm:px-6 relative z-10"
      >
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Section Header - Matching Hero Style */}
          <div className="text-center mb-10 sm:mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block glass rounded-full px-4 py-2 mb-4"
            >
              <span className="text-sm font-medium gradient-text">
                Who Am I
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            >
              About <span className="gradient-text">Me</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base"
            >
              Get to know me better — my journey, skills, and what drives me
            </motion.p>
          </div>

          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center"
            style={{
              transformStyle: "preserve-3d",
              transform: isMobile
                ? "none"
                : `rotateX(${mousePosition.y * -0.1}deg) rotateY(${mousePosition.x * 0.1}deg)`,
              transition: "transform 0.4s ease-out",
            }}
          >
            {/* Left Content - Main Bio */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="space-y-6"
              style={{ transform: isMobile ? "none" : "translateZ(15px)" }}
            >
              <div className="glass-strong rounded-2xl p-6 sm:p-8 border border-gray-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5" />
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-purple-500/10 blur-2xl" />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                      <FaUserAstronaut className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        Tanmay Bora
                      </h3>
                      <p className="text-sm text-gray-400">
                        Final Year CSE (AI)
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed text-base sm:text-lg mb-6">
                    I'm a{" "}
                    <span className="gradient-text font-semibold">
                      Final year CSE (AI) student
                    </span>{" "}
                    at VIT Pune, passionate about AI, Robotics, and building
                    intelligent systems that solve real-world problems.
                  </p>

                  <p className="text-gray-300 leading-relaxed text-base sm:text-lg mb-6">
                    I specialize in{" "}
                    <span className="text-blue-400 font-semibold">
                      AI Engineering
                    </span>{" "}
                    and{" "}
                    <span className="text-cyan-400 font-semibold">
                      Robotics
                    </span>
                    , with experience in YOLO, PyTorch, ROS, and full-stack
                    development.
                  </p>

                  {/* Quote */}
                  <div className="mt-6 p-6 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl border border-purple-500/20">
                    <p className="text-gray-300 italic text-center text-sm sm:text-base">
                      "Turning complex problems into elegant, scalable solutions
                      — let's build something amazing together."
                    </p>
                  </div>

                  {/* Signature */}
                  <div className="mt-6 flex justify-end">
                    <div className="text-right">
                      <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 mb-2" />
                      <p className="text-gray-500 text-sm font-mono">
                        tanmay.bora
                      </p>
                    </div>
                  </div>
                  </div>
                </div>

                {/* Interests - Moved here to balance layout */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
                    <FaRobot className="text-purple-400" /> Key Focus Areas
                  </h3>
                  {interests.map((interest, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.4 + index * 0.05, ease: "easeOut" }}
                      whileHover={{ x: 5 }}
                      className={`group relative bg-gradient-to-r ${interest.gradient} rounded-xl p-4 border border-gray-800 hover:border-purple-500/50 transition-all duration-300`}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-r from-${interest.glow}-500/0 to-${interest.glow}-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      />
                      <div className="relative flex items-start gap-4">
                        <div className="text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-300">
                          {interest.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-white text-base sm:text-lg">
                            {interest.title}
                          </h3>
                          <p className="text-gray-400 text-xs sm:text-sm">
                            {interest.description}
                          </p>
                        </div>
                        <FaArrowRight className="text-gray-600 group-hover:text-purple-400 group-hover:translate-x-1 transition-all duration-300 ml-auto opacity-0 group-hover:opacity-100" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

            {/* Right Content - Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="space-y-6"
              style={{ transform: isMobile ? "none" : "translateZ(20px)" }}
            >
              {/* Stats Grid - Enhanced with 3D */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {stats.map((stat, index) => {
                  const Content = (
                    <>
                      <div
                        className={`absolute inset-0 bg-gradient-to-r from-${stat.color}-500/20 to-${stat.color}-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                      />
                      <div className="relative glass-strong rounded-xl p-4 sm:p-6 text-center border border-gray-800 group-hover:border-purple-500/50 transition-all duration-300 h-full flex flex-col justify-center">
                        <div className="text-3xl sm:text-4xl text-purple-400 mb-2">
                          {stat.icon}
                        </div>
                        <div className="text-xl sm:text-2xl font-bold gradient-text">
                          {stat.value}
                        </div>
                        <div className="text-gray-400 text-xs sm:text-sm mt-1">
                          {stat.label}
                        </div>
                        {stat.subtitle && (
                          <div className="text-[10px] sm:text-xs text-purple-400/80 mt-1 font-medium leading-tight">
                            {stat.subtitle}
                          </div>
                        )}
                        {stat.link && (
                          <div className="absolute top-3 right-3 text-purple-500/40 group-hover:text-purple-400 transition-colors">
                            <FaExternalLinkAlt size={12} />
                          </div>
                        )}
                      </div>
                    </>
                  );

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.3 + index * 0.05, ease: "easeOut" }}
                      whileHover={{ y: -5 }}
                      className="relative group"
                    >
                      {stat.link ? (
                        <a 
                          href={stat.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block h-full cursor-pointer"
                        >
                          {Content}
                        </a>
                      ) : (
                        <div className="h-full">
                          {Content}
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>



              {/* Professional Certifications */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 }}
                className="mt-4 p-4 glass-strong rounded-2xl border border-white/5 overflow-hidden"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-purple-500 animate-pulse" />
                  <span className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-400">Professional Certifications</span>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {certifications.map((cert, i) => (
                    <motion.a
                      key={i}
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="group flex flex-col p-2.5 rounded-xl bg-white/5 border border-white/5 hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="text-lg">
                          {cert.issuer === "IBM" ? (
                            <FaAward className="text-blue-400 group-hover:text-blue-300 transition-colors" />
                          ) : (
                            <SiGoogle className="text-red-400 group-hover:text-red-300 transition-colors" />
                          )}
                        </div>
                        <FaExternalLinkAlt size={8} className="text-white/20 group-hover:text-purple-400 transition-colors" />
                      </div>
                      <p className="text-[10px] font-bold text-gray-300 leading-tight group-hover:text-white transition-colors line-clamp-2">
                        {cert.title}
                      </p>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Education Section - Restored under Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.4 }}
                className="mt-6 space-y-4"
              >
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <FaAward className="text-purple-400" /> Education
                </h3>
                <div className="space-y-4">
                  {education.map((edu, index) => {
                    const themes = [
                      {
                        name: "pink",
                        bg: "group-hover:bg-pink-500/15",
                        border: "group-hover:border-pink-500/50",
                        text: "group-hover:text-pink-400",
                        accent: "bg-pink-500/10",
                        glow: "from-pink-500/10 to-pink-600/10",
                        shadow: "group-hover:shadow-pink-500/10",
                        pill: "text-pink-400 bg-pink-500/10 border-pink-500/20"
                      },
                      {
                        name: "blue",
                        bg: "group-hover:bg-blue-500/15",
                        border: "group-hover:border-blue-500/50",
                        text: "group-hover:text-blue-400",
                        accent: "bg-blue-500/10",
                        glow: "from-blue-500/10 to-blue-600/10",
                        shadow: "group-hover:shadow-blue-500/10",
                        pill: "text-blue-400 bg-blue-500/10 border-blue-500/20"
                      },
                      {
                        name: "green",
                        bg: "group-hover:bg-green-500/15",
                        border: "group-hover:border-green-500/50",
                        text: "group-hover:text-green-400",
                        accent: "bg-green-500/10",
                        glow: "from-green-500/10 to-green-600/10",
                        shadow: "group-hover:shadow-green-500/10",
                        pill: "text-green-400 bg-green-500/10 border-green-500/20"
                      }
                    ];
                    const theme = themes[index % themes.length];
                    
                    return (
                      <div
                        key={index}
                        className="group relative"
                      >
                        {/* Glow Backdrop - Default on mobile */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${theme.glow} rounded-xl blur-xl ${isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity duration-500`} />
                        
                        <div className={`relative glass-strong rounded-xl p-4 border transition-all duration-300 overflow-hidden shadow-lg ${
                          isMobile 
                            ? `border-${theme.name}-500/50 bg-${theme.name}-500/15 shadow-${theme.name}-500/10` 
                            : `border-gray-800 ${theme.border} ${theme.bg} ${theme.shadow}`
                        }`}>
                          {/* Animated Gradient Shine on Hover */}
                          <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-1000 ${
                            isMobile ? 'translate-x-full' : '-translate-x-full group-hover:translate-x-full'
                          }`} />
                          
                          {/* Background Accent */}
                          <div className={`absolute -right-4 -top-4 w-12 h-12 ${theme.accent} rounded-full blur-xl ${isMobile ? 'bg-opacity-20' : 'group-hover:bg-opacity-20'} transition-colors`} />
                          
                          <div className="flex justify-between items-start mb-2">
                            <h4 className={`font-bold text-white text-sm sm:text-base ${isMobile ? theme.text.replace('group-hover:', '') : `${theme.text} transition-colors`}`}>
                              {edu.degree}
                            </h4>
                            <span className={`text-[10px] sm:text-xs font-mono px-2 py-0.5 rounded-full border whitespace-nowrap ${theme.pill}`}>
                              {edu.duration}
                            </span>
                          </div>
                          <p className="text-gray-300 text-xs sm:text-sm mb-1 font-medium">
                            {edu.institution} • <span className={theme.text.replace('group-hover:', '')}>{edu.grade}</span>
                          </p>
                          <p className="text-gray-500 text-xs italic line-clamp-2">
                            {edu.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
            </motion.div>
            </motion.div>
          </div>

          {/* Jittered Tech Section - Random but Non-Overlapping */}
          <div className="mt-10 relative min-h-[500px] w-full">
            <div className="text-center mb-16 relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-block glass rounded-full px-4 py-2 mb-4"
              >
                <span className="text-sm font-medium gradient-text">
                  Expertise
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              >
                Technical <span className="gradient-text">Ecosystem</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base opacity-70"
              >
                A diverse fusion of AI, Robotics, and Full-Stack Engineering skills.
              </motion.p>
            </div>

            <div className="relative h-[450px] w-full pb-20">
              {useMemo(() => {
                const icons = [
                  { icon: <SiCplusplus />, name: "C++", color: "#00599C" },
                  { icon: <FaPython />, name: "Python", color: "#3776AB" },
                  { icon: <FaJs />, name: "JavaScript", color: "#F7DF1E" },
                  { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
                  { icon: <FaHtml5 />, name: "HTML5", color: "#E34F26" },
                  { icon: <FaCss3Alt />, name: "CSS3", color: "#1572B6" },
                  { icon: <FaReact />, name: "React.js", color: "#61DAFB" },
                  { icon: <FaNodeJs />, name: "Node.js", color: "#339933" },
                  { icon: <SiFlask />, name: "Express.js", color: "#ffffff" },
                  { icon: <SiGraphql />, name: "GraphQL", color: "#E10098" },
                  { icon: <SiRos />, name: "ROS", color: "#22314E" },
                  { icon: <SiPytorch />, name: "PyTorch", color: "#EE4C2C" },
                  { icon: <SiYolo />, name: "YOLO", color: "#00FFFF" },
                  { icon: <SiLangchain />, name: "LangChain", color: "#ffffff" },
                  { icon: <FaRocket />, name: "SLAM", color: "#8b5cf6" },
                  { icon: <SiOpencv />, name: "OpenCV", color: "#5C3EE8" },
                  { icon: <SiDocker />, name: "Docker", color: "#2496ED" },
                  { icon: <FaAws />, name: "AWS", color: "#FF9900" },
                  { icon: <FaCalculator />, name: "MATLAB", color: "#D12C1F" },
                  { icon: <FaGitAlt />, name: "Git", color: "#F05032" },
                  { icon: <SiMysql />, name: "MySQL", color: "#4479A1" },
                  { icon: <SiSelenium />, name: "Selenium", color: "#43B02A" },
                  { icon: <SiJira />, name: "Jira", color: "#0052CC" },
                  { icon: <FaRobot />, name: "Gazebo", color: "#FFD700" },
                ];

                const rows = 4;
                const cols = 6;
                const cellWidth = 100 / cols;
                const cellHeight = 100 / rows;
                
                return icons.map((tech, i) => {
                  const row = Math.floor(i / cols);
                  const col = i % cols;
                  
                  // Jitter within the cell - Limited to 80% height to prevent cutting
                  const top = (row * (cellHeight * 0.8)) + (Math.random() * (cellHeight * 0.5)) + (cellHeight * 0.1);
                  const left = (col * cellWidth) + (Math.random() * (cellWidth * 0.6)) + (cellWidth * 0.2);
                  
                  const scale = 0.8 + Math.random() * 0.4;
                  const delay = Math.random() * 1.5;
                  
                  return (
                    <motion.div
                      key={i}
                      className="absolute cursor-pointer group"
                      style={{ 
                        top: `${top}%`, 
                        left: `${left}%`,
                        zIndex: Math.floor(scale * 10),
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ 
                        opacity: 0.6, 
                        scale: scale,
                      }}
                      animate={{
                        scale: [scale, scale * 1.05, scale],
                        opacity: [0.6, 0.8, 0.6],
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: delay,
                      }}
                      whileHover={{ opacity: 1, scale: scale * 1.3, zIndex: 100 }}
                      viewport={{ once: true }}
                    >
                      <div 
                        className="text-3xl sm:text-5xl drop-shadow-[0_0_15px_rgba(139,92,246,0.2)] transition-all duration-300"
                        style={{ color: tech.color }}
                      >
                        {tech.icon}
                      </div>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                        <div className="bg-gray-900/95 backdrop-blur-sm text-white text-[10px] px-2 py-1 rounded-md border border-purple-500/30 whitespace-nowrap">
                          {tech.name}
                        </div>
                      </div>
                    </motion.div>
                  );
                });
              }, [])}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
