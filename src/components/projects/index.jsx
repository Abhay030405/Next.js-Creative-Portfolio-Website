"use client";
import { motion } from "framer-motion";
import ProjectLayout from "./ProjectLayout";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

const ProjectList = ({ projects }) => {

  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full max-w-7xl px-4 mx-auto lg:px-8 py-8"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-accent text-lg md:text-xl font-light italic mb-4">
            "Crafting digital dreams, one line at a time"
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            My Projects
          </h1>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Explore my latest work and creative solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => {
            return (
              <ProjectLayout
                key={index}
                {...project}
              />
            );
          })}
        </div>
      </motion.div>
    </>
  );
};

export default ProjectList;
