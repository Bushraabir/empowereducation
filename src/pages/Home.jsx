import { Canvas } from '@react-three/fiber';
import { Suspense, useState, useEffect, useRef } from 'react';
import Island from '../models/Island';
import Loader from '../components/Loader';
import sakura from '../assets/sakura.mp3'; 
import HomeInfo from '../components/HomeInfo';
import backgroundImage from '../assets/11.jpg';
import Popup from '../components/Popup'; 
import './Home.css'

const Home = () => {
  const [islandScale, setIslandScale] = useState([0.9, 0.9, 0.9]);
  const [islandPosition, setIslandPosition] = useState([0.5, 0, 0]);
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

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

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }

    return [screenScale, screenPosition];
  };

  useEffect(() => {
    adjustIslandForScreenSize();
    window.addEventListener('resize', adjustIslandForScreenSize);
    return () => window.removeEventListener('resize', adjustIslandForScreenSize);
  }, []);

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      
      {/* Next Stage Button */}
      <button
        
        onClick={nextStage}
          className="next-stage-button"
      >
        Upgrade!
      </button>

      <Suspense fallback={<Loader />}>
        <Canvas
          className={`w-full h-screen bg-transparent ${
            isRotating ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          style={{
            backgroundImage:
              `linear-gradient(to top, rgba(249, 115, 22, 0.15), rgba(249, 115, 22, 0.15)), ` +
              `url(${backgroundImage})`, // Background image with gradient overlay
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(1)', // Lighten the background for a glowing effect
          }}
          camera={{ near: 0.1, far: 1000, position: [0, 0, 5] }}
        >
          {/* Lights */}
          <pointLight intensity={1.8} />
          <ambientLight intensity={1.02} />
          <spotLight intensity={1.5} />
          <hemisphereLight intensity={0.5} skyColor=" rgba(249, 115, 22, 0.15)" groundColor="#000000" />
          <directionalLight position={[1, 1, 1]} intensity={0.05} />

          {/* Island Model */}
          <Island position={islandPosition} scale={islandScale} />
        </Canvas>
      </Suspense>
    </section>
  );
};


export default Home;