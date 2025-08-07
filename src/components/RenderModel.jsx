"use client";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import React, { Suspense } from "react";

const ModelLoader = () => (
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const RenderModel = ({ children, className }) => {
  return (
    <Canvas
      className={clsx("w-screen h-screen -z-20 relative", className)}
      shadows={false}
      dpr={[1, 2]}
    >
      {/* Soft ambient light for glow */}
      <ambientLight intensity={0.7} />
      {/* Subtle point light for depth */}
      <pointLight position={[0, 5, 10]} intensity={0.5} color="#FEFE5B" />
      <Suspense fallback={<ModelLoader />}>{children}</Suspense>
      <Environment preset="dawn" />
      {/* Allow user to drag/zoom/rotate the model */}
      <OrbitControls enablePan={false} enableZoom={false} />
    </Canvas>
  );
};

export default RenderModel;
