"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 120, damping: 18 } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
};

const ProjectList = ({ projects }) => {
  const [modalProject, setModalProject] = useState(null);

  const handleOpenModal = (project) => setModalProject(project);
  const handleCloseModal = () => setModalProject(null);

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
                onViewDetails={() => handleOpenModal(project)}
              />
            );
          })}
        </div>
      </motion.div>

      {/* Modal for View Details */}
      <AnimatePresence>
        {modalProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="bg-background rounded-2xl shadow-2xl p-0 max-w-2xl w-full relative overflow-hidden"
              style={{ margin: '20vh 20vw', maxHeight: '60vh', display: 'flex', flexDirection: 'column' }}
              onClick={e => e.stopPropagation()}
            >
              {/* Sticky Close Button */}
              <div className="sticky top-0 z-10 flex justify-end bg-background/80 p-4">
                <button
                  className="text-3xl text-muted hover:text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-150"
                  onClick={handleCloseModal}
                  aria-label="Close"
                  tabIndex={0}
                  autoFocus
                >
                  &times;
                </button>
              </div>
              <div className="overflow-y-auto px-8 pb-8" style={{ maxHeight: 'calc(60vh - 64px)' }}>
                <h2 className="text-3xl font-bold mb-2 text-foreground">{modalProject.name}</h2>
                <div className="flex flex-col md:flex-row gap-4 mb-4">
                  {/* Images horizontal scroll */}
                  <div className="flex gap-3 overflow-x-auto pb-2">
                    {modalProject.images && modalProject.images.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={modalProject.name + ' screenshot ' + (i+1)}
                        className="rounded-lg object-cover w-40 h-28 border border-white/10 shadow"
                        style={{ minWidth: '10rem' }}
                      />
                    ))}
                  </div>
                </div>
                {/* Tech stack badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {modalProject.techStack && modalProject.techStack.map((tech, i) => (
                    <span key={i} className="bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-semibold tracking-wide">
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Features list */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-foreground mb-1">Key Features:</h3>
                  <ul className="list-disc list-inside text-muted text-sm">
                    {modalProject.features && modalProject.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
                {/* Detailed Description */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-foreground mb-1">About this project:</h3>
                  {Array.isArray(modalProject.detailedDescription)
                    ? modalProject.detailedDescription.map((p, i) => (
                        <p key={i} className="text-muted mb-2 text-sm">{p}</p>
                      ))
                    : <p className="text-muted text-sm">{modalProject.detailedDescription}</p>
                  }
                </div>
                {/* Links */}
                <div className="flex flex-wrap gap-3 mb-4">
                  {modalProject.githubLink && (
                    <a
                      href={modalProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-foreground px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  )}
                  {modalProject.liveLink && (
                    <a
                      href={modalProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-accent/20 hover:bg-accent/30 text-accent px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
                <div className="text-sm text-muted mb-2">
                  <span className="font-semibold">Date:</span> {new Date(modalProject.date).toLocaleDateString("en-GB", { year: "numeric", month: "short", day: "numeric" })}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectList;
