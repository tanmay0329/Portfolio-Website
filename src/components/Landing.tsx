import { PropsWithChildren, useEffect } from "react";
import "./styles/Landing.css";
import { smoother } from "./Navbar";
import { socialLinks } from "../portfolio";
import { FaUserAstronaut } from "react-icons/fa6";
import { motion } from "framer-motion";
import { FaRobot, FaArrowRight, FaGlobe, FaMicrochip, FaEye } from "react-icons/fa";

const Landing = ({ children }: PropsWithChildren) => {
  const inView = true;
  
  const interests = [
    {
      title: "AI & Machine Learning",
      description: "Intelligent systems & neural networks",
      icon: <FaRobot className="text-purple-400 group-hover:text-white transition-colors" />,
      bgClass: "bg-purple-500/10",
      borderClass: "border-purple-500/20 group-hover:border-purple-500/50",
      glowClass: "group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]",
      iconBg: "bg-gradient-to-br from-purple-500 to-indigo-600"
    },
    {
      title: "Full-Stack Engineering",
      description: "End-to-end scalable architectures",
      icon: <FaGlobe className="text-blue-400 group-hover:text-white transition-colors" />,
      bgClass: "bg-blue-500/10",
      borderClass: "border-blue-500/20 group-hover:border-blue-500/50",
      glowClass: "group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]",
      iconBg: "bg-gradient-to-br from-blue-500 to-cyan-500"
    },
    {
      title: "Robotics & ROS",
      description: "Autonomous agents & control systems",
      icon: <FaMicrochip className="text-cyan-400 group-hover:text-white transition-colors" />,
      bgClass: "bg-cyan-500/10",
      borderClass: "border-cyan-500/20 group-hover:border-cyan-500/50",
      glowClass: "group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]",
      iconBg: "bg-gradient-to-br from-cyan-400 to-teal-500"
    },
    {
      title: "Computer Vision",
      description: "YOLO, PyTorch, & image processing",
      icon: <FaEye className="text-emerald-400 group-hover:text-white transition-colors" />,
      bgClass: "bg-emerald-500/10",
      borderClass: "border-emerald-500/20 group-hover:border-emerald-500/50",
      glowClass: "group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]",
      iconBg: "bg-gradient-to-br from-emerald-400 to-green-600"
    }
  ];

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                  <FaUserAstronaut className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Tanmay Bora</h3>
                  <p className="text-sm text-gray-400">Final Year CSE (AI)</p>
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
                <span className="text-cyan-400 font-semibold">Robotics</span>,
                with experience in YOLO, PyTorch, ROS, and full-stack
                development.
              </p>

              {/* Quote */}
              <div className="mt-6 p-6 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl border border-purple-500/20">
                <p className="text-gray-300 italic text-center text-sm sm:text-base">
                  "Turning complex problems into elegant, scalable solutions —
                  let's build something amazing together."
                </p>
              </div>

            </div>
          </div>
                          <div className="landing-info space-y-4 w-full max-w-sm">
                            <div className="text-sm uppercase tracking-widest text-purple-400 font-bold mb-6 flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
                              Key Focus Areas
                            </div>
                            {interests.map((interest, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.6 + index * 0.1, ease: "easeOut", duration: 0.5 }}
                                whileHover={{ x: -5, scale: 1.02 }}
                                className={`group relative rounded-xl p-4 border transition-all duration-300 cursor-pointer overflow-hidden backdrop-blur-sm ${interest.bgClass} ${interest.borderClass} ${interest.glowClass}`}
                              >
                                {/* Animated Background Glow */}
                                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                
                                <div className="relative flex items-center gap-4 z-10">
                                  {/* Premium Icon Container */}
                                  <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg shadow-lg relative overflow-hidden group-hover:scale-110 transition-transform duration-300`}>
                                    <div className={`absolute inset-0 opacity-20 group-hover:opacity-100 transition-opacity duration-300 ${interest.iconBg}`}></div>
                                    <div className="relative text-xl z-10">
                                      {interest.icon}
                                    </div>
                                  </div>
                                  
                                  {/* Text Content */}
                                  <div className="flex-1">
                                    <div className="font-bold text-white text-base tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                                      {interest.title}
                                    </div>
                                    <p className="text-gray-400 text-xs font-medium mt-1 group-hover:text-gray-300 transition-colors">
                                      {interest.description}
                                    </p>
                                  </div>
                                  
                                  {/* Subtle Arrow Indicator */}
                                  <div className="flex-shrink-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${interest.iconBg}`}>
                                      <FaArrowRight className="text-white text-xs" />
                                    </div>
                                  </div>
                                </div>
                              </motion.div>
                            ))}
                          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
