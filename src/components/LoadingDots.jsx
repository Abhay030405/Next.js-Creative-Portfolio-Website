"use client";
import { motion } from "framer-motion";
import clsx from "clsx";

const LoadingDots = ({ size = "md", className }) => {
  const sizeClasses = {
    sm: "w-2 h-2",
    md: "w-3 h-3",
    lg: "w-4 h-4",
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: [0, 1, 0],
      opacity: [0, 1, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className={clsx("flex space-x-2", className)}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className={clsx(
            "bg-accent rounded-full",
            sizeClasses[size]
          )}
          variants={dotVariants}
          custom={index}
        />
      ))}
    </motion.div>
  );
};

export default LoadingDots;