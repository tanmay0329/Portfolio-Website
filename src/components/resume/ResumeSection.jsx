import React, { memo, useCallback } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaDownload,
  FaEye,
  FaFileAlt,
  FaAward,
  FaCode,
  FaRocket,
} from "react-icons/fa";

const ResumeSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleDownload = useCallback(() => {
    window.open("https://drive.google.com/file/d/102rjfMxtAzbANc1jgJ-iAIV2WVK-CRp6/view?usp=drive_link", "_blank");
  }, []);

  const handleViewOnline = useCallback(() => {
    window.open("https://drive.google.com/file/d/102rjfMxtAzbANc1jgJ-iAIV2WVK-CRp6/view?usp=drive_link", "_blank");
  }, []);

  return (
    <section id="resume" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 particle-bg" />
      <div className="absolute inset-0 noise-layer" />
      <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="container mx-auto px-5 sm:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.2, type: "spring" }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-2xl blur-2xl" />

              <div className="relative glass-strong rounded-2xl p-6 sm:p-12 border border-purple-500/30 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-8"
                >
                  <FaFileAlt className="text-white text-3xl sm:text-4xl" />
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 }}
                  className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
                >
                  My <span className="gradient-text">Resume</span>
                </motion.h2>
                <div className="mx-auto mt-4 w-40 section-divider" />

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 }}
                  className="text-gray-400 mb-8"
                >
                  Download or view my detailed resume to learn more about my
                  experience and skills
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
                >
                  <motion.button
                    onClick={handleDownload}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold flex items-center gap-2 justify-center shadow-glow"
                  >
                    <FaDownload />
                    Download Resume
                  </motion.button>

                  <motion.button
                    onClick={handleViewOnline}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 glass rounded-full font-semibold text-gray-300 hover:text-white flex items-center gap-2 justify-center hover:border-purple-500 transition-all duration-300"
                  >
                    <FaEye />
                    View Online
                  </motion.button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.7 }}
                  className="mt-8 pt-8 border-t border-gray-800"
                >
                  <div className="flex flex-wrap justify-center gap-8">
                    <div className="text-center">
                      <FaCode className="text-purple-400 text-xl mx-auto mb-2" />
                      <p className="text-gray-400 text-sm">6+ Languages</p>
                    </div>
                    <div className="text-center">
                      <FaAward className="text-purple-400 text-xl mx-auto mb-2" />
                      <p className="text-gray-400 text-sm">6+ Projects</p>
                    </div>
                    <div className="text-center">
                      <FaRocket className="text-purple-400 text-xl mx-auto mb-2" />
                      <p className="text-gray-400 text-sm">AIR 3 Robocon</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(ResumeSection);
