"use client";
import { motion } from "framer-motion";
import clsx from "clsx";
import LoadingSpinner from "./LoadingSpinner";

const LoadingScreen = ({ 
  message = "Loading...", 
  showSpinner = true,
  className 
}) => {
  return (
    <motion.div
      className={clsx(
        "fixed inset-0 z-50 flex items-center justify-center",
        "bg-background/80 backdrop-blur-md",
        className
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="text-center space-y-6">
        {showSpinner && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <LoadingSpinner size="xl" />
          </motion.div>
        )}
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-2"
        >
          <h2 className="text-2xl font-semibold text-foreground">
            {message}
          </h2>
          <div className="flex justify-center">
            <LoadingDots size="md" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const LoadingDots = ({ size = "md" }) => {
  const sizeClasses = {
    sm: "w-2 h-2",
    md: "w-3 h-3",
    lg: "w-4 h-4",
  };

  return (
    <div className="flex space-x-2">
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className={clsx("bg-accent rounded-full", sizeClasses[size])}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.2,
          }}
        />
      ))}
    </div>
  );
};

export default LoadingScreen;