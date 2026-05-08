import * as THREE from "three";
import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Html } from "@react-three/drei";
import { motion } from "framer-motion";
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
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import {
  BallCollider,
  Physics,
  RigidBody,
  CylinderCollider,
  RapierRigidBody,
} from "@react-three/rapier";

const textureLoader = new THREE.TextureLoader();

const createTextTexture = (text: string, color: string) => {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");
  
  if (ctx) {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, 512, 512);
    
    ctx.fillStyle = color === "#ffffff" ? "#333333" : color;
    let fontSize = 120;
    if (text.length > 5) fontSize = 90;
    if (text.length > 7) fontSize = 75;
    if (text.length > 9) fontSize = 60;
    
    ctx.font = `bold ${fontSize}px sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, 256, 256);
  }
  
  const texture = new THREE.CanvasTexture(canvas);
  texture.anisotropy = 16;
  return texture;
};

const techEcosystem = [
  { name: "C++", color: "#00599C" },
  { name: "Python", color: "#3776AB" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "HTML5", color: "#E34F26" },
  { name: "CSS3", color: "#1572B6" },
  { name: "React.js", color: "#61DAFB" },
  { name: "Node.js", color: "#339933" },
  { name: "Express.js", color: "#333333" },
  { name: "GraphQL", color: "#E10098" },
  { name: "ROS", color: "#22314E" },
  { name: "PyTorch", color: "#EE4C2C" },
  { name: "YOLO", color: "#00FFFF" },
  { name: "LangChain", color: "#333333" },
  { name: "SLAM", color: "#8b5cf6" },
  { name: "OpenCV", color: "#5C3EE8" },
  { name: "Docker", color: "#2496ED" },
  { name: "AWS", color: "#FF9900" },
  { name: "MATLAB", color: "#D12C1F" },
  { name: "Git", color: "#F05032" },
  { name: "MySQL", color: "#4479A1" },
  { name: "Selenium", color: "#43B02A" },
  { name: "Jira", color: "#0052CC" },
  { name: "Gazebo", color: "#FFD700" },
];

const spheres = techEcosystem.map((tech) => ({
  ...tech,
  scale: [0.8, 1.1, 0.9, 1.2, 1][Math.floor(Math.random() * 5)],
}));

const sphereGeometry = new THREE.SphereGeometry(1, 20, 20);

type SphereProps = {
  vec?: THREE.Vector3;
  scale: number;
  material: THREE.MeshPhysicalMaterial;
  r?: typeof THREE.MathUtils.randFloatSpread;
  isActive: boolean;
};

function SphereGeo({
  vec = new THREE.Vector3(),
  scale,
  material,
  r = THREE.MathUtils.randFloatSpread,
  isActive,
}: SphereProps) {
  const api = useRef<RapierRigidBody | null>(null);

  useFrame((_state, delta) => {
    if (!isActive) return;
    delta = Math.min(0.1, delta);
    const impulse = vec
      .copy(api.current!.translation())
      .normalize()
      .multiply(
        new THREE.Vector3(
          -50 * delta * scale,
          -150 * delta * scale,
          -50 * delta * scale
        )
      );
    api.current?.applyImpulse(impulse, true);
  });

  return (
    <RigidBody
      linearDamping={0.75}
      angularDamping={0.15}
      friction={0.2}
      position={[r(20), r(20) - 25, r(20) - 10]}
      ref={api}
      colliders={false}
    >
      <BallCollider args={[scale]} />
      <CylinderCollider
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, 1.2 * scale]}
        args={[0.15 * scale, 0.275 * scale]}
      />
      <mesh
        castShadow
        receiveShadow
        scale={scale}
        geometry={sphereGeometry}
        material={material}
        rotation={[0.3, 1, 1]}
      />
    </RigidBody>
  );
}

type PointerProps = {
  vec?: THREE.Vector3;
  isActive: boolean;
};

function Pointer({ vec = new THREE.Vector3(), isActive }: PointerProps) {
  const ref = useRef<RapierRigidBody>(null);

  useFrame(({ pointer, viewport }) => {
    if (!isActive) return;
    const targetVec = vec.lerp(
      new THREE.Vector3(
        (pointer.x * viewport.width) / 2,
        (pointer.y * viewport.height) / 2,
        0
      ),
      0.2
    );
    ref.current?.setNextKinematicTranslation(targetVec);
  });

  return (
    <RigidBody
      position={[100, 100, 100]}
      type="kinematicPosition"
      colliders={false}
      ref={ref}
    >
      <BallCollider args={[2]} />
    </RigidBody>
  );
}

const TechStack = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const threshold = document
        .getElementById("work")!
        .getBoundingClientRect().top;
      setIsActive(true);
    };
    document.querySelectorAll(".header a").forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      element.addEventListener("click", () => {
        const interval = setInterval(() => {
          handleScroll();
        }, 10);
        setTimeout(() => {
          clearInterval(interval);
        }, 1000);
      });
    });
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const materials = useMemo(() => {
    const imageMap: Record<string, string> = {
      "JavaScript": "/images/javascript.webp",
      "React.js": "/images/react2.webp",
      "Node.js": "/images/node2.webp",
      "Express.js": "/images/express.webp",
      "TypeScript": "/images/typescript.webp",
      "MySQL": "/images/mysql.webp",
    };

    return techEcosystem.map((tech) => {
      let texture;
      if (imageMap[tech.name]) {
        texture = textureLoader.load(imageMap[tech.name]);
      } else {
        texture = createTextTexture(tech.name, tech.color);
      }

      return new THREE.MeshPhysicalMaterial({
        map: texture,
        emissive: "#ffffff",
        emissiveMap: texture,
        emissiveIntensity: 0.2,
        metalness: 0.5,
        roughness: 0.1,
        clearcoat: 0.8,
      });
    });
  }, []);

  return (
    <div className="techstack" id="techstack" relative overflow-hidden>
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 particle-bg pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/5 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/5 blur-[120px] rounded-full animate-pulse delay-1000" />
        </div>
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `radial-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>
      <div className="relative z-10 text-center pt-8 mb-4 pointer-events-none flex flex-col items-center justify-center space-y-1">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="inline-block glass rounded-full px-4 py-2"
        >
          <span className="text-sm font-medium gradient-text">
            Skills
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 mt-2"
        >
          My <span className="gradient-text">Techstack</span>
        </motion.h2>
      </div>
      <Canvas
        shadows
        gl={{ alpha: true, stencil: false, depth: false, antialias: false }}
        camera={{ position: [0, 0, 20], fov: 32.5, near: 1, far: 100 }}
        onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}
        className="tech-canvas"
      >
        <ambientLight intensity={1} />
        <spotLight
          position={[20, 20, 25]}
          penumbra={1}
          angle={0.2}
          color="white"
          castShadow
          shadow-mapSize={[512, 512]}
        />
        <directionalLight position={[0, 5, -4]} intensity={2} />
        <Physics gravity={[0, 0, 0]}>
          <Pointer isActive={isActive} />
          {spheres.map((props, i) => (
            <SphereGeo
              key={i}
              {...props}
              material={materials[i % materials.length]}
              isActive={isActive}
            />
          ))}
        </Physics>
        <Environment
          files="/models/char_enviorment.hdr"
          environmentIntensity={0.5}
          environmentRotation={[0, 4, 2]}
        />
        <EffectComposer enableNormalPass={false}>
          <N8AO color="#0f002c" aoRadius={2} intensity={1.15} />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default TechStack;
