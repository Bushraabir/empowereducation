import { Canvas } from '@react-three/fiber';
import { Suspense, useState, useEffect } from 'react';
import Island from '../models/Island';
import Loader from '../components/Loader';
import { Sky } from '@react-three/drei';

const Home = () => {
  const [islandScale, setIslandScale] = useState([0.9, 0.9, 0.9]);
  const [islandPosition, setIslandPosition] = useState([0.5, 0, 0]);

  const adjustIslandForScreenSize = () => {
    if (window.innerWidth < 768) {
      setIslandScale([0.9, 0.9, 0.9]);
    } else {
      setIslandScale([1, 1, 1]);
    }
  };

  useEffect(() => {
    adjustIslandForScreenSize();
    window.addEventListener('resize', adjustIslandForScreenSize);
    return () => window.removeEventListener('resize', adjustIslandForScreenSize);
  }, []);

  return (
    <section className="w-full h-screen relative">
      <Suspense fallback={<Loader />}>
        <Canvas
          className="w-full h-screen bg-transparent"
          camera={{ near: 0.1, far: 1000, position: [0, 0, 5] }}
        >
          {/* Lights */}
          <pointLight intensity={0.8} />
          <ambientLight intensity={0.02} />
          <spotLight intensity={0.5} />
          <hemisphereLight intensity={0.5} skyColor="#b1e1ff" groundColor="#000000" />
          <directionalLight position={[1, 1, 1]} intensity={0.05} />

          {/* Sky Component */}
          
          {/* Island Model */}
          <Island position={islandPosition} scale={islandScale} />
        </Canvas>
      </Suspense>
    </section>
  );
};

export default Home;
