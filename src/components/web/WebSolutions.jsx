import React, { useState, useEffect, useRef, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { webProjects } from "../portfolio";
import { FaArrowRight, FaRocket, FaShieldAlt, FaChartLine } from "react-icons/fa";

const ImageTrail = ({ images, active }) => {
  const [trail, setTrail] = useState([]);
  const lastPos = useRef({ x: 0, y: 0 });
  const index = useRef(0);

  useEffect(() => {
    if (!active || !images) {
      setTrail([]);
      return;
    }

    const handleMouseMove = (e) => {
      const distance = Math.hypot(e.clientX - lastPos.current.x, e.clientY - lastPos.current.y);
      
      if (distance > 100) {
        const newImage = {
          id: Date.now(),
          x: e.clientX,
          y: e.clientY,
          src: images[index.current % images.length],
          rotation: Math.random() * 20 - 10,
        };

        setTrail((prev) => [...prev.slice(-5), newImage]);
        lastPos.current = { x: e.clientX, y: e.clientY };
        index.current++;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [active, images]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      <AnimatePresence>
        {trail.map((img) => (
          <motion.img
            key={img.id}
            src={img.src}
            alt="Tanmay Bora Project Showcase - Portfolio Achievement"
            initial={{ opacity: 0, scale: 0.5, x: img.x, y: img.y, rotate: img.rotation }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2, transition: { duration: 0.3 } }}
            className="absolute w-48 h-32 object-cover rounded-xl shadow-2xl border-2 border-white/20"
            style={{ left: 0, top: 0, marginLeft: -96, marginTop: -64 }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

const WebSolutions = () => {
  const [activeTrail, setActiveTrail] = useState(null);

  return (
    <section 
      id="web-solutions" 
      className="py-24 relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 particle-bg">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse delay-1000" />
        </div>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(rgba(139, 92, 246, 0.15) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-500/30 mb-6"
          >
            <FaRocket className="text-purple-400" />
            <span className="text-sm font-bold text-purple-400 uppercase tracking-widest">Digital Transformation & Growth</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-6xl font-black text-white mb-8"
          >
            Strategic Web <span className="text-purple-400">Ecosystems</span>
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {["GEO Optimization", "AI SEO", "AEO (Answer Engine)", "Admin Dashboards", "Semantic Architecture", "Local Dominance"].map((item, i) => (
              <span key={i} className="px-5 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-bold shadow-lg shadow-purple-500/5">
                {item}
              </span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed"
          >
            Engineering high-performance web solutions designed to scale and dominate. I integrate cutting-edge search and conversion strategies to ensure your business stays ahead of the curve.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {webProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              onMouseEnter={() => setActiveTrail(project.trail)}
              onMouseLeave={() => setActiveTrail(null)}
              className="h-full"
            >
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="category-card group"
              >
                <div className="category-icon-wrapper">
                  <div className="category-icon">
                    <span role="img" aria-label="icon">{project.icon}</span>
                  </div>
                  {project.status && (
                    <span className="absolute top-0 right-0 px-3 py-1 bg-amber-500 text-black text-[10px] font-black rounded-md tracking-tighter shadow-lg">
                      {project.status}
                    </span>
                  )}
                </div>

                <h3 className="category-title">
                  {project.title}
                </h3>
                <p className="category-desc">
                  {project.desc}
                </p>

                <div className="mt-auto pt-4 flex flex-col items-center">
                  <span className="btn-visit">
                    {project.status === "LAUNCHING SOON" ? "Launching Soon" : "View Live Demo →"}
                  </span>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Trail Effect */}
      <ImageTrail images={activeTrail} active={!!activeTrail} />
    </section>
  );
};

export default memo(WebSolutions);
