"use client";
import { motion } from "framer-motion";
import clsx from "clsx";

const LoadingSpinner = ({ size = "md", className }) => {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-24 h-24",
  };

  return (
    <div className={clsx("flex items-center justify-center", className)}>
      <motion.div
        className={clsx(
          "border-2 border-accent/30 rounded-full",
          sizeClasses[size]
        )}
        style={{
          borderTopColor: "rgb(254, 254, 91)",
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default LoadingSpinner;