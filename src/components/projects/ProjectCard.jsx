import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";

const ProjectCard = ({ project, cardVariants, setSelectedProject }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -12, scale: 1.01 }}
      className="group cursor-pointer"
      onClick={() => {
        if (project.link && project.link !== "#") {
          window.open(project.link, "_blank", "noopener,noreferrer");
        } else {
          setSelectedProject(project);
        }
      }}
    >
      <div className="relative h-full">
        <div
          className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
        />

        <div className="relative gradient-border-card p-5 sm:p-6 transition-all duration-300 h-full flex flex-col overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

          {/* Icon & Header */}
          <div className="flex items-start justify-between mb-4">
            <div
              className={`text-3xl sm:text-4xl p-4 bg-gradient-to-br ${project.gradient} rounded-2xl group-hover:scale-110 transition-all duration-500 shadow-lg shadow-${project.color}-500/20 group-hover:shadow-${project.color}-500/40`}
            >
              {project.icon}
            </div>
            <div className="flex gap-2">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-gray-400 hover:text-white transition-colors"
                  title="Project Link"
                >
                  <FaExternalLinkAlt size={18} />
                </a>
              )}
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-1">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2 py-1 bg-gray-800/50 rounded-md text-xs text-gray-300 flex items-center gap-1"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Button */}
          <div className="mt-auto pt-4 flex items-center justify-between border-t border-white/5">
            <div className="flex items-center gap-2 text-purple-400 text-sm font-bold group-hover:gap-3 transition-all">
              {project.link && project.link !== "#" ? (
                <>VISIT PROJECT <FaArrowRight size={12} /></>
              ) : (
                <>VIEW DETAILS <FaArrowRight size={12} /></>
              )}
            </div>
            {project.link && project.link !== "#" && (
              <div className="p-2 rounded-full bg-white/5 group-hover:bg-purple-500/20 transition-all duration-300">
                <FaExternalLinkAlt size={14} className="text-gray-400 group-hover:text-purple-400" />
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
