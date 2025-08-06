"use client";
import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Staff = React.memo(function Staff(props) {
  const { scene, materials } = useGLTF("/models/staff-transformed.glb");
  const modelRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  // Animate rotation and floating
  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.007;
      modelRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.3;
      // Pulse effect on click
      if (clicked) {
        const scale = 0.04 + Math.sin(state.clock.elapsedTime * 8) * 0.005;
        modelRef.current.scale.set(scale, scale, scale);
      } else if (hovered) {
        modelRef.current.scale.set(0.045, 0.045, 0.045);
      } else {
        modelRef.current.scale.set(0.04, 0.04, 0.04);
      }
    }
  });

  // Add subtle emissive (glow) to all materials
  React.useEffect(() => {
    if (materials) {
      Object.values(materials).forEach((mat) => {
        if (mat && mat.emissive) {
          mat.emissive.set("#FEFE5B");
          mat.emissiveIntensity = hovered ? 0.5 : 0.18;
        }
      });
    }
  }, [materials, hovered]);

  // Corrective rotation: rotate X by -Math.PI/2 if needed for upright
  return (
    <group
      ref={modelRef}
      position={[0, -2, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      {...props}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => { setHovered(false); setClicked(false); }}
      onClick={() => setClicked((c) => !c)}
    >
      <primitive object={scene} />
    </group>
  );
});

export default Staff;
useGLTF.preload("/models/staff-transformed.glb");
