import React, { useRef, useState, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import islandModel from '/assets/3d/island.glb'; // Import your 3D island model
import { a, useSpring } from '@react-spring/three';

const Island = (props) => {
  const group = useRef();
  const [isDragging, setIsDragging] = useState(false);
  const [currentRotation, setCurrentRotation] = useState([0, 0, 0]); // Rotation is only modified along Y-axis
  const [lastPointer, setLastPointer] = useState([0, 0]);

  const { nodes, materials } = useGLTF(islandModel);

  const SENSITIVITY = 0.002; // Sensitivity for horizontal movement

  // Pointer down: Start tracking drag
  const handlePointerDown = (event) => {
    setIsDragging(true);
    setLastPointer([event.clientX, event.clientY]);
    document.body.style.cursor = 'grabbing'; // Change cursor to 'grabbing'
  };

  // Pointer move: Update the rotation based on horizontal movement (dx)
  const handlePointerMove = (event) => {
    if (isDragging) {
      const dx = event.clientX - lastPointer[0]; // Horizontal movement (left-right)

      // Update the rotation along the Y-axis based on the horizontal drag (dx)
      setCurrentRotation((prevRotation) => [
        prevRotation[0], // Keep X rotation unchanged
        prevRotation[1] + dx * SENSITIVITY, // Rotate horizontally along Y-axis
        prevRotation[2], // Keep Z rotation unchanged
      ]);

      // Update last pointer position for next movement calculation
      setLastPointer([event.clientX, event.clientY]);
    }
  };

  // Pointer up: End the drag
  const handlePointerUp = () => {
    setIsDragging(false);
    document.body.style.cursor = 'grab'; // Reset cursor to 'grab' when not dragging
  };

  // Apply the rotation to the group
  useEffect(() => {
    if (group.current) {
      // Apply the current rotation to the group (the island)
      group.current.rotation.set(currentRotation[0], currentRotation[1], currentRotation[2]);
    }
  }, [currentRotation]);

  return (
    <a.group
      ref={group}
      {...props}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp} // Stop drag when pointer leaves
      onPointerCancel={handlePointerUp} // Stop drag on pointer cancel
    >
      <a.group name="Sketchfab_Scene">
        <a.group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <a.group name="root">
            <a.group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <a.group name="Cube003_0" position={[73.4, -5.349, -70.288]} scale={12.073}>
                <mesh
                  name="Object_4"

                  geometry={nodes.Object_4.geometry}
                  material={materials['woodenparts.001']}
                />
              </a.group>
              <a.group name="Plane_1" position={[73.4, -5.447, -70.288]} scale={12.073}>
                <mesh
                  name="Object_6"

                  geometry={nodes.Object_6.geometry}
                  material={materials.metalparts}
                />
              </a.group>
              <a.group
                name="Cube005_2"
                position={[73.4, -11.65, -141.958]}
                scale={[13.459, 10.902, 10.902]}>
                <mesh
                  name="Object_8"

                  geometry={nodes.Object_8.geometry}
                  material={materials.woodboard}
                />
              </a.group>
              <a.group
                name="Plane003_3"
                position={[73.4, -9.265, -145.158]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={2.554}>
                <mesh
                  name="Object_10"

                  geometry={nodes.Object_10.geometry}
                  material={materials.glass}
                />
                <mesh
                  name="Object_11"

                  geometry={nodes.Object_11.geometry}
                  material={materials.metalparts}
                />
                <mesh
                  name="Object_12"

                  geometry={nodes.Object_12.geometry}
                  material={materials.woodboard}
                />
                <mesh
                  name="Object_13"

                  geometry={nodes.Object_13.geometry}
                  material={materials.woodenparts}
                />
              </a.group>
              <a.group
                name="Cube007_4"
                position={[73.4, -4.266, -171.327]}
                scale={[8.826, 2.554, 2.554]}>
                <mesh
                  name="Object_15"

                  geometry={nodes.Object_15.geometry}
                  material={materials.metalparts}
                />
                <mesh
                  name="Object_16"

                  geometry={nodes.Object_16.geometry}
                  material={materials.woodboard}
                />
              </a.group>
              <a.group name="Cube008_5" position={[73.4, -7.019, -150.077]} scale={2.554}>
                <mesh
                  name="Object_18"

                  geometry={nodes.Object_18.geometry}
                  material={materials.metalparts}
                />
                <mesh
                  name="Object_19"

                  geometry={nodes.Object_19.geometry}
                  material={materials.woodenparts}
                />
              </a.group>
              <a.group name="Cube009_6" position={[73.4, -39.753, -120.646]} scale={2.554}>
                <mesh
                  name="Object_21"

                  geometry={nodes.Object_21.geometry}
                  material={materials.metalparts}
                />
                <mesh
                  name="Object_22"

                  geometry={nodes.Object_22.geometry}
                  material={materials.woodenparts}
                />
              </a.group>
              <a.group name="Cube011_7" position={[73.4, -16.687, -119.53]} scale={2.554}>
                <mesh
                  name="Object_24"

                  geometry={nodes.Object_24.geometry}
                  material={materials['woodenparts.001']}
                />
              </a.group>
              <a.group
                name="Cube012_8"
                position={[73.4, -17.495, -129.584]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[-2.554, 2.554, 2.554]}>
                <mesh
                  name="Object_26"

                  geometry={nodes.Object_26.geometry}
                  material={materials['woodenparts.001']}
                />
              </a.group>
              <a.group
                name="Cube001_9"
                position={[73.4, -6.748, -91.196]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[-2.554, 2.554, 2.554]}>
                <mesh
                  name="Object_28"

                  geometry={nodes.Object_28.geometry}
                  material={materials['woodenparts.001']}
                />
              </a.group>
              <a.group name="Cube002_10" position={[73.4, -17.028, -136.666]} scale={12.073}>
                <mesh
                  name="Object_30"

                  geometry={nodes.Object_30.geometry}
                  material={materials.steelplates}
                />
              </a.group>
              <a.group name="Cube013_11" position={[73.4, -39.753, -120.646]} scale={3.343}>
                <mesh
                  name="Object_32"

                  geometry={nodes.Object_32.geometry}
                  material={materials.metalparts}
                />
                <mesh
                  name="Object_33"

                  geometry={nodes.Object_33.geometry}
                  material={materials.woodboard}
                />
              </a.group>
              <a.group name="Cube020_12" position={[55.002, -14.686, -164.776]} scale={2.554}>
                <mesh
                  name="Object_35"

                  geometry={nodes.Object_35.geometry}
                  material={materials.metalparts}
                />
              </a.group>
              <a.group name="Plane006_13" position={[73.4, -39.753, -120.646]} scale={2.554}>
                <mesh
                  name="Object_37"

                  geometry={nodes.Object_37.geometry}
                  material={materials.metalparts}
                />
              </a.group>
              <a.group name="Cube014_14" position={[73.4, -21.401, -176.269]} scale={3.343}>
                <mesh
                  name="Object_39"

                  geometry={nodes.Object_39.geometry}
                  material={materials.metalparts}
                />
                <mesh
                  name="Object_40"

                  geometry={nodes.Object_40.geometry}
                  material={materials.hole}
                />
              </a.group>
              <a.group name="Cube015_15" position={[73.4, -16.566, -136.666]} scale={12.073}>
                <mesh
                  name="Object_42"
                  
                  geometry={nodes.Object_42.geometry}
                  material={materials.metalparts}
                />
              </a.group>
              <a.group name="Cube016_16" position={[73.4, -16.566, -136.666]} scale={12.073}>
                <mesh
                  name="Object_44"

                  geometry={nodes.Object_44.geometry}
                  material={materials.steelplates}
                />
                <mesh
                  name="Object_45"

                  geometry={nodes.Object_45.geometry}
                  material={materials['woodenparts.001']}
                />
              </a.group>
              <a.group name="Cube017_17" position={[73.4, -16.566, -136.666]} scale={12.073}>
                <mesh
                  name="Object_47"

                  geometry={nodes.Object_47.geometry}
                  material={materials.metalparts}
                />
              </a.group>
              <a.group
                name="Cube019_18"
                position={[73.4, -16.566, -115.094]}
                scale={[11.353, 12.073, 12.073]}>
                <mesh
                  name="Object_49"

                  geometry={nodes.Object_49.geometry}
                  material={materials.metalparts}
                />
              </a.group>
              <a.group name="Cube018_19" position={[73.4, -7.019, -150.077]} scale={2.554}>
                <mesh
                  name="Object_51"
  
                  geometry={nodes.Object_51.geometry}
                  material={materials['woodenparts.001']}
                />
                <mesh
                  name="Object_52"
    
                  geometry={nodes.Object_52.geometry}
                  material={materials.components}
                />
              </a.group>
              <a.group name="Cube010_20" position={[73.4, -16.566, -140.311]} scale={12.073}>
                <mesh
                  name="Object_54"
              
                  geometry={nodes.Object_54.geometry}
                  material={materials.metalparts}
                />
              </a.group>
              <a.group name="Cube021_21" position={[73.4, -16.566, -136.666]} scale={12.073}>
                <mesh
                  name="Object_56"
                 
                  geometry={nodes.Object_56.geometry}
                  material={materials.metalparts}
                />
              </a.group>
              <a.group name="Cube022_22" position={[73.4, -16.566, -136.666]} scale={12.073}>
                <mesh
                  name="Object_58"
                  
                  geometry={nodes.Object_58.geometry}
                  material={materials.woodenparts}
                />
              </a.group>
              <a.group name="Circle_23" position={[73.4, 32.893, -125.016]} scale={2.554}>
                <mesh
                  name="Object_60"
             
                  geometry={nodes.Object_60.geometry}
                  material={materials.components}
                />
                <mesh
                  name="Object_61"
                
                  geometry={nodes.Object_61.geometry}
                  material={materials.metalparts}
                />
              </a.group>
              <a.group name="Cube023_24" position={[73.4, -19.959, -125.016]} scale={2.554}>
                <mesh
                  name="Object_63"
                 
                  geometry={nodes.Object_63.geometry}
                  material={materials.components}
                />
              </a.group>
              <a.group name="Cube024_25" position={[73.4, -8.867, -125.016]} scale={2.554}>
                <mesh
                  name="Object_65"
                 
                  geometry={nodes.Object_65.geometry}
                  material={materials.metalparts}
                />
              </a.group>
              <a.group
                name="Cube025_26"
                position={[73.4, 22.431, -125.016]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={2.554}>
                <mesh
                  name="Object_67"
                
                  geometry={nodes.Object_67.geometry}
                  material={materials.metalparts}
                />
              </a.group>
              <a.group name="Cube026_27" position={[73.4, -19.959, -125.016]} scale={2.554}>
                <mesh
                  name="Object_69"
                
                  geometry={nodes.Object_69.geometry}
                  material={materials.components}
                />
              </a.group>
              <a.group name="Cube027_28" position={[73.4, -1.46, -163.906]} scale={2.554}>
                <mesh
                  name="Object_71"
               
                  geometry={nodes.Object_71.geometry}
                  material={materials.woodboard}
                />
              </a.group>
              <a.group
                name="Cube028_29"
                position={[73.4, -0.511, -168.804]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[-2.554, 2.554, 2.554]}>
                <mesh
                  name="Object_73"
               
                  geometry={nodes.Object_73.geometry}
                  material={materials['woodenparts.001']}
                />
              </a.group>
              <a.group name="Cube029_30" position={[73.4, -11.961, -137.14]} scale={2.554}>
                <mesh
                  name="Object_75"
             
                  geometry={nodes.Object_75.geometry}
                  material={materials.woodboard}
                />
                <mesh
                  name="Object_76"
              
                  geometry={nodes.Object_76.geometry}
                  material={materials.metalparts}
                />
                <mesh
                  name="Object_77"
                
                  geometry={nodes.Object_77.geometry}
                  material={materials['woodenparts.001']}
                />
              </a.group>
              <a.group name="Cube030_31" position={[73.4, -1.46, -163.906]} scale={2.554}>
                <mesh
                  name="Object_79"
                
                  geometry={nodes.Object_79.geometry}
                  material={materials.metalparts}
                />
                <mesh
                  name="Object_80"
                
                  geometry={nodes.Object_80.geometry}
                  material={materials.woodenparts}
                />
              </a.group>
              <a.group name="Plane005_32" position={[73.4, -39.753, -120.646]} scale={2.554}>
                <mesh
                  name="Object_82"
                 
                  geometry={nodes.Object_82.geometry}
                  material={materials.steelplates}
                />
                <mesh
                  name="Object_83"
              
                  geometry={nodes.Object_83.geometry}
                  material={materials.hole}
                />
                <mesh
                  name="Object_84"
              
                  geometry={nodes.Object_84.geometry}
                  material={materials.metalparts}
                />
              </a.group>
              <a.group name="Circle006_33" position={[73.4, -3.752, -161.734]} scale={3.343}>
                <mesh
                  name="Object_86"
              
                  geometry={nodes.Object_86.geometry}
                  material={materials.components}
                />
                <mesh
                  name="Object_87"
               
                  geometry={nodes.Object_87.geometry}
                  material={materials.metalparts}
                />
              </a.group>
              <a.group name="Cube031_34" position={[73.4, 17.162, -124.206]} scale={2.554}>
                <mesh
                  name="Object_89"
              
                  geometry={nodes.Object_89.geometry}
                  material={materials.metalparts}
                />
                <mesh
                  name="Object_90"
                
                  geometry={nodes.Object_90.geometry}
                  material={materials['woodenparts.001']}
                />
                <mesh
                  name="Object_91"
                 
                  geometry={nodes.Object_91.geometry}
                  material={materials.steelplates}
                />
                <mesh
                  name="Object_92"
                 
                  geometry={nodes.Object_92.geometry}
                  material={materials.glass}
                />
              </a.group>
              <a.group name="Plane009_35" position={[73.4, -9.261, -116.367]} scale={2.554}>
                <mesh
                  name="Object_94"
               
                  geometry={nodes.Object_94.geometry}
                  material={materials.components}
                />
                <mesh
                  name="Object_95"
                 
                  geometry={nodes.Object_95.geometry}
                  material={materials['woodenparts.001']}
                />
              </a.group>
              <a.group name="Plane010_36" position={[73.4, -9.385, -116.367]} scale={2.554}>
                <mesh
                  name="Object_97"
                 
                  geometry={nodes.Object_97.geometry}
                  material={materials['woodenparts.001']}
                />
              </a.group>
              <a.group name="Cube032_37" position={[73.45, -6.179, -146.961]} scale={2.554}>
                <mesh
                  name="Object_99"
                
                  geometry={nodes.Object_99.geometry}
                  material={materials.components}
                />
              </a.group>
              <a.group name="Circle007_38" position={[73.4, -39.753, -120.646]} scale={2.554}>
                <mesh
                  name="Object_101"
                  
                  geometry={nodes.Object_101.geometry}
                  material={materials.metalparts}
                />
                <mesh
                  name="Object_102"
                 
                  geometry={nodes.Object_102.geometry}
                  material={materials.hole}
                />
                <mesh
                  name="Object_103"
                
                  geometry={nodes.Object_103.geometry}
                  material={materials.glass}
                />
              </a.group>
              <a.group name="Cube035_39" position={[73.4, -7.019, -150.077]} scale={2.554}>
                <mesh
                  name="Object_105"
                 
                  geometry={nodes.Object_105.geometry}
                  material={materials.metalparts}
                />
                <mesh
                  name="Object_106"
                
                  geometry={nodes.Object_106.geometry}
                  material={materials.woodenparts}
                />
              </a.group>
              <a.group name="Circle008_40" position={[85.353, -10.374, -132.766]} scale={1.379}>
                <mesh
                  name="Object_108"
               
                  geometry={nodes.Object_108.geometry}
                  material={materials.components}
                />
              </a.group>
              <a.group
                name="Circle009_41"
                position={[73.4, 3.477, -163.07]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={1.786}>
                <mesh
                  name="Object_110"
                
                  geometry={nodes.Object_110.geometry}
                  material={materials.metalparts}
                />
                <mesh
                  name="Object_111"
                
                  geometry={nodes.Object_111.geometry}
                  material={materials.woodenparts}
                />
              </a.group>
              <a.group name="Cube036_42" position={[73.4, -16.566, -136.666]} scale={12.073}>
                <mesh
                  name="Object_113"
                
                  geometry={nodes.Object_113.geometry}
                  material={materials['woodenparts.001']}
                />
              </a.group>
              <a.group
                name="Circle011_43"
                position={[73.4, 3.477, -163.07]}
                rotation={[Math.PI / 2, -Math.PI / 4, 0]}
                scale={1.639}>
                <mesh
                  name="Object_115"
                
                  geometry={nodes.Object_115.geometry}
                  material={materials['woodenparts.001']}
                />
              </a.group>
              <a.group
                name="Plane008_44"
                position={[73.4, 3.477, -163.174]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.217}>
                <mesh
                  name="Object_117"
                
                  geometry={nodes.Object_117.geometry}
                  material={materials['woodenparts.001']}
                />
                <mesh
                  name="Object_118"
                 
                  geometry={nodes.Object_118.geometry}
                  material={materials.metalparts}
                />
              </a.group>
              <a.group name="Cube037_45" position={[73.4, 3.391, -163.174]} scale={2.554}>
                <mesh
                  name="Object_120"
                 
                  geometry={nodes.Object_120.geometry}
                  material={materials['woodenparts.001']}
                />
              </a.group>
              <a.group name="Cube038_46" position={[75.681, 1.014, -165.173]} scale={3.027}>
                <mesh
                  name="Object_122"
                
                  geometry={nodes.Object_122.geometry}
                  material={materials.metalparts}
                />
                <mesh
                  name="Object_123"
                  
                  geometry={nodes.Object_123.geometry}
                  material={materials['woodenparts.001']}
                />
              </a.group>
              <a.group name="Cube039_47" position={[75.495, 3.583, -165.728]} scale={3.027}>
                <mesh
                  name="Object_125"
                 
                  geometry={nodes.Object_125.geometry}
                  material={materials.metalparts}
                />
                <mesh
                  name="Object_126"
                  
                  geometry={nodes.Object_126.geometry}
                  material={materials.components}
                />
              </a.group>
              <a.group name="Cube040_48" position={[75.495, 3.583, -165.333]} scale={3.027}>
                <mesh
                  name="Object_128"
                
                  geometry={nodes.Object_128.geometry}
                  material={materials.metalparts}
                />
                <mesh
                  name="Object_129"
                
                  geometry={nodes.Object_129.geometry}
                  material={materials.components}
                />
              </a.group>
              <a.group name="Cube041_49" position={[75.495, 3.583, -164.914]} scale={3.027}>
                <mesh
                  name="Object_131"
                 
                  geometry={nodes.Object_131.geometry}
                  material={materials.metalparts}
                />
                <mesh
                  name="Object_132"
                 
                  geometry={nodes.Object_132.geometry}
                  material={materials.components}
                />
              </a.group>
              <a.group name="Cube042_50" position={[75.495, 3.583, -164.521]} scale={3.027}>
                <mesh
                  name="Object_134"
                
                  geometry={nodes.Object_134.geometry}
                  material={materials.metalparts}
                />
                <mesh
                  name="Object_135"
                 
                  geometry={nodes.Object_135.geometry}
                  material={materials.components}
                />
              </a.group>
              <a.group name="Cube043_51" position={[71.689, 3.715, -159.72]} scale={2.912}>
                <mesh
                  name="Object_137"
                 
                  geometry={nodes.Object_137.geometry}
                  material={materials.metalparts}
                />
              </a.group>
              <a.group name="Plane012_52" position={[71.48, 2.871, -161.897]} scale={2.912}>
                <mesh
                  name="Object_139"
                  
                  geometry={nodes.Object_139.geometry}
                  material={materials.components}
                />
                <mesh
                  name="Object_140"
                 
                  geometry={nodes.Object_140.geometry}
                  material={materials.metalparts}
                />
                <mesh
                  name="Object_141"
               
                  geometry={nodes.Object_141.geometry}
                  material={materials['woodenparts.001']}
                />
              </a.group>
              <a.group
                name="Cube045_53"
                position={[71.059, 1.236, -164.313]}
                scale={[0.19, 0.222, 0.665]}>
                <mesh
                  name="Object_143"
             
                  geometry={nodes.Object_143.geometry}
                  material={materials.components}
                />
                <mesh
                  name="Object_144"
                  
                  geometry={nodes.Object_144.geometry}
                  material={materials.metalparts}
                />
                <mesh
                  name="Object_145"
                  
                  geometry={nodes.Object_145.geometry}
                  material={materials.hole}
                />
              </a.group>
              <a.group name="Cube046_54" position={[73.4, -7.019, -150.077]} scale={2.554}>
                <mesh
                  name="Object_147"
                
                  geometry={nodes.Object_147.geometry}
                  material={materials.woodenparts}
                />
              </a.group>
              <a.group name="Cube047_55" position={[73.4, -7.019, -150.077]} scale={2.554}>
                <mesh
                  name="Object_149"
            
                  geometry={nodes.Object_149.geometry}
                  material={materials.woodenparts}
                />
              </a.group>
              <a.group name="Cube048_56" position={[73.4, -7.019, -150.077]} scale={2.554}>
                <mesh
                  name="Object_151"
          
                  geometry={nodes.Object_151.geometry}
                  material={materials.woodenparts}
                />
              </a.group>
              <a.group name="Cube049_57" position={[73.4, -7.019, -150.077]} scale={2.554}>
                <mesh
                  name="Object_153"
           
                  geometry={nodes.Object_153.geometry}
                  material={materials.woodenparts}
                />
              </a.group>
              <a.group name="Cube050_58" position={[73.4, -7.019, -150.077]} scale={2.554}>
                <mesh
                  name="Object_155"
              
                  geometry={nodes.Object_155.geometry}
                  material={materials.metalparts}
                />
                <mesh
                  name="Object_156"
               
                  geometry={nodes.Object_156.geometry}
                  material={materials.woodenparts}
                />
              </a.group>
              <a.group name="Cube056_59" position={[73.4, -39.753, -124.501]} scale={2.554}>
                <mesh
                  name="Object_158"
                
                  geometry={nodes.Object_158.geometry}
                  material={materials.metalparts}
                />
                <mesh
                  name="Object_159"
               
                  geometry={nodes.Object_159.geometry}
                  material={materials.hole}
                />
                <mesh
                  name="Object_160"
                 
                  geometry={nodes.Object_160.geometry}
                  material={materials.components}
                />
                <mesh
                  name="Object_161"
                
                  geometry={nodes.Object_161.geometry}
                  material={materials.steelplates}
                />
              </a.group>
              <a.group name="Cube059_60" position={[73.4, -16.566, -136.666]} scale={12.073}>
                <mesh
                  name="Object_163"
                 
                  geometry={nodes.Object_163.geometry}
                  material={materials.woodboard}
                />
              </a.group>
              <a.group name="Cube060_61" position={[73.4, -16.566, -136.666]} scale={12.073}>
                <mesh
                  name="Object_165"
                 
                  geometry={nodes.Object_165.geometry}
                  material={materials.woodboard}
                />
              </a.group>
              <a.group name="Cube061_62" position={[73.4, -16.566, -136.666]} scale={12.073}>
                <mesh
                  name="Object_167"
                
                  geometry={nodes.Object_167.geometry}
                  material={materials.woodboard}
                />
              </a.group>
              <a.group name="Cube_63" position={[73.4, -39.753, -120.646]} scale={2.554}>
                <mesh
                  name="Object_169"
                
                  geometry={nodes.Object_169.geometry}
                  material={materials['woodenparts.001']}
                />
              </a.group>
              <a.group name="Cube062_64" position={[73.4, 17.162, -124.206]} scale={2.554}>
                <mesh
                  name="Object_171"
                 
                  geometry={nodes.Object_171.geometry}
                  material={materials.metalparts}
                />
              </a.group>
              <a.group name="Cube063_65" position={[73.4, -1.46, -163.906]} scale={2.554}>
                <mesh
                  name="Object_173"
         
                  geometry={nodes.Object_173.geometry}
                  material={materials.woodenparts}
                />
              </a.group>
              <a.group name="Plane011_66" position={[73.4, -39.753, -120.646]} scale={2.554}>
                <mesh
                  name="Object_175"
             
                  geometry={nodes.Object_175.geometry}
                  material={materials.glass}
                />
                <mesh
                  name="Object_176"
        
                  geometry={nodes.Object_176.geometry}
                  material={materials.metalparts}
                />
                <mesh
                  name="Object_177"
             
                  geometry={nodes.Object_177.geometry}
                  material={materials.woodboard}
                />
                <mesh
                  name="Object_178"
            
                  geometry={nodes.Object_178.geometry}
                  material={materials.woodenparts}
                />
              </a.group>
              <a.group
                name="Plane017_67"
                position={[69.547, -3.332, -167.136]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={2.554}>
                <mesh
                  name="Object_180"
                
                  geometry={nodes.Object_180.geometry}
                  material={materials.metalparts}
                />
                <mesh
                  name="Object_181"
                 
                  geometry={nodes.Object_181.geometry}
                  material={materials.woodboard}
                />
                <mesh
                  name="Object_182"
               
                  geometry={nodes.Object_182.geometry}
                  material={materials.woodenparts}
                />
              </a.group>
              <a.group
                name="Circle010_68"
                position={[73.4, 3.477, -163.07]}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                scale={1.639}>
                <mesh
                  name="Object_184"
                
                  geometry={nodes.Object_184.geometry}
                  material={materials['woodenparts.001']}
                />
              </a.group>
              <a.group
                name="Circle012_69"
                position={[73.4, 3.477, -163.07]}
                rotation={[-Math.PI / 2, -Math.PI / 4, Math.PI]}
                scale={1.639}>
                <mesh
                  name="Object_186"
                 
                  geometry={nodes.Object_186.geometry}
                  material={materials['woodenparts.001']}
                />
              </a.group>
              <a.group
                name="Circle013_70"
                position={[73.4, 3.477, -163.07]}
                rotation={[-Math.PI / 2, 0, Math.PI]}
                scale={1.639}>
                <mesh
                  name="Object_188"
                 
                  geometry={nodes.Object_188.geometry}
                  material={materials['woodenparts.001']}
                />
              </a.group>
              <a.group name="Cube064_71" position={[73.4, -39.753, -120.646]} scale={2.554}>
                <mesh
                  name="Object_190"
                  
                  geometry={nodes.Object_190.geometry}
                  material={materials['woodenparts.001']}
                />
              </a.group>
              <a.group name="Cube065_72" position={[73.4, -11.961, -137.14]} scale={2.554}>
                <mesh
                  name="Object_192"
                
                  geometry={nodes.Object_192.geometry}
                  material={materials['woodenparts.001']}
                />
              </a.group>
              <a.group name="Cube066_73" position={[73.4, -11.961, -137.14]} scale={2.554}>
                <mesh
                  name="Object_194"
                  
                  geometry={nodes.Object_194.geometry}
                  material={materials['woodenparts.001']}
                />
              </a.group>
              <a.group name="Cube067_74" position={[73.4, -39.753, -120.646]} scale={2.554}>
                <mesh
                  name="Object_196"
                 
                  geometry={nodes.Object_196.geometry}
                  material={materials['woodenparts.001']}
                />
              </a.group>
              <a.group name="Cube068_75" position={[73.4, 17.162, -124.206]} scale={2.554}>
                <mesh
                  name="Object_198"
                 
                  geometry={nodes.Object_198.geometry}
                  material={materials.components}
                />
                <mesh
                  name="Object_199"
                 
                  geometry={nodes.Object_199.geometry}
                  material={materials.woodenparts}
                />
              </a.group>
              <a.group name="Plane004_76" position={[73.4, -9.27, -116.367]} scale={2.554}>
                <mesh
                  name="Object_201"
                  
                  geometry={nodes.Object_201.geometry}
                  material={materials.metalparts}
                />
              </a.group>
              <a.group name="Plane014_77" position={[73.4, -9.385, -116.367]} scale={2.554}>
                <mesh
                  name="Object_203"
                
                  geometry={nodes.Object_203.geometry}
                  material={materials['woodenparts.001']}
                />
              </a.group>
              <a.group name="Cube069_78" position={[73.4, -16.566, -136.666]} scale={12.073}>
                <mesh
                  name="Object_205"
                  
                  geometry={nodes.Object_205.geometry}
                  material={materials['woodenparts.001']}
                />
              </a.group>
              <a.group name="Cube006_79" position={[73.4, -16.566, -124.866]} scale={12.073}>
                <mesh
                  name="Object_207"
                
                  geometry={nodes.Object_207.geometry}
                  material={materials['woodenparts.001']}
                />
              </a.group>
              <a.group name="Cube070_80" position={[73.4, -16.566, -124.866]} scale={12.073}>
                <mesh
                  name="Object_209"
                 
                  geometry={nodes.Object_209.geometry}
                  material={materials['woodenparts.001']}
                />
              </a.group>
              <a.group name="Cube071_81" position={[73.4, -10.238, -131.801]} scale={12.073}>
                <mesh
                  name="Object_211"
                 
                  geometry={nodes.Object_211.geometry}
                  material={materials['woodenparts.001']}
                />
              </a.group>
              <a.group name="Cube072_82" position={[73.4, -10.268, -140.852]} scale={12.073}>
                <mesh
                  name="Object_213"
               
                  geometry={nodes.Object_213.geometry}
                  material={materials['woodenparts.001']}
                />
              </a.group>
              <a.group name="Cube073_83" position={[73.4, -16.566, -136.666]} scale={12.073}>
                <mesh
                  name="Object_215"
                
                  geometry={nodes.Object_215.geometry}
                  material={materials['woodenparts.001']}
                />
              </a.group>
              <a.group name="Cube074_84" position={[73.4, -16.566, -136.666]} scale={12.073}>
                <mesh
                  name="Object_217"
                 
                  geometry={nodes.Object_217.geometry}
                  material={materials['woodenparts.001']}
                />
              </a.group>
              <a.group name="Cube058_85" position={[-141.487, 180.059, -35.528]} scale={2.554}>
                <mesh
                  name="Object_219"
                  
                  geometry={nodes.Object_219.geometry}
                  material={materials.crystal}
                />
              </a.group>
              <a.group name="Cube076_86" position={[-60.58, -45.659, -57.558]} scale={2.704}>
                <mesh
                  name="Object_221"
                 
                  geometry={nodes.Object_221.geometry}
                  material={materials.cliff}
                />
                <mesh
                  name="Object_222"
                 
                  geometry={nodes.Object_222.geometry}
                  material={materials.grass}
                />
                <mesh
                  name="Object_223"
                  
                  geometry={nodes.Object_223.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group name="Plane021_87" position={[-22.432, 36.017, -50.161]} scale={1.585}>
                <mesh
                  name="Object_225"
                
                  geometry={nodes.Object_225.geometry}
                  material={materials['woodenparts.001']}
                />
              </a.group>
              <a.group
                name="Plane022_88"
                position={[-78.71, -14.4, -119.402]}
                rotation={[0, 0.862, 0]}
                scale={2.236}>
                <mesh
                  name="Object_227"
                  
                  geometry={nodes.Object_227.geometry}
                  material={materials['woodenparts.001']}
                />
              </a.group>
              <a.group name="Cube051_89" position={[-60.58, -45.659, -57.558]} scale={2.704}>
                <mesh
                  name="Object_229"
                 
                  geometry={nodes.Object_229.geometry}
                  material={materials.cliff}
                />
                <mesh
                  name="Object_230"
                  
                  geometry={nodes.Object_230.geometry}
                  material={materials.grass}
                />
              </a.group>
              <a.group name="Cube052_90" position={[-60.58, -45.659, -57.558]} scale={2.704}>
                <mesh
                  name="Object_232"
                  
                  geometry={nodes.Object_232.geometry}
                  material={materials.cliff}
                />
                <mesh
                  name="Object_233"
                  
                  geometry={nodes.Object_233.geometry}
                  material={materials.grass}
                />
              </a.group>
              <a.group
                name="Plane039_91"
                position={[-74.307, 58.229, -11.399]}
                rotation={[0, 0.495, 0]}
                scale={2.554}>
                <mesh
                  name="Object_235"
                 
                  geometry={nodes.Object_235.geometry}
                  material={materials.grass}
                />
                <mesh
                  name="Object_236"
               
                  geometry={nodes.Object_236.geometry}
                  material={materials.cliff}
                />
              </a.group>
              <a.group
                name="Cube053_92"
                position={[-64.571, -48.397, -101.24]}
                rotation={[0, 0.93, 0]}
                scale={2.704}>
                <mesh
                  name="Object_238"
             
                  geometry={nodes.Object_238.geometry}
                  material={materials.cliff}
                />
                <mesh
                  name="Object_239"
            
                  geometry={nodes.Object_239.geometry}
                  material={materials.grass}
                />
              </a.group>
              <a.group name="Plane041_93" position={[-177.012, -2.012, -54.884]} scale={2.554}>
                <mesh
                  name="Object_241"
                  
                  geometry={nodes.Object_241.geometry}
                  material={materials.grass}
                />
                <mesh
                  name="Object_242"
                  
                  geometry={nodes.Object_242.geometry}
                  material={materials.cliff}
                />
                <mesh
                  name="Object_243"
                 
                  geometry={nodes.Object_243.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group name="Cube054_94" position={[-60.58, -45.659, -57.558]} scale={2.704}>
                <mesh
                  name="Object_245"
                 
                  geometry={nodes.Object_245.geometry}
                  material={materials.water}
                />
              </a.group>
              <a.group
                name="Plane042_95"
                position={[-66.021, 31.527, -204.378]}
                rotation={[-Math.PI, -0.692, -Math.PI]}
                scale={2.554}>
                <mesh
                  name="Object_247"
                 
                  geometry={nodes.Object_247.geometry}
                  material={materials.cliff}
                />
                <mesh
                  name="Object_248"
                
                  geometry={nodes.Object_248.geometry}
                  material={materials.grass}
                />
              </a.group>
              <a.group name="Cube055_96" position={[61.65, -9.598, -133.217]} scale={0.792}>
                <mesh
                  name="Object_250"
                
                  geometry={nodes.Object_250.geometry}
                  material={materials.components}
                />
              </a.group>
              <a.group name="Plane045_97" position={[157.353, -188.469, 13.464]} scale={1.086}>
                <mesh
                  name="Object_252"
                
                  geometry={nodes.Object_252.geometry}
                  material={materials.cliff}
                />
              </a.group>
              <a.group
                name="Plane015_98"
                position={[192.469, -371.514, -273.633]}
                rotation={[0, -1.515, 0]}
                scale={1.346}>
                <mesh
                  name="Object_254"
                
                  geometry={nodes.Object_254.geometry}
                  material={materials.cliff}
                />
              </a.group>
              <a.group
                name="Plane020_99"
                position={[342.313, -264.613, 71.005]}
                rotation={[-Math.PI, 0.673, -Math.PI]}
                scale={0.771}>
                <mesh
                  name="Object_256"
                 
                  geometry={nodes.Object_256.geometry}
                  material={materials.cliff}
                />
              </a.group>
              <a.group
                name="Plane046_100"
                position={[68.257, -6.526, -159.843]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={2.554}>
                <mesh
                  name="Object_258"
                 
                  geometry={nodes.Object_258.geometry}
                  material={materials.components}
                />
                <mesh
                  name="Object_259"
                
                  geometry={nodes.Object_259.geometry}
                  material={materials.woodenparts}
                />
                <mesh
                  name="Object_260"
                  
                  geometry={nodes.Object_260.geometry}
                  material={materials.metalparts}
                />
                <mesh
                  name="Object_261"
                  
                  geometry={nodes.Object_261.geometry}
                  material={materials.gold}
                />
              </a.group>
              <a.group name="world_101" position={[73.4, -9.261, -116.367]} scale={1.446}>
                <mesh
                  name="Object_263"
                  
                  geometry={nodes.Object_263.geometry}
                  material={materials.material}
                />
              </a.group>
              <a.group
                name="Plane048_102"
                position={[342.313, -264.613, 71.005]}
                rotation={[-Math.PI, 0.673, -Math.PI]}
                scale={0.771}>
                <mesh
                  name="Object_265"
                  
                  geometry={nodes.Object_265.geometry}
                  material={materials.forest}
                />
              </a.group>
              <a.group
                name="Plane049_103"
                position={[192.469, -371.514, -273.633]}
                rotation={[0, -1.515, 0]}
                scale={1.346}>
                <mesh
                  name="Object_267"
                 
                  geometry={nodes.Object_267.geometry}
                  material={materials.forest}
                />
              </a.group>
              <a.group name="Plane050_104" position={[157.353, -188.469, 13.464]} scale={1.086}>
                <mesh
                  name="Object_269"
                  
                  geometry={nodes.Object_269.geometry}
                  material={materials.forest}
                />
              </a.group>
              <a.group name="Plane051_105" position={[296.03, -170.431, 163.449]} scale={0.697}>
                <mesh
                  name="Object_271"
                  
                  geometry={nodes.Object_271.geometry}
                  material={materials.cliff}
                />
              </a.group>
              <a.group name="Plane052_106" position={[296.03, -170.431, 163.449]} scale={0.697}>
                <mesh
                  name="Object_273"
                  
                  geometry={nodes.Object_273.geometry}
                  material={materials.forest}
                />
              </a.group>
              <a.group
                name="Plane057_107"
                position={[575.2, -154.955, 15.771]}
                rotation={[-Math.PI, 0.767, -Math.PI]}
                scale={0.673}>
                <mesh
                  name="Object_275"
                 
                  geometry={nodes.Object_275.geometry}
                  material={materials.cliff}
                />
              </a.group>
              <a.group
                name="Plane058_108"
                position={[575.2, -154.955, 15.771]}
                rotation={[-Math.PI, 0.767, -Math.PI]}
                scale={0.673}>
                <mesh
                  name="Object_277"
                  
                  geometry={nodes.Object_277.geometry}
                  material={materials.forest}
                />
              </a.group>
              <a.group
                name="Cube057_109"
                position={[214.445, -3.978, -238.414]}
                rotation={[-Math.PI, 0.347, -Math.PI]}
                scale={2.704}>
                <mesh
                  name="Object_279"
                 
                  geometry={nodes.Object_279.geometry}
                  material={materials.cliff}
                />
                <mesh
                  name="Object_280"
                
                  geometry={nodes.Object_280.geometry}
                  material={materials.grass}
                />
                <mesh
                  name="Object_281"
                
                  geometry={nodes.Object_281.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Cube075_110"
                position={[167.312, -13.159, -256.834]}
                rotation={[-Math.PI, 1.43, Math.PI]}
                scale={2.704}>
                <mesh
                  name="Object_283"
                 
                  geometry={nodes.Object_283.geometry}
                  material={materials.cliff}
                />
                <mesh
                  name="Object_284"
                 
                  geometry={nodes.Object_284.geometry}
                  material={materials.grass}
                />
              </a.group>
              <a.group
                name="Cube077_111"
                position={[36.946, -71.709, -689.615]}
                rotation={[-Math.PI, 0.347, -Math.PI]}
                scale={0.747}>
                <mesh
                  name="Object_286"
                
                  geometry={nodes.Object_286.geometry}
                  material={materials.cliff}
                />
                <mesh
                  name="Object_287"
                
                  geometry={nodes.Object_287.geometry}
                  material={materials.grass}
                />
                <mesh
                  name="Object_288"
                  
                  geometry={nodes.Object_288.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Cube078_112"
                position={[290.502, -64.024, -665.092]}
                rotation={[0, 1.336, 0]}
                scale={1.439}>
                <mesh
                  name="Object_290"
                  
                  geometry={nodes.Object_290.geometry}
                  material={materials.cliff}
                />
                <mesh
                  name="Object_291"
                  
                  geometry={nodes.Object_291.geometry}
                  material={materials.grass}
                />
                <mesh
                  name="Object_292"
                
                  geometry={nodes.Object_292.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Cube079_113"
                position={[-365.364, -42.559, -532.356]}
                rotation={[-Math.PI, 0.347, -Math.PI]}
                scale={2.53}>
                <mesh
                  name="Object_294"
                
                  geometry={nodes.Object_294.geometry}
                  material={materials.cliff}
                />
                <mesh
                  name="Object_295"
                
                  geometry={nodes.Object_295.geometry}
                  material={materials.grass}
                />
                <mesh
                  name="Object_296"
                
                  geometry={nodes.Object_296.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Cube080_114"
                position={[-50.819, 27.478, -684.262]}
                rotation={[0, 0.936, 0]}
                scale={1.054}>
                <mesh
                  name="Object_298"
                 
                  geometry={nodes.Object_298.geometry}
                  material={materials.cliff}
                />
                <mesh
                  name="Object_299"
                  
                  geometry={nodes.Object_299.geometry}
                  material={materials.grass}
                />
                <mesh
                  name="Object_300"
                  
                  geometry={nodes.Object_300.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Cube081_115"
                position={[217.282, -94.777, -565.083]}
                rotation={[-Math.PI, -0.415, -Math.PI]}
                scale={1.054}>
                <mesh
                  name="Object_302"
                 
                  geometry={nodes.Object_302.geometry}
                  material={materials.cliff}
                />
                <mesh
                  name="Object_303"
                  
                  geometry={nodes.Object_303.geometry}
                  material={materials.grass}
                />
                <mesh
                  name="Object_304"
                 
                  geometry={nodes.Object_304.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Cube082_116"
                position={[14.121, -78.711, -535.911]}
                rotation={[Math.PI, -1.18, Math.PI]}
                scale={2.235}>
                <mesh
                  name="Object_306"
                 
                  geometry={nodes.Object_306.geometry}
                  material={materials.cliff}
                />
                <mesh
                  name="Object_307"
                  
                  geometry={nodes.Object_307.geometry}
                  material={materials.grass}
                />
                <mesh
                  name="Object_308"
                  
                  geometry={nodes.Object_308.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Cube083_117"
                position={[-47.351, -21.375, 414.017]}
                rotation={[0, -1.545, 0]}
                scale={2.704}>
                <mesh
                  name="Object_310"
                  
                  geometry={nodes.Object_310.geometry}
                  material={materials.cliff}
                />
                <mesh
                  name="Object_311"
                  
                  geometry={nodes.Object_311.geometry}
                  material={materials.grass}
                />
                <mesh
                  name="Object_312"
                 
                  geometry={nodes.Object_312.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Cube084_118"
                position={[-8.744, -19.541, 398.412]}
                rotation={[0, -0.615, 0]}
                scale={2.704}>
                <mesh
                  name="Object_314"
                  
                  geometry={nodes.Object_314.geometry}
                  material={materials.cliff}
                />
                <mesh
                  name="Object_315"
                 
                  geometry={nodes.Object_315.geometry}
                  material={materials.grass}
                />
              </a.group>
              <a.group
                name="Plane040_119"
                position={[294.439, -45.659, 200.951]}
                rotation={[0, -0.659, 0]}
                scale={1.758}>
                <mesh
                  name="Object_317"
                 
                  geometry={nodes.Object_317.geometry}
                  material={materials.grass}
                />
                <mesh
                  name="Object_318"
                 
                  geometry={nodes.Object_318.geometry}
                  material={materials.cliff}
                />
                <mesh
                  name="Object_319"
                 
                  geometry={nodes.Object_319.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Cube085_120"
                position={[-165.382, -69.685, -590.662]}
                rotation={[0, 0.936, 0]}
                scale={1.054}>
                <mesh
                  name="Object_321"
                  
                  geometry={nodes.Object_321.geometry}
                  material={materials.cliff}
                />
                <mesh
                  name="Object_322"
                
                  geometry={nodes.Object_322.geometry}
                  material={materials.grass}
                />
                <mesh
                  name="Object_323"
                  
                  geometry={nodes.Object_323.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane034_121"
                position={[-378.3, 58.229, -572.977]}
                rotation={[Math.PI, -1.093, Math.PI]}
                scale={2.554}>
                <mesh
                  name="Object_325"
                  
                  geometry={nodes.Object_325.geometry}
                  material={materials.grass}
                />
                <mesh
                  name="Object_326"
                 
                  geometry={nodes.Object_326.geometry}
                  material={materials.cliff}
                />
              </a.group>
              <a.group
                name="Plane043_122"
                position={[-154.229, 131.45, 200.951]}
                rotation={[Math.PI, -1.249, Math.PI]}
                scale={1.389}>
                <mesh
                  name="Object_328"
                  
                  geometry={nodes.Object_328.geometry}
                  material={materials.grass}
                />
                <mesh
                  name="Object_329"
                  
                  geometry={nodes.Object_329.geometry}
                  material={materials.cliff}
                />
                <mesh
                  name="Object_330"
                  
                  geometry={nodes.Object_330.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Cube086_123"
                position={[-218.054, 73.087, 208.205]}
                rotation={[0, -1.545, 0]}
                scale={2.704}>
                <mesh
                  name="Object_332"
                  
                  geometry={nodes.Object_332.geometry}
                  material={materials.cliff}
                />
                <mesh
                  name="Object_333"
                
                  geometry={nodes.Object_333.geometry}
                  material={materials.grass}
                />
                <mesh
                  name="Object_334"
                  
                  geometry={nodes.Object_334.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane060_124"
                position={[418.194, -46.93, -96.206]}
                rotation={[0, -0.659, 0]}
                scale={0.992}>
                <mesh
                  name="Object_336"
                  
                  geometry={nodes.Object_336.geometry}
                  material={materials.grass}
                />
                <mesh
                  name="Object_337"
                 
                  geometry={nodes.Object_337.geometry}
                  material={materials.cliff}
                />
                <mesh
                  name="Object_338"
                 
                  geometry={nodes.Object_338.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Cube087_125"
                position={[424.133, -46.796, -95.982]}
                rotation={[-Math.PI, 0.419, -Math.PI]}
                scale={2.704}>
                <mesh
                  name="Object_340"
                 
                  geometry={nodes.Object_340.geometry}
                  material={materials.cliff}
                />
                <mesh
                  name="Object_341"
                 
                  geometry={nodes.Object_341.geometry}
                  material={materials.grass}
                />
              </a.group>
              <a.group
                name="Cube088_126"
                position={[133.671, 83.77, 356.548]}
                rotation={[-Math.PI, -0.415, -Math.PI]}
                scale={2.173}>
                <mesh
                  name="Object_343"
                  
                  geometry={nodes.Object_343.geometry}
                  material={materials.cliff}
                />
                <mesh
                  name="Object_344"
                  
                  geometry={nodes.Object_344.geometry}
                  material={materials.grass}
                />
                <mesh
                  name="Object_345"
                
                  geometry={nodes.Object_345.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Cube089_127"
                position={[133.671, 126.206, 372.816]}
                rotation={[-Math.PI, -0.415, -Math.PI]}
                scale={2.173}>
                <mesh
                  name="Object_347"
                 
                  geometry={nodes.Object_347.geometry}
                  material={materials.cliff}
                />
                <mesh
                  name="Object_348"
                  
                  geometry={nodes.Object_348.geometry}
                  material={materials.grass}
                />
                <mesh
                  name="Object_349"
                 
                  geometry={nodes.Object_349.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Cube090_128"
                position={[62.324, 26.461, 547.713]}
                rotation={[-Math.PI, -0.415, -Math.PI]}
                scale={1.007}>
                <mesh
                  name="Object_351"
                 
                  geometry={nodes.Object_351.geometry}
                  material={materials.cliff}
                />
                <mesh
                  name="Object_352"
                  
                  geometry={nodes.Object_352.geometry}
                  material={materials.grass}
                />
                <mesh
                  name="Object_353"
                  
                  geometry={nodes.Object_353.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Cube091_129"
                position={[284.891, 83.77, 366.417]}
                rotation={[-Math.PI, -0.415, -Math.PI]}
                scale={0.953}>
                <mesh
                  name="Object_355"
                 
                  geometry={nodes.Object_355.geometry}
                  material={materials.cliff}
                />
                <mesh
                  name="Object_356"
                  
                  geometry={nodes.Object_356.geometry}
                  material={materials.grass}
                />
                <mesh
                  name="Object_357"
                  
                  geometry={nodes.Object_357.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane061_130"
                position={[569.01, -318.463, -598.821]}
                rotation={[Math.PI, -1.156, Math.PI]}
                scale={1.024}>
                <mesh
                  name="Object_359"
                 
                  geometry={nodes.Object_359.geometry}
                  material={materials.cliff}
                />
              </a.group>
              <a.group
                name="Plane062_131"
                position={[569.01, -318.463, -598.821]}
                rotation={[Math.PI, -1.156, Math.PI]}
                scale={1.024}>
                <mesh
                  name="Object_361"
                  
                  geometry={nodes.Object_361.geometry}
                  material={materials.forest}
                />
              </a.group>
              <a.group
                name="Cube092_132"
                position={[-366.14, -51.13, -310.331]}
                rotation={[-Math.PI, -0.132, -Math.PI]}
                scale={2.704}>
                <mesh
                  name="Object_363"
                  
                  geometry={nodes.Object_363.geometry}
                  material={materials.cliff}
                />
                <mesh
                  name="Object_364"
                  
                  geometry={nodes.Object_364.geometry}
                  material={materials.grass}
                />
                <mesh
                  name="Object_365"
                  
                  geometry={nodes.Object_365.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane063_133"
                position={[-358.598, 52.759, -357.893]}
                rotation={[-Math.PI, -0.627, -Math.PI]}
                scale={2.554}>
                <mesh
                  name="Object_367"
                  
                  geometry={nodes.Object_367.geometry}
                  material={materials.grass}
                />
                <mesh
                  name="Object_368"
                  
                  geometry={nodes.Object_368.geometry}
                  material={materials.cliff}
                />
              </a.group>
              <a.group
                name="Cube093_134"
                position={[-356.444, -53.867, -267.552]}
                rotation={[Math.PI, -1.061, Math.PI]}
                scale={2.704}>
                <mesh
                  name="Object_370"
                 
                  geometry={nodes.Object_370.geometry}
                  material={materials.cliff}
                />
                <mesh
                  name="Object_371"
                 
                  geometry={nodes.Object_371.geometry}
                  material={materials.grass}
                />
              </a.group>
              <a.group
                name="Cube094_135"
                position={[406.547, 62.135, -518.26]}
                rotation={[0, 0.356, 0]}
                scale={1.439}>
                <mesh
                  name="Object_373"
                 
                  geometry={nodes.Object_373.geometry}
                  material={materials.cliff}
                />
                <mesh
                  name="Object_374"
                 
                  geometry={nodes.Object_374.geometry}
                  material={materials.grass}
                />
                <mesh
                  name="Object_375"
                 
                  geometry={nodes.Object_375.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Cube095_136"
                position={[184.879, 74.821, -665.092]}
                rotation={[Math.PI, -1.115, Math.PI]}
                scale={1.103}>
                <mesh
                  name="Object_377"
                
                  geometry={nodes.Object_377.geometry}
                  material={materials.cliff}
                />
                <mesh
                  name="Object_378"
               
                  geometry={nodes.Object_378.geometry}
                  material={materials.grass}
                />
                <mesh
                  name="Object_379"
               
                  geometry={nodes.Object_379.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Cube096_137"
                position={[-105.368, 67.278, 330.217]}
                rotation={[0.007, 0, 0]}
                scale={6.756}>
                <mesh
                  name="Object_381"
                
                  geometry={nodes.Object_381.geometry}
                  material={materials.cliff}
                />
              </a.group>
              <a.group
                name="Cube097_138"
                position={[-105.368, 67.278, -428.087]}
                rotation={[0.9, -1.002, -0.006]}
                scale={3.161}>
                <mesh
                  name="Object_383"
                
                  geometry={nodes.Object_383.geometry}
                  material={materials.cliff}
                />
              </a.group>
              <a.group
                name="Cube098_139"
                position={[75.48, 6.122, -625.722]}
                rotation={[-0.808, -1.058, -1.866]}
                scale={6.756}>
                <mesh
                  name="Object_385"
              
                  geometry={nodes.Object_385.geometry}
                  material={materials.cliff}
                />
              </a.group>
              <a.group
                name="Cube099_140"
                position={[276.729, -69.743, -451.545]}
                rotation={[0.257, -1.05, -1.872]}
                scale={3.703}>
                <mesh
                  name="Object_387"
                
                  geometry={nodes.Object_387.geometry}
                  material={materials.cliff}
                />
              </a.group>
              <a.group
                name="Cube100_141"
                position={[558.725, 179.905, -246.829]}
                rotation={[0.256, -1.056, -1.865]}
                scale={6.245}>
                <mesh
                  name="Object_389"
             
                  geometry={nodes.Object_389.geometry}
                  material={materials.cliff}
                />
              </a.group>
              <a.group
                name="Cube101_142"
                position={[464.393, -16.123, 64.257]}
                rotation={[0, 0.175, 0]}
                scale={1.267}>
                <mesh
                  name="Object_391"
             
                  geometry={nodes.Object_391.geometry}
                  material={materials.cliff}
                />
                <mesh
                  name="Object_392"
                 
                  geometry={nodes.Object_392.geometry}
                  material={materials.grass}
                />
                <mesh
                  name="Object_393"
             
                  geometry={nodes.Object_393.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Cube102_143"
                position={[484.977, -48.318, 55.293]}
                rotation={[Math.PI, -1.327, Math.PI]}
                scale={1.267}>
                <mesh
                  name="Object_395"
               
                  geometry={nodes.Object_395.geometry}
                  material={materials.cliff}
                />
                <mesh
                  name="Object_396"
              
                  geometry={nodes.Object_396.geometry}
                  material={materials.grass}
                />
                <mesh
                  name="Object_397"
               
                  geometry={nodes.Object_397.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Cube103_144"
                position={[360.921, 87.902, -625.722]}
                rotation={[0.795, -0.899, 0.01]}
                scale={6.756}>
                <mesh
                  name="Object_399"
                 
                  geometry={nodes.Object_399.geometry}
                  material={materials.cliff}
                />
              </a.group>
              <a.group
                name="Cube104_145"
                position={[558.725, 179.905, -20.201]}
                rotation={[0.257, -1.05, -1.872]}
                scale={5.808}>
                <mesh
                  name="Object_401"
            
                  geometry={nodes.Object_401.geometry}
                  material={materials.cliff}
                />
              </a.group>
              <a.group
                name="Cube105_146"
                position={[188.327, 16.461, 295.036]}
                rotation={[0.257, -1.05, -1.872]}
                scale={5.808}>
                <mesh
                  name="Object_403"
               
                  geometry={nodes.Object_403.geometry}
                  material={materials.cliff}
                />
              </a.group>
              <a.group
                name="Cube106_147"
                position={[108.117, -88.208, 732.228]}
                rotation={[2.08, -0.156, -0.684]}
                scale={8.73}>
                <mesh
                  name="Object_405"
                 
                  geometry={nodes.Object_405.geometry}
                  material={materials.cliff}
                />
              </a.group>
              <a.group
                name="Cube107_148"
                position={[404.79, 26.119, -529.853]}
                rotation={[-2.016, 1.238, 1.995]}
                scale={2.577}>
                <mesh
                  name="Object_407"
                
                  geometry={nodes.Object_407.geometry}
                  material={materials.cliff}
                />
                <mesh
                  name="Object_408"
               
                  geometry={nodes.Object_408.geometry}
                  material={materials.grass}
                />
              </a.group>
              <a.group
                name="Plane064_149"
                position={[-721.996, -407.034, -420.595]}
                rotation={[0, -1.57, 0]}
                scale={1.181}>
                <mesh
                  name="Object_410"
                 
                  geometry={nodes.Object_410.geometry}
                  material={materials.cliff}
                />
              </a.group>
              <a.group
                name="Plane065_150"
                position={[-722.553, -241.119, -419.833]}
                rotation={[0, -1.57, 0]}
                scale={1.181}>
                <mesh
                  name="Object_412"
                 
                  geometry={nodes.Object_412.geometry}
                  material={materials.forest}
                />
              </a.group>
              <a.group name="Cube108_151" position={[73.4, -1.46, -163.906]} scale={2.554}>
                <mesh
                  name="Object_414"
                 
                  geometry={nodes.Object_414.geometry}
                  material={materials.metalparts}
                />
              </a.group>
              <a.group name="Cube109_152" position={[83.287, -9.029, -119.62]} scale={2.825}>
                <mesh
                  name="Object_416"
              
                  geometry={nodes.Object_416.geometry}
                  material={materials.components}
                />
                <mesh
                  name="Object_417"
                
                  geometry={nodes.Object_417.geometry}
                  material={materials.metalparts}
                />
                <mesh
                  name="Object_418"
                  
                  geometry={nodes.Object_418.geometry}
                  material={materials.hole}
                />
              </a.group>
              <a.group name="Cube111_153" position={[73.4, -17.624, -79.954]} scale={12.073}>
                <mesh
                  name="Object_420"
                
                  geometry={nodes.Object_420.geometry}
                  material={materials['woodenparts.001']}
                />
              </a.group>
              <a.group name="Cube112_154" position={[73.4, -17.654, -89.004]} scale={12.073}>
                <mesh
                  name="Object_422"
              
                  geometry={nodes.Object_422.geometry}
                  material={materials['woodenparts.001']}
                />
              </a.group>
              <a.group
                name="Plane055_155"
                position={[74.547, -2.88, -166.84]}
                rotation={[Math.PI / 2, 0.046, 0]}
                scale={2.554}>
                <mesh
                  name="Object_424"
                
                  geometry={nodes.Object_424.geometry}
                  material={materials.components}
                />
                <mesh
                  name="Object_425"
                 
                  geometry={nodes.Object_425.geometry}
                  material={materials['woodenparts.001']}
                />
              </a.group>
              <a.group
                name="Plane056_156"
                position={[78.198, -3.197, -166.84]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={2.971}>
                <mesh
                  name="Object_427"
                  
                  geometry={nodes.Object_427.geometry}
                  material={materials.components}
                />
                <mesh
                  name="Object_428"
                
                  geometry={nodes.Object_428.geometry}
                  material={materials['woodenparts.001']}
                />
              </a.group>
              <a.group
                name="Plane066_157"
                position={[72.786, -5.98, -166.844]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={2.554}>
                <mesh
                  name="Object_430"
                  
                  geometry={nodes.Object_430.geometry}
                  material={materials.woodenparts}
                />
              </a.group>
              <a.group
                name="Plane047_158"
                position={[78.849, -6.536, -164.505]}
                rotation={[0, 0.674, 0]}
                scale={2.554}>
                <mesh
                  name="Object_432"
                 
                  geometry={nodes.Object_432.geometry}
                  material={materials.components}
                />
                <mesh
                  name="Object_433"
                 
                  geometry={nodes.Object_433.geometry}
                  material={materials.woodenparts}
                />
                <mesh
                  name="Object_434"
               
                  geometry={nodes.Object_434.geometry}
                  material={materials.metalparts}
                />
              </a.group>
              <a.group
                name="Cube113_159"
                position={[61.643, -9.598, -136.297]}
                rotation={[0, -0.585, 0]}
                scale={0.792}>
                <mesh
                  name="Object_436"
               
                  geometry={nodes.Object_436.geometry}
                  material={materials.components}
                />
                <mesh
                  name="Object_437"
             
                  geometry={nodes.Object_437.geometry}
                  material={materials.hole}
                />
              </a.group>
              <a.group name="Cube110_160" position={[83.287, -9.029, -127.756]} scale={2.825}>
                <mesh
                  name="Object_439"
                
                  geometry={nodes.Object_439.geometry}
                  material={materials.components}
                />
                <mesh
                  name="Object_440"
              
                  geometry={nodes.Object_440.geometry}
                  material={materials.metalparts}
                />
                <mesh
                  name="Object_441"
              
                  geometry={nodes.Object_441.geometry}
                  material={materials.hole}
                />
              </a.group>
              <a.group
                name="Cube114_161"
                position={[63.174, -9.029, -127.756]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={2.825}>
                <mesh
                  name="Object_443"
    
                  geometry={nodes.Object_443.geometry}
                  material={materials.components}
                />
                <mesh
                  name="Object_444"
          
                  geometry={nodes.Object_444.geometry}
                  material={materials.metalparts}
                />
                <mesh
                  name="Object_445"
             
                  geometry={nodes.Object_445.geometry}
                  material={materials.hole}
                />
              </a.group>
              <a.group
                name="Cube115_162"
                position={[64.72, -6.388, -96.757]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={2.825}>
                <mesh
                  name="Object_447"
            
                  geometry={nodes.Object_447.geometry}
                  material={materials.components}
                />
                <mesh
                  name="Object_448"
                 
                  geometry={nodes.Object_448.geometry}
                  material={materials.metalparts}
                />
                <mesh
                  name="Object_449"
                  
                  
                  geometry={nodes.Object_449.geometry}
                  material={materials.hole}
                />
              </a.group>
              <a.group name="Circle014_163" position={[62.032, -10.346, -118.609]} scale={1.379}>
                <mesh
                  name="Object_451"

                  geometry={nodes.Object_451.geometry}
                  material={materials.components}
                />
              </a.group>
              <a.group
                name="Circle015_164"
                position={[60.942, -9.349, -119.902]}
                rotation={[Math.PI / 2, 0, -2.737]}
                scale={1.379}>
                <mesh
                  name="Object_453"
                
                  geometry={nodes.Object_453.geometry}
                  material={materials.components}
                />
              </a.group>
              <a.group
                name="Circle016_165"
                position={[63.282, -10.365, -120.823]}
                rotation={[0, 1.348, 0]}
                scale={1.379}>
                <mesh
                  name="Object_455"
                  
                  
                  geometry={nodes.Object_455.geometry}
                  material={materials.components}
                />
              </a.group>
              <a.group
                name="Cube116_166"
                position={[73.332, -9.598, -128.611]}
                rotation={[0, -0.585, 0]}
                scale={0.792}>
                <mesh
                  name="Object_457"
                  
                  
                  geometry={nodes.Object_457.geometry}
                  material={materials.components}
                />
                <mesh
                  name="Object_458"
                  
                  
                  geometry={nodes.Object_458.geometry}
                  material={materials.hole}
                />
              </a.group>
              <a.group
                name="Circle017_167"
                position={[85.091, -9.782, -134.943]}
                rotation={[0, 0, -0.831]}
                scale={1.379}>
                <mesh
                  name="Object_460"
                  
                  
                  geometry={nodes.Object_460.geometry}
                  material={materials.components}
                />
              </a.group>
              <a.group name="Circle018_168" position={[83.794, -10.374, -135.279]} scale={1.379}>
                <mesh
                  name="Object_462"
                  
                  
                  geometry={nodes.Object_462.geometry}
                  material={materials.components}
                />
              </a.group>
              <a.group
                name="Cube117_169"
                position={[76.751, -9.598, -107.549]}
                rotation={[0, -0.677, 0]}
                scale={0.792}>
                <mesh
                  name="Object_464"
                  
                  
                  geometry={nodes.Object_464.geometry}
                  material={materials.components}
                />
              </a.group>
              <a.group
                name="Cube118_170"
                position={[83.439, -6.968, -92.518]}
                rotation={[0, -0.585, 0]}
                scale={0.792}>
                <mesh
                  name="Object_466"
                  
                  
                  geometry={nodes.Object_466.geometry}
                  material={materials.components}
                />
                <mesh
                  name="Object_467"
                  
                  
                  geometry={nodes.Object_467.geometry}
                  material={materials.hole}
                />
              </a.group>
              <a.group
                name="Circle019_171"
                position={[80.698, -7.694, -91.624]}
                rotation={[0, 1.348, 0]}
                scale={1.379}>
                <mesh
                  name="Object_469"
                  
                  
                  geometry={nodes.Object_469.geometry}
                  material={materials.components}
                />
              </a.group>
              <a.group
                name="Circle020_172"
                position={[82.029, -7.694, -94.824]}
                rotation={[0, -0.365, 0]}
                scale={1.379}>
                <mesh
                  name="Object_471"
                  
                  
                  geometry={nodes.Object_471.geometry}
                  material={materials.components}
                />
              </a.group>
              <a.group
                name="Circle021_173"
                position={[79.932, -5.535, -78.181]}
                rotation={[0, 1.348, 0]}
                scale={1.379}>
                <mesh
                  name="Object_473"
                  
                  
                  geometry={nodes.Object_473.geometry}
                  material={materials.components}
                />
              </a.group>
              <a.group
                name="Circle022_174"
                position={[78.591, -5.535, -75.658]}
                rotation={[0, 1.348, 0]}
                scale={1.379}>
                <mesh
                  name="Object_475"
                  
                  
                  geometry={nodes.Object_475.geometry}
                  material={materials.components}
                />
              </a.group>
              <a.group
                name="Circle023_175"
                position={[78.505, -4.093, -77.369]}
                rotation={[-1.655, -0.263, 1.041]}
                scale={1.379}>
                <mesh
                  name="Object_477"
                  
                  
                  geometry={nodes.Object_477.geometry}
                  material={materials.components}
                />
              </a.group>
              <a.group
                name="Plane001_176"
                position={[374.529, -48.349, -169.505]}
                rotation={[Math.PI / 2, 0, 1.699]}
                scale={72.684}>
                <mesh
                  name="Object_479"
                  
                  
                  geometry={nodes.Object_479.geometry}
                  material={materials.cloud}
                />
              </a.group>
              <a.group
                name="Plane007_177"
                position={[-249.306, -48.349, -338.157]}
                rotation={[Math.PI / 2, 0, -1.045]}
                scale={84.244}>
                <mesh
                  name="Object_481"
                  
                  
                  geometry={nodes.Object_481.geometry}
                  material={materials.cloud}
                />
              </a.group>
              <a.group
                name="Plane019_178"
                position={[137.618, -443.655, 32.125]}
                rotation={[-2.143, 1.461, 2.096]}
                scale={314.843}>
                <mesh
                  name="Object_483"
                  
                  
                  geometry={nodes.Object_483.geometry}
                  material={materials.cloud}
                />
              </a.group>
              <a.group
                name="Plane053_179"
                position={[-400.716, -237.018, -175.004]}
                rotation={[-2.143, 1.461, 2.096]}
                scale={292.829}>
                <mesh
                  name="Object_485"
                  
                  
                  geometry={nodes.Object_485.geometry}
                  material={materials.cloud}
                />
              </a.group>
              <a.group
                name="Plane054_180"
                position={[99.964, -124.623, 169.818]}
                rotation={[-3.102, 0.233, 3.08]}
                scale={201.274}>
                <mesh
                  name="Object_487"
                  
                  
                  geometry={nodes.Object_487.geometry}
                  material={materials.cloud}
                />
              </a.group>
              <a.group
                name="Plane059_181"
                position={[80.364, -177.768, -369.688]}
                rotation={[-2.016, 1.433, 1.968]}
                scale={337.685}>
                <mesh
                  name="Object_489"
                  
                  
                  geometry={nodes.Object_489.geometry}
                  material={materials.cloud}
                />
              </a.group>
              <a.group
                name="Plane013_182"
                position={[-41.653, 13.045, -33.277]}
                rotation={[Math.PI / 2, 0, -1.443]}
                scale={0.764}>
                <mesh
                  name="Object_491"
                  
                  
                  geometry={nodes.Object_491.geometry}
                  material={materials.cloud}
                />
              </a.group>
              <a.group
                name="Plane067_183"
                position={[30.669, -6.439, 43.269]}
                rotation={[Math.PI / 2, 0, -2.33]}
                scale={2.554}>
                <mesh
                  name="Object_493"
                  
                  
                  geometry={nodes.Object_493.geometry}
                  material={materials.cloud}
                />
              </a.group>
              <a.group
                name="Plane068_184"
                position={[280.216, -67.704, -47.123]}
                rotation={[Math.PI / 2, 0, 2.15]}
                scale={2.554}>
                <mesh
                  name="Object_495"
                  
                  
                  geometry={nodes.Object_495.geometry}
                  material={materials.cloud}
                />
              </a.group>
              <a.group
                name="Plane069_185"
                position={[154.012, -52.441, -240.55]}
                rotation={[1.337, -0.308, 1.095]}
                scale={2.554}>
                <mesh
                  name="Object_497"
                  
                  
                  geometry={nodes.Object_497.geometry}
                  material={materials.cloud}
                />
              </a.group>
              <a.group
                name="Plane070_186"
                position={[131.805, -6.439, -441.016]}
                rotation={[Math.PI / 2, 0, 0.478]}
                scale={2.554}>
                <mesh
                  name="Object_499"
                  
                  
                  geometry={nodes.Object_499.geometry}
                  material={materials.cloud}
                />
              </a.group>
              <a.group
                name="Plane071_187"
                position={[-22.588, 52.761, -49.429]}
                rotation={[0, -0.947, 0]}
                scale={2.554}>
                <mesh
                  name="Object_501"
                  
                  
                  geometry={nodes.Object_501.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane025_188"
                position={[-22.486, 58.86, -50.135]}
                rotation={[0, 1.089, 0]}
                scale={2.042}>
                <mesh
                  name="Object_503"
                  
                  
                  geometry={nodes.Object_503.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane026_189"
                position={[-23.694, 62.89, -49.628]}
                rotation={[-Math.PI, -0.412, -Math.PI]}
                scale={1.576}>
                <mesh
                  name="Object_505"
                  
                  
                  geometry={nodes.Object_505.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane029_190"
                position={[-22.588, 50.39, -49.429]}
                rotation={[-Math.PI, -0.695, -Math.PI]}
                scale={1.906}>
                <mesh
                  name="Object_507"
                  
                  
                  geometry={nodes.Object_507.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane031_191"
                position={[-21.867, 53.518, -50.413]}
                rotation={[-Math.PI, 0.938, -Math.PI]}
                scale={2.434}>
                <mesh
                  name="Object_509"
                  
                  
                  geometry={nodes.Object_509.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane032_192"
                position={[-22.588, 50.39, -49.429]}
                rotation={[0, 0.672, 0]}
                scale={2.177}>
                <mesh
                  name="Object_511"
                  
                  
                  geometry={nodes.Object_511.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane072_193"
                position={[-22.976, 68.663, -49.94]}
                rotation={[0, -0.023, 0]}
                scale={1.833}>
                <mesh
                  name="Object_513"
                  
                  
                  geometry={nodes.Object_513.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane073_194"
                position={[-22.678, 75.999, -49.94]}
                rotation={[0.351, 0.057, 0]}
                scale={1.251}>
                <mesh
                  name="Object_515"
                  
                  
                  geometry={nodes.Object_515.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane074_195"
                position={[-22.976, 66.772, -49.94]}
                rotation={[Math.PI, -1.536, Math.PI]}
                scale={2.042}>
                <mesh
                  name="Object_517"
                  
                  
                  geometry={nodes.Object_517.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane075_196"
                position={[-22.678, 75.999, -50.328]}
                rotation={[2.616, 0.542, -2.79]}
                scale={1.343}>
                <mesh
                  name="Object_519"
                  
                  
                  geometry={nodes.Object_519.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane076_197"
                position={[-22.678, 75.999, -49.94]}
                rotation={[1.994, -1.185, 2.044]}
                scale={1.031}>
                <mesh
                  name="Object_521"
                  
                  
                  geometry={nodes.Object_521.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane077_198"
                position={[-22.486, 61.916, -50.135]}
                rotation={[0, -0.848, 0]}
                scale={1.636}>
                <mesh
                  name="Object_523"
                  
                  
                  geometry={nodes.Object_523.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane078_199"
                position={[-22.486, 61.916, -50.135]}
                rotation={[0, 0.951, 0]}
                scale={1.636}>
                <mesh
                  name="Object_525"
                  
                  
                  geometry={nodes.Object_525.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane079_200"
                position={[-22.976, 71.917, -49.94]}
                rotation={[-Math.PI, 1.187, Math.PI]}
                scale={1.502}>
                <mesh
                  name="Object_527"
                  
                  
                  geometry={nodes.Object_527.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane080_201"
                position={[-23.105, 80.954, -51.026]}
                rotation={[1.994, -1.185, 2.044]}
                scale={0.86}>
                <mesh
                  name="Object_529"
                  
                  
                  geometry={nodes.Object_529.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane081_202"
                position={[-22.939, 80.954, -51.026]}
                rotation={[2.473, 0.984, -2.539]}
                scale={0.86}>
                <mesh
                  name="Object_531"
                  
                  
                  geometry={nodes.Object_531.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane082_203"
                position={[-22.939, 80.954, -51.026]}
                rotation={[0.362, 0.248, -0.072]}
                scale={0.86}>
                <mesh
                  name="Object_533"
                  
                  
                  geometry={nodes.Object_533.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane083_204"
                position={[-52.433, 36.017, -50.583]}
                rotation={[-Math.PI, 1.341, -Math.PI]}
                scale={1.585}>
                <mesh
                  name="Object_535"
                  
                  
                  geometry={nodes.Object_535.geometry}
                  material={materials['woodenparts.001']}
                />
              </a.group>
              <a.group
                name="Plane084_205"
                position={[-51.685, 52.761, -50.598]}
                rotation={[0, 0.854, 0]}
                scale={2.554}>
                <mesh
                  name="Object_537"
                  
                  
                  geometry={nodes.Object_537.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane085_206"
                position={[-52.395, 58.86, -50.536]}
                rotation={[-Math.PI, 0.252, -Math.PI]}
                scale={2.042}>
                <mesh
                  name="Object_539"
                  
                  
                  geometry={nodes.Object_539.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane086_207"
                position={[-51.626, 62.89, -49.475]}
                rotation={[0, -0.928, 0]}
                scale={1.576}>
                <mesh
                  name="Object_541"
                  
                  
                  geometry={nodes.Object_541.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane087_208"
                position={[-51.685, 50.39, -50.598]}
                rotation={[0, -0.645, 0]}
                scale={1.906}>
                <mesh
                  name="Object_543"
                  
                  
                  geometry={nodes.Object_543.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane088_209"
                position={[-52.807, 53.518, -51.075]}
                rotation={[-Math.PI, -0.863, -Math.PI]}
                scale={2.434}>
                <mesh
                  name="Object_545"
                  
                  
                  geometry={nodes.Object_545.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane089_210"
                position={[-51.685, 50.39, -50.598]}
                rotation={[-Math.PI, 0.669, -Math.PI]}
                scale={2.177}>
                <mesh
                  name="Object_547"
                  
                  
                  geometry={nodes.Object_547.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane090_211"
                position={[-52.094, 68.663, -50.103]}
                rotation={[-Math.PI, 1.363, -Math.PI]}
                scale={1.833}>
                <mesh
                  name="Object_549"
                  
                  
                  geometry={nodes.Object_549.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane091_212"
                position={[-52.162, 75.999, -50.393]}
                rotation={[2.237, 1.119, -2.268]}
                scale={1.251}>
                <mesh
                  name="Object_551"
                  
                  
                  geometry={nodes.Object_551.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane092_213"
                position={[-52.094, 66.772, -50.103]}
                rotation={[0, 0.196, 0]}
                scale={2.042}>
                <mesh
                  name="Object_553"
                  
                  
                  geometry={nodes.Object_553.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane093_214"
                position={[-52.539, 75.999, -50.305]}
                rotation={[2.23, -0.995, 2.378]}
                scale={1.343}>
                <mesh
                  name="Object_555"

                  
                  geometry={nodes.Object_555.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane094_215"
                position={[-52.162, 75.999, -50.393]}
                rotation={[0.351, 0.061, -0.001]}
                scale={1.031}>
                <mesh
                  name="Object_557"
                  
                  
                  geometry={nodes.Object_557.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane095_216"
                position={[-52.395, 61.916, -50.536]}
                rotation={[0, 0.953, 0]}
                scale={1.636}>
                <mesh
                  name="Object_559"
                  
                  
                  geometry={nodes.Object_559.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane096_217"
                position={[-52.395, 61.916, -50.536]}
                rotation={[-Math.PI, 0.39, -Math.PI]}
                scale={1.636}>
                <mesh
                  name="Object_561"
                  
                  
                  geometry={nodes.Object_561.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane097_218"
                position={[-52.094, 71.917, -50.103]}
                rotation={[-Math.PI, -0.614, -Math.PI]}
                scale={1.502}>
                <mesh
                  name="Object_563"
                  
                  
                  geometry={nodes.Object_563.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane098_219"
                position={[-53.122, 80.954, -49.73]}
                rotation={[0.351, 0.061, -0.001]}
                scale={0.86}>
                <mesh
                  name="Object_565"
                  
                  
                  geometry={nodes.Object_565.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane099_220"
                position={[-53.16, 80.954, -49.891]}
                rotation={[2.693, -0.66, 2.875]}
                scale={0.86}>
                <mesh
                  name="Object_567"
                  
                  
                  geometry={nodes.Object_567.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane100_221"
                position={[-53.16, 80.954, -49.891]}
                rotation={[2.486, 0.973, -2.554]}
                scale={0.86}>
                <mesh
                  name="Object_569"
                  
                  
                  geometry={nodes.Object_569.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane016_222"
                position={[-72.158, 33.756, -93.312]}
                rotation={[-Math.PI, -0.06, -Math.PI]}
                scale={1.585}>
                <mesh
                  name="Object_571"
                  
                  
                  geometry={nodes.Object_571.geometry}
                  material={materials['woodenparts.001']}
                />
              </a.group>
              <a.group
                name="Plane018_223"
                position={[-72.046, 50.501, -94.052]}
                rotation={[-Math.PI, 0.888, -Math.PI]}
                scale={2.554}>
                <mesh
                  name="Object_573"
                  
                  
                  geometry={nodes.Object_573.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane035_224"
                position={[-72.106, 56.599, -93.341]}
                rotation={[Math.PI, -1.149, Math.PI]}
                scale={2.042}>
                <mesh
                  name="Object_575"
                  
                  
                  geometry={nodes.Object_575.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane036_225"
                position={[-70.93, 60.629, -93.92]}
                rotation={[0, 0.472, 0]}
                scale={1.576}>
                <mesh
                  name="Object_577"
                  
                  
                  geometry={nodes.Object_577.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane037_226"
                position={[-72.046, 48.129, -94.052]}
                rotation={[0, 0.755, 0]}
                scale={1.906}>
                <mesh
                  name="Object_579"
                  
                  
                  geometry={nodes.Object_579.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane038_227"
                position={[-72.706, 51.258, -93.027]}
                rotation={[0, -0.878, 0]}
                scale={2.434}>
                <mesh
                  name="Object_581"
                  
                  
                  geometry={nodes.Object_581.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane101_228"
                position={[-72.046, 48.129, -94.052]}
                rotation={[-Math.PI, -0.732, -Math.PI]}
                scale={2.177}>
                <mesh
                  name="Object_583"
                  
                  
                  geometry={nodes.Object_583.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane102_229"
                position={[-71.628, 66.402, -93.565]}
                rotation={[-Math.PI, -0.037, -Math.PI]}
                scale={1.833}>
                <mesh
                  name="Object_585"
                  
                  
                  geometry={nodes.Object_585.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane103_230"
                position={[-71.926, 73.738, -93.547]}
                rotation={[2.789, -0.113, 3.121]}
                scale={1.251}>
                <mesh
                  name="Object_587"
                  
                  
                  geometry={nodes.Object_587.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane104_231"
                position={[-71.628, 64.511, -93.565]}
                rotation={[-Math.PI, 1.546, -Math.PI]}
                scale={2.042}>
                <mesh
                  name="Object_589"
                  
                  
                  geometry={nodes.Object_589.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane105_232"
                position={[-71.902, 73.738, -93.16]}
                rotation={[0.509, -0.49, 0.318]}
                scale={1.343}>
                <mesh
                  name="Object_591"
                  
                  
                  geometry={nodes.Object_591.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane106_233"
                position={[-71.926, 73.738, -93.547]}
                rotation={[1.29, 1.206, -1.25]}
                scale={1.031}>
                <mesh
                  name="Object_593"
                  
                  
                  geometry={nodes.Object_593.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane107_234"
                position={[-72.106, 59.656, -93.341]}
                rotation={[-Math.PI, 0.789, -Math.PI]}
                scale={1.636}>
                <mesh
                  name="Object_595"
                  
                  
                  geometry={nodes.Object_595.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane108_235"
                position={[-72.106, 59.656, -93.341]}
                rotation={[-Math.PI, -1.01, -Math.PI]}
                scale={1.636}>
                <mesh
                  name="Object_597"
                  
                  
                  geometry={nodes.Object_597.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane109_236"
                position={[-71.628, 69.656, -93.565]}
                rotation={[0, -1.127, 0]}
                scale={1.502}>
                <mesh
                  name="Object_599"
                  
                  
                  geometry={nodes.Object_599.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane110_237"
                position={[-71.435, 78.694, -92.488]}
                rotation={[1.29, 1.206, -1.25]}
                scale={0.86}>
                <mesh
                  name="Object_601"
                  
                  
                  geometry={nodes.Object_601.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane111_238"
                position={[-71.6, 78.694, -92.478]}
                rotation={[0.617, -0.936, 0.54]}
                scale={0.86}>
                <mesh
                  name="Object_603"
                  

                  geometry={nodes.Object_603.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane112_239"
                position={[-71.6, 78.694, -92.478]}
                rotation={[2.774, -0.304, 3.048]}
                scale={0.86}>
                <mesh
                  name="Object_605"
                  
                  
                  geometry={nodes.Object_605.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane113_240"
                position={[-79.942, 9.923, -127.584]}
                rotation={[-0.068, -0.17, 0.163]}
                scale={1.113}>
                <mesh
                  name="Object_607"
                  
                  
                  geometry={nodes.Object_607.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane023_241"
                position={[-80.113, 12.863, -128.924]}
                rotation={[1.895, 0.97, -2.304]}
                scale={0.928}>
                <mesh
                  name="Object_609"
                  
                  
                  geometry={nodes.Object_609.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane024_242"
                position={[-80.497, 11.634, -128.073]}
                rotation={[2.722, 0.49, -2.936]}
                scale={1.113}>
                <mesh
                  name="Object_611"
                  
                  
                  geometry={nodes.Object_611.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane027_243"
                position={[-80.34, 11.644, -128.224]}
                rotation={[0.347, -0.056, -0.012]}
                scale={0.928}>
                <mesh
                  name="Object_613"
                  
                  
                  geometry={nodes.Object_613.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane028_244"
                position={[-80.497, 11.634, -128.073]}
                rotation={[-0.108, 0.909, -0.198]}
                scale={1.113}>
                <mesh
                  name="Object_615"
                  
                  
                  geometry={nodes.Object_615.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane030_245"
                position={[-79.349, 8.432, -126.063]}
                rotation={[-0.238, 1.156, 0.186]}
                scale={1.113}>
                <mesh
                  name="Object_617"
                  
                  
                  geometry={nodes.Object_617.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane033_246"
                position={[-79.604, 8.564, -125.808]}
                rotation={[-0.13, -0.753, -0.122]}
                scale={1.113}>
                <mesh
                  name="Object_619"
                  
                  
                  geometry={nodes.Object_619.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane114_247"
                position={[-75.647, 8.432, -122.359]}
                rotation={[2.925, -0.413, 2.911]}
                scale={1.181}>
                <mesh
                  name="Object_621"
                  
                  
                  geometry={nodes.Object_621.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane115_248"
                position={[-75.305, 11.546, -122.701]}
                rotation={[0.276, -0.768, 0.052]}
                scale={1.44}>
                <mesh
                  name="Object_623"
                  
                  
                  geometry={nodes.Object_623.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane116_249"
                position={[-76.423, 6.161, -121.584]}
                rotation={[0.276, -0.768, 0.052]}
                scale={1.113}>
                <mesh
                  name="Object_625"
                  
                  
                  geometry={nodes.Object_625.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane117_250"
                position={[-74.693, 14.457, -122.735]}
                rotation={[0.185, -0.027, -0.137]}
                scale={1.332}>
                <mesh
                  name="Object_627"
                  
                  
                  geometry={nodes.Object_627.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane118_251"
                position={[-73.558, 18.229, -123.87]}
                rotation={[0.888, -1.332, 0.732]}
                scale={1.332}>
                <mesh
                  name="Object_629"
                  
                  
                  geometry={nodes.Object_629.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane119_252"
                position={[-75.305, 11.546, -122.701]}
                rotation={[2.866, -0.764, 2.806]}>
                <mesh
                  name="Object_631"
                  

                  geometry={nodes.Object_631.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane120_253"
                position={[-74.693, 14.457, -122.735]}
                rotation={[3.137, 0.424, 2.932]}
                scale={1.113}>
                <mesh
                  name="Object_633"
                  
                  
                  geometry={nodes.Object_633.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane121_254"
                position={[-75.338, 9.453, -122.541]}
                rotation={[-3.055, 1.163, 3.013]}
                scale={1.113}>
                <mesh
                  name="Object_635"
                  
                  
                  geometry={nodes.Object_635.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane122_255"
                position={[-73.683, 16.175, -123.745]}
                rotation={[2.872, -0.813, 2.801]}
                scale={1.311}>
                <mesh
                  name="Object_637"
                  
                  
                  geometry={nodes.Object_637.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane123_256"
                position={[-74.671, 6.98, -114.781]}
                rotation={[2.925, -0.413, 2.911]}
                scale={1.201}>
                <mesh
                  name="Object_639"
                  
                  
                  geometry={nodes.Object_639.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane124_257"
                position={[-74.671, 6.98, -114.781]}
                rotation={[-2.84, 0.584, 2.749]}
                scale={1.113}>
                <mesh
                  name="Object_641"
                  
                  
                  geometry={nodes.Object_641.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane125_258"
                position={[-74.9, 4.646, -116.816]}
                rotation={[-0.282, -0.811, -0.097]}
                scale={1.113}>
                <mesh
                  name="Object_643"
                  
                  
                  geometry={nodes.Object_643.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane126_259"
                position={[-74.9, 4.646, -116.816]}
                rotation={[-2.946, 0.179, -3.067]}
                scale={1.113}>
                <mesh
                  name="Object_645"
                  
                  
                  geometry={nodes.Object_645.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane127_260"
                position={[-74.864, 3.472, -117.297]}
                rotation={[-2.732, -1.069, -2.668]}
                scale={1.113}>
                <mesh
                  name="Object_647"
                  
                  
                  geometry={nodes.Object_647.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane128_261"
                position={[-77.079, 7.125, -123.735]}
                rotation={[-2.803, 1.281, 2.784]}
                scale={1.21}>
                <mesh
                  name="Object_649"
                  
                  
                  geometry={nodes.Object_649.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane129_262"
                position={[-74.693, 14.457, -122.735]}
                rotation={[0.719, 0.664, -0.63]}
                scale={1.113}>
                <mesh
                  name="Object_651"
                  
                  
                  geometry={nodes.Object_651.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane130_263"
                position={[-80.619, 7.25, -118.457]}
                rotation={[-2.803, 1.281, 2.784]}
                scale={0.814}>
                <mesh
                  name="Object_653"
                  
                  
                  geometry={nodes.Object_653.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane131_264"
                position={[-79.414, 4.84, -119.661]}
                rotation={[-3.031, 0.529, 3.054]}
                scale={0.814}>
                <mesh
                  name="Object_655"
                  
                  
                  geometry={nodes.Object_655.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane132_265"
                position={[-79.821, 5.67, -119.17]}
                rotation={[-0.221, 1.124, 0.168]}
                scale={0.814}>
                <mesh
                  name="Object_657"
                  
                  
                  geometry={nodes.Object_657.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane133_266"
                position={[-76.637, 2.898, -121.37]}
                rotation={[0.276, -0.768, 0.052]}
                scale={1.113}>
                <mesh
                  name="Object_659"
                  
                  
                  geometry={nodes.Object_659.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane134_267"
                position={[-76.637, 2.898, -121.37]}
                rotation={[0.275, 0.846, 0.052]}
                scale={1.113}>
                <mesh
                  name="Object_661"
                  
                  
                  geometry={nodes.Object_661.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane135_268"
                position={[-75.338, 9.453, -122.541]}
                rotation={[-0.18, 0.093, 0.287]}
                scale={1.113}>
                <mesh
                  name="Object_663"
                  
                  
                  geometry={nodes.Object_663.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane136_269"
                position={[-75.647, 8.432, -122.359]}
                rotation={[2.367, 0.402, -2.794]}
                scale={1.181}>
                <mesh
                  name="Object_665"
                  

                  geometry={nodes.Object_665.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane137_270"
                position={[-80.619, 7.25, -118.457]}
                rotation={[-2.819, 0.208, 3.037]}
                scale={0.814}>
                <mesh
                  name="Object_667"
                  
                  
                  geometry={nodes.Object_667.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane138_271"
                position={[-75.908, 7.967, -122.098]}
                rotation={[0.651, -1.241, 0.483]}
                scale={1.44}>
                <mesh
                  name="Object_669"
                  
                  
                  geometry={nodes.Object_669.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane139_272"
                position={[-75.908, 7.967, -122.098]}
                rotation={[2.715, -0.749, -2.658]}
                scale={1.31}>
                <mesh
                  name="Object_671"
                  
                  
                  geometry={nodes.Object_671.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane140_273"
                position={[-75.908, 7.967, -122.098]}
                rotation={[1.175, -1.065, 0.813]}
                scale={1.44}>
                <mesh
                  name="Object_673"
                  
                  
                  geometry={nodes.Object_673.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane141_274"
                position={[-79.942, 9.923, -127.584]}
                rotation={[2.891, 0.455, -2.677]}
                scale={1.113}>
                <mesh
                  name="Object_675"
                  
                  
                  geometry={nodes.Object_675.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane142_275"
                position={[-74.518, 4.387, -116.535]}
                rotation={[1.168, 0.803, -1.52]}
                scale={1.113}>
                <mesh
                  name="Object_677"
                  
                  
                  geometry={nodes.Object_677.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane143_276"
                position={[-73.558, 16.71, -123.87]}
                rotation={[2.469, 0.65, -2.627]}
                scale={1.116}>
                <mesh
                  name="Object_679"
                  
                  
                  geometry={nodes.Object_679.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane144_277"
                position={[-74.693, 12.307, -122.735]}
                rotation={[3.113, 0.424, 2.951]}
                scale={1.113}>
                <mesh
                  name="Object_681"
                  
                  
                  geometry={nodes.Object_681.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group name="Plane044_278" position={[203.405, 76.204, -236.489]} scale={1.585}>
                <mesh
                  name="Object_683"
                  
                  
                  geometry={nodes.Object_683.geometry}
                  material={materials['woodenparts.001']}
                />
              </a.group>
              <a.group
                name="Plane145_279"
                position={[203.249, 92.949, -235.757]}
                rotation={[0, -0.947, 0]}
                scale={2.554}>
                <mesh
                  name="Object_685"
                  
                  
                  geometry={nodes.Object_685.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane146_280"
                position={[203.351, 99.047, -236.463]}
                rotation={[0, 1.089, 0]}
                scale={2.042}>
                <mesh
                  name="Object_687"
                  
                  
                  geometry={nodes.Object_687.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane147_281"
                position={[202.143, 103.077, -235.956]}
                rotation={[-Math.PI, -0.412, -Math.PI]}
                scale={1.576}>
                <mesh
                  name="Object_689"
                  
                  
                  geometry={nodes.Object_689.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane148_282"
                position={[203.249, 90.577, -235.757]}
                rotation={[-Math.PI, -0.695, -Math.PI]}
                scale={1.906}>
                <mesh
                  name="Object_691"
                  
                  geometry={nodes.Object_691.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane149_283"
                position={[203.97, 93.706, -236.741]}
                rotation={[-Math.PI, 0.938, -Math.PI]}
                scale={2.434}>
                <mesh
                  name="Object_693"
                  
                  
                  geometry={nodes.Object_693.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane150_284"
                position={[203.249, 90.577, -235.757]}
                rotation={[0, 0.672, 0]}
                scale={2.177}>
                <mesh
                  name="Object_695"
                  
                  
                  geometry={nodes.Object_695.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane151_285"
                position={[202.861, 108.85, -236.268]}
                rotation={[0, -0.023, 0]}
                scale={1.833}>
                <mesh
                  name="Object_697"
                  
                
                  geometry={nodes.Object_697.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane152_286"
                position={[203.159, 116.186, -236.268]}
                rotation={[0.351, 0.057, 0]}
                scale={1.251}>
                <mesh
                  name="Object_699"
                  
                  
                  geometry={nodes.Object_699.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane153_287"
                position={[202.861, 106.959, -236.268]}
                rotation={[Math.PI, -1.536, Math.PI]}
                scale={2.042}>
                <mesh
                  name="Object_701"
                  
                  
                  geometry={nodes.Object_701.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane154_288"
                position={[203.159, 116.186, -236.656]}
                rotation={[2.616, 0.542, -2.79]}
                scale={1.343}>
                <mesh
                  name="Object_703"
                  
                  
                  geometry={nodes.Object_703.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane155_289"
                position={[203.159, 116.186, -236.268]}
                rotation={[1.994, -1.185, 2.044]}
                scale={1.031}>
                <mesh
                  name="Object_705"
                  
                  
                  geometry={nodes.Object_705.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane156_290"
                position={[203.351, 102.104, -236.463]}
                rotation={[0, -0.848, 0]}
                scale={1.636}>
                <mesh
                  name="Object_707"
                  
                  
                  geometry={nodes.Object_707.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane157_291"
                position={[203.351, 102.104, -236.463]}
                rotation={[0, 0.951, 0]}
                scale={1.636}>
                <mesh
                  name="Object_709"
                  
                  
                  geometry={nodes.Object_709.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane158_292"
                position={[202.861, 112.104, -236.268]}
                rotation={[-Math.PI, 1.187, Math.PI]}
                scale={1.502}>
                <mesh
                  name="Object_711"
                  
                  
                  geometry={nodes.Object_711.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane159_293"
                position={[202.732, 121.141, -237.355]}
                rotation={[1.994, -1.185, 2.044]}
                scale={0.86}>
                <mesh
                  name="Object_713"
                  
                  
                  geometry={nodes.Object_713.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane160_294"
                position={[202.898, 121.141, -237.355]}
                rotation={[2.473, 0.984, -2.539]}
                scale={0.86}>
                <mesh
                  name="Object_715"
                  
                  
                  geometry={nodes.Object_715.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane161_295"
                position={[202.898, 121.141, -237.355]}
                rotation={[0.362, 0.248, -0.072]}
                scale={0.86}>
                <mesh
                  name="Object_717"
                  
                  
                  geometry={nodes.Object_717.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane162_296"
                position={[241.271, 76.204, -225.245]}
                rotation={[0, -1.02, 0]}
                scale={1.585}>
                <mesh
                  name="Object_719"
                  
                  
                  geometry={nodes.Object_719.geometry}
                  material={materials['woodenparts.001']}
                />
              </a.group>
              <a.group
                name="Plane163_297"
                position={[240.566, 92.949, -224.995]}
                rotation={[Math.PI, -1.174, Math.PI]}
                scale={2.554}>
                <mesh
                  name="Object_721"
                  
                  
                  geometry={nodes.Object_721.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane164_298"
                position={[241.221, 99.047, -225.277]}
                rotation={[0, 0.069, 0]}
                scale={2.042}>
                <mesh
                  name="Object_723"
                  
                  
                  geometry={nodes.Object_723.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane165_299"
                position={[240.157, 103.077, -226.041]}
                rotation={[-Math.PI, 0.608, -Math.PI]}
                scale={1.576}>
                <mesh
                  name="Object_725"
                  
                  
                  geometry={nodes.Object_725.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane166_300"
                position={[240.566, 90.577, -224.995]}
                rotation={[-Math.PI, 0.325, -Math.PI]}
                scale={1.906}>
                <mesh
                  name="Object_727"
                  
                  
                  geometry={nodes.Object_727.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane167_301"
                position={[241.782, 93.706, -224.896]}
                rotation={[0, 1.184, 0]}
                scale={2.434}>
                <mesh
                  name="Object_729"
                  
                  
                  geometry={nodes.Object_729.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane168_302"
                position={[240.566, 90.577, -224.995]}
                rotation={[0, -0.348, 0]}
                scale={2.177}>
                <mesh
                  name="Object_731"
                  
                  
                  geometry={nodes.Object_731.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane169_303"
                position={[240.798, 108.85, -225.593]}
                rotation={[0, -1.043, 0]}
                scale={1.833}>
                <mesh
                  name="Object_733"
                  
                  
                  geometry={nodes.Object_733.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane170_304"
                position={[240.955, 116.186, -225.339]}
                rotation={[0.566, -0.877, 0.476]}
                scale={1.251}>
                <mesh
                  name="Object_735"
                  
                  
                  geometry={nodes.Object_735.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane171_305"
                position={[240.798, 106.959, -225.593]}
                rotation={[-Math.PI, -0.516, -Math.PI]}
                scale={2.042}>
                <mesh
                  name="Object_737"
                  
                  
                  geometry={nodes.Object_737.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane172_306"
                position={[241.285, 116.186, -225.542]}
                rotation={[1.45, 1.123, -1.377]}
                scale={1.343}>
                <mesh
                  name="Object_739"
                  
                  
                  geometry={nodes.Object_739.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane173_307"
                position={[240.955, 116.186, -225.339]}
                rotation={[2.766, -0.361, 3.024]}
                scale={1.031}>
                <mesh
                  name="Object_741"
                  
                  
                  geometry={nodes.Object_741.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane174_308"
                position={[241.221, 102.104, -225.277]}
                rotation={[Math.PI, -1.273, Math.PI]}
                scale={1.636}>
                <mesh
                  name="Object_743"
                  
                  
                  geometry={nodes.Object_743.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane175_309"
                position={[241.221, 102.104, -225.277]}
                rotation={[0, -0.069, 0]}
                scale={1.636}>
                <mesh
                  name="Object_745"
                  
                  
                  geometry={nodes.Object_745.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane176_310"
                position={[240.798, 112.104, -225.593]}
                rotation={[0, 0.935, 0]}
                scale={1.502}>
                <mesh
                  name="Object_747"
                  
                  
                  geometry={nodes.Object_747.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane177_311"
                position={[241.657, 121.141, -226.271]}
                rotation={[2.766, -0.361, 3.024]}
                scale={0.86}>
                <mesh
                  name="Object_749"
                  
                  
                  geometry={nodes.Object_749.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane178_312"
                position={[241.743, 121.141, -226.13]}
                rotation={[0.618, 0.938, -0.5]}
                scale={0.86}>
                <mesh
                  name="Object_751"
                  
                  
                  geometry={nodes.Object_751.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane179_313"
                position={[241.743, 121.141, -226.13]}
                rotation={[0.465, -0.7, 0.333]}
                scale={0.86}>
                <mesh
                  name="Object_753"
                  
                  
                  geometry={nodes.Object_753.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane180_314"
                position={[146.507, 24.482, -255.807]}
                rotation={[-0.142, -1.034, 0.088]}
                scale={1.585}>
                <mesh
                  name="Object_755"
                  
                  
                  geometry={nodes.Object_755.geometry}
                  material={materials['woodenparts.001']}
                />
              </a.group>
              <a.group
                name="Plane181_315"
                position={[145.048, 40.835, -259.179]}
                rotation={[2.822, -1.157, 3.03]}
                scale={2.554}>
                <mesh
                  name="Object_757"
                  
                  
                  geometry={nodes.Object_757.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane182_316"
                position={[145.433, 46.754, -260.767]}
                rotation={[-0.22, 0.053, 0.045]}
                scale={2.042}>
                <mesh
                  name="Object_759"
                  
                  
                  geometry={nodes.Object_759.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane183_317"
                position={[144.201, 50.471, -262.388]}
                rotation={[2.956, 0.622, 3.086]}
                scale={1.576}>
                <mesh
                  name="Object_761"
                  
                  
                  geometry={nodes.Object_761.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane184_318"
                position={[145.155, 38.522, -258.667]}
                rotation={[2.94, 0.34, 3.094]}
                scale={1.906}>
                <mesh
                  name="Object_763"
                  
                  
                  geometry={nodes.Object_763.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane185_319"
                position={[146.227, 41.652, -259.239]}
                rotation={[-0.323, 1.166, 0.114]}
                scale={2.434}>
                <mesh
                  name="Object_765"
                  
                  
                  geometry={nodes.Object_765.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane186_320"
                position={[145.155, 38.522, -258.667]}
                rotation={[-0.201, -0.363, 0.048]}
                scale={2.177}>
                <mesh
                  name="Object_767"
                  
                  
                  geometry={nodes.Object_767.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane187_321"
                position={[144.576, 56.228, -263.192]}
                rotation={[-0.138, -1.056, 0.091]}
                scale={1.833}>
                <mesh
                  name="Object_769"

                  
                  geometry={nodes.Object_769.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane188_322"
                position={[144.399, 63.446, -264.526]}
                rotation={[0.403, -0.865, 0.547]}
                scale={1.251}>
                <mesh
                  name="Object_771"
                  
                  
                  geometry={nodes.Object_771.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane189_323"
                position={[144.661, 54.384, -262.785]}
                rotation={[2.899, -0.5, 3.09]}
                scale={2.042}>
                <mesh
                  name="Object_773"
                  
                  geometry={nodes.Object_773.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane190_324"
                position={[144.732, 63.418, -264.722]}
                rotation={[1.185, 1.165, -1.324]}
                scale={1.343}>
                <mesh
                  name="Object_775"
                  
                  
                  geometry={nodes.Object_775.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane191_325"
                position={[144.399, 63.446, -264.526]}
                rotation={[2.536, -0.33, 2.986]}
                scale={1.031}>
                <mesh
                  name="Object_777"
                  
                  
                  geometry={nodes.Object_777.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane192_326"
                position={[145.296, 49.736, -261.426]}
                rotation={[2.786, -1.255, 2.997]}
                scale={1.636}>
                <mesh
                  name="Object_779"
                  
                  
                  geometry={nodes.Object_779.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane193_327"
                position={[145.296, 49.736, -261.426]}
                rotation={[-0.214, -0.085, 0.045]}
                scale={1.636}>
                <mesh
                  name="Object_781"
                  
                  
                  geometry={nodes.Object_781.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane194_328"
                position={[144.43, 59.402, -263.894]}
                rotation={[-0.276, 0.918, 0.074]}
                scale={1.502}>
                <mesh
                  name="Object_783"
                  
                  
                  geometry={nodes.Object_783.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane195_329"
                position={[144.893, 68.112, -266.502]}
                rotation={[2.536, -0.33, 2.986]}
                scale={0.86}>
                <mesh
                  name="Object_785"
                  
                  
                  geometry={nodes.Object_785.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane196_330"
                position={[144.977, 68.146, -266.364]}
                rotation={[0.337, 0.949, -0.421]}
                scale={0.86}>
                <mesh
                  name="Object_787"
                  
                  
                  geometry={nodes.Object_787.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane197_331"
                position={[144.977, 68.146, -266.364]}
                rotation={[0.287, -0.693, 0.394]}
                scale={0.86}>
                <mesh
                  name="Object_789"
                  
                  
                  geometry={nodes.Object_789.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane198_332"
                position={[-74.864, 5.98, -115.554]}
                rotation={[2.103, -1.522, 2.097]}
                scale={1.113}>
                <mesh
                  name="Object_791"
                  
                  
                  geometry={nodes.Object_791.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane199_333"
                position={[-1.592, -11.965, -528.841]}
                rotation={[-0.142, -1.034, 0.088]}
                scale={1.585}>
                <mesh
                  name="Object_793"
                  
                  
                  geometry={nodes.Object_793.geometry}
                  material={materials['woodenparts.001']}
                />
              </a.group>
              <a.group
                name="Plane200_334"
                position={[-3.051, 4.388, -532.213]}
                rotation={[2.822, -1.157, 3.03]}
                scale={2.554}>
                <mesh
                  name="Object_795"
                  
                  
                  geometry={nodes.Object_795.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane201_335"
                position={[-2.666, 10.307, -533.801]}
                rotation={[-0.22, 0.053, 0.045]}
                scale={2.042}>
                <mesh
                  name="Object_797"
                  
                  
                  geometry={nodes.Object_797.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane202_336"
                position={[-3.898, 14.024, -535.423]}
                rotation={[2.956, 0.622, 3.086]}
                scale={1.576}>
                <mesh
                  name="Object_799"
                  
                  
                  geometry={nodes.Object_799.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane203_337"
                position={[-2.945, 2.075, -531.702]}
                rotation={[2.94, 0.34, 3.094]}
                scale={1.906}>
                <mesh
                  name="Object_801"
                  
                  
                  geometry={nodes.Object_801.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane204_338"
                position={[-1.872, 5.205, -532.274]}
                rotation={[-0.323, 1.166, 0.114]}
                scale={2.434}>
                <mesh
                  name="Object_803"
                  
                  
                  geometry={nodes.Object_803.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane205_339"
                position={[-2.945, 2.075, -531.702]}
                rotation={[-0.201, -0.363, 0.048]}
                scale={2.177}>
                <mesh
                  name="Object_805"
                  
                  
                  geometry={nodes.Object_805.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane206_340"
                position={[-3.523, 19.781, -536.227]}
                rotation={[-0.138, -1.056, 0.091]}
                scale={1.833}>
                <mesh
                  name="Object_807"
                  
                  
                  geometry={nodes.Object_807.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane207_341"
                position={[-3.7, 26.999, -537.56]}
                rotation={[0.403, -0.865, 0.547]}
                scale={1.251}>
                <mesh
                  name="Object_809"
                  
                  
                  geometry={nodes.Object_809.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane208_342"
                position={[-3.438, 17.937, -535.819]}
                rotation={[2.899, -0.5, 3.09]}
                scale={2.042}>
                <mesh
                  name="Object_811"
                  
                  
                  geometry={nodes.Object_811.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane209_343"
                position={[-3.367, 26.971, -537.757]}
                rotation={[1.185, 1.165, -1.324]}
                scale={1.343}>
                <mesh
                  name="Object_813"
                  
                  
                  geometry={nodes.Object_813.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane210_344"
                position={[-3.7, 26.999, -537.56]}
                rotation={[2.536, -0.33, 2.986]}
                scale={1.031}>
                <mesh
                  name="Object_815"
                  
                  
                  geometry={nodes.Object_815.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane211_345"
                position={[-2.803, 13.289, -534.461]}
                rotation={[2.786, -1.255, 2.997]}
                scale={1.636}>
                <mesh
                  name="Object_817"
                  
                  
                  geometry={nodes.Object_817.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane212_346"
                position={[-2.803, 13.289, -534.461]}
                rotation={[-0.214, -0.085, 0.045]}
                scale={1.636}>
                <mesh
                  name="Object_819"
                  
                  
                  geometry={nodes.Object_819.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane213_347"
                position={[-3.669, 22.955, -536.929]}
                rotation={[-0.276, 0.918, 0.074]}
                scale={1.502}>
                <mesh
                  name="Object_821"
                  
                  
                  geometry={nodes.Object_821.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane214_348"
                position={[-3.206, 31.665, -539.536]}
                rotation={[2.536, -0.33, 2.986]}
                scale={0.86}>
                <mesh
                  name="Object_823"
                  
                  
                  geometry={nodes.Object_823.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane215_349"
                position={[-3.122, 31.699, -539.398]}
                rotation={[0.337, 0.949, -0.421]}
                scale={0.86}>
                <mesh
                  name="Object_825"
                  
                  
                  geometry={nodes.Object_825.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane216_350"
                position={[-3.122, 31.699, -539.398]}
                rotation={[0.287, -0.693, 0.394]}
                scale={0.86}>
                <mesh
                  name="Object_827"
                  
                  
                  geometry={nodes.Object_827.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane217_351"
                position={[26.64, -10.31, -542.206]}
                rotation={[-3.068, 0.132, -2.941]}
                scale={1.585}>
                <mesh
                  name="Object_829"
                  
                  
                  geometry={nodes.Object_829.geometry}
                  material={materials['woodenparts.001']}
                />
              </a.group>
              <a.group
                name="Plane218_352"
                position={[30.194, 6.043, -541.274]}
                rotation={[2.886, 1.046, -2.736]}
                scale={2.554}>
                <mesh
                  name="Object_831"
                  
                  
                  geometry={nodes.Object_831.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane219_353"
                position={[31.206, 11.962, -539.992]}
                rotation={[-2.77, -0.927, -2.806]}
                scale={2.042}>
                <mesh
                  name="Object_833"
                  
                  
                  geometry={nodes.Object_833.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane220_354"
                position={[33.242, 15.679, -539.961]}
                rotation={[0.156, 0.272, -0.206]}
                scale={1.576}>
                <mesh
                  name="Object_835"
                  
                  
                  geometry={nodes.Object_835.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane221_355"
                position={[29.726, 3.73, -541.506]}
                rotation={[0.223, 0.548, -0.234]}
                scale={1.906}>
                <mesh
                  name="Object_837"
                  
                  
                  geometry={nodes.Object_837.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane222_356"
                position={[29.514, 6.86, -540.309]}
                rotation={[-0.248, -1.037, -0.399]}
                scale={2.434}>
                <mesh
                  name="Object_839"
                  
                  
                  geometry={nodes.Object_839.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane223_357"
                position={[29.726, 3.73, -541.506]}
                rotation={[-2.925, -0.526, -2.911]}
                scale={2.177}>
                <mesh
                  name="Object_841"
                  
                  
                  geometry={nodes.Object_841.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane224_358"
                position={[33.644, 21.436, -539.17]}
                rotation={[-3.073, 0.154, -2.94]}
                scale={1.833}>
                <mesh
                  name="Object_843"
                  
                  
                  geometry={nodes.Object_843.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane225_359"
                position={[34.803, 28.654, -538.486]}
                rotation={[2.884, 0, -2.909]}
                scale={1.251}>
                <mesh
                  name="Object_845"
                  

                  geometry={nodes.Object_845.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane226_360"
                position={[33.271, 19.592, -539.355]}
                rotation={[0.958, 1.311, -0.875]}
                scale={2.042}>
                <mesh
                  name="Object_847"
                  
                  
                  geometry={nodes.Object_847.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane227_361"
                position={[34.752, 28.626, -538.103]}
                rotation={[0.525, -0.753, 0.208]}
                scale={1.343}>
                <mesh
                  name="Object_849"
                  
                  
                  geometry={nodes.Object_849.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane228_362"
                position={[34.803, 28.654, -538.486]}
                rotation={[1.175, 0.948, -1.031]}
                scale={1.031}>
                <mesh
                  name="Object_851"
                  
                  
                  geometry={nodes.Object_851.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane229_363"
                position={[31.81, 14.944, -539.693]}
                rotation={[2.954, 0.954, -2.793]}
                scale={1.636}>
                <mesh
                  name="Object_853"
                  
                  
                  geometry={nodes.Object_853.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane230_364"
                position={[31.81, 14.944, -539.693]}
                rotation={[-2.835, -0.795, -2.856]}
                scale={1.636}>
                <mesh
                  name="Object_855"
                  
                  
                  geometry={nodes.Object_855.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane231_365"
                position={[34.286, 24.61, -538.851]}
                rotation={[-0.56, -1.253, -0.685]}
                scale={1.502}>
                <mesh
                  name="Object_857"
                  
                  
                  geometry={nodes.Object_857.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane232_366"
                position={[36.053, 33.32, -536.879]}
                rotation={[1.175, 0.948, -1.031]}
                scale={0.86}>
                <mesh
                  name="Object_859"
                  
                  
                  geometry={nodes.Object_859.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane233_367"
                position={[35.892, 33.354, -536.898]}
                rotation={[0.57, -1.205, 0.396]}
                scale={0.86}>
                <mesh
                  name="Object_861"
                  
                  
                  geometry={nodes.Object_861.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane234_368"
                position={[35.892, 33.354, -536.898]}
                rotation={[2.918, -0.188, -2.976]}
                scale={0.86}>
                <mesh
                  name="Object_863"
                  
                  
                  geometry={nodes.Object_863.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane235_369"
                position={[-30.826, 28.408, -72.098]}
                rotation={[1.591, -0.626, 0.751]}
                scale={4.357}>
                <mesh
                  name="Object_865"
                  
                  
                  geometry={nodes.Object_865.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane236_370"
                position={[-35.373, 25.325, -72.098]}
                rotation={[0.961, -0.15, -0.643]}
                scale={4.357}>
                <mesh
                  name="Object_867"
                  
                  
                  geometry={nodes.Object_867.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane237_371"
                position={[-26.881, 21.358, -75.152]}
                rotation={[1.282, -0.563, 0.209]}
                scale={4.357}>
                <mesh
                  name="Object_869"
                  
                  
                  geometry={nodes.Object_869.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane238_372"
                position={[-46.239, 25.325, -87.434]}
                rotation={[1.356, -0.564, -0.732]}
                scale={4.357}>
                <mesh
                  name="Object_871"
                  
                  
                  geometry={nodes.Object_871.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane239_373"
                position={[-38.007, 17.378, -93.955]}
                rotation={[1.282, -0.563, 0.209]}
                scale={4.357}>
                <mesh
                  name="Object_873"
                  
                  
                  geometry={nodes.Object_873.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane240_374"
                position={[-30.789, 22.665, -75.316]}
                rotation={[0.952, 0.1, -0.993]}
                scale={4.357}>
                <mesh
                  name="Object_875"
                  
                  
                  geometry={nodes.Object_875.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane241_375"
                position={[-11.832, 35.48, -47.412]}
                rotation={[1.374, -0.562, -0.536]}
                scale={3.18}>
                <mesh
                  name="Object_877"
                  
                  
                  geometry={nodes.Object_877.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane242_376"
                position={[-4.871, 35.48, -46.945]}
                rotation={[2.109, -0.26, 0.986]}
                scale={3.18}>
                <mesh
                  name="Object_879"
                  
                  
                  geometry={nodes.Object_879.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane243_377"
                position={[-63.099, 33.585, -117.21]}
                rotation={[0.945, 0.02, -0.881]}
                scale={4.357}>
                <mesh
                  name="Object_881"
                  
                  
                  geometry={nodes.Object_881.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane244_378"
                position={[-57.34, 33.429, -115.027]}
                rotation={[1.031, -0.333, -0.354]}
                scale={4.357}>
                <mesh
                  name="Object_883"
                  
                  
                  geometry={nodes.Object_883.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane245_379"
                position={[-44.551, 19.558, -109.351]}
                rotation={[1.064, -0.385, -0.259]}
                scale={4.357}>
                <mesh
                  name="Object_885"
                  
                  
                  geometry={nodes.Object_885.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane246_380"
                position={[-40.02, -17.115, -101.154]}
                rotation={[0.923, -0.729, -0.52]}
                scale={4.357}>
                <mesh
                  name="Object_887"
                  
                  
                  geometry={nodes.Object_887.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane247_381"
                position={[-40.02, -18.134, -109.195]}
                rotation={[1.432, -0.337, -2.762]}
                scale={4.357}>
                <mesh
                  name="Object_889"
                  
                  
                  geometry={nodes.Object_889.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane248_382"
                position={[-45.188, -20.067, -117.68]}
                rotation={[0.964, -0.248, -0.695]}
                scale={4.357}>
                <mesh
                  name="Object_891"
                  
                  
                  geometry={nodes.Object_891.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane249_383"
                position={[-30.215, -40.261, -98.645]}
                rotation={[1.592, -0.559, -2.788]}
                scale={4.357}>
                <mesh
                  name="Object_893"
                  
                  
                  geometry={nodes.Object_893.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane250_384"
                position={[-35.611, -39.539, -107.179]}
                rotation={[1.091, -0.434, -0.827]}
                scale={4.357}>
                <mesh
                  name="Object_895"
                  
                  
                  geometry={nodes.Object_895.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane251_385"
                position={[-11.668, -43.097, -90.93]}
                rotation={[1.589, 0.175, -2.802]}
                scale={4.357}>
                <mesh
                  name="Object_897"
                  
                  
                  geometry={nodes.Object_897.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane252_386"
                position={[-16.156, -46.176, -99.463]}
                rotation={[1.127, 0.229, -0.504]}
                scale={4.357}>
                <mesh
                  name="Object_899"
                  
                  
                  geometry={nodes.Object_899.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane253_387"
                position={[-74.357, -9.431, -118.295]}
                rotation={[1.733, -0.633, 0.523]}
                scale={3.176}>
                <mesh
                  name="Object_901"
                  
                  
                  geometry={nodes.Object_901.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane254_388"
                position={[-74.357, -10.476, -118.295]}
                rotation={[1.134, -0.499, -0.52]}
                scale={3.176}>
                <mesh
                  name="Object_903"
                  
                  
                  geometry={nodes.Object_903.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane255_389"
                position={[159.741, 28.117, -237.514]}
                rotation={[1.236, 0.02, -0.881]}
                scale={6.23}>
                <mesh
                  name="Object_905"
                  
                  
                  geometry={nodes.Object_905.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane256_390"
                position={[159.741, 28.117, -237.514]}
                rotation={[1.316, 0.22, -1.522]}
                scale={6.23}>
                <mesh
                  name="Object_907"
                  
                  
                  geometry={nodes.Object_907.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane257_391"
                position={[159.741, 28.117, -237.514]}
                rotation={[1.746, 0.288, -2.952]}
                scale={6.23}>
                <mesh
                  name="Object_909"
                  
                  
                  geometry={nodes.Object_909.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane258_392"
                position={[405.534, 9.814, -95.484]}
                rotation={[0, -1.02, 0]}
                scale={1.585}>
                <mesh
                  name="Object_911"
                  
                  
                  geometry={nodes.Object_911.geometry}
                  material={materials['woodenparts.001']}
                />
              </a.group>
              <a.group
                name="Plane259_393"
                position={[404.829, 26.559, -95.234]}
                rotation={[Math.PI, -1.174, Math.PI]}
                scale={2.554}>
                <mesh
                  name="Object_913"
                  
                  
                  geometry={nodes.Object_913.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane260_394"
                position={[405.484, 32.658, -95.516]}
                rotation={[0, 0.069, 0]}
                scale={2.042}>
                <mesh
                  name="Object_915"
                  
                  
                  geometry={nodes.Object_915.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane261_395"
                position={[404.419, 36.688, -96.28]}
                rotation={[-Math.PI, 0.608, -Math.PI]}
                scale={1.576}>
                <mesh
                  name="Object_917"
                  
                  
                  geometry={nodes.Object_917.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane262_396"
                position={[404.829, 24.187, -95.234]}
                rotation={[-Math.PI, 0.325, -Math.PI]}
                scale={1.906}>
                <mesh
                  name="Object_919"
                  
                  
                  geometry={nodes.Object_919.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane263_397"
                position={[406.044, 27.316, -95.135]}
                rotation={[0, 1.184, 0]}
                scale={2.434}>
                <mesh
                  name="Object_921"
                  
                  
                  geometry={nodes.Object_921.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane264_398"
                position={[404.829, 24.187, -95.234]}
                rotation={[0, -0.348, 0]}
                scale={2.177}>
                <mesh
                  name="Object_923"
                  
                  
                  geometry={nodes.Object_923.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane265_399"
                position={[405.061, 42.46, -95.832]}
                rotation={[0, -1.043, 0]}
                scale={1.833}>
                <mesh
                  name="Object_925"

                  
                  geometry={nodes.Object_925.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane266_400"
                position={[405.217, 49.797, -95.578]}
                rotation={[0.566, -0.877, 0.476]}
                scale={1.251}>
                <mesh
                  name="Object_927"
                  
                  
                  geometry={nodes.Object_927.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane267_401"
                position={[405.061, 40.57, -95.832]}
                rotation={[-Math.PI, -0.516, -Math.PI]}
                scale={2.042}>
                <mesh
                  name="Object_929"
                  
                  
                  geometry={nodes.Object_929.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane268_402"
                position={[405.547, 49.797, -95.781]}
                rotation={[1.45, 1.123, -1.377]}
                scale={1.343}>
                <mesh
                  name="Object_931"
                  
                  
                  geometry={nodes.Object_931.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane269_403"
                position={[405.217, 49.797, -95.578]}
                rotation={[2.766, -0.361, 3.024]}
                scale={1.031}>
                <mesh
                  name="Object_933"
                  
                  
                  geometry={nodes.Object_933.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane270_404"
                position={[405.484, 35.714, -95.516]}
                rotation={[Math.PI, -1.273, Math.PI]}
                scale={1.636}>
                <mesh
                  name="Object_935"
                  
                  
                  geometry={nodes.Object_935.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane271_405"
                position={[405.484, 35.714, -95.516]}
                rotation={[0, -0.069, 0]}
                scale={1.636}>
                <mesh
                  name="Object_937"
                  
                  
                  geometry={nodes.Object_937.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane272_406"
                position={[405.061, 45.715, -95.832]}
                rotation={[0, 0.935, 0]}
                scale={1.502}>
                <mesh
                  name="Object_939"
                  
                  
                  geometry={nodes.Object_939.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane273_407"
                position={[405.919, 54.752, -96.51]}
                rotation={[2.766, -0.361, 3.024]}
                scale={0.86}>
                <mesh
                  name="Object_941"
                  
                  
                  geometry={nodes.Object_941.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane274_408"
                position={[406.006, 54.752, -96.369]}
                rotation={[0.618, 0.938, -0.5]}
                scale={0.86}>
                <mesh
                  name="Object_943"
                  
                  
                  geometry={nodes.Object_943.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane275_409"
                position={[406.006, 54.752, -96.369]}
                rotation={[0.465, -0.7, 0.333]}
                scale={0.86}>
                <mesh
                  name="Object_945"
                  
                  
                  geometry={nodes.Object_945.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane276_410"
                position={[-341.434, 23.935, -290.159]}
                rotation={[0, 0.862, 0]}
                scale={2.236}>
                <mesh
                  name="Object_947"
                  
                  
                  geometry={nodes.Object_947.geometry}
                  material={materials['woodenparts.001']}
                />
              </a.group>
              <a.group
                name="Plane277_411"
                position={[-342.666, 48.258, -298.341]}
                rotation={[-0.068, -0.17, 0.163]}
                scale={1.113}>
                <mesh
                  name="Object_949"
                  
                  
                  geometry={nodes.Object_949.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane278_412"
                position={[-342.837, 51.198, -299.681]}
                rotation={[1.895, 0.97, -2.304]}
                scale={0.928}>
                <mesh
                  name="Object_951"
                  
                  
                  geometry={nodes.Object_951.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane279_413"
                position={[-343.221, 49.968, -298.83]}
                rotation={[2.722, 0.49, -2.936]}
                scale={1.113}>
                <mesh
                  name="Object_953"
                  
                  
                  geometry={nodes.Object_953.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane280_414"
                position={[-343.064, 49.979, -298.98]}
                rotation={[0.347, -0.056, -0.012]}
                scale={0.928}>
                <mesh
                  name="Object_955"
                  
                  
                  geometry={nodes.Object_955.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane281_415"
                position={[-343.221, 49.968, -298.83]}
                rotation={[-0.108, 0.909, -0.198]}
                scale={1.113}>
                <mesh
                  name="Object_957"
                  
                  
                  geometry={nodes.Object_957.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane282_416"
                position={[-342.074, 46.767, -296.82]}
                rotation={[-0.238, 1.156, 0.186]}
                scale={1.113}>
                <mesh
                  name="Object_959"
                  
                  
                  geometry={nodes.Object_959.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane283_417"
                position={[-342.328, 46.899, -296.565]}
                rotation={[-0.13, -0.753, -0.122]}
                scale={1.113}>
                <mesh
                  name="Object_961"
                  
                  
                  geometry={nodes.Object_961.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane284_418"
                position={[-338.372, 46.767, -293.116]}
                rotation={[2.925, -0.413, 2.911]}
                scale={1.181}>
                <mesh
                  name="Object_963"
                  
                  
                  geometry={nodes.Object_963.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane285_419"
                position={[-338.029, 49.881, -293.458]}
                rotation={[0.276, -0.768, 0.052]}
                scale={1.44}>
                <mesh
                  name="Object_965"
                  
                  
                  geometry={nodes.Object_965.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane286_420"
                position={[-339.147, 44.496, -292.341]}
                rotation={[0.276, -0.768, 0.052]}
                scale={1.113}>
                <mesh
                  name="Object_967"
                  
                  
                  geometry={nodes.Object_967.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane287_421"
                position={[-337.417, 52.792, -293.492]}
                rotation={[0.185, -0.027, -0.137]}
                scale={1.332}>
                <mesh
                  name="Object_969"
                  
                  
                  geometry={nodes.Object_969.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane288_422"
                position={[-336.282, 56.564, -294.626]}
                rotation={[0.888, -1.332, 0.732]}
                scale={1.332}>
                <mesh
                  name="Object_971"
                  
                  
                  geometry={nodes.Object_971.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane289_423"
                position={[-338.029, 49.881, -293.458]}
                rotation={[2.866, -0.764, 2.806]}>
                <mesh
                  name="Object_973"
                  
                  
                  geometry={nodes.Object_973.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane290_424"
                position={[-337.417, 52.792, -293.492]}
                rotation={[3.137, 0.424, 2.932]}
                scale={1.113}>
                <mesh
                  name="Object_975"
                  
                  
                  geometry={nodes.Object_975.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane291_425"
                position={[-338.062, 47.788, -293.297]}
                rotation={[-3.055, 1.163, 3.013]}
                scale={1.113}>
                <mesh
                  name="Object_977"
                  
                  
                  geometry={nodes.Object_977.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane292_426"
                position={[-336.407, 54.51, -294.502]}
                rotation={[2.872, -0.813, 2.801]}
                scale={1.311}>
                <mesh
                  name="Object_979"
                
                  
                  geometry={nodes.Object_979.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane293_427"
                position={[-337.395, 45.314, -285.538]}
                rotation={[2.925, -0.413, 2.911]}
                scale={1.201}>
                <mesh
                  name="Object_981"
                  
                  
                  geometry={nodes.Object_981.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane294_428"
                position={[-337.395, 45.314, -285.538]}
                rotation={[-2.84, 0.584, 2.749]}
                scale={1.113}>
                <mesh
                  name="Object_983"
                  
                  
                  geometry={nodes.Object_983.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane295_429"
                position={[-337.624, 42.981, -287.572]}
                rotation={[-0.282, -0.811, -0.097]}
                scale={1.113}>
                <mesh
                  name="Object_985"
                  
                  
                  geometry={nodes.Object_985.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane296_430"
                position={[-337.624, 42.981, -287.572]}
                rotation={[-2.946, 0.179, -3.067]}
                scale={1.113}>
                <mesh
                  name="Object_987"
                  
                  
                  geometry={nodes.Object_987.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane297_431"
                position={[-337.588, 41.807, -288.054]}
                rotation={[-2.732, -1.069, -2.668]}
                scale={1.113}>
                <mesh
                  name="Object_989"
                  
                  
                  geometry={nodes.Object_989.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane298_432"
                position={[-339.803, 45.46, -294.492]}
                rotation={[-2.803, 1.281, 2.784]}
                scale={1.21}>
                <mesh
                  name="Object_991"
                  
                  
                  geometry={nodes.Object_991.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane299_433"
                position={[-337.417, 52.792, -293.492]}
                rotation={[0.719, 0.664, -0.63]}
                scale={1.113}>
                <mesh
                  name="Object_993"
                  
                  
                  geometry={nodes.Object_993.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane300_434"
                position={[-343.343, 45.585, -289.213]}
                rotation={[-2.803, 1.281, 2.784]}
                scale={0.814}>
                <mesh
                  name="Object_995"
                  
                  
                  geometry={nodes.Object_995.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane301_435"
                position={[-342.138, 43.175, -290.418]}
                rotation={[-3.031, 0.529, 3.054]}
                scale={0.814}>
                <mesh
                  name="Object_997"
                  
                  
                  geometry={nodes.Object_997.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane302_436"
                position={[-342.545, 44.005, -289.926]}
                rotation={[-0.221, 1.124, 0.168]}
                scale={0.814}>
                <mesh
                  name="Object_999"
                  
                  
                  geometry={nodes.Object_999.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane303_437"
                position={[-339.361, 41.233, -292.127]}
                rotation={[0.276, -0.768, 0.052]}
                scale={1.113}>
                <mesh
                  name="Object_1001"
                  
                  
                  geometry={nodes.Object_1001.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane304_438"
                position={[-339.361, 41.233, -292.127]}
                rotation={[0.275, 0.846, 0.052]}
                scale={1.113}>
                <mesh
                  name="Object_1003"
                  
                  
                  geometry={nodes.Object_1003.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane305_439"
                position={[-338.062, 47.788, -293.297]}
                rotation={[-0.18, 0.093, 0.287]}
                scale={1.113}>
                <mesh
                  name="Object_1005"
                  
                  
                  geometry={nodes.Object_1005.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane306_440"
                position={[-338.372, 46.767, -293.116]}
                rotation={[2.367, 0.402, -2.794]}
                scale={1.181}>
                <mesh
                  name="Object_1007"
                  
                  
                  geometry={nodes.Object_1007.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane307_441"
                position={[-343.343, 45.585, -289.213]}
                rotation={[-2.819, 0.208, 3.037]}
                scale={0.814}>
                <mesh
                  name="Object_1009"
                  
                  
                  geometry={nodes.Object_1009.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane308_442"
                position={[-338.632, 46.302, -292.855]}
                rotation={[0.651, -1.241, 0.483]}
                scale={1.44}>
                <mesh
                  name="Object_1011"
                  
                  
                  geometry={nodes.Object_1011.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane309_443"
                position={[-338.632, 46.302, -292.855]}
                rotation={[2.715, -0.749, -2.658]}
                scale={1.31}>
                <mesh
                  name="Object_1013"
                  
                  
                  geometry={nodes.Object_1013.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane310_444"
                position={[-338.632, 46.302, -292.855]}
                rotation={[1.175, -1.065, 0.813]}
                scale={1.44}>
                <mesh
                  name="Object_1015"
                  
                  
                  geometry={nodes.Object_1015.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane311_445"
                position={[-342.666, 48.258, -298.341]}
                rotation={[2.891, 0.455, -2.677]}
                scale={1.113}>
                <mesh
                  name="Object_1017"
                  
                  
                  geometry={nodes.Object_1017.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane312_446"
                position={[-337.242, 42.722, -287.292]}
                rotation={[1.168, 0.803, -1.52]}
                scale={1.113}>
                <mesh
                  name="Object_1019"
                  
                  
                  geometry={nodes.Object_1019.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane313_447"
                position={[-336.282, 55.045, -294.626]}
                rotation={[2.469, 0.65, -2.627]}
                scale={1.116}>
                <mesh
                  name="Object_1021"
                  
                  
                  geometry={nodes.Object_1021.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane314_448"
                position={[-337.417, 50.642, -293.492]}
                rotation={[3.113, 0.424, 2.951]}
                scale={1.113}>
                <mesh
                  name="Object_1023"
                  
                  
                  geometry={nodes.Object_1023.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane315_449"
                position={[-337.588, 44.315, -286.311]}
                rotation={[2.103, -1.522, 2.097]}
                scale={1.113}>
                <mesh
                  name="Object_1025"
                  
                  
                  geometry={nodes.Object_1025.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane316_450"
                position={[-337.081, 28.904, -289.051]}
                rotation={[1.733, -0.633, 0.523]}
                scale={3.176}>
                <mesh
                  name="Object_1027"
                  
                  
                  geometry={nodes.Object_1027.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane317_451"
                position={[-337.081, 27.859, -289.051]}
                rotation={[1.134, -0.499, -0.52]}
                scale={3.176}>
                <mesh
                  name="Object_1029"
                  
                  
                  geometry={nodes.Object_1029.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane318_452"
                position={[390.844, -35.413, -67.288]}
                rotation={[1.316, 0.22, -1.522]}
                scale={6.23}>
                <mesh
                  name="Object_1031"
                  
                  
                  geometry={nodes.Object_1031.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane319_453"
                position={[390.844, -35.413, -67.288]}
                rotation={[1.746, 0.288, -2.952]}
                scale={6.23}>
                <mesh
                  name="Object_1033"
                  
                  
                  geometry={nodes.Object_1033.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane320_454"
                position={[371.978, -43.717, -67.288]}
                rotation={[1.302, 0.386, -1.476]}
                scale={6.23}>
                <mesh
                  name="Object_1035"
                  
                  
                  geometry={nodes.Object_1035.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane321_455"
                position={[371.978, -43.717, -67.288]}
                rotation={[1.758, 0.457, -2.986]}
                scale={6.23}>
                <mesh
                  name="Object_1037"
                  
                  geometry={nodes.Object_1037.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane322_456"
                position={[375.016, -39.302, -84.821]}
                rotation={[1.302, 0.386, -1.476]}
                scale={6.23}>
                <mesh
                  name="Object_1039"
                  
                  geometry={nodes.Object_1039.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane323_457"
                position={[375.016, -39.302, -84.821]}
                rotation={[1.758, 0.457, -2.986]}
                scale={6.23}>
                <mesh
                  name="Object_1041"
                  
                  
                  geometry={nodes.Object_1041.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group name="Cube034_458" position={[72.751, -5.382, -103.635]} scale={1.126}>
                <mesh
                  name="Object_1043"
                  
                  
                  geometry={nodes.Object_1043.geometry}
                  material={materials.components}
                />
                <mesh
                  name="Object_1044"
                  
                  
                  geometry={nodes.Object_1044.geometry}
                  material={materials.light}
                />
              </a.group>
              <a.group name="Cube119_459" position={[72.751, -2.726, -166.667]} scale={1.083}>
                <mesh
                  name="Object_1046"
                  
                  
                  geometry={nodes.Object_1046.geometry}
                  material={materials.components}
                />
                <mesh
                  name="Object_1047"
                  
                  
                  geometry={nodes.Object_1047.geometry}
                  material={materials.light}
                />
              </a.group>
              <a.group
                name="Plane324_460"
                position={[70.636, -8.414, -116.671]}
                rotation={[0.032, -1.093, 0.928]}
                scale={4.869}>
                <mesh
                  name="Object_1049"
                  
                  
                  geometry={nodes.Object_1049.geometry}
                  material={materials.components}
                />
              </a.group>
              <a.group name="Plane325_461" position={[71.554, -9.908, -107.613]} scale={7.883}>
                <mesh
                  name="Object_1051"
                  
                  
                  geometry={nodes.Object_1051.geometry}
                  material={materials.components}
                />
              </a.group>
              <a.group
                name="Plane326_462"
                position={[75.919, -8.09, -116.471]}
                rotation={[0.032, 1.093, -0.928]}
                scale={[-4.132, 4.132, 4.132]}>
                <mesh
                  name="Object_1053"
                  
                  
                  geometry={nodes.Object_1053.geometry}
                  material={materials.components}
                />
              </a.group>
              <a.group
                name="Plane327_463"
                position={[62.816, -9.965, -124.901]}
                rotation={[0, -0.646, 0]}
                scale={7.883}>
                <mesh
                  name="Object_1055"
                  
                  
                  geometry={nodes.Object_1055.geometry}
                  material={materials.components}
                />
              </a.group>
              <a.group
                name="Plane328_464"
                position={[82.782, -9.965, -131.783]}
                rotation={[Math.PI, -1.156, Math.PI]}
                scale={7.883}>
                <mesh
                  name="Object_1057"
                  
                  
                  geometry={nodes.Object_1057.geometry}
                  material={materials.components}
                />
              </a.group>
              <a.group
                name="Cube121_465"
                position={[42.272, -15.391, -85.56]}
                rotation={[0, 0, -1.452]}
                scale={2.554}>
                <mesh
                  name="Object_1059"
                  
                  
                  geometry={nodes.Object_1059.geometry}
                  material={materials.components}
                />
              </a.group>
              <a.group
                name="Cube122_466"
                position={[91.798, -14.686, -164.776]}
                rotation={[0, 0, -0.007]}
                scale={2.554}>
                <mesh
                  name="Object_1061"
                  
                  
                  geometry={nodes.Object_1061.geometry}
                  material={materials.metalparts}
                />
              </a.group>
              <a.group name="Cube004_467" position={[76.314, -10.133, -141.745]} scale={1.126}>
                <mesh
                  name="Object_1063"
                  
                  
                  geometry={nodes.Object_1063.geometry}
                  material={materials.components}
                />
                <mesh
                  name="Object_1064"
                  
                  
                  geometry={nodes.Object_1064.geometry}
                  material={materials.light}
                />
              </a.group>
              <a.group
                name="Plane002_468"
                position={[-28.851, 34.403, -45.578]}
                rotation={[1.411, -0.163, -0.924]}
                scale={3.18}>
                <mesh
                  name="Object_1066"
                  
                  
                  geometry={nodes.Object_1066.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane329_469"
                position={[-20.706, 34.403, -46.865]}
                rotation={[1.798, 0.023, 1.527]}
                scale={3.18}>
                <mesh
                  name="Object_1068"
                  
                  
                  geometry={nodes.Object_1068.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane330_470"
                position={[-53.915, 34.403, -48.143]}
                rotation={[1.411, -0.163, -0.924]}
                scale={3.18}>
                <mesh
                  name="Object_1070"
                  
                  
                  geometry={nodes.Object_1070.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane331_471"
                position={[-45.769, 34.403, -49.429]}
                rotation={[1.798, 0.023, 1.527]}
                scale={3.18}>
                <mesh
                  name="Object_1072"
                  
                  
                  geometry={nodes.Object_1072.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane332_472"
                position={[-44.836, 34.403, -37.24]}
                rotation={[1.411, -0.163, -0.924]}
                scale={3.18}>
                <mesh
                  name="Object_1074"
                  
                  
                  geometry={nodes.Object_1074.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane333_473"
                position={[-36.69, 34.403, -38.526]}
                rotation={[1.798, 0.023, 1.527]}
                scale={3.18}>
                <mesh
                  name="Object_1076"
                  
                  
                  geometry={nodes.Object_1076.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane334_474"
                position={[-36.011, 34.403, -34.753]}
                rotation={[1.657, -0.163, -0.924]}
                scale={3.18}>
                <mesh
                  name="Object_1078"
                  
                  
                  geometry={nodes.Object_1078.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane335_475"
                position={[-27.865, 34.403, -36.04]}
                rotation={[1.45, 0.023, 1.527]}
                scale={3.18}>
                <mesh
                  name="Object_1080"
                  
                  
                  geometry={nodes.Object_1080.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane336_476"
                position={[-57.201, 34.403, -43.005]}
                rotation={[1.657, -0.163, -0.924]}
                scale={3.18}>
                <mesh
                  name="Object_1082"
                  
                  
                  geometry={nodes.Object_1082.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane337_477"
                position={[-49.056, 34.403, -44.292]}
                rotation={[1.45, 0.023, 1.527]}
                scale={3.18}>
                <mesh
                  name="Object_1084"
                  
                  
                  geometry={nodes.Object_1084.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane338_478"
                position={[-68.538, 61.724, -1.658]}
                rotation={[1.657, -0.163, -0.924]}
                scale={3.18}>
                <mesh
                  name="Object_1086"
                  
                  
                  geometry={nodes.Object_1086.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane339_479"
                position={[-60.393, 61.724, -2.945]}
                rotation={[1.45, 0.023, 1.527]}
                scale={3.18}>
                <mesh
                  name="Object_1088"
                  
                  
                  geometry={nodes.Object_1088.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane340_480"
                position={[-51.794, 61.724, 8.886]}
                rotation={[1.657, -0.163, -0.924]}
                scale={3.18}>
                <mesh
                  name="Object_1090"
                  
                  
                  geometry={nodes.Object_1090.geometry}
                  material={materials.nature}
                />
              </a.group>
              <a.group
                name="Plane341_481"
                position={[-43.649, 61.724, 7.599]}
                rotation={[1.45, 0.023, 1.527]}
                scale={3.18}>
                <mesh
                  name="Object_1092"
                  
                  
                  geometry={nodes.Object_1092.geometry}
                  material={materials.nature}
                />
              </a.group>
            </a.group>
          </a.group>
        </a.group>
      </a.group>
    </a.group>
  )
};
export default Island;