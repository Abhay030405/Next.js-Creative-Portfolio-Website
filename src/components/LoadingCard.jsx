"use client";
import { motion } from "framer-motion";
import clsx from "clsx";
import LoadingSkeleton from "./LoadingSkeleton";

const LoadingCard = ({ 
  className,
  showImage = true,
  showAvatar = false,
  lines = 3,
  imageHeight = "h-48"
}) => {
  return (
    <motion.div
      className={clsx(
        "custom-bg rounded-xl p-6",
        "border border-accent/30 backdrop-blur-[6px]",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="space-y-4">
        {showImage && (
          <motion.div
            className={clsx(
              "bg-accent/20 border border-accent/30 backdrop-blur-sm rounded-lg",
              imageHeight,
              "w-full"
            )}
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}
        
        <LoadingSkeleton 
          lines={lines}
          showAvatar={showAvatar}
          height="h-4"
        />
      </div>
    </motion.div>
  );
};

export default LoadingCard;