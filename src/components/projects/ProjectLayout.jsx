"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, Calendar, Tag, Star } from "lucide-react";

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

const ProjectLayout = ({ 
  name, 
  description, 
  shortDescription,
  date, 
  demoLink, 
  githubLink, 
  image, 
  technologies, 
  category, 
  featured 
}) => {
  return (
    <motion.div
      variants={item}
      className={`group relative overflow-hidden rounded-xl border border-muted/20 bg-gradient-to-br from-background/50 to-background/30 backdrop-blur-sm transition-all duration-500 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-2 ${
        featured ? 'ring-2 ring-accent/20' : ''
      }`}
    >
      {/* Featured Badge */}
      {featured && (
        <motion.div 
          className="absolute top-4 right-4 z-10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-accent/20 text-accent border border-accent/30 backdrop-blur-sm">
            <Star className="w-3 h-3" />
            Featured
          </span>
        </motion.div>
      )}

      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute bottom-4 left-4">
          <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-background/90 text-foreground border border-muted/30 backdrop-blur-sm">
            {category}
          </span>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-300" />
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-accent transition-colors duration-300">
              {name}
            </h3>
            <p className="text-sm text-muted mb-2">{shortDescription}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted/80 mb-4 line-clamp-3 leading-relaxed">
          {description}
        </p>

        {/* Technologies */}
        {technologies && (
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-3">
              <Tag className="w-4 h-4 text-muted" />
              <span className="text-xs font-medium text-muted uppercase tracking-wide">Technologies</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {technologies.slice(0, 4).map((tech, index) => (
                <motion.span
                  key={index}
                  className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-muted/20 text-muted border border-muted/30 hover:bg-accent/20 hover:text-accent hover:border-accent/30 transition-all duration-200 cursor-default"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tech}
                </motion.span>
              ))}
              {technologies.length > 4 && (
                <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-muted/20 text-muted border border-muted/30">
                  +{technologies.length - 4} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-muted/20">
          <div className="flex items-center gap-2 text-xs text-muted">
            <Calendar className="w-3 h-3" />
            <span>{new Date(date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'short', 
              day: 'numeric' 
            })}</span>
          </div>
          
          <div className="flex items-center gap-2">
            {githubLink && (
              <motion.a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted/20 text-muted hover:bg-accent/20 hover:text-accent transition-all duration-200 hover:shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                title="View on GitHub"
              >
                <Github className="w-4 h-4" />
              </motion.a>
            )}
            {demoLink && (
              <motion.a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-accent/20 text-accent hover:bg-accent/30 transition-all duration-200 hover:shadow-lg hover:shadow-accent/20"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                title="View Live Demo"
              >
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectLayout;
