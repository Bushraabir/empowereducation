import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

// Path to the GLTF model
const skyScenePath = "/assets/3d/sky.glb";

export function Sky({ isRotating }) {
  // Load the GLTF model using useGLTF hook
  const { scene, nodes, materials, animations } = useGLTF(skyScenePath);

  // Create a reference for the sky mesh
  const skyRef = useRef();

  // Update the rotation on each frame if isRotating is true
  useFrame((state, delta) => {
    if (isRotating && skyRef.current) {
      skyRef.current.rotation.y += 0.25 * delta;
    }
  });

  return (
    <mesh ref={skyRef} scale={[10, 10, 10]} position={[0, 0, 0]}>
      {/* Pass the scene from the loaded GLTF model */}
      <primitive object={scene} />
    </mesh>
  );
}
