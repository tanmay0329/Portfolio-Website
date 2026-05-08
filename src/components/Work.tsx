import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { webProjects } from "../portfolio";
import { FaArrowRight } from "react-icons/fa";

gsap.registerPlugin(useGSAP);

const ImageTrail = ({ images, active, title }: { images: string[] | null, active: boolean, title: string }) => {
  const [trail, setTrail] = useState<any[]>([]);
  const lastPos = useRef({ x: 0, y: 0 });
  const index = useRef(0);

  useEffect(() => {
    if (!active || !images) {
      setTrail([]);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
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
            alt={`Showcase - ${title}`}
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

const Work = () => {
  const [activeTrail, setActiveTrail] = useState<{ images: string[] | null, title: string }>({ images: null, title: "" });

  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      if (box.length === 0) return;
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const boxRect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = boxRect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`, // Use actual scroll width
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <section className="work-section relative overflow-hidden" id="work">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 particle-bg pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-purple-600/10 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse delay-1000" />
        </div>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(rgba(139, 92, 246, 0.15) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="work-container relative z-10">
        <div className="text-center mb-6 sm:mb-10 pt-4 flex flex-col items-center justify-center space-y-1">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block glass rounded-full px-4 py-2"
          >
            <span className="text-sm font-medium gradient-text">
              Portfolio
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 mt-2"
          >
            My <span className="gradient-text">Work</span>
          </motion.h2>
        </div>
        <div className="work-flex">
          {webProjects.map((project, index) => (
            <div 
              className="work-box cursor-pointer" 
              key={index}
              onClick={() => {
                if (project.link && project.link !== "#") {
                  window.open(project.link, "_blank", "noopener,noreferrer");
                }
              }}
              onMouseEnter={() => setActiveTrail({ images: project.trail, title: project.title })}
              onMouseLeave={() => setActiveTrail({ images: null, title: "" })}
            >
              <WorkImage 
                image={project.trail[0]} 
                alt={project.title} 
              />
              <div className="work-info text-center items-center">
                <div className="flex flex-col items-center gap-1 mb-3">
                  <h3 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-purple-500/50 to-transparent">0{index + 1}</h3>
                  <h4 className="text-2xl font-black text-white tracking-tight">{project.title}</h4>
                  <p className="text-gray-400 max-w-md mx-auto text-sm leading-relaxed">{project.desc}</p>
                </div>
                
                <div className="w-full flex flex-col items-center">
                  <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-3">Tools and features</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {project.features.map((feature, i) => (
                      <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                {project.link && project.link !== "#" && (
                  <div className="mt-6 flex items-center gap-2 text-purple-400 text-sm font-bold group-hover:gap-4 transition-all">
                    VISIT PROJECT <FaArrowRight size={14} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <ImageTrail images={activeTrail.images} active={!!activeTrail.images} title={activeTrail.title} />
    </section>
  );
};

export default Work;
