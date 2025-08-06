"use client";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      type: "spring",
      stiffness: 80,
      damping: 16,
    },
  }),
};

export default function AboutLanding() {
  return (
    <div className="relative w-full flex flex-col items-center justify-center py-16">
      <motion.div
        className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2"
        initial="hidden"
        animate="show"
      >
        {/* Name - Ensure one line and scaling */}
        <motion.h1
          className="font-bold text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-accent whitespace-nowrap"
          variants={textVariants}
          custom={1}
        >
          Abhay Agarwal
        </motion.h1>
        {/* Down Arrow */}
        <motion.div
          className="mt-8 flex justify-center"
          initial={{ y: 0 }}
          animate={{ y: [0, 16, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="w-12 h-12 text-accent" strokeWidth={2.5} />
        </motion.div>
      </motion.div>
    </div>
  );
} 