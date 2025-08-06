"use client";
import { motion } from "framer-motion";
import clsx from "clsx";

const LoadingPulse = ({ size = "md", className }) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-24 h-24",
  };

  return (
    <div className={clsx("flex items-center justify-center", className)}>
      <motion.div
        className={clsx(
          "rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30",
          sizeClasses[size]
        )}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default LoadingPulse;