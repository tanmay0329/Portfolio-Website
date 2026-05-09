import React, { useEffect, useState, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial, MeshWobbleMaterial, GradientTexture, Points, PointMaterial } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import * as THREE from "three";
import gsap from "gsap";
import { useLoading } from "../context/LoadingContext";
import "./styles/Loading.css";

// --- 3D Components ---

const NeuralCore = ({ percent }: { percent: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const pulseRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.2;
      meshRef.current.rotation.y = t * 0.3;
    }
    if (coreRef.current) {
      coreRef.current.rotation.z = -t * 0.5;
      const scale = 1 + Math.sin(t * 4) * 0.05;
      coreRef.current.scale.set(scale, scale, scale);
    }
    if (pulseRef.current) {
      const pScale = (percent / 100) * 2 + Math.sin(t * 10) * 0.1;
      pulseRef.current.scale.set(pScale, pScale, pScale);
      (pulseRef.current.material as THREE.MeshBasicMaterial).opacity = 0.2 - (percent / 100) * 0.1;
    }
  });

  return (
    <group>
      {/* Outer Energy Sphere */}
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Sphere ref={meshRef} args={[1.5, 64, 64]}>
          <MeshDistortMaterial
            color="#8b5cf6"
            speed={3}
            distort={0.4}
            radius={1}
            transparent
            opacity={0.3}
            wireframe
          />
        </Sphere>
      </Float>

      {/* Internal Core */}
      <Sphere ref={coreRef} args={[0.8, 32, 32]}>
        <MeshWobbleMaterial
          color="#3b82f6"
          factor={0.6}
          speed={2}
          transparent
          opacity={0.8}
        />
      </Sphere>

      {/* Pulsing Energy */}
      <Sphere ref={pulseRef} args={[1, 32, 32]}>
        <meshBasicMaterial color="#06b6d4" transparent opacity={0.1} />
      </Sphere>

      {/* Particle Field */}
      <Points count={500} positions={new Float32Array(500 * 3).map(() => (Math.random() - 0.5) * 10)} stride={3}>
        <PointMaterial
          transparent
          color="#8b5cf6"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
};

// --- UI Components ---

