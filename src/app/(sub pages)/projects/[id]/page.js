"use client";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { projectsData } from "../../../data";
import Image from "next/image";
import bg from "../../../../../public/background/projects-background.png";

export default function ProjectDetail() {
  const params = useParams();
  const router = useRouter();
  const projectId = parseInt(params.id);
  
  const project = projectsData.find(p => p.id === projectId);
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
          <button
            onClick={() => router.back()}
            className="bg-accent/20 hover:bg-accent/30 text-accent px-6 py-3 rounded-lg transition-all duration-200"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Image
        src={bg}
        alt="Project detail background"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
        priority
        sizes="100vw"
      />
      
      <div className="min-h-screen pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => router.back()}
            className="flex items-center gap-2 text-accent hover:text-foreground mb-8 transition-all duration-200 group"
          >
            <svg 
              className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </motion.button>

          {/* Project Grid Layout */}
          <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
            {/* Project Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="col-span-full lg:col-span-8 row-span-2 custom-bg p-6 sm:p-8 rounded-xl flex flex-col items-start"
            >
              <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {project.name}
              </h1>
              <p className="text-muted text-sm md:text-base leading-relaxed">
                {project.description}
              </p>
            </motion.div>

            {/* Project Date */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="col-span-full xs:col-span-6 lg:col-span-4 custom-bg p-6 sm:p-8 rounded-xl flex items-center justify-center"
            >
              <div className="text-center">
                <p className="text-accent text-2xl sm:text-3xl font-bold">
                  {new Date(project.date).toLocaleDateString("en-GB", { 
                    year: "numeric", 
                    month: "short", 
                    day: "numeric" 
                  })}
                </p>
                <p className="text-muted text-sm">Project Date</p>
              </div>
            </motion.div>

            {/* Project Images */}
            {project.images && project.images.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="col-span-full custom-bg p-6 sm:p-8 rounded-xl"
              >
                <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">Project Screenshots</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.images.map((image, index) => (
                    <div key={index} className="relative group overflow-hidden rounded-xl">
                      <img
                        src={image}
                        alt={`${project.name} screenshot ${index + 1}`}
                        className="w-full h-32 md:h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Tech Stack */}
            {project.techStack && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="col-span-full sm:col-span-6 custom-bg p-6 sm:p-8 rounded-xl"
              >
                <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">Technologies Used</h2>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-semibold tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Features */}
            {project.features && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="col-span-full sm:col-span-6 custom-bg p-6 sm:p-8 rounded-xl"
              >
                <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">Key Features</h2>
                <div className="space-y-2">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Detailed Description */}
            {project.detailedDescription && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="col-span-full custom-bg p-6 sm:p-8 rounded-xl"
              >
                <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">About This Project</h2>
                <div className="space-y-3">
                  {Array.isArray(project.detailedDescription) 
                    ? project.detailedDescription.map((paragraph, index) => (
                        <p key={index} className="text-muted text-sm leading-relaxed">
                          {paragraph}
                        </p>
                      ))
                    : <p className="text-muted text-sm leading-relaxed">{project.detailedDescription}</p>
                  }
                </div>
              </motion.div>
            )}

            {/* Project Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="col-span-full custom-bg p-6 sm:p-8 rounded-xl"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">Project Links</h2>
              <div className="flex flex-wrap gap-4">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-foreground px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View on GitHub
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-accent/20 hover:bg-accent/30 text-accent px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
