"use client";
import { motion } from "framer-motion";
import clsx from "clsx";
import LoadingSpinner from "./LoadingSpinner";

const LoadingButton = ({ 
  children, 
  loading = false, 
  loadingText = "Loading...",
  disabled = false,
  className,
  onClick,
  type = "button",
  size = "md",
  variant = "primary"
}) => {
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const variantClasses = {
    primary: "bg-accent/20 border-accent/30 text-accent hover:bg-accent/30",
    secondary: "bg-background/20 border-accent/20 text-foreground hover:bg-background/30",
    outline: "bg-transparent border-accent/30 text-accent hover:bg-accent/10",
  };

  return (
    <motion.button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={clsx(
        "relative flex items-center justify-center space-x-2",
        "border border-solid backdrop-blur-sm rounded-lg",
        "transition-all duration-200 ease-in-out",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        "focus:outline-none focus:ring-2 focus:ring-accent/50",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      whileHover={!disabled && !loading ? { scale: 1.02 } : {}}
      whileTap={!disabled && !loading ? { scale: 0.98 } : {}}
    >
      {loading && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex-shrink-0"
        >
          <LoadingSpinner size="sm" />
        </motion.div>
      )}
      
      <motion.span
        animate={loading ? { opacity: 0.7 } : { opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {loading ? loadingText : children}
      </motion.span>
    </motion.button>
  );
};

export default LoadingButton;