const MetricsUI = () => {
  const [metrics, setMetrics] = useState({
    gpu: "42%",
    accuracy: "99.8%",
    latency: "12ms",
    fps: "120",
    threads: "16",
    confidence: "0.999"
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics({
        gpu: (40 + Math.random() * 10).toFixed(1) + "%",
        accuracy: (99.5 + Math.random() * 0.4).toFixed(3) + "%",
        latency: (10 + Math.random() * 5).toFixed(0) + "ms",
        fps: (118 + Math.random() * 4).toFixed(0),
        threads: "16",
        confidence: (0.998 + Math.random() * 0.001).toFixed(4)
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="metrics-grid">
      <div className="metric-item"><span>GPU USAGE</span> {metrics.gpu}</div>
      <div className="metric-item"><span>NEURAL ACCURACY</span> {metrics.accuracy}</div>
      <div className="metric-item"><span>LATENCY</span> {metrics.latency}</div>
      <div className="metric-item"><span>VISION FPS</span> {metrics.fps}</div>
      <div className="metric-item"><span>ACTIVE THREADS</span> {metrics.threads}</div>
      <div className="metric-item"><span>AI CONFIDENCE</span> {metrics.confidence}</div>
    </div>
  );
};

const LoadingStatus = () => {
  const messages = [
    "INITIALIZING NEURAL SYSTEMS",
    "LOADING VISION MODELS",
    "MAPPING AUTONOMOUS LOGIC",
    "COMPILING INTELLIGENCE LAYER",
    "SYNCHRONIZING ROBOTICS CORE",
    "OPTIMIZING AI PIPELINES"
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % messages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="status-message">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -10, filter: "blur(10px)" }}
          transition={{ duration: 0.5 }}
          className="message-text"
        >
          {messages[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const Loading = ({ percent }: { percent: number }) => {
  const { setIsLoading } = useLoading();
  const [isDone, setIsDone] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (percent >= 100) {
      setTimeout(() => {
        setIsDone(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 1500); // Cinematic exit duration
      }, 500);
    }
  }, [percent, setIsLoading]);

  return (
    <motion.div
      ref={containerRef}
      className={`cinematic-loader ${isDone ? "loader-exit" : ""}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Background Layers */}
      <div className="loader-bg">
        <div className="bg-grid"></div>
        <div className="bg-vignette"></div>
        <div className="bg-noise"></div>
        <div className="bg-glow"></div>
        <div className="bg-bloom"></div>
      </div>

      {/* HUD Header */}
      <div className="hud-header">
        <div className="header-left">
          <div className="header-scan-bar"></div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="user-name"
          >
            TANMAY BORA
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="user-titles"
          >
            AI SYSTEMS • ROBOTICS • COMPUTER VISION • AUTONOMOUS INTELLIGENCE
          </motion.div>
        </div>
        <div className="header-right">
          <div className="system-status">
            <span className="pulse-dot"></span>
            AI CORE: {percent < 100 ? "INITIALIZING" : "READY"}
          </div>
        </div>
      </div>

      {/* Main 3D Stage */}
      <div className="stage-3d">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#8b5cf6" />
          <pointLight position={[-10, -10, -10]} intensity={1.5} color="#3b82f6" />
          <NeuralCore percent={percent} />
        </Canvas>
      </div>

      {/* Center Overlay */}
      <div className="center-overlay">
        <div className="core-identity">
          <div className="identity-label">NEURAL PATHWAY</div>
          <div className="identity-value">{percent}%</div>
          <div className="pathway-track">
            <div className="pathway-fill" style={{ width: `${percent}%` }}></div>
            {/* Segmented Markers */}
            <div className="pathway-markers">
              {[...Array(10)].map((_, i) => (
                <div key={i} className={`marker ${percent > i * 10 ? "active" : ""}`}></div>
              ))}
            </div>
          </div>
        </div>
        <LoadingStatus />
      </div>

      {/* Footer Metrics */}
      <div className="hud-footer">
        <MetricsUI />
        <div className="footer-line">
          <div className="line-scan"></div>
        </div>
        <div className="boot-sequence">
          AI BOOT SEQUENCE • VER: 2028.05.09 • ENCRYPTED_LINK_ESTABLISHED
        </div>
      </div>

      {/* Screen Effects */}
      <div className="screen-scanlines"></div>
      <div className="screen-bloom"></div>
    </motion.div>
  );
};

export default Loading;

export const setProgress = (setLoading: (value: number) => void) => {
  let percent: number = 0;
  let interval = setInterval(() => {
    if (percent <= 40) {
      // Phase 1: Fast Initialization
      percent += Math.round(Math.random() * 2) + 1;
      setLoading(Math.min(percent, 100));
    } else if (percent <= 85) {
      // Phase 2: Heavy Model Loading (Slow)
      clearInterval(interval);
      interval = setInterval(() => {
        percent += Math.round(Math.random());
        setLoading(Math.min(percent, 85));
        if (percent >= 85) {
          // Transition to Phase 3
          clearInterval(interval);
          startPhase3();
        }
      }, 3000); 
    }
  }, 400);

  const startPhase3 = () => {
    interval = setInterval(() => {
      percent += Math.round(Math.random());
      setLoading(Math.min(percent, 96));
      if (percent >= 96) clearInterval(interval);
    }, 4000);
  };

  return {
    clear: () => { clearInterval(interval); setLoading(100); },
    loaded: () => new Promise<number>((resolve) => {
      clearInterval(interval);
      interval = setInterval(() => {
        if (percent < 100) {
          percent++;
          setLoading(percent);
        } else {
          resolve(percent);
          clearInterval(interval);
        }
      }, 50); // Slower final reveal
    })
  };
};
