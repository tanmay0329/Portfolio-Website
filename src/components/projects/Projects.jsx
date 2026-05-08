import React, { memo, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaTimes,
  FaArrowRight,
  FaCode,
  FaRobot,
  FaDatabase,
  FaCloud,
} from "react-icons/fa";
import ProjectCard from "./ProjectCard";
import { projects as portfolioProjects } from "../../portfolio";

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedProject, setSelectedProject] = useState(null);

  const gridVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: { staggerChildren: 0.08 } },
    }),
    [],
  );

  const cardVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 24 },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      },
    }),
    [],
  );

  const gradients = [
    "from-purple-600 to-pink-600",      // 1: Purple/Pink
    "from-blue-600 to-cyan-600",        // 2: Blue/Cyan
    "from-emerald-500 to-teal-400",     // 3: Emerald/Teal
    "from-amber-500 to-orange-600",      // 4: Amber/Orange (Changed from Fuchsia)
    "from-rose-500 to-indigo-600",      // 5: Rose/Indigo
    "from-violet-600 to-fuchsia-600",   // 6: Violet/Fuchsia
  ];

  const icons = [
    <FaRobot />,
    <FaCode />,
    <FaDatabase />,
    <FaCloud />,
  ];

  const projects = useMemo(
    () => portfolioProjects.map((p, i) => ({
      ...p,
      id: i,
      gradient: gradients[i % gradients.length],
      icon: icons[i % icons.length],
      color: gradients[i % gradients.length].split("-")[1],
    })),
    [],
  );

  return (
    <section id="projects" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 particle-bg">
        <div className="absolute -top-24 right-0 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-5 sm:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block glass rounded-full px-4 py-2 mb-4"
            >
              <span className="text-sm font-medium gradient-text">
                Featured Work
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            >
              Featured <span className="gradient-text">Projects</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              Real-world projects demonstrating expertise in AI, Robotics, and
              Development
            </motion.p>
          </div>

          {/* Projects Grid */}
          <motion.div
            variants={gridVariants}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                cardVariants={cardVariants}
                setSelectedProject={setSelectedProject}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto glass-strong rounded-2xl border border-purple-500/30"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 glass rounded-full hover:bg-gray-800 transition-colors z-10"
              >
                <FaTimes />
              </button>

              <div className="p-8">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className={`text-5xl p-4 bg-gradient-to-r ${selectedProject.gradient} rounded-2xl`}
                  >
                    {selectedProject.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white">
                      {selectedProject.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-purple-400 mb-2">
                      Description
                    </h4>
                    <p className="text-gray-300">{selectedProject.description}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 glass rounded-full text-sm flex items-center gap-2"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4">
                    {selectedProject.link && (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold text-center hover:shadow-glow transition-all"
                      >
                        View Project
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default memo(Projects);

