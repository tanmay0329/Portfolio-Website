import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO" id="whatido">
      <div className="what-box">
        <h2 className="title">
          <div className="gradient-text">
            W<span className="hat-h2">HAT</span>
          </div>
          <div className="gradient-text">
            I<span className="do-h2"> BUILD</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3 className="gradient-text">AI & PRODUCT SYSTEMS</h3>
              <h4>ENGINEERING INTELLIGENCE</h4>
              <p>
                Developing advanced computer vision pipelines and scalable GenAI products. From patent-pending RT-IRAS to full-stack AI solutions (PraiseArray), I build end-to-end systems that perceive, reason, and scale.
              </p>
              <h5>Full Stack & Product Strategy</h5>
              <div className="what-content-flex">
                <div className="what-tags">YOLO v5/v8</div>
                <div className="what-tags">PyTorch</div>
                <div className="what-tags">GenAI & NLP</div>
                <div className="what-tags">Full Stack Developer</div>
                <div className="what-tags">Product Architect</div>
                <div className="what-tags">Cloud Infrastructure</div>
                <div className="what-tags">UI/UX Strategy</div>
                <div className="what-tags">Systems Design</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3 className="gradient-text">ROBOTICS & AUTONOMOUS LOGIC</h3>
              <h4>SIMULATION TO HARDWARE</h4>
              <p>
                Leading perception and simulation pipelines for high-stakes robotics. Specializing in autonomous navigation, ROS integration, and AR-assisted alignment for systems that secured AIR 3 at DD Robocon India.
              </p>
              <h5>Focus areas</h5>
              <div className="what-content-flex">
                <div className="what-tags">ROS & ROS2</div>
                <div className="what-tags">Simulink</div>
                <div className="what-tags">Path Planning</div>
                <div className="what-tags">LIDAR Integration</div>
                <div className="what-tags">AR Alignment</div>
                <div className="what-tags">Firmware Development</div>
                <div className="what-tags">MATLAB</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}

