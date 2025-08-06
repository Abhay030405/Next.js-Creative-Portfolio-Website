"use client";
import { motion } from "framer-motion";
import clsx from "clsx";

const LoadingSkeleton = ({ 
  className, 
  lines = 3, 
  height = "h-4", 
  width = "w-full",
  showAvatar = false 
}) => {
  const shimmerVariants = {
    initial: { x: "-100%" },
    animate: { x: "100%" },
  };

  return (
    <div className={clsx("space-y-3", className)}>
      {showAvatar && (
        <div className="flex items-center space-x-3">
          <motion.div
            className="w-12 h-12 rounded-full bg-accent/20 border border-accent/30 backdrop-blur-sm"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <div className="flex-1 space-y-2">
            <motion.div
              className={clsx("bg-accent/20 border border-accent/30 backdrop-blur-sm rounded", height, "w-3/4")}
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.2,
              }}
            />
            <motion.div
              className={clsx("bg-accent/20 border border-accent/30 backdrop-blur-sm rounded", height, "w-1/2")}
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.4,
              }}
            />
          </div>
        </div>
      )}
      
      {Array.from({ length: lines }).map((_, index) => (
        <div key={index} className="relative overflow-hidden">
          <motion.div
            className={clsx(
              "bg-accent/20 border border-accent/30 backdrop-blur-sm rounded",
              height,
              width
            )}
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.1,
            }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent"
            variants={shimmerVariants}
            initial="initial"
            animate="animate"
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default LoadingSkeleton;