import React, { memo, useMemo } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaBrain,
  FaCloud,
  FaShieldAlt,
  FaMicrochip,
} from "react-icons/fa";
import { skills as portfolioSkills } from "../portfolio";

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: { staggerChildren: 0.08, delayChildren: 0.1 },
      },
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

  const categoryIcons = {
    "Languages": <FaCode className="text-purple-400" />,
    "Frameworks & AI": <FaBrain className="text-blue-400" />,
    "Tools & Technologies": <FaMicrochip className="text-cyan-400" />,
  };

  const skillCategories = useMemo(
    () => portfolioSkills.map((cat) => ({
      title: cat.category,
      icon: categoryIcons[cat.category] || <FaCode className="text-purple-400" />,
      description: `Expertise in ${cat.category.toLowerCase()}`,
      skills: cat.items.map((skill) => ({
        name: skill,
        icon: <FaCode className="text-gray-400" />,
      })),
    })),
    [],
  );

  return (
    <section id="skills" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 particle-bg" />
      <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

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
                Technical Expertise
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            >
              Skills & <span className="gradient-text">Technologies</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              Leveraging modern technologies to build robust, scalable
              applications
            </motion.p>
          </div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.01 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/10 to-transparent rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-white/5 to-white/0 p-5 sm:p-6 backdrop-blur-xl transition-all duration-300 group-hover:border-purple-500/50">
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-purple-500/10 blur-2xl" />
                  <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Header */}
                  <div className="flex items-start gap-4 mb-5">
                    <div className="text-3xl p-3 bg-purple-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-purple-300/80 mb-2">
                        Focus
                      </p>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                        {category.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Tag Cloud */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.5 + skillIndex * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="glass-dark border border-white/5 px-3 py-1.5 rounded-lg text-sm text-gray-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all cursor-default flex items-center gap-2 group/skill"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500/50 group-hover/skill:bg-purple-400 group-hover/skill:animate-pulse transition-all" />
                        {skill.name}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Skills);

