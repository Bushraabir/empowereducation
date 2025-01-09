import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useEffect, useRef } from "react";
import { useGLTF, OrbitControls } from "@react-three/drei";
import Loader from "../components/Loader";
import sakura from "../assets/sakura.mp3";
import HomeInfo from "../components/HomeInfo";
import backgroundImage from "../assets/11.jpg";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import "./Home.css";

// Model path
const modelPath = "/assets/3d/boat/scene.gltf";

const Home = () => {
  const [islandScale, setIslandScale] = useState([3, 3, 3]); // Default scale for the model
  const [islandPosition, setIslandPosition] = useState([0, 0, 0]); // Model centered at origin
  const [cameraPosition, setCameraPosition] = useState([0, 0, 10]); // Initial camera position

  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [currentStage, setCurrentStage] = useState(1);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  const { scene } = useGLTF(modelPath);

  const nextStage = () => {
    setCurrentStage((prevStage) => (prevStage % 4) + 1); // Loop through stages 1 to 4
  };

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  // Adjust model scale and position based on screen size
  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [4, 4, 4]; // Scale for mobile devices
      screenPosition = [0, -3, -15]; // Position for mobile
    } else if (window.innerWidth < 1024) {
      screenScale = [3, 3, 3]; // Scale for tablets
      screenPosition = [0, -4, -20]; // Position for tablets
    } else {
      screenScale = [10, 10, 10]; // Scale for larger screens (desktop)
      screenPosition = [0, -5, -30]; // Position for desktop
    }

    setIslandScale(screenScale);
    setIslandPosition(screenPosition);
  };

  useEffect(() => {
    adjustIslandForScreenSize();
    window.addEventListener("resize", adjustIslandForScreenSize);
    return () => window.removeEventListener("resize", adjustIslandForScreenSize);
  }, []);

  // Smoothly animate camera rotation around the island
  useEffect(() => {
    let angle = 0; // Initial angle for rotation
    const radius = 20; // Radius of the circular path

    const rotateCamera = () => {
      angle += 0.01; // Increment the angle for smooth rotation
      const x = radius * Math.sin(angle);
      const z = radius * Math.cos(angle);

      setCameraPosition([x, 5, z]); // Update camera position
    };

    const interval = setInterval(rotateCamera, 16); // ~60 FPS
    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <section className="relative w-full h-screen">
      <div className="absolute left-0 right-0 z-10 flex items-center justify-center top-28">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      {/* Next Stage Button with Framer Motion */}
      <motion.button
        onClick={nextStage}
        className="next-stage-button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        Upgrade!
      </motion.button>

      <Suspense fallback={<Loader />}>
        <Canvas
          className={`w-full h-screen bg-transparent`}
          style={{
            backgroundImage:
              `linear-gradient(to top, rgba(249, 115, 22, 0.15), rgba(249, 115, 22, 0.15)), ` +
              `url(${backgroundImage})`, // Background image with gradient overlay
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(1)", // Lighten the background for a glowing effect
          }}
          camera={{
            position: cameraPosition,
            near: 0.1,
            far: 1000,
          }}
        >
          {/* Lights */}
          <pointLight intensity={1.8} />
          <ambientLight intensity={1.02} />
          <spotLight intensity={1.5} />
          <hemisphereLight
            intensity={0.5}
            skyColor="rgba(249, 115, 22, 0.15)"
            groundColor="#000000"
          />
          <directionalLight position={[1, 1, 1]} intensity={0.05} />

          {/* OrbitControls for user interaction (rotation) */}
          <OrbitControls
            enableRotate={true} // Disable manual rotation
            enableZoom={false} // Enable zoom for better interaction
            enablePan={false} // Disable pan
            target={[0, 0, 0]} // Center the rotation at the island's center
          />

          {/* Camera rotation around the model */}
          <primitive object={scene} position={islandPosition} scale={islandScale} />
        </Canvas>
      </Suspense>
    </section>
  );
};

export default Home;
